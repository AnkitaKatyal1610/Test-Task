import React, { Component } from 'react';
import { Table, Button, Confirm } from 'semantic-ui-react'

import players, { deletePlayer } from './playerData';
import AddPlayer from './addplayer';
import EditPlayer from './editPlayer';

class Players extends Component {

    state = {
        addModal: false,
        editModal: false,
        player: {},
        show: false,
        deleteId: 0
    }
    triggerAdd = () => {
        this.setState(prevState => ({ addModal: !prevState.addModal }))
    }
    triggerEdit = (player) => {
        this.setState(prevState => ({ editModal: !prevState.editModal, player: { ...player } }))
    }
    show = (id) => {
        this.setState(prevState => ({ show: !prevState.show, deleteId: id }));
    }
    handleDelete = () => {
        deletePlayer(this.state.deleteId);
        this.show();
    }
    render() {
        const { teams } = this.props;
        return (
            <div style={{ margin: '20px' }}>
                <AddPlayer open={this.state.addModal} onClose={this.triggerAdd}
                    trigger={<Button onClick={this.triggerAdd} color='blue'>Add New Player</Button>}>
                </AddPlayer>
                <Table textAlign='center' inverted>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>#</Table.HeaderCell>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Score</Table.HeaderCell>
                            <Table.HeaderCell>Actions</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {
                            players.map((player, i) => {
                                return (
                                    <Table.Row key={i}>
                                        <Table.Cell>{i + 1}</Table.Cell>
                                        <Table.Cell>{player.lastName}, {player.firstName}</Table.Cell>
                                        <Table.Cell>{player.score}</Table.Cell>
                                        <Table.Cell>
                                            <EditPlayer open={this.state.editModal} onClose={this.triggerEdit} player={this.state.player}
                                                trigger={<Button onClick={() => this.triggerEdit(player)} color='blue'>Edit</Button>} />
                                            <Button onClick={() => this.show(player.id)} color='red'>Delete</Button>
                                            <Confirm
                                                size='mini'
                                                open={this.state.show}
                                                cancelButton='No'
                                                confirmButton="Yes"
                                                onCancel={this.show}
                                                onConfirm={this.handleDelete}
                                            />
                                        </Table.Cell>
                                    </Table.Row>
                                )
                            })
                        }
                    </Table.Body>
                </Table>
                <hr />
                <hr />
                <div>Java Scipt function result:
          {
                        teams.map((team, i) => {
                            return (
                                <div key={i}>
                                    <div>Team: {team.team}</div>
                                    <div>Total Points: {team.points}</div>
                                    <hr />
                                </div>
                            )
                        })
                    }
                </div>
            </div>)
    }
}

export default Players;