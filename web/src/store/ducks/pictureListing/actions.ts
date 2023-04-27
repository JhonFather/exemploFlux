import {
    GET_PICTURE_LISTING,
    GET_PICTURE_LISTING_SUCCESS,
    GET_PICTURE_LISTING_ERROR,
} from './actionTypes';

import {
    GetPictureListing,
    GetPictureListingPayload,
    GetPictureListingSuccess,
    GetPictureListingSuccessPayload,
    GetPictureListingFailure,
    GetPictureListingFailurePayload,
} from './IPictureListing';

export const getPictureListing = (
    payload: GetPictureListingPayload
): GetPictureListing => ({
    type: GET_PICTURE_LISTING,
    payload,
});

export const getPictureListingSuccess = (
    payload: GetPictureListingSuccessPayload
): GetPictureListingSuccess => ({
    type: GET_PICTURE_LISTING_SUCCESS,
    payload,
});

export const getPictureListinFailure = (
    payload: GetPictureListingFailurePayload
): GetPictureListingFailure => ({
    type: GET_PICTURE_LISTING_ERROR,
    payload,
});
