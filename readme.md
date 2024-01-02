# Example wdio chromedriver bug project

## Steps to reproduce

`npm install`

Launch a emulator or device (android only)

`npm run wdio`

Should see after the termination of the app:

```
 unknown error: An unknown server-side error occurred while processing the command. Original error: disconnected: not connected to DevTools
  (failed to check if window was closed: disconnected: not connected to DevTools)
  (Session info: chrome=113.0.5672.136)
```
