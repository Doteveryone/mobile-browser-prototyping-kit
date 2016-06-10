var TabSet = Backbone.Model.extend({
  open: function(tab) {
    this.set('open', tab);
  },

  addTab: function(tab) {
    if (this.tabs) {
      this.tabs.push(tab);
      this.open(this.tabs[0]);
    } else {
      this.tabs = []
    }
  }
});

var Tab = Backbone.View.extend({
  initialize: function() {
    this.name = this.$el.data('tab');
    if (this.$el.data('tab-open') == '') {
      this.model.open(this.name);
    }
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
