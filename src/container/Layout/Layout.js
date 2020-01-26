import React, {Component} from 'react';
import Aux from '../../hoc/Auxillary';
import Navigation from '../../components/ui/Navigation/Navigation';
import Footer from '../../components/ui/Footer/Footer';

class Layout extends Component {
    render(){
        return (
            <Aux>
                <Navigation />

                {this.props.children}
                <Footer/>
            </Aux>

        );
    }
}

export default Layout;