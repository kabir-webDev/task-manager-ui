import {Injectable} from '@angular/core';
import * as SockJS from "sockjs-client";
import {environment} from "../../../environments/environment";
import * as Stomp from "stompjs";
import {TokenService} from "./token.service";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WsService {
  stompClient: any;
  private liveLog = new BehaviorSubject('');
  getCurrentLiveLog = this.liveLog.asObservable();
  constructor(private tokenService: TokenService) {

  }

  changeCurrentLiveLog(log: any) {
    this.liveLog.next(log);
  }

  connectToSocket(topic: string, clusterName: string) {
    const ws = new SockJS(environment.v1WsEndPoint);
    this.stompClient = Stomp.over(ws);
    this.stompClient.debug = null;
    const token = this.tokenService.getAccessToken();
    this.stompClient.connect({'x-auth-token': token?.replace('"', '')}, () => {
        console.log('Connected to websocket');
        return this.subscribeToApplicationWebSocketTopic(topic, clusterName);;
      },
      (error: any) => {
        console.log(error);
        return null;
      });
    return null;
  }

  subscribeToApplicationWebSocketTopic(topic: string, clusterName: string) {
    let logSubscription = null;
    if(this.stompClient) {
      logSubscription = this.stompClient.subscribe('/topic/' + topic + '/' + clusterName, (message: any) => {
        // console.log(message?.body, 'MESSAGE BODY')
        this.changeCurrentLiveLog(message.body);
      });
    }
    return logSubscription;
  }
}
