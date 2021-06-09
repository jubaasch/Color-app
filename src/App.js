import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
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
      <Route render={({ location }) => (
        <TransitionGroup>
          <CSSTransition key={location.key} classNames='fade' timeout={500}>
            <Switch location={location}>
              <Route
                exact
                path="/"
                render={(routeProps) =>
                  <div className='page'>
                    <PaletteList
                      palettes={this.state.palettes}
                      removePalette={this.removePalette}
                      {...routeProps}
                    />
                  </div>
                }
              />
              <Route
                exact
                path="/palette/new"
                render={(routeProps) =>
                  <div className='page'>
                    <NewPaletteForm
                      savePalette={this.savePalette}
                      palettes={this.state.palettes}
                      {...routeProps}
                    />
                  </div>
                }
              />
              <Route
                exact
                path="/palette/:id"
                render={(routeProps) =>
                  <div className='page'>
                    <Palette
                      palette={generatePalette(this.findPalette(routeProps.match.params.id))}
                    />
                  </div>
                }
              />
              <Route
                exact
                path="/palette/:paletteId/:colorId"
                render={(routeProps) =>
                  <div className='page'>
                    <SingleColorPalette
                      palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))}
                      colorId={routeProps.match.params.colorId}
                    />
                  </div>
                }
              />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )} />
    );
  }
}

export default App;
