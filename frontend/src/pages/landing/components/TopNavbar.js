import React from 'react';
import Logo from '../../../utils/img/rsz_logo.jpg';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	logo: {
		height: '50px',
		width: '50px',
		[theme.breakpoints.down('xs')]: {
			height: '35px',
			width: '35px',
		},
	},
	whiteBG: {
		backgroundColor: '#FFF',
	},
	gridPadding: {
		padding: '10px 0',
	},
	messageWrap: {
		marginRight: 20,
		color: '#154d69',
		textAlign: 'right',
		[theme.breakpoints.down('xs')]: {
			marginRight: 10,
		},
	},
	message: {
		fontSize: '1.1em',
		[theme.breakpoints.down('xs')]: {
			fontSize: '0.8em',
		},
	},
	signUpBtn: {
		color: '#154d69',
		[theme.breakpoints.down('xs')]: {
			fontSize: '0.85em',
		},
	},
	signInBtn: {
		marginRight: 3,
		color: '#154d69',
		[theme.breakpoints.down('xs')]: {
			fontSize: '0.85em',
		},
	},
	toolbarSecondary: {
		overflowX: 'auto',
		padding: 0,
		justifyContent: 'space-between',
	},
	btnContainer: {
		direction: 'ltr',
	},
}));

const Navbar = () => {
	const classes = useStyles();

	return (
		<Grid container className={classes.whiteBG}>
			<Container>
				<Toolbar component='nav' variant='regular' className={classes.toolbarSecondary}>
					<Grid item xs={6} md={6} container alignItems='center'>
						<img src={Logo} alt='Logo' className={classes.logo} />
						<Grid item className={classes.messageWrap}>
							<Typography display='inline' className={classes.message}>
								جلب رضایت شما
							</Typography>
							<br />
							<Typography display='inline' className={classes.message}>
								اولین اولویت ماست
							</Typography>
						</Grid>
					</Grid>
					<Grid item xs={6} md={6} className={classes.btnContainer}>
						<Button variant='outlined' color='primary' className={classes.signUpBtn}>
							عضویت
						</Button>
						<Button className={classes.signInBtn}>ورود</Button>
					</Grid>
				</Toolbar>
			</Container>
		</Grid>
	);
};

export default Navbar;
