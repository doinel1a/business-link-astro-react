import { useState, useEffect } from 'react';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';

import useIsMobile from '../hooks/useIsMobile';
import ButtonIcon from '../components/Buttons/ButtonIcon';
import ButtonCopy from '../components/Buttons/ButtonCopy';
import ThemeToggle from './ThemeToggle';

import meta_tags from '../config/meta_tags';

export default function Header() {
	const isMobile = useIsMobile();
	const [isShareSupported, setIsShareSupported] = useState(false);

	useEffect(() => {
		const navigator: any = window.navigator;
		navigator.canShare
			? setIsShareSupported(true)
			: setIsShareSupported(false);
	});

	return (
		<header className='w-full'>
			<div className='h-12 flex justify-between items-center'>
				{isMobile ? (
					isShareSupported ? (
						<ButtonIcon
							title='Share link'
							icon={faShareNodes}
							buttonCss='bg-transparent'
							iconCss='text-color-light dark:text-color-dark'
							onClick={shareUrl}
						/>
					) : (
						<ButtonCopy
							title='URL'
							contentToCopy={meta_tags.app_url}
						/>
					)
				) : (
					<ButtonCopy title='URL' contentToCopy={meta_tags.app_url} />
				)}
				<ThemeToggle />
			</div>
		</header>
	);
}

async function shareUrl() {
	const navigator: any = window.navigator;
	const shareUrlData = {
		title: meta_tags.title,
		text: meta_tags.description,
		url: meta_tags.app_url,
	};

	try {
		await navigator.share(shareUrlData);
	} catch (error) {
		console.error('ERROR NAVIGATOR SHARE: ', error);
	}
}
