import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import UseStateSample from './components/UseStateSample';
import Alert from './components/Alert';
import { BrowserRouter } from 'react-router-dom';
import IbanContextProvider from './pages/contextApi/context/IBanCopyContext';

// import UseStateSample from './components/UseStateSample';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

// Index.tsx dosyası ise uygulamanın index.html ilk tanıtımını yapıldığı yerdir.

root.render(
	<BrowserRouter>
		<IbanContextProvider>
			<App />
			{/* uygulamaın react üzerindne çalıştığı ana dizin app dosyasıdır. */}
		</IbanContextProvider>
	</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
