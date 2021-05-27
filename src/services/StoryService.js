import https from '../http-common';

class StoryService {
    getAllStories() {
        return https.get('/story')
    }
}
export default new StoryService()