import https from '../http-common';

class GameProgress {
    saveGameProgress(data) {
        return https.post('/gameprogress', data);
    }
}
export default new GameProgress()