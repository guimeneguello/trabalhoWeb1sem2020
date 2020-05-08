<template>
  <div>
    <h1>{{ stringColection }}</h1>
    <div class="columns flex-wrap">
      <div class="column is-12"><p v-if="datasColection.length == 0">Não há registrados de {{ stringColection }}.</p></div>
      <div class="column is-12-mobile is-3 collection-card"
      v-for="dataSingle in datasColection" :key="dataSingle.id">
        <div class="collection-info shadow" @click="isOpened=true, info(dataSingle)">
          <h1>{{ dataSingle.name }}</h1>
          <img :src="dataSingle.previewImage" class="collection-image"/>
          <p>{{ dataSingle.descricao }}</p>
        </div>
        <div v-if="user.cargo == permission" class="collection-bottons">
            <b-button class="button btn-delete" @click="deletar(dataSingle)">Excluir</b-button>
            <b-button class="button btn-edit" @click="editar(dataSingle), isEdit=true">Editar</b-button>
          </div>
      </div>
    </div>

    <b-modal :active.sync="isOpened">
      <div class="card">
        <div class="card-content collection-card">
          <div class="content collection-info">
            <h1>{{ dataInfo.name }}</h1>
            <img :src="dataInfo.previewImage" class="collection-image"/>
            <p>{{ dataInfo.descricao }}</p>

            <div class="columns flex-wrap">
              <div class="column is-2 campo-extra" v-for="(row, index) in dataInfo.campos" :key="index">
                <b-field :label="row.nome">
                  {{ row.valor }}
                </b-field>
              </div>
            </div>
          </div>

          <div v-if="user.cargo == permission" class="collection-bottons">
              <b-button class="button btn-delete" @click="deletar(dataInfo)">Excluir</b-button>
              <b-button class="button btn-edit" @click="editar(dataInfo), isEdit=true">Editar</b-button>
            </div>
        </div>
      </div>
    </b-modal>

    <RegisterData :user="user" :colection="colection" :stringColection="stringColection"  :isOpened="isEdit" :isRegister="false"/>
  </div>
</template>
<script>
import RegisterData from '@/components/RegisterData.vue'

export default {
  name: 'ContentColection',
  props: ['colection', 'stringColection', 'permission'],
  components: {
    RegisterData
  },
  data () {
    return {
      user: {},
      datasColection: {},
      isOpened: false,
      isEdit: false,
      dataInfo: {
        campos: []
      }
    }
  },
  created () {
    this.user = localStorage.getObj('user')
    if (this.user == null) {
      this.user = {
        email: '',
        password: '',
        name: '',
        cargo: ''
      }
    }
    this.loadCollection()
  },
  methods: {
    info (dataSingle) {
      this.dataInfo = dataSingle
    },
    editar (dataSingle) {
      this.$emit('update', dataSingle)
    },
    async deletar (dataSingle) {
      console.log('delete', dataSingle.id)
      await this.$store.dispatch('deleteData', {
        table: this.colection,
        data: dataSingle
      })
      this.loadCollection()
      this.$emit('reload')
    },
    loadCollection () {
      if (this.permission === 'client') {
        console.log('client', this.user.id)
        this.$store.dispatch('getDatasClient', this.colection)
      } else {
        console.log('aberto', this.permission)
        this.$store.dispatch('getDatas', this.colection)
      }
      this.datasColection = localStorage.getObj(this.colection)
    }
  }
}
</script>
<style src="@/scss/_Content.scss" lang="scss" />
