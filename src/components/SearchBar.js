import React from "react";

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = (ev) => {
    ev.preventDefault();
    this.props.onSubmit(this.state.term);
  }

  onInputChange(ev) {
    // turns element into controlled
    this.setState({ term: ev.target.value });
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image search</label>
            <input type="text" 
              // turns element into controlled
              value={this.state.term} 
              onChange={this.onInputChange.bind(this)} 
            />
          </div>
        </form>
      </div>
    );
  }
}

// onSubmit={this.onFormSubmit}
// това изпраща само reference към функцията 
//  => когато се изпълни "променливата" към която е assign-нат този reference, 
// тя е откачена от класа, вляво от "точката" няма нищо, нямаме "this"
// все едно submitVal = this.onFormSubmit;
// и после викаме submitVal()

// a function gets its context from where it is called
// an arrow function does not have its own 'this' => the 'this' value of the enclosing execution context is used

export default SearchBar;