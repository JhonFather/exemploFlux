import {
    GET_IMAGE_DETAILS,
    GET_IMAGE_DETAILS_SUCCESS,
    GET_IMAGE_DETAILS_ERROR
} from './actionTypes';

import {
    GetImageDetail,
    GetImageDetailPayload,
    GetImageDetailSuccess,
    GetImageDetailSuccessPayload,
    GetImageDetailFailure,
    GetPictureListingFailurePayload
} from './IImageDetails';

export const getImageDetail = (payload: GetImageDetailPayload): GetImageDetail => ({
    type: GET_IMAGE_DETAILS,
    payload,
});

export const getImageDetailSuccess = (payload: GetImageDetailSuccessPayload): GetImageDetailSuccess => ({
    type: GET_IMAGE_DETAILS_SUCCESS,
    payload,
});

export const getImageDetailFailure = (payload: GetPictureListingFailurePayload): GetImageDetailFailure => ({
    type: GET_IMAGE_DETAILS_ERROR,
    payload,
});
