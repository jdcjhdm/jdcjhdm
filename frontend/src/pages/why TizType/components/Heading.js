import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
	container: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	heading: {
		padding: '0 0 1em',
		fontSize: '2em',
	},
	subHeading: {
		fontSize: '1.3em',
		color: 'rgb(0,0,0,0.5)',
	},
});

const Heading = () => {
	const classes = useStyles();

	return (
		<Box id='why-tiz-type' className={classes.container}>
			<Typography componant='h2' variant='body2' className={classes.heading}>
				چرا تیزتایپ؟
			</Typography>
			<Typography variant='body2' className={classes.subHeading}>
				سریع و امن، راحت و کاربرپسند، کارا و به‌صرفه
			</Typography>
		</Box>
	);
};

export default Heading;
