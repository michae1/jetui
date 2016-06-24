export default function(state, action) {
  switch(action.type) {
	  case 'TEXT_ENTERED':
	    return [
	    	{textKey: 'Kiev', valueKey: 'IEV'}
    	];
	  }

  // return state;	
  return [
    { textKey: 'Kiev', valueKey: "IEV" },
    { textKey: 'London', valueKey: "LON" },
    { textKey: 'Dallas', valueKey: "DFW" },
  ];
}