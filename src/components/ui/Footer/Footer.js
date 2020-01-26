import React from 'react';
import Aux from '../../../hoc/Auxillary';
import classes from './Footer.module.css';

const footer = (props) => {
    return(
        <Aux>
        <div className={classes.FooterStyle}>
        <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l12 s12">
                <h5 className="white-text">EXPEN App</h5>
                <p className="grey-text text-lighten-4">This is the first release of this application, more updates and fixes would be applied 
                    when available.
                </p> 
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container" align='center'>
            © {new Date().getFullYear()} Copyright Text
            </div>
          </div>
        </footer>
        </div>
        </Aux>
    );
}

export default footer;