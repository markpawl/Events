import './SetList.css';

export const SetList = (params) => {

    let selectedSet = params.locater.setNumber;
    let selectedSong = params.locater.songNumber;

    function onSetClick(index){
        if(index !== selectedSet){
            params.setLocater({event:params.locater.event, setNumber:index, songNumber:0});
        }
    }

    function onSongClick(event, index) {
        params.setLocater({event:params.locater.event, setNumber:selectedSet, songNumber:index});
        params.closeModal(event);
    } 

    function Set(params) {

        return (
            <div >
                <div className={(selectedSet === params.setIndex)?'setTitle setSelected':'setTitle'} 
                    onClick={()=>onSetClick(params.setIndex)}
                >
                    {params.set.name} {params.set.time}
                </div>
                <div className={(selectedSet === params.setIndex)?"show":"hide"} >
                <Songs 
                    {...params}
                    songs={params.set.songs} 
                />
                </div>
            </div>
        );
    }

    function Sets(params) {
        return (<div>{
            params.locater.event.sets.map((set, index) => {
                return <Set {...params} key={index} setIndex={index} set={set} />
            })
        }</div>
        );
    }

    function Songs(params) {
            
        return (<ul className='songIndent'>{
            params.songs.map((item, index) => {
                return <li
                    key={index}
                    onClick={(event) => onSongClick(event, index)}
                    className={(index === selectedSong) ? 'bolded' : ''}
                >{item.title}</li>
            })
        }</ul>
        );
    }

    return (
        <>
        <div className='eventTitle' >x{params.locater.event.title}</div>
        <div>
            <Sets {...params} />
        </div>
        </>
    )
}