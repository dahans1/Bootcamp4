import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';
import RemoveBuilding from './components/RemoveBuilding';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0,
      dataArray: this.props.data,
      lengthOfArray: this.props.data.length
    };
  }

  addData(building) {
    var array = this.state.dataArray;
    array.push(building);
    this.setState({
      dataArray: array,
      lengthOfArray: this.state.lengthOfArray + 1
    })
  }

  deleteData() {
    var array = this.state.dataArray;
    var selectedBuilding = this.state.selectedBuilding;
    array.splice(selectedBuilding - 1, 1);

    for (var i = selectedBuilding - 1; i < array.length; i++)
      array[i].id = array[i].id - 1;
    this.setState({
      dataArray: array,
      lengthOfArray: this.state.lengthOfArray - 1,
      selectedBuilding: 0
    })
  }

  filterUpdate(value) {
    this.setState({
      filterText: value
    })
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    console.log('building id:', id);
    this.setState({
      selectedBuilding: id
    })
  }

  render() {
    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>
        <Search
          filterText={this.state.filterText}
          filterUpdate={this.filterUpdate.bind(this)}
        />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tbody>
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  </tbody>
                  <BuildingList
                    data={this.state.dataArray}
                    filterText={this.state.filterText}
                    selectedUpdate={this.selectedUpdate.bind(this)}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding
                data={this.state.dataArray}
                selectedBuilding={this.state.selectedBuilding}
              />
              <RemoveBuilding
                deleteData={this.deleteData.bind(this)}
                dataArray={this.state.dataArray}
                selectedBuilding={this.state.selectedBuilding}
              />
            </div>
          </div>
          <AddBuilding
          dataArray={this.state.dataArray}
          lengthOfArray={this.state.lengthOfArray}
          addData={this.addData.bind(this)}
          />
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
