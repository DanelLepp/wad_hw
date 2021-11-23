<template>
  <div class="home">
    <img
      src="https://www.seekpng.com/png/full/26-269100_vector-png-file-half-tone-vectors-png.png"
      width="200"
      height="200"
    />
    <HelloWorld msg="Welcome to our amazing, greatest, best blog" />
    <span class="likes"
      ><button v-on:click="resetLikes()">Reset likes</button></span
    >
    <br />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  methods: {
    resetLikes: function () {
      this.$store.dispatch("resetLikesAct");
    },
  },
};
</script>

<style scoped>
button {
    box-sizing: border-box;
    height: 30px;
    width: 120px;
    margin: 0;
    padding: 5px;
    border: none;
    cursor: pointer;
    background-color: #70a9a1;
}
button:hover{
    opacity: 0.7;
}

</style>