import React from 'react';

const Card = (props) => {
    return (
           
              <div className="individual-card"  name={props.parade.id}>
                <img className="card-photo" src={props.parade.img} name={props.parade.id} onClick={(e)=>props.toggle(e)}/>
                <h3 name={props.parade.id}> {props.parade.name} </h3>
              </div>
           
    )
}

export default Card;