const audio = ["audio-one", "audio-two", "audio-three", "audio-four"];



audio.forEach(sound => {
    let button = document.createElement("button");
    button.textContent = sound;
    button.classList.add("button")
    $(button).click(() => {
        stopAudio();
        $(`#${sound}`).get(0).play();
    })
    $(".container").append(button)

})


const stopAudio = () => {
    audio.forEach(sound => {
        $(`#${sound}`).get(0).pause();
        $(`#${sound}`).get(0).currentTime = 0;
        
    })
}