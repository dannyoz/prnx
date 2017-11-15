import charlie from './components/charlie';
import ermahgerd from './components/ermahgerd';
import fullEnglish from './components/fullenglish';
import placeholder from './components/placeholder';
import randomiser from './components/randomiser';
import insertStyles from './shared/insert-styles';

insertStyles();

const prnxMethods = {
 	charlie,
	ermahgerd,
	fullEnglish,
	placeholder,
}

Object.keys(prnxMethods).forEach((method) => {
	document[method] = prnxMethods[method];
});

// RANDOMISER !!!!!
// randomiser(prnxMethods);
