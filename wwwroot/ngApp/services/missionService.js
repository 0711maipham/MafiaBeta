class MissionService {
    constructor($resource) {
        this.missionResource = $resource("/api/Mission/:id",null,{"update":{method: "PUT"}});
    }

    getMission(id) {
        return this.missionResource.get({ id: id });
    }

    getMissions(){
        return this.missionResource.query();
    }

    addMission(mission, callback) {
        this.missionResource.save(mission, callback);
    }

    deleteMission(id, callback) {
        this.missionResource.remove({ id: id }, callback);
    }

}