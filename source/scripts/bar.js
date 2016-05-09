var BarView = Backbone.View.extend({
  initialize: function() {
    this.name = this.el.dataset.bar;
    this.listenTo(this.model, 'change:bar', this.render);
    this.render();
  },

  events: {
    'click': 'close'
  },

  close: function(event) {
    event.preventDefault();
    this.model.closeBar();
  },

  render: function() {
    if (this.model.get('bar') === this.name) {
      this.$el.show();
    } else {
      this.$el.hide();
    }
  }

});

