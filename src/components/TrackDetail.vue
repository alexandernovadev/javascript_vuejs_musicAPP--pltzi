<template lang="pug">
.container(v-if="track && track.id")
    .columns
        .column.is-3.has-text-centered
            figure.media-left
                p.image
                    img(:src="track.album.images[0].url")
                p.button-bar
                    a.button.is-primary.is-large
                        span.icon(@click="selectTrack") ▶️

        .column.is-8
            .panel
                .panel.heading
                    h1.title {{getTitle}}
                .pnale-block
                    article.media
                        .media-content
                            .content
                                ul(v-for="(v,t) in track")
                                    li
                                        strong {{ t }}: &nbsp;
                                        span {{ v }}
                        
                        nav.level
                            .level-left
                                a.level-item

</template>

<script>
import { mapActions, mapState, mapGetters} from 'vuex'
import trackService from '@/services/track'
import trackMixin from '@/mixins/track'

export default {
  mixins: [ trackMixin],
  components: {},

  computed: {
    ...mapState(['track']),
    ...mapGetters(['getTitle'])
  },
  // Reemplazar la data con el Store
  // data() {
  //   return {
  //     track: {}
  //   };
  // },
  created() {
    const id = this.$route.params.id;
    
    if (!this.track || !this.track.id || this.track.id !== id) {
      this.getTrackByID({id})
        .then(()=>{
          console.log('Track Loaded ...');
        })
    }

    // Si existe la track en el state no la cargue

    // Sin el strore SE HACIA UNA PETICION HTTP
    // trackService.getById(id).then(res => {
    //   // console.log(res);
    //   this.track = res;
    // });
  },

  methods: {
    ...mapActions(['getTrackByID'])
  },
  
};
</script>

<style lang="scss" scoped>
.columns {
  margin: 20px;
}
.button-bar {
  margin-top: 20px;
}
</style>
