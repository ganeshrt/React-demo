// @flow
import * as React from 'react';
export class ErrorBoundry extends React.Component{
 constructor(props) {
    super(props); 
    this.state = {
         hasError: false ,

     }
 }
 componentDidCatch(error, info) {
     console.log(error, info);

 }
 static getDerivedStateFromError(error){
     return {hasError:true}
 }
 
    render() {
        const {hasError}= this.state;
    return hasError? <h1>Something went wrong.</h1>:this.props.children;
  };
};