import React from 'react';
import TopNavbar from './components/TopNavbar';
import BottomNavbar from './components/BottomNavbar';
import Content from './components/Content';
import Footer from './components/Footer';
import SignUpForm from './components/Form';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
	container: {
		background: 'linear-gradient(0deg, rgba(21, 77, 105, 1) 0%, rgba(178, 219, 191, 1) 100%)',
		height: '100vh',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		[theme.breakpoints.down('sm')]: {
			height: '70vh',
		},
	},
	box: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
		},
	},
}));

const sections = [
	{ title: 'پروژه‌ها', url: '#' },
	{ title: 'تعرفه‌ها', url: '#' },
	{ title: 'راهنمای استفاده', url: '#' },
	{ title: 'بیشتر درباره تیزتایپ', url: '#' },
];

const Landing = () => {
	const classes = useStyles();

	return (
		<Box className={classes.container}>
			<Box>
				<TopNavbar />
				<BottomNavbar sections={sections} />
			</Box>
			<Container>
				<Box className={classes.box}>
					<Content />
					<SignUpForm />
				</Box>
			</Container>
			<Footer />
		</Box>
	);
};

export default Landing;
