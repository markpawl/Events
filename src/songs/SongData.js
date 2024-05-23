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
import biography from "./biography";
import orSoWeThought from './orSoWeThought';
// import somethin from './somethin';

export let emptySong = { "title": "na", "lyrics-en": "na", "lyrics-de": "na" };

let songsA = [gonnaDo, specialWay, standAndFight, sophia, believe, bigPockets, mosey, together]
let songsB = [shine, rightNow, happy, undertow, closerToYou, daysGoBy, nowhere, loveIsAllAround]
let songsC = [goodbye, goneToVegas, slow, bittersweet, someoneLikeYou, daysGoBy,shesComingHome, bigBelly]
let songsE = [orSoWeThought, getThatRight, strong , gertieMyGal, backAgain];

export let event = {
    "title": "Kulturnacht Wedel", 
    "venue": {
        "name": "Reepschlägerhaus",
        "description": "Historic location in the town of Wedel",
        "location": biography,
        "image": "images/reepschlagerhaus-01-300.jpg",
        "links": {
            "website": "https://reepschlaegerhaus.de/",
            "email": "Info@reepschlaegerhaus.de"
        }
    },    
    "artist": {
        "name": "Mark Pawlowski",
        "description": "Singer songwriter from the USA, living in Hamburg Germany",
        "biography": biography,
        "image": "images/markpawl-01-300.jpg",
        "links": {
            "website": "http://www.markpawl.com",
            "bandcamp": "https://markpaw.bandcamp.com/",
            "email": "markpawl.music@gmail.com",
            "videos": "https://www.markpawl.com/videos"
        }
    },
    "sets": [
        { "name": "A", "time":"5:30-6:00", "songs": songsA },
        { "name": "B", "time":"6:30-7:00", "songs": songsB },
        { "name": "C", "time":"7:30-8:00", "songs": songsC },
        { "name": "E", "time":"Other...", "songs": songsE },
    ]
}
