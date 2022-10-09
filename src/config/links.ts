import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';

import details from './details';

const links = [
	{
		text: 'LinkedIn',
		icon: faLinkedinIn,
		url: 'https://www.linkedin.com/in/user-name/',
	},
	{
		text: 'GitHub',
		icon: faGithub,
		url: 'https://github.com/user-name/',
	},
	{
		text: 'Website',
		icon: faGlobe,
		url: 'https://example.com',
	},
	{
		text: 'E-mail me',
		icon: faEnvelope,
		url: `mailto:${details.email}`,
	},
];

export default links;
