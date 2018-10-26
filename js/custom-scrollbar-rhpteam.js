;(function(root, factory) {
	/* Phan nay de xac dinh khi dung thu vien chung ta sẽ import duoc theo ten tuy bien, hoac la ten mac dinh
	*/
	if (typeof exports === 'object') {
		module.exports = factory(window, document)
	} else {
		root.RhpScrollbar = factory(window, document)
	}
})(this, function(w, d) {
	// Reset cac hieu ung
	var raf = w.requestAnimationFrame || w.setImmediate || function(c) { return setTimeout(c, 0); };

	function initRHP(rhp) {
		if (Object.prototype.hasOwnProperty.call(rhp, 'data-rhp-scrollbar')) return;
		Object.defineProperty(rhp, 'data-rhp-scrollbar', { value: new RhpScrollbar(rhp) });
	}

	// Xu li su kien drag chuot
	function dragDealer(rhp, context) {
		var lastPageY;

		rhp.addEventListener('mousedown', function(e) {
			lastPageY = e.pageY;
			rhp.classList.add('rhp-grabbed');
			d.body.classList.add('rhp-grabbed');

			d.addEventListener('mousemove', drag);
			d.addEventListener('mouseup', stop);

			return false;
		});

		function drag(e) {
			// tao ra mot bien luu lai gi tri chenh lech
			var delta = e.pageY - lastPageY;
			lastPageY = e.pageY;
			console.log(delta);

			raf(function(){
				 console.log("di chuyen");
				context.rhp.scrollTop += delta / context.scrollRatio;
			});
		}

		function stop() {
			rhp.classList.remove('rhp-grabbed');
			d.body.classList.remove('rhp-grabbed');
			d.removeEventListener('mousemove', drag);
			d.removeEventListener('mouseup', stop);
		}
	}

	// Them mot thanh cuon vao trong giao dien DOM
	function createScrollBar(rhp) {
		this.target = rhp;

		this.direction = w.getComputedStyle(this.target).direction;

		this.bar = '<div class="rhp-scroll">';

		this.wrapper = d.createElement('div');
		this.wrapper.setAttribute('class', 'rhp-wrapper');

		this.rhp = d.createElement('div');
		this.rhp.setAttribute('class', 'rhp-content');

		if (this.direction === 'rtl') {
			this.rhp.classList.add('rtl');
		}

		this.wrapper.appendChild(this.rhp);

		while (this.target.firstChild) {
			this.rhp.appendChild(this.target.firstChild);
		}
		this.target.appendChild(this.wrapper);

		this.target.insertAdjacentHTML('beforeend', this.bar);
		this.bar = this.target.lastChild;

		dragDealer(this.bar, this);
		this.moveBar();

		w.addEventListener('resize', this.moveBar.bind(this));
		this.rhp.addEventListener('scroll', this.moveBar.bind(this));
		this.rhp.addEventListener('mouseenter', this.moveBar.bind(this));

		this.target.classList.add('rhp-container');

		var styles = w.getComputedStyle(rhp);
		if (styles['height'] === '0px' && styles['max-height'] !== '0px') {
			rhp.style.height = styles['max-height'];
		}
	}

	createScrollBar.prototype = {
		moveBar: function(e) {
			var totalHeight = this.rhp.scrollHeight,
			    ownHeight = this.rhp.clientHeight,
			    _this = this;

			this.scrollRatio = ownHeight / totalHeight;

			var isRtl = _this.direction === 'rtl';
			var right = isRtl ?
				(_this.target.clientWidth - _this.bar.clientWidth + 18) :
				(_this.target.clientWidth - _this.bar.clientWidth * -1);

			raf(function() {
				// An thanh cuon neu khong cuon nua
				if (_this.scrollRatio >= 1) {
					_this.bar.classList.add('rhp-hidden')
				} else {
					_this.bar.classList.remove('rhp-hidden');
					_this.bar.style.cssText = 'height:' + Math.max(_this.scrollRatio * 100, 10) + '%; top:' + (_this.rhp.scrollTop / totalHeight) * 100 + '%; right:-' + (_this.target.clientWidth - _this.bar.clientWidth) + 'px';
				}
			});
		}
	}

	function initRhpAll() {
		var nodes = d.querySelectorAll('*[rhp-container]');

		for (var i = 0; i < nodes.length; i++) {
			initRHP(nodes[i]);
		}
	}

	d.addEventListener('DOMContentLoaded', initRhpAll);
	createScrollBar.initRHP = initRHP;
	createScrollBar.initRhpAll = initRhpAll;

	var RhpScrollbar = createScrollBar;
	return RhpScrollbar;

});
