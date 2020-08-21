import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

const SecondNavbar = () => {
	return (
		<Grid container className='second-navbar' alignItems='center'>
			<Container>
				<Grid item container direction='row-reverse' spacing={5}>
					<Grid item>
						<Link href='#' underline='none'>
							<span className='nav-item'>پروژه‌ها</span>
						</Link>
					</Grid>
					<Grid item>
						<Link href='#' underline='none'>
							<span className='nav-item'>تعرفه‌ها</span>
						</Link>
					</Grid>
					<Grid item>
						<Link href='#' underline='none'>
							<span className='nav-item'>راهنمای استفاده</span>
						</Link>
					</Grid>
					<Grid item>
						<Link href='#' underline='none'>
							<span className='nav-item'>بیشتر درباره‌ی تیزتایپ</span>
						</Link>
					</Grid>
				</Grid>
			</Container>
		</Grid>
	);
};

export default SecondNavbar;
