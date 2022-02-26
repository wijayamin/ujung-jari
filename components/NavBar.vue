<template>
  <div class="sticky top-0 z-40 flex items-center bg-slate-800 py-2 px-4">
    <NuxtLink class="flex" to="/"
      ><img src="/icon.png" class="h-8" />
      <div class="px-3 font-logo text-2xl font-medium text-white">
        Ujungjari
      </div>
    </NuxtLink>
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
