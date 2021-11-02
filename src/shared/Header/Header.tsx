import React from 'react';
import styles from './header.css';


export function Header() {
	return (
		<header className={styles.header}>
			<div className='container'>
				<div className={styles.headerCont}>
					<img className={styles.logo} src='static/img/logo.png' alt="Logo" />
				</div>
			</div>
		</header>
	);
}
