<template>
  <b-container>
    <div class="bg-white mb-4 options-container">
      <b-form-checkbox-group
        v-model="selected"
        :options="options"
        value-field="item"
        text-field="name"
        disabled-field="disabled"
        switches
      />
      <b-button v-if="selected.length > 0" v-b-modal.modal-1> Seleccionar categorias</b-button>
    </div>
    <div class="bg-white">
      <div class="file-loading">
        <input id="input-files" class="bg-white" ref="input-files" name="input-files[]" type="file" multiple>
      </div>
    </div>

    <b-modal id="modal-1" title="Listado de categorias">
      <b-form-checkbox-group
        v-model="selectedCategories"
        :options="listCategories"
        class="mb-3"
        value-field="item"
        text-field="name"
        disabled-field="disabled"
        switches
      />
    </b-modal>
  </b-container>
</template>

<script>
import Vue from 'vue'
import 'bootstrap/dist/js/bootstrap.bundle.js' // Necesario para file input
import 'bootstrap-icons/font/bootstrap-icons.css' // Necesario para file input
import 'bootstrap-fileinput/css/fileinput.min.css'
import fileinput from 'bootstrap-fileinput/js/fileinput.min.js'
import 'bootstrap-fileinput/themes/fa/theme.min.js'

window.fileinput = fileinput
// Importamos JQuery
const $ = require('jquery')
// Lo declaramos globalmente
// @ts-ignore
window.$ = $
require('bootstrap-fileinput/js/locales/es.js')
export default Vue.extend({
  name: 'uploadForm',
  data () {
    return {
      loading: false,
      btnDisable: true,
      contentResourceAllowed: 0,
      inputFile: null,
      options: [
        { item: 'contenido', name: 'Crear contenido', disabled: false },
        { item: 'recurso', name: 'Crear recurso', disabled: false }
      ],
      selected: [],
      selectedFiles: [],
      listCategories: [
        { item: 'cat1', name: 'Categoria 1', disabled: false },
        { item: 'cat2', name: 'Categoria 2', disabled: false }
      ],
      selectedCategories: []
    }
  },
  mounted () {
    this.initInput()
  },
  methods: {
    initInput () {
      const that = this
      this.inputFile = $('#input-files')
      this.inputFile.fileinput({
        browseClass: 'btn btn-primary btn-block',
        showCancel: false,
        showCaption: false,
        showRemove: false,
        showUpload: false,
        language: 'es',
        // uploadUrl: '/dirección/para subir',
        browseOnZoneClick: true,
        browse: true,
        maxFileCount: 10,
        maxFilePreviewSize: 25000000,
        allowedFileExtensions: ['jpg', 'png', 'mp3', 'mp4']
      })
      this.inputFile.on('filebatchselected', function (event, files) {
        that.selectedFiles = files
        let imageElement = 0

        Array.from(files).forEach(file => {
          console.log(file)
          if (file.type.includes('image/')) {
            imageElement++
          }
        })

        let disabled = false
        if (imageElement > 0) {
          disabled = true
        }

        that.stateCheckbox(disabled)
      })
      this.inputFile.on('fileselectnone', function (event) {
        that.stateCheckbox(false)
        that.selected = []
        that.selectedFiles = []
      })
      this.inputFile.on('filecleared', function (event) {
        that.stateCheckbox(false)
        that.selectedFiles = []
      })
    },
    stateCheckbox (disabled = false) {
      if (disabled) {
        this.selected = []
      }

      this.options = [
        { item: 'contenido', name: 'Crear contenido', disabled: disabled },
        { item: 'recurso', name: 'Crear recurso', disabled: disabled }
      ]
    }

  }
})
</script>

<style lang="scss">
.options-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: space-around;
  border-radius: 5px;
  border: 1px solid #ddd;
  padding: 8px;
  margin-bottom: 5px;
  min-height: 6vh;
}
</style>
