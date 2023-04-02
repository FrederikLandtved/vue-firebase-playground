import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { initializeApp } from "firebase/app";
import App from './App.vue'
import router from './router'

import './assets/main.css'

const firebaseConfig = {
  apiKey: "AIzaSyDRWwpcExJ7rNCtAeF3TdCy0WlVAA7e0z8",
  authDomain: "frederiklandtved-7d85d.firebaseapp.com",
  databaseURL: "https://frederiklandtved-7d85d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "frederiklandtved-7d85d",
  storageBucket: "frederiklandtved-7d85d.appspot.com",
  messagingSenderId: "452831965351",
  appId: "1:452831965351:web:f45990f0e493ecd3a12b82"
};

const app = createApp(App)
initializeApp(firebaseConfig);

app.use(createPinia())
app.use(router)

app.mount('#app')
