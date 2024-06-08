'use client';
import { MaxWidthWrapper } from '@/components/MaxWidthWrapper';
import { useInView } from 'framer-motion';
import React, { ComponentRef, useRef } from 'react';

const PHONES = [
	'./testimonials/1.jpg',
	'./testimonials/2.jpg',
	'./testimonials/3.jpg',
	'./testimonials/4.jpg',
	'./testimonials/5.jpg',
	'./testimonials/6.jpg',
];

const splitArray = <T,>(arr: Array<T>, size: number) => {
	const result: Array<Array<T>> = [];

	for (let i = 0; i < arr.length; i++) {
		const index = i % size;
		if (!result[index]) {
			result[index] = [];
		}
		result[index].push(arr[i]);
	}
	return result;
};

const ReviewGrid = () => {
	const containerRef = useRef<ComponentRef<'div'>>(null);
	const isInView = useInView(containerRef, {
		once: true,
		amount: 0.4,
	});
	const columns = splitArray(PHONES, 3);
	const column1 = columns[0];
	const column2 = columns[1];
	const column3 = splitArray(columns[2], 2);

	return (
		<div
			ref={containerRef}
			className={
				'relative grid -mx-4 mt-16 h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3'
			}
		></div>
	);
};

export const Reviews = () => {
	return (
		<MaxWidthWrapper className={'relative max-w-5xl'}>
			<img
				src="/what-people-are-buying.png"
				alt=""
				aria-hidden={true}
				className={'absolute select-none hidden lg:block -left-32 top-1/3'}
			/>

			<ReviewGrid />
		</MaxWidthWrapper>
	);
};
