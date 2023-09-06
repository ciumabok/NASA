"use strict";
(self["webpackChunkangular_candidate_test"] = self["webpackChunkangular_candidate_test"] || []).push([["default-src_app_services_product_service_ts"],{

/***/ 1269:
/*!******************************************!*\
  !*** ./src/app/services/http.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpService: () => (/* binding */ HttpService),
/* harmony export */   httpActions: () => (/* binding */ httpActions)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 3252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 2389);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 4860);
var _class;




var httpActions;
(function (httpActions) {
  httpActions["GET"] = "GET";
  httpActions["POST"] = "POST";
  httpActions["UPDATE"] = "UPDATE";
  httpActions["DELETE"] = "DELETE";
})(httpActions || (httpActions = {}));
class HttpService {
  constructor(httpClient) {
    this.httpClient = httpClient;
    this.apiServer = "";
  }
  get(url) {
    return this.httpClient.get(this.apiServer + url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.catchError)(this.errorHandler));
  }
  getById(url, id) {
    return this.httpClient.get(this.apiServer + url + id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.catchError)(this.errorHandler));
  }
  post(url, obj) {
    return this.httpClient.post(this.apiServer + url, obj).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.catchError)(this.errorHandler));
  }
  update(id, obj, url) {
    return this.httpClient.put(this.apiServer + url + id, obj).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.catchError)(this.errorHandler));
  }
  delete(id, url) {
    return this.httpClient.delete(this.apiServer + url + id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.catchError)(this.errorHandler));
  }
  errorHandler(error) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error;
    } else {
      errorMessage = error.error.msg;
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(errorMessage);
  }
}
_class = HttpService;
_class.ɵfac = function HttpService_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 5993:
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductService: () => (/* binding */ ProductService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9736);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 3738);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 1650);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 839);
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ 1269);
var _class;






class ProductService {
  constructor(http) {
    this.http = http;
    this.productUrl = `https://${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.productBaseUrl}/api/citations/redistributions`;
    this.productDetailsUrl = `https://${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.productBaseUrl}/api/citations/`;
    // Signal stream of products
    this.products = (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_2__.toSignal)(this.getProducts$());
    this.productDetails = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.signal)(undefined);
  }
  //observable stream of products
  getProducts$() {
    return this.http.get(this.productUrl).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(data => data.results.filter(item => item.distribution === 'PUBLIC')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(data => data.sort((a, b) => new Date(b.redistributedDate).getTime() - new Date(a.redistributedDate).getTime())), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(data => this.logger(data)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.shareReplay)(1));
  }
  getProductDetails$(id) {
    return this.http.getById(this.productDetailsUrl, id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(data => {
      this.productDetails.set(data);
      this.logger(data);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.shareReplay)(1));
  }
  logger(data) {
    // To Do: replace with a logger service
    console.info(JSON.stringify(data));
  }
}
_class = ProductService;
_class.ɵfac = function ProductService_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 5400:
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/ReplaySubject.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReplaySubject: () => (/* binding */ ReplaySubject)
/* harmony export */ });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subject */ 2513);
/* harmony import */ var _scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scheduler/dateTimestampProvider */ 6926);


class ReplaySubject extends _Subject__WEBPACK_IMPORTED_MODULE_0__.Subject {
  constructor(_bufferSize = Infinity, _windowTime = Infinity, _timestampProvider = _scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_1__.dateTimestampProvider) {
    super();
    this._bufferSize = _bufferSize;
    this._windowTime = _windowTime;
    this._timestampProvider = _timestampProvider;
    this._buffer = [];
    this._infiniteTimeWindow = true;
    this._infiniteTimeWindow = _windowTime === Infinity;
    this._bufferSize = Math.max(1, _bufferSize);
    this._windowTime = Math.max(1, _windowTime);
  }
  next(value) {
    const {
      isStopped,
      _buffer,
      _infiniteTimeWindow,
      _timestampProvider,
      _windowTime
    } = this;
    if (!isStopped) {
      _buffer.push(value);
      !_infiniteTimeWindow && _buffer.push(_timestampProvider.now() + _windowTime);
    }
    this._trimBuffer();
    super.next(value);
  }
  _subscribe(subscriber) {
    this._throwIfClosed();
    this._trimBuffer();
    const subscription = this._innerSubscribe(subscriber);
    const {
      _infiniteTimeWindow,
      _buffer
    } = this;
    const copy = _buffer.slice();
    for (let i = 0; i < copy.length && !subscriber.closed; i += _infiniteTimeWindow ? 1 : 2) {
      subscriber.next(copy[i]);
    }
    this._checkFinalizedStatuses(subscriber);
    return subscription;
  }
  _trimBuffer() {
    const {
      _bufferSize,
      _timestampProvider,
      _buffer,
      _infiniteTimeWindow
    } = this;
    const adjustedBufferSize = (_infiniteTimeWindow ? 1 : 2) * _bufferSize;
    _bufferSize < Infinity && adjustedBufferSize < _buffer.length && _buffer.splice(0, _buffer.length - adjustedBufferSize);
    if (!_infiniteTimeWindow) {
      const now = _timestampProvider.now();
      let last = 0;
      for (let i = 1; i < _buffer.length && _buffer[i] <= now; i += 2) {
        last = i;
      }
      last && _buffer.splice(0, last + 1);
    }
  }
}

