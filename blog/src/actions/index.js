import _ from 'lodash';
import api from '../api/api';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
	await dispatch(fetchPost());

	// const userIds = _.uniq(_.map(getState().posts, 'userId'));
	// userIds.forEach(id => dispatch(fetchUser(id)));

	_.chain(getState().posts)
		.map('userId')
		.uniq()
		.forEach(id => dispatch(fetchUser(id)))
		.value();
};

export const fetchPost = () => async dispatch => {
	const resp = await api.get('/posts');

	dispatch({
		type: 'FETCH_POSTS',
		payload: resp.data
	});
};

export const fetchUser = (id) => async dispatch => {
	const resp = await api.get(`/users/${id}`);

	dispatch({
		type: 'FETCH_USER',
		payload: resp.data
	});
};

// //lodash memoize approach
// export const fetchUser = id => dispatch => {
// 	_fetchUser(id, dispatch);
// };

// const _fetchUser = _.memoize(async (id, dispatch) => {
// 	const resp = await api.get(`/users/${id}`);

// 	dispatch({
// 		type: 'FETCH_USER',
// 		payload: resp.data
// 	});
// });