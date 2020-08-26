import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
	},
	media: {
		height: 140,
	},
});

const Cards = () => {
	const classes = useStyles();

	return (
		<Container>
			<Grid container spacing={3} justify='space-between'>
				<Grid item>
					<Card className={classes.root}>
						<CardActionArea>
							<CardContent>
								<Typography gutterBottom variant='h5' component='h2'>
									سریع و امن
								</Typography>
								<Typography variant='body2' color='textSecondary' component='p'>
									تیزتایپ بسیار سریع و دارای محیطی امن می‌باشد
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
				<Grid item>
					<Card className={classes.root}>
						<CardActionArea>
							<CardContent>
								<Typography gutterBottom variant='h5' component='h2'>
									راحت و کاربرپسند
								</Typography>
								<Typography variant='body2' color='textSecondary' component='p'>
									در طراحی تیزتایپ سعی شده بهترین فلان فلان
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
				<Grid item>
					<Card className={classes.root}>
						<CardActionArea>
							<CardContent>
								<Typography gutterBottom variant='h5' component='h2'>
									کارا و به‌صرفه
								</Typography>
								<Typography variant='body2' color='textSecondary' component='p'>
									فقط ۵ درصد کارمزد توسط سایت گرفته می‌شود
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Cards;
