import { MaxWidthWrapper } from '@/components/MaxWidthWrapper';
import { buttonVariants } from '@/components/ui/button';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export const Navbar = async () => {
	const { getUser } = getKindeServerSession();
	const user = await getUser();
	const isAdmin = user?.email === process.env.ADMIN_EMAIL;

	return (
		<nav
			className={
				'sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'
			}
		>
			<MaxWidthWrapper>
				<div
					className={
						'flex items-center justify-between h-14 border-b border-zinc-200'
					}
				>
					<Link className={'font-semibold z-40 flex gap-1'} href={'/'}>
						case<span className={'text-green-600'}>cobra</span>
					</Link>

					<div className={'flex items-center h-full space-x-4'}>
						{user ? (
							<>
								<Link
									href={'/api/auth/logout'}
									className={buttonVariants({
										variant: 'ghost',
										size: 'sm',
									})}
								>
									Sign out
								</Link>
								{isAdmin ? (
									<Link
										href={'/api/auth/logout'}
										className={buttonVariants({
											variant: 'ghost',
											size: 'sm',
										})}
									>
										Dashboard ✨
									</Link>
								) : null}
								<Link
									href={'/configure/upload'}
									className={buttonVariants({
										size: 'sm',
										className: 'items-center gap-1 hidden sm:flex',
									})}
								>
									Create a case
									<ArrowRight className={'ml-1.5 h-5 w-5'} />
								</Link>
							</>
						) : (
							<>
								<Link
									href={'/api/auth/register'}
									className={buttonVariants({
										variant: 'ghost',
										size: 'sm',
									})}
								>
									Sign up
								</Link>
								<Link
									href={'/api/auth/login'}
									className={buttonVariants({
										variant: 'ghost',
										size: 'sm',
									})}
								>
									Login
								</Link>
								<div className={'h-8 w-px bg-zinc-200 hidden sm:block'} />
								<Link
									href={'/configure/upload'}
									className={buttonVariants({
										size: 'sm',
										className: 'items-center gap-1 hidden sm:flex',
									})}
								>
									Create a case
									<ArrowRight className={'ml-1.5 h-5 w-5'} />
								</Link>
							</>
						)}
					</div>
				</div>
			</MaxWidthWrapper>
		</nav>
	);
};
