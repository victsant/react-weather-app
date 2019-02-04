export const getLocalStorage = () => {
	try {
		const state = localStorage.storeState;
		if(state === null){
			return undefined;
		}
		return JSON.parse(state);
	}catch(err){
		return undefined;
	}
};

export const saveStore = (locations) => {
	try{
		if(locations.length){
			const state = JSON.stringify(locations);
			localStorage.storeState = state;
		}else{
			localStorage.storeState = undefined;
		}
	}catch(err){
		console.log(err);
	}
};
