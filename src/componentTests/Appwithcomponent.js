import '../App.css';
import React from 'react';

class Appwithcomponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count:0
        }
 }

 changeState(num){
    this.setState({count: num})
 }

  render() {
        return (
                <div className="App">
                    Hola LAB
                    <button onClick={()=> this.changeState(this.state.count +1)}>
                    sumar
                    </button>

                    <button onClick={()=>this.changeState(this.state.count - 1)}>
                    restar
                    </button>

                    <button onClick={()=>this.changeState(0)}>
                    limpiar
                    </button>

                    <div className="App">
                    Contador con Component: {this.state.count}
                    </div>

                </div>
            );
   }
}

export default Appwithcomponent;