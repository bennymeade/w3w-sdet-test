// @ts-nocheck
import searchPage from '../pages/search.page'

let w3w = 'fence.gross.bats'

describe('Search', () => {

    it(`Validate postal address converts to w3w`, () => {
        searchPage
            .openUrl('/daring.lion.race')
            .setCookies()
            .submitSearchTerm('Buckingham Palace')
            .validateW3wPrepopulated(w3w)
            .validatePageUrl(w3w)
    })
})