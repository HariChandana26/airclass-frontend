import React from 'react';
import Loader from '../Loader';
import { usePromiseTracker } from "react-promise-tracker";
import { LoopCircleLoading } from 'react-loadingg';

const LoadingIndicator = props => {
  const { promiseInProgress } = usePromiseTracker();
   return (
    <div style={{
             width: "100%",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }} >
    {
      (promiseInProgress === true) ?
       // <h3 style={{height:"100vh"}}>Hey I'm a spinner loader wannabe !!!</h3>
        // <Loader color="black" height="50" width="50" />
        <LoopCircleLoading/>
      :
        null
    }
  </div>
  );  
 }

export default LoadingIndicator;
