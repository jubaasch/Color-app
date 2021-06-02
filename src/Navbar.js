import React, { Component } from 'react';
import Select from '@material-ui/core/Select';
import { IconButton, MenuItem, Snackbar } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Slider from 'rc-slider';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import 'rc-slider/assets/index.css';
import styles from './styles/NavbarStyles';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { format: 'hex', open: false };
        this.handleFormatChange = this.handleFormatChange.bind(this);
        this.closeSnackbar = this.closeSnackbar.bind(this);
    }

    handleFormatChange(evt) {
        this.setState({ format: evt.target.value, open: true });
        this.props.changeColorFormat(evt.target.value);
    }

    closeSnackbar() {
        this.setState({ open: false });
    }

    render() {
        const { level, changeLevel, showSlider, classes } = this.props;
        const { format, open } = this.state;
        return (
            <nav className={classes.Navbar}>
                <div className={classes.logo}>
                    <Link to="/">reactcolorpicker</Link>
                </div>
                {showSlider &&
                    <div>
                        <span>Level: {level}</span>
                        <div className={classes.slider}>
                            <Slider
                                defaultValue={level}
                                min={100}
                                max={900}
                                step={100}
                                onAfterChange={changeLevel}
                            />
                        </div>
                    </div>
                }
                <div className={classes.selectContainer}>
                    <Select value={format} onChange={this.handleFormatChange}>
                        <MenuItem value="hex">HEX</MenuItem>
                        <MenuItem value="rgb">RGB</MenuItem>
                        <MenuItem value="rgba">RGBA</MenuItem>
                    </Select>
                </div>
                <Snackbar
                    anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                    open={open}
                    autoHideDuration={3000}
                    message={
                        <span id="message-id">
                            Format changed to {format.toUpperCase()}
                        </span>
                    }
                    ContentProps={{
                        "aria-describedby": "message-id"
                    }}
                    onClose={this.closeSnackbar}
                    action={[
                        <IconButton
                            onClick={this.closeSnackbar}
                            color="inherit"
                            key="close"
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                    ]}
                />
            </nav>
        );
    }
}

export default withStyles(styles)(Navbar);