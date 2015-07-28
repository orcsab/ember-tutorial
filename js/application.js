window.Todos = Ember.Application.create({
  LOG_TRANSACTIONS: true
});

Todos.ApplicationAdapter = DS.FixtureAdapter.extend();
