const track_ids = [
    "1675922787",
    "2087258360",
    "423751103",
    "4234912493",
    "1591813530",
    "4005684343",
    "2983317728",
    "1311103988",
    "3422284729",
    "1160276209",
    "2833911877",
    "2410486594",
    "4160852984",
    "1451248788",
    "4115735102",
    "1349544295",
    "611893349",
    "1743630263",
    "4018925045",
    "1026676309",
    "4243195159",
    "2462051902",
    "2185125962",
    "2424140006",
    "1171638432",
    "2664100073",
    "2466602878",
    "157307401",
    "868078178",
    "547330087",
    "3446886494",
    "634326244",
    "4223562908",
    "2098996943",
    "2791478820",
    "2723208997",
    "1344324807"
], collectionData = {
    "Troubled Cosmos": 30,
    "POPULAR KOREAN MUSIC BOY COLLECTION": 7
};

let gallery;

window.addEventListener('load', () => {
    let player_container = document.getElementById("bandcamp-container");
    gallery = document.querySelector("#gallery");
    player_container.innerHTML = `<iframe id="bandcamp-player" style="border: 0; height: 42px;"
                    src="https://bandcamp.com/EmbeddedPlayer/album=4103826588/size=small/bgcol=181a1b/linkcol=056cc4/track=${track_ids[Math.floor(Math.random() * track_ids.length)]}/transparent=true/"
                    seamless><a href="https://psycholonials.bandcamp.com/album/psycholonials">Psycholonials by
                        psycholonials</a></iframe>`;
    setTimeout(() => {
        document.getElementById("bandcamp-player").contentWindow.postMessage(() => {
            document.querySelector("#big_play_button").click()
        }, "https://toemah.github.io");
    }, 1000);
    btn = document.querySelectorAll(".buttons").forEach(e => {
        e.addEventListener("click", () => imgLoader(e.id, collectionData[e.id]));
    })
})

let imgLoader = (str, n) => {
    gallery.innerHTML = "";
    for (let i = 0; i < n; i++) {
        gallery.innerHTML += `<img src="../media/AndrewHussiePublicDomainOCs/compressed/${str}/${i+1}.webp">`
    }
}