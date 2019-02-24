package com.event_countdown;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.oblador.vectoricons.VectorIconsPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import expo.modules.firebase.analytics.FirebaseAnalyticsPackage;
import expo.modules.firebase.app.FirebaseAppPackage;
import expo.modules.firebase.auth.FirebaseAuthPackage;
import expo.modules.firebase.fabric.crashlytics.FirebaseCrashlyticsPackage;
import expo.modules.firebase.database.FirebaseDatabasePackage;
import expo.modules.firebase.firestore.FirebaseFirestorePackage;
import expo.modules.firebase.functions.FirebaseFunctionsPackage;
import expo.modules.firebase.instanceid.FirebaseInstanceIDPackage;
import expo.modules.firebase.invites.FirebaseInvitesPackage;
import expo.modules.firebase.links.FirebaseLinksPackage;
import expo.modules.firebase.messaging.FirebaseMessagingPackage;
import expo.modules.firebase.notifications.FirebaseNotificationsPackage;
import expo.modules.firebase.performance.FirebasePerformancePackage;
import expo.modules.firebase.remoteconfig.FirebaseRemoteConfigPackage;
import expo.modules.firebase.storage.FirebaseStoragePackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new VectorIconsPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }

  @Override
  public List<Package> expoPackages() {
    // Here you can add your own packages.
    return Arrays.<Package>asList(
            new FirebaseAppPackage(),
            new FirebaseAnalyticsPackage(),
            new FirebaseAuthPackage(),
            new FirebaseCrashlyticsPackage(),
            new FirebaseDatabasePackage(),
            new FirebaseFirestorePackage(),
            new FirebaseFunctionsPackage(),
            new FirebaseInstanceIDPackage(),
            new FirebaseInvitesPackage(),
            new FirebaseLinksPackage(),
            new FirebaseMessagingPackage(),
            new FirebaseNotificationsPackage(),
            new FirebasePerformancePackage(),
            new FirebaseRemoteConfigPackage(),
            new FirebaseStoragePackage()
    );
  }
}
