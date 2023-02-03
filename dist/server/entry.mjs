globalThis.process = {
	argv: [],
	env: Deno.env.toObject(),
};

// dist/server/chunks/astro.196a8c4b.mjs
function Mime$1() {
  this._types = /* @__PURE__ */ Object.create(null), this._extensions = /* @__PURE__ */ Object.create(null);
  for (let e = 0; e < arguments.length; e++)
    this.define(arguments[e]);
  this.define = this.define.bind(this), this.getType = this.getType.bind(this), this.getExtension = this.getExtension.bind(this);
}
Mime$1.prototype.define = function(e, t) {
  for (let a in e) {
    let n = e[a].map(function(e2) {
      return e2.toLowerCase();
    });
    a = a.toLowerCase();
    for (let e2 = 0; e2 < n.length; e2++) {
      const i = n[e2];
      if ("*" !== i[0]) {
        if (!t && i in this._types)
          throw new Error('Attempt to change mapping for "' + i + '" extension from "' + this._types[i] + '" to "' + a + '". Pass `force=true` to allow this, otherwise remove "' + i + '" from the list of extensions for "' + a + '".');
        this._types[i] = a;
      }
    }
    if (t || !this._extensions[a]) {
      const e2 = n[0];
      this._extensions[a] = "*" !== e2[0] ? e2 : e2.substr(1);
    }
  }
}, Mime$1.prototype.getType = function(e) {
  let t = (e = String(e)).replace(/^.*[/\\]/, "").toLowerCase(), a = t.replace(/^.*\./, "").toLowerCase(), n = t.length < e.length;
  return (a.length < t.length - 1 || !n) && this._types[a] || null;
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
  for (var a = {}, n = (t || {}).decode || decode, i = 0; i < e.length; ) {
    var o = e.indexOf("=", i);
    if (-1 === o)
      break;
    var r = e.indexOf(";", i);
    if (-1 === r)
      r = e.length;
    else if (r < o) {
      i = e.lastIndexOf(";", o - 1) + 1;
      continue;
    }
    var s = e.slice(i, o).trim();
    if (void 0 === a[s]) {
      var p = e.slice(o + 1, r).trim();
      34 === p.charCodeAt(0) && (p = p.slice(1, -1)), a[s] = tryDecode(p, n);
    }
    i = r + 1;
  }
  return a;
}
function serialize(e, t, a) {
  var n = a || {}, i = n.encode || encode;
  if ("function" != typeof i)
    throw new TypeError("option encode is invalid");
  if (!fieldContentRegExp.test(e))
    throw new TypeError("argument name is invalid");
  var o = i(t);
  if (o && !fieldContentRegExp.test(o))
    throw new TypeError("argument val is invalid");
  var r = e + "=" + o;
  if (null != n.maxAge) {
    var s = n.maxAge - 0;
    if (isNaN(s) || !isFinite(s))
      throw new TypeError("option maxAge is invalid");
    r += "; Max-Age=" + Math.floor(s);
  }
  if (n.domain) {
    if (!fieldContentRegExp.test(n.domain))
      throw new TypeError("option domain is invalid");
    r += "; Domain=" + n.domain;
  }
  if (n.path) {
    if (!fieldContentRegExp.test(n.path))
      throw new TypeError("option path is invalid");
    r += "; Path=" + n.path;
  }
  if (n.expires) {
    var p = n.expires;
    if (!isDate(p) || isNaN(p.valueOf()))
      throw new TypeError("option expires is invalid");
    r += "; Expires=" + p.toUTCString();
  }
  if (n.httpOnly && (r += "; HttpOnly"), n.secure && (r += "; Secure"), n.priority)
    switch ("string" == typeof n.priority ? n.priority.toLowerCase() : n.priority) {
      case "low":
        r += "; Priority=Low";
        break;
      case "medium":
        r += "; Priority=Medium";
        break;
      case "high":
        r += "; Priority=High";
        break;
      default:
        throw new TypeError("option priority is invalid");
    }
  if (n.sameSite)
    switch ("string" == typeof n.sameSite ? n.sameSite.toLowerCase() : n.sameSite) {
      case true:
        r += "; SameSite=Strict";
        break;
      case "lax":
        r += "; SameSite=Lax";
        break;
      case "strict":
        r += "; SameSite=Strict";
        break;
      case "none":
        r += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  return r;
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
var __accessCheck$3 = (e, t, a) => {
  if (!t.has(e))
    throw TypeError("Cannot " + a);
};
var __privateGet$3 = (e, t, a) => (__accessCheck$3(e, t, "read from private field"), a ? a.call(e) : t.get(e));
var __privateAdd$3 = (e, t, a) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, a);
};
var __privateSet$3 = (e, t, a, n) => (__accessCheck$3(e, t, "write to private field"), n ? n.call(e, a) : t.set(e, a), a);
var __privateMethod$1 = (e, t, a) => (__accessCheck$3(e, t, "access private method"), a);
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
    const a = { expires: DELETED_EXPIRATION };
    (null == t ? void 0 : t.domain) && (a.domain = t.domain), (null == t ? void 0 : t.path) && (a.path = t.path), __privateMethod$1(this, _ensureOutgoingMap, ensureOutgoingMap_fn).call(this).set(e, ["deleted", serialize_1(e, "deleted", a), false]);
  }
  get(e) {
    if (null !== __privateGet$3(this, _outgoing) && __privateGet$3(this, _outgoing).has(e)) {
      let [t2, , a] = __privateGet$3(this, _outgoing).get(e);
      return new AstroCookie(a ? t2 : void 0);
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
  set(e, t, a) {
    let n;
    if ("string" == typeof t)
      n = t;
    else {
      let e2 = t.toString();
      n = e2 === Object.prototype.toString.call(t) ? JSON.stringify(t) : e2;
    }
    const i = {};
    a && Object.assign(i, a), __privateMethod$1(this, _ensureOutgoingMap, ensureOutgoingMap_fn).call(this).set(e, [n, serialize_1(e, n, i), true]);
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
var AstroErrorData = { UnknownCompilerError: { title: "Unknown compiler error.", code: 1e3, hint: "This is almost always a problem with the Astro compiler, not your code. Please open an issue at https://astro.build/issues/compiler." }, StaticRedirectNotAvailable: { title: "`Astro.redirect` is not available in static mode.", code: 3001, message: "Redirects are only available when using `output: 'server'`. Update your Astro config if you need SSR features.", hint: "See https://docs.astro.build/en/guides/server-side-rendering/#enabling-ssr-in-your-project for more information on how to enable SSR." }, ClientAddressNotAvailable: { title: "`Astro.clientAddress` is not available in current adapter.", code: 3002, message: (e) => `\`Astro.clientAddress\` is not available in the \`${e}\` adapter. File an issue with the adapter to add support.` }, StaticClientAddressNotAvailable: { title: "`Astro.clientAddress` is not available in static mode.", code: 3003, message: "`Astro.clientAddress` is only available when using `output: 'server'`. Update your Astro config if you need SSR features.", hint: "See https://docs.astro.build/en/guides/server-side-rendering/#enabling-ssr-in-your-project for more information on how to enable SSR." }, NoMatchingStaticPathFound: { title: "No static path found for requested path.", code: 3004, message: (e) => `A \`getStaticPaths()\` route pattern was matched, but no matching static path was found for requested path \`${e}\`.`, hint: (e) => `Possible dynamic routes being matched: ${e.join(", ")}.` }, OnlyResponseCanBeReturned: { title: "Invalid type returned by Astro page.", code: 3005, message: (e, t) => `Route \`${e || ""}\` returned a \`${t}\`. Only a [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) can be returned from Astro files.`, hint: "See https://docs.astro.build/en/guides/server-side-rendering/#response for more information." }, MissingMediaQueryDirective: { title: "Missing value for `client:media` directive.", code: 3006, message: 'Media query not provided for `client:media` directive. A media query similar to `client:media="(max-width: 600px)"` must be provided' }, NoMatchingRenderer: { title: "No matching renderer found.", code: 3007, message: (e, t, a, n) => `Unable to render \`${e}\`.

${n > 0 ? `There ${a ? "are." : "is."} ${n} renderer${a ? "s." : ""} configured in your \`astro.config.mjs\` file,
but ${a ? "none were." : "it was not."} able to server-side render \`${e}\`.` : "No valid renderer was found " + (t ? `for the \`.${t}\` file extension.` : "for this file extension.")}`, hint: (e) => `Did you mean to enable the ${e} integration?

See https://docs.astro.build/en/core-concepts/framework-components/ for more information on how to install and configure integrations.` }, NoClientEntrypoint: { title: "No client entrypoint specified in renderer.", code: 3008, message: (e, t, a) => `\`${e}\` component has a \`client:${t}\` directive, but no client entrypoint was provided by \`${a}\`.`, hint: "See https://docs.astro.build/en/reference/integrations-reference/#addrenderer-option for more information on how to configure your renderer." }, NoClientOnlyHint: { title: "Missing hint on client:only directive.", code: 3009, message: (e) => `Unable to render \`${e}\`. When using the \`client:only\` hydration strategy, Astro needs a hint to use the correct renderer.`, hint: (e) => `Did you mean to pass \`client:only="${e}"\`? See https://docs.astro.build/en/reference/directives-reference/#clientonly for more information on client:only` }, InvalidGetStaticPathParam: { title: "Invalid value returned by a `getStaticPaths` path.", code: 3010, message: (e) => `Invalid params given to \`getStaticPaths\` path. Expected an \`object\`, got \`${e}\``, hint: "See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths." }, InvalidGetStaticPathsReturn: { title: "Invalid value returned by getStaticPaths.", code: 3011, message: (e) => `Invalid type returned by \`getStaticPaths\`. Expected an \`array\`, got \`${e}\``, hint: "See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths." }, GetStaticPathsRemovedRSSHelper: { title: "getStaticPaths RSS helper is not available anymore.", code: 3012, message: "The RSS helper has been removed from `getStaticPaths`. Try the new @astrojs/rss package instead.", hint: "See https://docs.astro.build/en/guides/rss/ for more information." }, GetStaticPathsExpectedParams: { title: "Missing params property on `getStaticPaths` route.", code: 3013, message: "Missing or empty required `params` property on `getStaticPaths` route.", hint: "See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths." }, GetStaticPathsInvalidRouteParam: { title: "Invalid value for `getStaticPaths` route parameter.", code: 3014, message: (e, t, a) => `Invalid getStaticPaths route parameter for \`${e}\`. Expected undefined, a string or a number, received \`${a}\` (\`${t}\`)`, hint: "See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths." }, GetStaticPathsRequired: { title: "`getStaticPaths()` function required for dynamic routes.", code: 3015, message: "`getStaticPaths()` function is required for dynamic routes. Make sure that you `export` a `getStaticPaths` function from your dynamic route.", hint: 'See https://docs.astro.build/en/core-concepts/routing/#dynamic-routes for more information on dynamic routes.\n\nAlternatively, set `output: "server"` in your Astro config file to switch to a non-static server build. This error can also occur if using `export const prerender = true;`.\nSee https://docs.astro.build/en/guides/server-side-rendering/ for more information on non-static rendering.' }, ReservedSlotName: { title: "Invalid slot name.", code: 3016, message: (e) => `Unable to create a slot named \`${e}\`. \`${e}\` is a reserved slot name. Please update the name of this slot.` }, NoAdapterInstalled: { title: "Cannot use Server-side Rendering without an adapter.", code: 3017, message: "Cannot use `output: 'server'` without an adapter. Please install and configure the appropriate server adapter for your final deployment.", hint: "See https://docs.astro.build/en/guides/server-side-rendering/ for more information." }, NoMatchingImport: { title: "No import found for component.", code: 3018, message: (e) => `Could not render \`${e}\`. No matching import has been found for \`${e}\`.`, hint: "Please make sure the component is properly imported." }, InvalidPrerenderExport: { title: "Invalid prerender export.", code: 3019, message: (e, t) => {
  let a = "A `prerender` export has been detected, but its value cannot be statically analyzed.";
  return "const" !== e && (a += `
Expected \`const\` declaration but got \`${e}\`.`), "true" !== t && (a += `
Expected \`true\` value but got \`${t}\`.`), a;
}, hint: "Mutable values declared at runtime are not supported. Please make sure to use exactly `export const prerender = true`." }, InvalidComponentArgs: { title: "Invalid component arguments.", code: 3020, message: (e) => `Invalid arguments passed to${e ? ` <${e}>` : ""} component.`, hint: "Astro components cannot be rendered directly via function call, such as `Component()` or `{items.map(Component)}`." }, UnknownViteError: { title: "Unknown Vite Error.", code: 4e3 }, FailedToLoadModuleSSR: { title: "Could not import file.", code: 4001, message: (e) => `Could not import \`${e}\`.`, hint: "This is often caused by a typo in the import path. Please make sure the file exists." }, InvalidGlob: { title: "Invalid glob pattern.", code: 4002, message: (e) => `Invalid glob pattern: \`${e}\`. Glob patterns must start with './', '../' or '/'.`, hint: "See https://docs.astro.build/en/guides/imports/#glob-patterns for more information on supported glob patterns." }, UnknownCSSError: { title: "Unknown CSS Error.", code: 5e3 }, CSSSyntaxError: { title: "CSS Syntax Error.", code: 5001 }, UnknownMarkdownError: { title: "Unknown Markdown Error.", code: 6e3 }, MarkdownFrontmatterParseError: { title: "Failed to parse Markdown frontmatter.", code: 6001 }, InvalidFrontmatterInjectionError: { title: "Invalid frontmatter injection.", code: 6003, message: 'A remark or rehype plugin attempted to inject invalid frontmatter. Ensure "astro.frontmatter" is set to a valid JSON object that is not `null` or `undefined`.', hint: "See the frontmatter injection docs https://docs.astro.build/en/guides/markdown-content/#modifying-frontmatter-programmatically for more information." }, MdxIntegrationMissingError: { title: "MDX integration missing.", code: 6004, message: (e) => `Unable to render ${e}. Ensure that the \`@astrojs/mdx\` integration is installed.`, hint: "See the MDX integration docs for installation and usage instructions: https://docs.astro.build/en/guides/integrations-guide/mdx/" }, UnknownConfigError: { title: "Unknown configuration error.", code: 7e3 }, ConfigNotFound: { title: "Specified configuration file not found.", code: 7001, message: (e) => `Unable to resolve \`--config "${e}"\`. Does the file exist?` }, ConfigLegacyKey: { title: "Legacy configuration detected.", code: 7002, message: (e) => `Legacy configuration detected: \`${e}\`.`, hint: "Please update your configuration to the new format.\nSee https://astro.build/config for more information." }, UnknownCLIError: { title: "Unknown CLI Error.", code: 8e3 }, GenerateContentTypesError: { title: "Failed to generate content types.", code: 8001, message: "`astro sync` command failed to generate content collection types.", hint: "Check your `src/content/config.*` file for typos." }, UnknownContentCollectionError: { title: "Unknown Content Collection Error.", code: 9e3 }, InvalidContentEntryFrontmatterError: { title: "Content entry frontmatter does not match schema.", code: 9001, message: (e, t, a) => [`${String(e)} \u2192 ${String(t)} frontmatter does not match collection schema.`, ...a.errors.map((e2) => e2.message)].join("\n"), hint: "See https://docs.astro.build/en/guides/content-collections/ for more information on content schemas." }, InvalidContentEntrySlugError: { title: "Invalid content entry slug.", code: 9002, message: (e, t) => `${String(e)} \u2192 ${String(t)} has an invalid slug. \`slug\` must be a string.`, hint: "See https://docs.astro.build/en/guides/content-collections/ for more on the `slug` field." }, ContentSchemaContainsSlugError: { title: "Content Schema should not contain `slug`.", code: 9003, message: (e) => `A content collection schema should not contain \`slug\` since it is reserved for slug generation. Remove this from your ${e} collection schema.`, hint: "See https://docs.astro.build/en/guides/content-collections/ for more on the `slug` field." }, UnknownError: { title: "Unknown Error.", code: 99999 } };
function normalizeLF(e) {
  return e.replace(/\r\n|\r(?!\n)|\n/g, "\n");
}
function getErrorDataByCode(e) {
  const t = Object.entries(AstroErrorData).find((t2) => t2[1].code === e);
  if (t)
    return { name: t[0], data: t[1] };
}
function codeFrame(e, t) {
  if (!t || void 0 === t.line || void 0 === t.column)
    return "";
  const a = normalizeLF(e).split("\n").map((e2) => e2.replace(/\t/g, "  ")), n = [];
  for (let e2 = -2; e2 <= 2; e2++)
    a[t.line + e2] && n.push(t.line + e2);
  let i = 0;
  for (const e2 of n) {
    let t2 = `> ${e2}`;
    t2.length > i && (i = t2.length);
  }
  let o = "";
  for (const e2 of n) {
    const n2 = e2 === t.line - 1;
    o += n2 ? "> " : "  ", o += `${e2 + 1} | ${a[e2]}
`, n2 && (o += `${Array.from({ length: i }).join(" ")}  | ${Array.from({ length: t.column }).join(" ")}^
`);
  }
  return o;
}
var AstroError = class extends Error {
  constructor(e, ...t) {
    var a;
    super(...t), this.type = "AstroError";
    const { code: n, name: i, title: o, message: r, stack: s, location: p, hint: l, frame: c } = e;
    this.errorCode = n, this.name = i && "Error" !== i ? i : (null == (a = getErrorDataByCode(this.errorCode)) ? void 0 : a.name) ?? "UnknownError", this.title = o, r && (this.message = r), this.stack = s || this.stack, this.loc = p, this.hint = l, this.frame = c;
  }
  setErrorCode(e) {
    this.errorCode = e;
  }
  setLocation(e) {
    this.loc = e;
  }
  setName(e) {
    this.name = e;
  }
  setMessage(e) {
    this.message = e;
  }
  setHint(e) {
    this.hint = e;
  }
  setFrame(e, t) {
    this.frame = codeFrame(e, t);
  }
  static is(e) {
    return "AstroError" === e.type;
  }
};
function validateArgs(e) {
  return 3 === e.length && !(!e[0] || "object" != typeof e[0]);
}
function baseCreateComponent(e, t) {
  var a;
  const n = (null == (a = null == t ? void 0 : t.split("/").pop()) ? void 0 : a.replace(".astro", "")) ?? "", i = (...t2) => {
    if (!validateArgs(t2))
      throw new AstroError({ ...AstroErrorData.InvalidComponentArgs, message: AstroErrorData.InvalidComponentArgs.message(n) });
    return e(...t2);
  };
  return Object.defineProperty(i, "name", { value: n, writable: false }), i.isAstroComponentFactory = true, i.moduleId = t, i;
}
function createComponentWithOptions(e) {
  const t = baseCreateComponent(e.factory, e.moduleId);
  return t.propagation = e.propagation, t;
}
function createComponent(e, t) {
  return "function" == typeof e ? baseCreateComponent(e, t) : createComponentWithOptions(e);
}
var ASTRO_VERSION = "2.0.6";
function createAstroGlobFn() {
  return (e, t) => {
    let a = [...Object.values(e)];
    if (0 === a.length)
      throw new Error(`Astro.glob(${JSON.stringify(t())}) - no matches found.`);
    return Promise.all(a.map((e2) => e2()));
  };
}
function createAstro(e) {
  return { site: e ? new URL(e) : void 0, generator: `Astro v${ASTRO_VERSION}`, glob: createAstroGlobFn() };
}
function getHandlerFromModule(e, t) {
  return e[t] ? e[t] : "delete" === t && e.del ? e.del : e.all ? e.all : void 0;
}
async function renderEndpoint(e, t, a) {
  var n;
  const { request: i, params: o } = t, r = null == (n = i.method) ? void 0 : n.toLowerCase(), s = getHandlerFromModule(e, r);
  if (!a && false === a && r && "get" !== r && console.warn(`
${r} requests are not available when building a static site. Update your config to output: 'server' to handle ${r} requests.`), !s || "function" != typeof s) {
    return new Response(null, { status: 404, headers: { "X-Astro-Response": "Not-Found" } });
  }
  s.length > 1 && console.warn("\nAPI routes with 2 arguments have been deprecated. Instead they take a single argument in the form of:\n\nexport function get({ params, request }) {\n	//...\n}\n\nUpdate your code to remove this warning.");
  const p = new Proxy(t, { get: (e2, t2) => t2 in e2 ? Reflect.get(e2, t2) : t2 in o ? (console.warn("\nAPI routes no longer pass params as the first argument. Instead an object containing a params property is provided in the form of:\n\nexport function get({ params }) {\n	// ...\n}\n\nUpdate your code to remove this warning."), Reflect.get(o, t2)) : void 0 });
  return s.call(e, p, i);
}
var { replace } = "";
var ca = /[&<>'"]/g;
var esca = { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" };
var pe = (e) => esca[e];
var escape = (e) => replace.call(e, ca, pe);
function serializeListValue(e) {
  const t = {};
  return function e2(a) {
    a && "function" == typeof a.forEach ? a.forEach(e2) : a === Object(a) ? Object.keys(a).forEach((t2) => {
      a[t2] && e2(t2);
    }) : (a = false === a || null == a ? "" : String(a).trim()) && a.split(/\s+/).forEach((e3) => {
      t[e3] = true;
    });
  }(e), Object.keys(t).join(" ");
}
function isPromise(e) {
  return !!e && "object" == typeof e && "function" == typeof e.then;
}
async function* streamAsyncIterator(e) {
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: e2, value: a } = await t.read();
      if (e2)
        return;
      yield a;
    }
  } finally {
    t.releaseLock();
  }
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
var AstroJSX = "astro:jsx";
var Empty = Symbol("empty");
var toSlotName = (e) => e;
function isVNode(e) {
  return e && "object" == typeof e && e[AstroJSX];
}
function transformSlots(e) {
  if ("string" == typeof e.type)
    return e;
  const t = {};
  if (isVNode(e.props.children)) {
    const a = e.props.children;
    if (!isVNode(a))
      return;
    if (!("slot" in a.props))
      return;
    const n = toSlotName(a.props.slot);
    t[n] = [a], t[n].$$slot = true, delete a.props.slot, delete e.props.children;
  }
  Array.isArray(e.props.children) && (e.props.children = e.props.children.map((e2) => {
    if (!isVNode(e2))
      return e2;
    if (!("slot" in e2.props))
      return e2;
    const a = toSlotName(e2.props.slot);
    return Array.isArray(t[a]) ? t[a].push(e2) : (t[a] = [e2], t[a].$$slot = true), delete e2.props.slot, Empty;
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
  const a = { [Renderer]: "astro:jsx", [AstroJSX]: true, type: e, props: t ?? {} };
  return transformSetDirectives(a), transformSlots(a), a;
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
var voidElementNames = /^(area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/i;
var htmlBooleanAttributes = /^(allowfullscreen|async|autofocus|autoplay|controls|default|defer|disabled|disablepictureinpicture|disableremoteplayback|formnovalidate|hidden|loop|nomodule|novalidate|open|playsinline|readonly|required|reversed|scoped|seamless|itemscope)$/i;
var htmlEnumAttributes = /^(contenteditable|draggable|spellcheck|value)$/i;
var svgEnumAttributes = /^(autoReverse|externalResourcesRequired|focusable|preserveAlpha)$/i;
var STATIC_DIRECTIVES = /* @__PURE__ */ new Set(["set:html", "set:text"]);
var toIdent = (e) => e.trim().replace(/(?:(?!^)\b\w|\s+|[^\w]+)/g, (e2, t) => /[^\w]|\s/.test(e2) ? "" : 0 === t ? e2 : e2.toUpperCase());
var toAttributeString = (e, t = true) => t ? String(e).replace(/&/g, "&#38;").replace(/"/g, "&#34;") : e;
var kebab = (e) => e.toLowerCase() === e ? e : e.replace(/[A-Z]/g, (e2) => `-${e2.toLowerCase()}`);
var toStyleString = (e) => Object.entries(e).map(([e2, t]) => `${kebab(e2)}:${t}`).join(";");
function defineScriptVars(e) {
  let t = "";
  for (const [a, n] of Object.entries(e))
    t += `const ${toIdent(a)} = ${JSON.stringify(n)};
`;
  return markHTMLString(t);
}
function formatList(e) {
  return 1 === e.length ? e[0] : `${e.slice(0, -1).join(", ")} or ${e[e.length - 1]}`;
}
function addAttribute(e, t, a = true) {
  if (null == e)
    return "";
  if (false === e)
    return htmlEnumAttributes.test(t) || svgEnumAttributes.test(t) ? markHTMLString(` ${t}="false"`) : "";
  if (STATIC_DIRECTIVES.has(t))
    return console.warn(`[astro] The "${t}" directive cannot be applied dynamically at runtime. It will not be rendered as an attribute.

Make sure to use the static attribute syntax (\`${t}={value}\`) instead of the dynamic spread syntax (\`{...{ "${t}": value }}\`).`), "";
  if ("class:list" === t) {
    const n = toAttributeString(serializeListValue(e), a);
    return "" === n ? "" : markHTMLString(` ${t.slice(0, -5)}="${n}"`);
  }
  return "style" !== t || e instanceof HTMLString || "object" != typeof e ? "className" === t ? markHTMLString(` class="${toAttributeString(e, a)}"`) : true === e && (t.startsWith("data-") || htmlBooleanAttributes.test(t)) ? markHTMLString(` ${t}`) : markHTMLString(` ${t}="${toAttributeString(e, a)}"`) : markHTMLString(` ${t}="${toAttributeString(toStyleString(e), a)}"`);
}
function internalSpreadAttributes(e, t = true) {
  let a = "";
  for (const [n, i] of Object.entries(e))
    a += addAttribute(i, n, t);
  return markHTMLString(a);
}
function renderElement$1(e, { props: t, children: a = "" }, n = true) {
  const { lang: i, "data-astro-id": o, "define:vars": r, ...s } = t;
  return r && ("style" === e && (delete s["is:global"], delete s["is:scoped"]), "script" === e && (delete s.hoist, a = defineScriptVars(r) + "\n" + a)), null != a && "" != a || !voidElementNames.test(e) ? `<${e}${internalSpreadAttributes(s, n)}>${a}</${e}>` : `<${e}${internalSpreadAttributes(s, n)} />`;
}
var ScopeFlags = { Astro: 1, JSX: 2, Slot: 4 };
var uniqueElements = (e, t, a) => {
  const n = JSON.stringify(e.props), i = e.children;
  return t === a.findIndex((e2) => JSON.stringify(e2.props) === n && e2.children == i);
};
function renderAllHeadContent(e) {
  e._metadata.hasRenderedHead = true;
  const t = Array.from(e.styles).filter(uniqueElements).map((e2) => renderElement$1("style", e2));
  e.styles.clear();
  const a = Array.from(e.scripts).filter(uniqueElements).map((e2, t2) => renderElement$1("script", e2, false));
  let n = Array.from(e.links).filter(uniqueElements).map((e2) => renderElement$1("link", e2, false)).join("\n") + t.join("\n") + a.join("\n");
  if (e.extraHead.length > 0)
    for (const t2 of e.extraHead)
      n += t2;
  return markHTMLString(n);
}
function* renderHead(e) {
  yield { type: "head", result: e };
}
function* maybeRenderHead(e) {
  e._metadata.hasRenderedHead || e.scope !== (ScopeFlags.JSX | ScopeFlags.Slot | ScopeFlags.Astro) && (yield { type: "head", result: e });
}
var headAndContentSym = Symbol.for("astro.headAndContent");
function isHeadAndContent(e) {
  return "object" == typeof e && !!e[headAndContentSym];
}
var _a$1;
var renderTemplateResultSym = Symbol.for("astro.renderTemplateResult");
var RenderTemplateResult = class {
  constructor(e, t) {
    this[_a$1] = true, this.htmlParts = e, this.error = void 0, this.expressions = t.map((e2) => isPromise(e2) ? Promise.resolve(e2).catch((e3) => {
      if (!this.error)
        throw this.error = e3, e3;
    }) : e2);
  }
  async *[(_a$1 = renderTemplateResultSym, Symbol.asyncIterator)]() {
    const { htmlParts: e, expressions: t } = this;
    for (let a = 0; a < e.length; a++) {
      const n = e[a], i = t[a];
      yield markHTMLString(n), yield* renderChild(i);
    }
  }
};
function isRenderTemplateResult(e) {
  return "object" == typeof e && !!e[renderTemplateResultSym];
}
async function* renderAstroTemplateResult(e) {
  for await (const t of e)
    if (t || 0 === t)
      for await (const e2 of renderChild(t))
        if ("directive" === e2.type)
          yield e2;
        else
          yield markHTMLString(e2);
}
function renderTemplate(e, ...t) {
  return new RenderTemplateResult(e, t);
}
function isAstroComponentFactory(e) {
  return null != e && true === e.isAstroComponentFactory;
}
async function renderToString(e, t, a, n) {
  e.scope |= ScopeFlags.Astro;
  const i = await t(e, a, n);
  if (i instanceof Response) {
    throw i;
  }
  let o = new HTMLParts();
  const r = isHeadAndContent(i) ? i.content : i;
  for await (const t2 of renderAstroTemplateResult(r))
    o.append(t2, e);
  return o.toString();
}
function isAPropagatingComponent(e, t) {
  let a = t.propagation || "none";
  return t.moduleId && e.propagation.has(t.moduleId) && "none" === a && (a = e.propagation.get(t.moduleId)), "in-tree" === a || "self" === a;
}
var PROP_TYPE = { Value: 0, JSON: 1, RegExp: 2, Date: 3, Map: 4, Set: 5, BigInt: 6, URL: 7, Uint8Array: 8, Uint16Array: 9, Uint32Array: 10 };
function serializeArray(e, t = {}, a = /* @__PURE__ */ new WeakSet()) {
  if (a.has(e))
    throw new Error(`Cyclic reference detected while serializing props for <${t.displayName} client:${t.hydrate}>!

Cyclic references cannot be safely serialized for client-side usage. Please remove the cyclic reference.`);
  a.add(e);
  const n = e.map((e2) => convertToSerializedForm(e2, t, a));
  return a.delete(e), n;
}
function serializeObject(e, t = {}, a = /* @__PURE__ */ new WeakSet()) {
  if (a.has(e))
    throw new Error(`Cyclic reference detected while serializing props for <${t.displayName} client:${t.hydrate}>!

Cyclic references cannot be safely serialized for client-side usage. Please remove the cyclic reference.`);
  a.add(e);
  const n = Object.fromEntries(Object.entries(e).map(([e2, n2]) => [e2, convertToSerializedForm(n2, t, a)]));
  return a.delete(e), n;
}
function convertToSerializedForm(e, t = {}, a = /* @__PURE__ */ new WeakSet()) {
  switch (Object.prototype.toString.call(e)) {
    case "[object Date]":
      return [PROP_TYPE.Date, e.toISOString()];
    case "[object RegExp]":
      return [PROP_TYPE.RegExp, e.source];
    case "[object Map]":
      return [PROP_TYPE.Map, JSON.stringify(serializeArray(Array.from(e), t, a))];
    case "[object Set]":
      return [PROP_TYPE.Set, JSON.stringify(serializeArray(Array.from(e), t, a))];
    case "[object BigInt]":
      return [PROP_TYPE.BigInt, e.toString()];
    case "[object URL]":
      return [PROP_TYPE.URL, e.toString()];
    case "[object Array]":
      return [PROP_TYPE.JSON, JSON.stringify(serializeArray(e, t, a))];
    case "[object Uint8Array]":
      return [PROP_TYPE.Uint8Array, JSON.stringify(Array.from(e))];
    case "[object Uint16Array]":
      return [PROP_TYPE.Uint16Array, JSON.stringify(Array.from(e))];
    case "[object Uint32Array]":
      return [PROP_TYPE.Uint32Array, JSON.stringify(Array.from(e))];
    default:
      return null !== e && "object" == typeof e ? [PROP_TYPE.Value, serializeObject(e, t, a)] : [PROP_TYPE.Value, e];
  }
}
function serializeProps(e, t) {
  return JSON.stringify(serializeObject(e, t));
}
var HydrationDirectivesRaw = ["load", "idle", "media", "visible", "only"];
var HydrationDirectives = new Set(HydrationDirectivesRaw);
var HydrationDirectiveProps = new Set(HydrationDirectivesRaw.map((e) => `client:${e}`));
function extractDirectives(e, t) {
  let a = { isPage: false, hydration: null, props: {} };
  for (const [e2, n] of Object.entries(t))
    if (e2.startsWith("server:") && "server:root" === e2 && (a.isPage = true), e2.startsWith("client:"))
      switch (a.hydration || (a.hydration = { directive: "", value: "", componentUrl: "", componentExport: { value: "" } }), e2) {
        case "client:component-path":
          a.hydration.componentUrl = n;
          break;
        case "client:component-export":
          a.hydration.componentExport.value = n;
          break;
        case "client:component-hydration":
        case "client:display-name":
          break;
        default:
          if (a.hydration.directive = e2.split(":")[1], a.hydration.value = n, !HydrationDirectives.has(a.hydration.directive))
            throw new Error(`Error: invalid hydration directive "${e2}". Supported hydration methods: ${Array.from(HydrationDirectiveProps).join(", ")}`);
          if ("media" === a.hydration.directive && "string" != typeof a.hydration.value)
            throw new AstroError(AstroErrorData.MissingMediaQueryDirective);
      }
    else
      "class:list" === e2 ? n && (a.props[e2.slice(0, -5)] = serializeListValue(n)) : a.props[e2] = n;
  for (const e2 of Object.getOwnPropertySymbols(t))
    a.props[e2] = t[e2];
  return a;
}
async function generateHydrateScript(e, t) {
  const { renderer: a, result: n, astroId: i, props: o, attrs: r } = e, { hydrate: s, componentUrl: p, componentExport: l } = t;
  if (!l.value)
    throw new Error(`Unable to resolve a valid export for "${t.displayName}"! Please open an issue at https://astro.build/issues!`);
  const c = { children: "", props: { uid: i } };
  if (r)
    for (const [e2, t2] of Object.entries(r))
      c.props[e2] = escapeHTML(t2);
  c.props["component-url"] = await n.resolve(decodeURI(p)), a.clientEntrypoint && (c.props["component-export"] = l.value, c.props["renderer-url"] = await n.resolve(decodeURI(a.clientEntrypoint)), c.props.props = escapeHTML(serializeProps(o, t))), c.props.ssr = "", c.props.client = s;
  let d = await n.resolve("astro:scripts/before-hydration.js");
  return d.length && (c.props["before-hydration-url"] = d), c.props.opts = escapeHTML(JSON.stringify({ name: t.displayName, value: t.hydrateArgs || "" })), c;
}
var _a;
var astroComponentInstanceSym = Symbol.for("astro.componentInstance");
var AstroComponentInstance = class {
  constructor(e, t, a, n) {
    this[_a] = true, this.result = e, this.props = t, this.factory = n, this.slotValues = {};
    for (const e2 in a)
      this.slotValues[e2] = a[e2]();
  }
  async init() {
    return this.returnValue = this.factory(this.result, this.props, this.slotValues), this.returnValue;
  }
  async *render() {
    void 0 === this.returnValue && await this.init();
    let e = this.returnValue;
    isPromise(e) && (e = await e), isHeadAndContent(e) ? yield* e.content : yield* renderChild(e);
  }
};
function validateComponentProps(e, t) {
  if (null != e)
    for (const a of Object.keys(e))
      HydrationDirectiveProps.has(a) && console.warn(`You are attempting to render <${t} ${a} />, but ${t} is an Astro component. Astro components do not render in the client and should not have a hydration directive. Please use a framework component for client rendering.`);
}
function createAstroComponentInstance(e, t, a, n, i = {}) {
  validateComponentProps(n, t);
  const o = new AstroComponentInstance(e, n, i, a);
  return isAPropagatingComponent(e, a) && !e.propagators.has(a) && e.propagators.set(a, o), o;
}
function isAstroComponentInstance(e) {
  return "object" == typeof e && !!e[astroComponentInstanceSym];
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
    "function" == typeof e ? yield* renderChild(e()) : "string" == typeof e ? yield markHTMLString(escapeHTML(e)) : (e || 0 === e) && (isRenderTemplateResult(e) ? yield* renderAstroTemplateResult(e) : isAstroComponentInstance(e) ? yield* e.render() : ArrayBuffer.isView(e) ? yield e : "object" == typeof e && (Symbol.asyncIterator in e || Symbol.iterator in e) ? yield* e : yield e);
}
_a = astroComponentInstanceSym;
var slotString = Symbol.for("astro:slot-string");
var SlotString = class extends HTMLString {
  constructor(e, t) {
    super(e), this.instructions = t, this[slotString] = true;
  }
};
function isSlotString(e) {
  return !!e[slotString];
}
async function renderSlot(e, t, a) {
  if (t) {
    e.scope |= ScopeFlags.Slot;
    let a2 = renderChild(t), n = "", i = null;
    for await (const e2 of a2)
      "string" == typeof e2.type ? (null === i && (i = []), i.push(e2)) : n += e2;
    return e.scope &= ~ScopeFlags.Slot, markHTMLString(new SlotString(n, i));
  }
  return a;
}
async function renderSlots(e, t = {}) {
  let a = null, n = {};
  return t && await Promise.all(Object.entries(t).map(([t2, i]) => renderSlot(e, i).then((e2) => {
    e2.instructions && (null === a && (a = []), a.push(...e2.instructions)), n[t2] = e2;
  }))), { slotInstructions: a, children: n };
}
var Fragment = Symbol.for("astro:fragment");
var Renderer = Symbol.for("astro:renderer");
var encoder = new TextEncoder();
var decoder = new TextDecoder();
function stringifyChunk(e, t) {
  if ("string" != typeof t.type) {
    if (isSlotString(t)) {
      let a = "";
      const n = t;
      if (n.instructions)
        for (const t2 of n.instructions)
          a += stringifyChunk(e, t2);
      return a += t.toString(), a;
    }
    return t.toString();
  }
  {
    const a = t;
    switch (a.type) {
      case "directive": {
        const { hydration: t2 } = a;
        let n = t2 && determineIfNeedsHydrationScript(e), i = t2 && determinesIfNeedsDirectiveScript(e, t2.directive), o = n ? "both" : i ? "directive" : null;
        if (o) {
          let e2 = getPrescripts(o, t2.directive);
          return markHTMLString(e2);
        }
        return "";
      }
      case "head":
        return e._metadata.hasRenderedHead ? "" : renderAllHeadContent(e);
    }
  }
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
function chunkToByteArray(e, t) {
  if (t instanceof Uint8Array)
    return t;
  let a = stringifyChunk(e, t);
  return encoder.encode(a.toString());
}
var ClientOnlyPlaceholder = "astro-client-only";
var Skip = class {
  constructor(e) {
    this.vnode = e, this.count = 0;
  }
  increment() {
    this.count++;
  }
  haveNoTried() {
    return 0 === this.count;
  }
  isCompleted() {
    return this.count > 2;
  }
};
var originalConsoleError;
Skip.symbol = Symbol("astro:jsx:skip");
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
  let a;
  return a = t.props && t.props[Skip.symbol] ? t.props[Skip.symbol] : new Skip(t), renderJSXVNode(e, t, a);
}
async function renderJSXVNode(e, t, a) {
  if (isVNode(t)) {
    switch (true) {
      case !t.type:
        throw new Error(`Unable to render ${e._metadata.pathname} because it contains an undefined Component!
Did you forget to import the component or is it possible there is a typo?`);
      case t.type === Symbol.for("astro:fragment"):
        return renderJSX(e, t.props.children);
      case t.type.isAstroComponentFactory: {
        let a2 = {}, n = {};
        for (const [i, o] of Object.entries(t.props ?? {}))
          "children" === i || o && "object" == typeof o && o.$$slot ? n["children" === i ? "default" : i] = () => renderJSX(e, o) : a2[i] = o;
        return e.scope |= ScopeFlags.JSX, markHTMLString(await renderToString(e, t.type, a2, n));
      }
      case (!t.type && 0 !== t.type):
        return "";
      case ("string" == typeof t.type && t.type !== ClientOnlyPlaceholder):
        return markHTMLString(await renderElement(e, t.type, t.props ?? {}));
    }
    if (t.type) {
      let n = function(e2) {
        return Array.isArray(e2) ? e2.map((e3) => n(e3)) : isVNode(e2) && "slot" in e2.props ? (r[e2.props.slot] = [...r[e2.props.slot] ?? [], e2], void delete e2.props.slot) : void r.default.push(e2);
      };
      if ("function" == typeof t.type && t.type["astro:renderer"] && a.increment(), "function" == typeof t.type && t.props["server:root"]) {
        const a2 = await t.type(t.props ?? {});
        return await renderJSX(e, a2);
      }
      if ("function" == typeof t.type)
        if (a.haveNoTried() || a.isCompleted()) {
          useConsoleFilter();
          try {
            const n2 = await t.type(t.props ?? {});
            let i2;
            if (n2 && n2[AstroJSX])
              return i2 = await renderJSXVNode(e, n2, a), i2;
            if (!n2)
              return i2 = await renderJSXVNode(e, n2, a), i2;
          } catch (e2) {
            if (a.isCompleted())
              throw e2;
            a.increment();
          } finally {
            finishUsingConsoleFilter();
          }
        } else
          a.increment();
      const { children: i = null, ...o } = t.props ?? {}, r = { default: [] };
      n(i);
      for (const [e2, t2] of Object.entries(o))
        t2.$$slot && (r[e2] = t2, delete o[e2]);
      const s = [], p = {};
      for (const [t2, a2] of Object.entries(r))
        s.push(renderJSX(e, a2).then((e2) => {
          0 !== e2.toString().trim().length && (p[t2] = () => e2);
        }));
      let l;
      if (await Promise.all(s), o[Skip.symbol] = a, l = t.type === ClientOnlyPlaceholder && t.props["client:only"] ? await renderComponentToIterable(e, t.props["client:display-name"] ?? "", null, o, p) : await renderComponentToIterable(e, "function" == typeof t.type ? t.type.name : t.type, t.type, o, p), "string" != typeof l && Symbol.asyncIterator in l) {
        let t2 = new HTMLParts();
        for await (const a2 of l)
          t2.append(a2, e);
        return markHTMLString(t2.toString());
      }
      return markHTMLString(l);
    }
  }
  return markHTMLString(`${t}`);
}
async function renderElement(e, t, { children: a, ...n }) {
  return markHTMLString(`<${t}${spreadAttributes(n)}${markHTMLString(null != a && "" != a || !voidElementNames.test(t) ? `>${null == a ? "" : await renderJSX(e, a)}</${t}>` : "/>")}`);
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
var dictionary = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY";
var binary = dictionary.length;
function bitwise(e) {
  let t = 0;
  if (0 === e.length)
    return t;
  for (let a = 0; a < e.length; a++) {
    t = (t << 5) - t + e.charCodeAt(a), t &= t;
  }
  return t;
}
function shorthash(e) {
  let t, a = "", n = bitwise(e);
  const i = n < 0 ? "Z" : "";
  for (n = Math.abs(n); n >= binary; )
    t = n % binary, n = Math.floor(n / binary), a = dictionary[t] + a;
  return n > 0 && (a = dictionary[n] + a), i + a;
}
function componentIsHTMLElement(e) {
  return "undefined" != typeof HTMLElement && HTMLElement.isPrototypeOf(e);
}
async function renderHTMLElement(e, t, a, n) {
  const i = getHTMLElementName(t);
  let o = "";
  for (const e2 in a)
    o += ` ${e2}="${toAttributeString(await a[e2])}"`;
  return markHTMLString(`<${i}${o}>${await renderSlot(e, null == n ? void 0 : n.default)}</${i}>`);
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
      return ["@astrojs/react", "@astrojs/preact", "@astrojs/solid-js", "@astrojs/vue (jsx)"];
    default:
      return ["@astrojs/react", "@astrojs/preact", "@astrojs/solid-js", "@astrojs/vue", "@astrojs/svelte"];
  }
}
function isFragmentComponent(e) {
  return e === Fragment;
}
function isHTMLComponent(e) {
  return e && "object" == typeof e && e["astro:html"];
}
async function renderFrameworkComponent(e, t, a, n, i = {}) {
  var o, r;
  if (!a && !n["client:only"])
    throw new Error(`Unable to render ${t} because it is ${a}!
Did you forget to import the component or is it possible there is a typo?`);
  const { renderers: s } = e._metadata, p = { displayName: t }, { hydration: l, isPage: c, props: d } = extractDirectives(t, n);
  let m, u = "";
  l && (p.hydrate = l.directive, p.hydrateArgs = l.value, p.componentExport = l.componentExport, p.componentUrl = l.componentUrl);
  const f = guessRenderers(p.componentUrl), v = s.filter((e2) => "astro:jsx" !== e2.name), { children: g, slotInstructions: h } = await renderSlots(e, i);
  let x;
  if ("only" !== p.hydrate) {
    let t2 = false;
    try {
      t2 = a && a[Renderer];
    } catch {
    }
    if (t2) {
      const e2 = a[Renderer];
      x = s.find(({ name: t3 }) => t3 === e2);
    }
    if (!x) {
      let t3;
      for (const n2 of s)
        try {
          if (await n2.ssr.check.call({ result: e }, a, d, g)) {
            x = n2;
            break;
          }
        } catch (e2) {
          t3 ?? (t3 = e2);
        }
      if (!x && t3)
        throw t3;
    }
    if (!x && "function" == typeof HTMLElement && componentIsHTMLElement(a)) {
      return renderHTMLElement(e, a, n, i);
    }
  } else {
    if (p.hydrateArgs) {
      const e2 = p.hydrateArgs, t2 = rendererAliases.has(e2) ? rendererAliases.get(e2) : e2;
      x = s.find(({ name: e3 }) => e3 === `@astrojs/${t2}` || e3 === t2);
    }
    if (x || 1 !== v.length || (x = v[0]), !x) {
      const e2 = null == (o = p.componentUrl) ? void 0 : o.split(".").pop();
      x = s.filter(({ name: t2 }) => t2 === `@astrojs/${e2}` || t2 === e2)[0];
    }
  }
  if (x)
    "only" === p.hydrate ? u = await renderSlot(e, null == i ? void 0 : i.fallback) : { html: u, attrs: m } = await x.ssr.renderToStaticMarkup.call({ result: e }, a, d, g, p);
  else {
    if ("only" === p.hydrate)
      throw new AstroError({ ...AstroErrorData.NoClientOnlyHint, message: AstroErrorData.NoClientOnlyHint.message(p.displayName), hint: AstroErrorData.NoClientOnlyHint.hint(f.map((e2) => e2.replace("@astrojs/", "")).join("|")) });
    if ("string" != typeof a) {
      const t2 = v.filter((e2) => f.includes(e2.name)), n2 = v.length > 1;
      if (0 === t2.length)
        throw new AstroError({ ...AstroErrorData.NoMatchingRenderer, message: AstroErrorData.NoMatchingRenderer.message(p.displayName, null == (r = null == p ? void 0 : p.componentUrl) ? void 0 : r.split(".").pop(), n2, v.length), hint: AstroErrorData.NoMatchingRenderer.hint(formatList(f.map((e2) => "`" + e2 + "`"))) });
      if (1 !== t2.length)
        throw new Error(`Unable to render ${p.displayName}!

This component likely uses ${formatList(f)},
but Astro encountered an error during server-side rendering.

Please ensure that ${p.displayName}:
1. Does not unconditionally access browser-specific globals like \`window\` or \`document\`.
   If this is unavoidable, use the \`client:only\` hydration directive.
2. Does not conditionally return \`null\` or \`undefined\` when rendered on the server.

If you're still stuck, please open an issue on GitHub or join us at https://astro.build/chat.`);
      x = t2[0], { html: u, attrs: m } = await x.ssr.renderToStaticMarkup.call({ result: e }, a, d, g, p);
    }
  }
  if (x && !x.clientEntrypoint && "@astrojs/lit" !== x.name && p.hydrate)
    throw new AstroError({ ...AstroErrorData.NoClientEntrypoint, message: AstroErrorData.NoClientEntrypoint.message(t, p.hydrate, x.name) });
  if (!u && "string" == typeof a) {
    const e2 = sanitizeElementName(a), t2 = Object.values(g).join(""), n2 = renderAstroTemplateResult(await renderTemplate`<${e2}${internalSpreadAttributes(d)}${markHTMLString("" === t2 && voidElementNames.test(e2) ? "/>" : `>${t2}</${e2}>`)}`);
    u = "";
    for await (const e3 of n2)
      u += e3;
  }
  if (!l)
    return async function* () {
      h && (yield* h), c || "astro:jsx" === (null == x ? void 0 : x.name) ? yield u : u && u.length > 0 ? yield markHTMLString(u.replace(/\<\/?astro-slot\>/g, "")) : yield "";
    }();
  const y = shorthash(`<!--${p.componentExport.value}:${p.componentUrl}-->
${u}
${serializeProps(d, p)}`), b = await generateHydrateScript({ renderer: x, result: e, astroId: y, props: d, attrs: m }, p);
  let w = [];
  if (u) {
    if (Object.keys(g).length > 0)
      for (const e2 of Object.keys(g))
        u.includes("default" === e2 ? "<astro-slot>" : `<astro-slot name="${e2}">`) || w.push(e2);
  } else
    w = Object.keys(g);
  const S = w.length > 0 ? w.map((e2) => `<template data-astro-template${"default" !== e2 ? `="${e2}"` : ""}>${g[e2]}</template>`).join("") : "";
  return b.children = `${u ?? ""}${S}`, b.children && (b.props["await-children"] = ""), async function* () {
    h && (yield* h), yield { type: "directive", hydration: l, result: e }, yield markHTMLString(renderElement$1("astro-island", b, false));
  }();
}
function sanitizeElementName(e) {
  const t = /[&<>'"\s]+/g;
  return t.test(e) ? e.trim().split(t)[0].trim() : e;
}
async function renderFragmentComponent(e, t = {}) {
  const a = await renderSlot(e, null == t ? void 0 : t.default);
  return null == a ? a : markHTMLString(a);
}
async function renderHTMLComponent(e, t, a, n = {}) {
  const { slotInstructions: i, children: o } = await renderSlots(e, n), r = t.render({ slots: o }), s = i ? i.map((t2) => stringifyChunk(e, t2)).join("") : "";
  return markHTMLString(s + r);
}
function renderComponent(e, t, a, n, i = {}) {
  return isPromise(a) ? Promise.resolve(a).then((a2) => renderComponent(e, t, a2, n, i)) : isFragmentComponent(a) ? renderFragmentComponent(e, i) : isHTMLComponent(a) ? renderHTMLComponent(e, a, n, i) : isAstroComponentFactory(a) ? createAstroComponentInstance(e, t, a, n, i) : renderFrameworkComponent(e, t, a, n, i);
}
function renderComponentToIterable(e, t, a, n, i = {}) {
  const o = renderComponent(e, t, a, n, i);
  return isAstroComponentInstance(o) ? o.render() : o;
}
var __accessCheck$2 = (e, t, a) => {
  if (!t.has(e))
    throw TypeError("Cannot " + a);
};
var __privateGet$2 = (e, t, a) => (__accessCheck$2(e, t, "read from private field"), a ? a.call(e) : t.get(e));
var __privateAdd$2 = (e, t, a) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, a);
};
var __privateSet$2 = (e, t, a, n) => (__accessCheck$2(e, t, "write to private field"), n ? n.call(e, a) : t.set(e, a), a);
var isNodeJS = "object" == typeof process && "[object process]" === Object.prototype.toString.call(process);
var StreamingCompatibleResponse;
function createResponseClass() {
  var e, t, a;
  return a = class extends Response {
    constructor(a2, n) {
      let i = a2 instanceof ReadableStream;
      super(i ? null : a2, n), __privateAdd$2(this, e, void 0), __privateAdd$2(this, t, void 0), __privateSet$2(this, e, i), __privateSet$2(this, t, a2);
    }
    get body() {
      return __privateGet$2(this, t);
    }
    async text() {
      if (__privateGet$2(this, e) && isNodeJS) {
        let e2 = new TextDecoder(), a2 = __privateGet$2(this, t), n = "";
        for await (let t2 of streamAsyncIterator(a2))
          n += e2.decode(t2);
        return n;
      }
      return super.text();
    }
    async arrayBuffer() {
      if (__privateGet$2(this, e) && isNodeJS) {
        let e2 = __privateGet$2(this, t), a2 = [], n = 0;
        for await (let t2 of streamAsyncIterator(e2))
          a2.push(t2), n += t2.length;
        let i = new Uint8Array(n), o = 0;
        for (const e3 of a2)
          i.set(e3, o), o += e3.length;
        return i;
      }
      return super.arrayBuffer();
    }
  }, e = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap(), StreamingCompatibleResponse = a, StreamingCompatibleResponse;
}
var createResponse = isNodeJS ? (e, t) => "string" == typeof e || ArrayBuffer.isView(e) ? new Response(e, t) : void 0 === StreamingCompatibleResponse ? new (createResponseClass())(e, t) : new StreamingCompatibleResponse(e, t) : (e, t) => new Response(e, t);
var needsHeadRenderingSymbol = Symbol.for("astro.needsHeadRendering");
function nonAstroPageNeedsHeadInjection(e) {
  return needsHeadRenderingSymbol in e && !!e[needsHeadRenderingSymbol];
}
async function iterableToHTMLBytes(e, t, a) {
  const n = new HTMLParts();
  let i = 0;
  for await (const o of t)
    isHTMLString(o) && 0 === i && (i++, /<!doctype html/i.test(String(o)) || (n.append("<!DOCTYPE html>\n", e), a && await a(n))), n.append(o, e);
  return n.toArrayBuffer();
}
async function bufferHeadContent(e) {
  const t = e.propagators.values();
  for (; ; ) {
    const { value: a, done: n } = t.next();
    if (n)
      break;
    const i = await a.init();
    isHeadAndContent(i) && e.extraHead.push(i.head);
  }
}
async function renderPage$1(e, t, a, n, i, o) {
  if (!isAstroComponentFactory(t)) {
    const n2 = { ...a ?? {}, "server:root": true };
    let i2;
    try {
      const a2 = await renderComponent(e, t.name, t, n2, null);
      i2 = isAstroComponentInstance(a2) ? a2.render() : a2;
    } catch (e2) {
      throw AstroError.is(e2) && !e2.loc && e2.setLocation({ file: null == o ? void 0 : o.component }), e2;
    }
    const r2 = await iterableToHTMLBytes(e, i2, async (a2) => {
      if (nonAstroPageNeedsHeadInjection(t))
        for await (let t2 of maybeRenderHead(e))
          a2.append(t2, e);
    });
    return new Response(r2, { headers: new Headers([["Content-Type", "text/html; charset=utf-8"], ["Content-Length", r2.byteLength.toString()]]) });
  }
  const r = await t(e, a, n), s = isHeadAndContent(r);
  if (isRenderTemplateResult(r) || s) {
    await bufferHeadContent(e);
    let t2, a2 = renderAstroTemplateResult(s ? r.content : r), n2 = e.response, p = new Headers(n2.headers);
    return i ? t2 = new ReadableStream({ start(t3) {
      !async function() {
        let n3 = 0;
        try {
          for await (const i2 of a2) {
            isHTMLString(i2) && 0 === n3 && (/<!doctype html/i.test(String(i2)) || t3.enqueue(encoder.encode("<!DOCTYPE html>\n")));
            const a3 = chunkToByteArray(e, i2);
            t3.enqueue(a3), n3++;
          }
          t3.close();
        } catch (e2) {
          AstroError.is(e2) && !e2.loc && e2.setLocation({ file: null == o ? void 0 : o.component }), t3.error(e2);
        }
      }();
    } }) : (t2 = await iterableToHTMLBytes(e, a2), p.set("Content-Length", t2.byteLength.toString())), createResponse(t2, { ...n2, headers: p });
  }
  if (!(r instanceof Response))
    throw new AstroError({ ...AstroErrorData.OnlyResponseCanBeReturned, message: AstroErrorData.OnlyResponseCanBeReturned.message(null == o ? void 0 : o.route, typeof r), location: { file: null == o ? void 0 : o.component } });
  return r;
}
function spreadAttributes(e, t, { class: a } = {}) {
  let n = "";
  a && (void 0 !== e.class ? e.class += ` ${a}` : void 0 !== e["class:list"] ? e["class:list"] = [e["class:list"], a] : e.class = a);
  for (const [t2, a2] of Object.entries(e))
    n += addAttribute(a2, t2, true);
  return markHTMLString(n);
}
var FORCE_COLOR;
var NODE_DISABLE_COLORS;
var NO_COLOR;
var TERM;
var isTTY = true;
"undefined" != typeof process && ({ FORCE_COLOR, NODE_DISABLE_COLORS, NO_COLOR, TERM } = process.env || {}, isTTY = process.stdout && process.stdout.isTTY);
var $ = { enabled: !NODE_DISABLE_COLORS && null == NO_COLOR && "dumb" !== TERM && (null != FORCE_COLOR && "0" !== FORCE_COLOR || isTTY) };
function init(e, t) {
  let a = new RegExp(`\\x1b\\[${t}m`, "g"), n = `\x1B[${e}m`, i = `\x1B[${t}m`;
  return function(e2) {
    return $.enabled && null != e2 ? n + (~("" + e2).indexOf(i) ? e2.replace(a, i + n) : e2) + i : e2;
  };
}
var reset = init(0, 0);
var bold = init(1, 22);
var dim = init(2, 22);
var red = init(31, 39);
var yellow = init(33, 39);
var cyan = init(36, 39);
var eastasianwidthExports = {};
var eastasianwidth = { get exports() {
  return eastasianwidthExports;
}, set exports(e) {
  eastasianwidthExports = e;
} };
!function(e) {
  var t = {};
  function a(e2) {
    return e2.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[^\uD800-\uDFFF]/g) || [];
  }
  eastasianwidth.exports = t, t.eastAsianWidth = function(e2) {
    var t2 = e2.charCodeAt(0), a2 = 2 == e2.length ? e2.charCodeAt(1) : 0, n = t2;
    return 55296 <= t2 && t2 <= 56319 && 56320 <= a2 && a2 <= 57343 && (n = (t2 &= 1023) << 10 | (a2 &= 1023), n += 65536), 12288 == n || 65281 <= n && n <= 65376 || 65504 <= n && n <= 65510 ? "F" : 8361 == n || 65377 <= n && n <= 65470 || 65474 <= n && n <= 65479 || 65482 <= n && n <= 65487 || 65490 <= n && n <= 65495 || 65498 <= n && n <= 65500 || 65512 <= n && n <= 65518 ? "H" : 4352 <= n && n <= 4447 || 4515 <= n && n <= 4519 || 4602 <= n && n <= 4607 || 9001 <= n && n <= 9002 || 11904 <= n && n <= 11929 || 11931 <= n && n <= 12019 || 12032 <= n && n <= 12245 || 12272 <= n && n <= 12283 || 12289 <= n && n <= 12350 || 12353 <= n && n <= 12438 || 12441 <= n && n <= 12543 || 12549 <= n && n <= 12589 || 12593 <= n && n <= 12686 || 12688 <= n && n <= 12730 || 12736 <= n && n <= 12771 || 12784 <= n && n <= 12830 || 12832 <= n && n <= 12871 || 12880 <= n && n <= 13054 || 13056 <= n && n <= 19903 || 19968 <= n && n <= 42124 || 42128 <= n && n <= 42182 || 43360 <= n && n <= 43388 || 44032 <= n && n <= 55203 || 55216 <= n && n <= 55238 || 55243 <= n && n <= 55291 || 63744 <= n && n <= 64255 || 65040 <= n && n <= 65049 || 65072 <= n && n <= 65106 || 65108 <= n && n <= 65126 || 65128 <= n && n <= 65131 || 110592 <= n && n <= 110593 || 127488 <= n && n <= 127490 || 127504 <= n && n <= 127546 || 127552 <= n && n <= 127560 || 127568 <= n && n <= 127569 || 131072 <= n && n <= 194367 || 177984 <= n && n <= 196605 || 196608 <= n && n <= 262141 ? "W" : 32 <= n && n <= 126 || 162 <= n && n <= 163 || 165 <= n && n <= 166 || 172 == n || 175 == n || 10214 <= n && n <= 10221 || 10629 <= n && n <= 10630 ? "Na" : 161 == n || 164 == n || 167 <= n && n <= 168 || 170 == n || 173 <= n && n <= 174 || 176 <= n && n <= 180 || 182 <= n && n <= 186 || 188 <= n && n <= 191 || 198 == n || 208 == n || 215 <= n && n <= 216 || 222 <= n && n <= 225 || 230 == n || 232 <= n && n <= 234 || 236 <= n && n <= 237 || 240 == n || 242 <= n && n <= 243 || 247 <= n && n <= 250 || 252 == n || 254 == n || 257 == n || 273 == n || 275 == n || 283 == n || 294 <= n && n <= 295 || 299 == n || 305 <= n && n <= 307 || 312 == n || 319 <= n && n <= 322 || 324 == n || 328 <= n && n <= 331 || 333 == n || 338 <= n && n <= 339 || 358 <= n && n <= 359 || 363 == n || 462 == n || 464 == n || 466 == n || 468 == n || 470 == n || 472 == n || 474 == n || 476 == n || 593 == n || 609 == n || 708 == n || 711 == n || 713 <= n && n <= 715 || 717 == n || 720 == n || 728 <= n && n <= 731 || 733 == n || 735 == n || 768 <= n && n <= 879 || 913 <= n && n <= 929 || 931 <= n && n <= 937 || 945 <= n && n <= 961 || 963 <= n && n <= 969 || 1025 == n || 1040 <= n && n <= 1103 || 1105 == n || 8208 == n || 8211 <= n && n <= 8214 || 8216 <= n && n <= 8217 || 8220 <= n && n <= 8221 || 8224 <= n && n <= 8226 || 8228 <= n && n <= 8231 || 8240 == n || 8242 <= n && n <= 8243 || 8245 == n || 8251 == n || 8254 == n || 8308 == n || 8319 == n || 8321 <= n && n <= 8324 || 8364 == n || 8451 == n || 8453 == n || 8457 == n || 8467 == n || 8470 == n || 8481 <= n && n <= 8482 || 8486 == n || 8491 == n || 8531 <= n && n <= 8532 || 8539 <= n && n <= 8542 || 8544 <= n && n <= 8555 || 8560 <= n && n <= 8569 || 8585 == n || 8592 <= n && n <= 8601 || 8632 <= n && n <= 8633 || 8658 == n || 8660 == n || 8679 == n || 8704 == n || 8706 <= n && n <= 8707 || 8711 <= n && n <= 8712 || 8715 == n || 8719 == n || 8721 == n || 8725 == n || 8730 == n || 8733 <= n && n <= 8736 || 8739 == n || 8741 == n || 8743 <= n && n <= 8748 || 8750 == n || 8756 <= n && n <= 8759 || 8764 <= n && n <= 8765 || 8776 == n || 8780 == n || 8786 == n || 8800 <= n && n <= 8801 || 8804 <= n && n <= 8807 || 8810 <= n && n <= 8811 || 8814 <= n && n <= 8815 || 8834 <= n && n <= 8835 || 8838 <= n && n <= 8839 || 8853 == n || 8857 == n || 8869 == n || 8895 == n || 8978 == n || 9312 <= n && n <= 9449 || 9451 <= n && n <= 9547 || 9552 <= n && n <= 9587 || 9600 <= n && n <= 9615 || 9618 <= n && n <= 9621 || 9632 <= n && n <= 9633 || 9635 <= n && n <= 9641 || 9650 <= n && n <= 9651 || 9654 <= n && n <= 9655 || 9660 <= n && n <= 9661 || 9664 <= n && n <= 9665 || 9670 <= n && n <= 9672 || 9675 == n || 9678 <= n && n <= 9681 || 9698 <= n && n <= 9701 || 9711 == n || 9733 <= n && n <= 9734 || 9737 == n || 9742 <= n && n <= 9743 || 9748 <= n && n <= 9749 || 9756 == n || 9758 == n || 9792 == n || 9794 == n || 9824 <= n && n <= 9825 || 9827 <= n && n <= 9829 || 9831 <= n && n <= 9834 || 9836 <= n && n <= 9837 || 9839 == n || 9886 <= n && n <= 9887 || 9918 <= n && n <= 9919 || 9924 <= n && n <= 9933 || 9935 <= n && n <= 9953 || 9955 == n || 9960 <= n && n <= 9983 || 10045 == n || 10071 == n || 10102 <= n && n <= 10111 || 11093 <= n && n <= 11097 || 12872 <= n && n <= 12879 || 57344 <= n && n <= 63743 || 65024 <= n && n <= 65039 || 65533 == n || 127232 <= n && n <= 127242 || 127248 <= n && n <= 127277 || 127280 <= n && n <= 127337 || 127344 <= n && n <= 127386 || 917760 <= n && n <= 917999 || 983040 <= n && n <= 1048573 || 1048576 <= n && n <= 1114109 ? "A" : "N";
  }, t.characterLength = function(e2) {
    var t2 = this.eastAsianWidth(e2);
    return "F" == t2 || "W" == t2 || "A" == t2 ? 2 : 1;
  }, t.length = function(e2) {
    for (var t2 = a(e2), n = 0, i = 0; i < t2.length; i++)
      n += this.characterLength(t2[i]);
    return n;
  }, t.slice = function(e2, n, i) {
    textLen = t.length(e2), i = i || 1, (n = n || 0) < 0 && (n = textLen + n), i < 0 && (i = textLen + i);
    for (var o = "", r = 0, s = a(e2), p = 0; p < s.length; p++) {
      var l = s[p], c = t.length(l);
      if (r >= n - (2 == c ? 1 : 0)) {
        if (!(r + c <= i))
          break;
        o += l;
      }
      r += c;
    }
    return o;
  };
}();
var dateTimeFormat = new Intl.DateTimeFormat([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
var levels = { debug: 20, info: 30, warn: 40, error: 50, silent: 90 };
function log(e, t, a, n) {
  const i = e.level, o = e.dest, r = { type: a, level: t, message: n };
  levels[i] > levels[t] || o.write(r);
}
function warn(e, t, a) {
  return log(e, "warn", t, a);
}
function error(e, t, a) {
  return log(e, "error", t, a);
}
function debug(...e) {
  "_astroGlobalDebug" in globalThis && globalThis._astroGlobalDebug(...e);
}
if ("undefined" != typeof process) {
  let e = process;
  "argv" in e && Array.isArray(e.argv) && (e.argv.includes("--verbose") || e.argv.includes("--silent"));
}
var VALID_PARAM_TYPES = ["string", "number", "undefined"];
function validateGetStaticPathsParameter([e, t], a) {
  if (!VALID_PARAM_TYPES.includes(typeof t))
    throw new AstroError({ ...AstroErrorData.GetStaticPathsInvalidRouteParam, message: AstroErrorData.GetStaticPathsInvalidRouteParam.message(e, t, typeof t), location: { file: a } });
}
function validateDynamicRouteModule(e, { ssr: t, logging: a, route: n }) {
  if (t && e.getStaticPaths && !e.prerender && warn(a, "getStaticPaths", 'getStaticPaths() is ignored when "output: server" is set.'), (!t || e.prerender) && !e.getStaticPaths)
    throw new AstroError({ ...AstroErrorData.GetStaticPathsRequired, location: { file: n.component } });
}
function validateGetStaticPathsResult(e, t, a) {
  if (!Array.isArray(e))
    throw new AstroError({ ...AstroErrorData.InvalidGetStaticPathsReturn, message: AstroErrorData.InvalidGetStaticPathsReturn.message(typeof e), location: { file: a.component } });
  e.forEach((e2) => {
    if (void 0 === e2.params || null === e2.params || e2.params && 0 === Object.keys(e2.params).length)
      throw new AstroError({ ...AstroErrorData.GetStaticPathsExpectedParams, location: { file: a.component } });
    if ("object" != typeof e2.params)
      throw new AstroError({ ...AstroErrorData.InvalidGetStaticPathParam, message: AstroErrorData.InvalidGetStaticPathParam.message(typeof e2.params), location: { file: a.component } });
    for (const [a2, n] of Object.entries(e2.params))
      void 0 !== n && "string" != typeof n && "number" != typeof n && warn(t, "getStaticPaths", `invalid path param: ${a2}. A string, number or undefined value was expected, but got \`${JSON.stringify(n)}\`.`), "string" == typeof n && "" === n && warn(t, "getStaticPaths", `invalid path param: ${a2}. \`undefined\` expected for an optional param, but got empty string.`);
  });
}
function getParams(e) {
  return (t) => {
    const a = {};
    return e.forEach((e2, n) => {
      e2.startsWith("...") ? a[e2.slice(3)] = t[n + 1] ? decodeURIComponent(t[n + 1]) : void 0 : a[e2] = decodeURIComponent(t[n + 1]);
    }), a;
  };
}
function stringifyParams(e, t) {
  const a = Object.entries(e).reduce((e2, a2) => {
    validateGetStaticPathsParameter(a2, t);
    const [n, i] = a2;
    return e2[n] = null == i ? void 0 : i.toString(), e2;
  }, {});
  return JSON.stringify(a, Object.keys(e).sort());
}
var _result;
var _slots;
var _loggingOpts;
var __accessCheck$1 = (e, t, a) => {
  if (!t.has(e))
    throw TypeError("Cannot " + a);
};
var __privateGet$1 = (e, t, a) => (__accessCheck$1(e, t, "read from private field"), a ? a.call(e) : t.get(e));
var __privateAdd$1 = (e, t, a) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, a);
};
var __privateSet$1 = (e, t, a, n) => (__accessCheck$1(e, t, "write to private field"), n ? n.call(e, a) : t.set(e, a), a);
var clientAddressSymbol$1 = Symbol.for("astro.clientAddress");
function onlyAvailableInSSR(e) {
  return function() {
    if ("Astro.redirect" === e)
      throw new AstroError(AstroErrorData.StaticRedirectNotAvailable);
  };
}
function getFunctionExpression(e) {
  var t;
  if (e && 1 === (null == (t = e.expressions) ? void 0 : t.length))
    return e.expressions[0];
}
var Slots = class {
  constructor(e, t, a) {
    if (__privateAdd$1(this, _result, void 0), __privateAdd$1(this, _slots, void 0), __privateAdd$1(this, _loggingOpts, void 0), __privateSet$1(this, _result, e), __privateSet$1(this, _slots, t), __privateSet$1(this, _loggingOpts, a), t)
      for (const e2 of Object.keys(t)) {
        if (void 0 !== this[e2])
          throw new AstroError({ ...AstroErrorData.ReservedSlotName, message: AstroErrorData.ReservedSlotName.message(e2) });
        Object.defineProperty(this, e2, { get: () => true, enumerable: true });
      }
  }
  has(e) {
    return !!__privateGet$1(this, _slots) && Boolean(__privateGet$1(this, _slots)[e]);
  }
  async render(e, t = []) {
    if (!__privateGet$1(this, _slots) || !this.has(e))
      return;
    if (Array.isArray(t)) {
      if (t.length > 0) {
        const a2 = __privateGet$1(this, _slots)[e], n = "function" == typeof a2 ? await a2() : await a2, i = getFunctionExpression(n);
        if (i) {
          const e2 = i(...t);
          return await renderSlot(__privateGet$1(this, _result), e2).then((e3) => null != e3 ? String(e3) : e3);
        }
        if ("function" == typeof n)
          return await renderJSX(__privateGet$1(this, _result), n(...t)).then((e2) => null != e2 ? String(e2) : e2);
      }
    } else
      warn(__privateGet$1(this, _loggingOpts), "Astro.slots.render", `Expected second parameter to be an array, received a ${typeof t}. If you're trying to pass an array as a single argument and getting unexpected results, make sure you're passing your array as a item of an array. Ex: Astro.slots.render('default', [["Hello", "World"]])`);
    const a = await renderSlot(__privateGet$1(this, _result), __privateGet$1(this, _slots)[e]);
    return stringifyChunk(__privateGet$1(this, _result), a);
  }
};
_result = /* @__PURE__ */ new WeakMap(), _slots = /* @__PURE__ */ new WeakMap(), _loggingOpts = /* @__PURE__ */ new WeakMap();
var renderMarkdown = null;
function createResult(e) {
  const { markdown: t, params: a, pathname: n, renderers: i, request: o, resolve: r } = e, s = new URL(o.url), p = new Headers();
  p.set("Content-Type", "text/html");
  const l = { status: e.status, statusText: "OK", headers: p };
  let c;
  Object.defineProperty(l, "headers", { value: l.headers, enumerable: true, writable: false });
  const d = { styles: e.styles ?? /* @__PURE__ */ new Set(), scripts: e.scripts ?? /* @__PURE__ */ new Set(), links: e.links ?? /* @__PURE__ */ new Set(), propagation: e.propagation ?? /* @__PURE__ */ new Map(), propagators: /* @__PURE__ */ new Map(), extraHead: [], scope: 0, cookies: c, createAstro(n2, i2, r2) {
    const p2 = new Slots(d, r2, e.logging), m = { __proto__: n2, get clientAddress() {
      if (!(clientAddressSymbol$1 in o))
        throw e.adapterName ? new AstroError({ ...AstroErrorData.ClientAddressNotAvailable, message: AstroErrorData.ClientAddressNotAvailable.message(e.adapterName) }) : new AstroError(AstroErrorData.StaticClientAddressNotAvailable);
      return Reflect.get(o, clientAddressSymbol$1);
    }, get cookies() {
      return c || (c = new AstroCookies(o), d.cookies = c, c);
    }, params: a, props: i2, request: o, url: s, redirect: e.ssr ? (e2, t2) => new Response(null, { status: t2 || 302, headers: { Location: e2 } }) : onlyAvailableInSSR("Astro.redirect"), response: l, slots: p2 };
    return Object.defineProperty(m, "__renderMarkdown", { enumerable: false, writable: false, value: async function(e2, a2) {
      if ("undefined" != typeof Deno)
        throw new Error("Markdown is not supported in Deno SSR");
      if (!renderMarkdown) {
        let e3 = "@astrojs/";
        e3 += "markdown-remark", renderMarkdown = (await import(e3)).renderMarkdown;
      }
      const { code: n3 } = await renderMarkdown(e2, { ...t, ...a2 ?? {} });
      return n3;
    } }), m;
  }, resolve: r, _metadata: { renderers: i, pathname: n, hasHydrationScript: false, hasRenderedHead: false, hasDirectives: /* @__PURE__ */ new Set() }, response: l };
  return d;
}
function generatePaginateFunction(e) {
  return function(t, a = {}) {
    let { pageSize: n, params: i, props: o } = a;
    const r = n || 10, s = "page", p = i || {}, l = o || {};
    let c;
    if (e.params.includes(`...${s}`))
      c = false;
    else {
      if (!e.params.includes(`${s}`))
        throw new Error(`[paginate()] page number param \`${s}\` not found in your filepath.
Rename your file to \`[...page].astro\` or customize the param name via the \`paginate([], {param: '...'}\` option.`);
      c = true;
    }
    const d = Math.max(1, Math.ceil(t.length / r));
    return [...Array(d).keys()].map((a2) => {
      const n2 = a2 + 1, i2 = r === 1 / 0 ? 0 : (n2 - 1) * r, o2 = Math.min(i2 + r, t.length), m = { ...p, [s]: c || n2 > 1 ? String(n2) : void 0 };
      return { params: m, props: { ...l, page: { data: t.slice(i2, o2), start: i2, end: o2 - 1, size: r, total: t.length, currentPage: n2, lastPage: d, url: { current: e.generate({ ...m }), next: n2 === d ? void 0 : e.generate({ ...m, page: String(n2 + 1) }), prev: 1 === n2 ? void 0 : e.generate({ ...m, page: c || n2 - 1 != 1 ? String(n2 - 1) : void 0 }) } } } };
    });
  };
}
async function callGetStaticPaths({ isValidate: e, logging: t, mod: a, route: n, ssr: i }) {
  if (validateDynamicRouteModule(a, { ssr: i, logging: t, route: n }), i && !a.prerender)
    return { staticPaths: Object.assign([], { keyed: /* @__PURE__ */ new Map() }) };
  if (!a.getStaticPaths)
    throw new Error("Unexpected Error.");
  let o = [];
  o = await a.getStaticPaths({ paginate: generatePaginateFunction(n), rss() {
    throw new AstroError(AstroErrorData.GetStaticPathsRemovedRSSHelper);
  } }), Array.isArray(o) && (o = o.flat()), e && validateGetStaticPathsResult(o, t, n);
  const r = o;
  r.keyed = /* @__PURE__ */ new Map();
  for (const e2 of r) {
    const t2 = stringifyParams(e2.params, n.component);
    r.keyed.set(t2, e2);
  }
  return { staticPaths: r };
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
function findPathItemByKey(e, t, a) {
  const n = stringifyParams(t, a.component), i = e.keyed.get(n);
  if (i)
    return i;
  debug("findPathItemByKey", `Unexpected cache miss looking for ${n}`);
}
var GetParamsAndPropsError = ((e) => (e[e.NoMatchingStaticPath = 0] = "NoMatchingStaticPath", e))(GetParamsAndPropsError || {});
async function getParamsAndProps(e) {
  const { logging: t, mod: a, route: n, routeCache: i, pathname: o, ssr: r } = e;
  let s, p = {};
  if (n && !n.pathname) {
    if (n.params.length) {
      const e3 = n.pattern.exec(o);
      e3 && (p = getParams(n.params)(e3));
    }
    let e2 = i.get(n);
    e2 || (e2 = await callGetStaticPaths({ mod: a, route: n, isValidate: true, logging: t, ssr: r }), i.set(n, e2));
    const l = findPathItemByKey(e2.staticPaths, p, n);
    if (!l && (!r || a.prerender))
      return 0;
    s = (null == l ? void 0 : l.props) ? { ...l.props } : {};
  } else
    s = {};
  return [p, s];
}
async function renderPage(e, t, a) {
  var n, i;
  const o = await getParamsAndProps({ logging: a.logging, mod: e, route: t.route, routeCache: a.routeCache, pathname: t.pathname, ssr: a.ssr });
  if (0 === o)
    throw new AstroError({ ...AstroErrorData.NoMatchingStaticPathFound, message: AstroErrorData.NoMatchingStaticPathFound.message(t.pathname), hint: (null == (n = t.route) ? void 0 : n.component) ? AstroErrorData.NoMatchingStaticPathFound.hint([null == (i = t.route) ? void 0 : i.component]) : "" });
  const [r, s] = o, p = e.default;
  if (!p)
    throw new Error("Expected an exported Astro component but received typeof " + typeof p);
  const l = createResult({ adapterName: a.adapterName, links: t.links, styles: t.styles, logging: a.logging, markdown: a.markdown, mode: a.mode, origin: t.origin, params: r, props: s, pathname: t.pathname, propagation: t.propagation, resolve: a.resolve, renderers: a.renderers, request: t.request, site: a.site, scripts: t.scripts, ssr: a.ssr, status: t.status ?? 200 });
  "object" == typeof e.components && Object.assign(s, { components: e.components });
  const c = await renderPage$1(l, p, s, null, a.streaming, t.route);
  return l.cookies && attachToResponse(c, l.cookies), c;
}
var clientAddressSymbol = Symbol.for("astro.clientAddress");
function createAPIContext({ request: e, params: t, site: a, props: n, adapterName: i }) {
  return { cookies: new AstroCookies(e), request: e, params: t, site: a ? new URL(a) : void 0, generator: `Astro v${ASTRO_VERSION}`, props: n, redirect: (e2, t2) => new Response(null, { status: t2 || 302, headers: { Location: e2 } }), url: new URL(e.url), get clientAddress() {
    if (!(clientAddressSymbol in e))
      throw new AstroError(i ? { ...AstroErrorData.ClientAddressNotAvailable, message: AstroErrorData.ClientAddressNotAvailable.message(i) } : AstroErrorData.StaticClientAddressNotAvailable);
    return Reflect.get(e, clientAddressSymbol);
  } };
}
async function call(e, t, a) {
  var n, i;
  const o = await getParamsAndProps({ mod: e, route: a.route, routeCache: t.routeCache, pathname: a.pathname, logging: t.logging, ssr: t.ssr });
  if (o === GetParamsAndPropsError.NoMatchingStaticPath)
    throw new AstroError({ ...AstroErrorData.NoMatchingStaticPathFound, message: AstroErrorData.NoMatchingStaticPathFound.message(a.pathname), hint: (null == (n = a.route) ? void 0 : n.component) ? AstroErrorData.NoMatchingStaticPathFound.hint([null == (i = a.route) ? void 0 : i.component]) : "" });
  const [r, s] = o, p = createAPIContext({ request: a.request, params: r, props: s, site: t.site, adapterName: t.adapterName }), l = await renderEndpoint(e, p, t.ssr);
  return l instanceof Response ? (attachToResponse(l, p.cookies), { type: "response", response: l }) : { type: "simple", body: l.body, encoding: l.encoding, cookies: p.cookies };
}
var lastMessage;
var lastMessageCount = 1;
var consoleLogDestination = { write(e) {
  let t = console.error;
  levels[e.level] < levels.error && (t = console.log);
  let a = e.message;
  a === lastMessage ? (lastMessageCount++, a = `${a} ${yellow(`(x${lastMessageCount})`)}`) : (lastMessage = a, lastMessageCount = 1);
  return t(function() {
    let t2 = "", a2 = e.type;
    return a2 && (t2 += dim(dateTimeFormat.format(new Date()) + " "), "info" === e.level ? a2 = bold(cyan(`[${a2}]`)) : "warn" === e.level ? a2 = bold(yellow(`[${a2}]`)) : "error" === e.level && (a2 = bold(red(`[${a2}]`))), t2 += `${a2} `), reset(t2);
  }() + a), true;
} };
function appendForwardSlash(e) {
  return e.endsWith("/") ? e : e + "/";
}
function prependForwardSlash(e) {
  return "/" === e[0] ? e : "/" + e;
}
function removeTrailingForwardSlash(e) {
  return e.endsWith("/") ? e.slice(0, e.length - 1) : e;
}
function removeLeadingForwardSlash(e) {
  return e.startsWith("/") ? e.substring(1) : e;
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
  const t = e.request, a = new URL(t.url), n = e.origin ?? a.origin, i = e.pathname ?? a.pathname;
  return { ...e, origin: n, pathname: i, url: a };
}
function createEnvironment(e) {
  return e;
}
function slash(e) {
  const t = /^\\\\\?\\/.test(e), a = /[^\u0000-\u0080]+/.test(e);
  return t || a ? e : e.replace(/\\/g, "/");
}
function getRootPath(e) {
  return appendForwardSlash(new URL(e || "/", "http://localhost/").pathname);
}
function joinToRoot(e, t) {
  const a = getRootPath(t), n = slash(e);
  return appendForwardSlash(a) + removeLeadingForwardSlash(n);
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
  return t.routes.find((t2) => t2.pattern.test(decodeURI(e)));
}
function matchAssets(e, t) {
  for (const a of t)
    if (a.endsWith(".html")) {
      if (e.pattern.test(a))
        return a;
      if (e.pattern.test(a.replace(/index\.html$/, "")))
        return a;
    }
}
function lexer(e) {
  for (var t = [], a = 0; a < e.length; ) {
    var n = e[a];
    if ("*" !== n && "+" !== n && "?" !== n)
      if ("\\" !== n)
        if ("{" !== n)
          if ("}" !== n)
            if (":" !== n)
              if ("(" !== n)
                t.push({ type: "CHAR", index: a, value: e[a++] });
              else {
                var i = 1, o = "";
                if ("?" === e[s = a + 1])
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
                    o += e[s++];
                  } else
                    o += e[s++] + e[s++];
                if (i)
                  throw new TypeError("Unbalanced pattern at ".concat(a));
                if (!o)
                  throw new TypeError("Missing pattern at ".concat(a));
                t.push({ type: "PATTERN", index: a, value: o }), a = s;
              }
            else {
              for (var r = "", s = a + 1; s < e.length; ) {
                var p = e.charCodeAt(s);
                if (!(p >= 48 && p <= 57 || p >= 65 && p <= 90 || p >= 97 && p <= 122 || 95 === p))
                  break;
                r += e[s++];
              }
              if (!r)
                throw new TypeError("Missing parameter name at ".concat(a));
              t.push({ type: "NAME", index: a, value: r }), a = s;
            }
          else
            t.push({ type: "CLOSE", index: a, value: e[a++] });
        else
          t.push({ type: "OPEN", index: a, value: e[a++] });
      else
        t.push({ type: "ESCAPED_CHAR", index: a++, value: e[a++] });
    else
      t.push({ type: "MODIFIER", index: a, value: e[a++] });
  }
  return t.push({ type: "END", index: a, value: "" }), t;
}
function parse(e, t) {
  void 0 === t && (t = {});
  for (var a = lexer(e), n = t.prefixes, i = void 0 === n ? "./" : n, o = "[^".concat(escapeString(t.delimiter || "/#?"), "]+?"), r = [], s = 0, p = 0, l = "", c = function(e2) {
    if (p < a.length && a[p].type === e2)
      return a[p++].value;
  }, d = function(e2) {
    var t2 = c(e2);
    if (void 0 !== t2)
      return t2;
    var n2 = a[p], i2 = n2.type, o2 = n2.index;
    throw new TypeError("Unexpected ".concat(i2, " at ").concat(o2, ", expected ").concat(e2));
  }, m = function() {
    for (var e2, t2 = ""; e2 = c("CHAR") || c("ESCAPED_CHAR"); )
      t2 += e2;
    return t2;
  }; p < a.length; ) {
    var u = c("CHAR"), f = c("NAME"), v = c("PATTERN");
    if (f || v) {
      var g = u || "";
      -1 === i.indexOf(g) && (l += g, g = ""), l && (r.push(l), l = ""), r.push({ name: f || s++, prefix: g, suffix: "", pattern: v || o, modifier: c("MODIFIER") || "" });
    } else {
      var h = u || c("ESCAPED_CHAR");
      if (h)
        l += h;
      else if (l && (r.push(l), l = ""), c("OPEN")) {
        g = m();
        var x = c("NAME") || "", y = c("PATTERN") || "", b = m();
        d("CLOSE"), r.push({ name: x || (y ? s++ : ""), pattern: x && !y ? o : y, prefix: g, suffix: b, modifier: c("MODIFIER") || "" });
      } else
        d("END");
    }
  }
  return r;
}
function compile(e, t) {
  return tokensToFunction(parse(e, t), t);
}
function tokensToFunction(e, t) {
  void 0 === t && (t = {});
  var a = flags(t), n = t.encode, i = void 0 === n ? function(e2) {
    return e2;
  } : n, o = t.validate, r = void 0 === o || o, s = e.map(function(e2) {
    if ("object" == typeof e2)
      return new RegExp("^(?:".concat(e2.pattern, ")$"), a);
  });
  return function(t2) {
    for (var a2 = "", n2 = 0; n2 < e.length; n2++) {
      var o2 = e[n2];
      if ("string" != typeof o2) {
        var p = t2 ? t2[o2.name] : void 0, l = "?" === o2.modifier || "*" === o2.modifier, c = "*" === o2.modifier || "+" === o2.modifier;
        if (Array.isArray(p)) {
          if (!c)
            throw new TypeError('Expected "'.concat(o2.name, '" to not repeat, but got an array'));
          if (0 === p.length) {
            if (l)
              continue;
            throw new TypeError('Expected "'.concat(o2.name, '" to not be empty'));
          }
          for (var d = 0; d < p.length; d++) {
            var m = i(p[d], o2);
            if (r && !s[n2].test(m))
              throw new TypeError('Expected all "'.concat(o2.name, '" to match "').concat(o2.pattern, '", but got "').concat(m, '"'));
            a2 += o2.prefix + m + o2.suffix;
          }
        } else if ("string" != typeof p && "number" != typeof p) {
          if (!l) {
            var u = c ? "an array" : "a string";
            throw new TypeError('Expected "'.concat(o2.name, '" to be ').concat(u));
          }
        } else {
          m = i(String(p), o2);
          if (r && !s[n2].test(m))
            throw new TypeError('Expected "'.concat(o2.name, '" to match "').concat(o2.pattern, '", but got "').concat(m, '"'));
          a2 += o2.prefix + m + o2.suffix;
        }
      } else
        a2 += o2;
    }
    return a2;
  };
}
function escapeString(e) {
  return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
function flags(e) {
  return e && e.sensitive ? "" : "i";
}
function getRouteGenerator(e, t) {
  const a = e.map((e2) => "/" + e2.map((e3) => e3.spread ? `:${e3.content.slice(3)}(.*)?` : e3.dynamic ? `:${e3.content}` : e3.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("")).join("");
  let n = "";
  "always" === t && e.length && (n = "/");
  return compile(a + n);
}
function deserializeRouteData(e) {
  return { route: e.route, type: e.type, pattern: new RegExp(e.pattern), params: e.params, component: e.component, generate: getRouteGenerator(e.segments, e._meta.trailingSlash), pathname: e.pathname || void 0, segments: e.segments };
}
function deserializeManifest(e) {
  const t = [];
  for (const a2 of e.routes) {
    t.push({ ...a2, routeData: deserializeRouteData(a2.routeData) });
    a2.routeData = deserializeRouteData(a2.routeData);
  }
  const a = new Set(e.assets);
  return { ...e, assets: a, routes: t };
}
var _env;
var _manifest;
var _manifestData;
var _routeDataToRouteInfo;
var _encoder;
var _logging;
var _base;
var _baseWithoutTrailingSlash;
var _renderPage;
var renderPage_fn;
var _callEndpoint;
var callEndpoint_fn;
var __accessCheck = (e, t, a) => {
  if (!t.has(e))
    throw TypeError("Cannot " + a);
};
var __privateGet = (e, t, a) => (__accessCheck(e, t, "read from private field"), a ? a.call(e) : t.get(e));
var __privateAdd = (e, t, a) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, a);
};
var __privateSet = (e, t, a, n) => (__accessCheck(e, t, "write to private field"), n ? n.call(e, a) : t.set(e, a), a);
var __privateMethod = (e, t, a) => (__accessCheck(e, t, "access private method"), a);
var App = class {
  constructor(e, t = true) {
    __privateAdd(this, _renderPage), __privateAdd(this, _callEndpoint), __privateAdd(this, _env, void 0), __privateAdd(this, _manifest, void 0), __privateAdd(this, _manifestData, void 0), __privateAdd(this, _routeDataToRouteInfo, void 0), __privateAdd(this, _encoder, new TextEncoder()), __privateAdd(this, _logging, { dest: consoleLogDestination, level: "info" }), __privateAdd(this, _base, void 0), __privateAdd(this, _baseWithoutTrailingSlash, void 0), __privateSet(this, _manifest, e), __privateSet(this, _manifestData, { routes: e.routes.map((e2) => e2.routeData) }), __privateSet(this, _routeDataToRouteInfo, new Map(e.routes.map((e2) => [e2.routeData, e2]))), __privateSet(this, _env, createEnvironment({ adapterName: e.adapterName, logging: __privateGet(this, _logging), markdown: e.markdown, mode: "production", renderers: e.renderers, async resolve(t2) {
      if (!(t2 in e.entryModules))
        throw new Error(`Unable to resolve [${t2}]`);
      const a = e.entryModules[t2];
      switch (true) {
        case a.startsWith("data:"):
        case 0 === a.length:
          return a;
        default:
          return prependForwardSlash(joinPaths(e.base, a));
      }
    }, routeCache: new RouteCache(__privateGet(this, _logging)), site: __privateGet(this, _manifest).site, ssr: true, streaming: t })), __privateSet(this, _base, __privateGet(this, _manifest).base || "/"), __privateSet(this, _baseWithoutTrailingSlash, removeTrailingForwardSlash(__privateGet(this, _base)));
  }
  removeBase(e) {
    return e.startsWith(__privateGet(this, _base)) ? e.slice(__privateGet(this, _baseWithoutTrailingSlash).length + 1) : e;
  }
  match(e, { matchNotFound: t = false } = {}) {
    const a = new URL(e.url);
    if (__privateGet(this, _manifest).assets.has(a.pathname))
      return;
    let n = matchRoute("/" + this.removeBase(a.pathname), __privateGet(this, _manifestData));
    if (n) {
      if (matchAssets(n, __privateGet(this, _manifest).assets))
        return;
      return n;
    }
    return t ? matchRoute("/404", __privateGet(this, _manifestData)) : void 0;
  }
  async render(e, t) {
    let a = 200;
    if (!t && ((t = this.match(e)) || (a = 404, t = this.match(e, { matchNotFound: true })), !t))
      return new Response(null, { status: 404, statusText: "Not found" });
    "/404" === t.route && (a = 404);
    let n = __privateGet(this, _manifest).pageMap.get(t.component);
    if ("page" === t.type) {
      let i = await __privateMethod(this, _renderPage, renderPage_fn).call(this, e, t, n, a);
      if (500 === i.status) {
        const t2 = matchRoute("/500", __privateGet(this, _manifestData));
        if (t2) {
          n = __privateGet(this, _manifest).pageMap.get(t2.component);
          try {
            return await __privateMethod(this, _renderPage, renderPage_fn).call(this, e, t2, n, 500);
          } catch {
          }
        }
      }
      return i;
    }
    if ("endpoint" === t.type)
      return __privateMethod(this, _callEndpoint, callEndpoint_fn).call(this, e, t, n, a);
    throw new Error(`Unsupported route type [${t.type}].`);
  }
  setCookieHeaders(e) {
    return getSetCookiesFromResponse(e);
  }
};
_env = /* @__PURE__ */ new WeakMap(), _manifest = /* @__PURE__ */ new WeakMap(), _manifestData = /* @__PURE__ */ new WeakMap(), _routeDataToRouteInfo = /* @__PURE__ */ new WeakMap(), _encoder = /* @__PURE__ */ new WeakMap(), _logging = /* @__PURE__ */ new WeakMap(), _base = /* @__PURE__ */ new WeakMap(), _baseWithoutTrailingSlash = /* @__PURE__ */ new WeakMap(), _renderPage = /* @__PURE__ */ new WeakSet(), renderPage_fn = async function(e, t, a, n = 200) {
  const i = new URL(e.url), o = "/" + this.removeBase(i.pathname), r = __privateGet(this, _routeDataToRouteInfo).get(t), s = createLinkStylesheetElementSet(r.links);
  let p = /* @__PURE__ */ new Set();
  for (const e2 of r.scripts)
    "stage" in e2 ? "head-inline" === e2.stage && p.add({ props: {}, children: e2.children }) : p.add(createModuleScriptElement(e2));
  try {
    const r2 = createRenderContext({ request: e, origin: i.origin, pathname: o, scripts: p, links: s, route: t, status: n });
    return await renderPage(a, r2, __privateGet(this, _env));
  } catch (e2) {
    return error(__privateGet(this, _logging), "ssr", e2.stack || e2.message || String(e2)), new Response(null, { status: 500, statusText: "Internal server error" });
  }
}, _callEndpoint = /* @__PURE__ */ new WeakSet(), callEndpoint_fn = async function(e, t, a, n = 200) {
  const i = new URL(e.url), o = "/" + this.removeBase(i.pathname), r = a, s = createRenderContext({ request: e, origin: i.origin, pathname: o, route: t, status: n }), p = await call(r, __privateGet(this, _env), s);
  if ("response" === p.type) {
    if ("Not-Found" === p.response.headers.get("X-Astro-Response")) {
      const t2 = new Request(new URL("/404", e.url)), a2 = this.match(t2);
      if (a2)
        return this.render(t2, a2);
    }
    return p.response;
  }
  {
    const e2 = p.body, t2 = new Headers(), a2 = mime.getType(i.pathname);
    a2 ? t2.set("Content-Type", `${a2};charset=utf-8`) : t2.set("Content-Type", "text/plain;charset=utf-8");
    const n2 = __privateGet(this, _encoder).encode(e2);
    t2.set("Content-Length", n2.byteLength.toString());
    const o2 = new Response(n2, { status: 200, headers: t2 });
    return attachToResponse(o2, p.cookies), o2;
  }
};
var slotName = (e) => e.trim().replace(/[-_]([a-z])/g, (e2, t) => t.toUpperCase());
async function check(e, t, { default: a = null, ...n } = {}) {
  if ("function" != typeof e)
    return false;
  const i = {};
  for (const [e2, t2] of Object.entries(n)) {
    i[slotName(e2)] = t2;
  }
  try {
    return (await e({ ...t, ...i, children: a }))[AstroJSX];
  } catch (e2) {
  }
  return false;
}
async function renderToStaticMarkup(e, t = {}, { default: a = null, ...n } = {}) {
  const i = {};
  for (const [e2, t2] of Object.entries(n)) {
    i[slotName(e2)] = t2;
  }
  const { result: o } = this;
  return { html: await renderJSX(o, createVNode(e, { ...t, ...i, children: a })) };
}
var server_default = { check, renderToStaticMarkup };

// dist/server/entry.mjs
import { Server } from "https://deno.land/std@0.167.0/http/server.ts";
import { fetch } from "https://deno.land/x/file_fetch/mod.ts";

// dist/server/chunks/pages/all.6a5169b5.mjs
var $$Astro$1 = createAstro("https://astro-deno-deploy.deno.dev/");
var $$Base = createComponent(async (e, t, o) => {
  const r = e.createAstro($$Astro$1, t, o);
  r.self = $$Base;
  const { title: n = "", description: a = "" } = r.props;
  return renderTemplate`<html lang="en" class="no-js" dir="ltr">
	<head>
		

		<!-- Meta -->
		<title>${n}</title>
		<meta charset="utf-8">
		<meta name="description"${addAttribute(a, "content")}>
		<meta name="viewport" content="width=device-width,initial-scale=1.0">
		<meta name="theme-color" content="#FF5D01">
		<meta name="format-detection" content="telephone=no">
		<meta name="twitter:dnt" content="on">

		<!-- Links -->
		<link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link rel="manifest" href="/site.webmanifest" crossorigin="use-credentials">

		

		<!-- Favicon -->
	${renderHead(e)}</head>

	<body>
		<div id="astro-deno-deploy-web">
			<div class="grow">
				${renderSlot(e, o.default)}
			</div>
		</div>
	</body></html>`;
}, "D:/Developer/app/lightrix/astro-deno-deploy/src/layouts/Base.astro");
var $$Astro = createAstro("https://astro-deno-deploy.deno.dev/");
var $$Index = createComponent(async (e, t, o) => (e.createAstro($$Astro, t, o).self = $$Index, renderTemplate`${renderComponent(e, "Base", $$Base, {})}`), "D:/Developer/app/lightrix/astro-deno-deploy/src/pages/index.astro");
var $$file = "D:/Developer/app/lightrix/astro-deno-deploy/src/pages/index.astro";
var _page0 = Object.freeze(Object.defineProperty({ __proto__: null, default: $$Index, file: $$file, url: "" }, Symbol.toStringTag, { value: "Module" }));

// dist/server/entry.mjs
var _server;
var _startPromise;
function start$1(e, r) {
  if (false === r.start)
    return;
  const t = new URL("../client/", import.meta.url), s = new App(e), a = r.port ?? 8085;
  _server = new Server({ port: a, hostname: r.hostname ?? "0.0.0.0", handler: async (e2, r2) => {
    var a2;
    if (s.match(e2)) {
      let t2 = null == (a2 = null == r2 ? void 0 : r2.remoteAddr) ? void 0 : a2.hostname;
      Reflect.set(e2, Symbol.for("astro.clientAddress"), t2);
      const o2 = await s.render(e2);
      if (s.setCookieHeaders)
        for (const e3 of s.setCookieHeaders(o2))
          o2.headers.append("Set-Cookie", e3);
      return o2;
    }
    const o = new URL(e2.url), n = new URL("./" + s.removeBase(o.pathname), t), i = await fetch(n.toString());
    if (404 == i.status) {
      const r3 = await s.render(e2);
      if (s.setCookieHeaders)
        for (const e3 of s.setCookieHeaders(r3))
          r3.headers.append("Set-Cookie", e3);
      return r3;
    }
    return i;
  } }), _startPromise = Promise.resolve(_server.listenAndServe()), console.error(`Server running on port ${a}`);
}
function createExports(e, r) {
  const t = new App(e);
  return { async stop() {
    _server && (_server.close(), _server = void 0), await Promise.resolve(_startPromise);
  }, running: () => void 0 !== _server, start: async () => start$1(e, r), handle: async (e2) => t.render(e2) };
}
var adapter = Object.freeze(Object.defineProperty({ __proto__: null, createExports, start: start$1 }, Symbol.toStringTag, { value: "Module" }));
var pageMap = /* @__PURE__ */ new Map([["src/pages/index.astro", _page0]]);
var renderers = [Object.assign({ name: "astro:jsx", serverEntrypoint: "astro/jsx/server.js", jsxImportSource: "astro" }, { ssr: server_default })];
var _manifest2 = Object.assign(deserializeManifest({ adapterName: "@astrojs/deno", routes: [{ file: "", links: ["_astro/index.c57ad5eb.css"], scripts: [{ type: "external", value: "_astro/hoisted.5ce92ca5.js" }, { type: "external", value: "_astro/page.b7cc8384.js" }], routeData: { route: "/", type: "page", pattern: "^\\/$", segments: [], params: [], component: "src/pages/index.astro", pathname: "/", _meta: { trailingSlash: "ignore" } } }], site: "https://astro-deno-deploy.deno.dev/", base: "/", markdown: { drafts: false, syntaxHighlight: "shiki", shikiConfig: { langs: [], theme: "github-dark", wrap: false }, remarkPlugins: [], rehypePlugins: [], remarkRehype: {}, gfm: true, smartypants: true, contentDir: "file:///D:/Developer/app/lightrix/astro-deno-deploy/src/content/" }, pageMap: null, renderers: [], entryModules: { "\0@astrojs-ssr-virtual-entry": "_@astrojs-ssr-virtual-entry.mjs", "astro:scripts/page.js": "_astro/page.b7cc8384.js", "/astro/hoisted.js?q=0": "_astro/hoisted.5ce92ca5.js", "astro:scripts/before-hydration.js": "" }, assets: ["/_astro/index.c57ad5eb.css", "/robots.txt", "/site.webmanifest", "/_astro/hoisted.5ce92ca5.js", "/_astro/page.b7cc8384.js", "/_astro/page.b7cc8384.js"] }), { pageMap, renderers });
var _args = {};
var _exports = createExports(_manifest2, _args);
var stop = _exports.stop;
var handle = _exports.handle;
var start = _exports.start;
var running = _exports.running;
var _start = "start";
_start in adapter && adapter[_start](_manifest2, _args);
export {
  handle,
  pageMap,
  renderers,
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
