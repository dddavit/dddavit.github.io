// window.WebAudioEngine.pause = Laya.LocalStorage.getItem("musicState") ? JSON.parse(Laya.LocalStorage.getItem("musicState")) : false;
// platform.getInstance().hideSplash();
! function () {
	class WebAudioEngine {
		constructor() {
			this.beEnabled = false;
			this.isMuted = false;
			this.bePauseSound = false;
			this.bePauseMusic = false;
			this.tryToResumeIntervalId = -1;
			this.isVisibilityMuted = false;
			this.adShowing = false;
		}
		init() {
			return new Promise((resolve, reject) => {
				try {
					this.musicAudio = new WebAudioContext();
					this.soundAudio = new WebAudioContext();
					window.document.addEventListener("click", () => {
						this.tryToResumeAudioContext()
					},
						true);
					window.document.addEventListener("touchstart", this.tryToResumeAudioContext.bind(this),
						true);
					window.document.addEventListener("visibilitychange", this.onVisibilitychange.bind(
						this));
					this.musicAudio.getContext().onstatechange = this.onMusicStatechange.bind(this);
					this.soundAudio.getContext().onstatechange = this.onSoundStatechange.bind(this);
					this.beEnabled = true;
					this.musicVolume = 60;
					this.musicAudio.resume().then((res) => {
						this.tryToResumeIntervalId = setInterval(this.tryToResumeAudioContext.bind(
							this),
							0.2e3);
					})
					resolve(true);
				} catch (e) {
					console.log("Web Audio API", e);
					alert("Web Audio API is not supported in this browser");
					resolve(false);
				}
			});
		}
		onVisibilitychange() {
			if (window.WebAudioEngine.adShowing) {
				return;
			}
			if (document.visibilityState == "hidden") {
				if (!this.isMuted) {
					this.isVisibilityMuted = this.muted = true;
				}
				Laya.timer.scale = 0;
				Laya.stage.renderingEnabled = false //停止渲染
				Laya.updateTimer && Laya.updateTimer.pause() //停止onUpdate
				Laya.physicsTimer && Laya.physicsTimer.pause() //停止物理
			} else if (document.visibilityState == "visible") {
				if (this.isVisibilityMuted) {
					this.isVisibilityMuted = this.muted = false;
				}
				Laya.timer.scale = 1;
				Laya.stage.renderingEnabled = true //恢复渲染
				Laya.updateTimer && Laya.updateTimer.resume() //恢复onUpdate
				Laya.physicsTimer && Laya.physicsTimer.resume() //恢复物理
			}
		}
		onDBInstanceMuted() {
			// this.pauseMusic = DBInstance$1.musicMuted.value;
			// this.pauseSound = DBInstance$1.soundMuted.value;
		}
		tryToResumeAudioContext() {
			if (this.isMuted)
				return;

			if (this.musicAudio.isSuspend() && !this.bePauseMusic) {
				this.musicAudio.resume();
			}
			if (this.soundAudio.isSuspend() && !this.bePauseSound) {
				this.soundAudio.resume();
			}
			if (!this.musicAudio.isSuspend() || !this.soundAudio.isSuspend()) {
				window.document.removeEventListener("mousedown", this.tryToResumeAudioContext.bind(this), true);
				window.document.removeEventListener("touchstart", this.tryToResumeAudioContext.bind(this), true);
				clearInterval(this.tryToResumeIntervalId);
				this.tryToResumeIntervalId = -1;
			}
		}
		onMusicStatechange() {
			if (this.musicAudio.isSuspend() && !this.isMuted && !this.bePauseMusic && this.tryToResumeIntervalId ===
				-1) {
				window.document.addEventListener("mousedown", this.tryToResumeAudioContext.bind(this), true);
				window.document.addEventListener("touchstart", this.tryToResumeAudioContext.bind(this), true);
				this.tryToResumeIntervalId = setInterval(this.tryToResumeAudioContext.bind(this), 0.2e3);
			}
		}
		onSoundStatechange() {
			if (this.soundAudio.isSuspend() && !this.isMuted && !this.bePauseSound && this.tryToResumeIntervalId ===
				-1) {
				window.document.addEventListener("mousedown", this.tryToResumeAudioContext.bind(this), true);
				window.document.addEventListener("touchstart", this.tryToResumeAudioContext.bind(this), true);
				this.tryToResumeIntervalId = setInterval(this.tryToResumeAudioContext.bind(this), 0.2e3);
			}
		}
		set muted(b) {
			this.isMuted = b;
			if (this.isMuted) {
				this.musicAudio.suspend();
				this.soundAudio.suspend();
			} else {
				if (this.tryToResumeIntervalId == -1) {
					this.tryToResumeIntervalId = setInterval(this.tryToResumeAudioContext.bind(this), 0.2e3);
				}

			}
		}

		get muted() {
			return this.isMuted;
		}

		set pause(b) {
			this.pauseSound = b;
			this.pauseMusic = b;
			if (!b) {
				this.soundAudio.stopAllNoLoop();
			}
		}
		get pause() {
			return this.pauseSound || this.pauseMusic;
		}

		set pauseSound(b) {
			this.bePauseSound = b;
			if (this.bePauseSound) {
				this.soundAudio.suspend();
			} else {
				if (this.isMuted)
					return;
				this.soundAudio.resume();
			}
		}
		get pauseSound() {
			return this.bePauseSound;
		}
		get pauseMusic() {
			return this.bePauseMusic;
		}
		set pauseMusic(b) {
			this.bePauseMusic = b;
			if (this.bePauseMusic) {
				this.musicAudio.suspend();
			} else {
				if (this.isMuted)
					return;
				this.musicAudio.resume();
			}
		}
		stopAll() {
			this.musicAudio.stopAll();
			this.soundAudio.stopAll();
		}
		parse(url, data, onComplete) {
			this.soundAudio.parse(url, data);
		}
		playMusic(url) {
			this.musicAudio.stopAll();
			this.musicAudio.playMusic(url);
		}
		stopMusic() {
			this.musicAudio.stopAll();
		}
		stopSound(url) {
			this.soundAudio.stop(url);
		}
		set musicVolume(vlaue) {
			this.musicAudio.musicVolume = vlaue;
		}
		get musicVolume() {
			return this.musicAudio.musicVolume;
		}
		playSound(url, loop = false, singleton = false) {
			if (!this.beEnabled)
				return;
			this.soundAudio.play(url, loop, singleton);
		}
	}
	class WebAudioSource { }
	class WebAudioContext {
		constructor() {
			this.volume = 100;
			this._audioInstances = new Map();
			this._musicVolume = 100;
			window.AudioContext = window.AudioContext || window["webkitAudioContext"];
			this.context = new AudioContext();
		}
		getContext() {
			return this.context;
		}
		isSuspend() {
			return this.context.state === "suspended";
		}
		suspend() {
			return this.context.suspend();
		}
		resume() {
			return this.context.resume();
		}

		stopAllNoLoop() {
			const values = this._audioInstances.values();
			for (const sound of values) {
				const instance = sound.instance;
				if (instance.source.buffer && !instance.source.loop) {
					try {
						instance.source.stop(this.context.currentTime);
					} catch (e) {
						instance.source.disconnect();
					}
					instance.source.onended = (function () { });
					instance.setup();
				}
			}
		}
		stopAll() {
			const values = this._audioInstances.values();
			for (const sound of values) {
				const instance = sound.instance;
				if (instance.source.buffer) {
					try {
						instance.source.stop(this.context.currentTime);
					} catch (e) {
						instance.source.disconnect();
					}
					instance.source.onended = (function () { });
					instance.setup();
				}
			}
		}
		stop(url) {
			if (this._audioInstances.has(url)) {
				const sound = this._audioInstances.get(url);
				this._stopSound(sound);
			}
		}
		_stopSound(sound) {
			const instance = sound.instance;
			if (instance.source.buffer) {
				try {
					instance.source.stop(this.context.currentTime);
				} catch (e) {
					instance.source.disconnect();
				}
				instance.source.onended = (function () { });
				instance.setup();
			}
		}
		playMusic(url) {
			if (this._music) {
				this._stopSound(this._music);
			}
			if (this._audioInstances.has(url)) {
				this._music = this._audioInstances.get(url);
				this.musicVolume = this._musicVolume;
				this.play(url, true);
			} else {
				this.downloadArrayBuffer(url, () => {
					this.playMusic(url);
				});
			}
		}
		stopMusic() {
			if (this._music) {
				this._stopSound(this._music);
			}
		}
		set musicVolume(vlaue) {
			this._musicVolume = vlaue;
			if (this._music) {
				this._music.instance.gain.gain.value = this._musicVolume / 100;
			}
		}
		get musicVolume() {
			return this._musicVolume;
		}
		play(url, loop = false, singleton = false) {
			if (this._audioInstances.has(url)) {
				const sound = this._audioInstances.get(url);
				const instance = sound.instance;
				if (singleton && !instance.ended)
					return;
				this.stop(url);
				if (sound.buffer) {
					try {
						if (window.WebAudioEngine.pause && !loop) {
							return;
						}
						instance.playBuffer(this.context.currentTime, sound.buffer);
						instance.source.loop = loop;
					} catch (e) {
						console.error("playBuffer error. Exception: " + e);
					}
				}
			} else {
				this.downloadArrayBuffer(url, () => {
					this.play(url, loop);
				});
			}
		}
		load(urls, onComplete) {
			let t = urls.length;
			let d = 0;
			for (let i = 0; i < urls.length; i++) {
				const url = urls[i];
				this.downloadArrayBuffer(url, () => {
					d++;
					if (d >= t) {
						onComplete && onComplete();
					}
				});
			}
		}
		setThreeD(url) {
			if (this._audioInstances.has(url)) {
				const sound = this._audioInstances.get(url);
				sound.instance.threeD = true;
			}
		}
		createSoundInstance() {
			let audioContext = this.context;
			const instance = {
				gain: audioContext.createGain(),
				panner: audioContext.createPanner(),
				threeD: false,
				ended: false,
				playBuffer: (function (delay, buffer, offset) {
					this.source.buffer = buffer;
					var chan = this;
					this.ended = false;
					this.source.onended = (function () {
						chan.setup();
						chan.ended = true;
					});
					this.source.start(delay, offset);
				}),
				setup: (function () {
					this.source = audioContext.createBufferSource();
					this.setupPanning();
				}),
				setupPanning: (function () {
					if (this.threeD) {
						this.source.disconnect();
						this.source.connect(this.panner);
						this.panner.connect(this.gain);
					} else {
						this.panner.disconnect();
						this.source.connect(this.gain);
					}
				})
			};
			instance.panner.rolloffFactor = 0;
			instance.gain.connect(this.context.destination);
			instance.setup();
			return instance;
		}
		parse(url, data, onComplete) {
			const sound = new WebAudioSource();
			sound.url = url;
			sound.instance = this.createSoundInstance();
			this._audioInstances.set(url, sound);
			this.context.decodeAudioData(data, function (buffer) {
				sound.buffer = buffer;
				onComplete && onComplete();
			}, function (e) {
				sound.error = true;
				onComplete && onComplete();
				console.log("Decode error." + sound.url);
			});
		}
		downloadArrayBuffer(url, onComplete) {
			if (this._audioInstances.has(url)) {
				onComplete && onComplete();
				return;
			}
			const t = this;
			var xhr = new XMLHttpRequest();
			xhr.open('GET', url, true);
			xhr.responseType = "arraybuffer";
			xhr.onload = function () {
				if (xhr.status === 200 || xhr.status === 0) {
					t.parse(url, xhr.response, onComplete);
				} else {
					throw "no response";
				}
			};
			xhr.onerror = function () {
				onComplete && onComplete();
				throw "no response";
			};
			xhr.ontimeout = function () {
				onComplete && onComplete();
			};
			xhr.onabort = function () {
				onComplete && onComplete();
			};
			xhr.send(null);
		}
	}

	const audioEngine = window.WebAudioEngine = new WebAudioEngine();


	// var WebAudioEngine$1 = 



	class platform {
		constructor() {
			this.canNavigateActive_ = false;
			this.screen_ = "";
			this.action_ = "";
			this.to_ = "";
			this.prompt_ = null;
			this.initialized_ = false;
			this.needStartUp = true;
			this.initData();

		}



		static getInstance() {
			if (!this._instance) {
				this._instance = new platform();
			}
			return this._instance;
		}
		initData() {
			let canvas = document.getElementById("layaCanvas");
			if (canvas) {
				canvas.addEventListener("mouseup", this.onNavigate_.bind(this));
				canvas.addEventListener("touchend", this.onNavigate_.bind(this));
			}
		}
		onNavigate_() {
			// if (YYGGames.isGamedistribution) {
			//     return;
			// }
			if (this.canNavigateActive_) {
				YYGGames.navigate(this.screen_, this.action_, this.to_);
			}
			this.canNavigateActive_ = false;
		}

		getStorageSync(key) {
			let value = null;
			try {
				let v = Laya.LocalStorage.getItem(key);
				value = JSON.parse(v);
			} catch (error) {

			}

			return value
		}
		setStorageSync(key, value) {
			return Laya.LocalStorage.setItem(key, JSON.stringify(value));
		}

		navigate(screen_, action_, to_) {
			if (this.canNavigateActive_ === false) {
				this.screen_ = screen_;
				this.action_ = action_;
				this.to_ = to_;
				this.canNavigateActive_ = true;
			}
		}

		onblur() {
			audioEngine.muted = true;
		}

		onfocus() {
			audioEngine.muted = false;
		}

		//插屏广告
		showInterstitial(complete) {
			// console.log("插屏广告")
			// complete && complete()
			// return;
			YYGGames.showInterstitial({
				beforeShowAd: () => {
					window.WebAudioEngine.adShowing = true;
					this.onblur();
					Laya.timer.scale = 0;
					Laya.stage.renderingEnabled = false //停止渲染
					Laya.updateTimer && Laya.updateTimer.pause() //停止onUpdate
					Laya.physicsTimer && Laya.physicsTimer.pause() //停止物理
					// window.document.getElementById("advertisement") && (window.document.getElementById("advertisement").style.display = "");
				},
				afterShowAd: () => {
					window.focus();
					this.onfocus();
					window.WebAudioEngine.adShowing = false;
					Laya.timer.scale = 1;
					Laya.stage.renderingEnabled = true //恢复渲染
					Laya.updateTimer && Laya.updateTimer.resume() //恢复onUpdate
					Laya.physicsTimer && Laya.physicsTimer.resume() //恢复物理
					// window.document.getElementById("advertisement") && (window.document.getElementById("advertisement").style.display = "none");
					complete && complete();
				}
			});

		}
		//复活
		showReward(success, failure, com) {
			// console.log("激励广告")
			// success && success()
			// return;
			if (!YYGGames.canShowReward()) {
				this.prompt("No Available Video");
				com && com();
				// this.showNoVideo();
				return;
			}
			YYGGames.showReward({
				beforeShowAd: () => {
					window.WebAudioEngine.adShowing = true;
					this.onblur();
					Laya.timer.scale = 0;
					Laya.stage.renderingEnabled = false //停止渲染
					Laya.updateTimer && Laya.updateTimer.pause() //停止onUpdate
					Laya.physicsTimer && Laya.physicsTimer.pause() //停止物理
					// window.document.getElementById("advertisement") && (window.document.getElementById("advertisement").style.display = "");
				},
				afterShowAd: () => {
					window.focus();
					this.onfocus();
					window.WebAudioEngine.adShowing = false;
					Laya.timer.scale = 1;
					Laya.stage.renderingEnabled = true //恢复渲染
					Laya.updateTimer && Laya.updateTimer.resume() //恢复onUpdate
					Laya.physicsTimer && Laya.physicsTimer.resume() //恢复物理
					// window.document.getElementById("advertisement") && (window.document.getElementById("advertisement").style.display = "none");
					// complete && complete();
				},
				rewardComplete: () => {

					success && success();
					com && com();
					com = null;
					success = null;
				},
				rewardDismissed: () => {

					if (failure) {
						failure();
						com && com();
						com = null;
						failure = null;
					}
					// else {
					// if (event == YYG.Event.AD_SKIPPED) {
					this.prompt("Pls watch the ad completely, so that you can claim your reward");
					// }
					// }
				}
			});
		}

		initList(appList) {
			// if (YYGGames.isGamedistribution) {
			//     appList.visible = false;
			//     return;
			// }
			// appList.renderHandler = new Laya.Handler(appList, function (e) {
			// 	e.offAll(Laya.Event.MOUSE_DOWN);
			// 	e.on(Laya.Event.MOUSE_DOWN, e, () => {
			// 		platform.getInstance().navigate("GAME", "MORE", e.dataSource.id)
			// 	});
			// })
			// appList.array = platform.getInstance().getForgames();
		}
		prompt(msg, duration) {
			if (!this.prompt_) {
				this.prompt_ = document.createElement('div');
				this.prompt_.style.cssText =
					"font-family:siyuan;max-width:80%;padding:10px 10px 10px 10px;min-height:40px;color: rgb(255, 255, 255);line-height: 20px;text-align:center;border-radius: 4px;position: fixed;top: 40%;left: 50%;transform: translate(-50%, -50%);z-index: 999999;background: rgba(0, 0, 0,.7);font-size: 16px;";
				document.body.appendChild(this.prompt_);
			}
			this.prompt_.innerHTML = msg;
			let canvas = document.getElementById("layaCanvas");
			if (canvas) {
				console.log("this.prompt_.style.width", this.prompt_.style)
				console.log("this.prompt_.style.width", canvas.width)
				this.prompt_.style.maxWidth = canvas.width * 0.8;
			}
			duration = isNaN(duration) ? 2000 : duration;
			this.prompt_.style.display = "inline";
			this.prompt_.style.opacity = '1';
			setTimeout(function () {
				var d = 0.5;
				this.prompt_.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d +
					's ease-in';
				this.prompt_.style.opacity = '0';
				this.prompt_.style.display = "none";
			}.bind(this), duration);
		}
		getForgames() {
			let sforgames = YYGGames.forgames || []; // YYGGames.forgames || []
			// {
			//     thumb:"adsfafa.png"
			// }
			let forgames = sforgames.slice();
			for (let i = 0, length = forgames.length; i < length; i++) {
				const random = Math.floor(Math.random() * (i + 1));
				const item = forgames[random];
				forgames[random] = forgames[i];
				forgames[i] = item;
			}
			return console.log(1);
		}

		createLogo() {
			if (!Laya || !Laya.Image) {
				return null;
			}
			if (!window.yad) {
				const yad = new Laya.Image();
				yad.skin = "";
				yad.zOrder = 2e5;
				window.yad = yad;
			}
			return window.yad;
		}

		/**
		 * 启动YAD——SDK
		 * @param {*} name 
		 * @param {*} complete 
		 */
		yadstartup(name, complete) {
			if (!this.needStartUp) {
				complete && complete();
			}
			if (this.initialized_) return;
			platform.getInstance().showSplash();
			platform.getInstance().createLogo();
			this.createNoVideo();
			this.createLoading();
			window.WebAudioEngine.init().then(() => {
				Laya.SoundManager.playMusic = function (url) {
					window.WebAudioEngine && window.WebAudioEngine.playMusic(url);
				}
				Laya.SoundManager.playSound = function (url, loop = false) {
					if (typeof (loop) != "boolean") {
						window.WebAudioEngine && window.WebAudioEngine.playSound(url);
					} else {
						window.WebAudioEngine && window.WebAudioEngine.playSound(url, loop);
					}
				}
				Laya.SoundManager.stopMusic = function () {
					window.WebAudioEngine && window.WebAudioEngine.stopMusic();
				}
				Laya.SoundManager.stopSound = function (url) {
					window.WebAudioEngine && window.WebAudioEngine.stopSound(url);
				}
			})


			//临时锁死
			this.initialized_ = true;
			Laya.loader.load("cnf.json", Laya.Handler.create(this, (res) => {
				YYGGames.startupByYad({
					appName: name,
					config: res,
					complete: () => {
						const platformType = YYGGames.getAdPlatformType();
						window.scrollList = this.scrollList();
						window.box_adTwo = this.box_adTwo();
						switch (platformType) {
							case AdPlatformType.en_GAMEDISTRIBUTION:
							case AdPlatformType.en_XIAOMI:
								window.yad && (window.yad.scale(0, 0), window.yad
									.removeSelf());
								break;
							default:
								window.yad && Laya.stage.addChild(window.yad);
								window.yad.on(Laya.Event.MOUSE_DOWN, window.yad, (e) => {
									e.stopPropagation();
									platform.getInstance().navigate("GAME", "LOGO");
								});
								break;
						}
						this.needStartUp = false;
						complete && complete();
					}
				});
			}))
		}

		showBanner(data) {
			if (data) {
				YYGGames.showBanner(data)
			} else {
				YYGGames.showBanner()
			}
		}
		hideBanner() {
			YYGGames.hideBanner()
		}

		showSplash(data) {
			if (data) {
				YYGGames.showSplash(data)
			} else {
				YYGGames.showSplash()
			}
		}
		hideSplash() {
			YYGGames.hideSplash()
		}


		/**
		 * 启动CARGAMES——SDK
		 * @param {*} name 
		 * @param {*} complete 
		 */
		cargamesstartup(name, complete) {
			if (!this.needStartUp) {
				complete && complete();
			}
			if (this.initialized_) return;
			platform.getInstance().showSplash();
			platform.getInstance().createLogo();
			this.createNoVideo();
			this.createLoading();
			window.WebAudioEngine.init().then(() => {
				Laya.SoundManager.playMusic = function (url) {
					window.WebAudioEngine && window.WebAudioEngine.playMusic(url);
				}
				Laya.SoundManager.playSound = function (url, loop = false) {
					window.WebAudioEngine && window.WebAudioEngine.playSound(url);
				}
				Laya.SoundManager.stopMusic = function () {
					window.WebAudioEngine && window.WebAudioEngine.stopMusic();
				}
				Laya.SoundManager.stopSound = function (url) {
					window.WebAudioEngine && window.WebAudioEngine.stopSound(url);
				}
			})
			//临时锁死
			this.initialized_ = true;
			Laya.loader.load("cnf.json", Laya.Handler.create(this, (res) => {
				YYGGames.startupByCargames({
					appName: name,
					config: res,
					complete: () => {
						const platformType = YYGGames.getAdPlatformType();
						window.scrollList = this.scrollList();
						window.box_adTwo = this.box_adTwo();
						Laya.stage.addChild(window.scrollList);
						switch (platformType) {
							case AdPlatformType.en_GAMEDISTRIBUTION:
							case AdPlatformType.en_XIAOMI:
								window.yad && (window.yad.scale(0, 0), window.yad
									.removeSelf());
								break;
							default:
								window.yad && Laya.stage.addChild(window.yad);
								window.yad.on(Laya.Event.MOUSE_DOWN, window.yad, (e) => {
									e.stopPropagation();
									platform.getInstance().navigate("GAME", "LOGO");
								});
								break;
						}
						this.needStartUp = false;
						complete && complete();
					}
				});
			}))
		}


		puzzlegamestartup(name, complete) {
			if (!this.needStartUp) {
				complete && complete();
			}
			if (this.initialized_) return;
			platform.getInstance().showSplash();
			platform.getInstance().createLogo();
			this.createNoVideo();
			this.createLoading();
			window.WebAudioEngine.init().then(() => {
				Laya.SoundManager.playMusic = function (url) {
					window.WebAudioEngine && window.WebAudioEngine.playMusic(url);
				}
				Laya.SoundManager.playSound = function (url) {
					window.WebAudioEngine && window.WebAudioEngine.playSound(url);
				}
				Laya.SoundManager.stopMusic = function (url) {
					window.WebAudioEngine && window.WebAudioEngine.stopMusic();
				}
			})
			//临时锁死
			this.initialized_ = true;
			Laya.loader.load("cnf.json", Laya.Handler.create(this, (res) => {
				YYGGames.startup({
					channel: 5,
					appName: name,
					config: res,
					complete: () => {
						const platformType = YYGGames.getAdPlatformType();
						window.scrollList = this.scrollList();
						window.box_adTwo = this.box_adTwo();
						switch (platformType) {
							case AdPlatformType.en_GAMEDISTRIBUTION:
							case AdPlatformType.en_XIAOMI:
								window.yad && (window.yad.scale(0, 0), window.yad
									.removeSelf());
								break;
							default:
								window.yad && Laya.stage.addChild(window.yad);
								window.yad.on(Laya.Event.MOUSE_DOWN, window.yad, (e) => {
									e.stopPropagation();
									platform.getInstance().navigate("GAME", "LOGO");
								});
								break;
						}
						this.needStartUp = false;
						complete && complete();
					}
				});
			}))
		}


		//只能在Laya引擎使用
		createNoVideo() {
			if (!Laya.Prefab || !Laya.Script) {
				return;
			}
			let noVideoJson = {
				"x": 0,
				"type": "Box",
				"selectedBox": 3,
				"selecteID": 4,
				"searchKey": "Box",
				"props": {
					"y": 0,
					"x": 0,
					"top": 0,
					"right": 0,
					"presetID": 1,
					"preset": "laya/pages/Prefab/NoVideo.prefab",
					"mouseEnabled": true,
					"left": 0,
					"isPresetRoot": true,
					"bottom": 0
				},
				"nodeParent": -1,
				"maxID": 10,
				"label": "Box(NoVideo)",
				"isOpen": true,
				"isDirectory": true,
				"isAniNode": true,
				"hasChild": true,
				"compId": 3,
				"child": [{
					"x": 15,
					"type": "Sprite",
					"searchKey": "Sprite,spr_tip,spr_tip",
					"props": {
						"y": 300,
						"x": 400,
						"width": 740,
						"var": "spr_tip",
						"presetID": 2,
						"preset": "laya/pages/Prefab/NoVideo.prefab",
						"pivotY": 270,
						"pivotX": 370,
						"name": "spr_tip",
						"height": 540
					},
					"nodeParent": 3,
					"label": "spr_tip",
					"isOpen": true,
					"isDirectory": true,
					"isAniNode": true,
					"hasChild": true,
					"compId": 4,
					"child": [{
						"x": 30,
						"type": "Rect",
						"searchKey": "Rect",
						"props": {
							"y": 0,
							"x": 0,
							"width": 740,
							"presetID": 3,
							"preset": "laya/pages/Prefab/NoVideo.prefab",
							"height": 540,
							"fillColor": "#000000"
						},
						"nodeParent": 4,
						"label": "Rect(NoVideo)",
						"isDirectory": false,
						"isAniNode": true,
						"hasChild": false,
						"compId": 6,
						"child": []
					},
					{
						"x": 30,
						"type": "Label",
						"searchKey": "Label",
						"props": {
							"y": 30,
							"x": 0,
							"width": 740,
							"valign": "middle",
							"text": "VIDEO",
							"presetID": 4,
							"preset": "laya/pages/Prefab/NoVideo.prefab",
							"height": 76,
							"fontSize": 80,
							"color": "#ffffff",
							"align": "center"
						},
						"nodeParent": 4,
						"label": "Label(NoVideo)",
						"isDirectory": false,
						"isAniNode": true,
						"hasChild": false,
						"compId": 7,
						"child": []
					},
					{
						"x": 30,
						"type": "Label",
						"searchKey": "Label",
						"props": {
							"y": 163,
							"x": 0,
							"width": 740,
							"valign": "middle",
							"text": "No Video Available",
							"presetID": 5,
							"preset": "laya/pages/Prefab/NoVideo.prefab",
							"height": 170,
							"fontSize": 40,
							"color": "#ffffff",
							"align": "center"
						},
						"nodeParent": 4,
						"label": "Label(NoVideo)",
						"isDirectory": false,
						"isAniNode": true,
						"hasChild": false,
						"compId": 8,
						"child": []
					},
					{
						"x": 30,
						"type": "Label",
						"searchKey": "Label",
						"props": {
							"y": 356,
							"x": 0,
							"width": 740,
							"valign": "middle",
							"text": "Click anywhere to close",
							"presetID": 6,
							"preset": "laya/pages/Prefab/NoVideo.prefab",
							"height": 170,
							"fontSize": 35,
							"color": "#ffffff",
							"align": "center"
						},
						"nodeParent": 4,
						"label": "Label(NoVideo)",
						"isDirectory": false,
						"isAniNode": true,
						"hasChild": false,
						"compId": 9,
						"child": []
					}
					]
				}],
				"animations": [{
					"nodes": [],
					"name": "ani1",
					"id": 1,
					"frameRate": 24,
					"action": 0
				}]
			}
			class noVideoScript extends Laya.Script {
				constructor() {
					super();
				}

				onEnable() {
					this.owner.top = 0;
					this.owner.bottom = 0;
					this.owner.left = 0;
					this.owner.right = 0;

					this.spr_tip = this.owner.getChildByName("spr_tip");

					if (this.owner.width > this.owner.height) {
						this.spr_tip.scale(this.owner.height / 1920, this.owner.height / 1920);
					} else {
						this.spr_tip.scale(this.owner.width / 1080, this.owner.width / 1080);
					}

					this.spr_tip.pos(this.owner.width / 2, this.owner.height / 2);
					this.owner.on(Laya.Event.CLICK, this, this.closePer);
				}

				closePer() {
					platform.getInstance().closeNoVideo();
				}
			}
			let noVideoPer = new Laya.Prefab();
			// Laya.loader.load(noVideoJson, Laya.Handler.create(this, (obj) => {
			noVideoPer.json = noVideoJson;
			this.noVideoPer = noVideoPer.create();
			this.noVideoPer.zOrder = 199999;
			this.noVideoPer.addComponent(noVideoScript);
			// this.showNoVideo();
			// }))
		}


		showNoVideo() {
			this.noVideoPer && Laya.stage.addChild(this.noVideoPer);
		}

		closeNoVideo() {
			this.noVideoPer && this.noVideoPer.removeSelf();
		}


		createLoading() {
			if (!Laya.Prefab || !Laya.Script) {
				return;
			}
			let noVideoJson = {
				"x": 15,
				"type": "Box",
				"searchKey": "Box,box_clickLayer",
				"props": {
					"var": "box_clickLayer",
					"top": 0,
					"right": 0,
					"mouseEnabled": true,
					"left": 0,
					"bottom": 0
				},
				"nodeParent": 2,
				"label": "box_clickLayer",
				"isOpen": true,
				"isDirectory": true,
				"isAniNode": true,
				"hasChild": true,
				"compId": 131,
				"child": [{
					"x": 30,
					"type": "Box",
					"searchKey": "Box",
					"props": {
						"top": 0,
						"right": 0,
						"left": 0,
						"bottom": 0,
						"bgColor": "#000000",
						"alpha": 0.5
					},
					"nodeParent": 131,
					"label": "Box",
					"isOpen": true,
					"isDirectory": false,
					"isAniNode": true,
					"hasChild": false,
					"compId": 132,
					"child": []
				},
				{
					"x": 30,
					"type": "Label",
					"searchKey": "Label",
					"props": {
						"y": 0,
						"x": 0,
						"valign": "middle",
						"text": "LOADING\\nPLEASE WAIT…",
						"right": 0,
						"left": 0,
						"fontSize": 50,
						"color": "#ffffff",
						"centerY": 0,
						"align": "center"
					},
					"nodeParent": 131,
					"label": "Label",
					"isDirectory": false,
					"isAniNode": true,
					"hasChild": false,
					"compId": 133,
					"child": []
				}
				]
			}
			class noVideoScript extends Laya.Script {
				constructor() {
					super();
				}

				onEnable() {

				}

				closePer() {
					platform.getInstance().closeNoVideo();
				}
			}
			let noVideoPer = new Laya.Prefab();
			// Laya.loader.load(noVideoJson, Laya.Handler.create(this, (obj) => {
			noVideoPer.json = noVideoJson;
			this.loadingPer = noVideoPer.create();
			this.loadingPer.zOrder = 199998;
			this.loadingPer.addComponent(noVideoScript);
			// this.showNoVideo();
			// }))
		}


		showLoading() {
			this.loadingPer && Laya.stage.addChild(this.loadingPer);
		}

		closeLoading() {
			this.loadingPer && this.loadingPer.removeSelf();
		}

		createList() {
			class item extends Laya.Box {
				constructor() {
					super();
					this.img = new Laya.Image();
					this.img.name = "thumb";
					this.size(400, 300);
					this.img.size(400, 300);
					this.addChild(this.img);
				}
			}

			let m_List = new Laya.List();
			m_List.size(800, 600);
			m_List.itemRender = item;
			return m_List;
		}

		scrollList() {
			if (!Laya || !Laya.stage) {
				return null;
			}
			if (YYGGames.getAdPlatformType() == AdPlatformType.en_GAMEDISTRIBUTION || YYGGames
				.getAdPlatformType() == AdPlatformType.en_XIAOMI) {
				let box = new Laya.Box();
				box.setSize = function () { };
				return box;
			}

			if (!this._scrollList) {
				let scrollListJson = {
					"x": 0,
					"type": "List",
					"selectedBox": 144,
					"selecteID": 120,
					"searchKey": "List,scrollAdList",
					"props": {
						"y": 0,
						"x": 0,
						"width": 880,
						"repeatY": 1,
						"presetID": 1,
						"preset": "laya/pages/prefab/scrollList.prefab",
						"name": "scrollAdList",
						"isPresetRoot": true,
						"height": 170,
						"hScrollBarSkin": " ",
						"anchorY": 0.5,
						"anchorX": 0.5
					},
					"nodeParent": -1,
					"maxID": 145,
					"label": "scrollAdList",
					"isOpen": true,
					"isDirectory": true,
					"isAniNode": true,
					"hasChild": true,
					"compId": 144,
					"child": [{
						"x": 15,
						"type": "Image",
						"searchKey": "Image,img_ListBg",
						"props": {
							"zOrder": -10,
							"width": 900,
							"skin": "di2.png",
							"sizeGrid": "30, 30, 30, 30",
							"presetID": 2,
							"preset": "laya/pages/prefab/scrollList.prefab",
							"name": "img_ListBg",
							"height": 190,
							"centerY": 0,
							"centerX": 0
						},
						"nodeParent": 144,
						"label": "img_ListBg",
						"isDirectory": false,
						"isAniNode": false,
						"hasChild": false,
						"compId": 120,
						"child": []
					},
					{
						"x": 15,
						"type": "Box",
						"searchKey": "Box",
						"props": {
							"x": 0,
							"width": 220,
							"renderType": "render",
							"presetID": 3,
							"preset": "laya/pages/prefab/scrollList.prefab",
							"height": 170
						},
						"nodeParent": 144,
						"label": "Box(scrollList)",
						"isOpen": true,
						"isDirectory": true,
						"isAniNode": false,
						"hasChild": true,
						"compId": 119,
						"child": [{
							"x": 30,
							"type": "Image",
							"searchKey": "Image,thumb",
							"props": {
								"width": 200,
								"presetID": 4,
								"preset": "laya/pages/prefab/scrollList.prefab",
								"name": "thumb",
								"height": 150,
								"centerY": 0,
								"centerX": 0,
								"anchorY": 0.5,
								"anchorX": 0.5
							},
							"nodeParent": 119,
							"label": "thumb",
							"isOpen": true,
							"isDirectory": true,
							"isAniNode": false,
							"hasChild": true,
							"compId": 121,
							"child": [{
								"x": 45,
								"type": "Image",
								"searchKey": "Image",
								"props": {
									"y": 75,
									"x": 100,
									"width": 200,
									"skin": "di1.png",
									"sizeGrid": "30,30,30,30",
									"renderType": "mask",
									"presetID": 5,
									"preset": "laya/pages/prefab/scrollList.prefab",
									"height": 150,
									"anchorY": 0.5,
									"anchorX": 0.5
								},
								"nodeParent": 121,
								"label": "Image(scrollList)",
								"isDirectory": false,
								"isAniNode": false,
								"hasChild": false,
								"compId": 122,
								"child": []
							}]
						}]
					}
					],
					"animations": [{
						"nodes": [],
						"name": "ani1",
						"id": 1,
						"frameRate": 24,
						"action": 0
					}]
				}
				class scrollListScript extends Laya.Script {
					constructor() {
						super();
						this.imgArr = [];
						this.scaleNum = [0.83, 0.83];
						this.sizeTran = [200, 150, true];
					}

					onEnable() {
					}
					itemRenderFun(e, index) {
						let adimg = e.getChildByName("thumb");
						e.offAll();
						adimg.offAll();
						e.on(Laya.Event.MOUSE_OVER, e, () => {
							e.zOrder = 100;
						})
						e.on(Laya.Event.MOUSE_OUT, e, () => {
							e.zOrder = index;
						})
						adimg.on(Laya.Event.MOUSE_OVER, e, () => {
							adimg.scale(1.1, 1.1);
							this.endAni();
							// this.checkPoints(e);
						});
						adimg.on(Laya.Event.MOUSE_OUT, e, () => {
							adimg.scale(1, 1);
							Laya.timer.frameLoop(1, this, this.loopList);
						});
						adimg.on(Laya.Event.MOUSE_DOWN, e, (event) => {
							event.stopPropagation();
							platform.getInstance().navigate("GAME", "MORE", e.dataSource.id)
						});
						let img_AdMask = adimg.mask;
						e.width = this.sizeTran[0] + 20;
						e.height = this.sizeTran[1] + 20;
						e.x = (this.sizeTran[0] + 20) * index;
						if (this.sizeTran[2]) {
							img_AdMask.width = adimg.width = this.sizeTran[0];
							img_AdMask.height = adimg.height = this.sizeTran[1];
						} else {
							let scaleNum = 200 / this.sizeTran[0] < 150 / this.sizeTran[1] ? 200 / this
								.sizeTran[0] : 150 / this.sizeTran[1];
							adimg.width = 200 / scaleNum;
							adimg.height = 150 / scaleNum;
							img_AdMask.width = this.sizeTran[0];
							img_AdMask.height = this.sizeTran[1];
						}
						// adimg.x = e.width / 2;
						// adimg.y = e.height / 2;
						img_AdMask.x = adimg.width / 2;
						img_AdMask.y = adimg.height / 2;
					}
					/**
					 * @function setSize 设置单个广告宽高
					 * @param width 调整所需要的宽
					 * @param height  调整所需要的高
					 * @param isTranImg  广告图片是否缩放，如果缩放可能图片会变形，如果不缩放，图片不会变形，但是原图片可能会被剪裁
					 */
					setSize(width, height, isTranImg = false) {
						this.sizeTran = [width, height, isTranImg];
						if (this.img_ListBg) {
							this.owner.width = (width + 20) * 4;
							this.owner.height = height + 20;
							this.img_ListBg.width = (width + 20) * 4 + 20;
							this.img_ListBg.height = height + 40;
							// this.owner.refresh();
							this.owner.array = [];
							this.owner.array = this.listArray;
						}

					}

					loopList() {
						this.owner.scrollBar.value += 1;
						if (this.owner.scrollBar.value >= this.owner.scrollBar.max) {
							this.owner.scrollBar.value = 0;
						}
					}
					endAni() {
						Laya.timer.clearAll(this);
						Laya.Tween.clearAll(this.owner.scrollBar);
					}
					checkPoints(e) {
						// let aa = new Laya.Point(0, 0);
						// e.localToGlobal(aa, false, this.owner);
						// console.log(e.x, e.y, e.width, e.height);
					}

					onDisable() {
						if (this.imgArr.length) {
							let imgArr = JSON.parse(JSON.stringify(this.imgArr))
							Laya.loader.clearRes(imgArr)
						}
						this.imgArr = [];
						this.endAni();
						this.owner.array = [];
					}


				}
				let scrollList = new Laya.Prefab();
				// Laya.loader.load(noVideoJson, Laya.Handler.create(this, (obj) => {
				scrollList.json = scrollListJson;
				this._scrollList = scrollList.create();
				this._scrollList.zOrder = 199999;
				this._scrollList.addComponent(scrollListScript);
				this._scrollList.setSize = this._scrollList.getComponent(scrollListScript).
					setSize.bind(this._scrollList.getComponent(scrollListScript));
			}
			return this._scrollList;
		}
		box_adTwo() {
			if (!Laya || !Laya.stage) {
				return null;
			}
			if (YYGGames.getAdPlatformType() == AdPlatformType.en_GAMEDISTRIBUTION || YYGGames
				.getAdPlatformType() == AdPlatformType.en_XIAOMI) {
				let box = new Laya.Box();
				box.setSpaceX = box.setSize = function () { };
				return box;
			}

			if (!this._box_adTwo) {
				let box_adTwoJSON = {
					"x": 0,
					"type": "Box",
					"selectedBox": 150,
					"selecteID": 152,
					"searchKey": "Box,box_adTwo",
					"props": {
						"y": 0,
						"x": 0,
						"width": 1,
						"presetID": 1,
						"preset": "laya/pages/prefab/box_adTwo.prefab",
						"name": "box_adTwo",
						"isPresetRoot": true,
						"height": 1,
						"centerX": 0,
						"anchorY": 0.5,
						"anchorX": 0.5
					},
					"nodeParent": -1,
					"maxID": 153,
					"label": "box_adTwo",
					"isOpen": true,
					"isDirectory": true,
					"isAniNode": true,
					"hasChild": true,
					"compId": 146,
					"child": [{
						"x": 15,
						"type": "Image",
						"searchKey": "Image,img_ad0",
						"props": {
							"y": 0,
							"x": -310,
							"width": 220,
							"skin": "di1.png",
							"sizeGrid": "30,30,30,30",
							"presetID": 2,
							"preset": "laya/pages/prefab/box_adTwo.prefab",
							"name": "img_ad0",
							"height": 170
						},
						"nodeParent": 146,
						"label": "img_ad0",
						"isOpen": true,
						"isDirectory": true,
						"isAniNode": true,
						"hasChild": true,
						"compId": 147,
						"child": [{
							"x": 30,
							"type": "Image",
							"searchKey": "Image,img_adImg",
							"props": {
								"width": 200,
								"presetID": 3,
								"preset": "laya/pages/prefab/box_adTwo.prefab",
								"name": "img_adImg",
								"height": 150,
								"centerY": 0,
								"centerX": 0
							},
							"nodeParent": 147,
							"label": "img_adImg",
							"isOpen": true,
							"isDirectory": true,
							"isAniNode": true,
							"hasChild": true,
							"compId": 149,
							"child": [{
								"x": 45,
								"type": "Image",
								"searchKey": "Image",
								"props": {
									"width": 200,
									"skin": "di1.png",
									"sizeGrid": "30,30,30,30",
									"renderType": "mask",
									"presetID": 4,
									"preset": "laya/pages/prefab/box_adTwo.prefab",
									"height": 150,
									"anchorY": 0.5,
									"anchorX": 0.5
								},
								"nodeParent": 149,
								"label": "Image(box_adTwo)",
								"isDirectory": false,
								"isAniNode": true,
								"hasChild": false,
								"compId": 151,
								"child": []
							}]
						}]
					},
					{
						"x": 15,
						"type": "Image",
						"searchKey": "Image,img_ad1",
						"props": {
							"y": 0,
							"x": 90,
							"width": 220,
							"skin": "di1.png",
							"sizeGrid": "30,30,30,30",
							"presetID": 5,
							"preset": "laya/pages/prefab/box_adTwo.prefab",
							"name": "img_ad1",
							"height": 170
						},
						"nodeParent": 146,
						"label": "img_ad1",
						"isOpen": true,
						"isDirectory": true,
						"isAniNode": true,
						"hasChild": true,
						"compId": 148,
						"child": [{
							"x": 30,
							"type": "Image",
							"searchKey": "Image,img_adImg",
							"props": {
								"width": 200,
								"presetID": 6,
								"preset": "laya/pages/prefab/box_adTwo.prefab",
								"name": "img_adImg",
								"height": 150,
								"centerY": 0,
								"centerX": 0
							},
							"nodeParent": 148,
							"label": "img_adImg",
							"isOpen": true,
							"isDirectory": true,
							"isAniNode": true,
							"hasChild": true,
							"compId": 150,
							"child": [{
								"x": 45,
								"type": "Image",
								"searchKey": "Image",
								"props": {
									"width": 200,
									"skin": "di1.png",
									"sizeGrid": "30,30,30,30",
									"renderType": "mask",
									"presetID": 7,
									"preset": "laya/pages/prefab/box_adTwo.prefab",
									"height": 150,
									"anchorY": 0.5,
									"anchorX": 0.5
								},
								"nodeParent": 150,
								"label": "Image(box_adTwo)",
								"isDirectory": false,
								"isAniNode": true,
								"hasChild": false,
								"compId": 152,
								"child": []
							}]
						}]
					}
					],
					"animations": [{
						"nodes": [],
						"name": "ani1",
						"id": 1,
						"frameRate": 24,
						"action": 0
					}]
				}
				class box_adTwoScript extends Laya.Script {
					constructor() {
						super();
						this.imgArr = [];
						this.spaceNum = 0;
						this.sizeTran = [200, 150, true];
					}

					onEnable() {
					}
					setSpaceX(num) {
						this.spaceNum = num;
						if (this.img_ad0) {
							this.img_ad0.x = -this.img_ad0.width - this.spaceNum / 2;
							this.img_ad1.x = this.spaceNum / 2;
						}
					}
					onDisable() {
						if (this.imgArr.length) {
							let imgArr = JSON.parse(JSON.stringify(this.imgArr))
							Laya.loader.clearRes(imgArr)
						}
						this.imgArr = [];
					}
					/**
					 * @function setSize 设置单个广告宽高
					 * @param width 调整所需要的宽
					 * @param height  调整所需要的高
					 * @param isTranImg  广告图片是否缩放，如果缩放可能图片会变形，如果不缩放，图片不会变形，但是原图片可能会被剪裁
					 */
					setSize(width, height, isTranImg = false) {
						this.sizeTran = [width, height, isTranImg];
						if (this.img_ad0) {
							this.img_ad0.width = this.img_ad1.width = width + 20;
							this.img_ad0.height = this.img_ad1.height = height + 20;
							if (isTranImg) {
								this.img_ad0AdMask.width = this.img_ad1AdMask.width =
									this.img_ad0Ad.width = this.img_ad1Ad.width = width;
								this.img_ad0AdMask.height = this.img_ad1AdMask.height =
									this.img_ad0Ad.height = this.img_ad1Ad.height = height;
							} else {
								let scaleNum = 200 / width < 150 / height ? 200 / width : 150 / height;
								this.img_ad0Ad.width = this.img_ad1Ad.width = 200 / scaleNum;
								this.img_ad0Ad.height = this.img_ad1Ad.height = 150 / scaleNum;
								this.img_ad0AdMask.width = this.img_ad1AdMask.width = width;
								this.img_ad0AdMask.height = this.img_ad1AdMask.height = height;
							}
							this.img_ad0AdMask.x = this.img_ad1AdMask.x = this.img_ad0Ad.width / 2;
							this.img_ad0AdMask.y = this.img_ad1AdMask.y = this.img_ad0Ad.height / 2;
							this.setSpaceX(this.spaceNum);
						}
					}
				}
				let box_adTwo = new Laya.Prefab();
				// Laya.loader.load(noVideoJson, Laya.Handler.create(this, (obj) => {
				box_adTwo.json = box_adTwoJSON;
				this._box_adTwo = box_adTwo.create();
				this._box_adTwo.zOrder = 199999;
				this._box_adTwo.addComponent(box_adTwoScript);
				this._box_adTwo.setSpaceX = this._box_adTwo.getComponent(box_adTwoScript).
					setSpaceX.bind(this._box_adTwo.getComponent(box_adTwoScript));
				this._box_adTwo.setSize = this._box_adTwo.getComponent(box_adTwoScript).
					setSize.bind(this._box_adTwo.getComponent(box_adTwoScript));
			}
			return this._box_adTwo;
		}

	}
	platform._instance = null;
	window["platform"] = platform;

	class OtherUI {
		constructor() {
			this._box_adTwo0 = null;
			this._scrollList = null;
			OtherUI._inst = this;
		}
		// static _inst;
		static get inst() {
			if (!OtherUI._inst) {
				new OtherUI();
			}
			return OtherUI._inst;
		}
		box_adTwo() {
			if (!Laya || !Laya.stage) {
				return null;
			}
			if (YYGGames.getAdPlatformType() == AdPlatformType.en_GAMEDISTRIBUTION || YYGGames
				.getAdPlatformType() == AdPlatformType.en_XIAOMI) {
				let box = new Laya.Box();
				box.setSpaceX = box.setSize = function () { };
				return box;
			}
			if (!this._box_adTwo0) {
				this._box_adTwo0 = new Laya.Box();
				this._box_adTwo0.name = "_box_adTwo0";
				this._box_adTwo0.anchorX = this._box_adTwo0.anchorY = 0.5;
				this._box_adTwo0.zOrder = 199999;
				this._box_adTwo0.spaceXNum = 0;

				let leftAdBg = new Laya.Image();
				leftAdBg.name = "leftAdBg";
				leftAdBg.sizeGrid = "30,30,30,30";
				leftAdBg.size(220, 170);
				leftAdBg.skin = "di1.png";

				let leftAdMask = new Laya.Image();
				leftAdMask.name = "leftAdMask";
				leftAdMask.size(200, 150);
				leftAdMask.sizeGrid = "30,30,30,30";
				leftAdMask.anchorX = leftAdMask.anchorY = 0.5;
				leftAdMask.skin = "di1.png";

				let leftAd = new Laya.Image();
				leftAd.name = "leftAd";
				leftAd.size(200, 150);
				leftAd.anchorX = leftAd.anchorY = 0.5;
				leftAd.skin = "";
				leftAd.mask = leftAdMask;
				leftAdBg.addChild(leftAd);
				leftAdBg.pos(0, 0);
				leftAd.pos(leftAdBg.width / 2, leftAdBg.height / 2);
				leftAdMask.pos(leftAd.width / 2, leftAd.height / 2);

				let rightAdBg = new Laya.Image();
				rightAdBg.name = "rightAdBg";
				rightAdBg.sizeGrid = "30,30,30,30";
				rightAdBg.size(220, 170);
				rightAdBg.skin = "di1.png";

				let rightAdMask = new Laya.Image();
				rightAdMask.name = "rightAdMask";
				rightAdMask.size(200, 150);
				rightAdMask.sizeGrid = "30,30,30,30";
				rightAdMask.anchorX = rightAdMask.anchorY = 0.5;
				rightAdMask.skin = "di1.png";

				let rightAd = new Laya.Image();
				rightAd.name = "rightAd";
				rightAd.size(200, 150);
				rightAd.anchorX = rightAd.anchorY = 0.5;
				rightAd.skin = "";
				rightAd.mask = rightAdMask;
				rightAdBg.addChild(rightAd);
				rightAdBg.pos(leftAdBg.width, 0);
				rightAd.pos(rightAdBg.width / 2, rightAdBg.height / 2);
				rightAdMask.pos(rightAd.width / 2, rightAd.height / 2);

				this._box_adTwo0.centerX = 0;
				this._box_adTwo0.width = leftAdBg.width + rightAdBg.width;
				this._box_adTwo0.addChild(leftAdBg);
				this._box_adTwo0.addChild(rightAdBg);
				this._box_adTwo0.setSpaceX = this.setSpaceX.bind(this._box_adTwo0);
				this._box_adTwo0.setSize = this.setSize.bind(this._box_adTwo0);

				let adList = platform.getInstance().getForgames();
				if (!adList.length) {
					return;
				}
				let listArray = JSON.parse(JSON.stringify(adList));
				leftAd.offAll();
				rightAd.offAll();
				leftAd.skin = listArray[0].thumb;
				rightAd.skin = listArray[1].thumb;
				leftAd.on(Laya.Event.MOUSE_DOWN, this, (e) => {
					e.stopPropagation();
					platform.getInstance().navigate("GAME", "MORE", listArray[0].id);
				})
				rightAd.on(Laya.Event.MOUSE_DOWN, this, (e) => {
					e.stopPropagation();
					platform.getInstance().navigate("GAME", "MORE", listArray[1].id);
				})
				this._box_adTwo0.visible = false;
			}
			return this._box_adTwo0;
		}

		setSize(width = 200, height = 150, scaleImg = false, startResize = true) {
			let maxNum = 200;
			if (width / 200 > height / 150) {
				maxNum = width / 200;
			} else {
				maxNum = height / 150;
			}
			let realWidth = 200 // 1 / maxNum * width;
			// let realHeight = 1 / maxNum * height;
			if (this.name == "_box_adTwo0") {
				let leftAdBg = this.getChildByName("leftAdBg");
				let rightAdBg = this.getChildByName("rightAdBg");
				let leftAd = leftAdBg.getChildByName("leftAd");
				let rightAd = rightAdBg.getChildByName("rightAd");
				if (startResize) {
					leftAdBg.size(220, 170);
					rightAdBg.size(220, 170);
					leftAd.size(200, 150);
					rightAd.size(200, 150);
					leftAd.mask.size(200, 150);
					rightAd.mask.size(200, 150);
					leftAdBg.scale(1, 1);
					rightAdBg.scale(1, 1);
					leftAd.scale(1, 1);
					rightAd.scale(1, 1);
					leftAd.mask.scale(1, 1);
					rightAd.mask.scale(1, 1);
				}


				let realHeight = 200 * height / width;

				leftAdBg.size(realWidth + 20, realHeight + 20);
				rightAdBg.size(realWidth + 20, realHeight + 20);
				leftAd.mask.size(realWidth, realHeight);
				rightAd.mask.size(realWidth, realHeight);

				if (!scaleImg) {
					leftAd.size(realWidth, realHeight);
					rightAd.size(realWidth, realHeight);
				} else {
					leftAd.size(200 * maxNum, 150 * maxNum);
					rightAd.size(200 * maxNum, 150 * maxNum);
					// leftAd.mask.scale(1 / maxNum, 1 / maxNum);
					// rightAd.mask.scale(1 / maxNum, 1 / maxNum);
				}

				leftAd.pos(leftAdBg.width / 2, leftAdBg.height / 2);
				leftAd.mask.pos(leftAd.width / 2, leftAd.height / 2);
				rightAd.pos(rightAdBg.width / 2, rightAdBg.height / 2);
				rightAd.mask.pos(rightAd.width / 2, rightAd.height / 2);
				this.setSpaceX(this.spaceXNum);
			} else if (this.name == "_scrollList") {
				this.sizeArr = [width, height, scaleImg, startResize];
			}
		}

		scrollList() {
			if (!Laya || !Laya.stage) {
				return null;
			}
			if (YYGGames.getAdPlatformType() == AdPlatformType.en_GAMEDISTRIBUTION || YYGGames
				.getAdPlatformType() == AdPlatformType.en_XIAOMI) {
				let box = new Laya.Box();
				box.setSize = function () { };
				return box;
			}
			if (!this._scrollList) {
				this._scrollList = new Laya.Image();
				this._scrollList.name = "_scrollList";
				this._scrollList.skin = "di2.png";
				this._scrollList.sizeGrid = "30,30,30,30";
				this._scrollList.size(900, 190);
				this._scrollList.zOrder = 199999;
				this._scrollList.centerX = 0;
				this._scrollList.sizeArr = [200, 150, false, true];
				// this._scrollList.size(720);

				class itemAD extends Laya.Box {
					constructor() {
						super();
						this.centerY = 0;
						this.img = new Laya.Image();
						this.img.name = "img";
						this.img.anchorX = this.img.anchorY = 0.5;
						this.size(220, 170);
						this.img.size(200, 150);
						this.addChild(this.img);

						this.imgMask = new Laya.Image();
						this.imgMask.sizeGrid = "30,30,30,30";
						this.imgMask.name = "imgMask";
						this.imgMask.anchorX = this.imgMask.anchorY = 0.5;
						this.imgMask.skin = "di1.png";
						this.imgMask.size(200, 150);
						this.img.mask = this.imgMask;
						this.img.pos(this.width / 2, this.height / 2);
						this.imgMask.pos(this.img.width / 2, this.img.height / 2);
					}
				}

				let listAd = new Laya.List();
				listAd.hScrollBarSkin = " ";
				listAd.name = "listAd";
				listAd.anchorX = listAd.anchorY = 0.5;
				listAd.size(880, 170);
				listAd.scrollBar.mouseWheelEnable = false;
				listAd.scrollBar.mouseEnabled = false;
				listAd.scrollBar.touchScrollEnable = false;
				listAd.itemRender = itemAD;
				listAd.renderHandler = new Laya.Handler(this, this.renderADHandler);
				this._scrollList.addChild(listAd);
				listAd.pos(this._scrollList.width / 2, this._scrollList.height / 2);

				let adList = platform.getInstance().getForgames();
				if (!adList.length) {
					return;
				}
				let listArray = JSON.parse(JSON.stringify(adList));
				// let arr = []
				// for (let key in listArray) {
				// 	arr.push(listArray[key].thumb);
				// }
				listArray = listArray.concat(listArray.slice(0, 4));
				// Laya.loader.load(arr, Laya.Handler.create(this, () => {
				listAd.array = listArray;
				Laya.timer.frameLoop(1, this, this.loopList);
				Laya.timer.once(100, this, () => {
					listAd.refresh();
				})
				// }))
				this._scrollList.visible = false;
				this._scrollList.setSize = this.setSize.bind(this._scrollList);
			}

			return this._scrollList;
		}

		renderADHandler(box, index) {
			let data = box.dataSource;
			let img = box.getChildByName("img");
			let mask = img.mask;
			img.skin = data.thumb;

			// this._scrollList.sizeArr = [200, 150, true, true];
			if (this._scrollList.sizeArr[3]) {
				box.size(220, 170);
				box.img.size(200, 150);
				mask.size(200, 150);
				box.scale(1, 1);
				box.scale(1, 1);
				mask.scale(1, 1);
			}
			box.offAll();
			img.offAll();
			box.on(Laya.Event.MOUSE_OVER, box, () => {
				box.zOrder = 100;
			})
			box.on(Laya.Event.MOUSE_OUT, box, () => {
				box.zOrder = index;
			})
			img.on(Laya.Event.MOUSE_OVER, box, () => {
				img.scale(img.scaleX + 0.1, img.scaleY + 0.1);
				this.endAni();
				// this.checkPoints(e);
			});
			img.on(Laya.Event.MOUSE_OUT, box, () => {
				img.scale(img.scaleX - 0.1, img.scaleY - 0.1);
				Laya.timer.frameLoop(1, this, this.loopList);
			});
			img.on(Laya.Event.MOUSE_DOWN, box, (event) => {
				event.stopPropagation();
				platform.getInstance().navigate("GAME", "MORE", data.id)
			});

			let maxNum = 200;
			if (this._scrollList.sizeArr[0] / 200 > this._scrollList.sizeArr[1] / 150) {
				maxNum = this._scrollList.sizeArr[0] / 200;
			} else {
				maxNum = this._scrollList.sizeArr[1] / 150;
			}
			let realWidth = 200;
			let realHeight = 200 * this._scrollList.sizeArr[1] / this._scrollList.sizeArr[0];
			box.size(realWidth + 20, realHeight + 20);
			mask.size(realWidth, realHeight);
			if (!this._scrollList.sizeArr[2]) {
				box.img.size(realWidth, realHeight);
			} else {
				leftAd.size(200 * maxNum, 150 * maxNum);
				rightAd.size(200 * maxNum, 150 * maxNum);
			}

			img.pos(box.width / 2, box.height / 2);
			mask.pos(img.width / 2, img.height / 2);
		}
		endAni() {
			Laya.timer.clearAll(this, this.loopList);
		}

		loopList() {
			if (!this._scrollList) {
				this.endAni();
				return;
			}
			let scrollList = this._scrollList.getChildByName("listAd");
			scrollList.scrollBar.value += 1;
			if (scrollList.scrollBar.value >= scrollList.scrollBar.max) {
				scrollList.scrollBar.value = 0;
			}
		}

		visibleChangeFun(t) {
			if (t.name == "_box_adTwo0") {
				let leftAdBg = t.getChildByName("leftAdBg");
				let rightAdBg = t.getChildByName("rightAdBg");
				let adList = platform.getInstance().getForgames();
				if (!adList.length) {
					return;
				}
				let listArray = JSON.parse(JSON.stringify(adList));
				leftAdBg.offAll();
				rightAdBg.offAll();
				leftAdBg.getChildByName("leftAd").skin = listArray[0].thumb;
				rightAdBg.getChildByName("rightAd").skin = listArray[1].thumb;
				leftAdBg.on(Laya.Event.MOUSE_DOWN, t, (e) => {
					e.stopPropagation();
					platform.getInstance().navigate("GAME", "MORE", listArray[0].id);
				})
				rightAdBg.on(Laya.Event.MOUSE_DOWN, t, (e) => {
					e.stopPropagation();
					platform.getInstance().navigate("GAME", "MORE", listArray[1].id);
				})
			}
		}
		setSpaceX(spaceX) {
			if (this.name == "_box_adTwo0") {
				let leftAdBg = this.getChildByName("leftAdBg");
				let rightAdBg = this.getChildByName("rightAdBg");
				rightAdBg.pos(leftAdBg.width + spaceX, 0);
				this.width = leftAdBg.width + rightAdBg.width + spaceX;
				this.spaceXNum = spaceX;
			}
		}
	}
}()
