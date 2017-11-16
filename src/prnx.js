import charlie from './components/charlie';
import ermahgerd from './components/ermahgerd';
import flatulence from './components/flatulence';
import fullEnglish from './components/fullenglish';
import placeholder from './components/placeholder';
import randomiser from './components/randomiser';

import insertStyles from './shared/insert-styles';
import draggable from './shared/draggable';

insertStyles();
flatulence();
// draggable('img');

const prnxMethods = {
 	charlie,
    ermahgerd,
    flatulence,
	fullEnglish,
	placeholder,
}

Object.keys(prnxMethods).forEach((method) => {
	document[method] = prnxMethods[method];
});

// RANDOMISER !!!!!
// randomiser(prnxMethods);
