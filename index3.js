/**
 최초만든이 : Lucas.choi
 생성일 : 2021-11-27
 */
import ws from "ws";
Object.assign(global, { WebSocket: ws });
import SockJS from 'sockjs-client'

import pkg from '@stomp/stompjs';
const {Stomp} = pkg;
const webSockUrl = 'http://localhost:8090/webSocket';
const sockJS = new SockJS(webSockUrl)
console.log('sockJs :', sockJS);
const stompClient = Stomp.over(sockJS)
stompClient.connect({}, () => {
    console.log('스톰 클라이언트 최초 커넥트..? connected will be true')
})
