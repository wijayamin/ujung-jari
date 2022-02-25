<template>
  <div class="static top-0 pt-1">
    <button
      class="h-8 w-8 rounded-full border-none bg-cover"
      :style="{ 'background-image': 'url(' + auth.user.image + ')' }"
      @click="$emit('show-profile-menu')"
    ></button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState({
    auth: (state) => state.auth,
  }),
}
</script>
