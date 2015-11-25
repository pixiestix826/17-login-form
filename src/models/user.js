export default Backbone.Model.extend({

  users: [
      {user: 'aaron@theironyard.com', password: 'password123'},
      {user: 'admin@google.com', password: 'pandas'},
      {user: 'bbsoucy@gmail.com', password: 'honeycrisp'},
    ],

  getValidationErrors() {
    var username = this.get('username');
    var password = this.get('password');

    var usernameExists = this.users.reduce(function(carry, curr) {
        if (curr.user === username) {
          return true;
        }

        return carry;
      }, false);

    var passwordExists = this.users.reduce(function(carry, curr) {
      if (curr.password === password) {
        return true;
      }

      return carry;
    }, false);

    if (username === '') {
      return 'Please enter an email address before logging in';
    }

    if (password === '') {
      return 'Please enter a password before logging in';
    }

    if (!usernameExists) {
      return 'Your user was not found';
    }

    if (!passwordExists) {
      return 'The password you entered is incorrect';
    }
  },
});
