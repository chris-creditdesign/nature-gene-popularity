/*	Referenced from: http://addyosmani.com/resources/essentialjsdesignpatterns/book/#observerpatternjavascript */
function extentObject (myObject) {
	/* 	Storage for topics that can be broadcast or listened to */
	var topics = {};

	/* A topic identifier */
	var subUid = -1;

	/*	Publish or broadcast events of interest
		with a specific topic name and arguments
		such as the data to pass along */
	myObject.publish = function (topic, args) {
		if ( !topics[topic] ) { // should this be topics.hasOwnProperty ?
			return false;
		}

		var subscribers = topics[topic];
		var len = subscribers ? subscribers.length : 0;

		while (len--) {
			subscribers[len].func(topic, args);
		}

		return this;
	};

	/*	Subscribe to events of interest with a specific topic name and a 
		callback function, to be executed when the topic/event is observed */
	myObject.subscribe = function (topic, func) {
		if ( !topics[topic] ) {
			topics[topic] = [];
		}

		var token = ( ++subUid ).toString();
		topics[topic].push({
			token: token,
			func: func
		});

		return token;

	};

}

export default extentObject;