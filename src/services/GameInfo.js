import https from '../http-common';

class GameInfo {

    GameStarted() {
        let userid = sessionStorage.getItem('userid')
        return https.get(`/user/usergames?id=${userid}`)
    }
}

export default new GameInfo()