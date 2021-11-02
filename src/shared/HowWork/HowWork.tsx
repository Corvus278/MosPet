import React from 'react';
import { CardsList } from './CardsList';
import styles from './howwork.css';

interface IStepCardProps {
	heading: string
	desc: string
	imgUrl: string
	imgAlt: string
}

export function HowWork() {
	const cardsData: Array<IStepCardProps> = [
		{
			heading: 'Шаг 1',
			desc: 'Загрузите фотографию потерявшегося питомца',
			imgUrl: 'static/img/dog-in-lens.svg',
			imgAlt: ''
		},
		{
			heading: 'Шаг 2',
			desc: 'Опишите характеристики вашего животного',
			imgUrl: 'static/img/dog-info.svg',
			imgAlt: ''
		},
		{
			heading: 'Шаг 1',
			desc: 'Получите ответ от нейросети',
			imgUrl: 'static/img/search.svg',
			imgAlt: ''
		}
	]

	return (
		<section className={styles.howWork + ' container'}>
			<h2 className={styles.heading}>
				Как это работает
			</h2>
			<p className={styles.desc}>
				Поиск пропавших животных происходит при помощи нейросети, обрабатывающей информацию с&nbsp;камер Москвы.
				Для того чтобы получить местоположение вашего питомца, вам необходимо выполнить три простых шага
			</p>
			<CardsList cardsData={cardsData} />
		</section>
	);
}
