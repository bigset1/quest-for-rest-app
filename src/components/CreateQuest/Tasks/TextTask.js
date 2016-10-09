import React from 'react';
import TextField from 'material-ui/TextField';

export default ()=>(<div>
  <TextField hintText="Task description" multiLine={true} width={600} rows={2} rowsMax={10}/>
  <TextField hintText="Question result"/>
</div>);
