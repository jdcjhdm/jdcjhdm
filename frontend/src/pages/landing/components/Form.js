import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	paper: {
		padding: '2em',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		maxWidth: '500px',
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		},
		[theme.breakpoints.down('lg')]: {
			padding: '1.3em',
			maxWidth: '450px',
		},
	},
	form: {
		width: '100%',
	},
	griditem: {
		[theme.breakpoints.down('lg')]: {
			padding: '5px',
		},
	},
	header: {
		textAlign: 'center',
	},
	textfield: {
		direction: 'ltr',
		marginTop: '5px',
	},
	link: {
		textAlign: 'center',
	},
}));

const SignUpForm = () => {
	const classes = useStyles();

	return (
		<Paper elevation={0} className={classes.paper}>
			<form className={classes.form} autoComplete='off'>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<Typography component='h1' variant='h5' className={classes.header}>
							عضویت
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant='body2' className={classes.header}>
							قبلا عضو شده‌اید؟ <Link>وارد شوید</Link>.
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<label htmlFor='password'>نام کاربری</label>
						<TextField
							id='username'
							name='username'
							variant='outlined'
							className={classes.textfield}
							autoComplete='new-password'
							size='small'
							fullWidth
						/>
					</Grid>
					<Grid item xs={12}>
						<label htmlFor='mobile'>شماره موبایل</label>
						<TextField
							id='mobile'
							name='mobile'
							variant='outlined'
							placeholder='نمونه *********09'
							className={classes.textfield}
							size='small'
							fullWidth
						/>
					</Grid>
					<Grid item xs={12}>
						<label htmlFor='password'>کلمه عبور</label>
						<TextField
							id='password'
							name='password'
							variant='outlined'
							type='password'
							helperText='کلمه عبور باید حداقل ۸ کاراکتر باشد.'
							className={classes.textfield}
							autoComplete='new-password'
							size='small'
							fullWidth
						/>
					</Grid>
					<Grid item xs={12}>
						<Button variant='contained' color='primary' fullWidth>
							عضویت در تیزتایپ
						</Button>
					</Grid>
					<Grid item xs={12}>
						<Typography className={classes.link}>
							عضویت در تیزتایپ به منزله تایید <Link>قوانین تیزتایپ</Link> می‌باشد.
						</Typography>
					</Grid>
				</Grid>
			</form>
		</Paper>
	);
};

export default SignUpForm;
