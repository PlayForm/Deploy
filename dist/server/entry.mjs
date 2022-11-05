globalThis.process = {
	argv: [],
	env: Deno.env.toObject(),
};
// dist/server/entry.mjs
import { Server } from "https://deno.land/std@0.132.0/http/server.ts";
import { fetch } from "https://deno.land/x/file_fetch/mod.ts";
function Mime$1() {
  this._types = /* @__PURE__ */ Object.create(null), this._extensions = /* @__PURE__ */ Object.create(null);
  for (let e = 0; e < arguments.length; e++)
    this.define(arguments[e]);
  this.define = this.define.bind(this), this.getType = this.getType.bind(this), this.getExtension = this.getExtension.bind(this);
}
Mime$1.prototype.define = function(e, t) {
  for (let n in e) {
    let a = e[n].map(function(e2) {
      return e2.toLowerCase();
    });
    n = n.toLowerCase();
    for (let e2 = 0; e2 < a.length; e2++) {
      const i = a[e2];
      if ("*" !== i[0]) {
        if (!t && i in this._types)
          throw new Error('Attempt to change mapping for "' + i + '" extension from "' + this._types[i] + '" to "' + n + '". Pass `force=true` to allow this, otherwise remove "' + i + '" from the list of extensions for "' + n + '".');
        this._types[i] = n;
      }
    }
    if (t || !this._extensions[n]) {
      const e2 = a[0];
      this._extensions[n] = "*" !== e2[0] ? e2 : e2.substr(1);
    }
  }
}, Mime$1.prototype.getType = function(e) {
  let t = (e = String(e)).replace(/^.*[/\\]/, "").toLowerCase(), n = t.replace(/^.*\./, "").toLowerCase(), a = t.length < e.length;
  return (n.length < t.length - 1 || !a) && this._types[n] || null;
}, Mime$1.prototype.getExtension = function(e) {
  return (e = /^\s*([^;\s]*)/.test(e) && RegExp.$1) && this._extensions[e.toLowerCase()] || null;
};
var Mime_1 = Mime$1;
var standard = { "application/andrew-inset": ["ez"], "application/applixware": ["aw"], "application/atom+xml": ["atom"], "application/atomcat+xml": ["atomcat"], "application/atomdeleted+xml": ["atomdeleted"], "application/atomsvc+xml": ["atomsvc"], "application/atsc-dwd+xml": ["dwd"], "application/atsc-held+xml": ["held"], "application/atsc-rsat+xml": ["rsat"], "application/bdoc": ["bdoc"], "application/calendar+xml": ["xcs"], "application/ccxml+xml": ["ccxml"], "application/cdfx+xml": ["cdfx"], "application/cdmi-capability": ["cdmia"], "application/cdmi-container": ["cdmic"], "application/cdmi-domain": ["cdmid"], "application/cdmi-object": ["cdmio"], "application/cdmi-queue": ["cdmiq"], "application/cu-seeme": ["cu"], "application/dash+xml": ["mpd"], "application/davmount+xml": ["davmount"], "application/docbook+xml": ["dbk"], "application/dssc+der": ["dssc"], "application/dssc+xml": ["xdssc"], "application/ecmascript": ["es", "ecma"], "application/emma+xml": ["emma"], "application/emotionml+xml": ["emotionml"], "application/epub+zip": ["epub"], "application/exi": ["exi"], "application/express": ["exp"], "application/fdt+xml": ["fdt"], "application/font-tdpfr": ["pfr"], "application/geo+json": ["geojson"], "application/gml+xml": ["gml"], "application/gpx+xml": ["gpx"], "application/gxf": ["gxf"], "application/gzip": ["gz"], "application/hjson": ["hjson"], "application/hyperstudio": ["stk"], "application/inkml+xml": ["ink", "inkml"], "application/ipfix": ["ipfix"], "application/its+xml": ["its"], "application/java-archive": ["jar", "war", "ear"], "application/java-serialized-object": ["ser"], "application/java-vm": ["class"], "application/javascript": ["js", "mjs"], "application/json": ["json", "map"], "application/json5": ["json5"], "application/jsonml+json": ["jsonml"], "application/ld+json": ["jsonld"], "application/lgr+xml": ["lgr"], "application/lost+xml": ["lostxml"], "application/mac-binhex40": ["hqx"], "application/mac-compactpro": ["cpt"], "application/mads+xml": ["mads"], "application/manifest+json": ["webmanifest"], "application/marc": ["mrc"], "application/marcxml+xml": ["mrcx"], "application/mathematica": ["ma", "nb", "mb"], "application/mathml+xml": ["mathml"], "application/mbox": ["mbox"], "application/mediaservercontrol+xml": ["mscml"], "application/metalink+xml": ["metalink"], "application/metalink4+xml": ["meta4"], "application/mets+xml": ["mets"], "application/mmt-aei+xml": ["maei"], "application/mmt-usd+xml": ["musd"], "application/mods+xml": ["mods"], "application/mp21": ["m21", "mp21"], "application/mp4": ["mp4s", "m4p"], "application/msword": ["doc", "dot"], "application/mxf": ["mxf"], "application/n-quads": ["nq"], "application/n-triples": ["nt"], "application/node": ["cjs"], "application/octet-stream": ["bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "img", "msi", "msp", "msm", "buffer"], "application/oda": ["oda"], "application/oebps-package+xml": ["opf"], "application/ogg": ["ogx"], "application/omdoc+xml": ["omdoc"], "application/onenote": ["onetoc", "onetoc2", "onetmp", "onepkg"], "application/oxps": ["oxps"], "application/p2p-overlay+xml": ["relo"], "application/patch-ops-error+xml": ["xer"], "application/pdf": ["pdf"], "application/pgp-encrypted": ["pgp"], "application/pgp-signature": ["asc", "sig"], "application/pics-rules": ["prf"], "application/pkcs10": ["p10"], "application/pkcs7-mime": ["p7m", "p7c"], "application/pkcs7-signature": ["p7s"], "application/pkcs8": ["p8"], "application/pkix-attr-cert": ["ac"], "application/pkix-cert": ["cer"], "application/pkix-crl": ["crl"], "application/pkix-pkipath": ["pkipath"], "application/pkixcmp": ["pki"], "application/pls+xml": ["pls"], "application/postscript": ["ai", "eps", "ps"], "application/provenance+xml": ["provx"], "application/pskc+xml": ["pskcxml"], "application/raml+yaml": ["raml"], "application/rdf+xml": ["rdf", "owl"], "application/reginfo+xml": ["rif"], "application/relax-ng-compact-syntax": ["rnc"], "application/resource-lists+xml": ["rl"], "application/resource-lists-diff+xml": ["rld"], "application/rls-services+xml": ["rs"], "application/route-apd+xml": ["rapd"], "application/route-s-tsid+xml": ["sls"], "application/route-usd+xml": ["rusd"], "application/rpki-ghostbusters": ["gbr"], "application/rpki-manifest": ["mft"], "application/rpki-roa": ["roa"], "application/rsd+xml": ["rsd"], "application/rss+xml": ["rss"], "application/rtf": ["rtf"], "application/sbml+xml": ["sbml"], "application/scvp-cv-request": ["scq"], "application/scvp-cv-response": ["scs"], "application/scvp-vp-request": ["spq"], "application/scvp-vp-response": ["spp"], "application/sdp": ["sdp"], "application/senml+xml": ["senmlx"], "application/sensml+xml": ["sensmlx"], "application/set-payment-initiation": ["setpay"], "application/set-registration-initiation": ["setreg"], "application/shf+xml": ["shf"], "application/sieve": ["siv", "sieve"], "application/smil+xml": ["smi", "smil"], "application/sparql-query": ["rq"], "application/sparql-results+xml": ["srx"], "application/srgs": ["gram"], "application/srgs+xml": ["grxml"], "application/sru+xml": ["sru"], "application/ssdl+xml": ["ssdl"], "application/ssml+xml": ["ssml"], "application/swid+xml": ["swidtag"], "application/tei+xml": ["tei", "teicorpus"], "application/thraud+xml": ["tfi"], "application/timestamped-data": ["tsd"], "application/toml": ["toml"], "application/trig": ["trig"], "application/ttml+xml": ["ttml"], "application/ubjson": ["ubj"], "application/urc-ressheet+xml": ["rsheet"], "application/urc-targetdesc+xml": ["td"], "application/voicexml+xml": ["vxml"], "application/wasm": ["wasm"], "application/widget": ["wgt"], "application/winhlp": ["hlp"], "application/wsdl+xml": ["wsdl"], "application/wspolicy+xml": ["wspolicy"], "application/xaml+xml": ["xaml"], "application/xcap-att+xml": ["xav"], "application/xcap-caps+xml": ["xca"], "application/xcap-diff+xml": ["xdf"], "application/xcap-el+xml": ["xel"], "application/xcap-ns+xml": ["xns"], "application/xenc+xml": ["xenc"], "application/xhtml+xml": ["xhtml", "xht"], "application/xliff+xml": ["xlf"], "application/xml": ["xml", "xsl", "xsd", "rng"], "application/xml-dtd": ["dtd"], "application/xop+xml": ["xop"], "application/xproc+xml": ["xpl"], "application/xslt+xml": ["*xsl", "xslt"], "application/xspf+xml": ["xspf"], "application/xv+xml": ["mxml", "xhvml", "xvml", "xvm"], "application/yang": ["yang"], "application/yin+xml": ["yin"], "application/zip": ["zip"], "audio/3gpp": ["*3gpp"], "audio/adpcm": ["adp"], "audio/amr": ["amr"], "audio/basic": ["au", "snd"], "audio/midi": ["mid", "midi", "kar", "rmi"], "audio/mobile-xmf": ["mxmf"], "audio/mp3": ["*mp3"], "audio/mp4": ["m4a", "mp4a"], "audio/mpeg": ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"], "audio/ogg": ["oga", "ogg", "spx", "opus"], "audio/s3m": ["s3m"], "audio/silk": ["sil"], "audio/wav": ["wav"], "audio/wave": ["*wav"], "audio/webm": ["weba"], "audio/xm": ["xm"], "font/collection": ["ttc"], "font/otf": ["otf"], "font/ttf": ["ttf"], "font/woff": ["woff"], "font/woff2": ["woff2"], "image/aces": ["exr"], "image/apng": ["apng"], "image/avif": ["avif"], "image/bmp": ["bmp"], "image/cgm": ["cgm"], "image/dicom-rle": ["drle"], "image/emf": ["emf"], "image/fits": ["fits"], "image/g3fax": ["g3"], "image/gif": ["gif"], "image/heic": ["heic"], "image/heic-sequence": ["heics"], "image/heif": ["heif"], "image/heif-sequence": ["heifs"], "image/hej2k": ["hej2"], "image/hsj2": ["hsj2"], "image/ief": ["ief"], "image/jls": ["jls"], "image/jp2": ["jp2", "jpg2"], "image/jpeg": ["jpeg", "jpg", "jpe"], "image/jph": ["jph"], "image/jphc": ["jhc"], "image/jpm": ["jpm"], "image/jpx": ["jpx", "jpf"], "image/jxr": ["jxr"], "image/jxra": ["jxra"], "image/jxrs": ["jxrs"], "image/jxs": ["jxs"], "image/jxsc": ["jxsc"], "image/jxsi": ["jxsi"], "image/jxss": ["jxss"], "image/ktx": ["ktx"], "image/ktx2": ["ktx2"], "image/png": ["png"], "image/sgi": ["sgi"], "image/svg+xml": ["svg", "svgz"], "image/t38": ["t38"], "image/tiff": ["tif", "tiff"], "image/tiff-fx": ["tfx"], "image/webp": ["webp"], "image/wmf": ["wmf"], "message/disposition-notification": ["disposition-notification"], "message/global": ["u8msg"], "message/global-delivery-status": ["u8dsn"], "message/global-disposition-notification": ["u8mdn"], "message/global-headers": ["u8hdr"], "message/rfc822": ["eml", "mime"], "model/3mf": ["3mf"], "model/gltf+json": ["gltf"], "model/gltf-binary": ["glb"], "model/iges": ["igs", "iges"], "model/mesh": ["msh", "mesh", "silo"], "model/mtl": ["mtl"], "model/obj": ["obj"], "model/step+xml": ["stpx"], "model/step+zip": ["stpz"], "model/step-xml+zip": ["stpxz"], "model/stl": ["stl"], "model/vrml": ["wrl", "vrml"], "model/x3d+binary": ["*x3db", "x3dbz"], "model/x3d+fastinfoset": ["x3db"], "model/x3d+vrml": ["*x3dv", "x3dvz"], "model/x3d+xml": ["x3d", "x3dz"], "model/x3d-vrml": ["x3dv"], "text/cache-manifest": ["appcache", "manifest"], "text/calendar": ["ics", "ifb"], "text/coffeescript": ["coffee", "litcoffee"], "text/css": ["css"], "text/csv": ["csv"], "text/html": ["html", "htm", "shtml"], "text/jade": ["jade"], "text/jsx": ["jsx"], "text/less": ["less"], "text/markdown": ["markdown", "md"], "text/mathml": ["mml"], "text/mdx": ["mdx"], "text/n3": ["n3"], "text/plain": ["txt", "text", "conf", "def", "list", "log", "in", "ini"], "text/richtext": ["rtx"], "text/rtf": ["*rtf"], "text/sgml": ["sgml", "sgm"], "text/shex": ["shex"], "text/slim": ["slim", "slm"], "text/spdx": ["spdx"], "text/stylus": ["stylus", "styl"], "text/tab-separated-values": ["tsv"], "text/troff": ["t", "tr", "roff", "man", "me", "ms"], "text/turtle": ["ttl"], "text/uri-list": ["uri", "uris", "urls"], "text/vcard": ["vcard"], "text/vtt": ["vtt"], "text/xml": ["*xml"], "text/yaml": ["yaml", "yml"], "video/3gpp": ["3gp", "3gpp"], "video/3gpp2": ["3g2"], "video/h261": ["h261"], "video/h263": ["h263"], "video/h264": ["h264"], "video/iso.segment": ["m4s"], "video/jpeg": ["jpgv"], "video/jpm": ["*jpm", "jpgm"], "video/mj2": ["mj2", "mjp2"], "video/mp2t": ["ts"], "video/mp4": ["mp4", "mp4v", "mpg4"], "video/mpeg": ["mpeg", "mpg", "mpe", "m1v", "m2v"], "video/ogg": ["ogv"], "video/quicktime": ["qt", "mov"], "video/webm": ["webm"] };
var other = { "application/prs.cww": ["cww"], "application/vnd.1000minds.decision-model+xml": ["1km"], "application/vnd.3gpp.pic-bw-large": ["plb"], "application/vnd.3gpp.pic-bw-small": ["psb"], "application/vnd.3gpp.pic-bw-var": ["pvb"], "application/vnd.3gpp2.tcap": ["tcap"], "application/vnd.3m.post-it-notes": ["pwn"], "application/vnd.accpac.simply.aso": ["aso"], "application/vnd.accpac.simply.imp": ["imp"], "application/vnd.acucobol": ["acu"], "application/vnd.acucorp": ["atc", "acutc"], "application/vnd.adobe.air-application-installer-package+zip": ["air"], "application/vnd.adobe.formscentral.fcdt": ["fcdt"], "application/vnd.adobe.fxp": ["fxp", "fxpl"], "application/vnd.adobe.xdp+xml": ["xdp"], "application/vnd.adobe.xfdf": ["xfdf"], "application/vnd.ahead.space": ["ahead"], "application/vnd.airzip.filesecure.azf": ["azf"], "application/vnd.airzip.filesecure.azs": ["azs"], "application/vnd.amazon.ebook": ["azw"], "application/vnd.americandynamics.acc": ["acc"], "application/vnd.amiga.ami": ["ami"], "application/vnd.android.package-archive": ["apk"], "application/vnd.anser-web-certificate-issue-initiation": ["cii"], "application/vnd.anser-web-funds-transfer-initiation": ["fti"], "application/vnd.antix.game-component": ["atx"], "application/vnd.apple.installer+xml": ["mpkg"], "application/vnd.apple.keynote": ["key"], "application/vnd.apple.mpegurl": ["m3u8"], "application/vnd.apple.numbers": ["numbers"], "application/vnd.apple.pages": ["pages"], "application/vnd.apple.pkpass": ["pkpass"], "application/vnd.aristanetworks.swi": ["swi"], "application/vnd.astraea-software.iota": ["iota"], "application/vnd.audiograph": ["aep"], "application/vnd.balsamiq.bmml+xml": ["bmml"], "application/vnd.blueice.multipass": ["mpm"], "application/vnd.bmi": ["bmi"], "application/vnd.businessobjects": ["rep"], "application/vnd.chemdraw+xml": ["cdxml"], "application/vnd.chipnuts.karaoke-mmd": ["mmd"], "application/vnd.cinderella": ["cdy"], "application/vnd.citationstyles.style+xml": ["csl"], "application/vnd.claymore": ["cla"], "application/vnd.cloanto.rp9": ["rp9"], "application/vnd.clonk.c4group": ["c4g", "c4d", "c4f", "c4p", "c4u"], "application/vnd.cluetrust.cartomobile-config": ["c11amc"], "application/vnd.cluetrust.cartomobile-config-pkg": ["c11amz"], "application/vnd.commonspace": ["csp"], "application/vnd.contact.cmsg": ["cdbcmsg"], "application/vnd.cosmocaller": ["cmc"], "application/vnd.crick.clicker": ["clkx"], "application/vnd.crick.clicker.keyboard": ["clkk"], "application/vnd.crick.clicker.palette": ["clkp"], "application/vnd.crick.clicker.template": ["clkt"], "application/vnd.crick.clicker.wordbank": ["clkw"], "application/vnd.criticaltools.wbs+xml": ["wbs"], "application/vnd.ctc-posml": ["pml"], "application/vnd.cups-ppd": ["ppd"], "application/vnd.curl.car": ["car"], "application/vnd.curl.pcurl": ["pcurl"], "application/vnd.dart": ["dart"], "application/vnd.data-vision.rdz": ["rdz"], "application/vnd.dbf": ["dbf"], "application/vnd.dece.data": ["uvf", "uvvf", "uvd", "uvvd"], "application/vnd.dece.ttml+xml": ["uvt", "uvvt"], "application/vnd.dece.unspecified": ["uvx", "uvvx"], "application/vnd.dece.zip": ["uvz", "uvvz"], "application/vnd.denovo.fcselayout-link": ["fe_launch"], "application/vnd.dna": ["dna"], "application/vnd.dolby.mlp": ["mlp"], "application/vnd.dpgraph": ["dpg"], "application/vnd.dreamfactory": ["dfac"], "application/vnd.ds-keypoint": ["kpxx"], "application/vnd.dvb.ait": ["ait"], "application/vnd.dvb.service": ["svc"], "application/vnd.dynageo": ["geo"], "application/vnd.ecowin.chart": ["mag"], "application/vnd.enliven": ["nml"], "application/vnd.epson.esf": ["esf"], "application/vnd.epson.msf": ["msf"], "application/vnd.epson.quickanime": ["qam"], "application/vnd.epson.salt": ["slt"], "application/vnd.epson.ssf": ["ssf"], "application/vnd.eszigno3+xml": ["es3", "et3"], "application/vnd.ezpix-album": ["ez2"], "application/vnd.ezpix-package": ["ez3"], "application/vnd.fdf": ["fdf"], "application/vnd.fdsn.mseed": ["mseed"], "application/vnd.fdsn.seed": ["seed", "dataless"], "application/vnd.flographit": ["gph"], "application/vnd.fluxtime.clip": ["ftc"], "application/vnd.framemaker": ["fm", "frame", "maker", "book"], "application/vnd.frogans.fnc": ["fnc"], "application/vnd.frogans.ltf": ["ltf"], "application/vnd.fsc.weblaunch": ["fsc"], "application/vnd.fujitsu.oasys": ["oas"], "application/vnd.fujitsu.oasys2": ["oa2"], "application/vnd.fujitsu.oasys3": ["oa3"], "application/vnd.fujitsu.oasysgp": ["fg5"], "application/vnd.fujitsu.oasysprs": ["bh2"], "application/vnd.fujixerox.ddd": ["ddd"], "application/vnd.fujixerox.docuworks": ["xdw"], "application/vnd.fujixerox.docuworks.binder": ["xbd"], "application/vnd.fuzzysheet": ["fzs"], "application/vnd.genomatix.tuxedo": ["txd"], "application/vnd.geogebra.file": ["ggb"], "application/vnd.geogebra.tool": ["ggt"], "application/vnd.geometry-explorer": ["gex", "gre"], "application/vnd.geonext": ["gxt"], "application/vnd.geoplan": ["g2w"], "application/vnd.geospace": ["g3w"], "application/vnd.gmx": ["gmx"], "application/vnd.google-apps.document": ["gdoc"], "application/vnd.google-apps.presentation": ["gslides"], "application/vnd.google-apps.spreadsheet": ["gsheet"], "application/vnd.google-earth.kml+xml": ["kml"], "application/vnd.google-earth.kmz": ["kmz"], "application/vnd.grafeq": ["gqf", "gqs"], "application/vnd.groove-account": ["gac"], "application/vnd.groove-help": ["ghf"], "application/vnd.groove-identity-message": ["gim"], "application/vnd.groove-injector": ["grv"], "application/vnd.groove-tool-message": ["gtm"], "application/vnd.groove-tool-template": ["tpl"], "application/vnd.groove-vcard": ["vcg"], "application/vnd.hal+xml": ["hal"], "application/vnd.handheld-entertainment+xml": ["zmm"], "application/vnd.hbci": ["hbci"], "application/vnd.hhe.lesson-player": ["les"], "application/vnd.hp-hpgl": ["hpgl"], "application/vnd.hp-hpid": ["hpid"], "application/vnd.hp-hps": ["hps"], "application/vnd.hp-jlyt": ["jlt"], "application/vnd.hp-pcl": ["pcl"], "application/vnd.hp-pclxl": ["pclxl"], "application/vnd.hydrostatix.sof-data": ["sfd-hdstx"], "application/vnd.ibm.minipay": ["mpy"], "application/vnd.ibm.modcap": ["afp", "listafp", "list3820"], "application/vnd.ibm.rights-management": ["irm"], "application/vnd.ibm.secure-container": ["sc"], "application/vnd.iccprofile": ["icc", "icm"], "application/vnd.igloader": ["igl"], "application/vnd.immervision-ivp": ["ivp"], "application/vnd.immervision-ivu": ["ivu"], "application/vnd.insors.igm": ["igm"], "application/vnd.intercon.formnet": ["xpw", "xpx"], "application/vnd.intergeo": ["i2g"], "application/vnd.intu.qbo": ["qbo"], "application/vnd.intu.qfx": ["qfx"], "application/vnd.ipunplugged.rcprofile": ["rcprofile"], "application/vnd.irepository.package+xml": ["irp"], "application/vnd.is-xpr": ["xpr"], "application/vnd.isac.fcs": ["fcs"], "application/vnd.jam": ["jam"], "application/vnd.jcp.javame.midlet-rms": ["rms"], "application/vnd.jisp": ["jisp"], "application/vnd.joost.joda-archive": ["joda"], "application/vnd.kahootz": ["ktz", "ktr"], "application/vnd.kde.karbon": ["karbon"], "application/vnd.kde.kchart": ["chrt"], "application/vnd.kde.kformula": ["kfo"], "application/vnd.kde.kivio": ["flw"], "application/vnd.kde.kontour": ["kon"], "application/vnd.kde.kpresenter": ["kpr", "kpt"], "application/vnd.kde.kspread": ["ksp"], "application/vnd.kde.kword": ["kwd", "kwt"], "application/vnd.kenameaapp": ["htke"], "application/vnd.kidspiration": ["kia"], "application/vnd.kinar": ["kne", "knp"], "application/vnd.koan": ["skp", "skd", "skt", "skm"], "application/vnd.kodak-descriptor": ["sse"], "application/vnd.las.las+xml": ["lasxml"], "application/vnd.llamagraphics.life-balance.desktop": ["lbd"], "application/vnd.llamagraphics.life-balance.exchange+xml": ["lbe"], "application/vnd.lotus-1-2-3": ["123"], "application/vnd.lotus-approach": ["apr"], "application/vnd.lotus-freelance": ["pre"], "application/vnd.lotus-notes": ["nsf"], "application/vnd.lotus-organizer": ["org"], "application/vnd.lotus-screencam": ["scm"], "application/vnd.lotus-wordpro": ["lwp"], "application/vnd.macports.portpkg": ["portpkg"], "application/vnd.mapbox-vector-tile": ["mvt"], "application/vnd.mcd": ["mcd"], "application/vnd.medcalcdata": ["mc1"], "application/vnd.mediastation.cdkey": ["cdkey"], "application/vnd.mfer": ["mwf"], "application/vnd.mfmp": ["mfm"], "application/vnd.micrografx.flo": ["flo"], "application/vnd.micrografx.igx": ["igx"], "application/vnd.mif": ["mif"], "application/vnd.mobius.daf": ["daf"], "application/vnd.mobius.dis": ["dis"], "application/vnd.mobius.mbk": ["mbk"], "application/vnd.mobius.mqy": ["mqy"], "application/vnd.mobius.msl": ["msl"], "application/vnd.mobius.plc": ["plc"], "application/vnd.mobius.txf": ["txf"], "application/vnd.mophun.application": ["mpn"], "application/vnd.mophun.certificate": ["mpc"], "application/vnd.mozilla.xul+xml": ["xul"], "application/vnd.ms-artgalry": ["cil"], "application/vnd.ms-cab-compressed": ["cab"], "application/vnd.ms-excel": ["xls", "xlm", "xla", "xlc", "xlt", "xlw"], "application/vnd.ms-excel.addin.macroenabled.12": ["xlam"], "application/vnd.ms-excel.sheet.binary.macroenabled.12": ["xlsb"], "application/vnd.ms-excel.sheet.macroenabled.12": ["xlsm"], "application/vnd.ms-excel.template.macroenabled.12": ["xltm"], "application/vnd.ms-fontobject": ["eot"], "application/vnd.ms-htmlhelp": ["chm"], "application/vnd.ms-ims": ["ims"], "application/vnd.ms-lrm": ["lrm"], "application/vnd.ms-officetheme": ["thmx"], "application/vnd.ms-outlook": ["msg"], "application/vnd.ms-pki.seccat": ["cat"], "application/vnd.ms-pki.stl": ["*stl"], "application/vnd.ms-powerpoint": ["ppt", "pps", "pot"], "application/vnd.ms-powerpoint.addin.macroenabled.12": ["ppam"], "application/vnd.ms-powerpoint.presentation.macroenabled.12": ["pptm"], "application/vnd.ms-powerpoint.slide.macroenabled.12": ["sldm"], "application/vnd.ms-powerpoint.slideshow.macroenabled.12": ["ppsm"], "application/vnd.ms-powerpoint.template.macroenabled.12": ["potm"], "application/vnd.ms-project": ["mpp", "mpt"], "application/vnd.ms-word.document.macroenabled.12": ["docm"], "application/vnd.ms-word.template.macroenabled.12": ["dotm"], "application/vnd.ms-works": ["wps", "wks", "wcm", "wdb"], "application/vnd.ms-wpl": ["wpl"], "application/vnd.ms-xpsdocument": ["xps"], "application/vnd.mseq": ["mseq"], "application/vnd.musician": ["mus"], "application/vnd.muvee.style": ["msty"], "application/vnd.mynfc": ["taglet"], "application/vnd.neurolanguage.nlu": ["nlu"], "application/vnd.nitf": ["ntf", "nitf"], "application/vnd.noblenet-directory": ["nnd"], "application/vnd.noblenet-sealer": ["nns"], "application/vnd.noblenet-web": ["nnw"], "application/vnd.nokia.n-gage.ac+xml": ["*ac"], "application/vnd.nokia.n-gage.data": ["ngdat"], "application/vnd.nokia.n-gage.symbian.install": ["n-gage"], "application/vnd.nokia.radio-preset": ["rpst"], "application/vnd.nokia.radio-presets": ["rpss"], "application/vnd.novadigm.edm": ["edm"], "application/vnd.novadigm.edx": ["edx"], "application/vnd.novadigm.ext": ["ext"], "application/vnd.oasis.opendocument.chart": ["odc"], "application/vnd.oasis.opendocument.chart-template": ["otc"], "application/vnd.oasis.opendocument.database": ["odb"], "application/vnd.oasis.opendocument.formula": ["odf"], "application/vnd.oasis.opendocument.formula-template": ["odft"], "application/vnd.oasis.opendocument.graphics": ["odg"], "application/vnd.oasis.opendocument.graphics-template": ["otg"], "application/vnd.oasis.opendocument.image": ["odi"], "application/vnd.oasis.opendocument.image-template": ["oti"], "application/vnd.oasis.opendocument.presentation": ["odp"], "application/vnd.oasis.opendocument.presentation-template": ["otp"], "application/vnd.oasis.opendocument.spreadsheet": ["ods"], "application/vnd.oasis.opendocument.spreadsheet-template": ["ots"], "application/vnd.oasis.opendocument.text": ["odt"], "application/vnd.oasis.opendocument.text-master": ["odm"], "application/vnd.oasis.opendocument.text-template": ["ott"], "application/vnd.oasis.opendocument.text-web": ["oth"], "application/vnd.olpc-sugar": ["xo"], "application/vnd.oma.dd2+xml": ["dd2"], "application/vnd.openblox.game+xml": ["obgx"], "application/vnd.openofficeorg.extension": ["oxt"], "application/vnd.openstreetmap.data+xml": ["osm"], "application/vnd.openxmlformats-officedocument.presentationml.presentation": ["pptx"], "application/vnd.openxmlformats-officedocument.presentationml.slide": ["sldx"], "application/vnd.openxmlformats-officedocument.presentationml.slideshow": ["ppsx"], "application/vnd.openxmlformats-officedocument.presentationml.template": ["potx"], "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": ["xlsx"], "application/vnd.openxmlformats-officedocument.spreadsheetml.template": ["xltx"], "application/vnd.openxmlformats-officedocument.wordprocessingml.document": ["docx"], "application/vnd.openxmlformats-officedocument.wordprocessingml.template": ["dotx"], "application/vnd.osgeo.mapguide.package": ["mgp"], "application/vnd.osgi.dp": ["dp"], "application/vnd.osgi.subsystem": ["esa"], "application/vnd.palm": ["pdb", "pqa", "oprc"], "application/vnd.pawaafile": ["paw"], "application/vnd.pg.format": ["str"], "application/vnd.pg.osasli": ["ei6"], "application/vnd.picsel": ["efif"], "application/vnd.pmi.widget": ["wg"], "application/vnd.pocketlearn": ["plf"], "application/vnd.powerbuilder6": ["pbd"], "application/vnd.previewsystems.box": ["box"], "application/vnd.proteus.magazine": ["mgz"], "application/vnd.publishare-delta-tree": ["qps"], "application/vnd.pvi.ptid1": ["ptid"], "application/vnd.quark.quarkxpress": ["qxd", "qxt", "qwd", "qwt", "qxl", "qxb"], "application/vnd.rar": ["rar"], "application/vnd.realvnc.bed": ["bed"], "application/vnd.recordare.musicxml": ["mxl"], "application/vnd.recordare.musicxml+xml": ["musicxml"], "application/vnd.rig.cryptonote": ["cryptonote"], "application/vnd.rim.cod": ["cod"], "application/vnd.rn-realmedia": ["rm"], "application/vnd.rn-realmedia-vbr": ["rmvb"], "application/vnd.route66.link66+xml": ["link66"], "application/vnd.sailingtracker.track": ["st"], "application/vnd.seemail": ["see"], "application/vnd.sema": ["sema"], "application/vnd.semd": ["semd"], "application/vnd.semf": ["semf"], "application/vnd.shana.informed.formdata": ["ifm"], "application/vnd.shana.informed.formtemplate": ["itp"], "application/vnd.shana.informed.interchange": ["iif"], "application/vnd.shana.informed.package": ["ipk"], "application/vnd.simtech-mindmapper": ["twd", "twds"], "application/vnd.smaf": ["mmf"], "application/vnd.smart.teacher": ["teacher"], "application/vnd.software602.filler.form+xml": ["fo"], "application/vnd.solent.sdkm+xml": ["sdkm", "sdkd"], "application/vnd.spotfire.dxp": ["dxp"], "application/vnd.spotfire.sfs": ["sfs"], "application/vnd.stardivision.calc": ["sdc"], "application/vnd.stardivision.draw": ["sda"], "application/vnd.stardivision.impress": ["sdd"], "application/vnd.stardivision.math": ["smf"], "application/vnd.stardivision.writer": ["sdw", "vor"], "application/vnd.stardivision.writer-global": ["sgl"], "application/vnd.stepmania.package": ["smzip"], "application/vnd.stepmania.stepchart": ["sm"], "application/vnd.sun.wadl+xml": ["wadl"], "application/vnd.sun.xml.calc": ["sxc"], "application/vnd.sun.xml.calc.template": ["stc"], "application/vnd.sun.xml.draw": ["sxd"], "application/vnd.sun.xml.draw.template": ["std"], "application/vnd.sun.xml.impress": ["sxi"], "application/vnd.sun.xml.impress.template": ["sti"], "application/vnd.sun.xml.math": ["sxm"], "application/vnd.sun.xml.writer": ["sxw"], "application/vnd.sun.xml.writer.global": ["sxg"], "application/vnd.sun.xml.writer.template": ["stw"], "application/vnd.sus-calendar": ["sus", "susp"], "application/vnd.svd": ["svd"], "application/vnd.symbian.install": ["sis", "sisx"], "application/vnd.syncml+xml": ["xsm"], "application/vnd.syncml.dm+wbxml": ["bdm"], "application/vnd.syncml.dm+xml": ["xdm"], "application/vnd.syncml.dmddf+xml": ["ddf"], "application/vnd.tao.intent-module-archive": ["tao"], "application/vnd.tcpdump.pcap": ["pcap", "cap", "dmp"], "application/vnd.tmobile-livetv": ["tmo"], "application/vnd.trid.tpt": ["tpt"], "application/vnd.triscape.mxs": ["mxs"], "application/vnd.trueapp": ["tra"], "application/vnd.ufdl": ["ufd", "ufdl"], "application/vnd.uiq.theme": ["utz"], "application/vnd.umajin": ["umj"], "application/vnd.unity": ["unityweb"], "application/vnd.uoml+xml": ["uoml"], "application/vnd.vcx": ["vcx"], "application/vnd.visio": ["vsd", "vst", "vss", "vsw"], "application/vnd.visionary": ["vis"], "application/vnd.vsf": ["vsf"], "application/vnd.wap.wbxml": ["wbxml"], "application/vnd.wap.wmlc": ["wmlc"], "application/vnd.wap.wmlscriptc": ["wmlsc"], "application/vnd.webturbo": ["wtb"], "application/vnd.wolfram.player": ["nbp"], "application/vnd.wordperfect": ["wpd"], "application/vnd.wqd": ["wqd"], "application/vnd.wt.stf": ["stf"], "application/vnd.xara": ["xar"], "application/vnd.xfdl": ["xfdl"], "application/vnd.yamaha.hv-dic": ["hvd"], "application/vnd.yamaha.hv-script": ["hvs"], "application/vnd.yamaha.hv-voice": ["hvp"], "application/vnd.yamaha.openscoreformat": ["osf"], "application/vnd.yamaha.openscoreformat.osfpvg+xml": ["osfpvg"], "application/vnd.yamaha.smaf-audio": ["saf"], "application/vnd.yamaha.smaf-phrase": ["spf"], "application/vnd.yellowriver-custom-menu": ["cmp"], "application/vnd.zul": ["zir", "zirz"], "application/vnd.zzazz.deck+xml": ["zaz"], "application/x-7z-compressed": ["7z"], "application/x-abiword": ["abw"], "application/x-ace-compressed": ["ace"], "application/x-apple-diskimage": ["*dmg"], "application/x-arj": ["arj"], "application/x-authorware-bin": ["aab", "x32", "u32", "vox"], "application/x-authorware-map": ["aam"], "application/x-authorware-seg": ["aas"], "application/x-bcpio": ["bcpio"], "application/x-bdoc": ["*bdoc"], "application/x-bittorrent": ["torrent"], "application/x-blorb": ["blb", "blorb"], "application/x-bzip": ["bz"], "application/x-bzip2": ["bz2", "boz"], "application/x-cbr": ["cbr", "cba", "cbt", "cbz", "cb7"], "application/x-cdlink": ["vcd"], "application/x-cfs-compressed": ["cfs"], "application/x-chat": ["chat"], "application/x-chess-pgn": ["pgn"], "application/x-chrome-extension": ["crx"], "application/x-cocoa": ["cco"], "application/x-conference": ["nsc"], "application/x-cpio": ["cpio"], "application/x-csh": ["csh"], "application/x-debian-package": ["*deb", "udeb"], "application/x-dgc-compressed": ["dgc"], "application/x-director": ["dir", "dcr", "dxr", "cst", "cct", "cxt", "w3d", "fgd", "swa"], "application/x-doom": ["wad"], "application/x-dtbncx+xml": ["ncx"], "application/x-dtbook+xml": ["dtb"], "application/x-dtbresource+xml": ["res"], "application/x-dvi": ["dvi"], "application/x-envoy": ["evy"], "application/x-eva": ["eva"], "application/x-font-bdf": ["bdf"], "application/x-font-ghostscript": ["gsf"], "application/x-font-linux-psf": ["psf"], "application/x-font-pcf": ["pcf"], "application/x-font-snf": ["snf"], "application/x-font-type1": ["pfa", "pfb", "pfm", "afm"], "application/x-freearc": ["arc"], "application/x-futuresplash": ["spl"], "application/x-gca-compressed": ["gca"], "application/x-glulx": ["ulx"], "application/x-gnumeric": ["gnumeric"], "application/x-gramps-xml": ["gramps"], "application/x-gtar": ["gtar"], "application/x-hdf": ["hdf"], "application/x-httpd-php": ["php"], "application/x-install-instructions": ["install"], "application/x-iso9660-image": ["*iso"], "application/x-iwork-keynote-sffkey": ["*key"], "application/x-iwork-numbers-sffnumbers": ["*numbers"], "application/x-iwork-pages-sffpages": ["*pages"], "application/x-java-archive-diff": ["jardiff"], "application/x-java-jnlp-file": ["jnlp"], "application/x-keepass2": ["kdbx"], "application/x-latex": ["latex"], "application/x-lua-bytecode": ["luac"], "application/x-lzh-compressed": ["lzh", "lha"], "application/x-makeself": ["run"], "application/x-mie": ["mie"], "application/x-mobipocket-ebook": ["prc", "mobi"], "application/x-ms-application": ["application"], "application/x-ms-shortcut": ["lnk"], "application/x-ms-wmd": ["wmd"], "application/x-ms-wmz": ["wmz"], "application/x-ms-xbap": ["xbap"], "application/x-msaccess": ["mdb"], "application/x-msbinder": ["obd"], "application/x-mscardfile": ["crd"], "application/x-msclip": ["clp"], "application/x-msdos-program": ["*exe"], "application/x-msdownload": ["*exe", "*dll", "com", "bat", "*msi"], "application/x-msmediaview": ["mvb", "m13", "m14"], "application/x-msmetafile": ["*wmf", "*wmz", "*emf", "emz"], "application/x-msmoney": ["mny"], "application/x-mspublisher": ["pub"], "application/x-msschedule": ["scd"], "application/x-msterminal": ["trm"], "application/x-mswrite": ["wri"], "application/x-netcdf": ["nc", "cdf"], "application/x-ns-proxy-autoconfig": ["pac"], "application/x-nzb": ["nzb"], "application/x-perl": ["pl", "pm"], "application/x-pilot": ["*prc", "*pdb"], "application/x-pkcs12": ["p12", "pfx"], "application/x-pkcs7-certificates": ["p7b", "spc"], "application/x-pkcs7-certreqresp": ["p7r"], "application/x-rar-compressed": ["*rar"], "application/x-redhat-package-manager": ["rpm"], "application/x-research-info-systems": ["ris"], "application/x-sea": ["sea"], "application/x-sh": ["sh"], "application/x-shar": ["shar"], "application/x-shockwave-flash": ["swf"], "application/x-silverlight-app": ["xap"], "application/x-sql": ["sql"], "application/x-stuffit": ["sit"], "application/x-stuffitx": ["sitx"], "application/x-subrip": ["srt"], "application/x-sv4cpio": ["sv4cpio"], "application/x-sv4crc": ["sv4crc"], "application/x-t3vm-image": ["t3"], "application/x-tads": ["gam"], "application/x-tar": ["tar"], "application/x-tcl": ["tcl", "tk"], "application/x-tex": ["tex"], "application/x-tex-tfm": ["tfm"], "application/x-texinfo": ["texinfo", "texi"], "application/x-tgif": ["*obj"], "application/x-ustar": ["ustar"], "application/x-virtualbox-hdd": ["hdd"], "application/x-virtualbox-ova": ["ova"], "application/x-virtualbox-ovf": ["ovf"], "application/x-virtualbox-vbox": ["vbox"], "application/x-virtualbox-vbox-extpack": ["vbox-extpack"], "application/x-virtualbox-vdi": ["vdi"], "application/x-virtualbox-vhd": ["vhd"], "application/x-virtualbox-vmdk": ["vmdk"], "application/x-wais-source": ["src"], "application/x-web-app-manifest+json": ["webapp"], "application/x-x509-ca-cert": ["der", "crt", "pem"], "application/x-xfig": ["fig"], "application/x-xliff+xml": ["*xlf"], "application/x-xpinstall": ["xpi"], "application/x-xz": ["xz"], "application/x-zmachine": ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8"], "audio/vnd.dece.audio": ["uva", "uvva"], "audio/vnd.digital-winds": ["eol"], "audio/vnd.dra": ["dra"], "audio/vnd.dts": ["dts"], "audio/vnd.dts.hd": ["dtshd"], "audio/vnd.lucent.voice": ["lvp"], "audio/vnd.ms-playready.media.pya": ["pya"], "audio/vnd.nuera.ecelp4800": ["ecelp4800"], "audio/vnd.nuera.ecelp7470": ["ecelp7470"], "audio/vnd.nuera.ecelp9600": ["ecelp9600"], "audio/vnd.rip": ["rip"], "audio/x-aac": ["aac"], "audio/x-aiff": ["aif", "aiff", "aifc"], "audio/x-caf": ["caf"], "audio/x-flac": ["flac"], "audio/x-m4a": ["*m4a"], "audio/x-matroska": ["mka"], "audio/x-mpegurl": ["m3u"], "audio/x-ms-wax": ["wax"], "audio/x-ms-wma": ["wma"], "audio/x-pn-realaudio": ["ram", "ra"], "audio/x-pn-realaudio-plugin": ["rmp"], "audio/x-realaudio": ["*ra"], "audio/x-wav": ["*wav"], "chemical/x-cdx": ["cdx"], "chemical/x-cif": ["cif"], "chemical/x-cmdf": ["cmdf"], "chemical/x-cml": ["cml"], "chemical/x-csml": ["csml"], "chemical/x-xyz": ["xyz"], "image/prs.btif": ["btif"], "image/prs.pti": ["pti"], "image/vnd.adobe.photoshop": ["psd"], "image/vnd.airzip.accelerator.azv": ["azv"], "image/vnd.dece.graphic": ["uvi", "uvvi", "uvg", "uvvg"], "image/vnd.djvu": ["djvu", "djv"], "image/vnd.dvb.subtitle": ["*sub"], "image/vnd.dwg": ["dwg"], "image/vnd.dxf": ["dxf"], "image/vnd.fastbidsheet": ["fbs"], "image/vnd.fpx": ["fpx"], "image/vnd.fst": ["fst"], "image/vnd.fujixerox.edmics-mmr": ["mmr"], "image/vnd.fujixerox.edmics-rlc": ["rlc"], "image/vnd.microsoft.icon": ["ico"], "image/vnd.ms-dds": ["dds"], "image/vnd.ms-modi": ["mdi"], "image/vnd.ms-photo": ["wdp"], "image/vnd.net-fpx": ["npx"], "image/vnd.pco.b16": ["b16"], "image/vnd.tencent.tap": ["tap"], "image/vnd.valve.source.texture": ["vtf"], "image/vnd.wap.wbmp": ["wbmp"], "image/vnd.xiff": ["xif"], "image/vnd.zbrush.pcx": ["pcx"], "image/x-3ds": ["3ds"], "image/x-cmu-raster": ["ras"], "image/x-cmx": ["cmx"], "image/x-freehand": ["fh", "fhc", "fh4", "fh5", "fh7"], "image/x-icon": ["*ico"], "image/x-jng": ["jng"], "image/x-mrsid-image": ["sid"], "image/x-ms-bmp": ["*bmp"], "image/x-pcx": ["*pcx"], "image/x-pict": ["pic", "pct"], "image/x-portable-anymap": ["pnm"], "image/x-portable-bitmap": ["pbm"], "image/x-portable-graymap": ["pgm"], "image/x-portable-pixmap": ["ppm"], "image/x-rgb": ["rgb"], "image/x-tga": ["tga"], "image/x-xbitmap": ["xbm"], "image/x-xpixmap": ["xpm"], "image/x-xwindowdump": ["xwd"], "message/vnd.wfa.wsc": ["wsc"], "model/vnd.collada+xml": ["dae"], "model/vnd.dwf": ["dwf"], "model/vnd.gdl": ["gdl"], "model/vnd.gtw": ["gtw"], "model/vnd.mts": ["mts"], "model/vnd.opengex": ["ogex"], "model/vnd.parasolid.transmit.binary": ["x_b"], "model/vnd.parasolid.transmit.text": ["x_t"], "model/vnd.sap.vds": ["vds"], "model/vnd.usdz+zip": ["usdz"], "model/vnd.valve.source.compiled-map": ["bsp"], "model/vnd.vtu": ["vtu"], "text/prs.lines.tag": ["dsc"], "text/vnd.curl": ["curl"], "text/vnd.curl.dcurl": ["dcurl"], "text/vnd.curl.mcurl": ["mcurl"], "text/vnd.curl.scurl": ["scurl"], "text/vnd.dvb.subtitle": ["sub"], "text/vnd.fly": ["fly"], "text/vnd.fmi.flexstor": ["flx"], "text/vnd.graphviz": ["gv"], "text/vnd.in3d.3dml": ["3dml"], "text/vnd.in3d.spot": ["spot"], "text/vnd.sun.j2me.app-descriptor": ["jad"], "text/vnd.wap.wml": ["wml"], "text/vnd.wap.wmlscript": ["wmls"], "text/x-asm": ["s", "asm"], "text/x-c": ["c", "cc", "cxx", "cpp", "h", "hh", "dic"], "text/x-component": ["htc"], "text/x-fortran": ["f", "for", "f77", "f90"], "text/x-handlebars-template": ["hbs"], "text/x-java-source": ["java"], "text/x-lua": ["lua"], "text/x-markdown": ["mkd"], "text/x-nfo": ["nfo"], "text/x-opml": ["opml"], "text/x-org": ["*org"], "text/x-pascal": ["p", "pas"], "text/x-processing": ["pde"], "text/x-sass": ["sass"], "text/x-scss": ["scss"], "text/x-setext": ["etx"], "text/x-sfv": ["sfv"], "text/x-suse-ymp": ["ymp"], "text/x-uuencode": ["uu"], "text/x-vcalendar": ["vcs"], "text/x-vcard": ["vcf"], "video/vnd.dece.hd": ["uvh", "uvvh"], "video/vnd.dece.mobile": ["uvm", "uvvm"], "video/vnd.dece.pd": ["uvp", "uvvp"], "video/vnd.dece.sd": ["uvs", "uvvs"], "video/vnd.dece.video": ["uvv", "uvvv"], "video/vnd.dvb.file": ["dvb"], "video/vnd.fvt": ["fvt"], "video/vnd.mpegurl": ["mxu", "m4u"], "video/vnd.ms-playready.media.pyv": ["pyv"], "video/vnd.uvvu.mp4": ["uvu", "uvvu"], "video/vnd.vivo": ["viv"], "video/x-f4v": ["f4v"], "video/x-fli": ["fli"], "video/x-flv": ["flv"], "video/x-m4v": ["m4v"], "video/x-matroska": ["mkv", "mk3d", "mks"], "video/x-mng": ["mng"], "video/x-ms-asf": ["asf", "asx"], "video/x-ms-vob": ["vob"], "video/x-ms-wm": ["wm"], "video/x-ms-wmv": ["wmv"], "video/x-ms-wmx": ["wmx"], "video/x-ms-wvx": ["wvx"], "video/x-msvideo": ["avi"], "video/x-sgi-movie": ["movie"], "video/x-smv": ["smv"], "x-conference/x-cooltalk": ["ice"] };
var Mime = Mime_1;
var mime = new Mime(standard, other);
var parse_1 = parse$1;
var serialize_1 = serialize;
var __toString = Object.prototype.toString;
var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
function parse$1(e, t) {
  if ("string" != typeof e)
    throw new TypeError("argument str must be a string");
  for (var n = {}, a = (t || {}).decode || decode, i = 0; i < e.length; ) {
    var r = e.indexOf("=", i);
    if (-1 === r)
      break;
    var o = e.indexOf(";", i);
    if (-1 === o)
      o = e.length;
    else if (o < r) {
      i = e.lastIndexOf(";", r - 1) + 1;
      continue;
    }
    var s = e.slice(i, r).trim();
    if (void 0 === n[s]) {
      var p = e.slice(r + 1, o).trim();
      34 === p.charCodeAt(0) && (p = p.slice(1, -1)), n[s] = tryDecode(p, a);
    }
    i = o + 1;
  }
  return n;
}
function serialize(e, t, n) {
  var a = n || {}, i = a.encode || encode;
  if ("function" != typeof i)
    throw new TypeError("option encode is invalid");
  if (!fieldContentRegExp.test(e))
    throw new TypeError("argument name is invalid");
  var r = i(t);
  if (r && !fieldContentRegExp.test(r))
    throw new TypeError("argument val is invalid");
  var o = e + "=" + r;
  if (null != a.maxAge) {
    var s = a.maxAge - 0;
    if (isNaN(s) || !isFinite(s))
      throw new TypeError("option maxAge is invalid");
    o += "; Max-Age=" + Math.floor(s);
  }
  if (a.domain) {
    if (!fieldContentRegExp.test(a.domain))
      throw new TypeError("option domain is invalid");
    o += "; Domain=" + a.domain;
  }
  if (a.path) {
    if (!fieldContentRegExp.test(a.path))
      throw new TypeError("option path is invalid");
    o += "; Path=" + a.path;
  }
  if (a.expires) {
    var p = a.expires;
    if (!isDate(p) || isNaN(p.valueOf()))
      throw new TypeError("option expires is invalid");
    o += "; Expires=" + p.toUTCString();
  }
  if (a.httpOnly && (o += "; HttpOnly"), a.secure && (o += "; Secure"), a.priority)
    switch ("string" == typeof a.priority ? a.priority.toLowerCase() : a.priority) {
      case "low":
        o += "; Priority=Low";
        break;
      case "medium":
        o += "; Priority=Medium";
        break;
      case "high":
        o += "; Priority=High";
        break;
      default:
        throw new TypeError("option priority is invalid");
    }
  if (a.sameSite)
    switch ("string" == typeof a.sameSite ? a.sameSite.toLowerCase() : a.sameSite) {
      case true:
        o += "; SameSite=Strict";
        break;
      case "lax":
        o += "; SameSite=Lax";
        break;
      case "strict":
        o += "; SameSite=Strict";
        break;
      case "none":
        o += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  return o;
}
function decode(e) {
  return -1 !== e.indexOf("%") ? decodeURIComponent(e) : e;
}
function encode(e) {
  return encodeURIComponent(e);
}
function isDate(e) {
  return "[object Date]" === __toString.call(e) || e instanceof Date;
}
function tryDecode(e, t) {
  try {
    return t(e);
  } catch (t2) {
    return e;
  }
}
var _request;
var _requestValues;
var _outgoing;
var _ensureParsed;
var ensureParsed_fn;
var _ensureOutgoingMap;
var ensureOutgoingMap_fn;
var _parse;
var parse_fn;
var __accessCheck$3 = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
};
var __privateGet$3 = (e, t, n) => (__accessCheck$3(e, t, "read from private field"), n ? n.call(e) : t.get(e));
var __privateAdd$3 = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
};
var __privateSet$3 = (e, t, n, a) => (__accessCheck$3(e, t, "write to private field"), a ? a.call(e, n) : t.set(e, n), n);
var __privateMethod$1 = (e, t, n) => (__accessCheck$3(e, t, "access private method"), n);
var DELETED_EXPIRATION = new Date(0);
var AstroCookie = class {
  constructor(e) {
    this.value = e;
  }
  json() {
    if (void 0 === this.value)
      throw new Error("Cannot convert undefined to an object.");
    return JSON.parse(this.value);
  }
  number() {
    return Number(this.value);
  }
  boolean() {
    return "false" !== this.value && ("0" !== this.value && Boolean(this.value));
  }
};
var AstroCookies = class {
  constructor(e) {
    __privateAdd$3(this, _ensureParsed), __privateAdd$3(this, _ensureOutgoingMap), __privateAdd$3(this, _parse), __privateAdd$3(this, _request, void 0), __privateAdd$3(this, _requestValues, void 0), __privateAdd$3(this, _outgoing, void 0), __privateSet$3(this, _request, e), __privateSet$3(this, _requestValues, null), __privateSet$3(this, _outgoing, null);
  }
  delete(e, t) {
    const n = { expires: DELETED_EXPIRATION };
    (null == t ? void 0 : t.path) && (n.path = t.path), __privateMethod$1(this, _ensureOutgoingMap, ensureOutgoingMap_fn).call(this).set(e, ["deleted", serialize_1(e, "deleted", n), false]);
  }
  get(e) {
    if (null !== __privateGet$3(this, _outgoing) && __privateGet$3(this, _outgoing).has(e)) {
      let [t2, , n] = __privateGet$3(this, _outgoing).get(e);
      return new AstroCookie(n ? t2 : void 0);
    }
    const t = __privateMethod$1(this, _ensureParsed, ensureParsed_fn).call(this)[e];
    return new AstroCookie(t);
  }
  has(e) {
    if (null !== __privateGet$3(this, _outgoing) && __privateGet$3(this, _outgoing).has(e)) {
      let [, , t] = __privateGet$3(this, _outgoing).get(e);
      return t;
    }
    return !!__privateMethod$1(this, _ensureParsed, ensureParsed_fn).call(this)[e];
  }
  set(e, t, n) {
    let a;
    if ("string" == typeof t)
      a = t;
    else {
      let e2 = t.toString();
      a = e2 === Object.prototype.toString.call(t) ? JSON.stringify(t) : e2;
    }
    const i = {};
    n && Object.assign(i, n), __privateMethod$1(this, _ensureOutgoingMap, ensureOutgoingMap_fn).call(this).set(e, [a, serialize_1(e, a, i), true]);
  }
  *headers() {
    if (null != __privateGet$3(this, _outgoing))
      for (const [, e] of __privateGet$3(this, _outgoing))
        yield e[1];
  }
};
_request = /* @__PURE__ */ new WeakMap(), _requestValues = /* @__PURE__ */ new WeakMap(), _outgoing = /* @__PURE__ */ new WeakMap(), _ensureParsed = /* @__PURE__ */ new WeakSet(), ensureParsed_fn = function() {
  return __privateGet$3(this, _requestValues) || __privateMethod$1(this, _parse, parse_fn).call(this), __privateGet$3(this, _requestValues) || __privateSet$3(this, _requestValues, {}), __privateGet$3(this, _requestValues);
}, _ensureOutgoingMap = /* @__PURE__ */ new WeakSet(), ensureOutgoingMap_fn = function() {
  return __privateGet$3(this, _outgoing) || __privateSet$3(this, _outgoing, /* @__PURE__ */ new Map()), __privateGet$3(this, _outgoing);
}, _parse = /* @__PURE__ */ new WeakSet(), parse_fn = function() {
  const e = __privateGet$3(this, _request).headers.get("cookie");
  e && __privateSet$3(this, _requestValues, parse_1(e));
};
var astroCookiesSymbol = Symbol.for("astro.cookies");
function attachToResponse(e, t) {
  Reflect.set(e, astroCookiesSymbol, t);
}
function getFromResponse(e) {
  let t = Reflect.get(e, astroCookiesSymbol);
  return null != t ? t : void 0;
}
function* getSetCookiesFromResponse(e) {
  const t = getFromResponse(e);
  if (t)
    for (const e2 of t.headers())
      yield e2;
}
function getHandlerFromModule(e, t) {
  return e[t] ? e[t] : "delete" === t && e.del ? e.del : e.all ? e.all : void 0;
}
async function renderEndpoint(e, t, n) {
  var a;
  const { request: i, params: r } = t, o = null == (a = i.method) ? void 0 : a.toLowerCase(), s = getHandlerFromModule(e, o);
  if (!n && false === n && o && "get" !== o && console.warn(`
${o} requests are not available when building a static site. Update your config to output: 'server' to handle ${o} requests.`), !s || "function" != typeof s) {
    return new Response(null, { status: 404, headers: { "X-Astro-Response": "Not-Found" } });
  }
  s.length > 1 && console.warn("\nAPI routes with 2 arguments have been deprecated. Instead they take a single argument in the form of:\n\nexport function get({ params, request }) {\n	//...\n}\n\nUpdate your code to remove this warning.");
  const p = new Proxy(t, { get: (e2, t2) => t2 in e2 ? Reflect.get(e2, t2) : t2 in r ? (console.warn("\nAPI routes no longer pass params as the first argument. Instead an object containing a params property is provided in the form of:\n\nexport function get({ params }) {\n	// ...\n}\n\nUpdate your code to remove this warning."), Reflect.get(r, t2)) : void 0 });
  return s.call(e, p, i);
}
var { replace } = "";
var ca = /[&<>'"]/g;
var esca = { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" };
var pe = (e) => esca[e];
var escape = (e) => replace.call(e, ca, pe);
var escapeHTML$1 = escape;
var HTMLString$1 = class extends String {
  get [Symbol.toStringTag]() {
    return "HTMLString";
  }
};
var markHTMLString$1 = (e) => e instanceof HTMLString$1 ? e : "string" == typeof e ? new HTMLString$1(e) : e;
function isHTMLString$1(e) {
  return "[object HTMLString]" === Object.prototype.toString.call(e);
}
var AstroJSX$1 = "astro:jsx";
function isVNode$1(e) {
  return e && "object" == typeof e && e[AstroJSX$1];
}
var idle_prebuilt_default$1 = '(self.Astro=self.Astro||{}).idle=t=>{const e=async()=>{await(await t())()};"requestIdleCallback"in window?window.requestIdleCallback(e):setTimeout(e,200)},window.dispatchEvent(new Event("astro:idle"));';
var load_prebuilt_default$1 = '(self.Astro=self.Astro||{}).load=a=>{(async()=>await(await a())())()},window.dispatchEvent(new Event("astro:load"));';
var media_prebuilt_default$1 = '(self.Astro=self.Astro||{}).media=(s,a)=>{const t=async()=>{await(await s())()};if(a.value){const e=matchMedia(a.value);e.matches?t():e.addEventListener("change",t,{once:!0})}},window.dispatchEvent(new Event("astro:media"));';
var only_prebuilt_default$1 = '(self.Astro=self.Astro||{}).only=t=>{(async()=>await(await t())())()},window.dispatchEvent(new Event("astro:only"));';
var visible_prebuilt_default$1 = '(self.Astro=self.Astro||{}).visible=(s,c,n)=>{const r=async()=>{await(await s())()};let i=new IntersectionObserver(e=>{for(const t of e)if(!!t.isIntersecting){i.disconnect(),r();break}});for(let e=0;e<n.children.length;e++){const t=n.children[e];i.observe(t)}},window.dispatchEvent(new Event("astro:visible"));';
var astro_island_prebuilt_default$1 = 'var l;{const c={0:t=>t,1:t=>JSON.parse(t,o),2:t=>new RegExp(t),3:t=>new Date(t),4:t=>new Map(JSON.parse(t,o)),5:t=>new Set(JSON.parse(t,o)),6:t=>BigInt(t),7:t=>new URL(t),8:t=>new Uint8Array(JSON.parse(t)),9:t=>new Uint16Array(JSON.parse(t)),10:t=>new Uint32Array(JSON.parse(t))},o=(t,s)=>{if(t===""||!Array.isArray(s))return s;const[e,n]=s;return e in c?c[e](n):void 0};customElements.get("astro-island")||customElements.define("astro-island",(l=class extends HTMLElement{constructor(){super(...arguments);this.hydrate=()=>{if(!this.hydrator||this.parentElement&&this.parentElement.closest("astro-island[ssr]"))return;const s=this.querySelectorAll("astro-slot"),e={},n=this.querySelectorAll("template[data-astro-template]");for(const r of n){const i=r.closest(this.tagName);!i||!i.isSameNode(this)||(e[r.getAttribute("data-astro-template")||"default"]=r.innerHTML,r.remove())}for(const r of s){const i=r.closest(this.tagName);!i||!i.isSameNode(this)||(e[r.getAttribute("name")||"default"]=r.innerHTML)}const a=this.hasAttribute("props")?JSON.parse(this.getAttribute("props"),o):{};this.hydrator(this)(this.Component,a,e,{client:this.getAttribute("client")}),this.removeAttribute("ssr"),window.removeEventListener("astro:hydrate",this.hydrate),window.dispatchEvent(new CustomEvent("astro:hydrate"))}}connectedCallback(){!this.hasAttribute("await-children")||this.firstChild?this.childrenConnectedCallback():new MutationObserver((s,e)=>{e.disconnect(),this.childrenConnectedCallback()}).observe(this,{childList:!0})}async childrenConnectedCallback(){window.addEventListener("astro:hydrate",this.hydrate);let s=this.getAttribute("before-hydration-url");s&&await import(s),this.start()}start(){const s=JSON.parse(this.getAttribute("opts")),e=this.getAttribute("client");if(Astro[e]===void 0){window.addEventListener(`astro:${e}`,()=>this.start(),{once:!0});return}Astro[e](async()=>{const n=this.getAttribute("renderer-url"),[a,{default:r}]=await Promise.all([import(this.getAttribute("component-url")),n?import(n):()=>()=>{}]),i=this.getAttribute("component-export")||"default";if(!i.includes("."))this.Component=a[i];else{this.Component=a;for(const d of i.split("."))this.Component=this.Component[d]}return this.hydrator=r,this.hydrate},s,this)}attributeChangedCallback(){this.hydrator&&this.hydrate()}},l.observedAttributes=["props"],l))}';
function determineIfNeedsHydrationScript$1(e) {
  return !e._metadata.hasHydrationScript && (e._metadata.hasHydrationScript = true);
}
var hydrationScripts$1 = { idle: idle_prebuilt_default$1, load: load_prebuilt_default$1, only: only_prebuilt_default$1, media: media_prebuilt_default$1, visible: visible_prebuilt_default$1 };
function determinesIfNeedsDirectiveScript$1(e, t) {
  return !e._metadata.hasDirectives.has(t) && (e._metadata.hasDirectives.add(t), true);
}
function getDirectiveScriptText$1(e) {
  if (!(e in hydrationScripts$1))
    throw new Error(`Unknown directive: ${e}`);
  return hydrationScripts$1[e];
}
function getPrescripts$1(e, t) {
  switch (e) {
    case "both":
      return `<style>astro-island,astro-slot{display:contents}</style><script>${getDirectiveScriptText$1(t) + astro_island_prebuilt_default$1}<\/script>`;
    case "directive":
      return `<script>${getDirectiveScriptText$1(t)}<\/script>`;
  }
  return "";
}
var Fragment$1 = Symbol.for("astro:fragment");
var Renderer$1 = Symbol.for("astro:renderer");
var encoder$1 = new TextEncoder();
var decoder$1 = new TextDecoder();
function stringifyChunk$1(e, t) {
  if ("directive" === t.type) {
    const { hydration: n } = t;
    let a = n && determineIfNeedsHydrationScript$1(e), i = n && determinesIfNeedsDirectiveScript$1(e, n.directive), r = a ? "both" : i ? "directive" : null;
    if (r) {
      let e2 = getPrescripts$1(r, n.directive);
      return markHTMLString$1(e2);
    }
    return "";
  }
  return t.toString();
}
var HTMLParts$1 = class {
  constructor() {
    this.parts = "";
  }
  append(e, t) {
    ArrayBuffer.isView(e) ? this.parts += decoder$1.decode(e) : this.parts += stringifyChunk$1(t, e);
  }
  toString() {
    return this.parts;
  }
  toArrayBuffer() {
    return encoder$1.encode(this.parts);
  }
};
function chunkToByteArray(e, t) {
  return t instanceof Uint8Array ? t : encoder$1.encode(stringifyChunk$1(e, t));
}
var skipAstroJSXCheck$1 = /* @__PURE__ */ new WeakSet();
var originalConsoleError$1;
var consoleFilterRefs$1 = 0;
async function renderJSX$1(e, t) {
  switch (true) {
    case t instanceof HTMLString$1:
      return "" === t.toString().trim() ? "" : t;
    case "string" == typeof t:
      return markHTMLString$1(escapeHTML$1(t));
    case "function" == typeof t:
      return t;
    case (!t && 0 !== t):
      return "";
    case Array.isArray(t):
      return markHTMLString$1((await Promise.all(t.map((t2) => renderJSX$1(e, t2)))).join(""));
  }
  if (isVNode$1(t)) {
    switch (true) {
      case !t.type:
        throw new Error(`Unable to render ${e._metadata.pathname} because it contains an undefined Component!
Did you forget to import the component or is it possible there is a typo?`);
      case t.type === Symbol.for("astro:fragment"):
        return renderJSX$1(e, t.props.children);
      case t.type.isAstroComponentFactory: {
        let n = {}, a = {};
        for (const [i, r] of Object.entries(t.props ?? {}))
          "children" === i || r && "object" == typeof r && r.$$slot ? a["children" === i ? "default" : i] = () => renderJSX$1(e, r) : n[i] = r;
        return markHTMLString$1(await renderToString$1(e, t.type, n, a));
      }
      case (!t.type && 0 !== t.type):
        return "";
      case ("string" == typeof t.type && "astro-client-only" !== t.type):
        return markHTMLString$1(await renderElement$3(e, t.type, t.props ?? {}));
    }
    if (t.type) {
      let n = function(e2) {
        return Array.isArray(e2) ? e2.map((e3) => n(e3)) : isVNode$1(e2) && "slot" in e2.props ? (r[e2.props.slot] = [...r[e2.props.slot] ?? [], e2], void delete e2.props.slot) : void r.default.push(e2);
      };
      if ("function" == typeof t.type && t.type["astro:renderer"] && skipAstroJSXCheck$1.add(t.type), "function" == typeof t.type && t.props["server:root"]) {
        const n2 = await t.type(t.props ?? {});
        return await renderJSX$1(e, n2);
      }
      if ("function" == typeof t.type && !skipAstroJSXCheck$1.has(t.type)) {
        useConsoleFilter$1();
        try {
          const n2 = await t.type(t.props ?? {});
          if (n2 && n2[AstroJSX$1])
            return await renderJSX$1(e, n2);
          if (!n2)
            return await renderJSX$1(e, n2);
        } catch (e2) {
          skipAstroJSXCheck$1.add(t.type);
        } finally {
          finishUsingConsoleFilter$1();
        }
      }
      const { children: a = null, ...i } = t.props ?? {}, r = { default: [] };
      n(a);
      for (const [e2, t2] of Object.entries(i))
        t2.$$slot && (r[e2] = t2, delete i[e2]);
      const o = [], s = {};
      for (const [t2, n2] of Object.entries(r))
        o.push(renderJSX$1(e, n2).then((e2) => {
          0 !== e2.toString().trim().length && (s[t2] = () => e2);
        }));
      let p;
      if (await Promise.all(o), p = "astro-client-only" === t.type && t.props["client:only"] ? await renderComponent$1(e, t.props["client:display-name"] ?? "", null, i, s) : await renderComponent$1(e, "function" == typeof t.type ? t.type.name : t.type, t.type, i, s), "string" != typeof p && Symbol.asyncIterator in p) {
        let t2 = new HTMLParts$1();
        for await (const n2 of p)
          t2.append(n2, e);
        return markHTMLString$1(t2.toString());
      }
      return markHTMLString$1(p);
    }
  }
  return markHTMLString$1(`${t}`);
}
async function renderElement$3(e, t, { children: n, ...a }) {
  return markHTMLString$1(`<${t}${spreadAttributes$1(a)}${markHTMLString$1(null != n && "" != n || !voidElementNames$1.test(t) ? `>${null == n ? "" : await renderJSX$1(e, n)}</${t}>` : "/>")}`);
}
function useConsoleFilter$1() {
  if (consoleFilterRefs$1++, !originalConsoleError$1) {
    originalConsoleError$1 = console.error;
    try {
      console.error = filteredConsoleError$1;
    } catch (e) {
    }
  }
}
function finishUsingConsoleFilter$1() {
  consoleFilterRefs$1--;
}
function filteredConsoleError$1(e, ...t) {
  if (consoleFilterRefs$1 > 0 && "string" == typeof e) {
    if (e.includes("Warning: Invalid hook call.") && e.includes("https://reactjs.org/link/invalid-hook-call"))
      return;
  }
  originalConsoleError$1(e, ...t);
}
var PROP_TYPE$1 = { Value: 0, JSON: 1, RegExp: 2, Date: 3, Map: 4, Set: 5, BigInt: 6, URL: 7, Uint8Array: 8, Uint16Array: 9, Uint32Array: 10 };
function serializeArray$1(e, t = {}, n = /* @__PURE__ */ new WeakSet()) {
  if (n.has(e))
    throw new Error(`Cyclic reference detected while serializing props for <${t.displayName} client:${t.hydrate}>!

Cyclic references cannot be safely serialized for client-side usage. Please remove the cyclic reference.`);
  n.add(e);
  const a = e.map((e2) => convertToSerializedForm$1(e2, t, n));
  return n.delete(e), a;
}
function serializeObject$1(e, t = {}, n = /* @__PURE__ */ new WeakSet()) {
  if (n.has(e))
    throw new Error(`Cyclic reference detected while serializing props for <${t.displayName} client:${t.hydrate}>!

Cyclic references cannot be safely serialized for client-side usage. Please remove the cyclic reference.`);
  n.add(e);
  const a = Object.fromEntries(Object.entries(e).map(([e2, a2]) => [e2, convertToSerializedForm$1(a2, t, n)]));
  return n.delete(e), a;
}
function convertToSerializedForm$1(e, t = {}, n = /* @__PURE__ */ new WeakSet()) {
  switch (Object.prototype.toString.call(e)) {
    case "[object Date]":
      return [PROP_TYPE$1.Date, e.toISOString()];
    case "[object RegExp]":
      return [PROP_TYPE$1.RegExp, e.source];
    case "[object Map]":
      return [PROP_TYPE$1.Map, JSON.stringify(serializeArray$1(Array.from(e), t, n))];
    case "[object Set]":
      return [PROP_TYPE$1.Set, JSON.stringify(serializeArray$1(Array.from(e), t, n))];
    case "[object BigInt]":
      return [PROP_TYPE$1.BigInt, e.toString()];
    case "[object URL]":
      return [PROP_TYPE$1.URL, e.toString()];
    case "[object Array]":
      return [PROP_TYPE$1.JSON, JSON.stringify(serializeArray$1(e, t, n))];
    case "[object Uint8Array]":
      return [PROP_TYPE$1.Uint8Array, JSON.stringify(Array.from(e))];
    case "[object Uint16Array]":
      return [PROP_TYPE$1.Uint16Array, JSON.stringify(Array.from(e))];
    case "[object Uint32Array]":
      return [PROP_TYPE$1.Uint32Array, JSON.stringify(Array.from(e))];
    default:
      return null !== e && "object" == typeof e ? [PROP_TYPE$1.Value, serializeObject$1(e, t, n)] : [PROP_TYPE$1.Value, e];
  }
}
function serializeProps$1(e, t) {
  return JSON.stringify(serializeObject$1(e, t));
}
function serializeListValue$1(e) {
  const t = {};
  return function e2(n) {
    n && "function" == typeof n.forEach ? n.forEach(e2) : n === Object(n) ? Object.keys(n).forEach((t2) => {
      n[t2] && e2(t2);
    }) : (n = false === n || null == n ? "" : String(n).trim()) && n.split(/\s+/).forEach((e3) => {
      t[e3] = true;
    });
  }(e), Object.keys(t).join(" ");
}
var HydrationDirectivesRaw$1 = ["load", "idle", "media", "visible", "only"];
var HydrationDirectives$1 = new Set(HydrationDirectivesRaw$1);
var HydrationDirectiveProps$1 = new Set(HydrationDirectivesRaw$1.map((e) => `client:${e}`));
function extractDirectives$1(e) {
  let t = { isPage: false, hydration: null, props: {} };
  for (const [n, a] of Object.entries(e))
    if (n.startsWith("server:") && "server:root" === n && (t.isPage = true), n.startsWith("client:"))
      switch (t.hydration || (t.hydration = { directive: "", value: "", componentUrl: "", componentExport: { value: "" } }), n) {
        case "client:component-path":
          t.hydration.componentUrl = a;
          break;
        case "client:component-export":
          t.hydration.componentExport.value = a;
          break;
        case "client:component-hydration":
        case "client:display-name":
          break;
        default:
          if (t.hydration.directive = n.split(":")[1], t.hydration.value = a, !HydrationDirectives$1.has(t.hydration.directive))
            throw new Error(`Error: invalid hydration directive "${n}". Supported hydration methods: ${Array.from(HydrationDirectiveProps$1).join(", ")}`);
          if ("media" === t.hydration.directive && "string" != typeof t.hydration.value)
            throw new Error('Error: Media query must be provided for "client:media", similar to client:media="(max-width: 600px)"');
      }
    else
      "class:list" === n ? a && (t.props[n.slice(0, -5)] = serializeListValue$1(a)) : t.props[n] = a;
  return t;
}
async function generateHydrateScript$1(e, t) {
  const { renderer: n, result: a, astroId: i, props: r, attrs: o } = e, { hydrate: s, componentUrl: p, componentExport: l } = t;
  if (!l.value)
    throw new Error(`Unable to resolve a valid export for "${t.displayName}"! Please open an issue at https://astro.build/issues!`);
  const c = { children: "", props: { uid: i } };
  if (o)
    for (const [e2, t2] of Object.entries(o))
      c.props[e2] = escapeHTML$1(t2);
  c.props["component-url"] = await a.resolve(decodeURI(p)), n.clientEntrypoint && (c.props["component-export"] = l.value, c.props["renderer-url"] = await a.resolve(decodeURI(n.clientEntrypoint)), c.props.props = escapeHTML$1(serializeProps$1(r, t))), c.props.ssr = "", c.props.client = s;
  let d = await a.resolve("astro:scripts/before-hydration.js");
  return d.length && (c.props["before-hydration-url"] = d), c.props.opts = escapeHTML$1(JSON.stringify({ name: t.displayName, value: t.hydrateArgs || "" })), c;
}
var SlotString$1 = class extends HTMLString$1 {
  constructor(e, t) {
    super(e), this.instructions = t;
  }
};
async function renderSlot$1(e, t, n) {
  if (t) {
    let e2 = renderChild$1(t), n2 = "", a = null;
    for await (const t2 of e2)
      "directive" === t2.type ? (null === a && (a = []), a.push(t2)) : n2 += t2;
    return markHTMLString$1(new SlotString$1(n2, a));
  }
  return n;
}
async function renderSlots$1(e, t = {}) {
  let n = null, a = {};
  return t && await Promise.all(Object.entries(t).map(([t2, i]) => renderSlot$1(e, i).then((e2) => {
    e2.instructions && (null === n && (n = []), n.push(...e2.instructions)), a[t2] = e2;
  }))), { slotInstructions: n, children: a };
}
async function* renderChild$1(e) {
  if ((e = await e) instanceof SlotString$1)
    e.instructions && (yield* e.instructions), yield e;
  else if (isHTMLString$1(e))
    yield e;
  else if (Array.isArray(e))
    for (const t of e)
      yield markHTMLString$1(await renderChild$1(t));
  else
    "function" == typeof e ? yield* renderChild$1(e()) : "string" == typeof e ? yield markHTMLString$1(escapeHTML$1(e)) : (e || 0 === e) && (e instanceof AstroComponent$1 || "[object AstroComponent]" === Object.prototype.toString.call(e) ? yield* renderAstroComponent$1(e) : ArrayBuffer.isView(e) ? yield e : "object" == typeof e && (Symbol.asyncIterator in e || Symbol.iterator in e) ? yield* e : yield e);
}
function validateComponentProps$1(e, t) {
  var n;
  if ((null == (n = Object.assign({ BASE_URL: "/", MODE: "production", DEV: false, PROD: true }, { _: process.env._ })) ? void 0 : n.DEV) && null != e)
    for (const n2 of Object.keys(e))
      HydrationDirectiveProps$1.has(n2) && console.warn(`You are attempting to render <${t} ${n2} />, but ${t} is an Astro component. Astro components do not render in the client and should not have a hydration directive. Please use a framework component for client rendering.`);
}
var AstroComponent$1 = class {
  constructor(e, t) {
    this.htmlParts = e, this.expressions = t;
  }
  get [Symbol.toStringTag]() {
    return "AstroComponent";
  }
  async *[Symbol.asyncIterator]() {
    const { htmlParts: e, expressions: t } = this;
    for (let n = 0; n < e.length; n++) {
      const a = e[n], i = t[n];
      yield markHTMLString$1(a), yield* renderChild$1(i);
    }
  }
};
function isAstroComponent$1(e) {
  return "object" == typeof e && "[object AstroComponent]" === Object.prototype.toString.call(e);
}
function isAstroComponentFactory$1(e) {
  return null != e && true === e.isAstroComponentFactory;
}
async function* renderAstroComponent$1(e) {
  for await (const t of e)
    if (t || 0 === t)
      for await (const e2 of renderChild$1(t))
        if ("directive" === e2.type)
          yield e2;
        else
          yield markHTMLString$1(e2);
}
async function renderToString$1(e, t, n, a) {
  const i = await t(e, n, a);
  if (!isAstroComponent$1(i)) {
    throw i;
  }
  let r = new HTMLParts$1();
  for await (const t2 of renderAstroComponent$1(i))
    r.append(t2, e);
  return r.toString();
}
async function renderToIterable$1(e, t, n, a, i) {
  validateComponentProps$1(a, n);
  const r = await t(e, a, i);
  if (!isAstroComponent$1(r)) {
    console.warn("Returning a Response is only supported inside of page components. Consider refactoring this logic into something like a function that can be used in the page.");
    throw r;
  }
  return renderAstroComponent$1(r);
}
async function renderTemplate$1(e, ...t) {
  return new AstroComponent$1(e, t);
}
var dictionary$1 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY";
var binary$1 = dictionary$1.length;
function bitwise$1(e) {
  let t = 0;
  if (0 === e.length)
    return t;
  for (let n = 0; n < e.length; n++) {
    t = (t << 5) - t + e.charCodeAt(n), t &= t;
  }
  return t;
}
function shorthash$1(e) {
  let t, n = "", a = bitwise$1(e);
  const i = a < 0 ? "Z" : "";
  for (a = Math.abs(a); a >= binary$1; )
    t = a % binary$1, a = Math.floor(a / binary$1), n = dictionary$1[t] + n;
  return a > 0 && (n = dictionary$1[a] + n), i + n;
}
var voidElementNames$1 = /^(area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/i;
var htmlBooleanAttributes$1 = /^(allowfullscreen|async|autofocus|autoplay|controls|default|defer|disabled|disablepictureinpicture|disableremoteplayback|formnovalidate|hidden|loop|nomodule|novalidate|open|playsinline|readonly|required|reversed|scoped|seamless|itemscope)$/i;
var htmlEnumAttributes$1 = /^(contenteditable|draggable|spellcheck|value)$/i;
var svgEnumAttributes$1 = /^(autoReverse|externalResourcesRequired|focusable|preserveAlpha)$/i;
var STATIC_DIRECTIVES$1 = /* @__PURE__ */ new Set(["set:html", "set:text"]);
var toAttributeString$1 = (e, t = true) => t ? String(e).replace(/&/g, "&#38;").replace(/"/g, "&#34;") : e;
var kebab$1 = (e) => e.toLowerCase() === e ? e : e.replace(/[A-Z]/g, (e2) => `-${e2.toLowerCase()}`);
function defineScriptVars$1(e) {
  let t = "";
  for (const [a, i] of Object.entries(e))
    t += `const ${n = a, n.trim().replace(/(?:(?!^)\b\w|\s+|[^\w]+)/g, (e2, t2) => /[^\w]|\s/.test(e2) ? "" : 0 === t2 ? e2 : e2.toUpperCase())} = ${JSON.stringify(i)};
`;
  var n;
  return markHTMLString$1(t);
}
function formatList$1(e) {
  return 1 === e.length ? e[0] : `${e.slice(0, -1).join(", ")} or ${e[e.length - 1]}`;
}
function addAttribute$1(e, t, n = true) {
  if (null == e)
    return "";
  if (false === e)
    return htmlEnumAttributes$1.test(t) || svgEnumAttributes$1.test(t) ? markHTMLString$1(` ${t}="false"`) : "";
  if (STATIC_DIRECTIVES$1.has(t))
    return console.warn(`[astro] The "${t}" directive cannot be applied dynamically at runtime. It will not be rendered as an attribute.

Make sure to use the static attribute syntax (\`${t}={value}\`) instead of the dynamic spread syntax (\`{...{ "${t}": value }}\`).`), "";
  if ("class:list" === t) {
    const a2 = toAttributeString$1(serializeListValue$1(e), n);
    return "" === a2 ? "" : markHTMLString$1(` ${t.slice(0, -5)}="${a2}"`);
  }
  return "style" !== t || e instanceof HTMLString$1 || "object" != typeof e ? "className" === t ? markHTMLString$1(` class="${toAttributeString$1(e, n)}"`) : true === e && (t.startsWith("data-") || htmlBooleanAttributes$1.test(t)) ? markHTMLString$1(` ${t}`) : markHTMLString$1(` ${t}="${toAttributeString$1(e, n)}"`) : markHTMLString$1(` ${t}="${toAttributeString$1((a = e, Object.entries(a).map(([e2, t2]) => `${kebab$1(e2)}:${t2}`).join(";")), n)}"`);
  var a;
}
function internalSpreadAttributes$1(e, t = true) {
  let n = "";
  for (const [a, i] of Object.entries(e))
    n += addAttribute$1(i, a, t);
  return markHTMLString$1(n);
}
function renderElement$2(e, { props: t, children: n = "" }, a = true) {
  const { lang: i, "data-astro-id": r, "define:vars": o, ...s } = t;
  return o && ("style" === e && (delete s["is:global"], delete s["is:scoped"]), "script" === e && (delete s.hoist, n = defineScriptVars$1(o) + "\n" + n)), null != n && "" != n || !voidElementNames$1.test(e) ? `<${e}${internalSpreadAttributes$1(s, a)}>${n}</${e}>` : `<${e}${internalSpreadAttributes$1(s, a)} />`;
}
function componentIsHTMLElement$1(e) {
  return "undefined" != typeof HTMLElement && HTMLElement.isPrototypeOf(e);
}
async function renderHTMLElement$1(e, t, n, a) {
  const i = getHTMLElementName$1(t);
  let r = "";
  for (const e2 in n)
    r += ` ${e2}="${toAttributeString$1(await n[e2])}"`;
  return markHTMLString$1(`<${i}${r}>${await renderSlot$1(e, null == a ? void 0 : a.default)}</${i}>`);
}
function getHTMLElementName$1(e) {
  const t = customElements.getName(e);
  if (t)
    return t;
  return e.name.replace(/^HTML|Element$/g, "").replace(/[A-Z]/g, "-$&").toLowerCase().replace(/^-/, "html-");
}
var rendererAliases$1 = /* @__PURE__ */ new Map([["solid", "solid-js"]]);
function guessRenderers$1(e) {
  switch (null == e ? void 0 : e.split(".").pop()) {
    case "svelte":
      return ["@astrojs/svelte"];
    case "vue":
      return ["@astrojs/vue"];
    case "jsx":
    case "tsx":
      return ["@astrojs/react", "@astrojs/preact", "@astrojs/vue (jsx)"];
    default:
      return ["@astrojs/react", "@astrojs/preact", "@astrojs/vue", "@astrojs/svelte"];
  }
}
function getComponentType$1(e) {
  return e === Fragment$1 ? "fragment" : e && "object" == typeof e && e["astro:html"] ? "html" : isAstroComponentFactory$1(e) ? "astro-factory" : "unknown";
}
async function renderComponent$1(e, t, n, a, i = {}) {
  var r;
  switch (getComponentType$1(n = await n ?? n)) {
    case "fragment": {
      const t2 = await renderSlot$1(e, null == i ? void 0 : i.default);
      return null == t2 ? t2 : markHTMLString$1(t2);
    }
    case "html": {
      const { slotInstructions: t2, children: a2 } = await renderSlots$1(e, i), r2 = n.render({ slots: a2 }), o2 = t2 ? t2.map((t3) => stringifyChunk$1(e, t3)).join("") : "";
      return markHTMLString$1(o2 + r2);
    }
    case "astro-factory":
      return async function* () {
        let r2 = await renderToIterable$1(e, n, t, a, i);
        yield* r2;
      }();
  }
  if (!n && !a["client:only"])
    throw new Error(`Unable to render ${t} because it is ${n}!
Did you forget to import the component or is it possible there is a typo?`);
  const { renderers: o } = e._metadata, s = { displayName: t }, { hydration: p, isPage: l, props: c } = extractDirectives$1(a);
  let d, m = "";
  p && (s.hydrate = p.directive, s.hydrateArgs = p.value, s.componentExport = p.componentExport, s.componentUrl = p.componentUrl);
  const u = guessRenderers$1(s.componentUrl);
  if (Array.isArray(o) && 0 === o.length && "string" != typeof n && !componentIsHTMLElement$1(n)) {
    const e2 = `Unable to render ${s.displayName}!

There are no \`integrations\` set in your \`astro.config.mjs\` file.
Did you mean to add ${formatList$1(u.map((e3) => "`" + e3 + "`"))}?`;
    throw new Error(e2);
  }
  const { children: f, slotInstructions: h } = await renderSlots$1(e, i);
  let v;
  if ("only" !== s.hydrate) {
    let t2 = false;
    try {
      t2 = n && n[Renderer$1];
    } catch {
    }
    if (t2) {
      const e2 = n[Renderer$1];
      v = o.find(({ name: t3 }) => t3 === e2);
    }
    if (!v) {
      let t3;
      for (const a2 of o)
        try {
          if (await a2.ssr.check.call({ result: e }, n, c, f)) {
            v = a2;
            break;
          }
        } catch (e2) {
          t3 ?? (t3 = e2);
        }
      if (!v && t3)
        throw t3;
    }
    if (!v && "function" == typeof HTMLElement && componentIsHTMLElement$1(n)) {
      return renderHTMLElement$1(e, n, a, i);
    }
  } else {
    if (s.hydrateArgs) {
      const e2 = s.hydrateArgs, t2 = rendererAliases$1.has(e2) ? rendererAliases$1.get(e2) : e2;
      v = o.find(({ name: e3 }) => e3 === `@astrojs/${t2}` || e3 === t2);
    }
    if (v || 1 !== o.length || (v = o[0]), !v) {
      const e2 = null == (r = s.componentUrl) ? void 0 : r.split(".").pop();
      v = o.filter(({ name: t2 }) => t2 === `@astrojs/${e2}` || t2 === e2)[0];
    }
  }
  if (v)
    "only" === s.hydrate ? m = await renderSlot$1(e, null == i ? void 0 : i.fallback) : { html: m, attrs: d } = await v.ssr.renderToStaticMarkup.call({ result: e }, n, c, f, s);
  else {
    if ("only" === s.hydrate)
      throw new Error(`Unable to render ${s.displayName}!

Using the \`client:only\` hydration strategy, Astro needs a hint to use the correct renderer.
Did you mean to pass <${s.displayName} client:only="${u.map((e2) => e2.replace("@astrojs/", "")).join("|")}" />
`);
    if ("string" != typeof n) {
      const t2 = o.filter((e2) => u.includes(e2.name)), a2 = o.length > 1;
      if (0 === t2.length)
        throw new Error(`Unable to render ${s.displayName}!

There ${a2 ? "are" : "is"} ${o.length} renderer${a2 ? "s" : ""} configured in your \`astro.config.mjs\` file,
but ${a2 ? "none were" : "it was not"} able to server-side render ${s.displayName}.

Did you mean to enable ${formatList$1(u.map((e2) => "`" + e2 + "`"))}?`);
      if (1 !== t2.length)
        throw new Error(`Unable to render ${s.displayName}!

This component likely uses ${formatList$1(u)},
but Astro encountered an error during server-side rendering.

Please ensure that ${s.displayName}:
1. Does not unconditionally access browser-specific globals like \`window\` or \`document\`.
   If this is unavoidable, use the \`client:only\` hydration directive.
2. Does not conditionally return \`null\` or \`undefined\` when rendered on the server.

If you're still stuck, please open an issue on GitHub or join us at https://astro.build/chat.`);
      v = t2[0], { html: m, attrs: d } = await v.ssr.renderToStaticMarkup.call({ result: e }, n, c, f, s);
    }
  }
  if (v && !v.clientEntrypoint && "@astrojs/lit" !== v.name && s.hydrate)
    throw new Error(`${s.displayName} component has a \`client:${s.hydrate}\` directive, but no client entrypoint was provided by ${v.name}!`);
  if (!m && "string" == typeof n) {
    const e2 = Object.values(f).join(""), t2 = renderAstroComponent$1(await renderTemplate$1`<${n}${internalSpreadAttributes$1(c)}${markHTMLString$1("" === e2 && voidElementNames$1.test(n) ? "/>" : `>${e2}</${n}>`)}`);
    m = "";
    for await (const e3 of t2)
      m += e3;
  }
  if (!p)
    return async function* () {
      h && (yield* h), l || "astro:jsx" === (null == v ? void 0 : v.name) ? yield m : yield markHTMLString$1(m.replace(/\<\/?astro-slot\>/g, ""));
    }();
  const g = shorthash$1(`<!--${s.componentExport.value}:${s.componentUrl}-->
${m}
${serializeProps$1(c, s)}`), y = await generateHydrateScript$1({ renderer: v, result: e, astroId: g, props: c, attrs: d }, s);
  let x = [];
  if (m) {
    if (Object.keys(f).length > 0)
      for (const e2 of Object.keys(f))
        m.includes("default" === e2 ? "<astro-slot>" : `<astro-slot name="${e2}">`) || x.push(e2);
  } else
    x = Object.keys(f);
  const w = x.length > 0 ? x.map((e2) => `<template data-astro-template${"default" !== e2 ? `="${e2}"` : ""}>${f[e2]}</template>`).join("") : "";
  return y.children = `${m ?? ""}${w}`, y.children && (y.props["await-children"] = ""), async function* () {
    h && (yield* h), yield { type: "directive", hydration: p, result: e }, yield markHTMLString$1(renderElement$2("astro-island", y, false));
  }();
}
var uniqueElements$1 = (e, t, n) => {
  const a = JSON.stringify(e.props), i = e.children;
  return t === n.findIndex((e2) => JSON.stringify(e2.props) === a && e2.children == i);
};
function renderHead$1(e) {
  e._metadata.hasRenderedHead = true;
  const t = Array.from(e.styles).filter(uniqueElements$1).map((e2) => renderElement$2("style", e2));
  e.styles.clear();
  const n = Array.from(e.scripts).filter(uniqueElements$1).map((e2, t2) => renderElement$2("script", e2, false)), a = Array.from(e.links).filter(uniqueElements$1).map((e2) => renderElement$2("link", e2, false));
  return markHTMLString$1(a.join("\n") + t.join("\n") + n.join("\n"));
}
async function* maybeRenderHead$1(e) {
  e._metadata.hasRenderedHead || (yield renderHead$1(e));
}
var __accessCheck$2 = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
};
var __privateGet$2 = (e, t, n) => (__accessCheck$2(e, t, "read from private field"), n ? n.call(e) : t.get(e));
var __privateAdd$2 = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
};
var __privateSet$2 = (e, t, n, a) => (__accessCheck$2(e, t, "write to private field"), a ? a.call(e, n) : t.set(e, n), n);
var isNodeJS = "object" == typeof process && "[object process]" === Object.prototype.toString.call(process);
var StreamingCompatibleResponse;
function createResponseClass() {
  var e, t, n;
  return n = class extends Response {
    constructor(n2, a) {
      let i = n2 instanceof ReadableStream;
      super(i ? null : n2, a), __privateAdd$2(this, e, void 0), __privateAdd$2(this, t, void 0), __privateSet$2(this, e, i), __privateSet$2(this, t, n2);
    }
    get body() {
      return __privateGet$2(this, t);
    }
    async text() {
      if (__privateGet$2(this, e) && isNodeJS) {
        let e2 = new TextDecoder(), n2 = __privateGet$2(this, t), a = "";
        for await (let t2 of n2)
          a += e2.decode(t2);
        return a;
      }
      return super.text();
    }
    async arrayBuffer() {
      if (__privateGet$2(this, e) && isNodeJS) {
        let e2 = __privateGet$2(this, t), n2 = [], a = 0;
        for await (let t2 of e2)
          n2.push(t2), a += t2.length;
        let i = new Uint8Array(a), r = 0;
        for (const e3 of n2)
          i.set(e3, r), r += e3.length;
        return i;
      }
      return super.arrayBuffer();
    }
  }, e = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap(), StreamingCompatibleResponse = n, StreamingCompatibleResponse;
}
var createResponse = isNodeJS ? (e, t) => "string" == typeof e || ArrayBuffer.isView(e) ? new Response(e, t) : void 0 === StreamingCompatibleResponse ? new (createResponseClass())(e, t) : new StreamingCompatibleResponse(e, t) : (e, t) => new Response(e, t);
var needsHeadRenderingSymbol = Symbol.for("astro.needsHeadRendering");
function nonAstroPageNeedsHeadInjection(e) {
  return needsHeadRenderingSymbol in e && !!e[needsHeadRenderingSymbol];
}
async function iterableToHTMLBytes(e, t, n) {
  const a = new HTMLParts$1();
  let i = 0;
  for await (const r of t)
    isHTMLString$1(r) && 0 === i && (i++, /<!doctype html/i.test(String(r)) || (a.append("<!DOCTYPE html>\n", e), n && await n(a))), a.append(r, e);
  return a.toArrayBuffer();
}
async function renderPage$1(e, t, n, a, i) {
  if (!isAstroComponentFactory$1(t)) {
    const a2 = { ...n ?? {}, "server:root": true }, i2 = await renderComponent$1(e, t.name, t, a2, null), r2 = await iterableToHTMLBytes(e, i2, async (n2) => {
      if (nonAstroPageNeedsHeadInjection(t))
        for await (let t2 of maybeRenderHead$1(e))
          n2.append(t2, e);
    });
    return new Response(r2, { headers: new Headers([["Content-Type", "text/html; charset=utf-8"], ["Content-Length", r2.byteLength.toString()]]) });
  }
  const r = await t(e, n, a);
  if (isAstroComponent$1(r)) {
    let t2, n2 = renderAstroComponent$1(r), a2 = e.response, o = new Headers(a2.headers);
    return i ? t2 = new ReadableStream({ start(t3) {
      !async function() {
        let a3 = 0;
        try {
          for await (const i2 of n2) {
            isHTMLString$1(i2) && 0 === a3 && (/<!doctype html/i.test(String(i2)) || t3.enqueue(encoder$1.encode("<!DOCTYPE html>\n")));
            const n3 = chunkToByteArray(e, i2);
            t3.enqueue(n3), a3++;
          }
          t3.close();
        } catch (e2) {
          t3.error(e2);
        }
      }();
    } }) : (t2 = await iterableToHTMLBytes(e, n2), o.set("Content-Length", t2.byteLength.toString())), createResponse(t2, { ...a2, headers: o });
  }
  if (!(r instanceof Response))
    throw new Error("Only instance of Response can be returned from an Astro file");
  return r;
}
function spreadAttributes$1(e, t, { class: n } = {}) {
  let a = "";
  n && (void 0 !== e.class ? e.class += ` ${n}` : void 0 !== e["class:list"] ? e["class:list"] = [e["class:list"], n] : e.class = n);
  for (const [t2, n2] of Object.entries(e))
    a += addAttribute$1(n2, t2, true);
  return markHTMLString$1(a);
}
var FORCE_COLOR;
var NODE_DISABLE_COLORS;
var NO_COLOR;
var TERM;
var isTTY = true;
"undefined" != typeof process && ({ FORCE_COLOR, NODE_DISABLE_COLORS, NO_COLOR, TERM } = process.env || {}, isTTY = process.stdout && process.stdout.isTTY);
var $ = { enabled: !NODE_DISABLE_COLORS && null == NO_COLOR && "dumb" !== TERM && (null != FORCE_COLOR && "0" !== FORCE_COLOR || isTTY) };
function init(e, t) {
  let n = new RegExp(`\\x1b\\[${t}m`, "g"), a = `\x1B[${e}m`, i = `\x1B[${t}m`;
  return function(e2) {
    return $.enabled && null != e2 ? a + (~("" + e2).indexOf(i) ? e2.replace(n, i + a) : e2) + i : e2;
  };
}
var reset = init(0, 0);
var bold = init(1, 22);
var dim = init(2, 22);
var red = init(31, 39);
var yellow = init(33, 39);
var cyan = init(36, 39);
var eastasianwidth = { exports: {} };
!function(e) {
  var t = {};
  function n(e2) {
    return e2.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[^\uD800-\uDFFF]/g) || [];
  }
  eastasianwidth.exports = t, t.eastAsianWidth = function(e2) {
    var t2 = e2.charCodeAt(0), n2 = 2 == e2.length ? e2.charCodeAt(1) : 0, a = t2;
    return 55296 <= t2 && t2 <= 56319 && 56320 <= n2 && n2 <= 57343 && (a = (t2 &= 1023) << 10 | (n2 &= 1023), a += 65536), 12288 == a || 65281 <= a && a <= 65376 || 65504 <= a && a <= 65510 ? "F" : 8361 == a || 65377 <= a && a <= 65470 || 65474 <= a && a <= 65479 || 65482 <= a && a <= 65487 || 65490 <= a && a <= 65495 || 65498 <= a && a <= 65500 || 65512 <= a && a <= 65518 ? "H" : 4352 <= a && a <= 4447 || 4515 <= a && a <= 4519 || 4602 <= a && a <= 4607 || 9001 <= a && a <= 9002 || 11904 <= a && a <= 11929 || 11931 <= a && a <= 12019 || 12032 <= a && a <= 12245 || 12272 <= a && a <= 12283 || 12289 <= a && a <= 12350 || 12353 <= a && a <= 12438 || 12441 <= a && a <= 12543 || 12549 <= a && a <= 12589 || 12593 <= a && a <= 12686 || 12688 <= a && a <= 12730 || 12736 <= a && a <= 12771 || 12784 <= a && a <= 12830 || 12832 <= a && a <= 12871 || 12880 <= a && a <= 13054 || 13056 <= a && a <= 19903 || 19968 <= a && a <= 42124 || 42128 <= a && a <= 42182 || 43360 <= a && a <= 43388 || 44032 <= a && a <= 55203 || 55216 <= a && a <= 55238 || 55243 <= a && a <= 55291 || 63744 <= a && a <= 64255 || 65040 <= a && a <= 65049 || 65072 <= a && a <= 65106 || 65108 <= a && a <= 65126 || 65128 <= a && a <= 65131 || 110592 <= a && a <= 110593 || 127488 <= a && a <= 127490 || 127504 <= a && a <= 127546 || 127552 <= a && a <= 127560 || 127568 <= a && a <= 127569 || 131072 <= a && a <= 194367 || 177984 <= a && a <= 196605 || 196608 <= a && a <= 262141 ? "W" : 32 <= a && a <= 126 || 162 <= a && a <= 163 || 165 <= a && a <= 166 || 172 == a || 175 == a || 10214 <= a && a <= 10221 || 10629 <= a && a <= 10630 ? "Na" : 161 == a || 164 == a || 167 <= a && a <= 168 || 170 == a || 173 <= a && a <= 174 || 176 <= a && a <= 180 || 182 <= a && a <= 186 || 188 <= a && a <= 191 || 198 == a || 208 == a || 215 <= a && a <= 216 || 222 <= a && a <= 225 || 230 == a || 232 <= a && a <= 234 || 236 <= a && a <= 237 || 240 == a || 242 <= a && a <= 243 || 247 <= a && a <= 250 || 252 == a || 254 == a || 257 == a || 273 == a || 275 == a || 283 == a || 294 <= a && a <= 295 || 299 == a || 305 <= a && a <= 307 || 312 == a || 319 <= a && a <= 322 || 324 == a || 328 <= a && a <= 331 || 333 == a || 338 <= a && a <= 339 || 358 <= a && a <= 359 || 363 == a || 462 == a || 464 == a || 466 == a || 468 == a || 470 == a || 472 == a || 474 == a || 476 == a || 593 == a || 609 == a || 708 == a || 711 == a || 713 <= a && a <= 715 || 717 == a || 720 == a || 728 <= a && a <= 731 || 733 == a || 735 == a || 768 <= a && a <= 879 || 913 <= a && a <= 929 || 931 <= a && a <= 937 || 945 <= a && a <= 961 || 963 <= a && a <= 969 || 1025 == a || 1040 <= a && a <= 1103 || 1105 == a || 8208 == a || 8211 <= a && a <= 8214 || 8216 <= a && a <= 8217 || 8220 <= a && a <= 8221 || 8224 <= a && a <= 8226 || 8228 <= a && a <= 8231 || 8240 == a || 8242 <= a && a <= 8243 || 8245 == a || 8251 == a || 8254 == a || 8308 == a || 8319 == a || 8321 <= a && a <= 8324 || 8364 == a || 8451 == a || 8453 == a || 8457 == a || 8467 == a || 8470 == a || 8481 <= a && a <= 8482 || 8486 == a || 8491 == a || 8531 <= a && a <= 8532 || 8539 <= a && a <= 8542 || 8544 <= a && a <= 8555 || 8560 <= a && a <= 8569 || 8585 == a || 8592 <= a && a <= 8601 || 8632 <= a && a <= 8633 || 8658 == a || 8660 == a || 8679 == a || 8704 == a || 8706 <= a && a <= 8707 || 8711 <= a && a <= 8712 || 8715 == a || 8719 == a || 8721 == a || 8725 == a || 8730 == a || 8733 <= a && a <= 8736 || 8739 == a || 8741 == a || 8743 <= a && a <= 8748 || 8750 == a || 8756 <= a && a <= 8759 || 8764 <= a && a <= 8765 || 8776 == a || 8780 == a || 8786 == a || 8800 <= a && a <= 8801 || 8804 <= a && a <= 8807 || 8810 <= a && a <= 8811 || 8814 <= a && a <= 8815 || 8834 <= a && a <= 8835 || 8838 <= a && a <= 8839 || 8853 == a || 8857 == a || 8869 == a || 8895 == a || 8978 == a || 9312 <= a && a <= 9449 || 9451 <= a && a <= 9547 || 9552 <= a && a <= 9587 || 9600 <= a && a <= 9615 || 9618 <= a && a <= 9621 || 9632 <= a && a <= 9633 || 9635 <= a && a <= 9641 || 9650 <= a && a <= 9651 || 9654 <= a && a <= 9655 || 9660 <= a && a <= 9661 || 9664 <= a && a <= 9665 || 9670 <= a && a <= 9672 || 9675 == a || 9678 <= a && a <= 9681 || 9698 <= a && a <= 9701 || 9711 == a || 9733 <= a && a <= 9734 || 9737 == a || 9742 <= a && a <= 9743 || 9748 <= a && a <= 9749 || 9756 == a || 9758 == a || 9792 == a || 9794 == a || 9824 <= a && a <= 9825 || 9827 <= a && a <= 9829 || 9831 <= a && a <= 9834 || 9836 <= a && a <= 9837 || 9839 == a || 9886 <= a && a <= 9887 || 9918 <= a && a <= 9919 || 9924 <= a && a <= 9933 || 9935 <= a && a <= 9953 || 9955 == a || 9960 <= a && a <= 9983 || 10045 == a || 10071 == a || 10102 <= a && a <= 10111 || 11093 <= a && a <= 11097 || 12872 <= a && a <= 12879 || 57344 <= a && a <= 63743 || 65024 <= a && a <= 65039 || 65533 == a || 127232 <= a && a <= 127242 || 127248 <= a && a <= 127277 || 127280 <= a && a <= 127337 || 127344 <= a && a <= 127386 || 917760 <= a && a <= 917999 || 983040 <= a && a <= 1048573 || 1048576 <= a && a <= 1114109 ? "A" : "N";
  }, t.characterLength = function(e2) {
    var t2 = this.eastAsianWidth(e2);
    return "F" == t2 || "W" == t2 || "A" == t2 ? 2 : 1;
  }, t.length = function(e2) {
    for (var t2 = n(e2), a = 0, i = 0; i < t2.length; i++)
      a += this.characterLength(t2[i]);
    return a;
  }, t.slice = function(e2, a, i) {
    textLen = t.length(e2), i = i || 1, (a = a || 0) < 0 && (a = textLen + a), i < 0 && (i = textLen + i);
    for (var r = "", o = 0, s = n(e2), p = 0; p < s.length; p++) {
      var l = s[p], c = t.length(l);
      if (o >= a - (2 == c ? 1 : 0)) {
        if (!(o + c <= i))
          break;
        r += l;
      }
      o += c;
    }
    return r;
  };
}();
var dateTimeFormat = new Intl.DateTimeFormat([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
var levels = { debug: 20, info: 30, warn: 40, error: 50, silent: 90 };
function log(e, t, n, a) {
  const i = e.level, r = e.dest, o = { type: n, level: t, message: a };
  levels[i] > levels[t] || r.write(o);
}
function warn(e, t, n) {
  return log(e, "warn", t, n);
}
function error(e, t, n) {
  return log(e, "error", t, n);
}
function debug(...e) {
  "_astroGlobalDebug" in globalThis && globalThis._astroGlobalDebug(...e);
}
"undefined" != typeof process && (process.argv.includes("--verbose") || process.argv.includes("--silent"));
var VALID_PARAM_TYPES = ["string", "number", "undefined"];
function validateGetStaticPathsParameter([e, t]) {
  if (!VALID_PARAM_TYPES.includes(typeof t))
    throw new Error(`[getStaticPaths] invalid route parameter for "${e}". Expected a string or number, received \`${t}\` ("${typeof t}")`);
}
function validateDynamicRouteModule(e, { ssr: t, logging: n }) {
  if (e.createCollection)
    throw new Error("[createCollection] deprecated. Please use getStaticPaths() instead.");
  if (t && e.getStaticPaths && warn(n, "getStaticPaths", 'getStaticPaths() is ignored when "output: server" is set.'), !t && !e.getStaticPaths)
    throw new Error('[getStaticPaths] getStaticPaths() function is required.\nMake sure that you `export` a `getStaticPaths` function from your dynamic route.\nAlternatively, set `output: "server"` in your Astro config file to switch to a non-static server build. ');
}
function validateGetStaticPathsResult(e, t) {
  if (!Array.isArray(e))
    throw new Error(`[getStaticPaths] invalid return value. Expected an array of path objects, but got \`${JSON.stringify(e)}\`.`);
  e.forEach((e2) => {
    if (e2.params)
      for (const [n, a] of Object.entries(e2.params))
        void 0 !== a && "string" != typeof a && warn(t, "getStaticPaths", `invalid path param: ${n}. A string value was expected, but got \`${JSON.stringify(a)}\`.`), "" === a && warn(t, "getStaticPaths", `invalid path param: ${n}. \`undefined\` expected for an optional param, but got empty string.`);
    else
      warn(t, "getStaticPaths", `invalid path object. Expected an object with key \`params\`, but got \`${JSON.stringify(e2)}\`. Skipped.`);
  });
}
function getParams(e) {
  return (t) => {
    const n = {};
    return e.forEach((e2, a) => {
      e2.startsWith("...") ? n[e2.slice(3)] = t[a + 1] ? decodeURIComponent(t[a + 1]) : void 0 : n[e2] = decodeURIComponent(t[a + 1]);
    }), n;
  };
}
function stringifyParams(e) {
  const t = Object.entries(e).reduce((e2, t2) => {
    validateGetStaticPathsParameter(t2);
    const [n, a] = t2;
    return e2[n] = void 0 === a ? void 0 : `${a}`, e2;
  }, {});
  return JSON.stringify(t, Object.keys(e).sort());
}
var SCRIPT_EXTENSIONS$1 = /* @__PURE__ */ new Set([".js", ".ts"]);
var scriptRe = new RegExp(`\\.(${Array.from(SCRIPT_EXTENSIONS$1).map((e) => e.slice(1)).join("|")})($|\\?)`);
var isScriptRequest = (e) => scriptRe.test(e);
var STYLE_EXTENSIONS$1 = /* @__PURE__ */ new Set([".css", ".pcss", ".postcss", ".scss", ".sass", ".styl", ".stylus", ".less"]);
var cssRe = new RegExp(`\\.(${Array.from(STYLE_EXTENSIONS$1).map((e) => e.slice(1)).join("|")})($|\\?)`);
var isCSSRequest = (e) => cssRe.test(e);
var _cache;
var _result;
var _slots;
var _loggingOpts;
var __accessCheck$1 = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
};
var __privateGet$1 = (e, t, n) => (__accessCheck$1(e, t, "read from private field"), n ? n.call(e) : t.get(e));
var __privateAdd$1 = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
};
var __privateSet$1 = (e, t, n, a) => (__accessCheck$1(e, t, "write to private field"), a ? a.call(e, n) : t.set(e, n), n);
var clientAddressSymbol$1 = Symbol.for("astro.clientAddress");
function onlyAvailableInSSR(e) {
  return function() {
    throw new Error(`Oops, you are trying to use ${e}, which is only available with SSR.`);
  };
}
function getFunctionExpression(e) {
  var t;
  if (e && 1 === (null == (t = e.expressions) ? void 0 : t.length))
    return e.expressions[0];
}
var Slots = class {
  constructor(e, t, n) {
    if (__privateAdd$1(this, _cache, /* @__PURE__ */ new Map()), __privateAdd$1(this, _result, void 0), __privateAdd$1(this, _slots, void 0), __privateAdd$1(this, _loggingOpts, void 0), __privateSet$1(this, _result, e), __privateSet$1(this, _slots, t), __privateSet$1(this, _loggingOpts, n), t)
      for (const e2 of Object.keys(t)) {
        if (void 0 !== this[e2])
          throw new Error(`Unable to create a slot named "${e2}". "${e2}" is a reserved slot name!
Please update the name of this slot.`);
        Object.defineProperty(this, e2, { get: () => true, enumerable: true });
      }
  }
  has(e) {
    return !!__privateGet$1(this, _slots) && Boolean(__privateGet$1(this, _slots)[e]);
  }
  async render(e, t = []) {
    const n = 0 === t.length;
    if (!__privateGet$1(this, _slots))
      return;
    if (n && __privateGet$1(this, _cache).has(e)) {
      return __privateGet$1(this, _cache).get(e);
    }
    if (!this.has(e))
      return;
    if (!n) {
      const n2 = await __privateGet$1(this, _slots)[e]();
      if (Array.isArray(t)) {
        const e2 = getFunctionExpression(n2);
        if (e2) {
          const n3 = e2(...t);
          return await renderSlot$1(__privateGet$1(this, _result), n3).then((e3) => null != e3 ? String(e3) : e3);
        }
        if ("function" == typeof n2)
          return await renderJSX$1(__privateGet$1(this, _result), n2(...t)).then((e3) => null != e3 ? String(e3) : e3);
      } else
        warn(__privateGet$1(this, _loggingOpts), "Astro.slots.render", `Expected second parameter to be an array, received a ${typeof t}. If you're trying to pass an array as a single argument and getting unexpected results, make sure you're passing your array as a item of an array. Ex: Astro.slots.render('default', [["Hello", "World"]])`);
    }
    const a = await renderSlot$1(__privateGet$1(this, _result), __privateGet$1(this, _slots)[e]).then((e2) => null != e2 ? String(e2) : e2);
    return n && __privateGet$1(this, _cache).set(e, a), a;
  }
};
_cache = /* @__PURE__ */ new WeakMap(), _result = /* @__PURE__ */ new WeakMap(), _slots = /* @__PURE__ */ new WeakMap(), _loggingOpts = /* @__PURE__ */ new WeakMap();
var renderMarkdown = null;
function createResult(e) {
  const { markdown: t, params: n, pathname: a, renderers: i, request: r, resolve: o } = e, s = new URL(r.url), p = new Headers();
  p.set("Content-Type", "text/html");
  const l = { status: e.status, statusText: "OK", headers: p };
  let c;
  Object.defineProperty(l, "headers", { value: l.headers, enumerable: true, writable: false });
  const d = { styles: e.styles ?? /* @__PURE__ */ new Set(), scripts: e.scripts ?? /* @__PURE__ */ new Set(), links: e.links ?? /* @__PURE__ */ new Set(), cookies: c, createAstro(a2, i2, o2) {
    const p2 = new Slots(d, o2, e.logging), m = { __proto__: a2, get clientAddress() {
      if (!(clientAddressSymbol$1 in r))
        throw e.adapterName ? new Error(`Astro.clientAddress is not available in the ${e.adapterName} adapter. File an issue with the adapter to add support.`) : new Error("Astro.clientAddress is not available in your environment. Ensure that you are using an SSR adapter that supports this feature.");
      return Reflect.get(r, clientAddressSymbol$1);
    }, get cookies() {
      return c || (c = new AstroCookies(r), d.cookies = c, c);
    }, params: n, props: i2, request: r, url: s, redirect: e.ssr ? (e2, t2) => new Response(null, { status: t2 || 302, headers: { Location: e2 } }) : onlyAvailableInSSR("Astro.redirect"), resolve(t2) {
      let n2 = `This can be replaced with a dynamic import like so: await import("${t2}")`;
      return isCSSRequest(t2) ? n2 = `It looks like you are resolving styles. If you are adding a link tag, replace with this:
---
import "${t2}";
---
` : isScriptRequest(t2) && (n2 = `It looks like you are resolving scripts. If you are adding a script tag, replace with this:

<script type="module" src={(await import("${t2}?url")).default}><\/script>

or consider make it a module like so:

<script>
	import MyModule from "${t2}";
<\/script>
`), warn(e.logging, "deprecation", `${bold("Astro.resolve()")} is deprecated. We see that you are trying to resolve ${t2}.
${n2}`), "";
    }, response: l, slots: p2 };
    return Object.defineProperty(m, "canonicalURL", { get: function() {
      return warn(e.logging, "deprecation", `${bold("Astro.canonicalURL")} is deprecated! Use \`Astro.url\` instead.
Example:

---
const canonicalURL = new URL(Astro.url.pathname, Astro.site);
---
`), new URL(this.request.url.pathname, this.site);
    } }), Object.defineProperty(m, "__renderMarkdown", { enumerable: false, writable: false, value: async function(e2, n2) {
      if ("undefined" != typeof Deno)
        throw new Error("Markdown is not supported in Deno SSR");
      if (!renderMarkdown) {
        let e3 = "@astrojs/";
        e3 += "markdown-remark", renderMarkdown = (await import(e3)).renderMarkdown;
      }
      const { code: a3 } = await renderMarkdown(e2, { ...t, ...n2 ?? {} });
      return a3;
    } }), m;
  }, resolve: o, _metadata: { renderers: i, pathname: a, hasHydrationScript: false, hasRenderedHead: false, hasDirectives: /* @__PURE__ */ new Set() }, response: l };
  return d;
}
function generatePaginateFunction(e) {
  return function(t, n = {}) {
    let { pageSize: a, params: i, props: r } = n;
    const o = a || 10, s = "page", p = i || {}, l = r || {};
    let c;
    if (e.params.includes("...page"))
      c = false;
    else {
      if (!e.params.includes("page"))
        throw new Error("[paginate()] page number param `page` not found in your filepath.\nRename your file to `[...page].astro` or customize the param name via the `paginate([], {param: '...'}` option.");
      c = true;
    }
    const d = Math.max(1, Math.ceil(t.length / o)), m = [...Array(d).keys()].map((n2) => {
      const a2 = n2 + 1, i2 = o === 1 / 0 ? 0 : (a2 - 1) * o, r2 = Math.min(i2 + o, t.length), m2 = { ...p, [s]: c || a2 > 1 ? String(a2) : void 0 };
      return { params: m2, props: { ...l, page: { data: t.slice(i2, r2), start: i2, end: r2 - 1, size: o, total: t.length, currentPage: a2, lastPage: d, url: { current: e.generate({ ...m2 }), next: a2 === d ? void 0 : e.generate({ ...m2, page: String(a2 + 1) }), prev: 1 === a2 ? void 0 : e.generate({ ...m2, page: c || a2 - 1 != 1 ? String(a2 - 1) : void 0 }) } } } };
    });
    return m;
  };
}
async function callGetStaticPaths({ isValidate: e, logging: t, mod: n, route: a, ssr: i }) {
  if (validateDynamicRouteModule(n, { ssr: i, logging: t }), i)
    return { staticPaths: Object.assign([], { keyed: /* @__PURE__ */ new Map() }) };
  if (!n.getStaticPaths)
    throw new Error("Unexpected Error.");
  let r = [];
  r = (await n.getStaticPaths({ paginate: generatePaginateFunction(a), rss() {
    throw new Error("The RSS helper has been removed from getStaticPaths! Try the new @astrojs/rss package instead. See https://docs.astro.build/en/guides/rss/");
  } })).flat();
  const o = r;
  o.keyed = /* @__PURE__ */ new Map();
  for (const e2 of o) {
    const t2 = stringifyParams(e2.params);
    o.keyed.set(t2, e2);
  }
  return e && validateGetStaticPathsResult(o, t), { staticPaths: o };
}
var RouteCache = class {
  constructor(e, t = "production") {
    this.cache = {}, this.logging = e, this.mode = t;
  }
  clearAll() {
    this.cache = {};
  }
  set(e, t) {
    "production" === this.mode && this.cache[e.component] && warn(this.logging, "routeCache", `Internal Warning: route cache overwritten. (${e.component})`), this.cache[e.component] = t;
  }
  get(e) {
    return this.cache[e.component];
  }
};
function findPathItemByKey(e, t) {
  const n = stringifyParams(t), a = e.keyed.get(n);
  if (a)
    return a;
  debug("findPathItemByKey", `Unexpected cache miss looking for ${n}`);
}
var GetParamsAndPropsError = ((e) => (e[e.NoMatchingStaticPath = 0] = "NoMatchingStaticPath", e))(GetParamsAndPropsError || {});
async function getParamsAndProps(e) {
  const { logging: t, mod: n, route: a, routeCache: i, pathname: r, ssr: o } = e;
  let s, p = {};
  if (a && !a.pathname) {
    if (a.params.length) {
      const e3 = a.pattern.exec(r);
      e3 && (p = getParams(a.params)(e3));
    }
    let e2 = i.get(a);
    e2 || (e2 = await callGetStaticPaths({ mod: n, route: a, isValidate: true, logging: t, ssr: o }), i.set(a, e2));
    const l = findPathItemByKey(e2.staticPaths, p);
    if (!l && !o)
      return 0;
    s = (null == l ? void 0 : l.props) ? { ...l.props } : {};
  } else
    s = {};
  return [p, s];
}
async function renderPage(e, t, n) {
  const a = await getParamsAndProps({ logging: n.logging, mod: e, route: t.route, routeCache: n.routeCache, pathname: t.pathname, ssr: n.ssr });
  if (0 === a)
    throw new Error(`[getStaticPath] route pattern matched, but no matching static path found. (${t.pathname})`);
  const [i, r] = a, o = e.default;
  if (!o)
    throw new Error("Expected an exported Astro component but received typeof " + typeof o);
  const s = createResult({ adapterName: n.adapterName, links: t.links, styles: t.styles, logging: n.logging, markdown: n.markdown, mode: n.mode, origin: t.origin, params: i, props: r, pathname: t.pathname, resolve: n.resolve, renderers: n.renderers, request: t.request, site: n.site, scripts: t.scripts, ssr: n.ssr, status: t.status ?? 200 });
  "object" == typeof e.components && Object.assign(r, { components: e.components }), "function" == typeof e.default && e.default.name.startsWith("MDX") && Object.assign(r, { components: Object.assign((null == r ? void 0 : r.components) ?? {}, { Fragment: Fragment$1 }) });
  const p = await renderPage$1(s, o, r, null, n.streaming);
  return s.cookies && attachToResponse(p, s.cookies), p;
}
var clientAddressSymbol = Symbol.for("astro.clientAddress");
function createAPIContext({ request: e, params: t, site: n, props: a, adapterName: i }) {
  return { cookies: new AstroCookies(e), request: e, params: t, site: n ? new URL(n) : void 0, generator: "Astro v1.6.3", props: a, redirect: (e2, t2) => new Response(null, { status: t2 || 302, headers: { Location: e2 } }), url: new URL(e.url), get clientAddress() {
    if (!(clientAddressSymbol in e))
      throw i ? new Error(`clientAddress is not available in the ${i} adapter. File an issue with the adapter to add support.`) : new Error("clientAddress is not available in your environment. Ensure that you are using an SSR adapter that supports this feature.");
    return Reflect.get(e, clientAddressSymbol);
  } };
}
async function call(e, t, n) {
  const a = await getParamsAndProps({ mod: e, route: n.route, routeCache: t.routeCache, pathname: n.pathname, logging: t.logging, ssr: t.ssr });
  if (a === GetParamsAndPropsError.NoMatchingStaticPath)
    throw new Error(`[getStaticPath] route pattern matched, but no matching static path found. (${n.pathname})`);
  const [i, r] = a, o = createAPIContext({ request: n.request, params: i, props: r, site: t.site, adapterName: t.adapterName }), s = await renderEndpoint(e, o, t.ssr);
  return s instanceof Response ? (attachToResponse(s, o.cookies), { type: "response", response: s }) : { type: "simple", body: s.body, encoding: s.encoding, cookies: o.cookies };
}
var lastMessage;
var lastMessageCount = 1;
var consoleLogDestination = { write(e) {
  let t = console.error;
  levels[e.level] < levels.error && (t = console.log);
  let n = e.message;
  n === lastMessage ? (lastMessageCount++, n = `${n} ${yellow(`(x${lastMessageCount})`)}`) : (lastMessage = n, lastMessageCount = 1);
  return t(function() {
    let t2 = "", n2 = e.type;
    return n2 && (t2 += dim(dateTimeFormat.format(new Date()) + " "), "info" === e.level ? n2 = bold(cyan(`[${n2}]`)) : "warn" === e.level ? n2 = bold(yellow(`[${n2}]`)) : "error" === e.level && (n2 = bold(red(`[${n2}]`))), t2 += `${n2} `), reset(t2);
  }() + n), true;
} };
function appendForwardSlash(e) {
  return e.endsWith("/") ? e : e + "/";
}
function prependForwardSlash(e) {
  return "/" === e[0] ? e : "/" + e;
}
function trimSlashes(e) {
  return e.replace(/^\/|\/$/g, "");
}
function isString(e) {
  return "string" == typeof e || e instanceof String;
}
function joinPaths(...e) {
  return e.filter(isString).map(trimSlashes).join("/");
}
function createRenderContext(e) {
  const t = e.request, n = new URL(t.url), a = e.origin ?? n.origin, i = e.pathname ?? n.pathname;
  return { ...e, origin: a, pathname: i, url: n };
}
function createEnvironment(e) {
  return e;
}
function assertPath(e) {
  if ("string" != typeof e)
    throw new TypeError("Path must be a string. Received " + JSON.stringify(e));
}
function normalizeStringPosix(e, t) {
  for (var n, a = "", i = 0, r = -1, o = 0, s = 0; s <= e.length; ++s) {
    if (s < e.length)
      n = e.charCodeAt(s);
    else {
      if (47 === n)
        break;
      n = 47;
    }
    if (47 === n) {
      if (r === s - 1 || 1 === o)
        ;
      else if (r !== s - 1 && 2 === o) {
        if (a.length < 2 || 2 !== i || 46 !== a.charCodeAt(a.length - 1) || 46 !== a.charCodeAt(a.length - 2)) {
          if (a.length > 2) {
            var p = a.lastIndexOf("/");
            if (p !== a.length - 1) {
              -1 === p ? (a = "", i = 0) : i = (a = a.slice(0, p)).length - 1 - a.lastIndexOf("/"), r = s, o = 0;
              continue;
            }
          } else if (2 === a.length || 1 === a.length) {
            a = "", i = 0, r = s, o = 0;
            continue;
          }
        }
        t && (a.length > 0 ? a += "/.." : a = "..", i = 2);
      } else
        a.length > 0 ? a += "/" + e.slice(r + 1, s) : a = e.slice(r + 1, s), i = s - r - 1;
      r = s, o = 0;
    } else
      46 === n && -1 !== o ? ++o : o = -1;
  }
  return a;
}
function _format(e, t) {
  var n = t.dir || t.root, a = t.base || (t.name || "") + (t.ext || "");
  return n ? n === t.root ? n + a : n + e + a : a;
}
var posix = { resolve: function() {
  for (var e, t = "", n = false, a = arguments.length - 1; a >= -1 && !n; a--) {
    var i;
    a >= 0 ? i = arguments[a] : (void 0 === e && (e = process.cwd()), i = e), assertPath(i), 0 !== i.length && (t = i + "/" + t, n = 47 === i.charCodeAt(0));
  }
  return t = normalizeStringPosix(t, !n), n ? t.length > 0 ? "/" + t : "/" : t.length > 0 ? t : ".";
}, normalize: function(e) {
  if (assertPath(e), 0 === e.length)
    return ".";
  var t = 47 === e.charCodeAt(0), n = 47 === e.charCodeAt(e.length - 1);
  return 0 !== (e = normalizeStringPosix(e, !t)).length || t || (e = "."), e.length > 0 && n && (e += "/"), t ? "/" + e : e;
}, isAbsolute: function(e) {
  return assertPath(e), e.length > 0 && 47 === e.charCodeAt(0);
}, join: function() {
  if (0 === arguments.length)
    return ".";
  for (var e, t = 0; t < arguments.length; ++t) {
    var n = arguments[t];
    assertPath(n), n.length > 0 && (void 0 === e ? e = n : e += "/" + n);
  }
  return void 0 === e ? "." : posix.normalize(e);
}, relative: function(e, t) {
  if (assertPath(e), assertPath(t), e === t)
    return "";
  if ((e = posix.resolve(e)) === (t = posix.resolve(t)))
    return "";
  for (var n = 1; n < e.length && 47 === e.charCodeAt(n); ++n)
    ;
  for (var a = e.length, i = a - n, r = 1; r < t.length && 47 === t.charCodeAt(r); ++r)
    ;
  for (var o = t.length - r, s = i < o ? i : o, p = -1, l = 0; l <= s; ++l) {
    if (l === s) {
      if (o > s) {
        if (47 === t.charCodeAt(r + l))
          return t.slice(r + l + 1);
        if (0 === l)
          return t.slice(r + l);
      } else
        i > s && (47 === e.charCodeAt(n + l) ? p = l : 0 === l && (p = 0));
      break;
    }
    var c = e.charCodeAt(n + l);
    if (c !== t.charCodeAt(r + l))
      break;
    47 === c && (p = l);
  }
  var d = "";
  for (l = n + p + 1; l <= a; ++l)
    l !== a && 47 !== e.charCodeAt(l) || (0 === d.length ? d += ".." : d += "/..");
  return d.length > 0 ? d + t.slice(r + p) : (r += p, 47 === t.charCodeAt(r) && ++r, t.slice(r));
}, _makeLong: function(e) {
  return e;
}, dirname: function(e) {
  if (assertPath(e), 0 === e.length)
    return ".";
  for (var t = e.charCodeAt(0), n = 47 === t, a = -1, i = true, r = e.length - 1; r >= 1; --r)
    if (47 === (t = e.charCodeAt(r))) {
      if (!i) {
        a = r;
        break;
      }
    } else
      i = false;
  return -1 === a ? n ? "/" : "." : n && 1 === a ? "//" : e.slice(0, a);
}, basename: function(e, t) {
  if (void 0 !== t && "string" != typeof t)
    throw new TypeError('"ext" argument must be a string');
  assertPath(e);
  var n, a = 0, i = -1, r = true;
  if (void 0 !== t && t.length > 0 && t.length <= e.length) {
    if (t.length === e.length && t === e)
      return "";
    var o = t.length - 1, s = -1;
    for (n = e.length - 1; n >= 0; --n) {
      var p = e.charCodeAt(n);
      if (47 === p) {
        if (!r) {
          a = n + 1;
          break;
        }
      } else
        -1 === s && (r = false, s = n + 1), o >= 0 && (p === t.charCodeAt(o) ? -1 == --o && (i = n) : (o = -1, i = s));
    }
    return a === i ? i = s : -1 === i && (i = e.length), e.slice(a, i);
  }
  for (n = e.length - 1; n >= 0; --n)
    if (47 === e.charCodeAt(n)) {
      if (!r) {
        a = n + 1;
        break;
      }
    } else
      -1 === i && (r = false, i = n + 1);
  return -1 === i ? "" : e.slice(a, i);
}, extname: function(e) {
  assertPath(e);
  for (var t = -1, n = 0, a = -1, i = true, r = 0, o = e.length - 1; o >= 0; --o) {
    var s = e.charCodeAt(o);
    if (47 !== s)
      -1 === a && (i = false, a = o + 1), 46 === s ? -1 === t ? t = o : 1 !== r && (r = 1) : -1 !== t && (r = -1);
    else if (!i) {
      n = o + 1;
      break;
    }
  }
  return -1 === t || -1 === a || 0 === r || 1 === r && t === a - 1 && t === n + 1 ? "" : e.slice(t, a);
}, format: function(e) {
  if (null === e || "object" != typeof e)
    throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof e);
  return _format("/", e);
}, parse: function(e) {
  assertPath(e);
  var t = { root: "", dir: "", base: "", ext: "", name: "" };
  if (0 === e.length)
    return t;
  var n, a = e.charCodeAt(0), i = 47 === a;
  i ? (t.root = "/", n = 1) : n = 0;
  for (var r = -1, o = 0, s = -1, p = true, l = e.length - 1, c = 0; l >= n; --l)
    if (47 !== (a = e.charCodeAt(l)))
      -1 === s && (p = false, s = l + 1), 46 === a ? -1 === r ? r = l : 1 !== c && (c = 1) : -1 !== r && (c = -1);
    else if (!p) {
      o = l + 1;
      break;
    }
  return -1 === r || -1 === s || 0 === c || 1 === c && r === s - 1 && r === o + 1 ? -1 !== s && (t.base = t.name = 0 === o && i ? e.slice(1, s) : e.slice(o, s)) : (0 === o && i ? (t.name = e.slice(1, r), t.base = e.slice(1, s)) : (t.name = e.slice(o, r), t.base = e.slice(o, s)), t.ext = e.slice(r, s)), o > 0 ? t.dir = e.slice(0, o - 1) : i && (t.dir = "/"), t;
}, sep: "/", delimiter: ":", win32: null, posix: null };
posix.posix = posix;
var pathBrowserify = posix;
function getRootPath(e) {
  return appendForwardSlash(new URL(e || "http://localhost/").pathname);
}
function joinToRoot(e, t) {
  return pathBrowserify.posix.join(getRootPath(t), e);
}
function createLinkStylesheetElement(e, t) {
  return { props: { rel: "stylesheet", href: joinToRoot(e, t) }, children: "" };
}
function createLinkStylesheetElementSet(e, t) {
  return new Set(e.map((e2) => createLinkStylesheetElement(e2, t)));
}
function createModuleScriptElement(e, t) {
  return "external" === e.type ? createModuleScriptElementWithSrc(e.value, t) : { props: { type: "module" }, children: e.value };
}
function createModuleScriptElementWithSrc(e, t) {
  return { props: { type: "module", src: joinToRoot(e, t) }, children: "" };
}
function matchRoute(e, t) {
  return t.routes.find((t2) => t2.pattern.test(e));
}
function lexer(e) {
  for (var t = [], n = 0; n < e.length; ) {
    var a = e[n];
    if ("*" !== a && "+" !== a && "?" !== a)
      if ("\\" !== a)
        if ("{" !== a)
          if ("}" !== a)
            if (":" !== a)
              if ("(" !== a)
                t.push({ type: "CHAR", index: n, value: e[n++] });
              else {
                var i = 1, r = "";
                if ("?" === e[s = n + 1])
                  throw new TypeError('Pattern cannot start with "?" at '.concat(s));
                for (; s < e.length; )
                  if ("\\" !== e[s]) {
                    if (")" === e[s]) {
                      if (0 === --i) {
                        s++;
                        break;
                      }
                    } else if ("(" === e[s] && (i++, "?" !== e[s + 1]))
                      throw new TypeError("Capturing groups are not allowed at ".concat(s));
                    r += e[s++];
                  } else
                    r += e[s++] + e[s++];
                if (i)
                  throw new TypeError("Unbalanced pattern at ".concat(n));
                if (!r)
                  throw new TypeError("Missing pattern at ".concat(n));
                t.push({ type: "PATTERN", index: n, value: r }), n = s;
              }
            else {
              for (var o = "", s = n + 1; s < e.length; ) {
                var p = e.charCodeAt(s);
                if (!(p >= 48 && p <= 57 || p >= 65 && p <= 90 || p >= 97 && p <= 122 || 95 === p))
                  break;
                o += e[s++];
              }
              if (!o)
                throw new TypeError("Missing parameter name at ".concat(n));
              t.push({ type: "NAME", index: n, value: o }), n = s;
            }
          else
            t.push({ type: "CLOSE", index: n, value: e[n++] });
        else
          t.push({ type: "OPEN", index: n, value: e[n++] });
      else
        t.push({ type: "ESCAPED_CHAR", index: n++, value: e[n++] });
    else
      t.push({ type: "MODIFIER", index: n, value: e[n++] });
  }
  return t.push({ type: "END", index: n, value: "" }), t;
}
function parse(e, t) {
  void 0 === t && (t = {});
  for (var n = lexer(e), a = t.prefixes, i = void 0 === a ? "./" : a, r = "[^".concat(escapeString(t.delimiter || "/#?"), "]+?"), o = [], s = 0, p = 0, l = "", c = function(e2) {
    if (p < n.length && n[p].type === e2)
      return n[p++].value;
  }, d = function(e2) {
    var t2 = c(e2);
    if (void 0 !== t2)
      return t2;
    var a2 = n[p], i2 = a2.type, r2 = a2.index;
    throw new TypeError("Unexpected ".concat(i2, " at ").concat(r2, ", expected ").concat(e2));
  }, m = function() {
    for (var e2, t2 = ""; e2 = c("CHAR") || c("ESCAPED_CHAR"); )
      t2 += e2;
    return t2;
  }; p < n.length; ) {
    var u = c("CHAR"), f = c("NAME"), h = c("PATTERN");
    if (f || h) {
      var v = u || "";
      -1 === i.indexOf(v) && (l += v, v = ""), l && (o.push(l), l = ""), o.push({ name: f || s++, prefix: v, suffix: "", pattern: h || r, modifier: c("MODIFIER") || "" });
    } else {
      var g = u || c("ESCAPED_CHAR");
      if (g)
        l += g;
      else if (l && (o.push(l), l = ""), c("OPEN")) {
        v = m();
        var y = c("NAME") || "", x = c("PATTERN") || "", w = m();
        d("CLOSE"), o.push({ name: y || (x ? s++ : ""), pattern: y && !x ? r : x, prefix: v, suffix: w, modifier: c("MODIFIER") || "" });
      } else
        d("END");
    }
  }
  return o;
}
function compile(e, t) {
  return tokensToFunction(parse(e, t), t);
}
function tokensToFunction(e, t) {
  void 0 === t && (t = {});
  var n = flags(t), a = t.encode, i = void 0 === a ? function(e2) {
    return e2;
  } : a, r = t.validate, o = void 0 === r || r, s = e.map(function(e2) {
    if ("object" == typeof e2)
      return new RegExp("^(?:".concat(e2.pattern, ")$"), n);
  });
  return function(t2) {
    for (var n2 = "", a2 = 0; a2 < e.length; a2++) {
      var r2 = e[a2];
      if ("string" != typeof r2) {
        var p = t2 ? t2[r2.name] : void 0, l = "?" === r2.modifier || "*" === r2.modifier, c = "*" === r2.modifier || "+" === r2.modifier;
        if (Array.isArray(p)) {
          if (!c)
            throw new TypeError('Expected "'.concat(r2.name, '" to not repeat, but got an array'));
          if (0 === p.length) {
            if (l)
              continue;
            throw new TypeError('Expected "'.concat(r2.name, '" to not be empty'));
          }
          for (var d = 0; d < p.length; d++) {
            var m = i(p[d], r2);
            if (o && !s[a2].test(m))
              throw new TypeError('Expected all "'.concat(r2.name, '" to match "').concat(r2.pattern, '", but got "').concat(m, '"'));
            n2 += r2.prefix + m + r2.suffix;
          }
        } else if ("string" != typeof p && "number" != typeof p) {
          if (!l) {
            var u = c ? "an array" : "a string";
            throw new TypeError('Expected "'.concat(r2.name, '" to be ').concat(u));
          }
        } else {
          m = i(String(p), r2);
          if (o && !s[a2].test(m))
            throw new TypeError('Expected "'.concat(r2.name, '" to match "').concat(r2.pattern, '", but got "').concat(m, '"'));
          n2 += r2.prefix + m + r2.suffix;
        }
      } else
        n2 += r2;
    }
    return n2;
  };
}
function escapeString(e) {
  return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
function flags(e) {
  return e && e.sensitive ? "" : "i";
}
var _env;
var _manifest$1;
var _manifestData;
var _routeDataToRouteInfo;
var _encoder;
var _logging;
var _renderPage;
var renderPage_fn;
var _callEndpoint;
var callEndpoint_fn;
var __accessCheck = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
};
var __privateGet = (e, t, n) => (__accessCheck(e, t, "read from private field"), n ? n.call(e) : t.get(e));
var __privateAdd = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
};
var __privateSet = (e, t, n, a) => (__accessCheck(e, t, "write to private field"), a ? a.call(e, n) : t.set(e, n), n);
var __privateMethod = (e, t, n) => (__accessCheck(e, t, "access private method"), n);
var App = class {
  constructor(e, t = true) {
    __privateAdd(this, _renderPage), __privateAdd(this, _callEndpoint), __privateAdd(this, _env, void 0), __privateAdd(this, _manifest$1, void 0), __privateAdd(this, _manifestData, void 0), __privateAdd(this, _routeDataToRouteInfo, void 0), __privateAdd(this, _encoder, new TextEncoder()), __privateAdd(this, _logging, { dest: consoleLogDestination, level: "info" }), __privateSet(this, _manifest$1, e), __privateSet(this, _manifestData, { routes: e.routes.map((e2) => e2.routeData) }), __privateSet(this, _routeDataToRouteInfo, new Map(e.routes.map((e2) => [e2.routeData, e2]))), __privateSet(this, _env, createEnvironment({ adapterName: e.adapterName, logging: __privateGet(this, _logging), markdown: e.markdown, mode: "production", renderers: e.renderers, async resolve(t2) {
      if (!(t2 in e.entryModules))
        throw new Error(`Unable to resolve [${t2}]`);
      const n = e.entryModules[t2];
      switch (true) {
        case n.startsWith("data:"):
        case 0 === n.length:
          return n;
        default:
          return prependForwardSlash(joinPaths(e.base, n));
      }
    }, routeCache: new RouteCache(__privateGet(this, _logging)), site: __privateGet(this, _manifest$1).site, ssr: true, streaming: t }));
  }
  match(e, { matchNotFound: t = false } = {}) {
    const n = new URL(e.url);
    if (__privateGet(this, _manifest$1).assets.has(n.pathname))
      return;
    let a = matchRoute(n.pathname, __privateGet(this, _manifestData));
    return a || (t ? matchRoute("/404", __privateGet(this, _manifestData)) : void 0);
  }
  async render(e, t) {
    let n = 200;
    if (!t && ((t = this.match(e)) || (n = 404, t = this.match(e, { matchNotFound: true })), !t))
      return new Response(null, { status: 404, statusText: "Not found" });
    "/404" === t.route && (n = 404);
    let a = __privateGet(this, _manifest$1).pageMap.get(t.component);
    if ("page" === t.type) {
      let i = await __privateMethod(this, _renderPage, renderPage_fn).call(this, e, t, a, n);
      if (500 === i.status) {
        const t2 = matchRoute("/500", __privateGet(this, _manifestData));
        if (t2) {
          a = __privateGet(this, _manifest$1).pageMap.get(t2.component);
          try {
            return await __privateMethod(this, _renderPage, renderPage_fn).call(this, e, t2, a, 500);
          } catch {
          }
        }
      }
      return i;
    }
    if ("endpoint" === t.type)
      return __privateMethod(this, _callEndpoint, callEndpoint_fn).call(this, e, t, a, n);
    throw new Error(`Unsupported route type [${t.type}].`);
  }
  setCookieHeaders(e) {
    return getSetCookiesFromResponse(e);
  }
};
var _server;
var _startPromise;
function start$1(e, t) {
  if (false === t.start)
    return;
  const n = new URL("../client/", import.meta.url), a = new App(e), i = t.port ?? 8085;
  _server = new Server({ port: i, hostname: t.hostname ?? "0.0.0.0", handler: async (e2, t2) => {
    var i2;
    if (a.match(e2)) {
      let n2 = null == (i2 = null == t2 ? void 0 : t2.remoteAddr) ? void 0 : i2.hostname;
      Reflect.set(e2, Symbol.for("astro.clientAddress"), n2);
      const r2 = await a.render(e2);
      if (a.setCookieHeaders)
        for (const e3 of a.setCookieHeaders(r2))
          r2.headers.append("Set-Cookie", e3);
      return r2;
    }
    const r = new URL(e2.url), o = new URL("." + r.pathname, n), s = await fetch(o.toString());
    if (404 == s.status) {
      const t3 = await a.render(e2);
      if (a.setCookieHeaders)
        for (const e3 of a.setCookieHeaders(t3))
          t3.headers.append("Set-Cookie", e3);
      return t3;
    }
    return s;
  } }), _startPromise = Promise.resolve(_server.listenAndServe()), console.error(`Server running on port ${i}`);
}
function createExports(e, t) {
  const n = new App(e);
  return { async stop() {
    _server && (_server.close(), _server = void 0), await Promise.resolve(_startPromise);
  }, running: () => void 0 !== _server, start: async () => start$1(e, t), handle: async (e2) => n.render(e2) };
}
_env = /* @__PURE__ */ new WeakMap(), _manifest$1 = /* @__PURE__ */ new WeakMap(), _manifestData = /* @__PURE__ */ new WeakMap(), _routeDataToRouteInfo = /* @__PURE__ */ new WeakMap(), _encoder = /* @__PURE__ */ new WeakMap(), _logging = /* @__PURE__ */ new WeakMap(), _renderPage = /* @__PURE__ */ new WeakSet(), renderPage_fn = async function(e, t, n, a = 200) {
  const i = new URL(e.url), r = __privateGet(this, _manifest$1);
  r.renderers;
  const o = __privateGet(this, _routeDataToRouteInfo).get(t), s = createLinkStylesheetElementSet(o.links, r.site);
  let p = /* @__PURE__ */ new Set();
  for (const e2 of o.scripts)
    "stage" in e2 ? "head-inline" === e2.stage && p.add({ props: {}, children: e2.children }) : p.add(createModuleScriptElement(e2, r.site));
  try {
    const r2 = createRenderContext({ request: e, origin: i.origin, pathname: i.pathname, scripts: p, links: s, route: t, status: a });
    return await renderPage(n, r2, __privateGet(this, _env));
  } catch (e2) {
    return error(__privateGet(this, _logging), "ssr", e2.stack || e2.message || String(e2)), new Response(null, { status: 500, statusText: "Internal server error" });
  }
}, _callEndpoint = /* @__PURE__ */ new WeakSet(), callEndpoint_fn = async function(e, t, n, a = 200) {
  const i = new URL(e.url), r = n, o = createRenderContext({ request: e, origin: i.origin, pathname: i.pathname, route: t, status: a }), s = await call(r, __privateGet(this, _env), o);
  if ("response" === s.type) {
    if ("Not-Found" === s.response.headers.get("X-Astro-Response")) {
      const t2 = new Request(new URL("/404", e.url)), n2 = this.match(t2);
      if (n2)
        return this.render(t2, n2);
    }
    return s.response;
  }
  {
    const e2 = s.body, t2 = new Headers(), n2 = mime.getType(i.pathname);
    n2 ? t2.set("Content-Type", `${n2};charset=utf-8`) : t2.set("Content-Type", "text/plain;charset=utf-8");
    const a2 = __privateGet(this, _encoder).encode(e2);
    t2.set("Content-Length", a2.byteLength.toString());
    const r2 = new Response(a2, { status: 200, headers: t2 });
    return attachToResponse(r2, s.cookies), r2;
  }
};
var adapter = Object.freeze(Object.defineProperty({ __proto__: null, createExports, start: start$1 }, Symbol.toStringTag, { value: "Module" }));
function createDeprecatedFetchContentFn() {
  return () => {
    throw new Error("Deprecated: Astro.fetchContent() has been replaced with Astro.glob().");
  };
}
function createAstroGlobFn() {
  return (e, t) => {
    let n = [...Object.values(e)];
    if (0 === n.length)
      throw new Error(`Astro.glob(${JSON.stringify(t())}) - no matches found.`);
    return Promise.all(n.map((e2) => e2()));
  };
}
function createAstro(e, t, n) {
  const a = t ? new URL(t) : void 0, i = new URL(e, "http://localhost"), r = new URL(n);
  return { site: a, generator: "Astro v1.6.3", fetchContent: createDeprecatedFetchContentFn(), glob: createAstroGlobFn(), resolve(...e2) {
    let t2 = e2.reduce((e3, t3) => new URL(t3, e3), i).pathname;
    return t2.startsWith(r.pathname) && (t2 = "/" + t2.slice(r.pathname.length)), t2;
  } };
}
var escapeHTML = escape;
var HTMLString = class extends String {
  get [Symbol.toStringTag]() {
    return "HTMLString";
  }
};
var markHTMLString = (e) => e instanceof HTMLString ? e : "string" == typeof e ? new HTMLString(e) : e;
function isHTMLString(e) {
  return "[object HTMLString]" === Object.prototype.toString.call(e);
}
var idle_prebuilt_default = '(self.Astro=self.Astro||{}).idle=t=>{const e=async()=>{await(await t())()};"requestIdleCallback"in window?window.requestIdleCallback(e):setTimeout(e,200)},window.dispatchEvent(new Event("astro:idle"));';
var load_prebuilt_default = '(self.Astro=self.Astro||{}).load=a=>{(async()=>await(await a())())()},window.dispatchEvent(new Event("astro:load"));';
var media_prebuilt_default = '(self.Astro=self.Astro||{}).media=(s,a)=>{const t=async()=>{await(await s())()};if(a.value){const e=matchMedia(a.value);e.matches?t():e.addEventListener("change",t,{once:!0})}},window.dispatchEvent(new Event("astro:media"));';
var only_prebuilt_default = '(self.Astro=self.Astro||{}).only=t=>{(async()=>await(await t())())()},window.dispatchEvent(new Event("astro:only"));';
var visible_prebuilt_default = '(self.Astro=self.Astro||{}).visible=(s,c,n)=>{const r=async()=>{await(await s())()};let i=new IntersectionObserver(e=>{for(const t of e)if(!!t.isIntersecting){i.disconnect(),r();break}});for(let e=0;e<n.children.length;e++){const t=n.children[e];i.observe(t)}},window.dispatchEvent(new Event("astro:visible"));';
var astro_island_prebuilt_default = 'var l;{const c={0:t=>t,1:t=>JSON.parse(t,o),2:t=>new RegExp(t),3:t=>new Date(t),4:t=>new Map(JSON.parse(t,o)),5:t=>new Set(JSON.parse(t,o)),6:t=>BigInt(t),7:t=>new URL(t),8:t=>new Uint8Array(JSON.parse(t)),9:t=>new Uint16Array(JSON.parse(t)),10:t=>new Uint32Array(JSON.parse(t))},o=(t,s)=>{if(t===""||!Array.isArray(s))return s;const[e,n]=s;return e in c?c[e](n):void 0};customElements.get("astro-island")||customElements.define("astro-island",(l=class extends HTMLElement{constructor(){super(...arguments);this.hydrate=()=>{if(!this.hydrator||this.parentElement&&this.parentElement.closest("astro-island[ssr]"))return;const s=this.querySelectorAll("astro-slot"),e={},n=this.querySelectorAll("template[data-astro-template]");for(const r of n){const i=r.closest(this.tagName);!i||!i.isSameNode(this)||(e[r.getAttribute("data-astro-template")||"default"]=r.innerHTML,r.remove())}for(const r of s){const i=r.closest(this.tagName);!i||!i.isSameNode(this)||(e[r.getAttribute("name")||"default"]=r.innerHTML)}const a=this.hasAttribute("props")?JSON.parse(this.getAttribute("props"),o):{};this.hydrator(this)(this.Component,a,e,{client:this.getAttribute("client")}),this.removeAttribute("ssr"),window.removeEventListener("astro:hydrate",this.hydrate),window.dispatchEvent(new CustomEvent("astro:hydrate"))}}connectedCallback(){!this.hasAttribute("await-children")||this.firstChild?this.childrenConnectedCallback():new MutationObserver((s,e)=>{e.disconnect(),this.childrenConnectedCallback()}).observe(this,{childList:!0})}async childrenConnectedCallback(){window.addEventListener("astro:hydrate",this.hydrate);let s=this.getAttribute("before-hydration-url");s&&await import(s),this.start()}start(){const s=JSON.parse(this.getAttribute("opts")),e=this.getAttribute("client");if(Astro[e]===void 0){window.addEventListener(`astro:${e}`,()=>this.start(),{once:!0});return}Astro[e](async()=>{const n=this.getAttribute("renderer-url"),[a,{default:r}]=await Promise.all([import(this.getAttribute("component-url")),n?import(n):()=>()=>{}]),i=this.getAttribute("component-export")||"default";if(!i.includes("."))this.Component=a[i];else{this.Component=a;for(const d of i.split("."))this.Component=this.Component[d]}return this.hydrator=r,this.hydrate},s,this)}attributeChangedCallback(){this.hydrator&&this.hydrate()}},l.observedAttributes=["props"],l))}';
function determineIfNeedsHydrationScript(e) {
  return !e._metadata.hasHydrationScript && (e._metadata.hasHydrationScript = true);
}
var hydrationScripts = { idle: idle_prebuilt_default, load: load_prebuilt_default, only: only_prebuilt_default, media: media_prebuilt_default, visible: visible_prebuilt_default };
function determinesIfNeedsDirectiveScript(e, t) {
  return !e._metadata.hasDirectives.has(t) && (e._metadata.hasDirectives.add(t), true);
}
function getDirectiveScriptText(e) {
  if (!(e in hydrationScripts))
    throw new Error(`Unknown directive: ${e}`);
  return hydrationScripts[e];
}
function getPrescripts(e, t) {
  switch (e) {
    case "both":
      return `<style>astro-island,astro-slot{display:contents}</style><script>${getDirectiveScriptText(t) + astro_island_prebuilt_default}<\/script>`;
    case "directive":
      return `<script>${getDirectiveScriptText(t)}<\/script>`;
  }
  return "";
}
var Fragment = Symbol.for("astro:fragment");
var Renderer = Symbol.for("astro:renderer");
var encoder = new TextEncoder();
var decoder = new TextDecoder();
function stringifyChunk(e, t) {
  if ("directive" === t.type) {
    const { hydration: n } = t;
    let a = n && determineIfNeedsHydrationScript(e), i = n && determinesIfNeedsDirectiveScript(e, n.directive), r = a ? "both" : i ? "directive" : null;
    if (r) {
      let e2 = getPrescripts(r, n.directive);
      return markHTMLString(e2);
    }
    return "";
  }
  return t.toString();
}
var HTMLParts = class {
  constructor() {
    this.parts = "";
  }
  append(e, t) {
    ArrayBuffer.isView(e) ? this.parts += decoder.decode(e) : this.parts += stringifyChunk(t, e);
  }
  toString() {
    return this.parts;
  }
  toArrayBuffer() {
    return encoder.encode(this.parts);
  }
};
var skipAstroJSXCheck = /* @__PURE__ */ new WeakSet();
var originalConsoleError;
var consoleFilterRefs = 0;
async function renderJSX(e, t) {
  switch (true) {
    case t instanceof HTMLString:
      return "" === t.toString().trim() ? "" : t;
    case "string" == typeof t:
      return markHTMLString(escapeHTML(t));
    case "function" == typeof t:
      return t;
    case (!t && 0 !== t):
      return "";
    case Array.isArray(t):
      return markHTMLString((await Promise.all(t.map((t2) => renderJSX(e, t2)))).join(""));
  }
  if (isVNode(t)) {
    switch (true) {
      case !t.type:
        throw new Error(`Unable to render ${e._metadata.pathname} because it contains an undefined Component!
Did you forget to import the component or is it possible there is a typo?`);
      case t.type === Symbol.for("astro:fragment"):
        return renderJSX(e, t.props.children);
      case t.type.isAstroComponentFactory: {
        let n = {}, a = {};
        for (const [i, r] of Object.entries(t.props ?? {}))
          "children" === i || r && "object" == typeof r && r.$$slot ? a["children" === i ? "default" : i] = () => renderJSX(e, r) : n[i] = r;
        return markHTMLString(await renderToString(e, t.type, n, a));
      }
      case (!t.type && 0 !== t.type):
        return "";
      case ("string" == typeof t.type && "astro-client-only" !== t.type):
        return markHTMLString(await renderElement$1(e, t.type, t.props ?? {}));
    }
    if (t.type) {
      let n = function(e2) {
        return Array.isArray(e2) ? e2.map((e3) => n(e3)) : isVNode(e2) && "slot" in e2.props ? (r[e2.props.slot] = [...r[e2.props.slot] ?? [], e2], void delete e2.props.slot) : void r.default.push(e2);
      };
      if ("function" == typeof t.type && t.type["astro:renderer"] && skipAstroJSXCheck.add(t.type), "function" == typeof t.type && t.props["server:root"]) {
        const n2 = await t.type(t.props ?? {});
        return await renderJSX(e, n2);
      }
      if ("function" == typeof t.type && !skipAstroJSXCheck.has(t.type)) {
        useConsoleFilter();
        try {
          const n2 = await t.type(t.props ?? {});
          if (n2 && n2[AstroJSX])
            return await renderJSX(e, n2);
          if (!n2)
            return await renderJSX(e, n2);
        } catch (e2) {
          skipAstroJSXCheck.add(t.type);
        } finally {
          finishUsingConsoleFilter();
        }
      }
      const { children: a = null, ...i } = t.props ?? {}, r = { default: [] };
      n(a);
      for (const [e2, t2] of Object.entries(i))
        t2.$$slot && (r[e2] = t2, delete i[e2]);
      const o = [], s = {};
      for (const [t2, n2] of Object.entries(r))
        o.push(renderJSX(e, n2).then((e2) => {
          0 !== e2.toString().trim().length && (s[t2] = () => e2);
        }));
      let p;
      if (await Promise.all(o), p = "astro-client-only" === t.type && t.props["client:only"] ? await renderComponent(e, t.props["client:display-name"] ?? "", null, i, s) : await renderComponent(e, "function" == typeof t.type ? t.type.name : t.type, t.type, i, s), "string" != typeof p && Symbol.asyncIterator in p) {
        let t2 = new HTMLParts();
        for await (const n2 of p)
          t2.append(n2, e);
        return markHTMLString(t2.toString());
      }
      return markHTMLString(p);
    }
  }
  return markHTMLString(`${t}`);
}
async function renderElement$1(e, t, { children: n, ...a }) {
  return markHTMLString(`<${t}${spreadAttributes(a)}${markHTMLString(null != n && "" != n || !voidElementNames.test(t) ? `>${null == n ? "" : await renderJSX(e, n)}</${t}>` : "/>")}`);
}
function useConsoleFilter() {
  if (consoleFilterRefs++, !originalConsoleError) {
    originalConsoleError = console.error;
    try {
      console.error = filteredConsoleError;
    } catch (e) {
    }
  }
}
function finishUsingConsoleFilter() {
  consoleFilterRefs--;
}
function filteredConsoleError(e, ...t) {
  if (consoleFilterRefs > 0 && "string" == typeof e) {
    if (e.includes("Warning: Invalid hook call.") && e.includes("https://reactjs.org/link/invalid-hook-call"))
      return;
  }
  originalConsoleError(e, ...t);
}
var PROP_TYPE = { Value: 0, JSON: 1, RegExp: 2, Date: 3, Map: 4, Set: 5, BigInt: 6, URL: 7, Uint8Array: 8, Uint16Array: 9, Uint32Array: 10 };
function serializeArray(e, t = {}, n = /* @__PURE__ */ new WeakSet()) {
  if (n.has(e))
    throw new Error(`Cyclic reference detected while serializing props for <${t.displayName} client:${t.hydrate}>!

Cyclic references cannot be safely serialized for client-side usage. Please remove the cyclic reference.`);
  n.add(e);
  const a = e.map((e2) => convertToSerializedForm(e2, t, n));
  return n.delete(e), a;
}
function serializeObject(e, t = {}, n = /* @__PURE__ */ new WeakSet()) {
  if (n.has(e))
    throw new Error(`Cyclic reference detected while serializing props for <${t.displayName} client:${t.hydrate}>!

Cyclic references cannot be safely serialized for client-side usage. Please remove the cyclic reference.`);
  n.add(e);
  const a = Object.fromEntries(Object.entries(e).map(([e2, a2]) => [e2, convertToSerializedForm(a2, t, n)]));
  return n.delete(e), a;
}
function convertToSerializedForm(e, t = {}, n = /* @__PURE__ */ new WeakSet()) {
  switch (Object.prototype.toString.call(e)) {
    case "[object Date]":
      return [PROP_TYPE.Date, e.toISOString()];
    case "[object RegExp]":
      return [PROP_TYPE.RegExp, e.source];
    case "[object Map]":
      return [PROP_TYPE.Map, JSON.stringify(serializeArray(Array.from(e), t, n))];
    case "[object Set]":
      return [PROP_TYPE.Set, JSON.stringify(serializeArray(Array.from(e), t, n))];
    case "[object BigInt]":
      return [PROP_TYPE.BigInt, e.toString()];
    case "[object URL]":
      return [PROP_TYPE.URL, e.toString()];
    case "[object Array]":
      return [PROP_TYPE.JSON, JSON.stringify(serializeArray(e, t, n))];
    case "[object Uint8Array]":
      return [PROP_TYPE.Uint8Array, JSON.stringify(Array.from(e))];
    case "[object Uint16Array]":
      return [PROP_TYPE.Uint16Array, JSON.stringify(Array.from(e))];
    case "[object Uint32Array]":
      return [PROP_TYPE.Uint32Array, JSON.stringify(Array.from(e))];
    default:
      return null !== e && "object" == typeof e ? [PROP_TYPE.Value, serializeObject(e, t, n)] : [PROP_TYPE.Value, e];
  }
}
function serializeProps(e, t) {
  return JSON.stringify(serializeObject(e, t));
}
function serializeListValue(e) {
  const t = {};
  return function e2(n) {
    n && "function" == typeof n.forEach ? n.forEach(e2) : n === Object(n) ? Object.keys(n).forEach((t2) => {
      n[t2] && e2(t2);
    }) : (n = false === n || null == n ? "" : String(n).trim()) && n.split(/\s+/).forEach((e3) => {
      t[e3] = true;
    });
  }(e), Object.keys(t).join(" ");
}
var HydrationDirectivesRaw = ["load", "idle", "media", "visible", "only"];
var HydrationDirectives = new Set(HydrationDirectivesRaw);
var HydrationDirectiveProps = new Set(HydrationDirectivesRaw.map((e) => `client:${e}`));
function extractDirectives(e) {
  let t = { isPage: false, hydration: null, props: {} };
  for (const [n, a] of Object.entries(e))
    if (n.startsWith("server:") && "server:root" === n && (t.isPage = true), n.startsWith("client:"))
      switch (t.hydration || (t.hydration = { directive: "", value: "", componentUrl: "", componentExport: { value: "" } }), n) {
        case "client:component-path":
          t.hydration.componentUrl = a;
          break;
        case "client:component-export":
          t.hydration.componentExport.value = a;
          break;
        case "client:component-hydration":
        case "client:display-name":
          break;
        default:
          if (t.hydration.directive = n.split(":")[1], t.hydration.value = a, !HydrationDirectives.has(t.hydration.directive))
            throw new Error(`Error: invalid hydration directive "${n}". Supported hydration methods: ${Array.from(HydrationDirectiveProps).join(", ")}`);
          if ("media" === t.hydration.directive && "string" != typeof t.hydration.value)
            throw new Error('Error: Media query must be provided for "client:media", similar to client:media="(max-width: 600px)"');
      }
    else
      "class:list" === n ? a && (t.props[n.slice(0, -5)] = serializeListValue(a)) : t.props[n] = a;
  return t;
}
async function generateHydrateScript(e, t) {
  const { renderer: n, result: a, astroId: i, props: r, attrs: o } = e, { hydrate: s, componentUrl: p, componentExport: l } = t;
  if (!l.value)
    throw new Error(`Unable to resolve a valid export for "${t.displayName}"! Please open an issue at https://astro.build/issues!`);
  const c = { children: "", props: { uid: i } };
  if (o)
    for (const [e2, t2] of Object.entries(o))
      c.props[e2] = escapeHTML(t2);
  c.props["component-url"] = await a.resolve(decodeURI(p)), n.clientEntrypoint && (c.props["component-export"] = l.value, c.props["renderer-url"] = await a.resolve(decodeURI(n.clientEntrypoint)), c.props.props = escapeHTML(serializeProps(r, t))), c.props.ssr = "", c.props.client = s;
  let d = await a.resolve("astro:scripts/before-hydration.js");
  return d.length && (c.props["before-hydration-url"] = d), c.props.opts = escapeHTML(JSON.stringify({ name: t.displayName, value: t.hydrateArgs || "" })), c;
}
var SlotString = class extends HTMLString {
  constructor(e, t) {
    super(e), this.instructions = t;
  }
};
async function renderSlot(e, t, n) {
  if (t) {
    let e2 = renderChild(t), n2 = "", a = null;
    for await (const t2 of e2)
      "directive" === t2.type ? (null === a && (a = []), a.push(t2)) : n2 += t2;
    return markHTMLString(new SlotString(n2, a));
  }
  return n;
}
async function renderSlots(e, t = {}) {
  let n = null, a = {};
  return t && await Promise.all(Object.entries(t).map(([t2, i]) => renderSlot(e, i).then((e2) => {
    e2.instructions && (null === n && (n = []), n.push(...e2.instructions)), a[t2] = e2;
  }))), { slotInstructions: n, children: a };
}
async function* renderChild(e) {
  if ((e = await e) instanceof SlotString)
    e.instructions && (yield* e.instructions), yield e;
  else if (isHTMLString(e))
    yield e;
  else if (Array.isArray(e))
    for (const t of e)
      yield markHTMLString(await renderChild(t));
  else
    "function" == typeof e ? yield* renderChild(e()) : "string" == typeof e ? yield markHTMLString(escapeHTML(e)) : (e || 0 === e) && (e instanceof AstroComponent || "[object AstroComponent]" === Object.prototype.toString.call(e) ? yield* renderAstroComponent(e) : ArrayBuffer.isView(e) ? yield e : "object" == typeof e && (Symbol.asyncIterator in e || Symbol.iterator in e) ? yield* e : yield e);
}
function validateComponentProps(e, t) {
  var n;
  if ((null == (n = Object.assign({ BASE_URL: "/", MODE: "production", DEV: false, PROD: true }, { _: process.env._ })) ? void 0 : n.DEV) && null != e)
    for (const n2 of Object.keys(e))
      HydrationDirectiveProps.has(n2) && console.warn(`You are attempting to render <${t} ${n2} />, but ${t} is an Astro component. Astro components do not render in the client and should not have a hydration directive. Please use a framework component for client rendering.`);
}
var AstroComponent = class {
  constructor(e, t) {
    this.htmlParts = e, this.expressions = t;
  }
  get [Symbol.toStringTag]() {
    return "AstroComponent";
  }
  async *[Symbol.asyncIterator]() {
    const { htmlParts: e, expressions: t } = this;
    for (let n = 0; n < e.length; n++) {
      const a = e[n], i = t[n];
      yield markHTMLString(a), yield* renderChild(i);
    }
  }
};
function isAstroComponent(e) {
  return "object" == typeof e && "[object AstroComponent]" === Object.prototype.toString.call(e);
}
function isAstroComponentFactory(e) {
  return null != e && true === e.isAstroComponentFactory;
}
async function* renderAstroComponent(e) {
  for await (const t of e)
    if (t || 0 === t)
      for await (const e2 of renderChild(t))
        if ("directive" === e2.type)
          yield e2;
        else
          yield markHTMLString(e2);
}
async function renderToString(e, t, n, a) {
  const i = await t(e, n, a);
  if (!isAstroComponent(i)) {
    throw i;
  }
  let r = new HTMLParts();
  for await (const t2 of renderAstroComponent(i))
    r.append(t2, e);
  return r.toString();
}
async function renderToIterable(e, t, n, a, i) {
  validateComponentProps(a, n);
  const r = await t(e, a, i);
  if (!isAstroComponent(r)) {
    console.warn("Returning a Response is only supported inside of page components. Consider refactoring this logic into something like a function that can be used in the page.");
    throw r;
  }
  return renderAstroComponent(r);
}
async function renderTemplate(e, ...t) {
  return new AstroComponent(e, t);
}
var dictionary = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY";
var binary = dictionary.length;
function bitwise(e) {
  let t = 0;
  if (0 === e.length)
    return t;
  for (let n = 0; n < e.length; n++) {
    t = (t << 5) - t + e.charCodeAt(n), t &= t;
  }
  return t;
}
function shorthash(e) {
  let t, n = "", a = bitwise(e);
  const i = a < 0 ? "Z" : "";
  for (a = Math.abs(a); a >= binary; )
    t = a % binary, a = Math.floor(a / binary), n = dictionary[t] + n;
  return a > 0 && (n = dictionary[a] + n), i + n;
}
var voidElementNames = /^(area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/i;
var htmlBooleanAttributes = /^(allowfullscreen|async|autofocus|autoplay|controls|default|defer|disabled|disablepictureinpicture|disableremoteplayback|formnovalidate|hidden|loop|nomodule|novalidate|open|playsinline|readonly|required|reversed|scoped|seamless|itemscope)$/i;
var htmlEnumAttributes = /^(contenteditable|draggable|spellcheck|value)$/i;
var svgEnumAttributes = /^(autoReverse|externalResourcesRequired|focusable|preserveAlpha)$/i;
var STATIC_DIRECTIVES = /* @__PURE__ */ new Set(["set:html", "set:text"]);
var toAttributeString = (e, t = true) => t ? String(e).replace(/&/g, "&#38;").replace(/"/g, "&#34;") : e;
var kebab = (e) => e.toLowerCase() === e ? e : e.replace(/[A-Z]/g, (e2) => `-${e2.toLowerCase()}`);
function defineScriptVars(e) {
  let t = "";
  for (const [a, i] of Object.entries(e))
    t += `const ${n = a, n.trim().replace(/(?:(?!^)\b\w|\s+|[^\w]+)/g, (e2, t2) => /[^\w]|\s/.test(e2) ? "" : 0 === t2 ? e2 : e2.toUpperCase())} = ${JSON.stringify(i)};
`;
  var n;
  return markHTMLString(t);
}
function formatList(e) {
  return 1 === e.length ? e[0] : `${e.slice(0, -1).join(", ")} or ${e[e.length - 1]}`;
}
function addAttribute(e, t, n = true) {
  if (null == e)
    return "";
  if (false === e)
    return htmlEnumAttributes.test(t) || svgEnumAttributes.test(t) ? markHTMLString(` ${t}="false"`) : "";
  if (STATIC_DIRECTIVES.has(t))
    return console.warn(`[astro] The "${t}" directive cannot be applied dynamically at runtime. It will not be rendered as an attribute.

Make sure to use the static attribute syntax (\`${t}={value}\`) instead of the dynamic spread syntax (\`{...{ "${t}": value }}\`).`), "";
  if ("class:list" === t) {
    const a2 = toAttributeString(serializeListValue(e), n);
    return "" === a2 ? "" : markHTMLString(` ${t.slice(0, -5)}="${a2}"`);
  }
  return "style" !== t || e instanceof HTMLString || "object" != typeof e ? "className" === t ? markHTMLString(` class="${toAttributeString(e, n)}"`) : true === e && (t.startsWith("data-") || htmlBooleanAttributes.test(t)) ? markHTMLString(` ${t}`) : markHTMLString(` ${t}="${toAttributeString(e, n)}"`) : markHTMLString(` ${t}="${toAttributeString((a = e, Object.entries(a).map(([e2, t2]) => `${kebab(e2)}:${t2}`).join(";")), n)}"`);
  var a;
}
function internalSpreadAttributes(e, t = true) {
  let n = "";
  for (const [a, i] of Object.entries(e))
    n += addAttribute(i, a, t);
  return markHTMLString(n);
}
function renderElement(e, { props: t, children: n = "" }, a = true) {
  const { lang: i, "data-astro-id": r, "define:vars": o, ...s } = t;
  return o && ("style" === e && (delete s["is:global"], delete s["is:scoped"]), "script" === e && (delete s.hoist, n = defineScriptVars(o) + "\n" + n)), null != n && "" != n || !voidElementNames.test(e) ? `<${e}${internalSpreadAttributes(s, a)}>${n}</${e}>` : `<${e}${internalSpreadAttributes(s, a)} />`;
}
function componentIsHTMLElement(e) {
  return "undefined" != typeof HTMLElement && HTMLElement.isPrototypeOf(e);
}
async function renderHTMLElement(e, t, n, a) {
  const i = getHTMLElementName(t);
  let r = "";
  for (const e2 in n)
    r += ` ${e2}="${toAttributeString(await n[e2])}"`;
  return markHTMLString(`<${i}${r}>${await renderSlot(e, null == a ? void 0 : a.default)}</${i}>`);
}
function getHTMLElementName(e) {
  const t = customElements.getName(e);
  if (t)
    return t;
  return e.name.replace(/^HTML|Element$/g, "").replace(/[A-Z]/g, "-$&").toLowerCase().replace(/^-/, "html-");
}
var rendererAliases = /* @__PURE__ */ new Map([["solid", "solid-js"]]);
function guessRenderers(e) {
  switch (null == e ? void 0 : e.split(".").pop()) {
    case "svelte":
      return ["@astrojs/svelte"];
    case "vue":
      return ["@astrojs/vue"];
    case "jsx":
    case "tsx":
      return ["@astrojs/react", "@astrojs/preact", "@astrojs/vue (jsx)"];
    default:
      return ["@astrojs/react", "@astrojs/preact", "@astrojs/vue", "@astrojs/svelte"];
  }
}
function getComponentType(e) {
  return e === Fragment ? "fragment" : e && "object" == typeof e && e["astro:html"] ? "html" : isAstroComponentFactory(e) ? "astro-factory" : "unknown";
}
async function renderComponent(e, t, n, a, i = {}) {
  var r;
  switch (getComponentType(n = await n ?? n)) {
    case "fragment": {
      const t2 = await renderSlot(e, null == i ? void 0 : i.default);
      return null == t2 ? t2 : markHTMLString(t2);
    }
    case "html": {
      const { slotInstructions: t2, children: a2 } = await renderSlots(e, i), r2 = n.render({ slots: a2 }), o2 = t2 ? t2.map((t3) => stringifyChunk(e, t3)).join("") : "";
      return markHTMLString(o2 + r2);
    }
    case "astro-factory":
      return async function* () {
        let r2 = await renderToIterable(e, n, t, a, i);
        yield* r2;
      }();
  }
  if (!n && !a["client:only"])
    throw new Error(`Unable to render ${t} because it is ${n}!
Did you forget to import the component or is it possible there is a typo?`);
  const { renderers: o } = e._metadata, s = { displayName: t }, { hydration: p, isPage: l, props: c } = extractDirectives(a);
  let d, m = "";
  p && (s.hydrate = p.directive, s.hydrateArgs = p.value, s.componentExport = p.componentExport, s.componentUrl = p.componentUrl);
  const u = guessRenderers(s.componentUrl);
  if (Array.isArray(o) && 0 === o.length && "string" != typeof n && !componentIsHTMLElement(n)) {
    const e2 = `Unable to render ${s.displayName}!

There are no \`integrations\` set in your \`astro.config.mjs\` file.
Did you mean to add ${formatList(u.map((e3) => "`" + e3 + "`"))}?`;
    throw new Error(e2);
  }
  const { children: f, slotInstructions: h } = await renderSlots(e, i);
  let v;
  if ("only" !== s.hydrate) {
    let t2 = false;
    try {
      t2 = n && n[Renderer];
    } catch {
    }
    if (t2) {
      const e2 = n[Renderer];
      v = o.find(({ name: t3 }) => t3 === e2);
    }
    if (!v) {
      let t3;
      for (const a2 of o)
        try {
          if (await a2.ssr.check.call({ result: e }, n, c, f)) {
            v = a2;
            break;
          }
        } catch (e2) {
          t3 ?? (t3 = e2);
        }
      if (!v && t3)
        throw t3;
    }
    if (!v && "function" == typeof HTMLElement && componentIsHTMLElement(n)) {
      return renderHTMLElement(e, n, a, i);
    }
  } else {
    if (s.hydrateArgs) {
      const e2 = s.hydrateArgs, t2 = rendererAliases.has(e2) ? rendererAliases.get(e2) : e2;
      v = o.find(({ name: e3 }) => e3 === `@astrojs/${t2}` || e3 === t2);
    }
    if (v || 1 !== o.length || (v = o[0]), !v) {
      const e2 = null == (r = s.componentUrl) ? void 0 : r.split(".").pop();
      v = o.filter(({ name: t2 }) => t2 === `@astrojs/${e2}` || t2 === e2)[0];
    }
  }
  if (v)
    "only" === s.hydrate ? m = await renderSlot(e, null == i ? void 0 : i.fallback) : { html: m, attrs: d } = await v.ssr.renderToStaticMarkup.call({ result: e }, n, c, f, s);
  else {
    if ("only" === s.hydrate)
      throw new Error(`Unable to render ${s.displayName}!

Using the \`client:only\` hydration strategy, Astro needs a hint to use the correct renderer.
Did you mean to pass <${s.displayName} client:only="${u.map((e2) => e2.replace("@astrojs/", "")).join("|")}" />
`);
    if ("string" != typeof n) {
      const t2 = o.filter((e2) => u.includes(e2.name)), a2 = o.length > 1;
      if (0 === t2.length)
        throw new Error(`Unable to render ${s.displayName}!

There ${a2 ? "are" : "is"} ${o.length} renderer${a2 ? "s" : ""} configured in your \`astro.config.mjs\` file,
but ${a2 ? "none were" : "it was not"} able to server-side render ${s.displayName}.

Did you mean to enable ${formatList(u.map((e2) => "`" + e2 + "`"))}?`);
      if (1 !== t2.length)
        throw new Error(`Unable to render ${s.displayName}!

This component likely uses ${formatList(u)},
but Astro encountered an error during server-side rendering.

Please ensure that ${s.displayName}:
1. Does not unconditionally access browser-specific globals like \`window\` or \`document\`.
   If this is unavoidable, use the \`client:only\` hydration directive.
2. Does not conditionally return \`null\` or \`undefined\` when rendered on the server.

If you're still stuck, please open an issue on GitHub or join us at https://astro.build/chat.`);
      v = t2[0], { html: m, attrs: d } = await v.ssr.renderToStaticMarkup.call({ result: e }, n, c, f, s);
    }
  }
  if (v && !v.clientEntrypoint && "@astrojs/lit" !== v.name && s.hydrate)
    throw new Error(`${s.displayName} component has a \`client:${s.hydrate}\` directive, but no client entrypoint was provided by ${v.name}!`);
  if (!m && "string" == typeof n) {
    const e2 = Object.values(f).join(""), t2 = renderAstroComponent(await renderTemplate`<${n}${internalSpreadAttributes(c)}${markHTMLString("" === e2 && voidElementNames.test(n) ? "/>" : `>${e2}</${n}>`)}`);
    m = "";
    for await (const e3 of t2)
      m += e3;
  }
  if (!p)
    return async function* () {
      h && (yield* h), l || "astro:jsx" === (null == v ? void 0 : v.name) ? yield m : yield markHTMLString(m.replace(/\<\/?astro-slot\>/g, ""));
    }();
  const g = shorthash(`<!--${s.componentExport.value}:${s.componentUrl}-->
${m}
${serializeProps(c, s)}`), y = await generateHydrateScript({ renderer: v, result: e, astroId: g, props: c, attrs: d }, s);
  let x = [];
  if (m) {
    if (Object.keys(f).length > 0)
      for (const e2 of Object.keys(f))
        m.includes("default" === e2 ? "<astro-slot>" : `<astro-slot name="${e2}">`) || x.push(e2);
  } else
    x = Object.keys(f);
  const w = x.length > 0 ? x.map((e2) => `<template data-astro-template${"default" !== e2 ? `="${e2}"` : ""}>${f[e2]}</template>`).join("") : "";
  return y.children = `${m ?? ""}${w}`, y.children && (y.props["await-children"] = ""), async function* () {
    h && (yield* h), yield { type: "directive", hydration: p, result: e }, yield markHTMLString(renderElement("astro-island", y, false));
  }();
}
var uniqueElements = (e, t, n) => {
  const a = JSON.stringify(e.props), i = e.children;
  return t === n.findIndex((e2) => JSON.stringify(e2.props) === a && e2.children == i);
};
function renderHead(e) {
  e._metadata.hasRenderedHead = true;
  const t = Array.from(e.styles).filter(uniqueElements).map((e2) => renderElement("style", e2));
  e.styles.clear();
  const n = Array.from(e.scripts).filter(uniqueElements).map((e2, t2) => renderElement("script", e2, false)), a = Array.from(e.links).filter(uniqueElements).map((e2) => renderElement("link", e2, false));
  return markHTMLString(a.join("\n") + t.join("\n") + n.join("\n"));
}
async function* maybeRenderHead(e) {
  e._metadata.hasRenderedHead || (yield renderHead(e));
}
function createComponent(e) {
  return e.isAstroComponentFactory = true, e;
}
function spreadAttributes(e, t, { class: n } = {}) {
  let a = "";
  n && (void 0 !== e.class ? e.class += ` ${n}` : void 0 !== e["class:list"] ? e["class:list"] = [e["class:list"], n] : e.class = n);
  for (const [t2, n2] of Object.entries(e))
    a += addAttribute(n2, t2, true);
  return markHTMLString(a);
}
"object" == typeof process && Object.prototype.toString.call(process);
var AstroJSX = "astro:jsx";
var Empty = Symbol("empty");
function isVNode(e) {
  return e && "object" == typeof e && e[AstroJSX];
}
function transformSlots(e) {
  if ("string" == typeof e.type)
    return e;
  const t = {};
  if (isVNode(e.props.children)) {
    const n = e.props.children;
    if (!isVNode(n))
      return;
    if (!("slot" in n.props))
      return;
    const a = n.props.slot;
    t[a] = [n], t[a].$$slot = true, delete n.props.slot, delete e.props.children;
  }
  Array.isArray(e.props.children) && (e.props.children = e.props.children.map((e2) => {
    if (!isVNode(e2))
      return e2;
    if (!("slot" in e2.props))
      return e2;
    const n = e2.props.slot;
    return Array.isArray(t[n]) ? t[n].push(e2) : (t[n] = [e2], t[n].$$slot = true), delete e2.props.slot, Empty;
  }).filter((e2) => e2 !== Empty)), Object.assign(e.props, t);
}
function markRawChildren(e) {
  return "string" == typeof e ? markHTMLString(e) : Array.isArray(e) ? e.map((e2) => markRawChildren(e2)) : e;
}
function transformSetDirectives(e) {
  if ("set:html" in e.props || "set:text" in e.props) {
    if ("set:html" in e.props) {
      const t = markRawChildren(e.props["set:html"]);
      return delete e.props["set:html"], void Object.assign(e.props, { children: t });
    }
    if ("set:text" in e.props) {
      const t = e.props["set:text"];
      return delete e.props["set:text"], void Object.assign(e.props, { children: t });
    }
  }
}
function createVNode(e, t) {
  const n = { [Renderer]: "astro:jsx", [AstroJSX]: true, type: e, props: t ?? {} };
  return transformSetDirectives(n), transformSlots(n), n;
}
var slotName = (e) => e.trim().replace(/[-_]([a-z])/g, (e2, t) => t.toUpperCase());
async function check(e, t, { default: n = null, ...a } = {}) {
  if ("function" != typeof e)
    return false;
  const i = {};
  for (const [e2, t2] of Object.entries(a)) {
    i[slotName(e2)] = t2;
  }
  try {
    return (await e({ ...t, ...i, children: n }))[AstroJSX];
  } catch (e2) {
  }
  return false;
}
async function renderToStaticMarkup(e, t = {}, { default: n = null, ...a } = {}) {
  const i = {};
  for (const [e2, t2] of Object.entries(a)) {
    i[slotName(e2)] = t2;
  }
  const { result: r } = this;
  return { html: await renderJSX(r, createVNode(e, { ...t, ...i, children: n })) };
}
var server_default = { check, renderToStaticMarkup };
var $$Astro$1 = createAstro("D:/Developer/app/lightrix/astro-deno-deploy/src/layouts/Base.astro", "", "file:///D:/Developer/app/lightrix/astro-deno-deploy/");
var $$Base = createComponent(async (e, t, n) => {
  const a = e.createAstro($$Astro$1, t, n);
  a.self = $$Base;
  const { title: i = "", description: r = "" } = a.props, o = [];
  for (const t2 of o)
    e.styles.add(t2);
  return renderTemplate`<html lang="en" class="no-js" dir="ltr">
	<head>
		${maybeRenderHead(e)}

		<!-- Meta -->
		<title>${i}</title>
		<meta charset="utf-8">
		<meta name="description"${addAttribute(r, "content")}>
		<meta name="viewport" content="width=device-width,initial-scale=1.0">
		<!-- TODO Define your color theme in hex here -->
		<meta name="theme-color" content="">
		<meta name="format-detection" content="telephone=no">
		<meta name="twitter:dnt" content="on">

		<!-- Links -->
		<link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link rel="manifest" href="/site.webmanifest" crossorigin="use-credentials">

		

		<!-- Favicon -->
	${renderHead(e)}</head>

	<body>
		<!-- TODO Generate the ID here -->
		<div id="">
			<div class="grow">
				${renderSlot(e, n.default)}
			</div>
		</div>
	</body></html>`;
});
var $$Astro = createAstro("D:/Developer/app/lightrix/astro-deno-deploy/src/pages/index.astro", "", "file:///D:/Developer/app/lightrix/astro-deno-deploy/");
var $$Index = createComponent(async (e, t, n) => (e.createAstro($$Astro, t, n).self = $$Index, renderTemplate`${renderComponent(e, "Base", $$Base, {})}`));
var $$file = "D:/Developer/app/lightrix/astro-deno-deploy/src/pages/index.astro";
var _page0 = Object.freeze(Object.defineProperty({ __proto__: null, default: $$Index, file: $$file, url: "" }, Symbol.toStringTag, { value: "Module" }));
var pageMap = /* @__PURE__ */ new Map([["src/pages/index.astro", _page0]]);
var renderers = [Object.assign({ name: "astro:jsx", serverEntrypoint: "astro/jsx/server.js", jsxImportSource: "astro" }, { ssr: server_default })];
"undefined" != typeof process && (process.argv.includes("--verbose") || process.argv.includes("--silent"));
var SCRIPT_EXTENSIONS = /* @__PURE__ */ new Set([".js", ".ts"]);
new RegExp(`\\.(${Array.from(SCRIPT_EXTENSIONS).map((e) => e.slice(1)).join("|")})($|\\?)`);
var STYLE_EXTENSIONS = /* @__PURE__ */ new Set([".css", ".pcss", ".postcss", ".scss", ".sass", ".styl", ".stylus", ".less"]);
function getRouteGenerator(e, t) {
  const n = e.map((e2) => "/" + e2.map((e3) => e3.spread ? `:${e3.content.slice(3)}(.*)?` : e3.dynamic ? `:${e3.content}` : e3.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("")).join("");
  let a = "";
  "always" === t && e.length && (a = "/");
  return compile(n + a);
}
function deserializeRouteData(e) {
  return { route: e.route, type: e.type, pattern: new RegExp(e.pattern), params: e.params, component: e.component, generate: getRouteGenerator(e.segments, e._meta.trailingSlash), pathname: e.pathname || void 0, segments: e.segments };
}
function deserializeManifest(e) {
  const t = [];
  for (const n2 of e.routes) {
    t.push({ ...n2, routeData: deserializeRouteData(n2.routeData) });
    n2.routeData = deserializeRouteData(n2.routeData);
  }
  const n = new Set(e.assets);
  return { ...e, assets: n, routes: t };
}
new RegExp(`\\.(${Array.from(STYLE_EXTENSIONS).map((e) => e.slice(1)).join("|")})($|\\?)`);
var _manifest = Object.assign(deserializeManifest({ adapterName: "@astrojs/deno", routes: [{ file: "", links: ["assets/index.cc324868.css"], scripts: [{ type: "inline", value: 'document.documentElement.classList.remove("no-js");document.documentElement.classList.add("js");\n' }], routeData: { route: "/", type: "page", pattern: "^\\/$", segments: [], params: [], component: "src/pages/index.astro", pathname: "/", _meta: { trailingSlash: "ignore" } } }], base: "/", markdown: { drafts: false, syntaxHighlight: "shiki", shikiConfig: { langs: [], theme: "github-dark", wrap: false }, remarkPlugins: [], rehypePlugins: [], remarkRehype: {}, extendDefaultPlugins: false, isAstroFlavoredMd: false }, pageMap: null, renderers: [], entryModules: { "\0@astrojs-ssr-virtual-entry": "entry.mjs", "/astro/hoisted.js?q=0": "hoisted.217f67e9.js", "astro:scripts/before-hydration.js": "" }, assets: ["/assets/index.cc324868.css", "/robots.txt", "/site.webmanifest"] }), { pageMap, renderers });
var _args = {};
var _exports = createExports(_manifest, _args);
var stop = _exports.stop;
var handle = _exports.handle;
var start = _exports.start;
var running = _exports.running;
var _start = "start";
_start in adapter && adapter.start(_manifest, _args);
export {
  handle,
  running,
  start,
  stop
};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
/**
 * shortdash - https://github.com/bibig/node-shorthash
 *
 * @license
 *
 * (The MIT License)
 *
 * Copyright (c) 2013 Bibig <bibig@me.com>
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
