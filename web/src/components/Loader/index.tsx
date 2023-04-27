import { Ellipsis } from 'react-spinners-css';
import theme from '../../styles/theme';
import { StyledLoader } from './styles';

const Loader: React.FC = () => {
    return (
        <StyledLoader>
            <span>Carregando</span>
            <Ellipsis color={theme.colors.primary} size={65} />
        </StyledLoader>
    );
};
export default Loader;
