# vue-ajax-handler

[![CircleCI](https://circleci.com/gh/David-Desmaisons/vue-ajax-handler.svg?style=shield)](https://circleci.com/gh/David-Desmaisons/vue-ajax-handler)
[![Coverage](https://codecov.io/gh/David-Desmaisons/vue-ajax-handler/branch/master/graph/badge.svg)](https://codecov.io/gh/David-Desmaisons/vue-ajax-handler)
[![GitHub open issues](https://img.shields.io/github/issues/David-Desmaisons/vue-ajax-handler.svg)](https://github.com/David-Desmaisons/vue-ajax-handler/issues)
[![Npm version](https://img.shields.io/npm/v/vue-ajax-handler.svg)](https://www.npmjs.com/package/vue-ajax-handler)
[![MIT License](https://img.shields.io/github/license/David-Desmaisons/vue-ajax-handler.svg)](https://github.com/David-Desmaisons/vue-ajax-handler/blob/master/LICENSE)

Ultra minimal generic vue component to deal with ajax loading

## Usage

Adapted from: https://adamwathan.me/renderless-components-in-vuejs/

Perform an ajax call and delegate the rendering to:

- `loading` slot when loading

- `default` slot passing data as parameter in case of success.

- `error` slot passing error as parameter in case of error.

This a generic library with no dependency on ajax library, so

  - The component parent should provide a get function using the provide API. It could be axios get or fetch, or any ajax library.

```HTML
<ajax-handler url="https://api.github.com/orgs/vuejs/repos">
  <template #default="{data}">
    <p>{{data.data[0].name}}</p>
  </template>
</ajax-handler>
```

```javascript
import { ajaxHandler } from 'vue-ajax-handler'
import { get } from "axios";

export default {
  components: {
    ajaxHandler
  },
  inject: {
    get
  }
}
```

## API

### ajax-handler 

#### slots 

- `loading` slot to render loading feedback 

- `error` slot to render error feedback 

- `default` slot to render data when loaded. Receives data as parameter. 

#### props 

- `url` ***String*** (*required*) 

  The url used to make ajax request. 

#### methods 

- `load()` 

  Perform an ajax call.
  Automatically called by created hook. 

## Installation

```
npm install vue-ajax-handler
```

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### Run your unit tests

```
npm run test:unit
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Update the API section of README.md with generated documentation

```
npm run doc:build
```
