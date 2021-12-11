/**
 최초만든이 : Lucas.choi
 생성일 : 2021-11-27
 */
import ws from "ws";
import readline from 'readline';

Object.assign(global, { WebSocket: ws });
import SockJS from 'sockjs-client'

import pkg from '@stomp/stompjs';
const {Stomp} = pkg;
const webSockUrl = 'http://localhost:8090/webSocket';
const sockJS = new SockJS(webSockUrl)
console.log('sockJs :', sockJS);
const stompClient = Stomp.over(sockJS)
console.log('stompClient :', stompClient);
stompClient.connect({}, () => {
    console.log('스톰 클라이언트 최초 커넥트..? connected will be true');

    stompClient.subscribe('/topic/ko', (data) => {
        console.log('subscribe message :', data.body);
    })
})
/*
stompClient.subscribe('/private/user', (data) => {
    console.log('subscribe message :', data.body);
})*/


function askQuestion(query) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise(resolve => rl.question(query, ans => {
        rl.close();
        resolve(ans);
    }))
}


const ans = await askQuestion("Are you sure you want to deploy to PRODUCTION? ");

