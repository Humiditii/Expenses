import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';


class NavUrl extends Component {


    render(){
        let componentwithicon = null;

        switch(this.props.viewtype){
            case('desktop'):
                componentwithicon = (
                     <li>
                         <NavLink to={this.props.link} className='waves-effect' >
                            {this.props.name}
                        </NavLink>
                    </li>
                );
            break;
            case('mobile'):
                componentwithicon = (
                    <li>
                         <NavLink to={this.props.link} className='waves-effect' >
                            <i className='material-icons'>{this.props.iconName}</i>
                            {this.props.name}
                        </NavLink>
                    </li>
                );
            break;
            default:
                componentwithicon = null;

        }

         return componentwithicon
    }
}

export default NavUrl;