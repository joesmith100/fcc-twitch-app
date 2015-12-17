import { SET_ISFETCHING } from '../actions/actionTypes';

export default (state = false, action) => {
	switch(action.type) {
		case SET_ISFETCHING:
			return action.fetching;
		default:
			return state;
	}
};
