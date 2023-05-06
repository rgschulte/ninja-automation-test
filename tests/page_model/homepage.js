import {t, Selector } from 'testcafe';

class Homepage {
    constructor () {
        // this.nameInput               = Selector('input').withAttribute('data-testid', 'name-input');
        // this.importantFeaturesLabels = Selector('legend').withExactText('Which features are important to you:').parent().child('p').child('label');
        this.addDeviceButton = Selector('.submitButton').withText('ADD DEVICE');
        this.deviceName = Selector('.device-name');
        this.deviceType = Selector('.device-type');
        this.deviceCapacity = Selector('.device-capacity');
        this.deviceEditButton = Selector('.device-edit');
        this.deviceRemoveButton = Selector('.device-remove');
        this.deviceMainBox = Selector('.device-main-box');
        this.deviceList = Selector('.list-devices');
    }

    async selectFeature(number) {
        await t.click(this.importantFeaturesLabels.nth(number));
    }

    async clickAddDeviceButton() {
        await t.click(this.addDeviceButton);
    }

    async typeName(name) {
        await t.typeText(this.nameInput, name);
    }
}

export default new Homepage();