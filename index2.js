/**
 최초만든이 : Lucas.choi
 생성일 : 2021-11-27
 */

import StompClient from 'stomp-client';
var destination = '/private/user';
var client = new StompClient('localhost', 8090);

client.connect(function(sessionId) {
    client.subscribe(destination, function(body, headers) {
        console.log('This is the body of a message on the subscribed queue:', body);
    });

    client.publish(destination, 'Oh herrow');
});
