// Gets news from API
function retrieveNews (callback, params) {
	console.log("News retrieving..")
	$.ajax({
    url: chrome.runtime.getManifest().permissions[1],
    crossDomain: true,
    dataType: "json",
    success: function (response) {
    	console.log(params);
    	console.info("News retrieved");
      // Caching response
      console.debug();
      localStorage.news = JSON.stringify(prepareForStorage(response.results));
      localStorage.newsDOM = createNewsDOM(JSON.parse(localStorage.news));

    	console.log(response);
    	params[0] = JSON.parse(localStorage.news);
    	return callback(params);
    },
    error: function (xhr, status) {
      	console.error("News not retrieved!");
      	console.error(status);
    }
  });
}

