import User from '../models/user';

export default Backbone.View.extend({
  events: {
    submit(ev) {
      ev.preventDefault();

      var user = new User(this.getValuesFromForm());

      if (!user.isValid()) {
        return alert(user.validationError);
      }

      user.save();
    },
  },

  getValuesFromForm() {
    var email = this.$el.find('#user-name').val();
    var password = this.el.find('#user-password').val();

    return {email, password};
  },
});
