<template>
  <div class="events">
    <h1>Events for Good</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <div class="pagination">
      <router-link
        id="page-prev"
        :to="{ name: 'Home', query: { page: page - 1 } }"
        rel="prev"
        v-if="page != 1"
        >&#60; Previous Page</router-link
      >
      <router-link
        id="page-next"
        v-if="hasNextPage"
        :to="{ name: 'Home', query: { page: page + 1 } }"
        rel="next"
        >Next Page &#62;</router-link
      >
    </div>
  </div>
</template>

<script>
import EventCard from '../components/EventCard.vue'
import EventService from '@/services/EventService.js'
import { watchEffect } from 'vue'
export default {
  name: 'Home',
  props: ['page'],
  components: {
    EventCard
  },
  data() {
    return {
      events: null,
      totalEvents: 0
    }
  },
  created() {
    watchEffect(() => {
      this.events = null
      EventService.getEvents(2, this.page)
        .then((response) => {
          console.log('events', response.data)
          this.events = response.data
          this.totalEvents = response.headers['x-total-count']
        })
        .catch((error) => {
          console.log(error)
        })
    })
  },
  computed: {
    hasNextPage() {
      var totalPages = Math.ceil(this.totalEvents / 2)
      return this.page < totalPages
    }
  }
}
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pagination {
  display: flex;
  width: 290px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}
#page-prev {
  text-align: left;
}
#page-next {
  text-align: right;
}
</style>
