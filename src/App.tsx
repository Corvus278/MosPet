import * as React from 'react'
import { hot } from 'react-hot-loader/root'
import './main.global.css'
import { Hero } from './shared/Hero'
import { Header } from './shared/Header'
import Layout from './shared/Layout/Layout'
import { HowWork } from './shared/HowWork'

function AppComponent() {
	return (
		<Layout>
			<Header />
			<Hero />
			<HowWork />
		</Layout>
	)
}

export const App = hot(AppComponent)
