/*
* This is product of file RHP Team.
* If u use it, please contact to RHP Team
* Name: Page Transitions Effect Javascript Library
* Author: Sky Albert + RHP Team
 */

/*=====================================================================================
Step by step this library
Step 01: Define Structure for Object
Step 02:
===================================================================================== */
;(function (root, factory) {
    if (typeof exports === 'object') {
        module.exports = factory(window, document)
    } else {
        root.RHPPageTransitions = factory(window, document)
    }
})(this, function (w, d) {
    "use strict";
    const
        defaultPage = "home",
        subpages = document.querySelectorAll(".subpages"),
        animations = {
            WebkitAnimation: "webkitAnimationEnd",
            OAnimation: "oAnimationEnd",
            msAnimation: "MSAnimationEnd",
            animation: "animationend"
        };


   function initRHP(element) {
       if (Object.prototype.hasOwnProperty(element, 'data-rhp-pagetransitions')) return;
       Object.defineProperty(element, 'data-rhp-pagetransition', { value: new RHPPageTransitions(element)});
   }

   /*
   * Name Function: addActive()
   * Desc Function: Add "active" class
   * Return Value:
    */
   function addActive(element) {
       if (!element) return false;
       // Remove all "active" class from element DOM. Issue: No discern element.
       const listItemClick = document.querySelectorAll("ul.site__main__menu li");
       for (let i = 0; i < listItemClick.length; i++) {
           listItemClick[i].classList.remove("active");
       }
       element.parentNode.classList.add("active");
   }

   /*
   * Name Function: addEffect()
   * Desc Function: Find all of section have data-id duplicate with data-animation
   * Param Function: control: Element contain link, element: Element be added effect class
   * Return Value:
    */
   function addEffect(control) {
        if (!control.getAttribute("data-animation")) {
            const numberEffectRandom = parent(Math.floor(67 * Math.random()));
        } else {
            const numberEffect = parseInt(control.getAttribute("data-animation"));
            var from, to;
            if (numberEffect > 67) {
                alert("RHP Notification: Invalid 'data-animation' attribute configuration. Animation num ber should not be greater than 67");
                return false;
            } else {
                switch (numberEffect) {
                    case 1:
                        from = "rhp-page-moveFromRight", to = "rhp-page-moveToLeft";
                        break;
                    case 2:
                        from = "rhp-page-moveFromLeft", to = "rhp-page-moveToRight";
                        break;
                    case 3:
                        from = "rhp-page-moveFromBottom", to = "rhp-page-moveToTop";
                        break;
                    case 4:
                        from = "rhp-page-moveFromTop", to = "rhp-page-moveToBottom";
                        break;
                    case 5:
                        from = "rhp-page-moveFromRight rhp-page-ontop", to = "rhp-page-fade";
                        break;
                    case 6:
                        from = "rhp-page-moveFromLeft rhp-page-ontop", to = "rhp-page-fade";
                        break;
                    case 7:
                        from = "rhp-page-moveFromBottom rhp-page-ontop", to = "rhp-page-fade";
                        break;
                    case 8:
                        from = "rhp-page-moveFromTop rhp-page-ontop", to = "rhp-page-fade";
                        break;
                    case 9:
                        from = "rhp-page-moveFromRightFade", to = "rhp-page-moveToLeftFade";
                        break;
                    case 10:
                        from = "rhp-page-moveFromLeftFade", to = "rhp-page-moveToRightFade";
                        break;
                    case 11:
                        from = "rhp-page-moveFromBottomFade", to = "rhp-page-moveToTopFade";
                        break;
                    case 12:
                        from = "rhp-page-moveFromTopFade", to = "rhp-page-moveToBottomFade";
                        break;
                    case 13:
                        from = "rhp-page-moveFromRight", to = "rhp-page-moveToLeftEasing rhp-page-ontop";
                        break;
                    case 14:
                        from = "rhp-page-moveFromLeft", to = "rhp-page-moveToRightEasing rhp-page-ontop";
                        break;
                    case 15:
                        from = "rhp-page-moveFromBottom", to = "rhp-page-moveToTopEasing rhp-page-ontop";
                        break;
                    case 16:
                        from = "rhp-page-moveFromTop", to = "rhp-page-moveToBottomEasing rhp-page-ontop";
                        break;
                    case 17:
                        from = "rhp-page-moveFromRight rhp-page-ontop", to = "rhp-page-scaleDown";
                        break;
                    case 18:
                        from = "rhp-page-moveFromLeft rhp-page-ontop", to = "rhp-page-scaleDown";
                        break;
                    case 19:
                        from = "rhp-page-moveFromBottom rhp-page-ontop", to = "rhp-page-scaleDown";
                        break;
                    case 20:
                        from = "rhp-page-moveFromTop rhp-page-ontop", to = "rhp-page-scaleDown";
                        break;
                    case 21:
                        from = "rhp-page-scaleUpDown rhp-page-delay300", to = "rhp-page-scaleDown";
                        break;
                    case 22:
                        from = "rhp-page-scaleUp rhp-page-delay300", to = "rhp-page-scaleDownUp";
                        break;
                    case 23:
                        from = "rhp-page-scaleUp", to = "rhp-page-moveToLeft rhp-page-ontop";
                        break;
                    case 24:
                        from = "rhp-page-scaleUp", to = "rhp-page-moveToRight rhp-page-ontop";
                        break;
                    case 25:
                        from = "rhp-page-scaleUp", to = "rhp-page-moveToTop rhp-page-ontop";
                        break;
                    case 26:
                        from = "rhp-page-scaleUp", to = "rhp-page-moveToBottom rhp-page-ontop";
                        break;
                    case 27:
                        from = "rhp-page-scaleUpCenter rhp-page-delay400", to = "rhp-page-scaleDownCenter";
                        break;
                    case 28:
                        from = "rhp-page-moveFromRight rhp-page-delay200 rhp-page-ontop", to = "rhp-page-rotateRightSideFirst";
                        break;
                    case 29:
                        from = "rhp-page-moveFromLeft rhp-page-delay200 rhp-page-ontop", to = "rhp-page-rotateLeftSideFirst";
                        break;
                    case 30:
                        from = "rhp-page-moveFromTop rhp-page-delay200 rhp-page-ontop", to = "rhp-page-rotateTopSideFirst";
                        break;
                    case 31:
                        from = "rhp-page-moveFromBottom rhp-page-delay200 rhp-page-ontop", to = "rhp-page-rotateBottomSideFirst";
                        break;
                    case 32:
                        from = "rhp-page-flipInLeft rhp-page-delay500", to = "rhp-page-flipOutRight";
                        break;
                    case 33:
                        from = "rhp-page-flipInRight rhp-page-delay500", to = "rhp-page-flipOutLeft";
                        break;
                    case 34:
                        from = "rhp-page-flipInBottom rhp-page-delay500", to = "rhp-page-flipOutTop";
                        break;
                    case 35:
                        from = "rhp-page-flipInTop rhp-page-delay500", to = "rhp-page-flipOutBottom";
                        break;
                    case 36:
                        from = "rhp-page-scaleUp", to = "rhp-page-rotateFall rhp-page-ontop";
                        break;
                    case 37:
                        from = "rhp-page-rotateInNewspaper rhp-page-delay500", to = "rhp-page-rotateOutNewspaper";
                        break;
                    case 38:
                        from = "rhp-page-moveFromRight", to = "rhp-page-rotatePushLeft";
                        break;
                    case 39:
                        from = "rhp-page-moveFromLeft", to = "rhp-page-rotatePushRight";
                        break;
                    case 40:
                        from = "rhp-page-moveFromBottom", to = "rhp-page-rotatePushTop";
                        break;
                    case 41:
                        from = "rhp-page-moveFromTop", to = "rhp-page-rotatePushBottom";
                        break;
                    case 42:
                        from = "rhp-page-rotatePullRight rhp-page-delay180", to = "rhp-page-rotatePushLeft";
                        break;
                    case 43:
                        from = "rhp-page-rotatePullLeft rhp-page-delay180", to = "rhp-page-rotatePushRight";
                        break;
                    case 44:
                        from = "rhp-page-rotatePullBottom rhp-page-delay180", to = "rhp-page-rotatePushTop";
                        break;
                    case 45:
                        from = "rhp-page-rotatePullTop rhp-page-delay180", to = "rhp-page-rotatePushBottom";
                        break;
                    case 46:
                        from = "rhp-page-moveFromRightFade", to = "rhp-page-rotateFoldLeft";
                        break;
                    case 47:
                        from = "rhp-page-moveFromLeftFade", to = "rhp-page-rotateFoldRight";
                        break;
                    case 48:
                        from = "rhp-page-moveFromBottomFade", to = "rhp-page-rotateFoldTop";
                        break;
                    case 49:
                        from = "rhp-page-moveFromTopFade", to = "rhp-page-rotateFoldBottom";
                        break;
                    case 50:
                        from = "rhp-page-rotateUnfoldLeft", to = "rhp-page-moveToRightFade";
                        break;
                    case 51:
                        from = "rhp-page-rotateUnfoldRight", to = "rhp-page-moveToLeftFade";
                        break;
                    case 52:
                        from = "rhp-page-rotateUnfoldTop", to = "rhp-page-moveToBottomFade";
                        break;
                    case 53:
                        from = "rhp-page-rotateUnfoldBottom", to = "rhp-page-moveToTopFade";
                        break;
                    case 54:
                        from = "rhp-page-rotateRoomLeftIn", to = "rhp-page-rotateRoomLeftOut rhp-page-ontop";
                        break;
                    case 55:
                        from = "rhp-page-rotateRoomRightIn", to = "rhp-page-rotateRoomRightOut rhp-page-ontop";
                        break;
                    case 56:
                        from = "rhp-page-rotateRoomTopIn", to = "rhp-page-rotateRoomTopOut rhp-page-ontop";
                        break;
                    case 57:
                        from = "rhp-page-rotateRoomBottomIn", to = "rhp-page-rotateRoomBottomOut rhp-page-ontop";
                        break;
                    case 58:
                        from = "rhp-page-rotateCubeLeftIn", to = "rhp-page-rotateCubeLeftOut rhp-page-ontop";
                        break;
                    case 59:
                        from = "rhp-page-rotateCubeRightIn", to = "rhp-page-rotateCubeRightOut rhp-page-ontop";
                        break;
                    case 60:
                        from = "rhp-page-rotateCubeTopIn", to = "rhp-page-rotateCubeTopOut rhp-page-ontop";
                        break;
                    case 61:
                        from = "rhp-page-rotateCubeBottomIn", to = "rhp-page-rotateCubeBottomOut rhp-page-ontop";
                        break;
                    case 62:
                        from = "rhp-page-rotateCarouselLeftIn", to = "rhp-page-rotateCarouselLeftOut rhp-page-ontop";
                        break;
                    case 63:
                        from = "rhp-page-rotateCarouselRightIn", to = "rhp-page-rotateCarouselRightOut rhp-page-ontop";
                        break;
                    case 64:
                        from = "rhp-page-rotateCarouselTopIn", to = "rhp-page-rotateCarouselTopOut rhp-page-ontop";
                        break;
                    case 65:
                        from = "rhp-page-rotateCarouselBottomIn", to = "rhp-page-rotateCarouselBottomOut rhp-page-ontop";
                        break;
                    case 66:
                        from = "rhp-page-rotateSidesIn rhp-page-delay200", to = "rhp-page-rotateSidesOut";
                        break;
                    case 67:
                        from = "rhp-page-rotateSlideIn", to = "rhp-page-rotateSlideOut";
                };
                const valueNameSectionSelected = control.getAttribute("href").split("#")[1];
                console.log(valueNameSectionSelected + ": Value from value name");
                const objCompare = document.querySelector("*[data-id=" + valueNameSectionSelected + "]");
                console.log(objCompare);
                const reset = document.querySelectorAll("*[data-id]");
                for (let i = 0; i < reset.length; i++) {
                    reset[i].classList.remove("rhp__page__current");
                }


                console.log(typeof(control));
                document.querySelector("*[data-id=" + valueNameSectionSelected + "]").classList.add("rhp__page__current");
                control.addEventListener("click", function () {
                    console.log("Hello!");
                    console.log(objCompare);
                    objCompare.classList.add(from);
                    objCompare.classList.add(to);
                })
            }
        }
   }

   /*
   * Name Function: clickPageTransitions()
   * Desc Function: Event Click
   * Return:
    */

   function clickPageTransitions(element) {
       document.querySelector("*[data-id='home']").classList.add('rhp__page__current');
       element.addEventListener("click", function () {
            addActive(element);
            addEffect(element);
       })
   }


   function initRHPAll() {
       const nodes = d.querySelectorAll('*[rhp-page-transitions]');
       for (let i = 0; i < nodes.length; i++) {
           initRHP(nodes[i]);
       }
   }

   d.addEventListener('DOMContentLoaded', initRHPAll, false);
    clickPageTransitions.initRHP = initRHP;
    clickPageTransitions.initRhpAll = initRHPAll;

    var RHPPageTransitions = clickPageTransitions;
   return RHPPageTransitions;
});
