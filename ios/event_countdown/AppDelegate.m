/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#if __has_include(<EXFirebaseNotifications/EXFirebaseNotifications.h>)
#import <EXFirebaseNotifications/EXFirebaseNotifications.h>
#endif

#if __has_include(<EXFirebaseMessaging/EXFirebaseMessaging.h>)
#import <EXFirebaseMessaging/EXFirebaseMessaging.h>
#endif
#if __has_include(<EXFirebaseLinks/EXFirebaseLinks.h>)
#if __has_include(<EXFirebaseInvites/EXFirebaseInvites.h>)
#import <EXFirebaseInvites/EXFirebaseInvites.h>
#else
#import <EXFirebaseLinks/EXFirebaseLinks.h>
#endif
#endif

#if __has_include(<FirebaseCore/FIRApp.h>)
#import <FirebaseCore/FIROptions.h>
#import <FirebaseCore/FIRApp.h>
#endif

#if __has_include(<FirebaseDatabase/FIRDatabase.h>)
#import <FirebaseDatabase/FIRDatabase.h>
#endif

static NSString *const EXLinkingUrlScheme = @"";

// Later...

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
#if __has_include(<FirebaseCore/FIRApp.h>)
  // If the app contains the GoogleService-Info.plist then use it.
  if ([FIROptions defaultOptions] != nil) {
#if __has_include(<EXFirebaseLinks/EXFirebaseLinks.h>)
    if (![EXLinkingUrlScheme isEqualToString:@""]) {
      [FIROptions defaultOptions].deepLinkURLScheme = EXLinkingUrlScheme;
    }
#endif
    [FIRApp configure];
#if __has_include(<EXFirebaseDatabase/EXFirebaseDatabase.h>)
    [FIRDatabase database].persistenceEnabled = YES;
#endif
#if __has_include(<EXFirebaseNotifications/EXFirebaseNotifications.h>)
    [EXFirebaseNotifications configure];
#endif
  }
#endif
  
  _window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  _window.backgroundColor = [UIColor whiteColor];
  [[ExpoKit sharedInstance] application:application didFinishLaunchingWithOptions:launchOptions];
  _rootViewController = [ExpoKit sharedInstance].rootViewController;
  _window.rootViewController = _rootViewController;
  
  [_window makeKeyAndVisible];
  
  return YES;
}

#pragma mark - Handling URLs

- (BOOL)application:(UIApplication *)app openURL:(NSURL *)url options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options
{
  id annotation = options[UIApplicationOpenURLOptionsAnnotationKey];
  NSString *sourceApplication = options[UIApplicationOpenURLOptionsSourceApplicationKey];
#if __has_include(<EXFirebaseLinks/EXFirebaseLinks.h>)
#if __has_include(<EXFirebaseInvites/EXFirebaseInvites.h>)
  if ([[EXFirebaseInvites instance] application:app openURL:url options:options]) {
    return YES;
  }
#else
  if ([[EXFirebaseLinks instance] application:app openURL:url options:options]) {
    return YES;
  }
#endif
#endif
  return [[ExpoKit sharedInstance] application:app openURL:url sourceApplication:sourceApplication annotation:annotation];
}

- (BOOL)application:(UIApplication *)application continueUserActivity:(NSUserActivity *)userActivity restorationHandler:(void (^)(NSArray<id<UIUserActivityRestoring>> * _Nullable))restorationHandler
{
#if __has_include(<EXFirebaseLinks/EXFirebaseLinks.h>)
#if __has_include(<EXFirebaseInvites/EXFirebaseInvites.h>)
  if ([[EXFirebaseInvites instance] application:application continueUserActivity:userActivity restorationHandler:restorationHandler]) {
    return YES;
  }
#else
  if ([[EXFirebaseLinks instance] application:application continueUserActivity:userActivity restorationHandler:restorationHandler]) {
    return YES;
  }
#endif
#endif
  return [[ExpoKit sharedInstance] application:application continueUserActivity:userActivity restorationHandler:restorationHandler];
}

- (void)application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)userInfo fetchCompletionHandler:(void (^)(UIBackgroundFetchResult))completionHandler
{
#if __has_include(<EXFirebaseMessaging/EXFirebaseMessaging.h>)
#if __has_include(<EXFirebaseNotifications/EXFirebaseNotifications.h>)
  [[EXFirebaseNotifications instance] didReceiveRemoteNotification:userInfo fetchCompletionHandler:completionHandler];
#else
  [[EXFirebaseMessaging instance] didReceiveRemoteNotification:userInfo];
#endif
#endif
}

#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  NSURL *jsCodeLocation;

  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];

  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"event_countdown"
                                               initialProperties:nil
                                                   launchOptions:launchOptions];
  rootView.backgroundColor = [UIColor blackColor];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  return YES;
}

@end
