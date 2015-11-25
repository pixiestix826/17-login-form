import User from '../models/user';

export default Backbone.View.extend({

  events: {
    submit(ev) {
      ev.preventDefault();

      var username = this.$el.find('#user-name').val();
      var password = this.$el.find('#user-password').val();

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
