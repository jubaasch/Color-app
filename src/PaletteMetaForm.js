import React, { Component } from 'react';
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

class PaletteMetaForm extends Component {
    constructor(props) {
        super(props);
        this.state = { newPaletteName: '', stage: 'form' };
        this.handleChange = this.handleChange.bind(this);
        this.showEmojiPicker = this.showEmojiPicker.bind(this);
        this.savePalette = this.savePalette.bind(this);
    }

    componentDidMount() {
        ValidatorForm.addValidationRule("isPaletteNameUnique", value =>
            this.props.palettes.every(
                ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase())
        );
    }

    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    showEmojiPicker() {
        this.setState({ stage: 'emoji' });
    }

    savePalette(emoji) {
        const newPalette = { paletteName: this.state.newPaletteName, emoji: emoji.native };
        this.props.handleSubmit(newPalette);
        this.setState({ stage: '' });
    }

    render() {
        const { hideForm, formShowing } = this.props;
        const { newPaletteName, stage } = this.state;
        return (
            <div>
                <Dialog
                    open={formShowing && stage === 'form'}
                    onClose={hideForm}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Choose a palette name</DialogTitle>
                    <ValidatorForm onSubmit={this.showEmojiPicker}>
                        <DialogContent>
                            <DialogContentText>
                                Please enter a name for your new palette. Make sure it is unique!
                        </DialogContentText>
                            <TextValidator
                                fullWidth
                                margin='normal'
                                value={newPaletteName}
                                name='newPaletteName'
                                label='Palette name'
                                onChange={this.handleChange}
                                validators={['required', 'isPaletteNameUnique']}
                                errorMessages={['Enter palette name', 'This palette name already exists']}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={hideForm} color="primary">
                                Cancel
                        </Button>
                            <Button
                                variant='contained'
                                color='primary'
                                type='submit'
                            >
                                Save palette
                        </Button>
                        </DialogActions>
                    </ValidatorForm>
                </Dialog>
                <Dialog open={formShowing && stage === 'emoji'}>
                    <Picker title='Pick a palette emoji' onSelect={this.savePalette} />
                </Dialog>
            </div>
        );
    }
}

export default PaletteMetaForm;