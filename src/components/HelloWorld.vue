<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="text">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nunc dui,
        dignissim a bibendum quis, laoreet nec libero. Nulla vitae augue lectus.
        Vestibulum pellentesque sem a accumsan rutrum. Phasellus luctus massa et
        tincidunt tincidunt. Duis in massa id sem viverra varius sit amet at
        nisi. Fusce vitae felis purus. Ut congue dictum bibendum. Nullam
        venenatis eleifend bibendum. Duis rutrum neque odio, eget sollicitudin
        nulla hendrerit sed. Aliquam ornare sapien vel arcu volutpat congue.
        Donec ante est, ornare at leo quis, tempor egestas diam. Nam mattis elit
        facilisis, condimentum ligula non, varius velit. Donec a nulla a leo
        sodales convallis ut eget ipsum. Nam fringilla vestibulum nibh vel
        gravida. Aliquam posuere neque eget urna facilisis rhoncus. Suspendisse
        dictum commodo nisl, ac suscipit enim vulputate non. Morbi augue metus,
        malesuada sit amet turpis in, pellentesque sodales risus. Ut volutpat
        tortor vel eleifend aliquet. Vestibulum suscipit eleifend justo eu
        blandit. Sed tincidunt mi felis, vel placerat eros auctor at. Nullam
        rhoncus imperdiet quam, ut pulvinar mauris maximus id. Nulla sit amet
        dolor in ante euismod rhoncus et vel lectus. Ut vitae lacus ac elit
        porta dictum nec id nisi. Quisque eget sodales nulla. Suspendisse
        condimentum, diam nec bibendum accumsan, metus quam feugiat eros, ac
        efficitur lorem urna ac risus. Duis vel sapien rutrum, interdum felis
        eget, elementum purus. Ut nec dignissim ante, sed efficitur arcu.
        Aliquam ultricies, neque eget dictum blandit, purus eros accumsan purus,
        eget semper metus orci id ex. Praesent massa enim, ornare quis tortor
        et, sollicitudin egestas tellus. Phasellus ut congue elit, ut pretium
        turpis. Ut varius lectus sit amet risus semper fermentum. Vivamus
        posuere lectus ac ligula finibus, a molestie libero congue. Aliquam
        interdum suscipit odio. Nulla sit amet ipsum ornare, eleifend sem sed,
        commodo dui. Donec nec congue eros.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.text {
  display: flex;
  width: 50%;
  flex-flow: column;
  margin:50px auto;

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
  color: #0a5572;
}
</style>
