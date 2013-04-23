var service_url = 'http://box-akh.local:3000/';

var service = {
  signIn: function (name, password, onSuccess, onError) {
    var url = service_url + 'users/sign_in';
    console.log("Will sign in with url " + url);
    $.ajax({
      url: url,
      type: 'POST',
      data: {
        'user': {
          'name': name,
          'password': password
        }
      }
    }).done(function (data) {
        onSuccess(data);
      }).fail(function (data) {
        onError(data);
      });
  },

  signUp: function (name, email, password, password_confirmation, onSuccess, onError) {
    var url = service_url + 'users';
    console.log("Will sign up with url " + url);
    $.ajax({
      url: url,
      type: 'POST',
      data: {
        'user': {
          'name': name,
          'email': email,
          'password': password,
          'password_confirmation': password_confirmation
        }
      }
    }).done(function (data) {
        onSuccess(data);
      }).fail(function (data) {
        onError(data);
      });
  }
}