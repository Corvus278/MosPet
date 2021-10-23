import React from 'react';
import styles from './button.css';

interface IButtonProps {
	text: string
}

export function Button({ text }: IButtonProps) {
	return (
		<button className={styles.button}>
			<p className={styles.buttonText}>{text}</p>
		</button>
	);
}
