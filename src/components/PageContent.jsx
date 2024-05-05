import { useState } from 'react';
import './PageContent.css';

export const PageContent = (params) => {
    let [language, setLanguage] = useState("en");

    function onLanguageButtonPress(event, lang) {
        setLanguage(lang);
        event.stopPropagation();
    }

    function onClickNext(event) {
        params.onNext();
        event.stopPropagation();
    }

    function onClickPrevious(event) {
        params.onPrevious();
        event.stopPropagation();
    }

    function getLyrics() {
        switch (language) {
            case "de": // german
                return params.current.song["lyrics-de"]
            default: // english
                return params.current.song["lyrics-en"]
        }
    }

    function getCaretClasses(showVariable){
        if(showVariable){
            return "bi bi-caret-down-fill";
        }else{
            return "bi bi-caret-right-fill";
        }
    }

    return <>
        <div   >
            <div className={'eventHeader'}
                onClick={params.toggleVenueModal}
            >
                <span>Event: </span>
                <span className={"bolded"} >
                    {params.current.event.title} @ {params.event.venue.name}
                </span>
            </div>

            <div className={'songHeader'}  >
                <span onClick={params.toggleSidebar}>
                    <i className={getCaretClasses(params.showSidebar)} ></i>
                </span>
                <span className={"songTitle"}>
                    &nbsp;
                    <span style={{ fontSize: "large", fontWeight: "bold" }}>{params.current.song.title} </span>
                    <span style={{ fontSize: "small", fontWeight: "normal" }}>( {params.current.songSet.name} ) </span>

                    &nbsp;
                </span>
                <button
                    onClick={(event) => onClickPrevious(event)}
                    style={(params.isFirst) ? { backgroundColor: "lightgrey" } : {}}
                >
                    <span><i
                        className="bi bi-caret-left" // -fill
                    ></i></span>
                </button>
                &nbsp;
                <button
                    onClick={(event) => onClickNext(event)}
                    style={(params.isLast) ? { backgroundColor: "lightgrey" } : {}}
                >
                    <span><i
                        className="bi bi-caret-right" //-fill
                    // className="fa-solid fa-caret-right"
                    ></i></span>
                </button>
                &nbsp;
                <img src="/images/usa-flag.png"
                    className={(language === "en" ? "borderBlack" : "borderWhite")}
                    alt="usa flag"
                    onClick={(event) => onLanguageButtonPress(event, "en")}
                ></img>

                <img src="/images/germany-flag.png"
                    className={(language === "de" ? "borderBlack" : "borderWhite")}
                    alt="usa flag"
                    onClick={(event) => onLanguageButtonPress(event, "de")}
                ></img>
            </div>
        </div>

        <pre>{getLyrics() + " (c) Mark Pawlowski"}</pre>
        <div className={'pageEnd'}></div>
    </>
}