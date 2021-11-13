import { Injectable } from '@angular/core';
import {
  faPager,
  faLightbulb,
  faPodcast,
  faMicrophoneAlt,
  faStream,
  faHeadphones,
  faFileSignature,
  faSignOutAlt,
  faUsers} from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class IconsService {

  faPager = faPager;
  faFileSignature = faFileSignature;
  faLightbulb = faLightbulb;
  faUsers = faUsers;
  faPodcast = faPodcast;
  faMicrophoneAlt = faMicrophoneAlt;
  faheadphones = faHeadphones;
  faStream = faStream;
  faSignOutAlt = faSignOutAlt;
}
