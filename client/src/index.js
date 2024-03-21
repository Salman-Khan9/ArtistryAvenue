import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { PersistGate } from "redux-persist/integration/react";
import App from './App';
import { Provider} from "react-redux"
import { store , persistor} from './Redux/store/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <App />

      </PersistGate>
    </Provider>
    
  </React.StrictMode>
);


