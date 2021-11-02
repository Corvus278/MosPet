import React from 'react';
import styles from './stepcard.css';

interface IStepCardProps {
	heading: string
	desc: string
	imgUrl: string
	imgAlt: string
}

export function StepCard({ heading, desc, imgUrl, imgAlt }: IStepCardProps) {
	return (
		<li className={styles.card}>
			<h3 className={styles.heading}>
				{heading}
			</h3>
			<p className={styles.desc}>
				{desc}
			</p>
			<img src={imgUrl} alt={imgAlt} className={styles.img} />
		</li>
	);
}
