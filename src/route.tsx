import HeaderCinema from './components/header-cinema';
import Layout from './components/layout';
import { Route, Switch, Link } from 'react-router-dom';
import ProcessCinema from './components/process-cinema';

const Router = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Layout />
            </Route>
            <Route path="/process-cinema">
                <ProcessCinema />
            </Route>
            <Route path="/header-cinema">
                <HeaderCinema />
            </Route>
        </Switch>
    );
};
export default Router;
