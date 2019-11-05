import React from 'react';

class AddBuilding extends React.Component {
    constructor() {
        super();
        this.state={
            newCode: '',
            newName: '',
            newLat: '',
            newLong: '',
            newAddr: ''
        }
    }

    handleSubmit=async(event) => {
        event.preventDefault();
        const val = {
            id: this.props.lengthOfArray + 1,
            code: this.state.newCode,
            name: this.state.newName,
            coordinates: {latitude: this.state.newLat, longitude: this.state.newLong},
            address: this.state.newAddr
        }
        this.props.addData(val);
        
        this.setState({
            newCode: '',
            newName: '',
            newLat: '',
            newLong: '',
            newAddr: ''
        })
    }
    
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text"
                    placeholder="code ..."
                    value={this.state.newCode}
                    onChange={event => this.setState({newCode: event.target.value})}
                    required>
                </input>
                <input 
                    type="text"
                    placeholder="name ..."
                    value={this.state.newName}
                    onChange={event => this.setState({newName: event.target.value})}
                    required>
                </input>
                <input 
                    type="text"
                    placeholder="latitude ..."
                    value={this.state.newLat}
                    onChange={event => this.setState({newLat: event.target.value})}>
                </input>
                <input 
                    type="text"
                    placeholder="longitude ..."
                    value={this.state.newLong}
                    onChange={event => this.setState({newLong: event.target.value})}>
                </input>
                <input 
                    type="text"
                    placeholder="address ..."
                    value={this.state.newAddr}
                    onChange={event => this.setState({newAddr: event.target.value})}>
                </input>
                <button 
                    type="submit"
                    onClick={this.addData}
                > 
                    Add building
                </button>
            </form>

        );
    }
}

export default AddBuilding;
