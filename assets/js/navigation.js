var NavigationView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, 'change', this.render)
  },

  events: {
    'click [data-nav-screen]': 'handleClick'
  },

  handleClick: function(event) {
    event.preventDefault();
    var screen = event.currentTarget.dataset.navScreen;
    this.model.open(screen);
  },

  render: function() {
  }
})
