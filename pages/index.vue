<template>
  <div class="flex flex-col">
    <h1 class="text-2xl font-semibold text-white drop-shadow">
      Proyek
      <i>Real Count</i>
      anda
    </h1>
    <div class="grid grid-cols-3 gap-4 py-8">
      <NuxtLink
        to="/newproject"
        tag="div"
        class="flex h-48 cursor-pointer items-center justify-center rounded-md border border-gray-200 bg-white shadow-md"
      >
        <div class="flex flex-col">
          <span class="material-icons text-center text-5xl text-indigo-900">
            add
          </span>
          <span class="font-medium text-indigo-900">Buat proyek baru</span>
        </div>
      </NuxtLink>
      <ProjectsCard v-for="item in items" :key="item.id" :item="item" />
      <ProjectsCard v-for="item in items" :key="item.id" :item="item" />
    </div>
  </div>
  <!-- <ProjectCreationBaseModal v-if="newModal" @close-modal="showModal" /> -->
</template>

<script>
export default {
  layout: 'console',
  data() {
    return {
      newModal: true,
      items: [
        {
          id: 1,
          title: 'lala',
          image: '/politician.jpg',
        },
        {
          id: 2,
          title: 'lala',
          image: '/politician.jpg',
        },
        {
          id: 3,
          title: 'lala',
          image: '/politician.jpg',
        },
      ],
    }
  },
  methods: {
    showModal() {
      this.newModal = !this.newModal
    },
  },
}
</script>
