<template>
  <div class="events">
    <h1>Events for Good</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
import EventCard from '../components/EventCard.vue'
export default {
  name: 'Home',
  components: {
    EventCard
  },
  data() {
    return {
      events: [
        {
          id: 5928101,
          category: 'animal welfare',
          title: 'Cat Adoption Day',
          description: 'Find your new feline friend at this event',
          location: 'atlanta',
          date: 'January 28 2021',
          time: '12:00 pm',
          petsAllowed: true,
          organizer: 'Jim Sadler'
        },
        {
          id: 5928001,
          category: 'animal welfare',
          title: 'Dog Adoption Day',
          description: 'Find your new canine friend at this event',
          location: 'atlanta',
          date: 'January 30 2022',
          time: '12:00 pm',
          petsAllowed: true,
          organizer: 'Jim Sadler'
        }
      ]
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
</style>
