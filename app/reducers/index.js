import { combineReducers } from 'redux';

import CategoriesReducer from './CategoriesReducer';
import ContactReducer from './ContactReducer';
import TimelineReducer from './TimelineReducer';

export default combineReducers({
    categories: CategoriesReducer,
    contact: ContactReducer,
    timeline: TimelineReducer
});