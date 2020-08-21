import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

const SignUpForm = () => {
	return (
		<Paper elevation={0} style={{ padding: 30, width: 450, height: 410 }}>
			<FormControl style={{ width: 390 }}>
				<label htmlFor='phone-number' style={{ direction: 'rtl' }}>
					شماره موبایل
				</label>
				<TextField id='phone-number' variant='outlined' required size='small' style={{ marginTop: 10 }} />
				<label htmlFor='password' style={{ direction: 'rtl', marginTop: 20 }}>
					کلمه عبور
				</label>
				<TextField type='password' id='password' variant='outlined' required size='small' style={{ marginTop: 10 }} />
				<RadioGroup row aria-label='position' name='position' defaultValue='top' style={{ marginTop: 20 }}>
					<Grid container justify='space-between'>
						<Grid item>
							<FormControlLabel value='typist' control={<Radio color='primary' />} label='انجام پروژه (تایپیست)' />
						</Grid>
						<Grid item>
							<FormControlLabel
								value='employee'
								control={<Radio color='primary' />}
								label='ثبت پروژه (کارفرما)'
								labelPlacement='start'
							/>
						</Grid>
					</Grid>
				</RadioGroup>
				<p style={{ textAlign: 'center', margin: '20px 0 ' }}>
					عضویت در تیزتایپ به منزله‌ی موافقت با <Link underline='always'>قوانین</Link> است
				</p>
				<Button variant='contained' color='primary' style={{ marginTop: 10 }}>
					عضویت
				</Button>
			</FormControl>
		</Paper>
	);
};

export default SignUpForm;
