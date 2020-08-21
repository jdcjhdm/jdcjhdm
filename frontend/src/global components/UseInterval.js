import React, { useState, useEffect, useRef } from 'react';

let UseInterval = (callback, delay) => {
	let savedCallback = useRef();

	useEffect(() => {
		savedCallback.current = callback;
	}, [callback]);
};
