import User from '../models/user';

export default Backbone.View.extend({
  events: {
    submit(ev) {
      ev.preventDefault();

      var username = this.$el.find('#user-name').val();
      var password = this.el.find('#user-password').val();

      var userInfo =
      [
        {user: 'aaron@theironyar.com', password: 'password123'},
        {user: 'admin@google.com', password: 'pandas'},
        {user: 'bbsoucy@gmail.com', password: 'honeycrisp'},
      ];

      var foundMatch = userArray.reduce(function(carry, curr) {
        if (curr.username === user && curr.password === password) {
          return true;
        }

        return carry;
      }, false);

      if (foundMatch === true) {
        alert('Welcome to The Ironyard');
        window.location = 'http://theironyar.com';
      } else {
        alert('Please try again: username and/or password is not on record');
      }
    },
  },
});
