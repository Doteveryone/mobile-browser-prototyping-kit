var Router = Backbone.Router.extend({
  initialize: function(app) {
    this.app = app;
  },

  routes: {
    'screen/:screen': 'dynamicRoute',
    'screen/:screen/popup/:popup': 'dynamicRoutePopup',
    'screen/:screen/bar/:bar': 'dynamicRouteBar',
    '*default': 'defaultRoute'
  },

  dynamicRoute: function(screen) {
    this.app.open(screen);
  },

  dynamicRoutePopup: function(screen, popup) {
    this.app.open(screen);
    this.app.openPopup(popup);
  },

  dynamicRouteBar: function(screen, bar) {
    this.app.open(screen);
    this.app.openBar(bar);
  },

  defaultRoute: function() {
    this.navigate('screen/home');
  }
});
