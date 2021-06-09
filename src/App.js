import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';
import Palette from './Palette';
import SingleColorPalette from './SingleColorPalette';
import PaletteList from './PaletteList';
import NewPaletteForm from './NewPaletteForm';
import Page from './Page';
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
          <CSSTransition key={location.key} classNames='page' timeout={500}>
            <Switch location={location}>
              <Route
                exact
                path="/"
                render={(routeProps) =>
                  <Page>
                    <PaletteList
                      palettes={this.state.palettes}
                      removePalette={this.removePalette}
                      {...routeProps}
                    />
                  </Page>
                }
              />
              <Route
                exact
                path="/palette/new"
                render={(routeProps) =>
                  <Page>
                    <NewPaletteForm
                      savePalette={this.savePalette}
                      palettes={this.state.palettes}
                      {...routeProps}
                    />
                  </Page>
                }
              />
              <Route
                exact
                path="/palette/:id"
                render={(routeProps) =>
                  <Page>
                    <Palette
                      palette={generatePalette(this.findPalette(routeProps.match.params.id))}
                    />
                  </Page>
                }
              />
              <Route
                exact
                path="/palette/:paletteId/:colorId"
                render={(routeProps) =>
                  <Page>
                    <SingleColorPalette
                      palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))}
                      colorId={routeProps.match.params.colorId}
                    />
                  </Page>
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
