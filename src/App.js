import { Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import './App.css';

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
        render={(routeProps) => <PaletteList palettes={seedColors} {...routeProps} />}
      />
      <Route
        exact
        path="/palette/:id"
        render={(routeProps) => <Palette
          palette={generatePalette(findPalette(routeProps.match.params.id))} />}
      />
      <Route
        exact
        path="/palette/:paletteId/:colorId"
        render={(routeProps) => <SingleColorPalette
          palette={generatePalette(findPalette(routeProps.match.params.paletteId))}
          colorId={routeProps.match.params.colorId}
        />}
      />
    </Switch>
  );
}

export default App;
