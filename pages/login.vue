<template>
  <div class="flex flex-col py-4 px-8">
    <h1 class="text-xl font-semibold text-slate-900">Masuk dengan akun anda</h1>
    <p class="py-2 text-sm text-slate-700">
      Selamat datang di
      <span class="text-violet-900">Ujung Jari</span>
    </p>
    <div v-show="authError" class="py-2 shadow">
      <div class="w-full rounded-md bg-rose-500">
        <p class="p-2 text-white">{{ authError }}</p>
      </div>
    </div>
    <div class="py-4">
      <!-- <AuthGoogleSignInButton /> -->
    </div>
    <div class="flex w-full flex-row">
      <hr class="mt-2.5 w-full border border-gray-400" />
      <span class="px-2 text-sm text-gray-600">atau</span>
      <hr class="mt-2.5 w-full border border-gray-400" />
    </div>
    <ValidationObserver v-slot="{ invalid }">
      <FormInput
        v-model="email"
        type="email"
        rules="required|email"
        placeholder="Alamat email anda"
        name="Alamat Email"
      >
        Alamat email
      </FormInput>
      <FormInput
        v-model="password"
        type="password"
        rules="required"
        name="Password"
        placeholder="Password anda"
      >
        Password
      </FormInput>
      <div class="py-3">
        <button
          class="h-10 w-full rounded-md border border-gray-200 bg-slate-800 text-white shadow-md disabled:bg-slate-200 disabled:text-slate-500"
          :disabled="invalid"
          @click="signInWithEmail"
        >
          MASUK
        </button>
      </div>
    </ValidationObserver>
    <span class="py-2 text-sm text-slate-700 underline">Lupa password?</span>

    <div class="flex w-full flex-row">
      <hr class="mt-2.5 flex-1 border border-gray-400" />
      <span class="flex-initial px-2 text-sm text-gray-600">
        Belum punya akun?
      </span>
      <hr class="mt-2.5 flex-1 border border-gray-400" />
    </div>
    <div class="flex py-3">
      <NuxtLink
        to="/register"
        class="w-full rounded-md border border-gray-200 bg-slate-800 py-2 text-center text-white shadow-md"
      >
        DAFTAR
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'auth',
  data() {
    return {
      email: '',
      password: '',
      authError: false,
      user: {},
    }
  },
  methods: {
    signInWithEmail() {
      this.authError = false
      this.$auth
        .loginWith('laravelSanctum', {
          data: {
            email: this.email,
            password: this.password,
          },
        })
        .catch(({ response }) => {
          this.authError = response.data.message
        })
    },
  },
}
</script>
