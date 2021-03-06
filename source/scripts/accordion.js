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
    this.checkIfOpen();
  },

  events: {
    'click': 'toggle'
  },

  render: function() {
    if (this.model.get('open')) {
      this.$el.show();
    } else {
      this.$el.hide();
    }
  },

  toggle: function(event) {
    event.preventDefault();
    this.model.toggle();
  },

  checkIfOpen: function() {
    if (this.el.hasAttribute('data-accordion-is-open')) {
      this.model.open();
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
