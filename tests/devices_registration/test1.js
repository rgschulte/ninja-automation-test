import request_helper from "../helpers/request_helper";
import homepage from "../page_model/homepage";

fixture('Ninja Automation Test 1')
    .page('http://localhost:3001/');

test
    .meta({CID: [1]})
    ('Validate If All Devices Are Visible', async t => {
        const response = await request_helper.getAllDevices();
        for(let i = 0; i < await homepage.deviceMainBox.count; i++){
            await t.expect(homepage.deviceMainBox.count).eql(response.body.length);
            await t.expect(homepage.deviceName.withText(response.body[i].system_name).visible).ok();
            await t.expect(homepage.deviceType.withText(response.body[i].type).visible).ok();
            await t.expect(homepage.deviceCapacity.withText(response.body[i].hdd_capacity).visible).ok();
            await t.expect(homepage.deviceEditButton.visible).ok();
            await t.expect(homepage.deviceRemoveButton.visible).ok();
        }
        
});