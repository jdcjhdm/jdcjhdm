// import React from 'react';
// import Paper from '@material-ui/core/Paper';
// import TextField from '@material-ui/core/TextField';
// import FormControl from '@material-ui/core/FormControl';
// import Button from '@material-ui/core/Button';
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';

// const SignUpForm = () => {
// 	return (
// 		<Paper elevation={0} style={{ padding: 30, width: 450, height: 410 }}>
// 			<FormControl style={{ width: 390 }}>
// 				<label htmlFor='phone-number' style={{ direction: 'rtl' }}>
// 					شماره موبایل
// 				</label>
// 				<TextField id='phone-number' variant='outlined' required size='small' style={{ marginTop: 10 }} />
// 				<label htmlFor='password' style={{ direction: 'rtl', marginTop: 20 }}>
// 					کلمه عبور
// 				</label>
// 				<TextField type='password' id='password' variant='outlined' required size='small' style={{ marginTop: 10 }} />
// 				<RadioGroup row aria-label='position' name='position' defaultValue='top' style={{ marginTop: 20 }}>
// 					<Grid container justify='space-between'>
// 						<Grid item>
// 							<FormControlLabel value='typist' control={<Radio color='primary' />} label='انجام پروژه (تایپیست)' />
// 						</Grid>
// 						<Grid item>
// 							<FormControlLabel
// 								value='employee'
// 								control={<Radio color='primary' />}
// 								label='ثبت پروژه (کارفرما)'
// 								labelPlacement='start'
// 							/>
// 						</Grid>
// 					</Grid>
// 				</RadioGroup>
// 				<p style={{ textAlign: 'center', margin: '20px 0 ' }}>
// 					عضویت در تیزتایپ به منزله‌ی موافقت با <Link underline='always'>قوانین</Link> است
// 				</p>
// 				<Button variant='contained' color='primary' style={{ marginTop: 10 }}>
// 					عضویت
// 				</Button>
// 			</FormControl>
// 		</Paper>
// 	);
// };

// export default SignUpForm;

// ----------------------------------------------------------------- //

import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		backgroundColor: 'white',
		padding: '1em 2em',
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export default function SignUp() {
	const classes = useStyles();

	return (
		<Container component='main' maxWidth='xs'>
			<CssBaseline />
			<div className={classes.paper}>
				<form className={classes.form} noValidate>
					{/* <Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<TextField
								autoComplete='fname'
								name='firstName'
								variant='outlined'
								required
								fullWidth
								id='firstName'
								label='First Name'
								autoFocus
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								variant='outlined'
								required
								fullWidth
								id='lastName'
								label='Last Name'
								name='lastName'
								autoComplete='lname'
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant='outlined'
								required
								fullWidth
								id='email'
								label='Email Address'
								name='email'
								autoComplete='email'
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant='outlined'
								required
								fullWidth
								name='password'
								label='Password'
								type='password'
								id='password'
								autoComplete='current-password'
							/>
						</Grid>
						<Grid item xs={12}>
							<FormControlLabel
								control={<Checkbox value='allowExtraEmails' color='primary' />}
								label='I want to receive inspiration, marketing promotions and updates via email.'
							/>
						</Grid>
					</Grid>
					<Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
						Sign Up
					</Button>
					<Grid container justify='flex-end'>
						<Grid item>
							<Link href='#' variant='body2'>
								Already have an account? Sign in
							</Link>
						</Grid>
					</Grid> */}
				</form>
			</div>
		</Container>
	);
}
