# Quasar Structure (quasar-structure)

## Structure folder
<pre>
src
 └── app
   └── application # Application layer
   └── domain # Domain layer
   └── infrastructure # Infrastructure layer
     └── boot # Boot files (app initialization code)
     └── builder # Factory to create something
       └── forms # Create forms
         └── FormBulder.js # All forms should extends this class
     └── components # Helpers and other classes to support application, domain and view layers
     └── i18n # i18n dictionary
     └── store # Vue store to handle vuex
     └── view # General components and mixins to support view layer
   └── view # View layer
     └── assets # Dynamic assets (processed by webpack)
     └── components # .vue components used in pages & layouts
     └── layouts # Your layouts
     └── pages # Your pages
     └── statics # Pure static assets (directly copied)
 └── css # CSS/Stylus/Sass/... files for your app
 └── router # Vue Router
 </pre>

## Example using this structure
See [Routine app](https://github.com/erandirjunior/routine), Routine is a mobile app to handle tasks dairly.

## Install the dependencies
```bash
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```

### Lint the files
```bash
npm run lint
```

### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).
