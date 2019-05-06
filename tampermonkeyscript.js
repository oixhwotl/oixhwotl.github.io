// ==UserScript==
// @name         My Ad blocker
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://*.manamoa.net/*
// @include      http://tcafe2a.com/*
// @include      https://outlook.live*
// @include      https://www.tfreeca*/*
// @include      https://www.globaljobs.co.kr/*
// @include      https://blog.naver.com/*
// @exclude      https://outlook.office365*
// @grant        none
// ==/UserScript==

function tamperMonkeyWrap()
{
    var hideAllIdsAndClasses = function() {
        'use strict';

        // OUTLOOK
        var outlook_premium_bar = '_1ZEdP0-JdMOVtjBb5ZcM6M'; // On bottom left
        var outlook_adblocking = '_1_ag99JsBHxI6S4FP5ayPv'; // On right hand side
        var outlook_classes = [outlook_premium_bar, outlook_adblocking];

        // MANAMOA
        var manamoa_addBannerWidget = "ad-banner-widget";
        var manamoa_mainBanner = "main-banner";
        var manamoa_classes = [manamoa_addBannerWidget, manamoa_mainBanner];

        // TCAFE
        var tcafe_adsbygoogle = "adsbygoogle";
        var tcafe_aswift_0_expand = "aswift_0_expand";
        var tcafe_aswift_0_anchor = "aswift_0_anchor";
        var tcafe_aswift_1_expand = "aswift_1_expand";
        var tcafe_aswift_1_anchor = "aswift_1_anchor";

        var tcafe_classes = [tcafe_adsbygoogle];
        var tcafe_ids = [tcafe_aswift_0_expand, tcafe_aswift_0_anchor, tcafe_aswift_1_expand, tcafe_aswift_1_anchor];

        // Global Jobs
        var globaljobs_slider = "nivoSlider";
        var globaljobs_contentbar = "s_center_bar";
        var globaljobs_classes = [globaljobs_slider, globaljobs_contentbar];

        // TFREECA
        var tfreeca_publicheader = "public-header";
        var tfreeca_leftads = ["left_ad1", "left_ad3"];
        var tfreeca_classes = tfreeca_leftads;
        var tfreeca_ids = [tfreeca_publicheader];

        // NAVER BLOG
        var naverblog_ids = ["floating_area_header"];


        // Now hide them
        var classList = outlook_classes.concat(manamoa_classes).concat(tcafe_classes)
        .concat(globaljobs_classes).concat(tfreeca_classes);

        var idList = [];
        idList = idList.concat(tcafe_ids).concat(tfreeca_ids).concat(naverblog_ids);

        var i, j;
        var eList, eElm;

        //console.log("hideAllIdsAndClasses starting");

        for (i = 0; i < classList.length; i++) {
            eList = document.getElementsByClassName(classList[i]);
            for (j = 0; j < eList.length; j++) {
                if (eList[j].style.display == "none" && eList[j].style.visibility == "hidden") {
                    continue;
                }
                eList[j].style.display = "none";
                eList[j].style.visibility = "hidden";
                eList[j].style.width = "0px";
                eList[j].style.height = "0px";
                eList[j].style.padding = "0px";
                console.log("hiding " + classList[i]);
            }
        }

        for (i = 0; i < idList.length; i++) {
            eElm = document.getElementById(idList[i]);
            if (eElm) {
                if (eElm.style.display == "none" && eElm.style.visibility == "hidden") {
                    continue;
                }
                eElm.style.display = "none";
                eElm.style.visibility = "hidden";
                eElm.style.width = "0px";
                eElm.style.height = "0px";
                eElm.style.padding = "0px";
                console.log("hiding " + idList[i]);
            }
        }
        //console.log("hideAllIdsAndClasses finishing");
    };

    window.addEventListener(
        'DOMNodeInserted',
        function (mutationEventMsg)
        {
            'use strict';
            //console.log("starting DOMNodeInserted");
            hideAllIdsAndClasses();
            //console.log("finishing DOMNodeInserted");
        }, false);

    window.addEventListener(
        'DOMContentLoaded',
        function (mutationEventMsg)
        {
            //console.log("starting for load");
            setTimeout(hideAllIdsAndClasses(), 1000);
            console.log("finishing for load");
        }, false);

    window.addEventListener(
        'DOMSubtreeModified',
        function (mutationEventMsg)
        {
            //console.log("starting DOMSubtreeModified");
            hideAllIdsAndClasses();
            //console.log("finishing DOMSubtreeModified");
        }, false);
};

tamperMonkeyWrap();

var scriptTag = document.createElement('script');
scriptTag.text = '(' + tamperMonkeyWrap.toString() + ')();';
document.getElementsByTagName('head')[0].appendChild(scriptTag);
