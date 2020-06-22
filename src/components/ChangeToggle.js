import React,{Component} from 'react';
import { ThemeContext } from '../context/ThemeContext';


class ChangeToggle extends Component{
    static contextType = ThemeContext;
    shit = () =>{


    }
    render(){


        return(

            <button onClick={this.context.togglefunction}>Change</button>

        )


    }


}

export default ChangeToggle;