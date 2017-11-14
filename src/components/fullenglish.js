import randomRange from '../shared/random-range';
import message from '../shared/message';

const fullEnglish = (val) => {
    const count = (val) ? val : randomRange(5, 9);
    const delay = randomRange(50, 900);

    message(`Full english with ${count} ingredients!!!`);

    for (var i = 0; i < count; i++) {
        const ing = ingredient();
        setTimeout(() => {
            serve(ing);
        }, delay * i);
    };
};

const ingredients = [
    'https://upload.wikimedia.org/wikipedia/commons/3/31/Made20bacon.png',
    'http://static.tumblr.com/efcd314e9fe24722553f594cffa61cfd/g2dhfnu/ArYmlvd7a/tumblr_static_bacon.png',
    'http://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Bacon-PNG-Transparent-Image-1-500x500.png',
    'http://pngimg.com/uploads/egg/egg_PNG45.png',
    'http://pngimg.com/uploads/egg/egg_PNG49.png',
    'http://www.oneunderlime.co/images/sausages.png',
    'http://traveler.rtx.travel/wp-content/uploads/2013/10/Breakfast-Sausage_web.png',
    'http://www.carbonfinancial.co.uk/wp-content/uploads/2016/06/Baked-Beans1.png',
    'https://www.maalox.co.uk/-/media/EMS/Conditions/Consumer%20Healthcare/Brands/Maalox/Maalox-UK/quiz-images/baked-beans%20png.png?la=en-GB&hash=2FD6B9F028A88704F0B269B00CCEAF61D1615E99',
    'http://www.pngpix.com/wp-content/uploads/2016/08/PNGPIX-COM-French-Fries-PNG-Transparent-Image.png',
    'http://pngimg.com/uploads/fries/fries_PNG13.png',
    'http://www.mcdonalds.ca/content/dam/Canada/en/product_pages/breakfast/hero/hero_hash-browns.png',
];

const ingredient = () => {
    const index = Math.floor(Math.random() * ingredients.length);
    return ingredients[index]; 
};

const serve = (ing) => {
    const size = randomRange(300, 550);
    const pos = position(size);
    const image = document.createElement("img");
    image.src = ing;
    image.style.position = 'fixed';
    image.style.maxWidth = `${size}px`;
    image.style.maxHeight = `${size}px`;
    image.style.zIndex = '999999';
    image.style.top = `${pos.y}px`;
    image.style.left = `${pos.x}px`;
    image.className = 'slide-in-up';
    document.body.appendChild(image);
};

const position = (size) => {
    const width = window.innerWidth - size;
    const height = window.innerHeight - size;
    const randomX = randomRange(0, width);
    const randomY = randomRange(0, height);
    return {
        x: randomX,
        y: randomY,
    };
};

export default fullEnglish;
