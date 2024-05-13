import "./Menu.css";

export function Menu(params) {
    let classes = `menumodal menu ${(params.show) ? 'show' : 'hide'}`;

    let preText = 
`This app contains:
- Artist Info
- Event Info
- Set Lists
- Song Lyrics
- Contact Info
`;
    
    return (<div className={classes} >
        <button onClick={(event) => params.closeMenu(event)}>
            <span><i className="icon-x"></i></span>
        </button>
        <header className={'menuHeader'}>
            {/* <img src="./images/reepschlagerhaus-01-300.jpg" alt={'misc image'} /> */}
            <div>
                <h1>Event App</h1>
            </div>
        </header>
        <div className={'menuInfo'}>
                <div><pre className={'content'}>{preText}</pre></div>
                <span><a href={'http://markpawl.com'} target="_blank" rel="noreferrer" >http://markpawl.com</a></span>
                <span><a href={`mailto://markpawl.music@gmail.com`} target="_blank" rel="noreferrer">markpawl.music@gmail.com</a></span>
            </div>
    </div>
    );
}