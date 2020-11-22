// @ts-nocheck

// common methods are placed in base page class
export default class Base {

    openUrl(pathUrl) {
        cy.visit(Cypress.config().baseUrl + pathUrl)
        return this;
    }

    setCookies() {
        Cypress.Cookies.debug(true)
        cy.setCookie('IS_COOKIE_NOTICE_CLOSED', 'true', { domain: Cypress.config('baseUrl').replace("https://", ""), path: '/' })
        cy.reload()
        return this;
    }

    validatePageUrl(url) {
        cy.url().should('include', Cypress.config('baseUrl') + '/' + url)
        return this;
    }
}