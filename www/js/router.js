var router = {
  open: function (page_url, transition) {
    transition = typeof transition === 'undefined' ? 'pop' : transition;
    console.log("Will log page: " + page_url);
    $.mobile.changePage(page_url, { transition: transition });
  },

  goto: function(page_url) {
    console.log("Will go to page: " + page_url);
    window.location = page_url
  }
}