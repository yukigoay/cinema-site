import { Route, Switch } from 'react-router-dom';
import Layout from './components/layout';
import SelectionCinema from './components/selection-cinema';


const Router = () => {
    return (
        <Switch>
            <Route exact path="/">
                {/* {<BeverageSelection/>} */}
                {/* <Test /> */}
                {/* <PurchaseContainer /> */}
                <Layout />
            </Route>
            <Route path="/selection-cinema">
                <SelectionCinema />
            </Route>
        </Switch>
    );
};
export default Router;
