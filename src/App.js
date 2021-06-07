import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';
import Palette from './Palette';
import SingleColorPalette from './SingleColorPalette';
import PaletteList from './PaletteList';
import NewPaletteForm from './NewPaletteForm';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { palettes: seedColors };
    this.findPalette = this.findPalette.bind(this);
    this.savePalette = this.savePalette.bind(this);
    this.removePalette = this.removePalette.bind(this);
  }

  findPalette(id) {
    return this.state.palettes.find(function (palette) {
      return palette.id === id;
    });
  }

  savePalette(newPalette) {
    this.setState({ palettes: [...this.state.palettes, newPalette] })
  }

  removePalette(id) {
    this.setState(st => ({ palettes: st.palettes.filter(palette => palette.id !== id) }));
  }

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={(routeProps) => <PaletteList
            palettes={this.state.palettes}
            removePalette={this.removePalette}
            {...routeProps} />}
        />
        <Route
          exact
          path="/palette/new"
          render={(routeProps) => <NewPaletteForm
            savePalette={this.savePalette}
            palettes={this.state.palettes}
            {...routeProps} />}
        />
        <Route
          exact
          path="/palette/:id"
          render={(routeProps) => <Palette
            palette={generatePalette(this.findPalette(routeProps.match.params.id))} />}
        />
        <Route
          exact
          path="/palette/:paletteId/:colorId"
          render={(routeProps) => <SingleColorPalette
            palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))}
            colorId={routeProps.match.params.colorId}
          />}
        />
      </Switch>
    );
  }
}

export default App;
