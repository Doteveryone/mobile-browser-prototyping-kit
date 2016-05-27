var ModeToggle = Backbone.View.extend({
  initialize: function() {
    this.name = this.el.dataset.modeToggle;
  },

  events: {
    'click': 'toggle'
  },

  toggle: function(event) {
    event.preventDefault();
    this.model.toggleMode(this.name);
  }
});
