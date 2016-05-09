# Mobile Browser Prototyping Kit

## Why we made it

The task of making quick mockups of apps in the browser should be easy. Most of the time the interactive behaviour involves hiding and showing screens when the person taps something. We wanted it to be possible to create new screens in HTML, without having to write new JavaScript to power them. That way people who can write HTML can make mockups as quickly as a developer can.

## Installation

To add the kit to your project, copy the `prototyping-kit.js` into your project and reference if in your HTML file, like this:

```html
<script src="path/to/prototyping-kit.js"></script>
```

That’s it! See below for instructions on adding markup for creating screens, buttons for moving between them and other features.

## How to use

In the `example` directory you will find an HTML file which showcases all of the available features.

### Screens

#### Making new screens

To make a new screen, create a container and give it a `data-screen` attribute, like this:

```html
<div data-screen="home">
  ...
</div>
```

The content of the attribute (in this case `home`) is the name of this screen. You will have to use this name whenever you want to open this particular screen.

#### Opening a screen

To make a link which opens a specific screen you use a `data-open-screen` attribute:

```html
<a href="#" data-open-screen="home">Home</a>
```

This link will open the screen named `home`. If no screen with such name is found you will see a warning in the console, but no error will occur.

You can use other HTML elements if you wish. For example, the list item below will open the screen called `settings`:

```html
<li data-open-screen="settings"><img src="img/settings.png" alt="Settings"></li>
```

You can also open a screen using the URL: append `#screen/home` to the filename in the browser’s URL bar.

#### Closing a screen

Closing links use the `data-close-screen` attribute:

```html
<a href="#" data-close-screen>Close</a>
```

The attribute doesn’t need a name, it will close all the screens and show the home one. You can use other HTML element if you don’t want to use the `a` tag.

### Navigation

Navigation bar persists between screens. To designate a tag as the navigation bar you can use the `data-nav` attribute:

```html
<div data-nav>
  ...
</div>
```

Navigation doesn’t have to use the `div` tag, you can use whatever HTML tag you want.

The links in the navigation bar are marked up like this:

```html
<a href="#" data-nav-screen="home">Home</a>
```

You can use other HTML element if you don’t want to use the `a` tag.

### Popups

#### Making popups

Popups sit in the top layer, and are intended for asking questions.

To make a popup, use the `data-popup` attribute:

```html
<div data-popup="location">
  ...
</div>
```

#### Opening popups

Using a button:

```html
<a href="#" data-open-popup="location">Share location</a>
```

You can use other HTML element if you don’t want to use the `a` tag.

You can append `#popup/location` to the filename in the browser’s URL bar to trigger a popup without having to click a button.

#### Closing popups

```html
<a href="#" data-close-popup>Close</a>
```

The attribute doesn’t need a name, it will close all popups.

### Bars

Bars sit at the top of the screen and are meant to provide some information.

#### Making bars

Any container will work as a bar, as long as it has the `data-bar` attribute:

```html
<div data-bar="location">
  ...
</div>
```

#### Opening bars

Using the URL: append `#bar/location` to the filename in the browser’s URL bar.

Bars dismiss themselves when tapped on.

## Dependencies

The prototype uses Backbone, which requires jQuery and Underscore. They’re already included in the JS file.
