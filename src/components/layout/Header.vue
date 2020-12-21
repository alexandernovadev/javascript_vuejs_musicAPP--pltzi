<template lang="pug">
  section.hero.is-dark
    .hero-head
      header.navbar
        .container
          .navbar-start
              .navbar-item
                router-link.is-active.navbar-item(to="/") 
                  strong 📻📻 MUSIC APP 📻📻
          .navbar-end
            a.navbar-item(@click="selectLang('es')") 🇪🇸
            a.navbar-item(@click="selectLang('en')") 🇱🇷
            a.navbar-item(@click="selectLang('pt')") 🇵🇹
            router-link.navbar-item(to="search") {{ $t('search') }}
            router-link.navbar-item(to="about")  {{ $t('about') }}

    .hero-body
      .container.has-text-centered
        h1.title {{ $t('title1') }}
        h2.subtitle {{ $t('title2') }}
        pm-player 
</template>

<script>
import PmPlayer from '@/components/Player.vue'
export default {
  components : {PmPlayer},
  methods: {
    selectLang(lang) {
      this.$i18n.locale = lang
    }
  }
}
</script>
