import * as React from "react";

type FaireFormProps = React.HTMLAttributes<HTMLFormElement> & { children(props: any): React.ReactElement, initialValues?: any };
type FaireFormState = { values: any, touched: any, errors: any };

export class FaireForm extends React.Component<FaireFormProps, FaireFormState> {
  state = {
    values: this.props.initialValues || {},
    touched: {},
    errors: {},
  }

  handleChange = (event: any) => {
    const target = event.target;
    const name = target.name;
    event.persist();
    this.setState(prevState => ({
      ...prevState,
      values: {
        ...prevState.values,
        [name]: target.value
      }
    }))
  }

  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    this.props.onSubmit && this.props.onSubmit(this.state.values);
  }

  render() {
    const {children, initialValues, ...props} = this.props
    if(this.props.children) {
      return (
        <form {...props} onSubmit={this.handleSubmit}>
          {
            this.props.children({
              ...this.state,
              handleChange: this.handleChange
            })
          }
        </form>
      )
    }
    else { 
      return null; 
    }
  }
}