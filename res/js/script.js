/* function to enable dropdown menu functionality */
function dropDown() {
    document.getElementById("dropDownMenu").classList.toggle("show");
}

/* function for json loading */
$(function() {
    let localStorage = "res/json/posts.json";
    let webStorage = "https://api.jsonbin.io/b/617533784a82881d6c64c17f";
    $.get(webStorage, function(posts) {
        for (post of posts) {
            let div = $('<div class= "card">');
            let date = $('<h5 class= "date">').text(post.date);
            let image= $('<img src="" alt="image">').attr('src', post.image);
            let body = $('<p>').text(post.body);
            let like = $('<button id="likeButton"> Like </button>');
            div.append(date);
            div.append(image);
            div.append(body);
            div.append(like);
            $('section').append(div);
        }
    })
});