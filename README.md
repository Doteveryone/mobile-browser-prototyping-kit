# Mobile Browser Prototyping Kit

## Why we made it

The task of making quick mockups of apps in the browser should be easy. Most of the time the interactive behaviour involves hiding and showing screens when the person taps something. We wanted it to be possible to create new screens in HTML, without having to write new JavaScript to power them. That way people who can write HTML can make mockups as quickly as a developer can.

## Installation

To add the kit to your project, copy the `prototyping-kit.js` into your project and reference if in your HTML file, like this:

```html
<script src="path/to/prototyping-kit.js"></script>
```

In the head of the document add the CSS file:

```html
<head>
 ...
 <link href="path/to/prototyping-kit.css" rel="stylesheet">
</head>
```

That’s it! See below for instructions on adding markup for creating screens, buttons for moving between them and other features.

## Fonts and icons

The font used in the example comes from Google Fonts, and it uses [Font Awesome](http://fontawesome.io/) to show icons. If you want a quick way of prototyping icons, Font Awesome is really handy.

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

The content of the attribute (in this case `home`) is the name of this screen. You will have to use this name whenever you want to open this particular screen. You can use any HTML tag you want, not just `div`.

#### Home screen

`home` is a special type of screen. When you open the app it starts by showing the `home` screen by default, and it will always go back to it when you close any other screen. Make sure that you have one screen called `home`, and that it’s actually your app’s home screen.

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

Whenever a screen is opened, the URL will update to show which screen is currently visible. Changing the URL will take you to a different screen. Amend `screen/name-of-the-screen` to move to a different one.

#### Closing a screen

Closing links use the `data-close-screen` attribute:

```html
<a href="#" data-close-screen>Close</a>
```

The attribute doesn’t need a name, it will close all the screens and show the home one. You can use other HTML element if you don’t want to use the `a` tag.

#### Screen examples

<img src="https://raw.githubusercontent.com/Doteveryone/mobile-browser-prototyping-kit/master/screenshots/home.png" alt="Home screen" width="200" border="1">

<img src="https://raw.githubusercontent.com/Doteveryone/mobile-browser-prototyping-kit/master/screenshots/profile.png" alt="Profile screen" width="200" border="1">

<img src="https://raw.githubusercontent.com/Doteveryone/mobile-browser-prototyping-kit/master/screenshots/settings.png" alt="Settings screen" width="200" border="1">

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

You can use any HTML element you like.

#### Opening popups

Using a button:

```html
<a href="#" data-open-popup="location">Share location</a>
```

You can use other HTML element if you don’t want to use the `a` tag.

You can append `/popup/location` to the URL to trigger a popup without having to click a button.

#### Closing popups

```html
<a href="#" data-close-popup>Close</a>
```

The attribute doesn’t need a name, it will close all popups. It will work with other HTML tags as well.

#### Popup example

<img src="https://raw.githubusercontent.com/Doteveryone/mobile-browser-prototyping-kit/master/screenshots/popup.png" alt="Location popup" width="200" border="1">


### Bars

Bars sit at the top of the screen and are meant to provide some information.

#### Making bars

Any container will work as a bar, as long as it has the `data-bar` attribute. Here is an example using a `div` tag:

```html
<div data-bar="location">
  ...
</div>
```

#### Opening bars

Using the URL: append `/bar/location` to the URL.

Bars dismiss themselves when tapped on.

#### Bar example

<img src="https://raw.githubusercontent.com/Doteveryone/mobile-browser-prototyping-kit/master/screenshots/bar.png" alt="Location bar" width="200" border="1">

## Dependencies

The prototype uses Backbone, which requires jQuery and Underscore. They’re already included in the JS file.
