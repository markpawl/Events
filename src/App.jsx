import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import { event } from './songs/SongData';
import { SetList } from './components/SetList';
import { PageContent } from './components/PageContent';
import { Artist } from './components/Artist';
import { Venue } from './components/Venue';
import { Menu } from './components/Menu';

const Modal = (params) => {
    let modClasses = `${(params.show) ? 'show' : 'hide'} setlistmodal`;
    return (
        <div className={modClasses}
         >
            {params.children}
        </div>
    );
};

const VenueModal = (params) => {
    let modClasses = `venuemodal ${(params.show) ? 'show' : 'hide'}`;
    return (
        <div className={modClasses} >
            {params.children}
        </div>
    );
};

const ArtistModal = (params) => {
    let modClasses = `artistmodal ${(params.show) ? 'show' : 'hide'}`;
    return (
        <div className={modClasses} >
            {params.children}
        </div>
    );
};

const App = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    const [showArtist, setShowArtist] = useState(false);
    const [showVenue, setShowVenue] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const [locater, setLocater] = useState({ event: event, setNumber: 0, songNumber: 0 });

    function getCurrent(locater) {
        let event = locater.event;
        let currentSet = event.sets[locater.setNumber];
        let currentSong = currentSet.songs[locater.songNumber];
        let position = (locater.songNumber + 1) + "/" + currentSet.songs.length;
        return { "event": locater.event, "songSet": currentSet, "song": currentSong, "position": position };
    }

    function getIsFirst(){
        if(locater.setNumber === 0 && locater.songNumber === 0){
            return true;
        }else{
            return false;
        }
    }

    function getIsLast(){
        let lastSetIdx = event.sets.length - 1;
        let lastSongIdx = event.sets[lastSetIdx].songs.length -1;
        if(locater.setNumber === lastSetIdx && locater.songNumber === lastSongIdx){
            return true;
        }else{
            return false;
        }
    }

    let current = getCurrent(locater);
    let isFirst = getIsFirst();
    let isLast = getIsLast();

    function onNext() {
        /* locater = {event:event, setNumber:0, songNumber:0}
           current = {"event":locater.event, "songSet": currentSet, "song": currentSong}; */
        let songCountForSet = current.songSet.songs.length;
        let newSongNumber = locater.songNumber + 1;

        if (newSongNumber < songCountForSet) {
            setLocater({ event: locater.event, setNumber: locater.setNumber, songNumber: newSongNumber });
            return;
        }
        let newSetNumber = locater.setNumber + 1;
        if (newSetNumber < locater.event.sets.length) {
            setLocater({ event: locater.event, setNumber: newSetNumber, songNumber: 0 });
            return;
        }
    }

    function onPrevious() {
        /* locater = {event:event, setNumber:0, songNumber:0}
           current = {"event":locater.event, "songSet": currentSet, "song": currentSong}; */
        let newSongNumber = locater.songNumber - 1;

        if (newSongNumber >= 0) {
            setLocater({ event: locater.event, setNumber: locater.setNumber, songNumber: newSongNumber });
            return;
        }
        let newSetNumber = locater.setNumber - 1;
        if (newSetNumber >= 0) {
            let newSongNumber = locater.event.sets[newSetNumber].songs.length
            setLocater({ event: locater.event, setNumber: newSetNumber, songNumber: (newSongNumber - 1) });
            return;
        }
    }

    const toggleMenu = (event) => { 
        if(showMenu){
            setShowMenu(false);
        }else{
            setShowArtist(false);
            setShowVenue(false);
            setShowSidebar(false);
            setShowMenu(true);
        }
        event.stopPropagation();
    }

    const toggleSidebar = (event) => { 
        if(showSidebar){
            setShowSidebar(false);
        }else{
            setShowArtist(false);
            setShowVenue(false);
            setShowSidebar(true);
            setShowMenu(false);
        }
        event.stopPropagation();
    }

    const toggleArtistModal = (event) => { 
        if(showArtist){
            setShowArtist(false);
        }else{
            setShowArtist(true);
            setShowVenue(false);
            setShowSidebar(false);
            setShowMenu(false);
        }
        event.stopPropagation();         
    }    

    const toggleVenueModal = (event) => { 
        if(showVenue){
            setShowVenue(false);
        }else{
            setShowArtist(false);
            setShowVenue(true);
            setShowSidebar(false);
            setShowMenu(false);
        }
        event.stopPropagation();        
    } 


    return (
        <div><header 
                className={"appHeader"}
                onClick={(event) => toggleArtistModal(event)}
            >
            <div>
                <button onClick={(event) => toggleMenu(event)}>
                    {/* <span><i className="bi bi-list"></i></span> */}
                    <span><i className="icon-list"></i></span>
                </button>
            </div>
            <div  className={'artistTitle'}>Artist: {event.artist.name}</div>
        </header>
            <Menu 
              show={showMenu} 
              closeMenu={toggleMenu}
            />
            <Modal
                show={showSidebar}
                >
                <div className={'bordered'}>
                    <SetList
                        setLocater={setLocater}
                        locater={locater}
                        closeModal={toggleSidebar}
                    />
                </div>
            </Modal>
            <ArtistModal
                show={showArtist}
                >
                <div className={'bordered'}>
                    <Artist
                        closeModal={toggleArtistModal}
                        artist={event.artist}
                    />
                </div>
            </ArtistModal> 
            <VenueModal
                show={showVenue}
                >
                <div className={'bordered'}>
                    <Venue
                        closeModal={toggleVenueModal}
                        venue={event.venue}
                    />
                </div>
            </VenueModal>                       
            <PageContent
                showSidebar={showSidebar}
                showVenue={showVenue}
                onNext={onNext}
                isFirst = {isFirst}
                isLast = {isLast}
                onPrevious={onPrevious}
                toggleSidebar={toggleSidebar}
                toggleVenueModal={toggleVenueModal}
                current={getCurrent(locater)}
                event={event}
            />
        </div>
    );
};

export default App;
