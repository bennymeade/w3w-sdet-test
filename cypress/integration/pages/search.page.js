// @ts-nocheck
import Base from './base.page';

const searchTextbox = '[data-testid="SearchPanel-InputBlur"]'
const resultOption = 'div.SearchPanel-LocationLine1'
const w3wText = '[data-testid="ThreeWordAddress-Text"]'

class Search extends Base {

    submitSearchTerm(text) {
        cy.get(searchTextbox).type(text)
        cy.get(resultOption).contains(text).click()
        return this;
    }

    submitW3wTerm(text) {
        cy.get(searchTextbox).type(text)
        cy.get('.SearchPanel-ResultItem > [data-testid=ThreeWordAddress] > .ThreeWordAddress-Content > ' + w3wText).contains(text).click()
        return this;
    }

    validateW3wPrepopulated(text) {
        cy.get(w3wText)
            .should('contain', text)
        return this;
    }
}

export default new Search;