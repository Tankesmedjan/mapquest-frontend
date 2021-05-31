import https from '../http-common';

class ManageTeamService {
    getTeamByGameID(gameId) {
        return https.get(`/team?id=${gameId}`)
    }

    getPlayersByTeamID(teamId) {
        return https.get(`/team/teamplayer?id=${teamId}`)
    }
}
export default new ManageTeamService()