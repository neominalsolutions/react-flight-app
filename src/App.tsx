import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Outlet, useRoutes } from 'react-router-dom';
import AlertSamplePage from './pages/AlertSamplePage';
import UseStateSamplePage from './pages/UseStateSamplePage';
import StateSamplePage from './pages/StateSamplePage';
import StateSampleRefPage from './pages/StateSampleRefPage';
import UseEffectPage from './pages/UseEffectPage';
import UseRefSamplePage from './pages/UseRefSamplePage';
import ContextAPISamplePage02 from './pages/contextApi/ContextAPISamplePage02';
import ContextAPISamplePage01 from './pages/contextApi/ContextAPISamplePage01';

function App() {
	// yönlendirme dosyamız.
	// uygulama ayağa kalkarken useRoute için tanımlanmış olan yönlendirmeleri okur ve ona göre sayfaları yönlendirir.
	// Hooklar Component içerisindeki özel fonkisyonlar, component ektra özellik kazandırır. App componenti route yönlendirme componenti haline geldi.

	const routes = useRoutes([
		{
			path: '/alert',
			Component: AlertSamplePage, // Page Component
		},
		{
			path: '/useState',
			Component: UseStateSamplePage, // Page Component
		},
		{
			path: '/state',
			Component: StateSamplePage,
		},
		{
			path: '/stateRef',
			Component: StateSampleRefPage,
		},
		{
			path: 'useEffect',
			Component: UseEffectPage,
		},
		{
			path: 'useRef',
			Component: UseRefSamplePage,
		},
		{
			path: 'pasteIban',
			Component: ContextAPISamplePage02,
		},
		{
			path: 'copyIban',
			Component: ContextAPISamplePage01,
		},
	]);

	return (
		<>
			{/* Yönlendirilecek componentler için bir işaretleme sağlar. */}
			<div style={{ padding: '1rem', margin: '1rem' }}>
				<Outlet />
			</div>

			{routes}
		</>
	);
}

export default App;
