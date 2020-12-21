import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages  = {
  en: {
    search: 'Search',
    about: 'About',
    title1: 'Your Favorite Music',
    title2: 'Songs for your trip',
    label_search : 'Search Songs',
    loading: 'Loading',
    songs: 'Songs',
    madeby: 'Made by'
  
  },
  es: {
    search: 'Buscar',
    about: 'Nosotros',
    title1: 'Tu musica Favorita',
    title2: 'Canciones para tu viaje',
    label_search : 'Buscar Canciones',
    loading: 'Cargando',
    songs: 'Canciones',
    madeby: 'Creada por'
   
  },
  pt: {
    search: 'Procurar',
    about: 'Nós',
    title1: 'Sua musica favorita',
    title2: 'Músicas para sua viagem',
    label_search : 'Pesquisar músicas',
    loading: 'Carregando',
    songs: 'Músicas',
    madeby: 'Feita por'
  }
}

const i18n  = new VueI18n({
  messages,
  locale: 'en'
})

export default i18n