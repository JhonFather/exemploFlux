import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import Loader from '../../components/Loader';
import { useAppDispatch } from '../../store';
import { getPictureListing } from '../../store/ducks/pictureListing/actions';
import {
    getPictureListingDataSelector,
    getPictureListingLoadingSelector,
    getPictureListingPageSelector,
} from '../../store/ducks/pictureListing/selectors';
import { StyledButtonList, StyledContainer, StyledPictureList } from './styles';

const PictureListing: React.FC = () => {
    const { ref, inView, entry } = useInView({ threshold: 0 });
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const pictureLisntingData = useSelector(getPictureListingDataSelector);
    const page = useSelector(getPictureListingPageSelector);
    const pictureLisntingLoading = useSelector(
        getPictureListingLoadingSelector
    );

    useEffect(() => {
        if (entry?.isIntersecting) {
            dispatch(getPictureListing({ page, limit: 20 }));
        }
    }, [inView]);

    function handleNavigate(id: string) {
        setTimeout(() => {
            navigate(`/details/${id}`);
        }, 450);
    }
    return (
        <StyledContainer>
            <h1>Listagem</h1>
            <StyledPictureList>
                {pictureLisntingData &&
                    pictureLisntingData.map((item) => (
                        <StyledButtonList
                            onClick={() => handleNavigate(item.id)}
                            key={String(item.id)}
                        >
                            <li>
                                <img
                                    loading="lazy"
                                    src={item.download_url}
                                    alt="..."
                                />
                                <div>
                                    <span>ID: {item.id}</span>
                                    <span>Autor: {item.author}</span>
                                </div>
                            </li>
                        </StyledButtonList>
                    ))}
            </StyledPictureList>
            <div ref={ref}>{pictureLisntingLoading && <Loader />}</div>
        </StyledContainer>
    );
};
export default PictureListing;
