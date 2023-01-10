const assert = require('chai').assert;

describe('Android Sample tests', () => {
    it('find element by xpath', async () => {
        // find element        
        const getHelpBtn = await $('(//android.view.View.VirtualChild[@content-desc="Get help "])[1]')
        const contactSupportBtn = await $('(//android.view.View.VirtualChild[@content-desc="Contact support "])[1]')
        const contactSupportTitle = await $('//android.view.View.VirtualChild[@content-desc="Contact support "]')

        // click on get help
        await getHelpBtn.click()

        // click on contact support
        await contactSupportBtn.click()

        // verify 
        assert.notEqual(contactSupportTitle)
    });
});