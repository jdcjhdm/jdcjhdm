import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	button: {
		direction: 'ltr',
	},
	link: {
		marginBottom: theme.spacing(6),
		[theme.breakpoints.down('sm')]: {
			fontSize: '0.7em',
			marginBottom: theme.spacing(4),
		},
		'&:hover': {
			cursor: 'hover',
		},
	},
}));

const Footer = () => {
	const classes = useStyles();

	return (
		<Grid container justify='center' alignItems='center'>
			<Link href='#why-tiz-type' color='secondary' underline='none' className={classes.link}>
				<Button variant='outlined' color='secondary' startIcon={<ExpandMoreIcon />} className={classes.button}>
					چرا تیزتایپ؟
				</Button>
			</Link>
		</Grid>
	);
};

export default Footer;