/***/ }),

/***/ 1650:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/shareReplay.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   shareReplay: () => (/* binding */ shareReplay)
/* harmony export */ });
/* harmony import */ var _ReplaySubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ReplaySubject */ 5400);
/* harmony import */ var _share__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./share */ 5584);


function shareReplay(configOrBufferSize, windowTime, scheduler) {
  let bufferSize;
  let refCount = false;
  if (configOrBufferSize && typeof configOrBufferSize === 'object') {
    ({
      bufferSize = Infinity,
      windowTime = Infinity,
      refCount = false,
      scheduler
    } = configOrBufferSize);
  } else {
    bufferSize = configOrBufferSize !== null && configOrBufferSize !== void 0 ? configOrBufferSize : Infinity;
  }
  return (0,_share__WEBPACK_IMPORTED_MODULE_0__.share)({
    connector: () => new _ReplaySubject__WEBPACK_IMPORTED_MODULE_1__.ReplaySubject(bufferSize, windowTime, scheduler),
    resetOnError: true,
    resetOnComplete: false,
    resetOnRefCountZero: refCount
  });
}

/***/ }),

/***/ 6926:
/*!********************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/dateTimestampProvider.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dateTimestampProvider: () => (/* binding */ dateTimestampProvider)
/* harmony export */ });
const dateTimestampProvider = {
  now() {
    return (dateTimestampProvider.delegate || Date).now();
  },
  delegate: undefined
};

/***/ }),

/***/ 839:
/*!**************************************************************!*\
  !*** ./node_modules/@angular/core/fesm2022/rxjs-interop.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   takeUntilDestroyed: () => (/* binding */ takeUntilDestroyed),
/* harmony export */   toObservable: () => (/* binding */ toObservable),
/* harmony export */   toSignal: () => (/* binding */ toSignal)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2235);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5400);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 274);
/**
 * @license Angular v16.2.3
 * (c) 2010-2022 Google LLC. https://angular.io/
 * License: MIT
 */





/**
 * Operator which completes the Observable when the calling context (component, directive, service,
 * etc) is destroyed.
 *
 * @param destroyRef optionally, the `DestroyRef` representing the current context. This can be
 *     passed explicitly to use `takeUntilDestroyed` outside of an [injection
 * context](guide/dependency-injection-context). Otherwise, the current `DestroyRef` is injected.
 *
 * @developerPreview
 */
function takeUntilDestroyed(destroyRef) {
  if (!destroyRef) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.assertInInjectionContext)(takeUntilDestroyed);
    destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DestroyRef);
  }
  const destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(observer => {
    const unregisterFn = destroyRef.onDestroy(observer.next.bind(observer));
    return unregisterFn;
  });
  return source => {
    return source.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(destroyed$));
  };
}

/**
 * Exposes the value of an Angular `Signal` as an RxJS `Observable`.
 *
 * The signal's value will be propagated into the `Observable`'s subscribers using an `effect`.
 *
 * `toObservable` must be called in an injection context unless an injector is provided via options.
 *
 * @developerPreview
 */
function toObservable(source, options) {
  !options?.injector && (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.assertInInjectionContext)(toObservable);
  const injector = options?.injector ?? (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector);
  const subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.ReplaySubject(1);
  const watcher = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.effect)(() => {
    let value;
    try {
      value = source();
    } catch (err) {
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.untracked)(() => subject.error(err));
      return;
    }
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.untracked)(() => subject.next(value));
  }, {
    injector,
    manualCleanup: true
  });
  injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DestroyRef).onDestroy(() => {
    watcher.destroy();
    subject.complete();
  });
  return subject.asObservable();
}

