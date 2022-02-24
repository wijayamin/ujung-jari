<template>
  <div
    class="flex min-h-screen w-full items-center justify-center bg-[url('/background.jpg')] bg-cover"
  >
    <div
      class="relative flex min-h-max w-2/4 overflow-clip rounded-md bg-gray-200 shadow-md"
    >
      <div
        class="background absolute top-0 right-0 h-full w-5/12 bg-slate-800"
      ></div>
      <Nuxt class="w-7/12" />
    </div>
    <div class="absolute bottom-0 right-0 p-5">
      <p class="font-body text-sm font-semibold text-neutral-50">
        Ilustrasi saksi pemilu. (Antara Foto / M Agung Rajasa)
      </p>
    </div>
  </div>
</template>
<style scoped>
.background {
  background-image: url('/computer-login-amico.svg');
  background-repeat: no-repeat;
  background-size: 31rem auto;
  background-position: right -33px bottom -96px;
  transform: scaleX(-1);
}
</style>
