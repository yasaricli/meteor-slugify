# Meteor Slugify

A [Meteor](http://meteor.com) package to remove special characters from a string.

## Install

```shell
$ meteor add yasaricli:slugify
```

## Usage

```js
slugify('some string'); // returns some-string
slugify('some string', '_'); // if you prefer something other than '-' as separator
```

### Template 
```js
{{ slugify 'You ve pressed the button 0 times.' }} // "you-ve-pressed-the-button-0-times."
```
