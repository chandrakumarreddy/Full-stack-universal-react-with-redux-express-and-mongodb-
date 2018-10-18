Three principles of REDUX :-

    1) Single source of truth

    		Entire state of application is maintained in single state tree in redux store

    2) State is READ-ONLY

            Only way to update the state is by dispatching an application

    3) reducers must be pure functions

Operations that are expected to perform on arrays :-

    DO'S:-

        1) concat
        2) slice
    	3) spread operation

    DON'TS:-

    	1) Splice
    	2) push	and pop

Operations that are expected to perform on objects :-

    DO'S:-

    	1) Object.assign
