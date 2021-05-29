import https from '../http-common';

class TeamAndPlayers {
    getAllPlayersForTeam(teamId) {
        return https.get(`/team/teamplayers?id=${teamId}`);
    }
    getAllTeamsForGame(gamId) {
        return https.get(`/team/teamplayers?id=${gamId}`)
    }
}
export default new TeamAndPlayers();
