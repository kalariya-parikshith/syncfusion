import React from 'react';
import Paper from '@material-ui/core/Paper';
import TabsComponent from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default function DisabledTabs() {
	const [value, setValue] = React.useState(2);

	function handleChange(event, newValue) {
		setValue(newValue);
	}

	return (
		<Paper square elevation={0} style={{ width: '100%', fontSize: '12px' }}>
			<TabsComponent
				value={value}
				indicatorColor='secondary'
				textColor='secondary'
				onChange={handleChange}
			>
				<Tab label='Vendor Overview' style={{ textTransform: 'capitalize' }} />
				<Tab label='Vendor Details' style={{ textTransform: 'capitalize' }} />
			</TabsComponent>
		</Paper>
	);
}
