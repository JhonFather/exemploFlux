import {
    GET_IMAGE_DETAILS,
    GET_IMAGE_DETAILS_SUCCESS,
    GET_IMAGE_DETAILS_ERROR,
} from './actionTypes';

export type IImageDetail = {
    id: string;
    author: string;
    width: number;
    height: number;
    url: string;
    download_url: string;
};

export interface ImageDetailState {
    loading: boolean;
    data: IImageDetail;
    error?: string | null | unknown;
}

export interface GetImageDetailPayload {
    id?: string;
}

export interface GetImageDetailSuccessPayload {
    data: IImageDetail;
}

export interface GetPictureListingFailurePayload {
    error?: string | null | unknown;
}

export interface GetImageDetail {
    type: typeof GET_IMAGE_DETAILS;
    payload: GetImageDetailPayload;
}
export interface GetImageDetailSuccess {
    type: typeof GET_IMAGE_DETAILS_SUCCESS;
    payload: GetImageDetailSuccessPayload;
}
export interface GetImageDetailFailure {
    type: typeof GET_IMAGE_DETAILS_ERROR;
    payload: GetPictureListingFailurePayload;
}

export type ImageDetailsActions =
    | GetImageDetail
    | GetImageDetailSuccess
    | GetImageDetailFailure;
