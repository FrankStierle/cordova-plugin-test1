import { Injectable } from '@angular/core';
import { CordovaProperty, Plugin, IonicNativePlugin } from '@ionic-native/core';

declare const window: any;

/**
 * @name Test1
 * @description
 * Access information about the underlying device and platform.
 *
 * @usage
 * ```typescript
 * import { Test1 } from '@ionic-native/test1';
 *
 * constructor(private test1: Test1) { }
 *
 */
@Plugin({
  pluginName: 'Test1',
  plugin: 'cordova-plugin-test1',
  pluginRef: 'test1',
  repo: 'https://github.com/frankstierle/cordova-plugin-test1',
  platforms: ['Android', 'Browser', 'iOS']
})
@Injectable()
export class Test1 extends IonicNativePlugin {

  /** Get the version of Cordova running on the device. */
  @CordovaProperty
  cordova: string;

  /** Get the device's operating system name. */
  @CordovaProperty
  platform: string;

  /** Get the operating system version. */
  @CordovaProperty
  version: string;

}