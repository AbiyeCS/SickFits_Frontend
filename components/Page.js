import PropTypes from 'prop-types';

export default function Page({ message, children }) {
  return (
    <div>
      <p>{message}</p>
      {children}
    </div>
  );
}

Page.propTypes = {
  message: PropTypes.string,
  children: PropTypes.node,
};
