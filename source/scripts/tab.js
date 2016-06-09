var TabSet = Backbone.Model.extend({
  open: function(tab) {
    this.set('open', tab);
  }
});

var Tab = Backbone.View.extend({
  initialize: function() {
    this.name = this.$el.data('tab');
    this.listenTo(this.model, 'change', this.render);
    this.render();
  },

  events: {
    'click': 'open'
  },

  open: function(event) {
    event.preventDefault();
    this.model.open(this.name);
  },

  render: function() {
    if (this.model.get('open') === this.name) {
      this.$el.addClass('open');
    } else {
      this.$el.removeClass('open');
    }
  }
});

var TabContent = Backbone.View.extend({
  initialize: function() {
    this.name = this.$el.data('tab-content');
    this.listenTo(this.model, 'change', this.render);
    this.render();
  },

  render: function() {
    if (this.model.get('open') === this.name) {
      this.$el.show();
    } else {
      this.$el.hide();
    }
  }
});
