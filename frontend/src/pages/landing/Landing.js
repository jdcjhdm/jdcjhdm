import React from 'react';
import TopNavbar from './components/TopNavbar';
import BottomNavbar from './components/BottomNavbar';
import Content from './components/Content';
import Footer from './components/Footer';
import SignUpForm from './components/Form';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const sections = [
	{ title: 'پروژه‌ها', url: '#' },
	{ title: 'تعرفه‌ها', url: '#' },
	{ title: 'راهنمای استفاده', url: '#' },
	{ title: 'بیشتر درباره تیزتایپ', url: '#' },
];

const Landing = () => {
	return (
		<div className='landing-container'>
			<TopNavbar />
			<BottomNavbar sections={sections} />
			<Container>
				<Grid container direction='row-reverse' justify='center' alignItems='center' style={{ height: '77vh' }}>
					<Grid item style={{ direction: 'rtl', marginLeft: 40 }}>
						<Content />
					</Grid>
					<Grid item>
						<SignUpForm />
					</Grid>
				</Grid>
			</Container>
			<Footer />
		</div>
	);
};

export default Landing;
