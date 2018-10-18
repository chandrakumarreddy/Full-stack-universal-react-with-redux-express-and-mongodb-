Immutability of state :-

    state in redux is immutable.They are so that we can have history of different updated state

Pure Functions:

    definition: Pure functions return ssmae result of same input is passed.

    Properties of Pure functions:

    		1) They depends only on arguments passed to it.
    		2) They return same result if same argumnents are passed.
    		3) They do not have any side effects.

    Examples :-

    	example-01:-

    	const fn1=(a)=> return a*a;

    	fn1(10); // This is a pure function because it returns same result if same argument is passed

    	example-02:-

    	let b=20;
    	const fn2=(a)=> return a*b;

    	fn2(10); // This is not a pure functions as it depends on variable which is not function scope
