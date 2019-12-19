# WP Get Plugin Data 
A Node Package that mimics the [`get_plugin_data()`](https://developer.wordpress.org/reference/functions/get_plugin_data/) WordPress function

Use it like this:

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
  domainPath: '...',
  network: '...',
  requiresWP: '...',
  requiresPHP: '...',
  _sitewide: '...' }
```
