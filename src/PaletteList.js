import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import MiniPallete from './MiniPalette';
import styles from './styles/PaletteListStyles';


class PaletteList extends Component {
    goToPalette(id) {
        this.props.history.push(`/palette/${id}`);
    }

    render() {
        const { palettes, classes, removePalette } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1 className={classes.heading}>React Colors</h1>
                        <Link to="/palette/new">Create Palette</Link>
                    </nav>
                    <TransitionGroup className={classes.palettes}>
                        {palettes.map(palette => (
                            <CSSTransition key={palette.id} classNames='fade' timeout={500}>
                                <MiniPallete
                                    {...palette}
                                    key={palette.id}
                                    id={palette.id}
                                    handleClick={() => this.goToPalette(palette.id)}
                                    handleRemove={removePalette}
                                />
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(PaletteList);