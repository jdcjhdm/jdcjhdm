import React from 'react';
import Logo from '../../../utils/img/rsz_logo.jpg';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

const Navbar = () => {
	return (
		<Grid container style={{ backgroundColor: '#FFF' }}>
			<Container>
				<Grid
					item
					container
					direction='row-reverse'
					justify='space-between'
					alignItems='center'
					style={{ padding: '10px 0' }}
				>
					<Grid item xs={6} container direction='row-reverse' alignItems='center'>
						<img src={Logo} alt='Logo' className='logo' />
						<Grid
							item
							xs={8}
							container
							direction='column'
							justify='center'
							alignItems='flex-end'
							style={{ marginRight: 20, color: '#154d69' }}
						>
							<Grid item>جلب رضایت شما</Grid>
							<Grid item>اولین اولویت ماست</Grid>
						</Grid>
					</Grid>
					<Grid item xs={6}>
						<Button variant='outlined' color='primary' style={{ marginRight: 5, color: '#154d69' }}>
							عضویت
						</Button>
						<Button style={{ color: '#154d69' }}>ورود</Button>
					</Grid>
				</Grid>
			</Container>
		</Grid>
	);
};

export default Navbar;
