<template>
  <div>
    <b-button class="btn-login" @click="isOpened=true">Cadastre um Serviço</b-button>
    <b-modal :active.sync="isOpened">
      <div class="card">
        <div class="card-content">
          <div class="content">
            <h1>Service</h1>
            <h3></h3>

            <b-field label="Name">
              <b-input
                type="text"
                v-model="struct.data.name"
                name="name"
              ></b-input>
            </b-field>
            <b-field label="Descrição">
              <b-input maxlength="280" type="textarea" v-model="struct.data.descricao"></b-input>
            </b-field>
            <b-field label="Imagem">
              <input type="file" accept="image/jpeg" @change="uploadImage"/>
              <img :src="struct.data.previewImage" class="uploading-image"/>
            </b-field>

            <button @click="service()" class="button is-primary">Service</button>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>

export default {
  name: 'Service',
  props: ['user'],
  data () {
    return {
      isOpened: false,
      struct: {
        table: 'services',
        data: {
          previewImage: null
        }
      }
    }
  },
  methods: {
    service () {
      this.$store.dispatch('saveData', this.struct)
      this.isOpened = false
    },
    uploadImage (e) {
      const image = e.target.files[0]
      const reader = new FileReader()
      reader.readAsDataURL(image)
      reader.onload = e => {
        this.struct.data.previewImage = e.target.result
        console.log(this.previewImage)
      }
    }
  }
}
</script>

<style src="@/scss/_Service.scss" lang="scss" />
