const animes = [
    {   id: 1,
        name:"Naruto", 
        image: "https://i.pinimg.com/474x/fc/69/d5/fc69d5c502e56fd6ed4e400fc87ba29f.jpg",
        info: "https://en.wikipedia.org/wiki/Naruto",
        telegram_channel: "https://t.me/xDdJgD9qtkYwNDdl"
    },
    
    {   id:2,
        name:"Bleach",
        image:"https://i.pinimg.com/736x/a7/1e/70/a71e70eac331e0da27392509bfceffa1.jpg",
        info: "https://en.wikipedia.org/wiki/Bleach",
        telegram_channel: "https://t.me/bleach_anime_1080p"
    },

    {   id:3,
        name:"One-Piece",
        image:"https://i.pinimg.com/736x/5a/e1/8a/5ae18af98ec476fa6701081726a29485.jpg",
        info: "https://en.wikipedia.org/wiki/One_Piece",
        telegram_channel: "https://t.me/One_Piece_anime_Series_0"
        
    },

    {   id:4,
        name:"Hunter X Hunter",
        image:"https://i.pinimg.com/736x/8c/8c/f8/8c8cf82e29b0dac52512fabeca23e2c6.jpg",
        info: "https://en.wikipedia.org/wiki/Hunter_%C3%97_Hunter",
        telegram_channel: "https://t.me/hunterxhunter0"
    }
]

//render animes

function renderAnimes(animes, animeList){
    const container = document.getElementById(animeList);
    container.innerHTML="";
    animes.forEach(anime =>{
        const animeDiv = document.createElement("div")
        animeDiv.classList.add("anime-card");
        animeDiv.innerHTML=`
            <img src="${anime.image}"/>
            <h2>${anime.name}</h2>
            <a href="${anime.info}"  target="_blank">more info</a>
           <a href="#" onclick="confirmRedirect('${anime.telegram_channel}')"
           class="download-link">Telegram link</a>
        `
    container.appendChild(animeDiv);
    })
}

function confirmRedirect(link){
    const userconfirmed = confirm("⚠️ Warning: You are about to leave this site and visit an external link. We do not own or control the content there. Do you wish to continue?")
    if(userconfirmed){
        window.open(link, "_blank");
    }
}

if(document.getElementById("animeList"))renderAnimes(animes, "animeList")

function searchAnime(query){
    const filterAnime = animes.filter(anime=>
        anime.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    )

    renderAnimes(filterAnime, "animeList")
}

//add event listener to button
document.getElementById("searchButton")?.addEventListener("click",()=>{
    const query = document.getElementById("animeSearch").value 
    searchAnime(query)
})
