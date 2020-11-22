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
            .submitW3wTerm(w3w)
            .validateW3wPrepopulated(w3w)
            .validatePageUrl(w3w)
    })
})