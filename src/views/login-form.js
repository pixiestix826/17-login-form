import User from '../models/user';

export default Backbone.View.extend({

  events: {
    submit(ev) {
      ev.preventDefault();

      var username = this.$el.find('#username').val();
      var password = this.$el.find('#password').val();

      var attempt = new User({username, password});

      var errorMessage = attempt.getValidationErrors();

      if (errorMessage) {
        alert(errorMessage);
      } else {
        window.location = 'http://theironyard.com';
      }
    },
  },
});
