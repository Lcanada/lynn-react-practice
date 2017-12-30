import React from 'react';

function Border(props){
return(
  <div className={'Border' + props.color }>{props.children}</div>
);
}

export default Border
