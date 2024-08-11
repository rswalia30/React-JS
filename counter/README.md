# Explanation

The value of `cnt` only increases by 1 because React's `setState` (in this case, `setCnt`) doesn't immediately update the state. Instead, it schedules the state update and then re-renders the component. When you call `setCnt(cnt + 1)` multiple times within the same function, React batches these updates and only applies the last one.

In the code you provided:

```javascript
setCnt(cnt + 1);
setCnt(cnt + 1);
setCnt(cnt + 1);
setCnt(cnt + 1);
```

Each `setCnt(cnt + 1)` is using the current value of `cnt`, which hasn't been updated yet. So, all these calls are effectively doing the same thing: setting `cnt` to `cnt + 1`.

To correctly increase the value by 4, you can use the functional form of `setCnt`, which ensures that each update uses the latest state value:

```javascript
setCnt((prevCnt) => prevCnt + 1);
setCnt((prevCnt) => prevCnt + 1);
setCnt((prevCnt) => prevCnt + 1);
setCnt((prevCnt) => prevCnt + 1);
```

This way, each update will use the most recent value of `cnt`, and the value will increase by 4 as expected.
