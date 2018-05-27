<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Nos produits</h2>
    <ul>
      <li>
        <a
          href="http://localhost:8080/#/yeezy"
          target="_blank"
        >
          Yeezy
        </a>
      </li>
      <li>
        <a
          href="http://localhost:8080/#/nikexoffwhite"
          target="_blank"
        >
          Nike x Off White
        </a>
      </li>
      <li>
        <a
          href="http://localhost:8080/#/humanrace"
          target="_blank"
        >
          Human Race
        </a>
      </li>
      <li>
        <a
          href="http://localhost:8080/#/gucci"
          target="_blank"
        >
          Gucci
        </a>
      </li>
      <br>
    </ul>
    <h2>A propos du site: ce site est fait en 2018 par des enthousiastes pour faciliter la recherche des chaussures</h2>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Stuffnsneakers.ch',
  data () {
    return {
      msg: 'Stuffnsneakers.ch'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
