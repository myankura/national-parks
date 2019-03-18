# National Parks

1. Clone down this repo.
1. `cd` into the repo.
1. To run json-server from command line, `json-server -w database.json -p 9099`.


Today’s exercise:

*Part One:*
Build an application using grunt to get data from the following API: https://github.com/nss-day-cohort-31/national-parks and display the list of national parks on the DOM. Each national park should be formatted in HTML like below:
```<article>
      <h3>Park Name</h3>
      <p>State the park in located in</p>
    </article>```
If the park has been visited, the article tag should have a red dashed border. If the park has not been visited, it should have a green solid border.

*Part Two:*
For each of the national parks, use the latitude and longitude to get the weather in that area using this API: https://darksky.net/dev. From the data coming back from the Dark Sky API, you are going to use `summary` listed under `currently`, `hourly` and `daily`. Change the html so it looks like this:
```<article>
      <h3>Park Name</h3>
      <p>State the park</p>
      <p>Weather:</p>
      <ul>
        <li>Currently: Summary from currently in API Data</li>
        <li>Today: Summary from hourly in API Data</li>
        <li>Week: Summary from daily in API Data</li>
      </ul>
    </article>```

If you encounter CORS issues with the Dark Sky API, you can either get an extension for Chrome to work around it here: https://chrome.google.com/webstore/detail/moesif-orign-cors-changer/digfbfaphojjndkpccljibejjbppifbc OR you can add this to the front of you URL: `https://cors-anywhere.herokuapp.com/`
darksky.net
Dark Sky
The Dark Sky API allows you to request weather forecasts and historical weather data programmatically. It is the easiest, most advanced weather API on the web.
chrome.google.com
Moesif Orign & CORS Changer
This plugin allows you to send cross-domain requests. You can also override Request Origin and CORS headers.
nss-day-cohort-31/national-parks
Last updated
5 hours ago
nss-day-cohort-31/national-parksToday at 10:06 AMAdded by GitHub