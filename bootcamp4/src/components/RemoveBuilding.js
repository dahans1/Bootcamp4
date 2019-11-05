import React from 'react';

class RemoveBuilding extends React.Component {

    /*
    handleSubmit=async(event) => {
        event.preventDefault();
        const selectedBuilding = this.props.selectedBuilding;
        this.props.removeData(selectedBuilding);

    }
    */
    removeData() {
        this.props.removeData();

    }
    render() {
        const selectedBuilding = this.props.selectedBuilding;
        const deleteData = this.props.deleteData;
        
        if (selectedBuilding !== 0) {
        return(
                <div>
                    <button 
                        type="submit"
                        onClick={() => deleteData()}
                    > 
				        Remove building
					</button>
                </div>
            ); 
        } else
            return(<div></div>);
    }
}
export default RemoveBuilding;