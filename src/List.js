import React from 'react';
import PropTypes from 'prop-types';

export function List(props){
   return(
       <ul>
         {props.list.map(o =>
         <li key={o.id}
             onClick={() => props.handleClick(o)}
             className={(props.info === o.id) ? "list-item active" : "list-item"}>
         {o.name}</li>
         )}
       </ul>
   )
};
List.propTypes = {
    list: PropTypes.array,
    handleClick: PropTypes.func,
    info:PropTypes.string
};
