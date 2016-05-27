var Screen = Backbone.Model.extend({
  initialize: function(el, app) {
    this.name = $(el).attr('data-screen');
    this.hide();
    this.app = app;
  },

  show: function() {
    this.set({ shown: true });
  },

  hide: function() {
    this.set({ shown: false });
  },

  close: function() {
    this.app.close();
  }
});

var ScreenView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model.app, 'change:mode', this.respondToMode);
    this.render();
  },

  events: {
    'click [data-open-screen]': 'openScreen',
    'click [data-close-screen]': 'closeScreen',
    'click [data-close-popup]': 'closePopup',
    'click [data-open-popup]': 'openPopup',
    'click [data-close-bar]': 'closeBar',
    'click [data-open-bar]': 'openBar'
  },

  openScreen: function(event) {
    event.preventDefault();
    var screenName = event.currentTarget.dataset.openScreen;
    this.model.app.open(screenName);
  },

  closeScreen: function(event) {
    event.preventDefault();
    this.model.app.close();
  },

  openPopup: function(event) {
    event.preventDefault();
    var popupName = event.currentTarget.dataset.openPopup;
    this.model.app.openPopup(popupName)
  },

  closePopup: function(event) {
    event.preventDefault();
    this.model.app.closePopup();
  },

  openBar: function(event) {
    event.preventDefault();
    var barName = event.currentTarget.dataset.openBar;
    this.model.app.openBar(barName)
  },

  closeBar: function(event) {
    event.preventDefault();
    this.model.app.closeBar();
  },

  respondToMode: function() {
    var mode = this.model.app.get('mode');
    console.log(mode)
    if (mode) {
      this.$el.addClass('mode-' + mode);
    } else {
      this.el.className = this.el.className.replace(/\bmode-.+?\b/g, '');
    }
  },

  render: function() {
    if (this.model.get('shown')) {
      this.$el.show();
    } else {
      this.$el.hide();
    }
  }
});
