var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
var HtmlReporter = require('protractor-beautiful-reporter');

var todaysDate = new Date();
var timeStamp = todaysDate.getMonth() + 1 + '_' + todaysDate.getDate() + '_' + todaysDate.getFullYear() + '_' + todaysDate.getHours() + 'h_' + todaysDate.getMinutes() + 'm';

exports.config = {

    allScriptsTimeout: 30000,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['../specs/*.js'],
    capabilities: {
        'browserName': 'chrome',
        'shardTestFiles': true,
        'maxInstances': 4,
        chromeOptions: {
            args: [
                '--headless',
                '--window-size=1920,1080',
                '--no-sandbox'
            ]
        }
    },
    suites: {
        sampleTest: []
    },
    onPrepare: function () {
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(10000);
        //run test for non-angular page
        browser.waitForAngularEnabled(false);

        var baseDir = './reprt/testReport_' + timeStamp;
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: baseDir,
            screenshotSubfolder: 'images',
            docTitle: 'Test-Report',
            docName: 'test_report.html',
            takeScreenshotForSkippedSpecs: true,
            takeScreenshotOnlyForFailedSpecs: true,
            gatherBrowserLogs: true
        }).getJasmine2Reporter());
    },

    params:{
        baseUrl:"https://www.google.com/"
    },


    framework: 'jasmine',
    jasmineNodeOpts: {
        onComplete: null,
        isVerbose: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 30000,
        displayStacktrace: 'all'
    }

}