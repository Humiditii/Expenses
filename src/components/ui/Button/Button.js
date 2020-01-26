import React from 'react';
import Aux from '../../../hoc/Auxillary';

const button = (props) => {
    return(
        <Aux>
            <button className="btn waves-effect waves-light btn-small" type="submit" name="action" onClick={props.buttonClick} >{props.buttonName}
                {/* <i class="material-icons right">send</i> */}
            </button>
        </Aux>
    );
}

export default button;