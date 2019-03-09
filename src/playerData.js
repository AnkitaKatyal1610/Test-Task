let playerData = [
    {
        id: 1,
        lastName: 'Geary',
        firstName: 'Alice',
        score: 96
    },
    {
        id: 2,
        lastName: 'Junge',
        firstName: 'John',
        score: 96
    },
    {
        id: 3,
        lastName: 'Vera',
        firstName: 'Rob',
        score: 88
    }
]

export const addPlayer = (player) => {
    player.firstName = player.firstName.replace(player.firstName.charAt(0), player.firstName.charAt(0).toUpperCase());
    player.lastName = player.lastName.replace(player.lastName.charAt(0), player.lastName.charAt(0).toUpperCase());
    let idArr = playerData.map(player => player.id);
    let nextId = idArr.sort()[playerData.length - 1] + 1;
    playerData.push({ ...player, id: nextId });
    sortPlayers();
}

export const editPlayer = (player) => {
    player.firstName = player.firstName.replace(player.firstName.charAt(0), player.firstName.charAt(0).toUpperCase());
    player.lastName = player.lastName.replace(player.lastName.charAt(0), player.lastName.charAt(0).toUpperCase());
    let i = playerData.findIndex(_ => player.id === _.id);
    playerData[i].firstName = player.firstName
    playerData[i].lastName = player.lastName
    playerData[i].score = player.score
    sortPlayers();
}

export const deletePlayer = (id) => {
    let i = playerData.findIndex(_ => id === _.id);
    playerData.splice(i, 1);
    sortPlayers();
}

const sortPlayers = () => {
    for (let i = 0; i < playerData.length; i++) {
        for (let j = i + 1; j < playerData.length; j++) {
            if (playerData[i].score > playerData[j].score) {
                let temp = playerData[i];
                playerData[i] = playerData[j];
                playerData[j] = temp;
            }
            else if (playerData[i].score === playerData[j].score) {
                if (playerData[i].lastName > playerData[j].lastName) {
                    let temp2 = playerData[i];
                    playerData[i] = playerData[j];
                    playerData[j] = temp2;
                }
            }
        }
    }
    return (playerData);
}

export default sortPlayers();