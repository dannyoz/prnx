import charlie from './components/charlie';
import ermahgerd from './components/ermahgerd';
import flatulence from './components/flatulence';
import fullEnglish from './components/fullenglish';
import horror from './components/horror';
import placeholder from './components/placeholder';
import randomiser from './components/randomiser';

import insertStyles from './shared/insert-styles';
import draggable from './shared/draggable';

const prnxMethods = {
 	charlie,
    ermahgerd,
    flatulence,
	fullEnglish,
	horror,
	placeholder,
};

Object.keys(prnxMethods).forEach((method) => {
	document[method] = prnxMethods[method];
});

insertStyles();
// draggable('img');

// RANDOMISER !!!!!
// randomiser(prnxMethods);
