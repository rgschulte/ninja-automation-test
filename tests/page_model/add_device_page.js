import {t, Selector } from 'testcafe';

class AddDevicePage {
    constructor () {
        this.systemNameInput = Selector('#system_name');
        this.typeSelect = Selector('#type');
        this.typeOption = Selector('option');
        this.hddCapacityInput = Selector('#hdd_capacity');
        this.saveButton = Selector('.submitButton').withText('SAVE');
    }

    async typeSystemName(systemName) {
        await t.typeText(this.systemNameInput, systemName);
    }

    async selectType(option){
        await t.click(this.typeSelect)
               .click(this.typeOption.withText(option));
    }

    async typeHddCapacity(hddCapacitty) {
        await t.typeText(this.hddCapacityInput, hddCapacitty);
    }

    async clickSaveButton() {
        await t.click(this.saveButton);
    }
}

export default new AddDevicePage();