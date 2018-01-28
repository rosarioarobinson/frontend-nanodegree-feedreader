## Feed Reader Testing Project
By Rosario A. Robinson

---
# Project Overview
In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! This project displays multiple other tests to ensure the application is fully functional.


### Contributions
- Udacity's Feed Reader Course via FrontEnd Nanodegree Program
- Udacity Forums for assistance


### Installation
1. Clone files onto your local.
2. When you have the files, open the index.html in your personal browser.
3. When opened, you can see RSS feed reader application, then Jasmine tester at the bottom that will display all specs and failures.


### Tests Made:
1. RSS feeds
  -- are defined
  -- URL is defined and URL is not empty
  -- Name defined and name is not empty
2. The menu
  -- Menu element is hidden by default
  -- Menu changes visibility when opened and closed
3. Initial entries
  -- loadFeed has .entry element within container
4. New Feed Selection
  -- new feed loaded, content will change