/**
 * Base URL for the error details page.
 *
 * Keep this constant in sync across:
 *  - packages/compiler-cli/src/ngtsc/diagnostics/src/error_details_base_url.ts
 *  - packages/core/src/error_details_base_url.ts
 */
const ERROR_DETAILS_PAGE_BASE_URL = 'https://angular.io/errors';
/**
 * URL for the XSS security documentation.
 */
const XSS_SECURITY_URL = 'https://g.co/ng/security#xss';

/**
 * Class that represents a runtime error.
 * Formats and outputs the error message in a consistent way.
 *
 * Example:
 * ```
 *  throw new RuntimeError(
 *    RuntimeErrorCode.INJECTOR_ALREADY_DESTROYED,
 *    ngDevMode && 'Injector has already been destroyed.');
 * ```
 *
 * Note: the `message` argument contains a descriptive error message as a string in development
 * mode (when the `ngDevMode` is defined). In production mode (after tree-shaking pass), the
 * `message` argument becomes `false`, thus we account for it in the typings and the runtime
 * logic.
 */
class RuntimeError extends Error {
  constructor(code, message) {
    super(formatRuntimeError(code, message));
    this.code = code;
  }
}
/**
 * Called to format a runtime error.
 * See additional info on the `message` argument type in the `RuntimeError` class description.
 */
function formatRuntimeError(code, message) {
  // Error code might be a negative number, which is a special marker that instructs the logic to
  // generate a link to the error details page on angular.io.
  // We also prepend `0` to non-compile-time errors.
  const fullCode = `NG0${Math.abs(code)}`;
  let errorMessage = `${fullCode}${message ? ': ' + message : ''}`;
  if (ngDevMode && code < 0) {
    const addPeriodSeparator = !errorMessage.match(/[.,;!?\n]$/);
    const separator = addPeriodSeparator ? '.' : '';
    errorMessage = `${errorMessage}${separator} Find more at ${ERROR_DETAILS_PAGE_BASE_URL}/${fullCode}`;
  }
  return errorMessage;
}

/**
 * Symbol used to tell `Signal`s apart from other functions.
 *
 * This can be used to auto-unwrap signals in various cases, or to auto-wrap non-signal values.
 */
const SIGNAL = Symbol('SIGNAL');
/**
 * Checks if the given `value` is a reactive `Signal`.
 *
 * @developerPreview
 */
function isSignal(value) {
  return typeof value === 'function' && value[SIGNAL] !== undefined;
}
/**
 * Converts `fn` into a marked signal function (where `isSignal(fn)` will be `true`), and
 * potentially add some set of extra properties (passed as an object record `extraApi`).
 */
function createSignalFromFunction(node, fn, extraApi = {}) {
  fn[SIGNAL] = node;
  // Copy properties from `extraApi` to `fn` to complete the desired API of the `Signal`.
  return Object.assign(fn, extraApi);
}
/**
 * The default equality function used for `signal` and `computed`, which treats objects and arrays
 * as never equal, and all other primitive values using identity semantics.
 *
 * This allows signals to hold non-primitive values (arrays, objects, other collections) and still
 * propagate change notification upon explicit mutation without identity change.
 *
 * @developerPreview
 */
