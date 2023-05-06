import { t } from 'testcafe';


class RequestHelper {
    async getAllDevices(){
        const response = await t.request({
             url: `http://localhost:3000/devices/`,
             method: 'get',
             headers: {
                 "Content-Type": "application/json"
             }
         })
         return response;
     }

     async getDevice(id){
        const response = await t.request({
             url: `http://localhost:3000/devices/${id}`,
             method: 'get',
             headers: {
                 "Content-Type": "application/json"
             }
         })
         return response;
     }

     async deleteDevice(id){
        const response = await t.request({
             url: `http://localhost:3000/devices/${id}`,
             method: 'delete',
             headers: {
                 "Content-Type": "application/json"
             }
         })
         return response;
     }

    async updateDevice(id, updatedDevice){
       const response = await t.request({
            url: `http://localhost:3000/devices/${id}`,
            method: 'put',
            headers: {
                "Content-Type": "application/json"
            },
            body: {
                system_name: updatedDevice.name,
                type: updatedDevice.type,
                hdd_capacity: updatedDevice.hddCapacity
            }
        })
        return response;
    }

}
export default new RequestHelper();