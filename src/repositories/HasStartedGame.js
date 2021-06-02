import https from '../http-common';

class HasStartedGame {
    GameStarted (){
        let userid = sessionStorage.getItem('userid')
        return https.get(`/user/usergames?id=${userid}`)
        // return https.get('/user/usergames?id=31496806-f4bb-4ce4-80ce-8ca6c46831e7')
    }
}

export default new HasStartedGame()