function defaultEquals(a, b) {
  // `Object.is` compares two values using identity semantics which is desired behavior for
  // primitive values. If `Object.is` determines two values to be equal we need to make sure that
  // those don't represent objects (we want to make sure that 2 objects are always considered
  // "unequal"). The null check is needed for the special case of JavaScript reporting null values
  // as objects (`typeof null === 'object'`).
  return (a === null || typeof a !== 'object') && Object.is(a, b);
}
const _global = globalThis;
function ngDevModeResetPerfCounters() {
  const locationString = typeof location !== 'undefined' ? location.toString() : '';
  const newCounters = {
    namedConstructors: locationString.indexOf('ngDevMode=namedConstructors') != -1,
    firstCreatePass: 0,
    tNode: 0,
    tView: 0,
    rendererCreateTextNode: 0,
    rendererSetText: 0,
    rendererCreateElement: 0,
    rendererAddEventListener: 0,
    rendererSetAttribute: 0,
    rendererRemoveAttribute: 0,
    rendererSetProperty: 0,
    rendererSetClassName: 0,
    rendererAddClass: 0,
    rendererRemoveClass: 0,
    rendererSetStyle: 0,
    rendererRemoveStyle: 0,
    rendererDestroy: 0,
    rendererDestroyNode: 0,
    rendererMoveNode: 0,
    rendererRemoveNode: 0,
    rendererAppendChild: 0,
    rendererInsertBefore: 0,
    rendererCreateComment: 0,
    hydratedNodes: 0,
    hydratedComponents: 0,
    dehydratedViewsRemoved: 0,
    dehydratedViewsCleanupRuns: 0,
    componentsSkippedHydration: 0
  };
  // Make sure to refer to ngDevMode as ['ngDevMode'] for closure.
  const allowNgDevModeTrue = locationString.indexOf('ngDevMode=false') === -1;
  _global['ngDevMode'] = allowNgDevModeTrue && newCounters;
  return newCounters;
}
/**
 * This function checks to see if the `ngDevMode` has been set. If yes,
 * then we honor it, otherwise we default to dev mode with additional checks.
 *
 * The idea is that unless we are doing production build where we explicitly
 * set `ngDevMode == false` we should be helping the developer by providing
 * as much early warning and errors as possible.
 *
 * `ɵɵdefineComponent` is guaranteed to have been called before any component template functions
 * (and thus Ivy instructions), so a single initialization there is sufficient to ensure ngDevMode
 * is defined for the entire instruction set.
 *
 * When checking `ngDevMode` on toplevel, always init it before referencing it
 * (e.g. `((typeof ngDevMode === 'undefined' || ngDevMode) && initNgDevMode())`), otherwise you can
 *  get a `ReferenceError` like in https://github.com/angular/angular/issues/31595.
 *
 * Details on possible values for `ngDevMode` can be found on its docstring.
 *
 * NOTE:
 * - changes to the `ngDevMode` name must be synced with `compiler-cli/src/tooling.ts`.
 */
function initNgDevMode() {
  // The below checks are to ensure that calling `initNgDevMode` multiple times does not
  // reset the counters.
  // If the `ngDevMode` is not an object, then it means we have not created the perf counters
  // yet.
  if (typeof ngDevMode === 'undefined' || ngDevMode) {
    if (typeof ngDevMode !== 'object') {
      ngDevModeResetPerfCounters();
    }
    return typeof ngDevMode !== 'undefined' && !!ngDevMode;
  }
  return false;
}

// Required as the signals library is in a separate package, so we need to explicitly ensure the
/**
 * A `WeakRef`-compatible reference that fakes the API with a strong reference
 * internally.
 */
class LeakyRef {
  constructor(ref) {
    this.ref = ref;
  }
  deref() {
    return this.ref;
  }
}
// `WeakRef` is not always defined in every TS environment where Angular is compiled. Instead,
// read it off of the global context if available.
// tslint:disable-next-line: no-toplevel-property-access
let WeakRefImpl = _global['WeakRef'] ?? LeakyRef;
function newWeakRef(value) {
  if (typeof ngDevMode !== 'undefined' && ngDevMode && WeakRefImpl === undefined) {
    throw new Error(`Angular requires a browser which supports the 'WeakRef' API`);
  }
  return new WeakRefImpl(value);
}
function setAlternateWeakRefImpl(impl) {
  // no-op since the alternate impl is included by default by the framework. Remove once internal
  // migration is complete.
}

// Required as the signals library is in a separate package, so we need to explicitly ensure the
/**
 * Counter tracking the next `ProducerId` or `ConsumerId`.
 */
let _nextReactiveId = 0;
/**
 * Tracks the currently active reactive consumer (or `null` if there is no active
 * consumer).
 */
let activeConsumer = null;
/**
 * Whether the graph is currently propagating change notifications.
 */
