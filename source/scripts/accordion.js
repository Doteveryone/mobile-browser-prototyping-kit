var Accordion = Backbone.Model.extend({
  initialize: function() {
    this.close();
  },

  open: function() {
    this.set({ open: true });
  },

  close: function() {
    this.set({ open: false });
  },

  toggle: function() {
    if (this.get('open')) {
      this.close();
    } else {
      this.open();
    }
  }
});

var AccordionView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
  },

  render: function() {
    if (this.model.get('open')) {
      this.$el.show();
    } else {
      this.$el.hide();
    }
  }
});

var AccordionButton = Backbone.View.extend({
  events: {
    'click': 'toggle'
  },

  toggle: function(event) {
    event.preventDefault();
    this.model.toggle();
  }
});
