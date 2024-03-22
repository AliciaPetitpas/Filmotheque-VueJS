<script setup>
import { ref, onMounted } from 'vue'
import axios from "axios";

const listeParticipant = ref([])
const participant = ref({Nom:'', Prenom:''})

async function creer() {
  await axios.post("http://localhost:8080/api/participants", participant.value)

  participant.value = {Nom:'', Prenom:''}

  init()
}

async function supprimer(participantId) {
  await axios.delete("http://localhost:8080/api/participants/" + participantId)

  init()
}

async function init() {
  const reponse = await axios.get("http://localhost:8080/api/participants")

  listeParticipant.value = reponse.data;
}

onMounted(() => {
  init()
})

</script>

<template>
  <h1>Gestion des participants</h1>

  <form>
    <div class="form-element">
      <label>Nom</label>
      <input type="text" v-model="participant.Nom">
    </div>
    <div class="form-element">
      <label>Prenom</label>
      <input type="text" v-model="participant.Prenom">
    </div>
    <div class="form-element">
      <button type="button" @click="creer">Valider</button>
    </div>

  </form>

  <h2 v-if="listeParticipant.length == 0">Aucun participant pour le moment...</h2>
  <section v-if="listeParticipant.length > 0">
    <h1>Liste des participants</h1>

    <table>
      <thead>
      <tr>
        <th>Id</th>
        <th>Nom</th>
        <th>Prénom</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="participant in listeParticipant">
        <td>{{participant.id}}</td>
        <td>{{participant.Nom}}</td>
        <td>{{participant.Prenom}}</td>
        <td>
          <button @click="supprimer(participant.id)" class="delete-button">✗</button>
        </td>
      </tr>
      </tbody>
    </table>
  </section>
</template>