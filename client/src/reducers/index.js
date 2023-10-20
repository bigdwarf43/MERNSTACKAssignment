import { combineReducers } from 'redux';
import {logger} from 'redux-logger'
import posts from './posts';

export const reducers = combineReducers({ posts });