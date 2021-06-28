import React from 'react';
import PrimarySearchAppBar from '../../Modules/AppBar/connectIndex';

export const LayoutMaster = (props) => {

  return (
    <div style={{ marginTop:'70px'}}>
        <PrimarySearchAppBar/>
        {props.children}
    </div>  
  );
};
