import sophia from "./sophia";
import gonnaDo from "./gonnaDo";
import bigPockets from "./bigPockets";
import specialWay from "./specialWay";
import standAndFight from "./standAndFight";
import believe from "./believe";
import gertieMyGal from "./gertieMyGal";
import shine from "./shine";
import together from "./together";
import backAgain from "./backAgain";
import rightNow from "./rightNow";
import happy from "./happy";
import mosey from "./mosey";
import undertow from "./undertow";
import closerToYou from "./closerToYou";
import getThatRight from "./getThatRight";
import daysGoBy from "./daysGoBy";
import nowhere from "./nowhere";
import loveIsAllAround from "./loveIsAllAround";
import goneToVegas from "./goneToVegas";
import strong from "./strong";
import slow from "./slow";
import bittersweet from "./bittersweet";
import someoneLikeYou from "./someoneLikeYou";
import goodbye from "./goodbye";
import shesComingHome from "./shesComingHome";
import bigBelly from "./bigBelly";

import orSoWeThought from './orSoWeThought';
import broken from './broken';
import freeFallin from './freeFallin';
import theWeight from './theWeight';
import brownEyedGirl from './brownEyedGirl';

let emptySong = { "title": "na", "lyrics-en": "na", "lyrics-de": "na" };

let songsA = [gonnaDo, specialWay, orSoWeThought, standAndFight, sophia, believe, mosey, bigPockets,together]
let songsB = [shine, undertow, rightNow, broken, happy, closerToYou, daysGoBy, getThatRight, loveIsAllAround]
let songsC = [goodbye, slow, daysGoBy, shesComingHome, goneToVegas,  bittersweet, backAgain, bigBelly, someoneLikeYou]
let songsD = [loveIsAllAround, nowhere, together, freeFallin , theWeight, brownEyedGirl ];

let beachA = [orSoWeThought, believe, together, rightNow, broken, happy, closerToYou, nowhere];
let beachB = [shine, undertow, goodbye, slow, daysGoBy, goneToVegas,  bittersweet, loveIsAllAround ];

export const setLists = {
    "songsA": songsA,
    "songsB": songsB,
    "songsC": songsC,
    "songsD": songsD,
    "beachA": beachA,
    "beachB": beachB
}



// export let event = {
//     "title": "Kulturnacht Wedel", 
//     "venue": {
//         "name": "Reepschlägerhaus",
//         "description": "Historic location in the town of Wedel",
//         "location": "Wedel, Germany",
//         "image": "images/reepschlagerhaus-01-300.jpg",
//         "links": {
//             "website": "https://reepschlaegerhaus.de/",
//             "email": "Info@reepschlaegerhaus.de"
//         }
//     },    
//     "artist": {
//         "name": "Mark Pawlowski",
//         "description": "Singer songwriter from the USA, living in Hamburg Germany",
//         "biography": biography,
//         "image": "images/markpawl-01-300.jpg",
//         "links": {
//             "website": "http://www.markpawl.com",
//             "bandcamp": "https://markpaw.bandcamp.com/",
//             "email": "markpawl.music@gmail.com",
//             "videos": "https://www.markpawl.com/videos"
//         }
//     },
//     "sets": [
//         { "name": "A", "time":"5:30-6:00", "songs": songsA },
//         { "name": "B", "time":"6:30-7:00", "songs": songsB },
//         { "name": "C", "time":"7:30-8:00", "songs": songsC },
//         { "name": "E", "time":"Other...", "songs": songsE },
//     ]
// }
