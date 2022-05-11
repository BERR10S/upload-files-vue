<template>
  <b-container class="bg-light p-4 mt-4 border border-secondary">
    <h3 class="title">Upload files - vue</h3>
    <div class="bg-light">
      <uploadForm></uploadForm>
    </div>
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue'
import uploadForm from '@/components/upload-form.vue' // @ is an alias to /src

export default Vue.extend({
  name: 'Content',
  components: {
    uploadForm
  },
  data () {
    return {
      activeTab: 0,
      isSelected: true
    }
  },
  mounted () {
  },
  methods: {},
  computed: {}
})
</script>
<!--<style lang="scss">-->
<!--</style>-->
