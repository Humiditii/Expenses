import React from  'react';
//import Aux from '../../../hoc/Aux';


const formbuilder = (props) => {
    return (
            
                <div className='row'>
                    <div className="input-field col s10 m12">
                        <input placeholder = {
                            props.formholder
                        }
                        value = {
                            props.inputValue
                        }
                        id = {
                            props.inputid
                        }
                        type = {
                            props.formtype
                        }
                        className = {
                            props.classType
                        }
                        onChange = {
                            props.changed
                        }
                        />
                    </div>
                </div>  
    );
}

export default formbuilder;