## BITBOX Scaffold Node

### Intro

BITBOX scaffolds are basic apps w/ bindings to your local running BITBOX. They allow a developer to hit the ground running and waste no time w/ app set up and configuration.

This scaffold is basic command line node app w/ BITBOX bindings It already has `BITBOX` instantiated and is ready to roll.

## Setup

1. Download the latest build from [bitbox.earth](https://www.bitbox.earth/) and compare [the checksums](https://github.com/bigearth/keys-n-hashes)
2. Start your local BITBOX
3. [Install `bitbox-cli`](https://www.npmjs.com/package/bitbox-cli) globally
  * `npm install bitbox-cli --global`
4. Create empty directory for your new app
  * `mkdir BCH4all && cd BCH4all`
5. Scaffold a React app w/ BITBOX web bindings
  * `bitbox scaffold --framework node`
6. Install dependencies
  * `npm install`
7. Start the app
  * `npm start`
8. Confirm you are seeing the `getinfo` method returning data from your local BITBOX
9. Win

## Troubleshooting

### `TypeError: Cannot read property 'data' of undefined` error?

1. Confirm your local BITBOX before running `npm start`
2. Confirm the arguments that you're passing in to the method call are correct
