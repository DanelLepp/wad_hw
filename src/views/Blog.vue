<template>
  <div class="blog">
    <h2>Our Blog</h2>
    <blog_compo_1> </blog_compo_1>
  </div>
</template>
<script>
import blog_compo_1 from "@/components/blog_compo_1.vue";

export default {
  name: "Posts",
  components: { blog_compo_1 },
  data() {
    return {};
  },
  
};
</script>