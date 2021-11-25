import {
    createPromiseThunk,
    handleAsyncActions,
} from '../lib/asyncUtils';
import { getDB, setGetDB } from '../service/dbUtill';



const DATA_GET_SET = "DATA_GET_SET"
const DATA_GET_SET_SUCCESS = "DATA_GET_SET_SUCCESS"
const DATA_GET_SET_ERROR = "DATA_GET_SET_ERROR"

export const setGetEventData = createPromiseThunk(DATA_GET_SET, setGetDB)

const DATA_GET = "DATA_GET"
const DATA_GET_SUCCESS = "DATA_GET_SUCCESS"
const DATA_GET_ERROR = "DATA_GET_ERROR"

export const getEventData = createPromiseThunk(DATA_GET, getDB)

const initialState = {
    eventData: {},
};

export default function cardData(state = initialState, action) {
    switch (action.type) {
        case DATA_GET_SET:
        case DATA_GET_SET_SUCCESS:
        case DATA_GET_SET_ERROR:
            return handleAsyncActions(DATA_GET_SET, 'eventData', true)(state, action);
        case DATA_GET:
        case DATA_GET_SUCCESS:
        case DATA_GET_ERROR:
            return handleAsyncActions(DATA_GET, 'eventData', true)(state, action);
        default:
            return state;
    }
}