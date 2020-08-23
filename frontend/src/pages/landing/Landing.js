import React from 'react';
import TopNavbar from './components/TopNavbar';
import BottomNavbar from './components/BottomNavbar';
import Content from './components/Content';
import Footer from './components/Footer';
import SignUpForm from './components/Form';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
	container: {
		background: 'rgb(21, 77, 105)',
		background: 'linear-gradient(0deg, rgba(21, 77, 105, 1) 0%, rgba(178, 219, 191, 1) 100%)',
		height: '100vh',
	},
});

const sections = [
	{ title: 'پروژه‌ها', url: '#' },
	{ title: 'تعرفه‌ها', url: '#' },
	{ title: 'راهنمای استفاده', url: '#' },
	{ title: 'بیشتر درباره تیزتایپ', url: '#' },
];

const Landing = () => {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<TopNavbar />
			<BottomNavbar sections={sections} />
			<Container>
				<Grid container direction='row-reverse' justify='center' alignItems='center' style={{ height: '77vh' }}>
					<Grid item style={{ direction: 'rtl', marginLeft: 40 }}>
						<SignUpForm />
					</Grid>
					<Grid item>
						<Content />
					</Grid>
				</Grid>
			</Container>
			<Footer />
		</div>
	);
};

export default Landing;
