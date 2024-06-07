import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'react';

type PhoneProps = {
	imgSrc: string;
	dark?: boolean;
} & HTMLAttributes<HTMLDivElement>;

export const Phone = ({ className, imgSrc, dark, ...rest }: PhoneProps) => {
	return (
		<div
			className={cn('relative pointer-events-none z-50 overflow-hidden', className)}
			{...rest}
		>
			<img
				src={
					dark
						? '/phone-template-dark-edges.png'
						: '/phone-template-white-edges.png'
				}
				alt="phone image"
				className={'pointer-events-none z-50 select-none'}
			/>

			<div className={'absolute -z-10 inset-0'}>
				<img
					src={imgSrc}
					alt="overlaying phone image"
					className={'object-cover'}
				/>
			</div>
		</div>
	);
};
