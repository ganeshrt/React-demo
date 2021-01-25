// @flow
import * as React from 'react';
import TextField from '@material-ui/core/TextField';

export class Textfield extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    
    render() {
        const { label, variant } = this.props;
        console.log("textFiled");
      return (
          <form className={{width:"2ch",padding:'5px'}} noValidate autoComplete="off">
      <TextField id="outlined-basic" label={label} variant={variant} />
    </form>

    );
  };
};