import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

export function ButtonCustom(props) {
  let name=props.name
  return (
    <Button variant="contained" color="primary">
      Hello 
    </Button>
  );
}