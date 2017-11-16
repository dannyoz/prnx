const draggable = (selector) => {
    console.log('Draggable elements added: ', selector, '!!!!');

    const dElements = document.querySelectorAll(selector);
    dElements.forEach((element) => {
        handleDrag(element);
    });
};

const handleDrag = (element) => {
    element.setAttribute('draggable', 'true');
    
    element.addEventListener('drag', (event) => {
        element.style.position = 'absolute';
        element.style.zIndex = '999999';
        const width = event.srcElement.width;
        const height = event.srcElement.height;
        const posX = event.clientX - (width/2);
        const posY = event.clientY - (height/2);
        position(element, posX, posY);
    });

    element.addEventListener('dragstart', (event) => {
        console.log(event);
    });

};

const position = (element, x, y) => {
    console.log(element,x,y);
    if (x > 0 && y > 0) {
        element.style.top = `${y}px`;
        element.style.left = `${x}px`;
        element.style.right = 'auto';
        element.style.bottom = 'auto';
    }
};

export default draggable;
