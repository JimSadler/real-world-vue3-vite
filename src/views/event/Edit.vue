<template>
  <p>Edit the event here.</p>
</template>

<script>
export default {
  props: ["event"],
  data: function () {
    return {
      unsavedChanges: true,
    };
  },
};
</script>
