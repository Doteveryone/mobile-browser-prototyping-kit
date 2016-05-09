var PopupView = Backbone.View.extend({
  initialize: function() {
    this.name = this.el.dataset.popup;
    this.listenTo(this.model, 'change:popup', this.render);
    this.render();
  },

  events: {
    'click [data-close-popup]': 'close',
    'click [data-open-popup]': 'open'
  },

  open: function(event) {
    event.preventDefault();
    var popupName = event.currentTarget.dataset.openPopup;
    this.model.openPopup(popupName)
  },

  close: function(event) {
    event.preventDefault();
    this.model.closePopup();
  },

  render: function() {
    if (this.model.get('popup') === this.name) {
      this.$el.show();
    } else {
      this.$el.hide();
    }
  }

});
