// @ts-nocheck
import Base from '../pages/base.page';

const shareTab = '[data-testid="ActionPanel-Share"]'
const sharingContentTitle = 'li.MuiListItem-root.MuiListItem-gutters'
const shareExternalLinks = 'li.MuiListItem-root.ShareContentDefault-IconBlock.MuiListItem-gutters'

class Share extends Base {

    clickShareTab() {
        cy.get(shareTab)
            .should('exist')    
            .should('be.visible')
            .click()
        return this;
    }

    validateShareContentTitle(text) {
        cy.get(sharingContentTitle)
            .should('exist')    
            .should('contain', text)
        return this;
    }

    validateExternalSiteLinks(site) {
        switch(site) {
            case 'Facebook':
                cy.get(shareExternalLinks).find('a').eq(0)
                    .invoke('attr', 'href')
                    .then(href => {
                        cy.wrap(href).should('contain', 'facebook.com') 
                    });
                break;
            case 'WhatsApp':
                cy.get(shareExternalLinks).find('a').eq(2)
                    .invoke('attr', 'href')
                    .then(href => {
                        cy.wrap(href).should('contain', 'whatsapp.com') 
                    });
                break;
            case 'Twitter':
                cy.get(shareExternalLinks).find('a').eq(3)
                    .invoke('attr', 'href')
                    .then(href => {
                        cy.wrap(href).should('contain', 'twitter.com') 
                    });
                break;
            case 'CopyLink':
                cy.get('[data-testid="ButtonIcon-link"]')
                    .should('exist')
                    .should('be.visible')
                break;
            case 'MailTo':
                cy.get(shareExternalLinks).find('a').eq(4)
                    .invoke('attr', 'href')
                    .then(href => {
                        cy.wrap(href).should('contain', 'mailto:?subject') 
                    });
                break;
            default:
                cy.log('Incorrect site name passed')
          }
    }

}

export default new Share;