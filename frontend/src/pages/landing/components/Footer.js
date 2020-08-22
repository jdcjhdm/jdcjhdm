import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	button: {
		direction: 'ltr',
	},
});

const Footer = () => {
	const classes = useStyles();

	return (
		<Grid container justify='center' alignItems='center'>
			<Link href='#why-tiz-type' color='secondary' underline='none'>
				<Button variant='outlined' color='secondary' startIcon={<ExpandMoreIcon />} className={classes.button}>
					چرا تیزتایپ؟
				</Button>
			</Link>
		</Grid>
	);
};

export default Footer;
