<template>
  <div>
    <Header />
    <div class="card">
      <div class="card-body">
        <form>
          <div class="form-group">
            <label for="FormControlInput1">Nome</label>
            <input
              type="text"
              class="form-control"
              id="FormControlInput1"
              placeholder="Informe seu Nome"
              v-model="usuario.nome"
            />
          </div>
          <div class="form-group">
            <label for="FormControlInput2">Idade</label>
            <input
              type="number"
              class="form-control"
              id="FormControlInput2"
              placeholder="Informe sua Idade"
              v-model="usuario.idade"
            />
          </div>
          <div class="form-group">
            <label for="FormControlInput3">Email</label>
            <input
              type="email"
              class="form-control"
              id="FormControlInput3"
              placeholder="Informe seu Email"
              v-model="usuario.email"
            />
          </div>
          <div class="form-group">
            <label for="FormControlInput4">Foto</label>
            <input
              type="file"
              class="form-control-file"
              id="FormControlInput4"
              accept="image/*"
            />
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="pos graduado"
              v-model="usuario.escolaridade"
              checked
            />
            <label class="form-check-label" for="exampleRadios1">
              Pós Graduado
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios2"
              value="graduado"
              v-model="usuario.escolaridade"
              checked
            />
            <label class="form-check-label" for="exampleRadios2">
              Graduado
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios3"
              value="nivel medio"
              v-model="usuario.escolaridade"
              checked
            />
            <label class="form-check-label" for="exampleRadios3">
              Nivel Médio
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios3"
              value="nivel tecnico"
              v-model="usuario.escolaridade"
              checked
            />
            <label class="form-check-label" for="exampleRadios3">
              Nível Técnico
            </label>
          </div>
          <button type="button" class="btn btn-success" @click="salvar()">
            Salvar
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Usuario from "../service/usuario";
export default {
  data() {
    return {
      usuario: {
        id: "",
        nome: "",
        idade: "",
        email: "",
        foto: "",
        escolaridade: "",
      },
      errors: [],
    };
  },
  components: {
    Header,
  },

  methods: {
    salvar() {
      if (!this.usuario.id) {
        Usuario.salvar(this.usuario)
          .then((resposta) => {
            this.usuario = {};
            alert("Usuário cadastrado com sucesso");
            this.usuario = resposta.data;
            this.errors = {};
          })
          .catch((e) => {
            this.erros = e.response.errors;
          });
      }
    },
  },
};
</script>

<style>
</style>