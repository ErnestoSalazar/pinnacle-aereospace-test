import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";

// components
import Radio from '../Form/Radio';
import Button from '../Button';



//css
import ('./index.css');



const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);


class CustomizedDialogs extends React.Component {

  render() {
    return (
        <Dialog
          onClose={this.props.handleClose}
          aria-labelledby="customized-dialog-title"
          open={this.props.isOpen}
        >
          <DialogContent dividers>
            <div className={"modal"}>
              <div className="item">
                <img alt={this.props.imageAlt} src="https://tecreview.tec.mx/wp-content/uploads/2017/07/iStock-180258510.jpg"/>
              </div>
              <div className="item">
                <Typography variant="h6" color="textSecondary">
                  Receta 1 bien sabrosa sabron!
                </Typography>
                <Typography gutterBottom>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                  facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
                  at eros.
                </Typography>

                <FormControl component="fieldset">
                  <RadioGroup>
                    <Radio value="s" label='S'/>
                    <Radio value="l" label='L'/>
                    <Radio value="M" label='M'/>
                  </RadioGroup>
                  <Button btnColor="primary">
                    Select
                  </Button>
                </FormControl>
              </div>
            </div>
          </DialogContent>
        </Dialog>
    );
  }
}

export default CustomizedDialogs;
