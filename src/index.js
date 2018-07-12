
import React from 'react'
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';

async function getComponent() {
    return class extends React.Component {

        handleClick = () => {
            import(/* webpackChunkName: "print" */ './print').then(module => {
                var print = module.default;
                console.log(<print />)
                console.log(document.getElementById('printarea'))
                ReactDOM.render( <print />, document.getElementById('printarea')) //This does not work
            });
        }

        render = () => {
            return <div>
                <div><a href="#" onClick={this.handleClick} >Click</a></div>
            </div>
        }
    }
}

getComponent().then(Component => {
    console.log(Component)
    ReactDOM.render( <Component />, document.getElementById('root'))
})


