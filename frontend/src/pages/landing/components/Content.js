import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	wrapper: {
		maxWidth: '500px',
	},
	heading: {
		fontSize: '2.5em',
		fontWeight: 100,
		marginBottom: '15px',
		color: '#FFF',
		[theme.breakpoints.down('sm')]: {
			fontSize: '1.5em',
		},
		[theme.breakpoints.down('lg')]: {
			fontSize: '2em',
		},
	},
	paragraph: {
		fontSize: '1.5em',
		textAlign: 'justify',
		color: 'rgb(255, 255, 255, 0.8)',
		marginTop: theme.spacing(2),
		[theme.breakpoints.down('sm')]: {
			fontSize: '1em',
		},
		[theme.breakpoints.down('lg')]: {
			fontSize: '1.3em',
		},
	},
}));

const Content = () => {
	const classes = useStyles();

	return (
		<Box className={classes.wrapper}>
			<Typography display='inline' component='h1' className={classes.heading}>
				تایپ آنلاین، به‌صرفه!
			</Typography>
			<Divider component='br' />
			<Typography className={classes.paragraph}>
				تیزتایپ همواره در تلاش است تا بهترین تجربه‌ی سفارش، انجام و تحویل پروژه‌های تایپ بصورت آنلاین را برای شما به
				ارمغان بیاورد.
			</Typography>
		</Box>
	);
};

export default Content;
