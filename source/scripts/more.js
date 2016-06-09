var More = Backbone.Model.extend({
  initialize: function(app) {
    this.app = app;
  },

  toggle: function() {
    if (this.get('more')) {
      this.less();
    } else {
      this.more();
    }
  },

  more: function() {
    this.set('more', true);
  },

  less: function() {
    this.unset('more');
  }
});

var MoreButton = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
  },

  events: {
    'click': 'toggle'
  },

  toggle: function(event) {
    event.preventDefault;
    this.model.toggle();
  },

  render: function() {
    if (this.model.get('more')) {
      this.$el.addClass('more');
    } else {
      this.$el.removeClass('more');
    }
  }
});

var MoreContent = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
  },

  render: function() {
    if (this.model.get('more')) {
      this.$el.show();
    } else {
      this.model.app.scrollToTop();
      this.$el.hide();
    }
  }
});
