import React, { useContext } from 'react';
import {ThemeContext} from '../context/ThemeContext';

const UseHook = () => {
    const context = useContext(ThemeContext);
    return (
        <div>
            <h1>Use hook</h1>
            
        </div>
    );
};

export default UseHook;