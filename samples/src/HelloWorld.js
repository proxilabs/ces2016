import React, { Component } from 'react';

/**
 * Un composant stateless.
 * Ici, le composant ne posséde aucun état interne. Il se sert uniquement
 * des propriétés qui lui sont passées pour afficher un message de salutations.
 *
 * On utilise ici les "Arrow Functions" propre à l'ES2015 pour avoir quelque chose de très concis.
 */
const Greetings = props => (
  <p>Hello, {props.name}!</p>
);

/**
 * Ce qui revient à ceci, tout simplement.
 */
function GreetingsAsFunc(props) {
  return <p>Hello again, {props.name}!</p>;
}

/**
 * Un composant stateful
 */
class HelloWorld extends Component {

  constructor() {
    super(); // On appelle le parent
    this.state = { text: '' }; // Et on initialise l'état du composant
  }

  // Un composant possèdent plusieurs méthodes liées au cycle de vie React :
  // https://facebook.github.io/react/docs/react-component.html#the-component-lifecycle
  componentWillMount() {}
  componentDidMount() {}
  componentWillReceiveProps(nextProps) {}
  componentWillUnmount() {}

  updateText(event) {
    this.setState({ text: event.target.value });
  }

  // La méthode render doit retourner un composant React valide.
  render() {
    // Ici on peut accéder aux propriétés du composant passées par les parents
    console.info('Propriétés', this.props);
    // Et à son état interne
    console.info('Etat', this.state);

    return (
      <div>
        <input type="text" value={this.state.text} onChange={e => this.updateText(e)} />
        <Greetings name={this.state.text} />
        <GreetingsAsFunc name={this.state.text} />
      </div>
    );
  }
}

export default HelloWorld;
