import React, { Component } from 'react';
import { Modal, Button, Form, Input, Label } from 'semantic-ui-react';

import { editPlayer } from './playerData';

class EditPlayer extends Component {
    state = {
        firstName: "",
        lastName: "",
        score: 0,
        submitted: false,
        scoreValid: true
    }
    componentWillReceiveProps(nextprops) {
        this.setState({
            firstName: nextprops.player.firstName,
            lastName: nextprops.player.lastName,
            score: nextprops.player.score
        })
    }
    handleUpdate = () => {
        this.setState({ submitted: true })
        if (this.state.firstName !== '' && this.state.lastName !== '' && this.state.score !== '') {
            if (this.state.score > 100 || this.state.score < 0) {
                this.setState({ scoreValid: false })
            }
            else {
                editPlayer({ ...this.state, id: this.props.player.id });
                this.props.onClose();
            }
        }
    }

    closeModal = () => {
        this.props.onClose();
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value, submitted: false, scoreValid: true });
    }
    render() {
        return (
            <Modal trigger={this.props.trigger} centered={false} open={this.props.open}>
                <Modal.Header>Please fill in the details</Modal.Header>
                <Modal.Content>
                    <Form>
                        <Form.Field>
                            <label>First Name</label>
                            <Input name='firstName' type='text' value={this.state.firstName} onChange={this.handleChange} />
                            {this.state.submitted && this.state.firstName === '' ? <Label color='red' basic pointing>Please enter first name</Label> : null}
                        </Form.Field>
                        <Form.Field>
                            <label>Last Name</label>
                            <Input name='lastName' type='text' value={this.state.lastName} onChange={this.handleChange} />
                            {this.state.submitted && this.state.lastName === '' && this.state.firstName !== '' ? <Label color='red' basic pointing>Please enter last name</Label> : null}
                        </Form.Field>
                        <Form.Field>
                            <label>Score</label>
                            <Input type='number' name='score' value={this.state.score} onChange={this.handleChange} />
                            {this.state.submitted && this.state.score === '' && this.state.lastName !== '' && this.state.firstName !== '' ? <Label color='red' basic pointing>Please enter score [0-100]</Label> : null}
                            {this.state.submitted && !this.state.scoreValid ? <Label color='red' basic pointing>The score should be in the range of 0 to 100.</Label> : null}
                        </Form.Field>
                        <Modal.Actions>
                            <Button type='button' color='blue' onClick={this.handleUpdate} >Update</Button>
                            <Button type='button' color='red' onClick={this.closeModal} >Cancel</Button>
                        </Modal.Actions>
                    </Form>
                </Modal.Content>
            </Modal>
        )
    }
}

export default EditPlayer;