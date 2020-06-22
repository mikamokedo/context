import React,{Component} from 'react';
import {ThemeContext} from '../context/ThemeContext';


class Navbar extends Component{


    render(){
       

        return (

                <ThemeContext.Consumer>

                    {(context) =>{
                        console.log(context);
                        return (
                            <h1>NAV ne anh em</h1>
                        )
                    }

                    }
        
                </ThemeContext.Consumer>
          
                

        )

    }





}

export default Navbar;