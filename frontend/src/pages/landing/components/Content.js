import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	heading: {
		fontSize: '2.5em',
		fontWeight: 100,
		marginBottom: '15px',
		color: '#FFF',
	},
	paragraph: {
		fontSize: '1.5em',
		textAlign: 'justify',
		maxWidth: '550px',
		color: 'rgb(255, 255, 255, 0.8)',
	},
});

const Content = () => {
	const classes = useStyles();

	return (
		<>
			<Typography component='h1' className={classes.heading}>
				تایپ آنلاین، به‌صرفه!
			</Typography>
			<Typography className={classes.paragraph}>
				تیزتایپ همواره در تلاش است تا بهترین تجربه‌ی سفارش، انجام و تحویل پروژه‌های تایپ بصورت آنلاین را برای شما به
				ارمغان بیاورد.
			</Typography>
		</>
	);
};

export default Content;
