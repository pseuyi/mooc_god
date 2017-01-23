```
Tom's Rules
1. Any side effects (http requests, playing audio, etc) belong in a thunk
2. Dumb components should be as dumb as possible (i.e. only deal with calculating the view).
3. Your initial state should be defined at least one level deep

```

```
Your mantra:
  1. An `action` is an object with a type field, and possibly a payload
  2. A `thunk` is a function that expects to receive `dispatch` as its first argument
  3. An `action creator` is a function that returns an action or a thunk - we write these so that we don't have to write out our actions and thunks each time

  4. When I `store.dispatch` an action or a thunk, it goes to my store's `middleware`
  5. If I have thunk middleware installed, thunk middleware will check and see if the thing I dispatched is a thunk or an action
    5a. If it is a `thunk` (a function), the thunk middleware invokes the `thunk` and passes `dispatch` to it: `STOP`
    5b. If it is an `action` (a plain object), the thunk middleware lets the action continue to the `reducer`
  6. The `reducer` is invoked with the current state inside the store and the `action`
  7. The `reducer` returns the new state object and sets it in the `store`.
  8. The `store` invokes any callbacks that have been set using `store.subscribe`
    8a. Every component that gets created using `connect` automatically registers a callback with `store.subscribe`
    8b. This callback causes any child components of the `connect` to be re-rendered with the new state.
```
