import homepage from "../page_model/homepage";
import add_device_page from "../page_model/add_device_page";

fixture('Ninja Automation Test 2')
    .page('http://localhost:3001/');

const new_device = {
    name: 'Automated System Name',
    type: 'MAC',
    hddCapacity: '500'
}

test
    .meta({CID: [2]})
    ('Create a new Device', async t => {

    await homepage.clickAddDeviceButton();
    await add_device_page.typeSystemName(new_device.name);
    await add_device_page.selectType(new_device.type);
    await add_device_page.typeHddCapacity(new_device.hddCapacity);
    await add_device_page.clickSaveButton();
    await t.expect(homepage.deviceName.withText(new_device.name).visible).ok();
    await t.expect(homepage.deviceType.withText(new_device.type).visible).ok();
    await t.expect(homepage.deviceCapacity.withText(new_device.hddCapacity).visible).ok();
    
});
    
    