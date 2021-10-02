<template>
  <v-app id="application">
    <div id="flashMessage" v-if="GStore.flashMessage">
      {{ GStore.flashMessage }}
    </div>
    <div id="nav" aria-label="Main" role="navigation">
      <router-link :to="{ name: 'EventList' }">Event List</router-link> |
      <router-link :to="{ name: 'About' }">About</router-link>
    </div>

    <main><router-view /></main>
  </v-app>
</template>

<script>
import EventCard from './components/EventCard.vue'

export default {
  name: 'App',
  inject: ['GStore']
}
</script>
<style>
@keyframes yellowfade {
  from {
    background: #24e500;
  }
  to {
    background: transparent;
  }
}

#flashMessage {
  padding: 0.5rem 0 0.5rem 0;
  animation-name: yellowfade;
  animation-duration: 3s;
}
#application {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav,
#nav2 {
  padding: 30px;
  text-align: center;
}
#nav a,
#nav2 a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active,
#nav2 a.router-link-exact-active {
  color: #42b983;
}

.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.event-card :hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
h4 {
  font-size: 20px;
}
</style>
