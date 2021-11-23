<template>
  <div id="comp-list-one">
    <ul>
      <li class="item" v-for="post in postList" :key="post.id">
        <span class="author"> Author: {{ post.userId }} </span> <br />
        <span class="author"> Posted: {{ post.date }} </span> <br />
        <span class="body"
          ><h1>{{ post.body }}</h1></span
        ><br />
        <span class="picture"><img :src="post.image" /></span><br />
        <span class="likes">
          Likes:{{ post.likes }}
          <button v-on:click="IncreaseLikes(post.id)">Like</button></span
        >
        <br />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "blog_compo_1",
  data: function () {
    return {};
  },
  computed: {
    postList() {
      return this.$store.state.postList;
    },
  },
  methods: {
    IncreaseLikes: function (id) {
      this.$store.dispatch("IncreaseLikesAct", {id});
    },
  },
};
</script>
<style scoped>
.item {
  display: flex;
  width: 40%;
  flex-flow: column;
  margin: 50px auto;
  background: #40798c;
}
img {
  width: 100%;
  margin: auto;
}
#comp-list-one {
  margin-bottom: 30px;
  padding: 10px 20px;
}
#comp-list-one ul {
  list-style-type: none;
}
#comp-list-one li {
  padding: 20px;
  background: #40798c;
}
.likes {
  font-weight: bold;
  color: #0a5572;
  display: block;
}

button {
    box-sizing: border-box;
    height: 30px;
    width: 40px;
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