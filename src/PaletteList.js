import React, { Component } from 'react';
import MiniPallete from './MiniPalette';

class PaletteList extends Component {
    render() {
        const { palettes } = this.props;
        return (
            <div>
                <h1>React Colors</h1>
                {palettes.map(palette => (
                    <MiniPallete {...palette} key={palette.id} />
                ))}
            </div>
        );
    }
}

export default PaletteList;