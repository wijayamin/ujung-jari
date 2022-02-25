<template>
  <div class="sticky top-0 z-40 flex items-center bg-slate-800 py-2 px-4">
    <div class=""><img src="/icon.png" class="mr-3 h-8" /></div>
    <div class="font-logo text-xl font-medium text-white">Ujungjari</div>
    <!-- <div class="mr-auto pl-10">
      <h1>{{ user }}</h1>
    </div> -->
    <div class="ml-auto">
      <ProfileIcon @show-profile-menu="$emit('show-profile-menu')" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState({
    user: (state) => state.auth.user,
  }),
}
</script>
