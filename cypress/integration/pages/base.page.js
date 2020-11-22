// @ts-nocheck
import chaiColors from 'chai-colors'
chai.use(chaiColors)

// common methods are placed in base page class
export default class Base {

    openUrl(pathUrl) {
        cy.visit(Cypress.config().baseUrl + pathUrl)
        return this;
    }

    setCookies(language) {
        Cypress.Cookies.debug(true)
        cy.clearCookies()
        if(language=='ar') {
            cy.setCookie('threewordaddress_language', language)
            cy.setCookie('site_language', language)
        }
        else {
            cy.setCookie('threewordaddress_language', 'en')
            cy.setCookie('site_language', 'en')
        }
        cy.setCookie('onboarding-done', 'search')
        cy.setCookie('onboarding-variant', 'basic')
        cy.setCookie('IS_COOKIE_NOTICE_CLOSED', 'true')
        cy.reload()
        return this;
    }

    validatePageUrl(url) {
        cy.url().should('include', Cypress.config('baseUrl') + '/' + url)
        return this;
    }

    validateSectionColour(selector, colour) {
        cy.get(selector)
            .should('have.css', 'background-color')
            .and('be.colored', colour)
        return this;
    }
}