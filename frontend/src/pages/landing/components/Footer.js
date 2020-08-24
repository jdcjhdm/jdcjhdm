import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	button: {
		direction: 'ltr',
		marginBottom: theme.spacing(6),
		[theme.breakpoints.down('sm')]: {
			fontSize: '0.7em',
			marginBottom: theme.spacing(4),
		},
	},
}));

const Footer = () => {
	const classes = useStyles();

	return (
		<Grid container justify='center' alignItems='center'>
			<Button variant='outlined' color='secondary' startIcon={<ExpandMoreIcon />} className={classes.button}>
				<Link href='#why-tiz-type' color='secondary' underline='none'>
					چرا تیزتایپ؟
				</Link>
			</Button>
		</Grid>
	);
};

export default Footer;
