import PropTypes from 'prop-types';

export default PropTypes.shape({
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  releaseYear: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
});
