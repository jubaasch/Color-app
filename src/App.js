import { Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';
import './App.css';
import PaletteList from './PaletteList';

function findPalette(id) {
  return seedColors.find(function (palette) {
    return palette.id === id;
  });
}

function App() {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={(routeProps) => <PaletteList palettes={seedColors} {...routeProps} />} />
      <Route
        exact
        path="/palette/:id"
        render={(routeProps) => <Palette
          palette={generatePalette(findPalette(routeProps.match.params.id))} />} />
    </Switch>

    /* <div className="App">
      <Palette palette={generatePalette(seedColors[0])} />
    </div> */
  );
}

export default App;
