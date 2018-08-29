<template lang="html">
  <div>
    <app-stock
      v-for="stock in stocks"
      :stock="stock"></app-stock>
  </div>
</template>

<script>
import Stock from './Stock.vue';

export default {
  data: function () {
    return {
      stocks: [
        { id: 1, name: 'BMW', quantity: 123 },
        { id: 2, name: 'Google', quantity: 222 },
        { id: 3, name: 'Apple', quantity: 333 },
        { id: 4, name: 'Twitter', quantity: 8 },
      ],
    };
  },
  components: {
    'app-stock': Stock,
  }
};

</script>

<style lang="css">
</style>
