const htmlREGEX = /<[a-z][\s\S]*>/i;

const ermahgerd = () => {

    console.log('Ermahgerd thers sert hers bern herked!!');

    var textElements = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'];
    var otherElements = ['a', 'div', 'td', 'button', 'dd', 'li', 'label', 'input', 'textarea', 'option'];
    var pageElements = [];

    textElements.forEach(function(ele) {
        var validElements = domElement(ele);
        pageElements.push.apply(pageElements, validElements);
    });

    otherElements.forEach(function(ele) {
        var validElements = domElement(ele);
        validElements.forEach(function(el) {
            if(!htmlREGEX.test(el.innerHTML)) {
                pageElements.push(el);
            }
        });
    });

    pageElements.forEach(function(element) {
        ermahgerdify(element);
    });
};

const ermahgerdify = (element) => {
    const regex1 = /ee|oo|aa|uu/g;
    const regex2 = /[aiou]/g;
    const regex3 = /EE|OO|AA|UU/g;
    const regex4 = /[AIOU]/g;
    const regex5 = / E| O| A| U/g;
    const derpText = element.innerText
        .replace(regex1, 'er')
        .replace(regex2, 'er')
        .replace(regex5, ' Er')
        .replace(regex3, 'ER')
        .replace(regex4, 'ER')
        .replace('y ', 'er ');

    element.innerText = derpText;
    element.setAttribute('aria-live', 'assertive');
    element.style.fontFamily = '"Comic Sans MS", cursive, sans-serif';
};

const domElement = (selector) => {
    return document.querySelectorAll(selector);
};

export default ermahgerd;
