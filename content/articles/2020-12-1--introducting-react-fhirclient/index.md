---
title: Introducing React FHIR Client
date: '2020-12-01T12:00:00.000Z'
layout: post
draft: false
path: '/2020/12/react-fhirclient'
category: 'Web Development'
tags:
  - 'Web Development'
  - 'FHIR'
  - 'Healthcare'
description: 'Love React hooks and fhirclient? react-fhirclient allows you to use them together easily.'
---

Fast Interoperable Healthcare Resources is a healthcare API specification used
by systems to achieve interoperability with each other.

Today I want to introduce you to a little library I wrote called
`react-fhirclient`. This is for everyone that uses the popular JavaScript FHIR
Client known simply as `fhirclient`. This little library allows us to
authenticate with FHIR Servers using the [SMART App Launch Framework](http://www.hl7.org/fhir/smart-app-launch/)--
aka "SMART on FHIR".

`fhirclient` is not a library that works terribly-well with [React Hooks](https://reactjs.org/docs/hooks-intro.html), so I wanted to create a
wrapper using [React Context](https://reactjs.org/docs/context.html) to make it easier for developers to make FHIR calls in React.

## react-fhirclient

### 1. Install it using `npm`

```
npm i react-fhirclient
```

or with `yarn`:

```
yarn add react-fhirclient
```

### 2. Add `FhirClientProvider` to your ReactDOM tree.

```js
ReactDOM.render(
  <React.StrictMode>
    <FhirClientProvider>
      <App />
    </FhirClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
```

### 3. Use `useFhirClient()` in your hooks.

```js
import { useState, useEffect } from 'react';
import { useFhirClient } from 'react-fhirclient';

function App() {
  const [patient, setPatient] = useState();
  const fhirclient = useFhirClient();

  return <div className="App"></div>;
}

export default App;
```

### 4. Make FHIR Requests in `onEffect`

```js
import { useState, useEffect } from 'react';
import { useFhirClient } from 'react-fhirclient';

function App() {
  const [patient, setPatient] = useState();
  const fhirclient = useFhirClient();

  useEffect(() => {
    const getPatient = async () => {
      if (fhirclient) {
        const patient = await fhirclient.request(`Patient/${fhirclient.patient.id}`);
        setPatient(patient);
      }
    };
    getPatient();
  }, []);

  return (
    <div className="App">
      <pre>
        <code>{JSON.stringify(patient, null, 2)}</code>
      </pre>
    </div>
  );
}

export default App;
```

"Why do we need the `if (fhirclient)` guard?" Due to authentication with the authorization server being an asynchronous process, there will be a moment when the client is not instantiated and thus will be `undefined`.

## In the Future

Supporting any FHIR client would be beneficial to the community. If you have a FHIR client that you want supported, raise an [Issue](https://github.com/zeevosec/react-fhirclient/issues) describing it.
