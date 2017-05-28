import * as progress from './Progress';

const defaults = {
    latencyThreshold: 100,
    router: true,
    http: true
};

function Progress(options) {
    this.app = null;
    this.configure(options || {});
}

Object.assign(Progress.prototype, progress, {
    init (app) {
        this.app = app
    }
});

Progress.install = (Vue, options = {}) => {
    if (this.installed) return;
    this.installed = true;

    Object.defineProperty(Vue.prototype, '$progress', {
        get: function get() {
            return this.$root._progress;
        }
    });

    options = Object.assign({}, defaults, options);

    Vue.mixin({
        beforeCreate () {
            let np = this.$options.progress;
            if (np) {

                let requestsTotal = 0;
                let requestsCompleted = 0;
                let { latencyThreshold, router: applyOnRouter, http: applyOnHttp } = options;
                let confirmed = true;

                function setComplete() {
                    requestsTotal = 0;
                    requestsCompleted = 0;
                    np.done()
                }

                function initProgress() {
                    if (0 === requestsTotal) {
                        setTimeout(() => np.start(), latencyThreshold)
                    }
                    requestsTotal++;
                    np.set(requestsCompleted / requestsTotal)
                }

                function increase() {
                    // Finish progress bar 50 ms later
                    setTimeout(() => {
                        ++requestsCompleted;
                        if (requestsCompleted >= requestsTotal) {
                            setComplete()
                        } else {
                            np.set((requestsCompleted / requestsTotal) - 0.1)
                        }
                    }, latencyThreshold + 50)
                }

                this._progress = np;
                np.init(this);

                if (applyOnHttp) {
                    Vue.http.interceptors.push((request, next) => {
                        const showProgressBar = 'showProgressBar' in request ? request.showProgressBar : applyOnHttp;
                        if (showProgressBar) initProgress();

                        next(response => {
                            if (!showProgressBar) return response;
                            increase()
                        })
                    })
                }

                const router = applyOnRouter && this.$options.router;
                if (router) {
                    router.beforeEach((route, from, next) => {
                        const showProgressBar = 'showProgressBar' in route.meta ? route.meta.showProgressBar : applyOnRouter;
                        if (showProgressBar && confirmed) {
                            initProgress();
                            confirmed = false
                        }
                        next()
                    });
                    router.afterEach(route => {
                        const showProgressBar = 'showProgressBar' in route.meta ? route.meta.showProgressBar : applyOnRouter;
                        if (showProgressBar) {
                            increase();
                            confirmed = true
                        }
                    })
                }
            }
        }
    });
};

Progress.start = () => {

};

export default Progress