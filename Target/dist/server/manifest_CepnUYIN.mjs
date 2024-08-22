import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import './chunks/astro-designed-error-pages_DnHgKM4C.mjs';
import { i as decodeKey } from './chunks/astro/server_CUP-g7Rg.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///D:/Developer/Application/PlayForm/NPM/Deploy/","adapterName":"@astrojs/deno","routes":[{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.RuxDLo8Z.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"../../../../node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.RuxDLo8Z.js"}],"styles":[{"type":"external","src":"/_astro/index.Pa49pp0M.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"Source/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"HTTPS://playform-deno-deploy.deno.dev","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:../../../../node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:Source/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_CepnUYIN.mjs","D:/Developer/Application/PlayForm/NPM/Deploy/Source/Layout/Base.astro?astro&type=script&index=0&lang.ts":"_astro/Base.astro_astro_type_script_index_0_lang.CCQPt6x2.js","D:/Developer/node_modules/@swup/scroll-plugin/dist/index.modern.js":"_astro/index.modern.CiCz6VZW.js","D:/Developer/node_modules/@swup/overlay-theme/dist/index.modern.js":"_astro/index.modern.DpLP8u1C.js","D:/Developer/node_modules/@swup/head-plugin/dist/index.modern.js":"_astro/index.modern.FjGODCox.js","D:/Developer/Application/PlayForm/NPM/Deploy/Source/Layout/Base.astro?astro&type=script&index=2&lang.ts":"_astro/Base.astro_astro_type_script_index_2_lang.D4DYKVOQ.js","D:/Developer/node_modules/@swup/body-class-plugin/dist/index.modern.js":"_astro/index.modern.aa8fLSdp.js","astro:scripts/page.js":"_astro/page.RuxDLo8Z.js","D:/Developer/node_modules/@swup/preload-plugin/dist/index.modern.js":"_astro/index.modern.Dzx6rguv.js","D:/Developer/node_modules/firebase/app/dist/esm/index.esm.js":"_astro/index.esm.WPJ9Gp6O.js","D:/Developer/node_modules/astro/components/ViewTransitions.astro?astro&type=script&index=0&lang.ts":"_astro/ViewTransitions.astro_astro_type_script_index_0_lang.DSSDe5pU.js","D:/Developer/Application/PlayForm/NPM/Deploy/Source/Layout/Base.astro?astro&type=script&index=1&lang.ts":"_astro/Base.astro_astro_type_script_index_1_lang.CP2le5wW.js","D:/Developer/node_modules/swup/dist/Swup.modern.js":"_astro/Swup.modern.UA9jlYbO.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["D:/Developer/Application/PlayForm/NPM/Deploy/Source/Layout/Base.astro?astro&type=script&index=2&lang.ts","document.documentElement.classList.remove(\"no-js\");document.documentElement.classList.add(\"js\");\n//# sourceMappingURL=Base.astro_astro_type_script_index_2_lang.D4DYKVOQ.js.map"]],"assets":["/_astro/index.Pa49pp0M.css","/chunks/astro_P21CiyL-.mjs.map","/chunks/astro/assets-service_D5GDj1qD.mjs.map","/chunks/astro/server_CUP-g7Rg.mjs.map","/manifest_CepnUYIN.mjs.map","/chunks/_@astrojs-ssr-adapter_CGtjnNd4.mjs.map","/chunks/astro-designed-error-pages_DnHgKM4C.mjs.map","/pages/_image.astro.mjs.map","/pages/index.astro.mjs.map","/entry.mjs.map","/_noop-middleware.mjs.map","/renderers.mjs.map","/_@astrojs-ssr-adapter.mjs.map","/robots.txt","/site.webmanifest","/_astro/Base.astro_astro_type_script_index_0_lang.CCQPt6x2.js","/_astro/Base.astro_astro_type_script_index_0_lang.CCQPt6x2.js.map","/_astro/Base.astro_astro_type_script_index_1_lang.CP2le5wW.js","/_astro/Base.astro_astro_type_script_index_1_lang.CP2le5wW.js.map","/_astro/Base.astro_astro_type_script_index_2_lang.D4DYKVOQ.js.map","/_astro/index.D6rU_tt3.js","/_astro/index.D6rU_tt3.js.map","/_astro/index.esm.WPJ9Gp6O.js","/_astro/index.esm.WPJ9Gp6O.js.map","/_astro/index.modern.aa8fLSdp.js","/_astro/index.modern.aa8fLSdp.js.map","/_astro/index.modern.CiCz6VZW.js","/_astro/index.modern.CiCz6VZW.js.map","/_astro/index.modern.CkIAsQri.js","/_astro/index.modern.CkIAsQri.js.map","/_astro/index.modern.DpLP8u1C.js","/_astro/index.modern.DpLP8u1C.js.map","/_astro/index.modern.Dzx6rguv.js","/_astro/index.modern.Dzx6rguv.js.map","/_astro/index.modern.FjGODCox.js","/_astro/index.modern.FjGODCox.js.map","/_astro/page.RuxDLo8Z.js","/_astro/page.RuxDLo8Z.js.map","/_astro/preload-helper.BiBI96sQ.js","/_astro/preload-helper.BiBI96sQ.js.map","/_astro/Swup.modern.UA9jlYbO.js","/_astro/Swup.modern.UA9jlYbO.js.map","/_astro/ViewTransitions.astro_astro_type_script_index_0_lang.DSSDe5pU.js","/_astro/ViewTransitions.astro_astro_type_script_index_0_lang.DSSDe5pU.js.map","/_astro/page.RuxDLo8Z.js"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"9WV8M3jpWAnkWt6hvG3ID0fWl0MBf1ufi3QjAJp5O6g=","experimentalEnvGetSecretEnabled":false});

export { manifest };
//# sourceMappingURL=manifest_CepnUYIN.mjs.map
