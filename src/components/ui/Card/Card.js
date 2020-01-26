import React from 'react';

const card = (props) => {
    return(
        <div className="row">
        <div className="col s12 m12">
          <div className="card ">
            <div className="card-content white-text">
              <span className="card-title blue-text text-darken-2">{props.cardTitle}</span>
             {props.children}
            </div>
            <div className="card-action">
              <a href={props.cardlink}>{props.LinkName}</a>
             
            </div>
          </div>
        </div>
      </div>
    )
}

export default card