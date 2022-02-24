<template>
  <ValidationProvider
    v-slot="validation"
    tag="div"
    :rules="rules"
    :name="name"
    :vid="vid"
    class="flex w-full flex-col pb-2"
  >
    <span class="py-1 font-medium text-slate-800"><slot></slot></span>
    <input
      v-model="currentValue"
      :type="type"
      class="h-10 w-full rounded-md border border-gray-200 text-slate-800 shadow"
      :placeholder="placeholder"
      :class="{ 'border-rose-700': validation.failed }"
    />
    <div v-show="validation.failed" class="flex text-rose-700">
      <span class="material-icons text-sm">error</span>
      <span class="pt-1 pl-1 text-xs">
        {{ validation.errors[0] }}
      </span>
    </div>
  </ValidationProvider>
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
    rules: {
      type: [String, Object],
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    vid: {
      type: String,
      default: undefined,
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      currentValue: undefined,
    }
  },
  watch: {
    currentValue(val) {
      this.$emit('input', val)
    },
  },
}
</script>
