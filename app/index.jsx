import React from 'react';
import { render } from 'react-dom';
import { Header } from 'common/site/Header';
import { Button, Jumbotron } from 'react-bootstrap';
import './styles/init.css';

class App extends React.Component {
    render() {
        return (<div>
        			<Header/>
					<div className="container main">
				        <Jumbotron>
						    <h1>Hello, world!</h1>
						    <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
						    <p><Button bsStyle="primary">Learn more</Button></p>
						</Jumbotron>
					</div>
				</div>);
    }
}

render(<App/>, document.getElementById('app'));
