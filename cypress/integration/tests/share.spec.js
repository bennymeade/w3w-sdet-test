// @ts-nocheck
import searchPage from '../pages/search.page'
import sharePage from '../pages/share.page'

describe('Share', () => {

    beforeEach(() => {
        searchPage
            .openUrl('/dress.sharp.brave')
            .setCookies()
    })

    const areas = ['Facebook', 'WhatsApp', 'Twitter', 'CopyLink', 'MailTo'];

    areas.forEach(area => {
        it(`Validate links for external site sharing - ${area}`, () => {
            sharePage
                .clickShareTab() 
                .validateExternalSiteLinks(`${area}`)
            })
        })
    
    it(`Validate default sharing content`, () => {
        sharePage
            .clickShareTab()
            .validateShareContentTitle("This is an example of what you'll share")
    })
})