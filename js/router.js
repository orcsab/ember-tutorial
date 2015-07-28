Todos.Router.map(function() {
    this.resource('todos', { path: '/' });
    this.resource('bullshit', { path: '/bullshit' });
});

Todos.Router.reopen({
	rootURL: '/~drummonds/ember/'
});

Todos.TodosRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('todo');
  }
});
