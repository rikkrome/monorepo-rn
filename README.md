# React-Native Monorepo

```
yarn
yarn build
```

# Setup and Environment

## react-native

### Version Manager asdf
> This is what I use to manage my versions. If you want to use this; make sure to uninstall your 
- https://github.com/asdf-vm/asdf
	- https://asdf-vm.com/guide/getting-started.html
		- Install with `brew` and update your shell PATH. 
#### Nodejs

```
asdf plugin add nodejs https://github.com/asdf-vm/asdf-nodejs.git
asdf install nodejs 22.14.0
asdf set -u nodejs 22.14.0
```
#### [Storybook build issues ](https://github.com/storybookjs/storybook/issues/21981#issuecomment-2667367067)
node v23 is having issues with storybook
```
SyntaxError: The requested module '@storybook/react-native' does not provide an export named 'StorybookConfig'
```
#### npm issues
> if `npm` is not found add this to your shell 
> `.zshrc`
```
export PATH="$PATH:$(npm get prefix)/bin"
```

#### yarn 
- https://github.com/twuni/asdf-yarn

```
 asdf plugin add yarn
 asdf install yarn latest
 asdf set -u yarn 1.22.22 (lastest)

 # list if needed
  asdf list all yarn
 ```

#### Java
- https://github.com/halcyon/asdf-java
```
asdf plugin add java https://github.com/halcyon/asdf-java.git

# asdf list all java
# asdf list all java arch (mac arm)

asdf install java openjdk-17
asdf set -u java openjdk-17
```

#### Xcode
- install the latest 
#### Android Studios 
- https://reactnative.dev/docs/set-up-your-environment?platform=android
- install the latest 
shell 
```
export ANDROID_HOME=$HOME/Library/Android/sdk  
export PATH=$PATH:$ANDROID_HOME/emulator  
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

---

# Build

## build packages
```
yarn
yarn build
```

 ### build mobile app
 ```
 cd apps/mobile-b
 # build ios - will also build native modules
 yarn ios
 yarn android
```

### Note
If you run `yarn start` then type `i` to build ios or `a` for Android; it will not build the native modules. You will need to run `yarn ios` or `yarn android`.


# Development 

## watch
This will rebuild changes in the packages. Only works with JS changes.
```
yarn dev
```

### Build mobile-b app -  ios
```
yarn workspace mobile-b ios
```

### Build mobile-b app -  android
```
yarn workspace mobile-b android
```

---

# monorepo notes

## Turborepo - Expo
Turborepo is used for running CI task. 
ex: `yarn build` will run all the build scripts in `package.json` inside `apps/` and `packages/`. 


## Expo 
Here are the commands I used to setup the expo projects. 
- https://docs.expo.dev/guides/local-app-development/

Create starter expo app
```
 npx create-expo-app@latest
// cd into project
npx expo install expo-dev-client
```


Create the native folders 
```
npx expo run:ios
npx expo run:android
```


## native module 

```
npx create-expo-module packages/MODULE_NAME --no-example

cd into the module 
```

## Links
- https://docs.expo.dev/guides/monorepos/
- https://docs.expo.dev/modules/native-module-tutorial/
- https://docs.expo.dev/modules/use-standalone-expo-module-in-your-project/#initialize-a-new-module




