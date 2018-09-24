# wrapWithPromise

Wrap a function with a promise.

## Install

```bash
npm install wrap-with-promise
```

## Usage

```js
// functions
const a = b => b;
const b = () => {
  throw new Error("General error");
};

// wrapped functions
const newA = wrapWithPromise(a);
const newB = wrapWithPromise(b);

// usage
newA("Hello world").then(data => console.log(data)); // Hello world
newB().catch(err => console.log(err)); // Error: General error
```
