# Meeow

> Generate link for cute image from [{placekitten}](http://placekitten.com).

## Usage

```js
import meeow from 'meeow';

console.log(meeow.getUrl(200, 300))
// http://placekitten.com/200/300
```

Third parameter is a boolean for grayscale
```js
import meeow from 'meeow';

console.log(meeow.getUrl(200, 300, true))
// http://placekitten.com/g/200/300
```

## License

Apache 2.0