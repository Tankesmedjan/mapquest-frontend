import https from '../http-common';

class GameProgress {
    saveGameProgress(data) {
        return https.post('/gameprogress', data);
    }

    getGameProgress(gameId, teamId) {
        return https.get(`/gameprogress?gameid=${gameId}&teamid=${teamId}`)
    }

    getSingleGameProgress(gameId) {
        return https.get(`/gameprogress/snigel?gameid=${gameId}`)
    }

}
export default new GameProgress()