module.exports = fn => (...args) => {
	return new Promise((resolve, reject) => {
  	try {
    	resolve(fn(...args));
    } catch (err) {
    	reject(err);
    }
  })
}