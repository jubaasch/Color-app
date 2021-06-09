import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './styles/MiniPaletteStyles';

class MiniPallete extends PureComponent {
    constructor(props) {
        super(props);
        this.removePalette = this.removePalette.bind(this);
    }

    removePalette(evt) {
        evt.stopPropagation();
        this.props.toggleDialog(this.props.id)
    }

    render() {
        const { classes, paletteName, emoji, colors, goToPalette, id } = this.props;
        const miniColorBoxes = colors.map(color => (
            <div
                className={classes.miniColor}
                style={{ backgroundColor: color.color }}
                key={color.name}
            />
        ))
        return (
            <div className={classes.root} onClick={() => goToPalette(id)}>
                <DeleteIcon
                    className={classes.deleteIcon}
                    style={{ transition: 'all 0.3s ease-in-out' }}
                    onClick={this.removePalette}
                />
                <div className={classes.colors}>
                    {miniColorBoxes}
                </div>
                <h5 className={classes.title}>{paletteName}
                    <span className={classes.emoji}>{emoji}</span>
                </h5>
            </div>
        )
    }
}

export default withStyles(styles)(MiniPallete);