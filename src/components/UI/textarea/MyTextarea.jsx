import React from 'react';
import classes from './MyTextarea.module.css'
const MyTextarea = React.forwardRef((props, ref) => {
  return (  
    <textarea ref={ref} className={classes.myTextarea} {...props} />
  );
});

export default MyTextarea;