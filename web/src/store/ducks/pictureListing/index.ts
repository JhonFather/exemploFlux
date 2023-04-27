import {
    GET_PICTURE_LISTING,
    GET_PICTURE_LISTING_SUCCESS,
    GET_PICTURE_LISTING_ERROR,
} from './actionTypes';

import { PictureListingState, PictureListingActions } from './IPictureListing';

const initialState: PictureListingState = {
    loading: false,
    page: 1,
    data: [],
    error: null,
};

export default (
    state = initialState,
    action: PictureListingActions
): PictureListingState => {
    switch (action.type) {
        case GET_PICTURE_LISTING:
            return {
                ...state,
                loading: true,
                page: action.payload.page + 1,
            };
        case GET_PICTURE_LISTING_SUCCESS:
            return {
                ...state,
                loading: false,
                data: state.data.concat(action.payload.data),
                error: null,
            };
        case GET_PICTURE_LISTING_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
            };
        default:
            return {
                ...state,
            };
    }
};
