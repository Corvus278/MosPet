import React from 'react';
import { Button } from '../Button';
import { FullContent } from './FullContent';
import logo from '../../img/logo.png'
import styles from './header.css';

interface IHeaderProps {
	full?: true
}

export function Header({ full }: IHeaderProps) {
	let content: React.ReactNode = <div></div>

	if (full) {
		content = <FullContent />
	}

	return (
		<header className={styles.header}>
			<div className='container'>
				<div className={styles.headerCont}>
					<img src={logo} alt="Logo" />
					{content}
				</div>
			</div>
		</header>
	);
}
