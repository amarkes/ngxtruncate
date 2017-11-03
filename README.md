# NgxTruncate

[![GitHub issues](https://img.shields.io/github/issues/amarkes/ngxtruncate.svg)](https://github.com/amarkes/ngxtruncate/issues)
[![GitHub stars](https://img.shields.io/github/stars/amarkes/ngxtruncate.svg)](https://github.com/amarkes/ngxtruncate/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/amarkes/ngxtruncate.svg)](https://github.com/amarkes/ngxtruncate/network)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/amarkes/https://github.com/amarkes/ngxtruncate/master/LICENSE)



# Required
- node v8.4.0
- npm v5.5.1
- typescript v2.3.3
- Angular: 4.2.4
- Angular CLI: 1.5.0

# install

```sh
npm install ngx-truncate --save
```

# Module

```javascript
import { NgXtruncateModule } from 'ngx-truncate';

@NgModule({
  imports: [
    NgXtruncateModule
  ],
})

```

### HTML

```html
// app.html
{{ 'a simple test variable' | ngXtruncate}}
{{ 'a simple test variable' | ngXtruncate:8}}
{{ 'a simple test variable' | ngXtruncate:8:'.'}}
```

# Note

> This pipe removes all html tags, using the regex `/<[^>]+>/gm`

# Build for developer

### Only use if you change the component

### Build

```sh
npm run build
```

### Publish

```sh
npm publish
```

# Changelog

> All versions below 1.0.0 are beta

