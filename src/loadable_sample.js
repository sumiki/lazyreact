import Loadable from 'react-loadable';
import Loading from './my-loading-component';
import ReactDOM from "react-dom";

const LoadableComponent = Loadable({
    loader: () => import('./print'),
    //loading: Loading,
});

class App extends React.Component {
    render() {
        return <LoadableComponent/>;
    }
}

ReactDOM.render( <App />, document.getElementById('root'))