import debounce from 'debounce';
import randomRange from '../shared/random-range';

let parpcount = 0;

const flatulence = () => {
    console.log('Thats the last time I have Mexican food!!!');

    document.onmousemove = debounce(() => {
        parp();
    }, 60);
};

const parp = () => {
    const parpID = `fart-${parpcount}`;
    const parpIndex = randomRange(1, 8);
    const parpUrl = `https://www.soundjay.com/human/fart-0${parpIndex}.mp3`;
    const audio = document.createElement('audio');
    const source = document.createElement('source');
    audio.setAttribute('id', parpID);
    audio.setAttribute('autoplay', 'true');
    source.setAttribute('type', 'audio/mpeg');
    source.setAttribute('src', parpUrl);
    audio.appendChild(source);
    document.body.appendChild(audio);

    setTimeout(() => {
        const element = document.getElementById(parpID);
        element.parentNode.removeChild(element);
    }, 5000);

    parpcount ++;
};

export default flatulence;
