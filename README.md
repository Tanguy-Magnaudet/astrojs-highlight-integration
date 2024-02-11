# Highlight SDK for Astrojs

Install and register this package in astro.config.js:

```js
import highlight from "astrojs-highlight-integration"

export default defineConfig({
	integrations: [
    // other integrations
		highlight({
			orgId: "kevq5wlg",
      options: {
        // See all the options here: https://www.highlight.io/docs/sdk/client#options
        disableNetworkRecording: false,
        disableConsoleRecording: false,
        enableStrictPrivacy: false,
        environment: 'production',
        version: '5.2.3',
        networkRecording: true,
      }
		})
	],
})
```

Options will be passed directly to H.init. See all available options in [the official doc](https://www.highlight.io/docs/sdk/client#Client-SDK).