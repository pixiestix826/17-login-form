export default Backbone.Model.extend({
  urlRoot: 'http://tiny-lr.herokuapp.com/collections/users-bbs',

  defaults: {
    username: '',
    password: '',
  },

  getFormErrors() {
    if (!this.get('username')) {
      return `Please enter an email address before logging in`;
    }

    if (!this.get('password')) {
      return `Please enter a password before logging in`;
    }
  },
});
