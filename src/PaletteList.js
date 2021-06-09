import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import MiniPallete from './MiniPalette';
import styles from './styles/PaletteListStyles';

class PaletteList extends Component {
    constructor(props) {
        super(props);
        this.state = { openDeleteDialog: false, deletingId: '' };
        this.toggleDialog = this.toggleDialog.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.goToPalette = this.goToPalette.bind(this);
    };

    toggleDialog(id) {
        this.setState({ openDeleteDialog: !this.state.openDeleteDialog, deletingId: id });
    };

    goToPalette(id) {
        this.props.history.push(`/palette/${id}`);
    };

    handleRemove() {
        this.props.removePalette(this.state.deletingId);
        this.toggleDialog('');
    }

    render() {
        const { palettes, classes } = this.props;
        const { openDeleteDialog } = this.state;
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
                                    goToPalette={this.goToPalette}
                                    toggleDialog={this.toggleDialog}
                                />
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </div>
                <Dialog open={openDeleteDialog} onClose={this.toggleDialog} aria-labelledby="delete-dialog-title">
                    <DialogTitle id="delete-dialog-title">Delete this palette?</DialogTitle>
                    <List>
                        <ListItem button onClick={this.handleRemove} >
                            <ListItemAvatar>
                                <Avatar style={{ color: blue[600], backgroundColor: blue[100] }}>
                                    <CheckIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Delete" />
                        </ListItem>
                        <ListItem button onClick={this.toggleDialog}>
                            <ListItemAvatar>
                                <Avatar style={{ color: red[600], backgroundColor: red[100] }}>
                                    <CloseIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Cancel" />
                        </ListItem>
                    </List>
                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(PaletteList);