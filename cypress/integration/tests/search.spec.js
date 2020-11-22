// @ts-nocheck
import searchPage from '../pages/search.page'

const sizes = ['iphone-x', 'macbook-15'];

describe('Search', () => {

    sizes.forEach(size => {
        it(`Validate postal address converts to w3w - ${size}`, () => {
        cy.viewport(size);
            let w3w = 'fence.gross.bats'
            searchPage
                .openUrl('/daring.lion.race')
                .setCookies()
                .submitSearchTerm('Buckingham Palace')
                .validateW3wPrepopulated(w3w)
                .validatePageUrl(w3w)
        })

        it(`Validate no address found message - ${size}`, () => {
            cy.viewport(size);
                let w3w = 'couches.gross..watch'
                searchPage
                    .openUrl('')
                    .setCookies()
                    .enterW3wTerm(w3w)
                    .validateNotificationMessage("No address found.", "Please try searching for the town or nearby place and zoom in to find the what3words address.")
            })
    })

    const areas = ['skirt.loops.frozen', 'skirting.loops.frozen', 'skirt.loop.frozen'];

    areas.forEach(area => {
        it(`Validate the 3 results options - ${area}`, () => {
            searchPage
                .openUrl('')
                .setCookies()
                .enterW3wTerm('skirt.loops.frozen')
                .submitW3wTerm(area)
                .validateW3wPrepopulated(area)
                .validatePageUrl(area)    
            })
        })

    it(`Validate incorrect syntax error`, () => {
        let w3w = '$%^&&'
        searchPage
            .openUrl('')
            .setCookies()
            .enterW3wTerm(w3w)
            .validateNotificationMessage("No address found.", "Please try searching for the town or nearby place and zoom in to find the what3words address.")
    })

    it(`Validate tip label`, () => {
        let w3w = 'sufferer.reinvention.coddles'
        searchPage
            .openUrl('/daring.lion.race')
            .setCookies()
            .enterW3wTerm(w3w)
            .clickSearchCloseButton()
            .validateTipLabel("Search for any place or what3words address e.g.")
    })

    it(`Validate different browser language - ar`, () => {
        let w3w = 'covers.archive.folds'
        searchPage
            .openUrl('')
            .setCookies('ar')
            .enterW3wTerm(w3w)
            .submitW3wTerm(w3w)
            .validateW3wPrepopulated(w3w)
            .validatePageUrl(w3w)    
     })
})