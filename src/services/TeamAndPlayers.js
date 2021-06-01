import https from '../http-common';

class TeamAndPlayers {
    getAllPlayersForTeam(teamId) {
        return https.get(`/team/teamplayer?id=${teamId}`);
    }
    getAllTeamsForGame(gameId) {
        return https.get(`/team/teamplayer?id=${gameId}`)
    }
}
export default new TeamAndPlayers();
