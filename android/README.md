# Jazz - Android

## Local Development

1. Clone the repo.
2. Open up the project in Android Studio.
3. Add in the google-services.js file.

This gives you access to Google authentication. It was created using [this](https://developers.google.com/identity/sign-in/android/start) guide.

4. Add in the Config.java file.

This exposes our app config to the application.

5. Run the app on a device with Android API 16+.

### Config.java
To get the livechat service working, you need a Java file "Config.java" that defines a "Config" object, with properties license and group. This Config.java file is located with the other Java files.

For example: 
```java
public class Config {
    public static final String group = "GROUP";
    public static final String license = "LICENSE";
}
```

### CSS
LiveChat allows you to modify the look and feel of any given group/deployment by editing CSS in the LiveChat console. This is the preferred approach, as we can control it without deploying new versions.
