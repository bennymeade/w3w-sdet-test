// @ts-nocheck
import searchPage from '../pages/search.page'

describe('Search', () => {

    it(`Validate postal address converts to w3w`, () => {
        let w3w = 'fence.gross.bats'
        searchPage
            .openUrl('/daring.lion.race')
            .setCookies()
            .submitSearchTerm('Buckingham Palace')
            .validateW3wPrepopulated(w3w)
            .validatePageUrl(w3w)
    })

    it('Validate w3w address remains as w3w', () => {
        let w3w = 'prices.slippery.traps'
        searchPage
            .openUrl('')
            .setCookies()
            .enterW3wTerm(w3w)
            .submitW3wTerm(w3w)
            .validateW3wPrepopulated(w3w)
            .validatePageUrl(w3w)
    })

    it('Validate no address found message', () => {
        let w3w = 'couches.gross..watch'
        searchPage
            .openUrl('')
            .setCookies()
            .enterW3wTerm(w3w)
            .validateNotificationMessage("No address found.", "Please try searching for the town or nearby place and zoom in to find the what3words address.")
    })

    it('Validate incorrect syntax error', () => {
        let w3w = '$%^&&'
        searchPage
            .openUrl('')
            .setCookies()
            .enterW3wTerm(w3w)
            .validateNotificationMessage("No address found.", "Please try searching for the town or nearby place and zoom in to find the what3words address.")
    })

    it('Validate tip label', () => {
        let w3w = 'sufferer.reinvention.coddles'
        searchPage
            .openUrl('/daring.lion.race')
            .setCookies()
            .enterW3wTerm(w3w)
            .clickSearchCloseButton()
            .validateTipLabel("Search for any place or what3words address e.g.")
    })
})