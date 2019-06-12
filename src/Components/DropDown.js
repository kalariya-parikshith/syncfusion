import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DownIcon from '@material-ui/icons/KeyboardArrowDown';

const StyledMenu = withStyles({
	paper: {
		border: '1px solid #d3d4d5'
	},
	greyColor: {
		color: 'grey'
	}
})(props => (
	<Menu
		elevation={0}
		getContentAnchorEl={null}
		anchorOrigin={{
			vertical: 'bottom',
			horizontal: 'center'
		}}
		transformOrigin={{
			vertical: 'top',
			horizontal: 'center'
		}}
		{...props}
	/>
));

const StyledMenuItem = withStyles(theme => ({
	root: {
		'&:focus': {
			backgroundColor: theme.palette.primary.main,
			'& .MuiListItemIcon-root, & .MuiListItemText-primary': {
				color: theme.palette.common.white
			}
		}
	}
}))(MenuItem);

const useStyles = makeStyles({
	greyColor: {
		color: 'grey'
	}
});

export default function CustomizedMenus() {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const classes = useStyles();
	function handleClick(event) {
		setAnchorEl(event.currentTarget);
	}

	function handleClose() {
		setAnchorEl(null);
	}

	return (
		<div>
			<Button
				aria-controls='customized-menu'
				aria-haspopup='true'
				variant='contained'
				style={{ color: 'grey', backgroundColor: 'white' }}
				onClick={handleClick}
			>
				Last 30 Days <span style={{ marginLeft: '45px' }} />
				<DownIcon />
			</Button>
			<StyledMenu
				id='customized-menu'
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				<StyledMenuItem>
					<ListItemText primary='Last 30 Days' style={{ width: '170px' }} />
				</StyledMenuItem>
				<StyledMenuItem>
					<ListItemText primary='Last 90 Days' style={{ fontSize: 10 }} />
				</StyledMenuItem>
				<StyledMenuItem>
					<ListItemText primary='Quarter 1' />
				</StyledMenuItem>
				<StyledMenuItem>
					<ListItemText primary='Quarter 2' />
				</StyledMenuItem>
				<StyledMenuItem>
					<ListItemText primary='Quarter 3' />
				</StyledMenuItem>
				<StyledMenuItem>
					<ListItemText primary='Quarter 4' />
				</StyledMenuItem>
				<StyledMenuItem>
					<ListItemText primary='YTD' />
				</StyledMenuItem>
				<StyledMenuItem>
					<ListItemText primary='Previous Year' />
				</StyledMenuItem>
			</StyledMenu>
		</div>
	);
}
