<template>
  <div
    class="absolute top-0 left-0 z-50 min-h-screen min-w-full"
    @click="$emit('toggle-profile-menu')"
  >
    <div
      class="sticky top-16 right-2 float-right max-w-fit rounded-lg border border-gray-200 bg-white shadow-md shadow-gray-400"
    >
      <div class="flex flex-col">
        <div class="relative my-4 mx-32">
          <div
            class="h-24 w-24 rounded-full bg-cover"
            :style="{ 'background-image': 'url(' + auth.user.image + ')' }"
          ></div>
          <button
            class="absolute bottom-0 right-1 h-8 w-8 rounded-full border border-gray-200 bg-white pt-0.5 shadow shadow-gray-400"
          >
            <span class="font-icon text-xl text-gray-600">photo_camera</span>
          </button>
        </div>
        <div class="flex justify-center">
          <span class="text-lg font-medium">{{ auth.user.name }}</span>
        </div>
        <div class="flex justify-center">
          <span class="text-md font-light text-gray-600">{{
            auth.user.email
          }}</span>
        </div>
        <div class="flex justify-center py-4">
          <button
            class="rounded-full border border-gray-300 px-3 py-1 font-medium text-slate-800"
          >
            Kelola Akun Anda
          </button>
        </div>
        <hr class="border border-gray-100" />
        <div class="flex justify-center py-4">
          <button
            class="rounded-sm border border-gray-300 px-3 py-1 font-medium text-slate-800"
            @click.prevent="logout"
          >
            Keluar
          </button>
        </div>
        <hr class="border border-gray-100" />
        <div class="flex flex-row justify-center gap-6 py-2">
          <a href="" class="text-xs text-slate-600">Kebijakan Privasi</a>
          <a href="" class="text-xs text-slate-600">Persyaratan Layanan</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState({
    auth: (state) => state.auth,
  }),
  methods: {
    async logout() {
      await this.$auth.logout()
    },
  },
}
</script>
