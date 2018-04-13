import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button, Checkbox, Col, Form} from 'react-bootstrap';


export class LogIn extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleChange = this.handleChange.bind(this);
    
        this.state = {
          value: ''
        };
      }

    getValidationState() {
        const length = this.state.value.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
      }

    handleChange(e) {
        this.setState({ value: e.target.value });
      }

    render() {
        return (
            <div className="container">
            <Form horizontal>
                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                        Email
                    </Col>
                    <Col sm={10}>
                        <FormControl 
                            type="email" 
                            placeholder="Email"
                            value={this.state.value}
                            onChange={this.handleChange} />
                    </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={2}>
                        Password
                    </Col>
                    <Col sm={10}>
                        <FormControl type="password" placeholder="Password" />
                    </Col>
                    </FormGroup>

                    <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Checkbox>Remember me</Checkbox>
                    </Col>
                    </FormGroup>

                    <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Button type="submit">Sign in</Button>
                    </Col>
                </FormGroup>
            </Form>
            </div>
        )
    }
}

export default LogIn;