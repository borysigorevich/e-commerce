import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react';

export const MaxWidthWrapper = ({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) => {
	return (
		<div
			className={cn(
				'max-w-screen-xl h-full w-full mx-auto px-2.5 md:px-20',
				className
			)}
		>
			{children}
		</div>
	);
};
