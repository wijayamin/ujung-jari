<template>
  <div
    class="relative h-48 overflow-clip rounded-md border border-gray-200 bg-white shadow-md"
  >
    <div
      class="absolute -right-14 -bottom-14 h-48 w-48 rounded-full border border-gray-200 bg-cover"
      :style="bgImage"
    ></div>
    <div class="flex flex-col px-3 py-4">
      <h1 class="text-xl font-medium">{{ item.title }}</h1>
      <i>lorem ipsum</i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default() {
        return {
          title: '',
          status: '',
          image: '/politician.jpg',
        }
      },
    },
  },
  computed: {
    bgImage() {
      return {
        'background-image': 'url(' + this.item.image + ')',
      }
    },
  },
}
</script>
