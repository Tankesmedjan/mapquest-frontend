import https from '../http-common';

class MissionService{

    getAllMissions(){
        return https.get('/mission')
    }
}
export default new MissionService()