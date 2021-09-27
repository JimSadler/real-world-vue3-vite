<template>
  <p>Register for the event here.</p>
  <button @click="register">Register Me</button>
</template>

<script>
export default {
  props: ["event"],
  inject: ["GStore"],
  methods: {
    register() {
      // call to api
      // if registered, then redirect to details page
      this.GStore.flashMessage =
        "You are successfully registered for " + this.event.title;

      setTimeout(() => {
        this.GStore.flashMessage = "";
      }, 3000);

      this.$router.push({
        name: "EventDetails",
      });
    },
  },
};
</script>
