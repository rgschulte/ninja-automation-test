import request_helper from "../helpers/request_helper";
import homepage from "../page_model/homepage";

fixture('Ninja Automation Test 4')
    .page('http://localhost:3001/');

test('Delete Existing Device', async t => {
    const devices = await request_helper.getAllDevices();
    const last_device = devices.body[devices.body.length-1];
    
    const response = await request_helper.deleteDevice(last_device.id);
    await t.expect(response.status).eql(200);
    console.log(last_device);
    await t.eval(() => location.reload(true));
    await t.expect(homepage.deviceName.withText(last_device.system_name).visible).notOk();
    await t.expect(homepage.deviceType.withText(last_device.type).visible).notOk();
    await t.expect(homepage.deviceCapacity.withText(last_device.hdd_capacity).visible).notOk();
    
});
