import { put, call, SagaReturnType, delay } from 'redux-saga/effects';
import api from '../../../services/api';
import {
    getImageDetailSuccess,
    getImageDetailFailure,
} from '../../ducks/imageDetails/actions';

export function* imageDetailsSaga(action: any) {
    try {
        const { id } = action.payload;

        const getPictures = () => {
            return api.get(`/id/${id}/info`);
        };

        const response: SagaReturnType<typeof getPictures> = yield call(
            getPictures
        );

        yield delay(1000);

        yield put(getImageDetailSuccess(response));
    } catch (error) {
        yield put(
            getImageDetailFailure({
                error,
            })
        );
    }
}
