function prepareForStorage (data) {
	var dataForStorage = [];
	$(data).each(function(i, v){
		if(v.description.constructor === Array){
			for (var j = 0; j < v.description.length; j++) {
				dataForStorage.push({
					id                    	 : 	dataForStorage.length - 1,
					link 					 : 	v.image_link[j],
					main_image            	 : 	v.imglarge_image[j], 
					description           	 : 	v["imglarge_image/_alt"][j], 
					content_description   	 : 	v.hideforsmall_description === undefined ? v["imglarge_image/_alt"][j] : v.hideforsmall_description[j],
					content_value         	 : 	v.text_value[j]
				});
			};
		}
		else{
			dataForStorage.push({
				id                    	 : 	i,
				link 					 : 	v.image_link,
				main_image            	 : 	v.imglarge_image, 
				description           	 : 	v["imglarge_image/_alt"], 
				content_description   	 : 	v.hideforsmall_description === undefined ? v["imglarge_image/_alt"] : v.hideforsmall_description,
				content_value         	 : 	v.text_value
			});
		}
		

	});
	return dataForStorage;
}