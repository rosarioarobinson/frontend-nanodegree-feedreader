/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('URL is defined and URL is not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined(); //tests if the URL is defined
                expect(feed.url.length).not.toBe(0); //tests if the URL is not empty
            });
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('Name defined and name is not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined(); //tests if the name is toBeDefined
                expect(feed.name.lenth).not.toBe(0); //tests if the name is not empty
            });
        });

    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {
        //Write a test that ensures menu element is hidden by default
        it('Menu element is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
        //Write a test that ensures menu changes are visible when menu icon is clicked.
        it('Menu changes visibility when opened and closed', function() {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            //test to hide when clicked again
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });


    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        //Write a test that ensures when loadFeed function is called and completed,
        //there is a single .entry element within the .feed container.
        //Be sure to use Jasmine's beforeEach and asynchronous done() function.
        beforeEach(function(done) {
            loadFeed(0, done);
            done();
        });

        it('loadFeed has .entry element within container', function(done) {
            expect($('.feed .entry').length).not.toBeGreaterThan(0);
            done();
        });
    });


    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        //Write a test that ensures when new feed is loaded by loadFeed function
        //that content changes. Note that loadFeed() is asynchronous.
        var Selection1, Selection2;


        beforeEach(function(done) {
            loadFeed(0, function() {
                Selection1 = $('.feed').html();
                done();
            });
        });

        it('new feed loaded, content will change', function(done) {
            loadFeed(1, function() {
                Selection2 = $('feed').html();
                expect(Selection2).not.toBeGreaterThan(Selection2); //checks that content will change.
                done();
            });
        });

    });

}());
