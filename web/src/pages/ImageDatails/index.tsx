import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader';
import { useAppDispatch } from '../../store';
import { getImageDetail } from '../../store/ducks/imageDetails/actions';
import {
    getImageDetailsDataSelector,
    getImageDetailsLoadingSelector,
} from '../../store/ducks/imageDetails/selectors';
import { StyledContainer, StyledContainerImage } from './styles';

const ImageDetails: React.FC = () => {
    const [count, setCount] = useState(0);
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const imageDetailData = useSelector(getImageDetailsDataSelector);
    const imageDetailLoading = useSelector(getImageDetailsLoadingSelector);

    useEffect(() => {
        if (count > 0) dispatch(getImageDetail({ id }));
        setCount(1);
    }, [count]);

    return (
        <StyledContainer>
            <h1>Detalhes</h1>
            {imageDetailLoading ? (
                <Loader />
            ) : (
                <StyledContainerImage>
                    <img src={imageDetailData.download_url} alt="..." />
                    <div>
                        <span>ID: {imageDetailData.id}</span>
                        <span>Autor: {imageDetailData.author}</span>
                    </div>
                </StyledContainerImage>
            )}
        </StyledContainer>
    );
};

export default ImageDetails;
