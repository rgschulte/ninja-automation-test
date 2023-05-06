import request_helper from "../helpers/request_helper";
import homepage from "../page_model/homepage";

fixture('Ninja Automation Test 3')
    .page('http://localhost:3001/');

const updated_device = {
    name: 'Updated Device Name',
    type: 'MAC',
    hddCapacity: '1000'
}

test('Update Existing Device', async t => {
    const response = await request_helper.updateDevice('e8okoP2l5', updated_device);
    await t.eval(() => location.reload(true));
    await t.expect(homepage.deviceName.withText(updated_device.name).visible).ok();
    await t.expect(homepage.deviceType.withText(updated_device.type).visible).ok();
    await t.expect(homepage.deviceCapacity.withText(updated_device.hddCapacity).visible).ok();
    
});

    
    