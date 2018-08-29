<template lang="html">
  <nav>
    <div class="nav-wrapper">
      <router-link to="/" class="brand-logo">Logo</router-link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <router-link tag="li" activeClass="active" to="/" exact><a>Home</a></router-link>
        <router-link tag="li" activeClass="active" to="/protfolio"><a>Portfolio</a></router-link>
        <router-link tag="li" activeClass="active" to="/stocks"><a>Stocks</a></router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
};

</script>

<style lang="css">
</style>
