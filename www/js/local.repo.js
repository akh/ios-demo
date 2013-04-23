var localRepo = {
  hasAuthToken: function () {
    authentication_token = window.localStorage.getItem("authentication_token");
    return (authentication_token == null) ? false : true;
  },

  set: function (key, value) {
    window.localStorage.setItem(key, value);
  },

  saveAuthToken: function(data) {
    this.set('authentication_token', data['authentication_token']);
    this.set('user_id', data['user_id']);
  }
}