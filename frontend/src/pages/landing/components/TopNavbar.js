import React from 'react';
import Logo from '../../../utils/img/rsz_logo.jpg';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	logo: {
		height: '50px',
		width: '50px',
		[theme.breakpoints.down('sm')]: {
			height: '35px',
			width: '35px',
		},
	},
	whiteBG: {
		backgroundColor: '#FFF',
	},
	BoxPadding: {
		padding: '10px 0',
	},
	wrapper: {
		display: 'flex',
		alignItems: 'center',
		minWidth: '150px',
	},
	messageWrap: {
		marginRight: 20,
		color: '#154d69',
		textAlign: 'right',
		[theme.breakpoints.down('sm')]: {
			marginRight: 10,
		},
	},
	message: {
		fontSize: '1.1em',
		[theme.breakpoints.down('sm')]: {
			fontSize: '0.8em',
		},
	},
	signUpBtn: {
		color: '#154d69',
		[theme.breakpoints.down('sm')]: {
			fontSize: '0.85em',
		},
	},
	signInBtn: {
		marginLeft: 3,
		color: '#154d69',
		[theme.breakpoints.down('sm')]: {
			fontSize: '0.85em',
		},
	},
	toolbar: {
		overflowX: 'auto',
		padding: 0,
		justifyContent: 'space-between',
	},
	btnContainer: {
		direction: 'ltr',
		minWidth: '150px',
	},
}));

const Navbar = () => {
	const classes = useStyles();

	return (
		<Box className={classes.whiteBG}>
			<Container>
				<Toolbar component='nav' variant='regular' className={classes.toolbar}>
					<Box className={classes.wrapper}>
						<img src={Logo} alt='Logo' className={classes.logo} />
						<Box component='span' className={classes.messageWrap}>
							<Typography display='inline' className={classes.message}>
								جلب رضایت شما
							</Typography>
							<br />
							<Typography display='inline' className={classes.message}>
								اولین اولویت ماست
							</Typography>
						</Box>
					</Box>
					<Box className={classes.btnContainer}>
						<Button variant='outlined' color='primary' className={classes.signUpBtn}>
							عضویت
						</Button>
						<Button className={classes.signInBtn}>ورود</Button>
					</Box>
				</Toolbar>
			</Container>
		</Box>
	);
};

export default Navbar;
