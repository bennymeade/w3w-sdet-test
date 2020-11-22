// @ts-nocheck
import searchPage from '../pages/search.page'
import sharePage from '../pages/share.page'

describe('Share', () => {

    beforeEach(() => {
        searchPage
            .openUrl('/dress.sharp.brave')
            .setCookies()
        sharePage.clickShareTab()
    })

    const areas = ['Facebook', 'WhatsApp', 'Twitter', 'CopyLink', 'MailTo'];

    areas.forEach(area => {
        it(`Validate links for external site sharing - ${area}`, () => {
            sharePage.validateExternalSiteLinks(`${area}`)
            })
        })
    
    it(`Validate default sharing content`, () => {
        sharePage.validateShareContentTitle("This is an example of what you'll share")
    })

    it(`Validate Customise Share Settings`, () => {
        sharePage
            .selectCustomiseShareSettings()
            .toggleAndValidateShareContentSettingsList("3 Word Address")
            .toggleAndValidateShareContentSettingsList("Explainer Text")
            .toggleAndValidateShareContentSettingsList("Latitude & Longitude")
    })

    it(`Validate share button colour`, () => {
        sharePage.validateSectionColour('[data-testid="ActionPanel-Share"]', '#005379')
    })
})