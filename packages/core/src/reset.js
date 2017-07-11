const reset = {
  fontFamily: 'Arial, sans-serif',
  fontSize: '14px',
  fontWeight: 'normal',
  lineHeight: '1.4',
  color: '#eee',
};

export default customStyles => ({
  ...reset,
  ...customStyles,
});
