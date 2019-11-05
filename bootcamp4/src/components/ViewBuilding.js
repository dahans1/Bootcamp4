import React from 'react';


class ViewBuilding extends React.Component {
	render() {
		const { data } = this.props;
		const selectedBuilding = this.props.selectedBuilding;
		if (selectedBuilding <= 0) {
			return (
				<div>
					<p>
						<i> Click on a name to view more information </i>
					</p>
				</div>
			);
		} else {
			const directory = data[selectedBuilding - 1];
			if (directory.coordinates || directory.address) {
				return(
				<section>
				<p>
					<b>Code: </b>
					{directory.code}
				</p>
				<p>
					<b>Name: </b>
					{directory.name}
				</p>
				<p>
					<b>Coordinates:</b>
						<br></br>
						Latitude: {directory.coordinates && directory.coordinates.latitude}
						<br></br>
						Longitude: {directory.coordinates && directory.coordinates.longitude}
				</p>
				<p>
					<b>Address: </b>
					{directory.address}
				</p>
				</section>
				);
			} else {
				return(
					<section>
					<p>
						<b>Code: </b>
						{directory.code}
					</p>
					<p>
						<b>Name: </b>
						{directory.name}
					</p>
					</section>
				)
			}
		}
	}
}
export default ViewBuilding;
