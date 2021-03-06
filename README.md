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

### Accordions

Accordions are useful for hiding extra content which you don’t want to display straight away.

To mark a container as an accordion, use the `data-accordion` attribute:

```html
<p data-accordion="address">
  77 Trinity Crescent
  <br>WHISTON
  <br>NN7 9RZ
</p>
```

To add a button which toggles the accordion being shown / hidden, add a `data-accordion-button` attribute:

```html
<a href="#" data-accordion-button="address">Address</a>
```

This button will open the accordion with the same name (in this case “address”).

Both button and the accordion itself can be marked up using any HTML tags you think are suitable.

### Tabs

Tabbed interfaces have three components: a tab set, a tab, and tab content.

Tab sets group tabs together, to make sure that you might have multiple sets of tabs on the same screen, working independently. Tab sets look like this:

```html
<div data-tab-set>
  <a href="#" data-tab="profile">Profile</a>
  <a href="#" data-tab="summary">Summary</a>
</div>
```

Clicking the element marked with the `data-tab="profile"` will open up an element marked up with `data-tab-content="profile"`, eg.:

```html
<div data-tab-content="profile">
  ...
</div>
```

By default the first tab from the left is open when the page loads. If you want to soecify which one should be open, you can use the `data-tab-open` atttribute, like this:

```html
<div data-tab-set>
  <a href="#" data-tab="profile">Profile</a>
  <a href="#" data-tab="summary" data-tab-open>Summary</a>
</div>
```

### More buttons

Sometimes you might want to reveal some information only when the viewer directly asks for it. To do that, you can use the `more` feature.

Use the `data-more` attribute to mark up the content initially hidden:

```html
<p data-more="extra">This is a paragraph which provides some additional information.</p>
```

To mark up the button use the `data-more-button` attribute, like so:

```html
<a href="#" data-more-button="extra">Toggle</a>
```
Clicking on this button will toggle te visibility of the alement marked up with `data-more="extra"`. You an use any element you want, it doesn’t have to be an `a`.

### Modes

You might want to toggle a mode, which changes the appearance of certain elements. Modes change a class on every screen. You can use that class to change how certain elements are displayed when the mode is active.

You can toggle modes on and off using a switch:

```html
<a href="#" data-mode-toggle="edit">Make changes</a>
```

Clicking this will add a class `mode-edit` to the screen, and clicking it again will remove it. It’s up to you to use CSS to respond to the mode class being added and removed.

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

## How to add features

If you’d like to add features, you can do that in the `.js` file.

To edit features by working on separate `.js` files that get conctaenated together you will have to install Node.

1. Clone this repository.
2. Install Node.
3. In the `source` directory run `npm install`. This will install packages required to continuously run the script which will concatenate the files into a single one.
4. In the `source` directory run `gulp` to watch for file changes.
5. Edit the JavaScript files in the `source` directory as you wish. With every change the files will be joined together, and copied into the root of the project as well as the `example` directory.
6. Open the HTML file in the `example` directory to preview your changes.
