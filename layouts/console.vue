<template>
  <div class="full-width min-h-screen bg-gray-200">
    <ConsoleAdminNavBar @show-profile-menu="toggleProfileMenu" />
    <ProfileMenu
      v-show="profileMenu"
      @toggle-profile-menu="toggleProfileMenu"
    />
    <div class="relative -mb-44 h-72 bg-slate-800">
      <div class="banner absolute h-72 w-full"></div>
    </div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      profileMenu: false,
    }
  },
  methods: {
    toggleProfileMenu() {
      this.profileMenu = !this.profileMenu
    },
  },
}
</script>

<style scoped>
.banner {
  background-image: url('/digital-personal-files-amico.png'),
    url('/business-analytics-amico.png');
  background-size: 22rem auto, 22rem auto;
  background-position: left -85px bottom -58px, right -42px bottom -42px;
  background-repeat: no-repeat;
}
</style>
