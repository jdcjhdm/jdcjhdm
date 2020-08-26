import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/styles';
import Heading from './components/Heading';
import Cards from './components/Cards';

const useStyles = makeStyles({
	container: {
		height: '87vh',
		display: 'flex',
		flexDirection: 'column',
		backgroundColor: '#F9FCFF',
	},
	space: {
		flexGrow: 0.7,
	},
	heading: {
		flexGrow: 0.7,
	},
	cards: {
		flexGrow: 2,
	},
});

const WhyTizType = () => {
	const classes = useStyles();

	return (
		<Box id='why-tiz-type' className={classes.container}>
			<Box className={classes.space} />
			<Box className={classes.heading}>
				<Heading />
			</Box>
			<Box className={classes.cards}>
				<Cards />
			</Box>
		</Box>
	);
};

export default WhyTizType;
