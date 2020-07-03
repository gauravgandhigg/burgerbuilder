import React from 'react'
import classes from '../BuildControl/BuildControl.module.css';


const buildControl =(props)=>(
    <div className={classes.BuildControl}>
        <div className={classes.bel}>{props.label}</div>
        <button className={classes.Less}>Less</button>
        <button className={classes.More}>More</button>
    </div>
);


export default buildControl;