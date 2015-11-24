export default Backbone.Model.extend({
  urlRoot: 'http://tiny-lr.herokuapp.com/collections/users-bbs',

  defaults: {
    name: 'bbsoucy@gmail.com',
    password: 'honeycrisp',
  },

  validate() {
    if (!this.get('email')) {
      return `Please enter an email address before logging in`;
    }

    if (!this.get('password')) {
      return `Please enter a password before logging in`;
    }
  },
});
