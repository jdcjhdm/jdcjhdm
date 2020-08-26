import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	container: {
		height: '13vh',
		backgroundColor: '#154D69',
		color: 'white',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
});

const Footer = () => {
	const classes = useStyles();

	return (
		<Box className={classes.container}>
			<Container>
				<Typography>فوتر</Typography>
			</Container>
		</Box>
	);
};

export default Footer;