let inNotificationPhase = false;
function setActiveConsumer(consumer) {
  const prev = activeConsumer;
  activeConsumer = consumer;
  return prev;
}
/**
 * A node in the reactive graph.
 *
 * Nodes can be producers of reactive values, consumers of other reactive values, or both.
 *
 * Producers are nodes that produce values, and can be depended upon by consumer nodes.
 *
 * Producers expose a monotonic `valueVersion` counter, and are responsible for incrementing this
 * version when their value semantically changes. Some producers may produce their values lazily and
 * thus at times need to be polled for potential updates to their value (and by extension their
 * `valueVersion`). This is accomplished via the `onProducerUpdateValueVersion` method for
 * implemented by producers, which should perform whatever calculations are necessary to ensure
 * `valueVersion` is up to date.
 *
 * Consumers are nodes that depend on the values of producers and are notified when those values
 * might have changed.
 *
 * Consumers do not wrap the reads they consume themselves, but rather can be set as the active
 * reader via `setActiveConsumer`. Reads of producers that happen while a consumer is active will
 * result in those producers being added as dependencies of that consumer node.
 *
 * The set of dependencies of a consumer is dynamic. Implementers expose a monotonically increasing
 * `trackingVersion` counter, which increments whenever the consumer is about to re-run any reactive
 * reads it needs and establish a new set of dependencies as a result.
 *
 * Producers store the last `trackingVersion` they've seen from `Consumer`s which have read them.
 * This allows a producer to identify whether its record of the dependency is current or stale, by
 * comparing the consumer's `trackingVersion` to the version at which the dependency was
 * last observed.
 */
class ReactiveNode {
  constructor() {
    this.id = _nextReactiveId++;
    /**
     * A cached weak reference to this node, which will be used in `ReactiveEdge`s.
     */
    this.ref = newWeakRef(this);
    /**
     * Edges to producers on which this node depends (in its consumer capacity).
     */
    this.producers = new Map();
    /**
     * Edges to consumers on which this node depends (in its producer capacity).
     */
    this.consumers = new Map();
    /**
     * Monotonically increasing counter representing a version of this `Consumer`'s
     * dependencies.
     */
    this.trackingVersion = 0;
    /**
     * Monotonically increasing counter which increases when the value of this `Producer`
     * semantically changes.
     */
    this.valueVersion = 0;
  }
  /**
   * Polls dependencies of a consumer to determine if they have actually changed.
   *
   * If this returns `false`, then even though the consumer may have previously been notified of a
   * change, the values of its dependencies have not actually changed and the consumer should not
   * rerun any reactions.
   */
  consumerPollProducersForChange() {
    for (const [producerId, edge] of this.producers) {
      const producer = edge.producerNode.deref();
      // On Safari < 16.1 deref can return null, we need to check for null also.
      // See https://github.com/WebKit/WebKit/commit/44c15ba58912faab38b534fef909dd9e13e095e0
      if (producer == null || edge.atTrackingVersion !== this.trackingVersion) {
        // This dependency edge is stale, so remove it.
        this.producers.delete(producerId);
        producer?.consumers.delete(this.id);
        continue;
      }
      if (producer.producerPollStatus(edge.seenValueVersion)) {
        // One of the dependencies reports a real value change.
        return true;
      }
    }
    // No dependency reported a real value change, so the `Consumer` has also not been
    // impacted.
    return false;
  }
  /**
   * Notify all consumers of this producer that its value may have changed.
   */
  producerMayHaveChanged() {
    // Prevent signal reads when we're updating the graph
    const prev = inNotificationPhase;
    inNotificationPhase = true;
    try {
      for (const [consumerId, edge] of this.consumers) {
        const consumer = edge.consumerNode.deref();
        // On Safari < 16.1 deref can return null, we need to check for null also.
        // See https://github.com/WebKit/WebKit/commit/44c15ba58912faab38b534fef909dd9e13e095e0
        if (consumer == null || consumer.trackingVersion !== edge.atTrackingVersion) {
          this.consumers.delete(consumerId);
          consumer?.producers.delete(this.id);
          continue;
        }
        consumer.onConsumerDependencyMayHaveChanged();
      }
    } finally {
      inNotificationPhase = prev;
    }
  }
  /**
   * Mark that this producer node has been accessed in the current reactive context.
   */
  producerAccessed() {
    if (inNotificationPhase) {
      throw new Error(typeof ngDevMode !== 'undefined' && ngDevMode ? `Assertion error: signal read during notification phase` : '');
    }
    if (activeConsumer === null) {
      return;
    }
    // Either create or update the dependency `Edge` in both directions.
    let edge = activeConsumer.producers.get(this.id);
    if (edge === undefined) {
      edge = {
        consumerNode: activeConsumer.ref,
        producerNode: this.ref,
        seenValueVersion: this.valueVersion,
        atTrackingVersion: activeConsumer.trackingVersion
      };
      activeConsumer.producers.set(this.id, edge);
      this.consumers.set(activeConsumer.id, edge);
    } else {
      edge.seenValueVersion = this.valueVersion;
      edge.atTrackingVersion = activeConsumer.trackingVersion;
    }
  }
  /**
   * Whether this consumer currently has any producers registered.
   */
  get hasProducers() {
    return this.producers.size > 0;
  }
  /**
   * Whether this `ReactiveNode` in its producer capacity is currently allowed to initiate updates,
   * based on the current consumer context.
   */
  get producerUpdatesAllowed() {
    return activeConsumer?.consumerAllowSignalWrites !== false;
  }
  /**
   * Checks if a `Producer` has a current value which is different than the value
   * last seen at a specific version by a `Consumer` which recorded a dependency on
   * this `Producer`.
   */
  producerPollStatus(lastSeenValueVersion) {
    // `producer.valueVersion` may be stale, but a mismatch still means that the value
    // last seen by the `Consumer` is also stale.
    if (this.valueVersion !== lastSeenValueVersion) {
      return true;
    }
    // Trigger the `Producer` to update its `valueVersion` if necessary.
    this.onProducerUpdateValueVersion();
    // At this point, we can trust `producer.valueVersion`.
    return this.valueVersion !== lastSeenValueVersion;
  }
}

