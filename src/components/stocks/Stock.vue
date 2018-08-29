<template lang="html">
  <div class="col s6">
    <div class="card hoverable deep-purple lighten-5">
      <div class="card-content">
        <span class="card-title">{{ stock.name }} (Price: {{ stock.price }})</span>
        <div class="row">
          <div class="input-field col s8">
            <input id="quantity" type="number" class="validate" v-model="quantity">
            <label for="quantity">Quantity</label>
          </div>
          <div class="input-field col s4">
            <button
              class="btn deep-purple darken-1 waves-effect waves-light"
              type="submit"
              name="action"
              @click="buyStock">Buy</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['stock'],
  data: function () {
    return {
      quantity: 0,
    };
  },
  methods: {
    buyStock() {
      const order = {
        id: this.stock.id,
        name: this.stock.name,
        quantity: this.stock.quantity,
      };
      console.log(order);
      this.quantity = 0;
    }
  },
}
</script>

<style lang="css">
</style>
