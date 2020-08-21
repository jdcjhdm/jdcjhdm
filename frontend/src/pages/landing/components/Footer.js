import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Footer = () => {
	return (
		<Grid container justify='center' alignItems='center'>
			<Link href='#why-tiz-type' color='secondary' underline='none'>
				<Button variant='outlined' color='secondary' startIcon={<ExpandMoreIcon />}>
					چرا تیزتایپ؟
				</Button>
			</Link>
		</Grid>
	);
};

export default Footer;
