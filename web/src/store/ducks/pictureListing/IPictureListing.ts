import {
    GET_PICTURE_LISTING,
    GET_PICTURE_LISTING_SUCCESS,
    GET_PICTURE_LISTING_ERROR,
} from './actionTypes';

export type IPicture = {
    id: string;
    author: string;
    width: number;
    height: number;
    url: string;
    download_url: string;
};

export interface PictureListingState {
    loading: boolean;
    page: number;
    data: IPicture[];
    error?: string | null | unknown;
}

export interface GetPictureListingPayload {
    page: number;
    limit: number;
}
export interface GetPictureListingSuccessPayload {
    data: IPicture[];
}

export interface GetPictureListingFailurePayload {
    error?: string | null | unknown;
}

export interface GetPictureListing {
    type: typeof GET_PICTURE_LISTING;
    payload: GetPictureListingPayload;
}

export type GetPictureListingSuccess = {
    type: typeof GET_PICTURE_LISTING_SUCCESS;
    payload: GetPictureListingSuccessPayload;
};

export type GetPictureListingFailure = {
    type: typeof GET_PICTURE_LISTING_ERROR;
    payload: GetPictureListingFailurePayload;
};

export type PictureListingActions =
    | GetPictureListing
    | GetPictureListingSuccess
    | GetPictureListingFailure;
