(function(_window, _document, _location, _history) {
	const sha256=function(){var f="input is invalid type",n="undefined"!=typeof ArrayBuffer,y="0123456789abcdef".split(""),i=[-2147483648,8388608,32768,128],c=[24,16,8,0],w=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],t=[];function h(){t[0]=t[16]=t[1]=t[2]=t[3]=t[4]=t[5]=t[6]=t[7]=t[8]=t[9]=t[10]=t[11]=t[12]=t[13]=t[14]=t[15]=0,this.blocks=t,this.h0=1779033703,this.h1=3144134277,this.h2=1013904242,this.h3=2773480762,this.h4=1359893119,this.h5=2600822924,this.h6=528734635,this.h7=1541459225,this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0}Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),n&&!ArrayBuffer.isView&&(ArrayBuffer.isView=function(t){return"object"==typeof t&&t.buffer&&t.buffer.constructor===ArrayBuffer}),h.prototype.update=function(t){if(!this.finalized){var h,i=typeof t;if("string"!=i){if("object"!=i)throw new Error(f);if(null===t)throw new Error(f);if(n&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!(Array.isArray(t)||n&&ArrayBuffer.isView(t)))throw new Error(f);h=!0}for(var s,r,e=0,o=t.length,a=this.blocks;e<o;){if(this.hashed&&(this.hashed=!1,a[0]=this.block,a[16]=a[1]=a[2]=a[3]=a[4]=a[5]=a[6]=a[7]=a[8]=a[9]=a[10]=a[11]=a[12]=a[13]=a[14]=a[15]=0),h)for(r=this.start;e<o&&r<64;++e)a[r>>2]|=t[e]<<c[3&r++];else for(r=this.start;e<o&&r<64;++e)(s=t.charCodeAt(e))<128?a[r>>2]|=s<<c[3&r++]:(s<2048?a[r>>2]|=(192|s>>6)<<c[3&r++]:(s<55296||57344<=s?a[r>>2]|=(224|s>>12)<<c[3&r++]:(s=65536+((1023&s)<<10|1023&t.charCodeAt(++e)),a[r>>2]|=(240|s>>18)<<c[3&r++],a[r>>2]|=(128|s>>12&63)<<c[3&r++]),a[r>>2]|=(128|s>>6&63)<<c[3&r++]),a[r>>2]|=(128|63&s)<<c[3&r++]);this.lastByteIndex=r,this.bytes+=r-this.start,64<=r?(this.block=a[16],this.start=r-64,this.hash(),this.hashed=!0):this.start=r}return 4294967295<this.bytes&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},h.prototype.finalize=function(){var t,h;this.finalized||(this.finalized=!0,t=this.blocks,h=this.lastByteIndex,t[16]=this.block,t[h>>2]|=i[3&h],this.block=t[16],56<=h&&(this.hashed||this.hash(),t[0]=this.block,t[16]=t[1]=t[2]=t[3]=t[4]=t[5]=t[6]=t[7]=t[8]=t[9]=t[10]=t[11]=t[12]=t[13]=t[14]=t[15]=0),t[14]=this.hBytes<<3|this.bytes>>>29,t[15]=this.bytes<<3,this.hash())},h.prototype.hash=function(){for(var t,h,i,s,r,e,o,a,f=this.h0,n=this.h1,y=this.h2,c=this.h3,u=this.h4,l=this.h5,b=this.h6,p=this.h7,d=this.blocks,A=16;A<64;++A)t=((s=d[A-15])>>>7|s<<25)^(s>>>18|s<<14)^s>>>3,h=((s=d[A-2])>>>17|s<<15)^(s>>>19|s<<13)^s>>>10,d[A]=d[A-16]+t+d[A-7]+h<<0;for(a=n&y,A=0;A<64;A+=4)this.first?(c=this.is224?(r=300032,p=(s=d[0]-1413257819)-150054599<<0,s+24177077<<0):(r=704751109,p=(s=d[0]-210244248)-1521486534<<0,s+143694565<<0),this.first=!1):(t=(f>>>2|f<<30)^(f>>>13|f<<19)^(f>>>22|f<<10),i=(r=f&n)^f&y^a,p=c+(s=p+(h=(u>>>6|u<<26)^(u>>>11|u<<21)^(u>>>25|u<<7))+(u&l^~u&b)+w[A]+d[A])<<0,c=s+(t+i)<<0),t=(c>>>2|c<<30)^(c>>>13|c<<19)^(c>>>22|c<<10),i=(e=c&f)^c&n^r,b=y+(s=b+(h=(p>>>6|p<<26)^(p>>>11|p<<21)^(p>>>25|p<<7))+(p&u^~p&l)+w[A+1]+d[A+1])<<0,t=((y=s+(t+i)<<0)>>>2|y<<30)^(y>>>13|y<<19)^(y>>>22|y<<10),i=(o=y&c)^y&f^e,l=n+(s=l+(h=(b>>>6|b<<26)^(b>>>11|b<<21)^(b>>>25|b<<7))+(b&p^~b&u)+w[A+2]+d[A+2])<<0,t=((n=s+(t+i)<<0)>>>2|n<<30)^(n>>>13|n<<19)^(n>>>22|n<<10),i=(a=n&y)^n&c^o,u=f+(s=u+(h=(l>>>6|l<<26)^(l>>>11|l<<21)^(l>>>25|l<<7))+(l&b^~l&p)+w[A+3]+d[A+3])<<0,f=s+(t+i)<<0;this.h0=this.h0+f<<0,this.h1=this.h1+n<<0,this.h2=this.h2+y<<0,this.h3=this.h3+c<<0,this.h4=this.h4+u<<0,this.h5=this.h5+l<<0,this.h6=this.h6+b<<0,this.h7=this.h7+p<<0},h.prototype.toString=h.prototype.hex=function(){this.finalize();var t=this.h0,h=this.h1,i=this.h2,s=this.h3,r=this.h4,e=this.h5,o=this.h6,a=this.h7,o=y[t>>28&15]+y[t>>24&15]+y[t>>20&15]+y[t>>16&15]+y[t>>12&15]+y[t>>8&15]+y[t>>4&15]+y[15&t]+y[h>>28&15]+y[h>>24&15]+y[h>>20&15]+y[h>>16&15]+y[h>>12&15]+y[h>>8&15]+y[h>>4&15]+y[15&h]+y[i>>28&15]+y[i>>24&15]+y[i>>20&15]+y[i>>16&15]+y[i>>12&15]+y[i>>8&15]+y[i>>4&15]+y[15&i]+y[s>>28&15]+y[s>>24&15]+y[s>>20&15]+y[s>>16&15]+y[s>>12&15]+y[s>>8&15]+y[s>>4&15]+y[15&s]+y[r>>28&15]+y[r>>24&15]+y[r>>20&15]+y[r>>16&15]+y[r>>12&15]+y[r>>8&15]+y[r>>4&15]+y[15&r]+y[e>>28&15]+y[e>>24&15]+y[e>>20&15]+y[e>>16&15]+y[e>>12&15]+y[e>>8&15]+y[e>>4&15]+y[15&e]+y[o>>28&15]+y[o>>24&15]+y[o>>20&15]+y[o>>16&15]+y[o>>12&15]+y[o>>8&15]+y[o>>4&15]+y[15&o];return this.is224||(o+=y[a>>28&15]+y[a>>24&15]+y[a>>20&15]+y[a>>16&15]+y[a>>12&15]+y[a>>8&15]+y[a>>4&15]+y[15&a]),o};return function(t){return(new h).update(t).hex()}}();
	if(!_window.advermind) return;
	function generateUUID() {
		let d = new Date().getTime();
		if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
			d += performance.now();
		}
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
			const r = (d + Math.random() * 16) % 16 | 0;
			d = Math.floor(d / 16);
			return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
		});
	}
	const unixTime = () => Math.floor((new Date()).getTime() / 1000);
	function getCookie(cname) {
		const name = cname + "=";
		const decodedCookie = decodeURIComponent(document.cookie);
		const ca = decodedCookie.split(';');
		for(let i = 0; i <ca.length; i++) {
			let c = ca[i];
			while (c.charAt(0) == ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return "";
	}
	function getQueryVariable(variable) {
		const query = window.location.search.substring(1);
		const vars = query.split('&');
		for (let i = 0; i < vars.length; i++) {
			const pair = vars[i].split('=');
			if (decodeURIComponent(pair[0]) === variable) {
				return decodeURIComponent(pair[1]);
			}
		}
		return undefined;
	}
	function getQueryVariableNames() {
		const query = window.location.search.substring(1);
		const vars = query.split('&');
		return vars.map(v => decodeURIComponent(v.split('=')[0]));
	}
	function strip(html){
		if(typeof DOMParser !== "function") return html;
		let doc = new DOMParser().parseFromString(html, 'text/html');
		return doc.body.textContent || "";
	}
	function type(obj, fullClass) {
		if (fullClass) {
			return (obj === null) ? '[object Null]' : Object.prototype.toString.call(obj);
		}
		if (obj == null) { return (obj + '').toLowerCase(); }
		var deepType = Object.prototype.toString.call(obj).slice(8,-1).toLowerCase();
		if (deepType === 'generatorfunction') { return 'function' }
		return deepType.match(/^(array|bigint|date|error|function|generator|regexp|symbol)$/) ? deepType :
			(typeof obj === 'object' || typeof obj === 'function') ? 'object' : typeof obj;
	}
	const isObject = (o) => typeof o !== "undefined" && type(o) === "object";
	const isArray = (o) => typeof o !== "undefined" && type(o) === "array";

	const manageFbq = "true"==="true";
	const adv = {
		tracked: [],
		debugToConsole: _window.advermind.debugToConsole || false,
		debugToLog: _window.advermind.debugToLog || true,
		debugLog: [],
		log: function(level, error, location) {
			if(adv.debugToLog) {
				adv.debugLog.push({
					location: location || "GLOBAL",
					level: level,
					error: error
				})
			}
			if(adv.debugToConsole) {
				console.log("advermind", location || "GLOBAL", level, error);
			}
		},
		capi: async function(eventId, pixels, eventName, eventData) {

			let fbc = getCookie("_fbc")
			if(!fbc) {
				const fbclid = getQueryVariable("fbclid");
				if(fbclid) fbc = 'fb.1.' + Date.now() + '.' + fbclid;
			}

			const data = {
				v: "1",
				endpoint: 'https://signals.zenithbank.com/r',
				eventId: eventId,
				pixels: pixels,
				advancedMatching: adv.advancedMatching,
				eventName: eventName,
				eventData: eventData,
				eventTime: unixTime(),
				eventSourceUrl: _document.location.href,
				fbp: getCookie("_fbp"),
				fbc: fbc,
				fbclid: getQueryVariable("fbclid")
			};
			adv.log("INFO", JSON.stringify(data, null, 4));

			try {
				const response = await fetch('https://signals.zenithbank.com/r', {
					method: 'POST',
					mode: 'cors',
					cache: 'no-store',
					credentials: 'same-origin',
					headers: { 'Content-Type': 'application/json' },
					redirect: 'follow',
					referrerPolicy: 'same-origin',
					body: JSON.stringify(data)
				});
				const reply = await response.text();

				if(adv.callbacks[eventName]) {
					adv.callbacks[eventName](reply);
				}

				adv.log("SERVER_REPLY", reply);
			} catch(ex) {
				adv.log("SERVER_EXCEPTION", ex);
			}

		},
		execute: async function() {

			try {
				if(arguments.length < 1) return adv.log("ERROR", "MISSING_ARGUMENTS");
				const methodName = arguments[0];
				if(type(methodName) !== "string") return adv.log("ERROR", "INVALID_METHOD_NAME");

				if(methodName === "debug") {
					return console.log(adv.debugLog);
				}

				if(methodName === "registerCallback") {
					if(type(arguments[1]) !== "string") return;
					if(type(arguments[2]) !== "function") return;
					adv.callbacks[arguments[1]] = arguments[2];
					return;
				}

				if(methodName === "setuip") {
					if(arguments.length < 2) return adv.log("ERROR", "MISSING_PIXEL_ID", "SETUIP");
					if(typeof(arguments[1]) !== "string") return adv.log("ERROR", "INVALID_PIXEL_ID", "SETUIP");
					const pixelId = arguments[1];
					if(adv.pixels.indexOf(pixelId) < 0) return adv.log("ERROR", "PIXEL_NOT_INITIALIZED", "SETUIP");
					if(arguments.length > 2 && typeof arguments[2] === "object") {
						const uip = arguments[2];
						const capiUip = {};
						adv.log("INFO", JSON.stringify(uip, null, 4));

						for(const key of Object.keys(uip)) {
							if(uip[key] === "undefined") { delete uip[key]; continue; }
							capiUip[key] = uip[key].toLowerCase().trim();
							if(!/^[a-f0-9]{64}$/.test(capiUip[key])) {
								capiUip[key] = sha256(capiUip[key]);
							}
						}
						adv.advancedMatching[pixelId] = capiUip;
					}
					return;
				}

				if(methodName === "init") {
					if(arguments.length < 2) return adv.log("ERROR", "MISSING_PIXEL_ID", "INIT");
					const pixelId = arguments[1];
					if(typeof(arguments[1]) !== "string") return adv.log("ERROR", "INVALID_PIXEL_ID", "INIT");
					if(adv.pixels.indexOf(pixelId)>=0) return adv.log("ERROR", "PIXEL_ALREADY_INITIALIZED", "INIT");
					adv.pixels.push(pixelId);

					if(arguments.length > 2 && typeof arguments[2] === "object") {
						const uip = arguments[2];
						const capiUip = {};
						adv.log("INFO", JSON.stringify(uip, null, 4));

						for(const key of Object.keys(uip)) {
							if(uip[key] === "undefined") { delete uip[key]; continue; }
							capiUip[key] = uip[key].toLowerCase().trim();
							if(!/^[a-f0-9]{64}$/.test(capiUip[key])) {
								capiUip[key] = sha256(capiUip[key]);
							}

						}
						adv.advancedMatching[pixelId] = capiUip;
						if(manageFbq) _window.fbq('init', pixelId, uip);
					}
					else
						if(manageFbq) _window.fbq('init', pixelId);
					return;
				}

				if(methodName === "set" || methodName === "setUserProperties") {
					if(manageFbq) _window.fbq(arguments);
					return;
				}

				if(adv.pixels.length < 1) return adv.log("ERROR", "NO_PIXEL_INITIALIZED", methodName);

				const normalizeEventData = (cd) => {
					if(!cd) return undefined;
					if(cd.content_ids) cd.content_ids = strip(cd.content_ids);
					if(cd.content_name) cd.content_name = strip(cd.content_name);
					if(cd.contents) {
						if(isObject(cd.contents)) cd.contents = [cd.contents];
						if(!isArray(cd.contents)) delete cd.contents;
						for(let i = cd.contents.length - 1; i >= 0; i--) {
							if(!cd.contents[i].id) cd.contents.splice(i, 1);
							else {
								cd.contents[i].id = strip(cd.contents[i].id.toString());
								cd.contents[i].quantity = cd.contents[i].quantity ? parseInt(cd.contents[i].quantity) || 1 : 1;
								if(cd.contents[i].item_price !== undefined) {
									cd.contents[i].item_price = parseFloat(cd.contents[i].item_price) || 0.0;
								}
							}
						}
						if(cd.contents.length < 1) delete cd.contents;
					}
					return cd;
				}

				if(["track", "trackCustom", "trackSingle", "trackSingleCustom"].indexOf(methodName) >= 0)
					for(const vn of getQueryVariableNames())
						if(["token", "access_token", "accesstoken"].indexOf(vn.toLowerCase()) >= 0)
							adv.log("WARNING", "TOKEN_IN_URL", methodName);

				if(["track", "trackCustom"].indexOf(methodName) >= 0) {

					const eventName = typeof(arguments[1]) === "string" ? arguments[1] : undefined;
					const eventData = normalizeEventData(typeof(arguments[2]) === "object" ? arguments[2] : undefined);
					const eventId = generateUUID();
					if(manageFbq) {
						const fbd = eventData ? [methodName, eventName, eventData, {eventID: eventId}] : [methodName, eventName, {}, {eventID: eventId}];
						_window.fbq(fbd);
					}

					adv.capi(eventId, adv.pixels, eventName, eventData).then(() => {}).catch(() => {});
					adv.tracked.push(eventName);
					return;
				}

				if(["trackSingle", "trackSingleCustom"].indexOf(methodName) >= 0) {

					const pixelId = typeof(arguments[1]) === "string" ? arguments[1] : undefined;
					const eventName = typeof(arguments[2]) === "string" ? arguments[2] : undefined;
					const eventData = normalizeEventData(typeof(arguments[3]) === "object" ? arguments[3] : undefined);
					const eventId = generateUUID();

					if(adv.pixels.indexOf(pixelId) < 0) {
						return adv.log("ERROR", "PIXEL_NOT_INITIALIZED", methodName);
					}

					if(manageFbq) {
						const fbd = eventData ? [methodName, pixelId, eventName, eventData, {eventID: eventId}] : [methodName, pixelId, eventName, {}, {eventID: eventId}];
						_window.fbq(fbd);
					}

					adv.capi(eventId, [pixelId], eventName, eventData).then(() => {}).catch(() => {});
					adv.tracked.push(eventName);
					return;
				}

			} catch(e) {

			} finally {

			}
		},
		pixels: [],
		advancedMatching: {},
		callbacks: {}
	}

	const drainQueue = function() {
		if(_window.advermind.queue.length) {
			const args = _window.advermind.queue.shift();
			adv.execute.apply(adv.execute, args).then(res => setTimeout(drainQueue, 0));
		} else {
			_window.advermind.execute = function() {
				adv.execute.apply(adv.execute, arguments).then(res => true);
			}
		}
	}

	if(manageFbq)
		!function(f,b,e,v,n,t,s)
		{   if(f.fbq)return;n=f.fbq=function(){n.callMethod?
			n.callMethod.apply(n,arguments):n.queue.push(arguments)};
			if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
			n.queue=[];t=b.createElement(e);t.async=!0;
			t.src=v;s=b.getElementsByTagName(e)[0];
			s.parentNode.insertBefore(t,s)
		}(_window, _document,'script','https://connect.facebook.net/en_US/fbevents.js');

	drainQueue();

})(window, document, location, history);
