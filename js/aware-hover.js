/** 
	Sky Albert Libraries

	@param {Object} object
	@param {String} selector
	@param {String} itemSelector
	@param {String} animationName
	@param {bollean} enableTouch
	@param {integer} touchThreshod
*/

// Create objects Direction
const awareHoverSky = function({
	selector: selector = '.sky__aware__hover__slide',
	itemSelector: itemSelector = '.sky__aware__hover__item',
	animationName: animationName = 'slide',
	enableTouch: enableTouch = true,
	touchThreshod: touchThreshod = 250 
	} = {}) {
	const containers = document.querySelectorAll(selector);
	let touchStart;

	// Caculate Direction: Phương hướng
	const getDirection = function (e, item) {
		// Get value width and height current item
		let w = item.offsetWidth;
		let h = item.offsetHeight;
		let position = getDirection(item);

		// Calculate the x/y value of the pointer entering/exiting
		let x = (e.pageX - position.x - (w / 2) * (w > h ? (h / w) : 1));
    	let y = (e.pageY - position.y - (h / 2) * (h > w ? (w / h) : 1));

    	let direction = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;

    	return direction;
	}

	// ham xu li lay vi tri
	const getPosition = function (el) {
		let xPos = 0;
		let yPos = 0;

		while (el) {
			// Lay gia tri co border vi the se phai lay offset + client
			// Muc dich la de lay gia tri chinh xac.
			xPos += (el.offsetLeft + el.clientLeft);
      		yPos += (el.offsetTop + el.clientTop);
      		// Lam cac cong viec xong thi gan gia tri cho el tu dau
      		el = el.offsetParent;
		}
		return {
			x: xPos,
			y: yPos
		}
	}


	/* Ta ra cac gai tri de dinh nghia phuong huong
	Gia tri mac dinh se la 'top'. Cach viet nay thuc ra la rut gon cua switch case
	gia tri (top) cuoi cung chinh la default: trong switch case ma moi nguoi
	viet hang ngay */
	const defineDirection = switchcase({
		0: 'top',
		1: 'right',
		2: 'bottom',
		3: 'left'
	})('top');

	/*============================================================
	Khi xay xac dinh duoc phuong huong va vi tri thi chung ta chi can them class dung
	voi muc dich chung ta muon them.
	Note: Chu y la o day minh su dung phuong thuc giong jQuery tuc la xay dung
	mot ham addClass() co tham so la phan tu selector duoc chon.
	==============================================================*/
	const addClass = function (e, state) {
		let currentItem = e.currentTarget; /* Lay doi tuong hien tai */
		let direction = getDirection(e, currentItem); /* lay direction */
		let directionString = defineDirection(direction); /* lay duoc gai tri tu switch case */

		// B1: Loai bo tat cac cac class hieu ung va them mot class moi
		// eg: swap --in for --out
		let currentCssClasses = currentItem.className.split(' ');
		let filteredCssClasses = currentCssClasses.filter(
			(cssClass) => (
				!cssClass.startsWith(animationName)
			)
		).join(' ');
		currentItem.className = filteredCssClasses;
		currentItem.classList.add(`${animationName}__${state}__${directionString}`);
		/* Sau doan nay thi se tra ve moi class co ten eg: slide__in__left.
		Giai thich: 
		* state = trang thai ra vao cua doi tuong.*/
	};

	/*============================================================
	Sau khi chung ta da them duoc class thi bay gio chung ta se xu li su kien hover
	, khi chuot hover qua thi them class nhu ben tren.
	==============================================================*/
	const bindEvents = function (containerItem) {
		const items = containerItem.querySelectorAll(itemSelector);

		items.forEach((item) => {
			addEventListenerMulti(item, ['mouseenter', 'focus'], (e) => {
				addClass(e, 'in'); /* Trang thai dua chuot vao */
			});

			addEventListenerMulti(item, ['mouseleave', 'blur'], (e) => {
				addClass(e, 'out'); /* Trang thai dua chuot ra khoi doi tuong */
			});

			/* Do tren dien thoai khong co che do hover vi the chung ta phai su dung
			touchstart va touchend de thay the */
			if (enableTouch) {
				item.addEventListener('touchstart', (e) => {
					touchstart = +new Date;
				}, {passive: true});

				item.addEventListener('touchend', (e) => {
					let touchTime = +new Date - touchstart;

					if (touchTime < touchThreshod && !item.className.includes(`${animationName}--in`)) {
						e.preventDefault();
						resetVisible(e, items, addClass(e, 'in'));
					}
				})
			}
		});
	};

	/*============================================================
	Trong Javascript khong co su kien addEventListenerMulti, vi the chung ta phai
	xay dung va su dung foreach de chay tung su kien.
	==============================================================*/
	const addEventListenerMulti = function (element, events, fn) {
		events.forEach((e) => element.addEventListener(e, fn));
	};

	const resetVisible = function (e, items, callback) {
	    items.forEach((item) => {
		    let currentCssClasses = item.className;
		    /* Neu doi tuong class hien tai la __in va khong con la doi tuong hien tai dk nham toi
		       thi no se thay the __in thanh __out */
		    if (currentCssClasses.includes(`${animationName}--in`) && item !== e.currentTarget) {
		        item.className = currentCssClasses.replace(`${animationName}--in`, `${animationName}--out`);
		      }
	    });
	    callback;
  	};

  	/*============================================================
	Tao ham khoi tao cho js library cua RHP Team
	==============================================================*/
	const initRHP = function initRHP() {
		if (containers.length) {
			containers.forEach(function (containerItem) {
				bindEvents(containerItem);
			});
		} else {
			return;
		}
	};

	// Khoi tao theo cach mac dinh
	initRHP();

	// Khoi tao API
	return {
		initRHP: initRHP
	};
}; 

export default awareHoverSky;


/* Viec su dung ham switchcase nhanh phai duoc quy dinh vi the, chung ta se quy dinh
nhu duoi day de su dung cho cu phap ben tren */
const switchcase = cases => defaultCase => key =>
key in cases ? cases[key] : defaultCase;

