EmberContacts.ContactRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('contact', params.id);
  }
});
