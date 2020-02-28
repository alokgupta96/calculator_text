import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeComponent from './Home/Home';

class App extends React.PureComponent {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {

        return (
            <React.Fragment>
                <BrowserRouter>
                    <Switch>
                        <Route exact={true} path="/" component={HomeComponent} />
                    </Switch>
                </BrowserRouter>
            </React.Fragment>
        )
    }
}

export default App;
