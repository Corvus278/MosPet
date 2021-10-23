import * as React from 'react'
import { hot } from 'react-hot-loader/root'
import './main.global.css'
import { Header } from './shared/Header'
import Layout from './shared/Layout/Layout'

function AppComponent() {
	return (
		<Layout>
			<Header full={true} />
		</Layout>
	)
}

export const App = hot(AppComponent)