/**
 * Create a computed `Signal` which derives a reactive value from an expression.
 *
 * @developerPreview
 */
function computed(computation, options) {
  const node = new ComputedImpl(computation, options?.equal ?? defaultEquals);
  // Casting here is required for g3, as TS inference behavior is slightly different between our
  // version/options and g3's.
  return createSignalFromFunction(node, node.signal.bind(node));
}
/**
 * A dedicated symbol used before a computed value has been calculated for the first time.
 * Explicitly typed as `any` so we can use it as signal's value.
 */
const UNSET = Symbol('UNSET');
/**
 * A dedicated symbol used in place of a computed signal value to indicate that a given computation
 * is in progress. Used to detect cycles in computation chains.
 * Explicitly typed as `any` so we can use it as signal's value.
 */
const COMPUTING = Symbol('COMPUTING');
/**
 * A dedicated symbol used in place of a computed signal value to indicate that a given computation
 * failed. The thrown error is cached until the computation gets dirty again.
 * Explicitly typed as `any` so we can use it as signal's value.
 */
const ERRORED = Symbol('ERRORED');
/**
 * A computation, which derives a value from a declarative reactive expression.
 *
 * `Computed`s are both producers and consumers of reactivity.
 */
class ComputedImpl extends ReactiveNode {
  constructor(computation, equal) {
    super();
    this.computation = computation;
    this.equal = equal;
    /**
     * Current value of the computation.
     *
     * This can also be one of the special values `UNSET`, `COMPUTING`, or `ERRORED`.
     */
    this.value = UNSET;
    /**
     * If `value` is `ERRORED`, the error caught from the last computation attempt which will
     * be re-thrown.
     */
    this.error = null;
    /**
     * Flag indicating that the computation is currently stale, meaning that one of the
     * dependencies has notified of a potential change.
     *
     * It's possible that no dependency has _actually_ changed, in which case the `stale`
     * state can be resolved without recomputing the value.
     */
    this.stale = true;
    this.consumerAllowSignalWrites = false;
  }
  onConsumerDependencyMayHaveChanged() {
    if (this.stale) {
      // We've already notified consumers that this value has potentially changed.
      return;
    }
    // Record that the currently cached value may be stale.
    this.stale = true;
    // Notify any consumers about the potential change.
    this.producerMayHaveChanged();
  }
  onProducerUpdateValueVersion() {
    if (!this.stale) {
      // The current value and its version are already up to date.
      return;
    }
    // The current value is stale. Check whether we need to produce a new one.
    if (this.value !== UNSET && this.value !== COMPUTING && !this.consumerPollProducersForChange()) {
      // Even though we were previously notified of a potential dependency update, all of
      // our dependencies report that they have not actually changed in value, so we can
      // resolve the stale state without needing to recompute the current value.
      this.stale = false;
      return;
    }
    // The current value is stale, and needs to be recomputed. It still may not change -
    // that depends on whether the newly computed value is equal to the old.
    this.recomputeValue();
  }
  recomputeValue() {
    if (this.value === COMPUTING) {
      // Our computation somehow led to a cyclic read of itself.
      throw new Error('Detected cycle in computations.');
    }
    const oldValue = this.value;
    this.value = COMPUTING;
    // As we're re-running the computation, update our dependent tracking version number.
    this.trackingVersion++;
    const prevConsumer = setActiveConsumer(this);
    let newValue;
    try {
      newValue = this.computation();
    } catch (err) {
      newValue = ERRORED;
      this.error = err;
    } finally {
      setActiveConsumer(prevConsumer);
    }
    this.stale = false;
    if (oldValue !== UNSET && oldValue !== ERRORED && newValue !== ERRORED && this.equal(oldValue, newValue)) {
      // No change to `valueVersion` - old and new values are
      // semantically equivalent.
      this.value = oldValue;
      return;
    }
    this.value = newValue;
    this.valueVersion++;
  }
  signal() {
    // Check if the value needs updating before returning it.
    this.onProducerUpdateValueVersion();
    // Record that someone looked at this signal.
    this.producerAccessed();
    if (this.value === ERRORED) {
      throw this.error;
    }
    return this.value;
  }
}
function defaultThrowError() {
  throw new Error();
}
let throwInvalidWriteToSignalErrorFn = defaultThrowError;
function throwInvalidWriteToSignalError() {
  throwInvalidWriteToSignalErrorFn();
}
function setThrowInvalidWriteToSignalError(fn) {
  throwInvalidWriteToSignalErrorFn = fn;
}

