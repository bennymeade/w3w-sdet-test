// @ts-nocheck
import Base from '../pages/base.page';

const searchTextbox = '[data-testid="SearchPanel-InputBlur"]'
const resultOption = 'div.SearchPanel-LocationLine1'
const w3wText = '[data-testid="ThreeWordAddress-Text"]'
const notificationMessage = 'div.NotificationMessage-Label'
const searchCloseButton = '[data-testid="Close-Search-Input"]'
const tipLabel = 'div.SearchPanel-TipLabel'

class Search extends Base {

    submitSearchTerm(text) {
        cy.get(searchTextbox).type(text)
        cy.get(resultOption).contains(text).click()
        return this;
    }

    enterW3wTerm(text) {
        cy.get(searchTextbox).type(text)
        return this;
    }

    submitW3wTerm(text) {
        cy.get('.SearchPanel-ResultItem > [data-testid=ThreeWordAddress] > .ThreeWordAddress-Content > ' + w3wText).contains(text).click()
        return this;
    }

    validateW3wPrepopulated(text) {
        cy.get(w3wText)
            .should('contain', text)
        return this;
    }

    validateNotificationMessage(messageTitle, messageInfo) {
        cy.get(notificationMessage).find('div').eq(0)
            .should('contain', messageTitle)

        cy.get(notificationMessage).find('div').eq(1)
            .should('contain', messageInfo)
        return this;
    }

    clickSearchCloseButton() {
        cy.get(searchCloseButton)
            .should('exist')
            .should('be.visible')
            .click()
        return this;
    }

    validateTipLabel(text) {
        cy.get(tipLabel)
            .should('contain', text)
        return this;
    }
}

export default new Search;