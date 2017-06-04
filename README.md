---
title: Test1
description: New Pluging Test1.
---

This plugin defines a global `test1` object, which describes the tests.
Although the object is in the global scope, it is not available until after the `deviceready` event.

```js
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(test1.version);
}
```

## Installation

    cordova plugin add cordova-plugin-test1

## Properties

- test1.version

## test1.cordova

Get the version of Cordova running on the device.

### Supported Platforms

- Android
- iOS
