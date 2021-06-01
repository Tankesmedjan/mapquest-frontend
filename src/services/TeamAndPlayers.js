import https from '../http-common';

class TeamAndPlayers {
    getAllPlayersForTeam(teamId) {
        return https.get(`/team/teamplayer?id=${teamId}`);
    }
    getAllTeamsForGame(gamId) {
        return https.get(`/team/teamplayer?id=${gamId}`)
    }
}
export default new TeamAndPlayers();
