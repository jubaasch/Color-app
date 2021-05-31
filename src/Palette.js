import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ColorBox from './ColorBox';
import './Palette.css';

class Palette extends Component {
    render() {
        const colorBoxes = this.props.colors.map(color => (
            <ColorBox background={color.color} name={color.name} key={uuidv4()} />
        ))
        return (
            <div className="Palette">
                {/* Navbar goes here */}
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
                {/* Footer goes here */}
            </div>
        );
    }
}

export default Palette;