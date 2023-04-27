import {
    GET_IMAGE_DETAILS,
    GET_IMAGE_DETAILS_SUCCESS,
    GET_IMAGE_DETAILS_ERROR,
} from './actionTypes';

import {
    ImageDetailState,
    ImageDetailsActions,
    IImageDetail,
} from './IImageDetails';

const initialState: ImageDetailState = {
    loading: false,
    data: {} as IImageDetail,
    error: null,
};

export default (
    state = initialState,
    action: ImageDetailsActions
): ImageDetailState => {
    switch (action.type) {
        case GET_IMAGE_DETAILS:
            return {
                ...state,
                loading: true,
            };
        case GET_IMAGE_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload.data,
                error: null,
            };
        case GET_IMAGE_DETAILS_ERROR:
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
