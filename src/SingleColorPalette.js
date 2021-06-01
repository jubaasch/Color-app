import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';

class SingleColorPalette extends Component {
    constructor(props) {
        super(props);
        this.state = { format: 'hex' };
        this._shades = this.gatherShades(this.props.palette, this.props.colorId);
        this.changeColorFormat = this.changeColorFormat.bind(this);
    }

    gatherShades(palette, colorToFilterBy) {
        let shades = [];
        let allColors = palette.colors;
        for (let key in allColors) {
            shades = shades.concat(
                allColors[key].filter(color => color.id === colorToFilterBy)
            )
        }
        return shades.slice(1);
    }

    changeColorFormat(val) {
        this.setState({ format: val });
    }

    render() {
        const { format } = this.state;
        const { paletteName, emoji, id } = this.props.palette;
        const colorBoxes = this._shades.map(color => (
            <ColorBox
                key={color.name}
                name={color.name}
                background={color[format]}
                showLink={false}
            />
        ));
        return (
            <div className="SingleColorPalette Palette">
                <Navbar changeColorFormat={this.changeColorFormat} showSlider={false} />
                <div className="Palette-colors">
                    {colorBoxes}
                    <div className="Go-back ColorBox">
                        <Link className="back-button" to={`/palette/${id}`}>Go back</Link>
                    </div>
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji} />
            </div>
        );
    }
}

export default SingleColorPalette;