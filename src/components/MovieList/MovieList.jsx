import PropTypes from 'prop-types';
import {
  StyledSection,
  StyledLink,
  SectionTitle,
  List,
  ListItem,
} from './MovieList.styled';

const MovieList = ({ trendingMovies }) => {
  return (
    <StyledSection>
      <SectionTitle>Trending today</SectionTitle>
      <List>
        {trendingMovies.map(trendingMovie => (
          <ListItem key={trendingMovie.id}>
            <StyledLink to={`/movies/${trendingMovie.id}`}>
              {trendingMovie.title}
            </StyledLink>
          </ListItem>
        ))}
      </List>
    </StyledSection>
  );
};

export default MovieList;

MovieList.propTypes = {
  trendingMovies: PropTypes.arrayOf(PropTypes.shape()),
};
