# HelloWorldSimple
A simple hello world plugin for Converse.AI.
This is the resulting code for the [Hello World (Simple)](https://get.converse.ai/v2/docs/hello-world-simple-cli) tutorial.

## Prerequisites
1. Ensure you have an account with [Converse.AI](http://www.converse.ai/)
2. Converse.AI extensions run on **Node.JS** `v6.11.1` on **Alpine Linux** so ensure your node development environment matches this setup. We recommend installing Node.JS via [Node Version Manager (NVM)](https://github.com/creationix/nvm).
3. Install and Authorize [Converse.AI CLI tool](https://dash.readme.io/project/converseai/v2/docs/converse-ai-cli).

## Install
4. Clone repo
5. Initialize extension by running `converse-cli plugin init` from your project root.
6. Run `npm test` from your project root to ensure everything was initialized correctly.
7. Deploy the plugin to your Converse.AI account by running `converse-cli deploy` from your project root.
8. If there are no errors, the plugin should be available under "User" in the left hand menu of the designer.
