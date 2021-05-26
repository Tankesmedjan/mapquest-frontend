import https from '../http-common';

class TeamAndPlayers {
    getAllPlayersForTeam(teamId) {
        return https.get(`/team/teamplayers?id=${teamId}`);
    }
}
export default new TeamAndPlayers();