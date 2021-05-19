import https from '../http-common';

class MapPointers {
    getAllPointersForGame(gameId) {
        return https.get(`/gamemission?id=${gameId}`);
    }
}
export default new MapPointers();