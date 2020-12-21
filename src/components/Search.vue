<template lang="pug"> 
  main
    transition(name="move")
      PmNotification(v-show="showNotification")
        p(slot="body") No se encontraron resultados

 
    section.section
      nav.navbar
        .field.has-addons
          .control.is-expanded
            input.input(
              type="text"
              :placeholder="$t('label_search')"
              v-model="searchQuery",
              @keyup.enter="search")
          .control
            button.button.is-info(@click="search") {{ $t('search') }}
          .control
            button.button.is-danger &times;
          .control
            button.button
              span.is-size-7 {{ $t('songs') }} :  {{ searchMessage }}

      transition(name="move")
          pmLoader(v-show="isLoading")

      .container.custom(v-show="!isLoading")
        .columns.is-multiline
          .column.is-one-quarter(v-for="t in tracks") 
            pmTrack(
              v-blur="t.preview_url"
              :class="{'is-active': t.id === selectedTrack}"
              :track="t",
              @select="setSelectedTrack")

</template>

<script>
import trackService from "@/services/track";
import PmTrack from "@/components/Track";
import PmLoader from "@/components/shared/Loader";
import PmNotification from "@/components/shared/Notification";


export default {

  components:{
    PmTrack,
    PmLoader,
    PmNotification
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      searchQuery: "",
      tracks: [],
      isLoading: false,
      selectedTrack: '',
      showNotification: false
    };
  },
  watch: {
    showNotification() {
      if( this.showNotification) {
        setTimeout(() => {
          this.showNotification = false
        }, 3000);
      }
    }
  },
  methods: {
    // this.$set(this.person, 'lastName', 'Anaya')
    // Crear una nueva propiedad del objeto

    /**LIFE CICLE */
    // beforeCreate: se ejecuta justo después de la inicialización de la instancia.

    // created: se ejecuta cuando la instancia y los eventos, las computed properties, el data
    //y los métodos están creados. Normalmente se utiliza para inicializar propiedades del objeto 
    // data con consultas HTTP Get.

    // beforeMount: se ejecuta justo antes de que se añada al DOM.
    // mounted: se ejecuta después de añadirlo al DOM. Se puede utilizar para inicializar librerías que dependan del DOM.
    // beforeUpdate: se ejecuta cuando el data cambia, pero el DOM aun no ha plasmado los cambios.
    // updated: se ejecuta después de que el data cambie y el DOM muestre estos cambios.
    // beforeDestroy: se ejecuta justo antes de eliminar la instancia.
    // destroyed: se ejecuta cuando la instancia, los eventos, directivas e hijos del componente se han eliminado.
    search() {
      if (this.searchQuery.length > 1) {
        this.isLoading = true
        trackService.search(this.searchQuery).then(res => {
          console.log(res);
          this.showNotification = res.tracks.total === 0
  
          this.tracks = res.tracks.items;
          this.isLoading = false

        });
        console.log("Mi search es ", this.searchQuery);
      }
    },
    setSelectedTrack(id) {
      // Recibe el evento de Hijo
      this.selectedTrack = id
    }
  },
  computed: {
    searchMessage() {
      return `${this.tracks.length}`;
    }
  }
};
</script>

<style lang="scss">
.custom {
  margin-top: 30px;
}
// reslatar elemet selected
.is-active {
  border: 3px #23d160 solid;
}
.move-enter-active, .move-leave-active{
  transform: translateX(0);
  transition: all .3s linear;
} 

.move-enter, .move-leave-to {
  transform: translateX(100%);
}
</style>
