import React from 'react';

class BuilingList extends React.Component {
	render() {
		//console.log('This is my directory file', this.props.data);
		const { data } = this.props;
		const filterText = this.props.filterText;
		const selectedUpdate = this.props.selectedUpdate;
		const buildingList = data
		.filter(directory => {
			return (directory.code.toLowerCase().indexOf(filterText.toLowerCase()) >= 0)
				|| (directory.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0)
		})
		.map(directory => {
			return (
				<tr 
					key={directory.id}
					onClick={() => selectedUpdate(directory.id)}
				>
					<td>{directory.code} </td>
					<td>{directory.name}</td>
				</tr>
			);
		});

		return <tbody>{buildingList}</tbody>;
	}
}
export default BuilingList;
