import https from '../http-common';

class GameProgress {
    saveGameProgress(data) {
        return https.post('/gameprogress', data);
    }
    getGameProgress(gameId, teamId) {
        return https.get(`/gameprogress?gameid=${gameId}&teamid=${teamId}`)
    }
}
export default new GameProgress()