import React from 'react';
import { render } from 'react-dom';
import HeroClicker from './HeroClicker';
import HelloWorld from './HelloWorld';
import ReduxSample from './redux-samples/app';
import Button1 from './Button1';
import Button1Func from './Button1Func';
import Button2 from './Button2';

function AppLayout(props) {
  return <div className="app">{props.children}</div>;
}

function MenuItem(props) {
  return <li><a href={props.link}>{props.text.toUpperCase()}</a></li>;
}

function Sidebar() {
  return (
    <ul className="sidebar">
      <MenuItem link="/" text="Accueil" />
      <MenuItem link="/about" text="A propos" />
    </ul>
  );
}

function Site() {
  return (
    <AppLayout>
      <Sidebar />
    </AppLayout>
  );
}

const App = () => (
  <div>
    <h1>Boutons</h1>
    <Button1 />
    <Button1Func text="Bouton stateless" onClick={() => alert("Je n'ai pas d'état")} />
    <Button2 text="Cliqué" />
    <h1>Exemples</h1>
    <Site />
    <HeroClicker />
    <HelloWorld />
    <ReduxSample />
  </div>
);

render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
