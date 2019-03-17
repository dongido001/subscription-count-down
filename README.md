# Build a realtime subscription count down with Angular and Channels

This is the final application for the tutorial - "how to build a realtime subscription count down with Angular and Channels". You can read the tutorial on how it was built [here](https://pusher.com/tutorials/live-countdown-angular)


## Getting Started 

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

This tutorial uses the following:

- JavaScript
- Angular
- Node.js version 8.** or greater
- Channels for realtime functionality
- Express for the Node server
- TypeScript

Make sure you have [Node](https://nodejs.org/) installed on your system.

### Setting up the project

First of all, clone the repository to your local machine:

```sh
 git clone https://github.com/dongido001/subscription-count-down.git
```

Then get your Pusher API keys from your Pusher [Dashboard](https://dashboard.pusher.com/).

#### Setting up the server

 - CD in to the server folder:

```
  $ cd server
```

- Next, create your environment keys:

```
cp .env.example .env
```

- Then, update the `.env` file with the correct API keys.

- Next, install the dependencies:

```
npm install
```

- Then finally, start up the app:

```
npm run serve
```

#### Setting up the client 

You need the Angular CLI to be able to run this app. 

- Install it using the below command:

```
   npm install -g @angular/cli
```

- Update the `src/environments/ebvironment.ts` file with the correct API keys:

```js
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000',
  PUSHER_API_KEY: '<PUSHER_API_KEY>',
  PUSHER_API_CLUSTER: '<PUSHER_APP_CLUSTER>'
};
```

- You are to replace <PUSHER_API_KEY> and <PUSHER_APP_CLUSTER> with your correct API keys.

Next, install the dependencies (make sure you are in the root folder of the project and not in the server folder):

```
npm install
```

- Then finally, start up the app:

```
npm run start
```

The app should now be running on http://localhost:4200 by default

## Built With

* [Angular](https://angular.io/) - A platform that makes it easy to build applications with the web.
* [Pusher](https://pusher.com/) - APIs to enable devs building realtime.
* [Node](https://nodejs.org/)
