import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      errors: false
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    }, this.checkErrors);
  }

  checkErrors = () => {
    let poem = this.state.value.split('\n');
    let lines = poem.map(l => l.split(' ').filter(n => n));

    if (poem.length === 3 && lines[0].length === 5 && lines[1].length === 3 && lines[2].length === 5) {
      this.setState({
        errors: false
      });
    } else {
      this.setState({
        errors: true
      });
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.value} onChange={this.handleChange} />
        {this.state.errors ? <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div> : null}
      </div>
    );
  }
}

export default PoemWriter;
