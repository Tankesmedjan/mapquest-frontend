import https from '../http-common';

class StoryService {
    getAllStories() {
        return https.get('/story')
    }
    getGameByUserId(id){
        return https.get(`/game/select?id=${id}`)
    }
}
export default new StoryService()