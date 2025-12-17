// Response Helper
module.exports = {
  success: (data, message = 'Success', statusCode = 200) => {
    return {
      statusCode,
      message,
      data
    };
  },
  
  error: (message = 'Error', statusCode = 500, errors = null) => {
    return {
      statusCode,
      message,
      errors
    };
  }
};
