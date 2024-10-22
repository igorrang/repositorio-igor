"use strict";
(() => {
var exports = {};
exports.id = 164;
exports.ids = [164];
exports.modules = {

/***/ 852:
/***/ ((module) => {

module.exports = require("async_hooks");

/***/ }),

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 2781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 3837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 9949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./src/app/api/send/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  GET: () => (GET),
  POST: () => (POST)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(2394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9692);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(9513);
// EXTERNAL MODULE: ./node_modules/resend/build/src/index.js
var src = __webpack_require__(4975);
;// CONCATENATED MODULE: ./src/app/api/send/route.js
// /pages/api/send.js

const resend = new src/* Resend */.R(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
async function POST(req) {
    const { email, subject, message } = await req.json();
    try {
        const data = await resend.emails.send({
            from: fromEmail,
            to: [
                fromEmail,
                email
            ],
            subject: subject,
            text: `Subject: ${subject}\n\nThank you for contacting us!\n\nNew message submitted:\n\n${message}`
        });
        res.status(200).json(data);
    } catch (error) {
        req.status(500).json({
            error: error.message
        });
    }
}
function GET(req) {
    req.status(405).json({
        error: "Method not allowed"
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fsend%2Froute&name=app%2Fapi%2Fsend%2Froute&pagePath=private-next-app-dir%2Fapi%2Fsend%2Froute.js&appDir=%2FUsers%2Figorrangelkonvictus%2FDocuments%2FGitHub%2Fthenextdev-landingpage%2FSem%20Ti%CC%81tulo%2Fsrc%2Frepositorio-igor%2Fsrc%2Fapp&appPaths=%2Fapi%2Fsend%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/send/route",
        pathname: "/api/send",
        filename: "route",
        bundlePath: "app/api/send/route"
    },
    resolvedPagePath: "/Users/igorrangelkonvictus/Documents/GitHub/thenextdev-landingpage/Sem Título/src/repositorio-igor/src/app/api/send/route.js",
    nextConfigOutput,
    userland: route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/api/send/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [587,501,60,975], () => (__webpack_exec__(9949)));
module.exports = __webpack_exports__;

})();