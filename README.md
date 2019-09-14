
# vue-lazy-loading
[![GitHub open issues](https://img.shields.io/github/issues/David-Desmaisons/vue-lazy-loading.svg?maxAge=2592000)](https://github.com/David-Desmaisons/vue-lazy-loading/issues)
[![Npm version](https://img.shields.io/npm/David-Desmaisons/vue-lazy-loading.svg?maxAge=2592000)](https://www.npmjs.com/package/vue-lazy-loading)
[![MIT License](https://img.shields.io/github/license/David-Desmaisons/vue-lazy-loading.svg)](https://github.com/David-Desmaisons/vue-lazy-loading/blob/master/LICENSE)

## Usage
```HTML
<ajax-handler url="https://api.github.com/orgs/vuejs/repos">
  <template #default="{data}">
    <p>{{data.data[0].name}}</p>
  </template>
</ajax-handler>
```
```javascript
import { ajaxHandler } from 'AjaxHandler'

export default {
  components: {
    ajaxHandler
  }
}
```
## API

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
