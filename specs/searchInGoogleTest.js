var google = require('../pages/GoogleSearchPage');

describe('Test google page', function () {
    beforeAll(function () {
        browser.get(browser.params.baseUrl);
    });

    it('search text in google', function () {
        google.enterTextInSearchBox("BMW");
        google.clickSearch();
    });

})