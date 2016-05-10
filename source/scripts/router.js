var Router = Backbone.Router.extend({
  initialize: function(app) {
    this.app = app;
  },

  routes: {
    'screen/:screen': 'dynamicRoute',
    'screen/:screen/popup/:popup': 'dynamicRoute',
    'screen/:screen/bar/:bar': 'dynamicRoute',
    '*default': 'defaultRoute'
  },

  dynamicRoute: function(screen, popup, bar) {
    this.app.open(screen);

    if (popup) {
      this.app.openPopup(popup);
    }

    if (bar) {
      this.app.openBar(bar);
    }
  },

  defaultRoute: function() {
    this.navigate('screen/home');
  }

});
