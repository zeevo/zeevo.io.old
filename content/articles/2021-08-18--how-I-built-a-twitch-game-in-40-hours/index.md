---
title: How I Built A Game In 40 Hours
date: '2021-08-18T17:43:28Z'
layout: post
draft: true
path: '/2021/08/18/how-i-built-a-game-in-40-hours/'
category: 'Web Development'
tags:
  - 'Web Development'
description: ''
---

![TDGG](./TDGG.png)

## How I Build Sites Nowadays

### NextJS

I find myself reaching for NextJS for practically every project now. It's developer experience is world class and I can
quickly get a prototype working in just a couple hours.

### GraphQL

### React Context

Instead of Redux, I typically reach for React Context instead. It has less boilerplate,

```js
import { createContext, useContext, useReducer } from 'react';
import { produce } from 'immer';

const reducer = (state, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case 'initialize': {
        draft.message = 'Hello world';
        break;
      }
    }
  });

const GlobalState = createContext([]);

function GlobalStateProvider(props) {
  const { children } = props;
  const [state, dispatch] = useReducer < any > (reducer, {});
  return <GlobalState.Provider value={[state, dispatch]}>{children}</GlobalState.Provider>;
}

function useGlobalState(): any {
  const context = useContext(GlobalState);
  return context;
}

export default GlobalStateProvider;

export { useGlobalState };
```
