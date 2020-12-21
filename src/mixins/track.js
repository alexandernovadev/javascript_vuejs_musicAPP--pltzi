const trackMixin = {
  methods: {
     selectTrack() {
      if (!this.track.preview_url) {
        return;
      }

      this.$store.commit('setTrack', this.track)

      /* REEMPLAZADO POR EL STORE DE VUEX */
      // Emitir track al dad
       //this.$emit("select", this.track.id);

      // Traer plugin 
       //this.$bus.$emit("set-track", this.track);
    }
  },
}

export default trackMixin