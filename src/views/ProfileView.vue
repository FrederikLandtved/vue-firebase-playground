<script setup>
import { getDatabase, ref as dbRef, set, get, child } from "firebase/database";
import { onMounted, ref as vueRef } from "vue";

const database = getDatabase();
const currentUser = vueRef('');

function writeUserData() {
  const db = getDatabase();
  set(dbRef(db, 'users/' + 2), {
    username: 'fred',
    email: 'frede@'
  });
}

function setCurrentUser() {
  const reef = dbRef(getDatabase());
  get(child(reef, `users/2`)).then((snapshot) => {
    if (snapshot.exists()) {
      currentUser.value = snapshot.val();
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
}

onMounted(() => {
  writeUserData();
  setCurrentUser();
})
</script>


<template>
  <h1>Profil</h1>

  <h3> {{ currentUser.username }} {{ currentUser.email }} </h3>
</template>

<style>

</style>
