var googleSearchPage = function () {
    //locators
    var seacrhBox = by.name("q");

    //actions
    this.enterTextInSearchBox = function (searchTxt) {
        element(seacrhBox).sendKeys(searchTxt);
    }

    this.clickSearch = function () {
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
    }

}
module.exports = new googleSearchPage();