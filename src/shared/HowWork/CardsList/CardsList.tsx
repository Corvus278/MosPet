import React from 'react';
import styles from './cardslist.css';
import { StepCard } from './StepCard';

interface IStepCardProps {
	heading: string
	desc: string
	imgUrl: string
	imgAlt: string
}

interface ICardListProps {
	cardsData: Array<IStepCardProps>
}

export function CardsList({ cardsData }: ICardListProps) {
	return (
		<ul className={styles.list}>
			{cardsData.map((cardData, index) => {
				return <StepCard heading={cardData.heading} desc={cardData.desc} imgUrl={cardData.imgUrl} imgAlt={cardData.imgAlt} key={index} />
			})}
		</ul>
	);
}