/**
 * If set, called after `WritableSignal`s are updated.
 *
 * This hook can be used to achieve various effects, such as running effects synchronously as part
 * of setting a signal.
 */
let postSignalSetFn = null;
class WritableSignalImpl extends ReactiveNode {
  constructor(value, equal) {
    super();
    this.value = value;
    this.equal = equal;
    this.consumerAllowSignalWrites = false;
  }
  onConsumerDependencyMayHaveChanged() {
    // This never happens for writable signals as they're not consumers.
  }
  onProducerUpdateValueVersion() {
    // Writable signal value versions are always up to date.
  }
  /**
   * Directly update the value of the signal to a new value, which may or may not be
   * equal to the previous.
   *
   * In the event that `newValue` is semantically equal to the current value, `set` is
   * a no-op.
   */
  set(newValue) {
    if (!this.producerUpdatesAllowed) {
      throwInvalidWriteToSignalError();
    }
    if (!this.equal(this.value, newValue)) {
      this.value = newValue;
      this.valueVersion++;
      this.producerMayHaveChanged();
      postSignalSetFn?.();
    }
  }
  /**
   * Derive a new value for the signal from its current value using the `updater` function.
   *
   * This is equivalent to calling `set` on the result of running `updater` on the current
   * value.
   */
  update(updater) {
    if (!this.producerUpdatesAllowed) {
      throwInvalidWriteToSignalError();
    }
    this.set(updater(this.value));
  }
  /**
   * Calls `mutator` on the current value and assumes that it has been mutated.
   */
  mutate(mutator) {
    if (!this.producerUpdatesAllowed) {
      throwInvalidWriteToSignalError();
    }
    // Mutate bypasses equality checks as it's by definition changing the value.
    mutator(this.value);
    this.valueVersion++;
    this.producerMayHaveChanged();
    postSignalSetFn?.();
  }
  asReadonly() {
    if (this.readonlySignal === undefined) {
      this.readonlySignal = createSignalFromFunction(this, () => this.signal());
    }
    return this.readonlySignal;
  }
  signal() {
    this.producerAccessed();
    return this.value;
  }
}
/**
 * Create a `Signal` that can be set or updated directly.
 *
 * @developerPreview
 */
function signal(initialValue, options) {
  const signalNode = new WritableSignalImpl(initialValue, options?.equal ?? defaultEquals);
  // Casting here is required for g3, as TS inference behavior is slightly different between our
  // version/options and g3's.
  const signalFn = createSignalFromFunction(signalNode, signalNode.signal.bind(signalNode), {
    set: signalNode.set.bind(signalNode),
    update: signalNode.update.bind(signalNode),
    mutate: signalNode.mutate.bind(signalNode),
    asReadonly: signalNode.asReadonly.bind(signalNode)
  });
  return signalFn;
}
function setPostSignalSetFn(fn) {
  const prev = postSignalSetFn;
  postSignalSetFn = fn;
  return prev;
}

