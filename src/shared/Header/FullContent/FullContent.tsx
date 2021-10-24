import React from 'react';
import { Button } from '../../Button';
import styles from './fullcontent.css';

export function FullContent() {
	return (
		<div className={styles.headerContent}>
			<div className={styles.mainContent}>
				<h1 className={styles.heading}>
					Пропал ваш любимый питомец?
				</h1>
				<p className={styles.headingDesc}>
					<span className={styles.descString}>Нашли кошку или собаку?</span>
					<span className={styles.descString}>Потерялся любимец?</span>
					<span className={styles.descString}>Наш сервис поможет вам</span>
				</p>
				<Button text='Потерял питомца' />
			</div>
			<div className={styles.backImg}></div>
		</div>
	);
}
