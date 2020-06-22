import React, { createContext, Component } from 'react';
import { render } from '@testing-library/react';

export const ThemeContext = createContext();

class ThemecontextProvider extends Component{
    
    state = {
        isShit: true
    }
    togglefunction = () =>{

        this.setState({
            isShit : !this.state.isShit

        })

    }    

    render(){
        console.log(this.context);

        return (
        <ThemeContext.Provider value = {{...this.state,togglefunction: this.togglefunction}}>
                {this.props.children}

        </ThemeContext.Provider>

        )

    }



}
export default ThemecontextProvider;
