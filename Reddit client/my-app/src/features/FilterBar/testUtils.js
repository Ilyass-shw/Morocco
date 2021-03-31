import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
// import { makeStore } from '../dataLayer'
import store from '../../app/store'
// import configureStore from "redux-mock-store";



const TestProvider = ({
  store,
  children
}) => <Provider store={store}>{children}</Provider>

export function testRender(ui, { store, ...otherOpts }) {
  return render(<TestProvider store={store}>{ui}</TestProvider>, otherOpts)
}

export function makeTestStore(opts = {}) {
//   const store = makeStore(opts)
  const origDispatch = store.dispatch
  store.dispatch = jest.fn(origDispatch)
  return store
}

