export default function reducer(state = {
  locations: [],
	error: false
}, action) {
  switch (action.type) {
		case "ADD_LOCATION_STORAGE":
    {
      return {
        ...state,
        locations: action.payload
      };
      break;
    }
		case "ADD_LOCATION":
    {
      return {
        ...state,
        locations: [
					...state.locations,
					action.payload
				]
      };
      break;
    }
		case "DELETE_LOCATION":
		{
			return {
				...state,
				locations: [
					...state.locations.slice(0, action.payload),
					...state.locations.slice(action.payload + 1)
				]
			};
			break;
		}
		case "ERROR_FORECAST": {
			return {
				...state,
				error: true
			}
		}
    default:
      return state;
  }
}
