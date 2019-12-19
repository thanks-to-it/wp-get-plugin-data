# WP Get Plugin Data 

A Node Package that parses a WordPress plugin or any PHP file contents to retrieve its metadata, just like [`get_plugin_data()`](https://developer.wordpress.org/reference/functions/get_plugin_data/) WordPress function

Use it like this:

### plugin-file.php
```php
<?php
/**
 * Plugin Name: My Plugin File
 * Plugin URI: https://wordpress.org/plugins/...
 * Description: My plugin description
 * Version: 1.0.0
 * Author: Author Name,
 * Author URI: https://github.com/... 
 * Text Domain: my-plugin-domain
 * Domain Path: /src/languages
 * Requires at least: 3.0.0
 * Requires PHP: 7.0
 */
 ```

### app.js
```js
const WPGetPluginData = require('wp-get-plugin-data');
WPGetPluginData('plugin-file.php').then(function(parsedFile){    
    console.log(parsedFile);
});
```

```js
{ name: 'My Plugin File',
  pluginURI: 'https://wordpress.org/plugins/...',
  version: '1.0.0',
  description: 'My plugin description',
  author: 'Author Name',
  authorURI: 'https://github.com/...',
  textDomain: 'my-plugin-domain',
  domainPath: '/src/languages',  
  requiresWP: '3.0.0',
  requiresPHP: '7.0'   }
```
