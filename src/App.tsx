import * as React from 'react'
import { hot } from 'react-hot-loader/root'
import './main.global.css'
import { Hero } from './shared/Hero'
import { Header } from './shared/Header'
import Layout from './shared/Layout/Layout'

function AppComponent() {
	return (
		<Layout>
			<Header />
			<Hero />
		</Layout>
	)
}

export const App = hot(AppComponent)
