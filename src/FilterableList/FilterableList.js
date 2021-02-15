import React from 'react';
import './style.css';

class FilterableList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        filterOptionList: [],
        selectedOptions: []
    }
  }


  onCheckBoxChange = (e) => {
    const { handleCallBack } = this.props;
    if(!e.target.checked) {
      var selected = [...this.state.selectedOptions];
      var index = selected.indexOf(e.target.value);
      if (index !== -1) {
        selected.splice(index, 1);
      }
      this.setState({
        selectedOptions: selected
      }, () => {
        handleCallBack(this.state.selectedOptions);
      })
    } else {
      this.setState({
        selectedOptions: [...this.state.selectedOptions, e.target.value]
      }, () => {
        handleCallBack(this.state.selectedOptions);
      });
    }
  }


  render() {
    return (
        <div className="filterableListContainer">
           {
            this.props.filterOptions.map((option) => {
              return <p><input type="checkbox" onChange={this.onCheckBoxChange} value={option} id={option}/><label for={option}>{option}</label></p>
            })
          }
        </div>
    );
  }
}


export default FilterableList;