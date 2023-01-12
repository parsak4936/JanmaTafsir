import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider, useSelector } from 'react-redux';
import  store ,{persistor} from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import './fonts/iransans/ttf/IRANSansWebFaNum_Medium.ttf';
import './fonts/iransans/ttf/IRANSansWebLight.ttf'
;
import './fonts/iransans/ttf/IRANSansWeb.ttf'


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
<Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <App />
    </PersistGate>
</Provider>
</React.StrictMode>,
);
 
reportWebVitals();
