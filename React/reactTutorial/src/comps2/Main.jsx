import React from 'react'
import blackImage from "../assets/Black_colour.jpg";
import hat from "../assets/hat.png";



function Main(){

    const [meme, setMeme] = React.useState({
        top: "Top Text",
        bottom: "Bottom Text",
        imgUrl: blackImage
    });
    const [allMemes, setAllMemes] = React.useState([]);

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))

    }, [])

    function newMeme(){
        const rand = Math.floor(Math.random() * allMemes.length)
        const newUrl = allMemes[rand].url
        setMeme(prevMeme => ({
            ...prevMeme,
            imgUrl: newUrl
        })
    )


    }
    function handleChange(event){
        const {value, name} = event.currentTarget; 
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }
        ))
    }

    return(
        <div>
            <div className="meme-controls">
                <label className="mainbody">
                    Top Text
                    <input type="text" placeholder="Me when" name="top" onChange={handleChange}/>
                </label>

                 <label className="mainbody">
                    Bottom Text
                    <input type="text" placeholder="I wake up" name="bottom" onChange={handleChange}/>
                </label>

                <button onClick={newMeme}>Make your Meme! </button>
            </div>
            <div>
                <img width="300" src={meme.imgUrl}/>
                <span className="mainbody" color="black">{meme.top}</span>
                <span className="mainbody" color="white">{meme.bottom}</span>
            </div>

        </div>
    )

}


export default Main