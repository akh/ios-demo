var user = {
  landing: function () {
    console.log('User landing, determining where to go');
    this.visitHomePage();
//    if (localRepo.hasAuthToken()) {
//      this.visitHomePage();
//    } else {
//      this.visitSignInPage();
//    }
  },

  visitHomePage: function () {
    if(typeof authentication_token != 'undefined') {
      console.log("Found authentication_token in localStorage" + authentication_token);
    }
    router.goto("html/home.html");
  },

  visitSignInPage: function () {
    console.log("No authentication_token in localStorage");
    router.open("html/sign_in.html");
  }
}