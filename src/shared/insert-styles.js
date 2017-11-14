import styles from '../styles/prnx';

const insertStyles = () => {
    const head = document.head || document.getElementsByTagName('head')[0];
    const style = document.createElement('style');

    style.type = 'text/css';
    if (style.styleSheet){
        style.styleSheet.cssText = styles;
    } else {
        style.appendChild(document.createTextNode(styles));
    }

    head.appendChild(style);

};

export default insertStyles;
