<template>
  <div>
    <b-button v-if="isRegister" class="btn-data" @click="isOpened=true">Cadastre um {{ stringColection }}</b-button>
    <b-modal :active.sync="isOpened">
      <div class="card">
        <div class="card-content">
          <div class="content">
            <h1>{{ stringColection }}</h1>
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

            <div class="columns flex-wrap">
              <b-field class="column is-4 campo-extra" label="Imagem">
                <img :src="struct.data.previewImage" class="uploading-image"/>
                <input type="file" accept="image/jpeg" @change="uploadImage"/>
              </b-field>

              <div class="column is-2 campo-extra" v-for="(row, index) in struct.data.campos" :key="index">
                <b-field label="Campo Nome">
                  <b-input v-model="row.nome"></b-input>
                </b-field>
                <b-field label="Campo Valor">
                  <b-input v-model="row.valor"></b-input>
                </b-field>
                <b-field>
                  <a v-on:click="removeElement(index);"
                    style="cursor: pointer"
                  >Remover</a>
                </b-field>
              </div>
            </div>

            <b-button class="button add-campo-extra" @click="addRow()">
              <p>ADICIONAR CAMPO</p>
            </b-button>
            <button class="button btn-save-data" @click="save()">Salvar</button>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>

export default {
  name: 'RegisterData',
  props: ['user', 'colection', 'stringColection', 'isOpened', 'isRegister'],
  created () {
    this.addRow()
    this.$parent.$on('update', this.setValue)
  },
  data () {
    return {
      struct: {
        table: this.colection,
        data: {
          previewImage: null,
          campos: []
        }
      }
    }
  },
  methods: {
    setValue: function (singleData) {
      this.struct.data = singleData
    },
    addRow: function () {
      this.struct.data.campos.push({
        nome: '',
        valor: ''
      })
    },
    removeElement: function (index) {
      this.struct.data.campos.splice(index, 1)
    },
    save () {
      if (this.user.cargo === 'client') {
        this.struct.data.user_id = this.user.id
      }
      this.$store.dispatch('saveData', this.struct)
      this.isOpened = false
      this.$emit('reload')
      this.$buefy.toast.open({
        duration: 5000,
        message: 'Adicionado com sucesso, por favor recarregue a pagina!',
        position: 'is-top-right',
        type: 'is-success'
      })
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

<style src="@/scss/_RegisterData.scss" lang="scss" />
