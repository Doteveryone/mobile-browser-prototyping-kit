var Router = Backbone.Router.extend({
  initialize: function(app) {
    this.app = app;
  },

  routes: {
    'bar/:bar': 'bar',
    'popup/:popup': 'popup',
    'screen/:screen': 'screen',
    '*default': 'defaultRoute'
  },

  bar: function(bar) {
    this.app.closePopup();
    this.app.openBar(bar);
  },

  popup: function(popup) {
    this.app.closeBar();
    this.app.openPopup(popup);
  },

  screen: function(screen) {
    this.app.open(screen);
  },

  defaultRoute: function() {
    this.app.closePopup();
    this.app.closeBar();
  }

});
