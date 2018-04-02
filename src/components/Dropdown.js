
import React, { Component } from 'react';
import uuid from 'uuid';

class selectFractal extends Component {
  constructor(){
    super();
    this.state = {
        patterns:{}
    }
  }

  static defaultProps = {
    patterns: ['Circle', 'Cantor', 'Julia', 'Mandelbrot','Triangle']
  }

  handleSubmit(e){
    let res = this.menu.value;

      console.log(res);
      
    
    e.preventDefault();
  }

  render() {
    let patternsOptions = this.props.patterns.map(patterns => {
      return <option key={patterns} value={patterns}>{patterns}</option>
    });
    return (
      <div>
        <h3>Choose a Fractal</h3>
        <form onSubmit={this.handleSubmit.bind(this)} id = "dropdown" ref = {(input)=> this.menu = input} >
            <label>Fractal</label><br />
            <select ref="patterns" >
              {patternsOptions}
            </select>
          <br />
          <input type="submit" value="Submit"  />
          <br />
        </form>
      </div>
    );
  }
}



  
//selectFractal.propTypes = {
  //patterns: React.PropTypes.array,
//}

export default selectFractal;