# Console Toast Chrome Extension
### Display console output on page.

#### How to install extension
- Go to chrome://extensions/ 
- Turn on Developer Mode.
- Click on "Load unpacked" and select src folder.

You can change the urls in [manifest.json content_scripts.matches array](https://github.com/MoishyS/console-toast/blob/main/src/manifest.json#L10), to restrict the extension to certain urls.

This extension uses [toastr package](https://github.com/CodeSeven/toastr).