// Given an array of players
// returns a sorted array of teams with the total team points for active players.
// The output is sorted in descending order by points
// input: [{ team: 'green', name: 'Bob', points: 5, isActive: true }, ...]
// output: [{ team: 'green', points: 40 }, ...]

let players = [
    {
        team: 'green',
        name: 'Bob',
        points: 5,
        isActive: true
    },
    {
        team: 'blue',
        name: 'Robbie',
        points: 10,
        isActive: true
    },
    {
        team: 'green',
        name: 'Grant',
        points: 15,
        isActive: true
    },
    {
        team: 'blue',
        name: 'Phil',
        points: 20,
        isActive: true
    },
    {
        team: 'green',
        name: 'Mack',
        points: 25,
        isActive: false
    },
    {
        team: 'blue',
        name: 'Leo',
        points: 30,
        isActive: false
    },
    {
        team: 'red',
        name: 'Bob',
        points: 5,
        isActive: true
    },
    {
        team: 'red',
        name: 'Robbie',
        points: 10,
        isActive: true
    },
    {
        team: 'red',
        name: 'Grant',
        points: 30,
        isActive: true
    }

]

let getTeams = (players) => {
    let teams = [];
    players.map(player => {
        if (!teams.includes(player.team)) {
            teams.push(player.team)
        }
        return true
    })

    let teamsData = [];

    let teamPoints
    for (let i = 0; i < teams.length; i++) {
        teamPoints = 0;
        for (let j = 0; j < players.length; j++) {
            if (players[j].isActive) {
                if (teams[i] === players[j].team) {
                    teamPoints = teamPoints + players[j].points;
                }
            }
        }
        teamsData.push({ team: teams[i], points: teamPoints })
    }
    for (let k = 0; k < teamsData.length; k++) {
        for (let l = k + 1; l < teamsData.length; l++) {
            if (teamsData[k].points < teamsData[l].points) {
                let temp = teamsData[k];
                teamsData[k] = teamsData[l];
                teamsData[l] = temp;
            }
        }
    }
    return teamsData;

}

export default getTeams(players)