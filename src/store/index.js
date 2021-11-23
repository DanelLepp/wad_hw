import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    postList: [
      {
        userId: "Thomas",
        id: 1,
        date: "26.09.2021",
        image: "https://i.imgflip.com/s71ly.jpg",
        body: "I think it is going to rain",
        likes: 0,
      },
      {
        userId: "Margaret",
        id: 2,
        date: "26.09.2021",
        image:
          "https://culturedvultures.com/wp-content/uploads/2020/03/limmy.jpg",
        body: "Which weights more, a pound of bricks or a pound of feathers.",
        likes: 0,
      },
      {
        userId: "Daniel",
        id: 3,
        date: "26.09.2021",
        image: "https://i.redd.it/ztm9xbrqtq521.jpg",
        body: "Felt cute, might delete later",
        likes: 0,
      },
      {
        userId: "Samuel",
        id: 4,
        date: "26.09.2021",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/f/f1/Portale_Leonardo_da_Vinci.png",
        body: "Started stretching yesterday",
        likes: 0,
      },
      {
        userId: "John",
        id: 5,
        date: "26.09.2021",
        image: "https://i.redd.it/ylspi90msbv71.png",
        body: "This hit too close to the heart!",
        likes: 0,
      },
      {
        userId: "Jane",
        id: 6,
        date: "26.09.2021",
        image: "https://i.redd.it/ztm9xbrqtq521.jpg",
        body: "He has not closed the quotes and that's bugging me...!",
        likes: 0,
      },
      {
        userId: "Juliette",
        id: 7,
        date: "26.09.2021",
        image: "https://i.redd.it/gph4zwsp6hu61.jpg",
        body: "Guess I'm a robot now.",
        likes: 0,
      },
      {
        userId: "Thomas",
        id: 8,
        date: "26.09.2021",
        image: "https://i.redd.it/3iln2afoz3e71.jpg",
        body: "json is my top programming language",
        likes: 0,
      },
      {
        userId: "Christy",
        id: 9,
        date: "26.09.2021",
        image: "https://i.redd.it/pkcsunr302m61.jpg",
        body: "I'll need a team and 2 weeks...",
        likes: 0,
      },
      {
        userId: "Chris",
        id: 10,
        date: "26.09.2021",
        image: "https://i.redd.it/3l1d55j3k1m71.jpg",
        body: "clearly what the world needs is a plugin called postcss-british",
        likes: 0,
      },
    ],
  },
  mutations: {
    IncreaseLikes: (state, { id }) => {
      state.postList.forEach((post) => {
        if (post.id == id) {
          post.likes += 1;
        }
      });
    },
    resetLikes: (state) => {
      state.postList.forEach((post) => {
        post.likes = 0;
      });
    },
  },
  actions: {
    IncreaseLikesAct: (act, { id }) => {
      setTimeout(function () {
        act.commit("IncreaseLikes", { id });
      }, 1000);
    },
    resetLikesAct: (act) => {
      setTimeout(function () {
        act.commit("resetLikes");
      }, 1000);
    },
  },
  modules: {},
});
