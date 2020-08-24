import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	gridBG: {
		backgroundColor: '#154d69',
		color: '#FFF',
	},
	toolbarSecondary: {
		overflowX: 'auto',
		padding: 0,
	},
	toolbarLink: {
		padding: theme.spacing(2),
		flexShrink: 0,
		color: 'rgb(255,255,255,0.7)',
		fontSize: '1.1em',
		'&:hover': {
			color: 'rgb(255,255,255,0.95)',
		},
		[theme.breakpoints.down('sm')]: {
			fontSize: '0.8em',
		},
	},
}));

const BottomNavbar = props => {
	const classes = useStyles();
	const { sections } = props;

	return (
		<Grid container className={classes.gridBG}>
			<Container>
				<Toolbar component='nav' variant='dense' className={classes.toolbarSecondary}>
					{sections.map(section => (
						<Link
							noWrap
							underline='none'
							key={section.title}
							variant='body2'
							href={section.url}
							className={classes.toolbarLink}
						>
							{section.title}
						</Link>
					))}
				</Toolbar>
			</Container>
		</Grid>
	);
};

BottomNavbar.propTypes = {
	sections: PropTypes.array,
};

export default BottomNavbar;
