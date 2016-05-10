var PopupView = Backbone.View.extend({
  initialize: function() {
    this.name = this.el.dataset.popup;
    this.listenTo(this.model, 'change:popup', this.render);
    this.render();
  },

  events: {
    'click [data-close-popup]': 'close',
    'click [data-open-popup]': 'open',
    'click [data-close-bar]': 'closeBar',
    'click [data-open-bar]': 'openBar'
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

  openBar: function(event) {
    event.preventDefault();
    var barName = event.currentTarget.dataset.openBar;
    this.model.openBar(barName)
  },

  closeBar: function(event) {
    event.preventDefault();
    this.model.closeBar();
  },

  render: function() {
    if (this.model.get('popup') === this.name) {
      this.$el.show();
    } else {
      this.$el.hide();
    }
  }

});
