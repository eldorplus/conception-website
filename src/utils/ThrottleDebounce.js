/**
 * Throttle execution of a function. Especially useful for rate limiting
 * execution of handlers on events like resize and scroll.
 *
 * @param  {Number}    delay          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param  {Boolean}   noTrailing     Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds while the
 *                                    throttled-function is being called. If noTrailing is false or unspecified, callback will be executed one final time
 *                                    after the last throttled-function call. (After the throttled-function has not been called for `delay` milliseconds,
 *                                    the internal counter is reset)
 * @param  {Function}  callback       A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                    to `callback` when the throttled-function is executed.
 * @param  {Boolean}   debounceMode   If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is false (at end),
 *                                    schedule `callback` to execute after `delay` ms.
 *
 * @return {Function}  A new, throttled, function.
 */
export const throttle = ( delay, noTrailing, callback, debounceMode ) => {
    let timeoutID;
    let lastExec = 0;

    if ( typeof noTrailing !== 'boolean' ) {
        debounceMode = callback;
        callback = noTrailing;
        noTrailing = undefined;
    }

    function wrapper () {

        let self = this;
        let elapsed = Number(new Date()) - lastExec;
        let args = arguments;

        // Execute `callback` and update the `lastExec` timestamp.
        function exec () {
            lastExec = Number(new Date());
            callback.apply(self, args);
        }

        function clear () {
            timeoutID = undefined;
        }

        if ( debounceMode && !timeoutID ) {
            exec();
        }

        // Clear any existing timeout.
        if ( timeoutID ) {
            clearTimeout(timeoutID);
        }

        if ( debounceMode === undefined && elapsed > delay ) {
            exec();

        } else if ( noTrailing !== true ) {
            timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
        }

    }

    // Return the wrapper function.
    return wrapper;
};

/**
 * Debounce execution of a function. Debouncing, unlike throttling,
 * guarantees that a function is only executed a single time, either at the
 * very beginning of a series of calls, or at the very end.
 *
 * @param  {Number}   delay         A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param  {Boolean}  atBegin       Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
 *                                  after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
 *                                  (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).
 * @param  {Function} callback      A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                  to `callback` when the debounced-function is executed.
 *
 * @return {Function} A new, debounced function.
 */
export const debounce = ( delay, atBegin, callback ) => {
    return callback === undefined ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false);
};