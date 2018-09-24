const wrapWithPromise = require('../');

const a = b => b;
const b = () => {throw new Error('General error')};

const newA = wrapWithPromise(a);
const newB = wrapWithPromise(b);

describe('wrapWithPromise', () => {
  it('will return a promise', () => {
    const promise = newA();
    expect(typeof promise.then === 'function').toBe(true);
  });

  it('resolves with the result of the wrapped function', async () => {
    const spy = jest.fn();
    await newA('Hello world').then(spy);
    expect(spy).toBeCalledWith('Hello world');
  });

  it('rejects with the given error', async () => {
    let error;
    await newB().catch(err => {error = err});
    expect(error).toBeDefined();
  });
});