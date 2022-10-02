const wrapper =  (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
        next(error)
    }
  };
};

module.exports = wrapper;

/*this was the most difficult part to understand, 
but based on what i understood watching videos and trying to apply the logic
is that the Wrapper function is for avoiding the try catch blocks on
each route's callback function. 
The callback function is the `fn` parameter, 
when we use the wrapper on the route's functions, we call the wrapper function,
so we gotta return an async function to wait for the promise,
in this anonymous function, we get the req, res and next as arguments,
we gotta WAIT for the promise response, (res or the error).
we do a try catch block and inside of it we await for the callback function's response.
And if we get and error, we call the next function which is the 'middleware/notFound.js'
that i created.
That's it, i hope its correct, i struggle a lot with logic but i tried to understand it.
*/

