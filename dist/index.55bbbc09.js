// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"e4kc7":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "1b4f8d0c55bbbc09";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"6PhHv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _modelJs = require("./model.js");
var _farnellJs = require("./apis/farnell.js");
var _farnellJsDefault = parcelHelpers.interopDefault(_farnellJs);
var _mouserJs = require("./apis/mouser.js");
var _mouserJsDefault = parcelHelpers.interopDefault(_mouserJs);
var _digikeyJs = require("./apis/digikey.js");
var _digikeyJsDefault = parcelHelpers.interopDefault(_digikeyJs);
var _previewViewsJs = require("./views/previewViews.js");
var _previewViewsJsDefault = parcelHelpers.interopDefault(_previewViewsJs);
var _dropzoneViewsJs = require("./views/dropzoneViews.js");
var _dropzoneViewsJsDefault = parcelHelpers.interopDefault(_dropzoneViewsJs);
"use strict";
const controlPreview = async function() {
    try {
        _previewViewsJsDefault.default._clearPreview();
        _previewViewsJsDefault.default.renderSpinner();
        _previewViewsJsDefault.default.renderTitle();
        _previewViewsJsDefault.default.render(_modelJs.state.partNumber);
    } catch (err) {
        console.log(err);
    }
};
const controlPreviewReset = function() {
    try {
        _previewViewsJsDefault.default._clearPreview();
        _previewViewsJsDefault.default.resetTitle();
        _modelJs.emptyState();
        _previewViewsJsDefault.default.renderSpinner();
    } catch (err) {
        console.log(err);
    }
};
const controlDropzoneView = function() {
};
const controlFarnellApiCall = async function() {
    try {
        const componentState = _modelJs.state.componentInput;
        componentState.forEach(async function(component, id) {
            const componentId = component.id;
            const urlQuery = _farnellJsDefault.default.generateUrl(component);
            await _modelJs.searchComponent(componentId, urlQuery, _farnellJsDefault.default.name);
        });
    } catch (err) {
        console.error(err);
    }
};
const controlDigikeyApiCall = async function() {
    const componentState = _modelJs.state.partNumber;
    componentState.forEach(async function(component, id) {
        const urlQuery = _digikeyJsDefault.default._generateUrl(component.component);
        const dataHeader = _digikeyJsDefault.default._generateDataHeader();
        await _modelJs.searchComponent(id, urlQuery, _digikeyJsDefault.default.name, _digikeyJsDefault.default.key, dataHeader);
    });
};
const controlMouserApiCall = async function() {
    try {
        const componentState = _modelJs.state.componentInput;
        componentState.forEach(async function(component, id) {
            const componentId = id;
            const urlQuery = _mouserJsDefault.default.generateUrl().urlString;
            const dataHeader = _mouserJsDefault.default.generateDataHeader(component.component);
            await _modelJs.searchComponent(componentId, urlQuery, _mouserJsDefault.default.name, _mouserJsDefault.default.key, dataHeader);
        });
    } catch (err) {
        console.error(err);
    }
};
const init = function() {
    _previewViewsJsDefault.default._addHandlerRender(controlPreview);
    _previewViewsJsDefault.default._addHandlerReset(controlPreviewReset);
    _dropzoneViewsJsDefault.default._addHandlerDrop(controlDropzoneView);
    _dropzoneViewsJsDefault.default._addHandlerClick(controlDropzoneView);
    // FarnellObject._addHandlerCall(controlFarnellApiCall);
    // MouserObject._addHandlerCall(controlMouserApiCall);
    _digikeyJsDefault.default._addHandlerCall(controlDigikeyApiCall);
};
init();

},{"./model.js":"7it1B","./views/previewViews.js":"8NsZw","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc","./views/dropzoneViews.js":"4FrSs","./apis/farnell.js":"90MIM","./apis/mouser.js":"edqAX","./apis/digikey.js":"8NxwB"}],"7it1B":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state
);
parcelHelpers.export(exports, "searchComponent", ()=>searchComponent
);
parcelHelpers.export(exports, "emptyState", ()=>emptyState
);
var _helpersJs = require("./helpers.js");
var _eventHandlersJs = require("./eventHandlers.js");
"use strict";
const state = {
    partNumber: {
    },
    componentInput: {
    },
    componentOutput: {
        responses: []
    },
    fileItem: []
};
const searchComponent = async function(id, url, api, key, dataHeader) {
    try {
        const data = await _helpersJs.AJAX(url, api, key, dataHeader);
        state.componentOutput.responses.push({
            id: id,
            response: data
        });
    } catch (err) {
        console.error(err);
    }
};
const createArr = function(data) {
    // check the typeof input data and spread in an object
    let componentData;
    typeof data === "string" ? { ...componentData } = data.split("\n") : { ...componentData } = data;
    return componentData;
};
const loadState = async function(type, input) {
    return new Promise((resolve, reject)=>{
        try {
            const reader = new FileReader();
            if (type === "drop") {
                const data = state.fileItem[0];
                for(let i = 0; i < data.length; i++)if (data[i].kind === "file") {
                    const file = data[i].getAsFile();
                    reader.onload = async function(e) {
                        resolve(state.partNumber = createArr(e.target.result));
                        console.log(state.partNumber);
                    };
                    reader.readAsText(file);
                }
            }
            if (type === "submit") {
                reader.onload = async function(e) {
                    resolve(state.partNumber = createArr(e.target.result));
                };
                reader.readAsText(input.files[0]);
            }
        } catch (err) {
            console.log(err);
        }
    });
};
const emptyState = function() {
    try {
        state.partNumber = {
        };
    } catch (err) {
        console.log(err);
    }
};
_eventHandlersJs.dropZone.addEventListener("drop", handleDropImport, false);
async function handleDropImport(e) {
    try {
        e.preventDefault();
        if (!e.dataTransfer.items) return;
        state.fileItem.splice(0);
        state.fileItem.push(e.dataTransfer.items);
        await loadState("drop");
        _eventHandlersJs.queryPreview.classList.add("uploaded");
    } catch (err) {
        console.log(err);
    }
}
_eventHandlersJs.btnBrowseFile.addEventListener("change", handleFileImport, false);
async function handleFileImport(e) {
    try {
        e.preventDefault();
        await loadState("submit", this);
        _eventHandlersJs.queryPreview.classList.add("uploaded");
    } catch (err) {
        console.log(err);
    }
}
_eventHandlersJs.btnUnitarySubmit.addEventListener("click", handleUnitarySubmit, false);
async function handleUnitarySubmit() {
    if (!_eventHandlersJs.inputUnitarySubmit.value) return;
    const submittedData = await _eventHandlersJs.inputUnitarySubmit.value;
    _eventHandlersJs.inputUnitarySubmit.value = "";
    state.partNumber = createArr([
        submittedData
    ]);
    // await helpers.move();
    _eventHandlersJs.queryPreview.classList.add("uploaded");
}
[
    "dragover"
].forEach((eventName)=>{
    _eventHandlersJs.dropZone.addEventListener(eventName, _eventHandlersJs.highlight, false);
});
[
    "dragleave",
    "drop"
].forEach((eventName)=>{
    _eventHandlersJs.dropZone.addEventListener(eventName, _eventHandlersJs.unhighlight, false);
});
[
    "dragenter",
    "dragover",
    "dragleave",
    "drop"
].forEach((event)=>{
    window.addEventListener(event, preventDefaults, false);
});
function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.effectAllowed = "All";
}

},{"./helpers.js":"6JTPr","./eventHandlers.js":"jsxat","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"6JTPr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AJAX", ()=>AJAX
);
parcelHelpers.export(exports, "move", ()=>move
);
var _digikeyJs = require("./apis/digikey.js");
var _digikeyJsDefault = parcelHelpers.interopDefault(_digikeyJs);
const AJAX = async function(url, api, key, dataHeader) {
    try {
        if (api === "digikey") digikeyVerbose(url, api, dataHeader);
        if (api === "mouser") mouserVerbose(url, api, key, dataHeader);
        if (api === "farnell") farnellVerbose(url, api);
    } catch (err) {
        console.error(err);
    }
};
const mouserVerbose = async function(url, api, key, dataHeader) {
    try {
        if (!url || !api) return;
        const response = await fetch(url, {
            mode: "cors",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                apiKey: `${key}`
            },
            body: JSON.stringify(dataHeader)
        });
        const data = await response.json();
        data.api = api;
        return data;
    } catch (err) {
        throw err;
    }
};
const digikeyVerbose = async function(url, api, dataHeader) {
    try {
        if (!url || !api) return;
        const response = await fetch(url, {
            mode: "cors",
            method: "GET",
            headers: dataHeader
        });
        const data = await response.json();
        if (response.ok) console.log("Token all good!");
        if (!response.ok) {
            console.log(`Something's wrong... ${data.StatusCode} : ${data.ErrorMessage}`);
            data.ErrorMessage === "Bearer token  expired" && _digikeyJsDefault.default._refreshToken();
        }
    // data.api = api;
    // return data;
    } catch (err) {
        throw err;
    }
};
const farnellVerbose = async function(url, api) {
    try {
        if (!url || !api) return;
        const response = await fetch(url, {
            mode: "cors",
            method: "GET"
        });
        const data = await response.json();
        data.api = api;
    } catch (err) {
        console.error(err);
    }
};
const move = function() {
    return new Promise((res)=>{
        let i = 0;
        if (i == 0) {
            i = 1;
            const elem = document.getElementById("myBar");
            let width = 1;
            let id = setInterval(frame, 10);
            function frame() {
                if (width >= 100) {
                    clearInterval(id);
                    i = 0;
                } else {
                    width++;
                    elem.style.width = width + "%";
                }
            }
        }
        setTimeout(res, 1100);
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc","./apis/digikey.js":"8NxwB"}],"JacNc":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule') return;
        // Skip duplicate re-exports when they have the same value.
        if (key in dest && dest[key] === source[key]) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"8NxwB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _apiobjectJs = require("./apiobject.js");
var _apiobjectJsDefault = parcelHelpers.interopDefault(_apiobjectJs);
class DigikeyObject extends _apiobjectJsDefault.default {
    // https://api.digikey.com/v1/oauth2/authorize?response_type=code&client_id=qyjteGBFZGIAJyd2bzUhTUB8IWxvQVGb&redirect_uri=https%3A%2F%2Flocalhost%2F
    constructor(){
        super();
        this.name = "digikey";
        this.baseUrl = "https://api.digikey.com/Search/v3/Products/";
        this.code = "XGn3QQZv";
        this.clientId = "qyjteGBFZGIAJyd2bzUhTUB8IWxvQVGb";
        // this.clientId = "dHQAv0OoRxTrqGI62vwX3yo8elOIlDE3";
        // this.clientSecret = "Iy0j4Guh0fp1LGST";
        this.clientSecret = "Iy0j4Guh0fp1LGST";
        this.tokenUrl = "https://api.digikey.com/v1/oauth2/token";
        this.host = "api.digikey.com";
        this.grantType = "authorization_code";
        this.grantTypeR = "refresh_token";
        this.redirect = "https://localhost/";
        this.headerToken = {
            "Content-Type": "application/x-www-form-urlencoded"
        };
        this._currentStateToken = {
            _token: "LGD7z5HMW8thWwcBQg1vy4qGVqnF",
            _tokenR: "bJkTyf2kv780xBERa2OBjN2MifLCs39R"
        };
    }
    // _newStateToken = {
    //   _token: this._getLocalStorage()._latestToken,
    //   _tokenR: this._getLocalStorage()._latestTokenR,
    // };
    _getLocalStorage(item) {
        const data = localStorage.getItem(item);
        if (!data) return;
        return data;
    }
    _setLocalStorage(data) {
        localStorage.setItem("digikeyToken", data._token);
        localStorage.setItem("digikeyTokenRefresh", data._tokenR);
    }
    _generateUrl(part) {
        return `${this.baseUrl}${part}`;
    }
    _generateDataHeader() {
        this._setLocalStorage(this._currentStateToken);
        this._getLocalStorage("digikeyToken");
        const dataHeader = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this._currentStateToken._token}`,
            "X-DIGIKEY-Client-Id": this.clientId,
            "X-DIGIKEY-Locale-Site": "FR",
            "X-DIGIKEY-Locale-Currency": "EUR"
        };
        return dataHeader;
    }
    async _requestToken() {
        const response = await fetch(this.tokenUrl, {
            mode: "cors",
            method: "POST",
            headers: this.headerToken,
            body: new URLSearchParams({
                code: this.code,
                client_id: this.clientId,
                client_secret: this.clientSecret,
                redirect_uri: this.redirect,
                grant_type: this.grantType
            })
        });
        const data = await response.json();
        this._token = data.access_token;
        this._tokenR = data.refresh_token;
    }
    async _refreshToken() {
        console.log(`Fetching new access token using refresh token : ${this._getLocalStorage("digikeyTokenRefresh")}`);
        const response = await fetch(this.tokenUrl, {
            mode: "cors",
            method: "POST",
            headers: this.headerToken,
            body: new URLSearchParams({
                client_id: this.clientId,
                client_secret: this.clientSecret,
                grant_type: "refresh_token",
                refresh_token: this._getLocalStorage("digikeyTokenRefresh")
            })
        });
        const data = await response.json();
        console.log(`New access token retrieved`);
        this._currentStateToken._token = data.access_token;
        this._currentStateToken._tokenR = data.refresh_token;
        console.log(this._currentStateToken);
    }
    _addHandlerCall(handler) {
        this._btnCollect.addEventListener("click", handler, false);
    }
}
exports.default = new DigikeyObject();

},{"./apiobject.js":"8bE70","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"8bE70":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class apiObject {
    _data;
    _btnCollect = document.querySelector(".query-input-confirm");
    collectComponentState(data) {
        this._data = data;
    }
}
exports.default = apiObject;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"jsxat":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "dropZone", ()=>dropZone
);
parcelHelpers.export(exports, "queryPreview", ()=>queryPreview
);
parcelHelpers.export(exports, "btnUnitarySubmit", ()=>btnUnitarySubmit
);
parcelHelpers.export(exports, "inputUnitarySubmit", ()=>inputUnitarySubmit
);
parcelHelpers.export(exports, "btnBrowseFile", ()=>btnBrowseFile
);
parcelHelpers.export(exports, "highlight", ()=>highlight
);
parcelHelpers.export(exports, "unhighlight", ()=>unhighlight
);
"use strict";
const dropZone = document.querySelector("#drop_zone");
const queryPreview = document.querySelector(".query-input-preview");
const btnUnitarySubmit = document.querySelector(".btn-submit");
const inputUnitarySubmit = document.querySelector(".section-middle-input");
const btnBrowseFile = document.querySelector("#section-middle-getfile");
const highlight = function() {
    dropZone.classList.add("highlight");
};
const unhighlight = function() {
    dropZone.classList.remove("highlight");
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"8NsZw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
"use strict";
class previewViews extends _viewJsDefault.default {
    _parentElement = document.querySelector(".query-input-preview");
    _previewElement = document.querySelector(".section-middle-dropzone-output");
    _spinnerElement = document.querySelector(".loader-spinner");
    _titleElement = document.querySelector(".query-input-title");
    _btnReset = document.querySelector(".btn-reset");
    _previewString() {
        let resultString = "";
        const dataEntries = Object.entries(this._data);
        console.log(dataEntries);
        // for (const [, value] of dataEntries) {
        //   resultString += `${value.id}: ${value.component}<br>`;
        // }
        for (const [key, value] of dataEntries)resultString += `${key}: ${value}<br>`;
        return resultString;
    }
    _generateMarkup() {
        return `${this._previewString()}`;
    }
    _addHandlerRender(handler) {
        const options = {
            attributes: true,
            childList: true,
            subtree: true
        };
        const observer = new MutationObserver((mutations)=>mutations.forEach((mut)=>{
                if (mut.type === "attributes" && mut.attributeName === "class") handler();
            })
        );
        observer.observe(this._parentElement, options);
    }
    _addHandlerReset(handler) {
        this._btnReset.addEventListener("click", handler, false);
    }
}
exports.default = new previewViews();

},{"./view.js":"4pjpM","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"4pjpM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class View {
    _data;
    render(data) {
        this._data = data;
        const markup = this._generateMarkup();
        this._clearPreview();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    renderTitle() {
        this._titleElement.innerHTML = "Verify your components...";
    }
    resetTitle() {
        this._titleElement.innerHTML = "Add some components to search...";
    }
    renderSpinner() {
        const spinnerAnimation = `<div class="loader"></div>`;
        this._clearPreview();
        this._spinnerElement.insertAdjacentHTML("afterbegin", spinnerAnimation);
        setTimeout(()=>{
            this.clearSpinner();
        }, 100);
    }
    _clearPreview() {
        this._parentElement.innerHTML = "";
    }
    clearSpinner() {
        this._spinnerElement.innerHTML = "";
    }
}
exports.default = View;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"4FrSs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _eventHandlersJs = require("../eventHandlers.js");
var _helpersJs = require("../helpers.js");
class dropzoneView extends _viewJsDefault.default {
    _parentElement = document.querySelector(".section-middle-browse");
    _dropZone = document.querySelector(".dropzone");
    _btnUnitarySubmit = document.querySelector(".btn-submit");
    _btnBrowseFile = document.querySelector("#section-middle-getfile");
    //   _barId = document.getElementById("myBar");
    constructor(){
        super();
        this._ChildrenNodes = this._parentElement.childNodes;
    }
    resetProgressBar() {
        this._ChildrenNodes.forEach((child)=>{
            if (child.className === "my-progress") {
                child.style.opacity = 1;
                child.classList.remove("uploaded");
            }
        });
    }
    renderProgressBar() {
        this._ChildrenNodes.forEach((child)=>{
            if (child.className === "my-progress") child.classList.add("uploaded");
        });
    }
    _addHandlerDrop(handler) {
        this._dropZone.addEventListener("drop", handler, false);
    }
    _addHandlerClick(handler) {
        this._btnUnitarySubmit.addEventListener("click", handler, false);
    }
    _addHandlerClick(handler) {
        this._btnBrowseFile.addEventListener("change", handler, false);
    }
}
exports.default = new dropzoneView();

},{"./view.js":"4pjpM","../eventHandlers.js":"jsxat","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc","../helpers.js":"6JTPr"}],"90MIM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _apiobjectJs = require("./apiobject.js");
var _apiobjectJsDefault = parcelHelpers.interopDefault(_apiobjectJs);
"use strict";
class FarnellObject extends _apiobjectJsDefault.default {
    constructor(){
        super();
        this.name = "farnell";
        this.baseUrl = "https://api.element14.com//catalog/products?versionNumber=1.2/";
        this.key = "u9u3k9nfnheej5pehb5geb4j";
        this.formatting = "json";
        this.groupSize = "large";
        this.field = `any`;
        this.offset = 0;
        this.results = 5;
        this.store = `fr.farnell.com`;
        this._state = {
            formattingUrl: `&callInfo.responseDataFormat=${this.formatting}`,
            termUrl: `&term=${this.field}%3A$`,
            storeUrl: `&storeInfo.id=${this.store}`,
            keyUrl: `&callInfo.apiKey=${this.key}`,
            offsetUrl: `&resultsSettings.offset=${this.offset}`,
            resultUrl: `&resultsSettings.numberOfResults=${this.results}`,
            responseGroupUrl: `resultsSettings.responseGroup=${this.groupSize}\n      `
        };
    }
    generateUrl(part) {
        return `${this.baseUrl}${this._state.formattingUrl}${this._state.termUrl}${part}${this._state.storeUrl}${this._state.keyUrl}${this._state.offsetUrl}${this._state.resultUrl}${this._state.resultUrl}${this._state.responseGroupUrl}`;
    }
    _addHandlerCall(handler) {
        this._btnCollect.addEventListener("click", handler, false);
    }
}
exports.default = new FarnellObject();

},{"./apiobject.js":"8bE70","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"edqAX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _apiobjectJs = require("./apiobject.js");
var _apiobjectJsDefault = parcelHelpers.interopDefault(_apiobjectJs);
class MouserObject extends _apiobjectJsDefault.default {
    constructor(){
        super();
        this.baseUrl = "https://api.mouser.com/api/v1/search/keyword";
        this.key = "c122f867-faa9-4c89-94b8-71c5f78a3f41";
        this.name = "mouser";
        this.dataHeader = {
            SearchByKeywordRequest: {
                keyword: "",
                Records: 1
            }
        };
    }
    generateUrl() {
        const urlParams = {
            urlString: `${this.baseUrl}?apiKey=${this.key}`
        };
        return urlParams;
    }
    generateDataHeader(part) {
        this.dataHeader.SearchByKeywordRequest.keyword = part;
        return this.dataHeader;
    }
    _addHandlerCall(handler) {
        this._btnCollect.addEventListener("click", handler, false);
    }
}
exports.default = new MouserObject();

},{"./apiobject.js":"8bE70","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}]},["e4kc7","6PhHv"], "6PhHv", "parcelRequire29ed")

//# sourceMappingURL=index.55bbbc09.js.map