/**
 * Execute an arbitrary function in a non-reactive (non-tracking) context. The executed function
 * can, optionally, return a value.
 *
 * @developerPreview
 */
function untracked(nonReactiveReadsFn) {
  const prevConsumer = setActiveConsumer(null);
  // We are not trying to catch any particular errors here, just making sure that the consumers
  // stack is restored in case of errors.
  try {
    return nonReactiveReadsFn();
  } finally {
    setActiveConsumer(prevConsumer);
  }
}
const NOOP_CLEANUP_FN = () => {};
/**
 * Watches a reactive expression and allows it to be scheduled to re-run
 * when any dependencies notify of a change.
 *
 * `Watch` doesn't run reactive expressions itself, but relies on a consumer-
 * provided scheduling operation to coordinate calling `Watch.run()`.
 */
class Watch extends ReactiveNode {
  constructor(watch, schedule, allowSignalWrites) {
    super();
    this.watch = watch;
    this.schedule = schedule;
    this.dirty = false;
    this.cleanupFn = NOOP_CLEANUP_FN;
    this.registerOnCleanup = cleanupFn => {
      this.cleanupFn = cleanupFn;
    };
    this.consumerAllowSignalWrites = allowSignalWrites;
  }
  notify() {
    if (!this.dirty) {
      this.schedule(this);
    }
    this.dirty = true;
  }
  onConsumerDependencyMayHaveChanged() {
    this.notify();
  }
  onProducerUpdateValueVersion() {
    // Watches are not producers.
  }
  /**
   * Execute the reactive expression in the context of this `Watch` consumer.
   *
   * Should be called by the user scheduling algorithm when the provided
   * `schedule` hook is called by `Watch`.
   */
  run() {
    this.dirty = false;
    if (this.trackingVersion !== 0 && !this.consumerPollProducersForChange()) {
      return;
    }
    const prevConsumer = setActiveConsumer(this);
    this.trackingVersion++;
    try {
      this.cleanupFn();
      this.cleanupFn = NOOP_CLEANUP_FN;
      this.watch(this.registerOnCleanup);
    } finally {
      setActiveConsumer(prevConsumer);
    }
  }
  cleanup() {
    this.cleanupFn();
  }
}
function toSignal(source, options) {
  const requiresCleanup = !options?.manualCleanup;
  requiresCleanup && !options?.injector && (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.assertInInjectionContext)(toSignal);
  const cleanupRef = requiresCleanup ? options?.injector?.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DestroyRef) ?? (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DestroyRef) : null;
  // Note: T is the Observable value type, and U is the initial value type. They don't have to be
  // the same - the returned signal gives values of type `T`.
  let state;
  if (options?.requireSync) {
    // Initially the signal is in a `NoValue` state.
    state = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)({
      kind: 0 /* StateKind.NoValue */
    });
  } else {
    // If an initial value was passed, use it. Otherwise, use `undefined` as the initial value.
    state = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)({
      kind: 1 /* StateKind.Value */,
      value: options?.initialValue
    });
  }
  const sub = source.subscribe({
    next: value => state.set({
      kind: 1 /* StateKind.Value */,
      value
    }),
    error: error => state.set({
      kind: 2 /* StateKind.Error */,
      error
    })
    // Completion of the Observable is meaningless to the signal. Signals don't have a concept of
    // "complete".
  });

  if (ngDevMode && options?.requireSync && untracked(state).kind === 0 /* StateKind.NoValue */) {
    throw new RuntimeError(601 /* RuntimeErrorCode.REQUIRE_SYNC_WITHOUT_SYNC_EMIT */, '`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.');
  }
  // Unsubscribe when the current context is destroyed, if requested.
  cleanupRef?.onDestroy(sub.unsubscribe.bind(sub));
  // The actual returned signal is a `computed` of the `State` signal, which maps the various states
  // to either values or errors.
  return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    const current = state();
    switch (current.kind) {
      case 1 /* StateKind.Value */:
        return current.value;
      case 2 /* StateKind.Error */:
        throw current.error;
      case 0 /* StateKind.NoValue */:
        // This shouldn't really happen because the error is thrown on creation.
        // TODO(alxhub): use a RuntimeError when we finalize the error semantics
        throw new RuntimeError(601 /* RuntimeErrorCode.REQUIRE_SYNC_WITHOUT_SYNC_EMIT */, '`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.');
    }
  });
}

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=default-src_app_services_product_service_ts.js.map