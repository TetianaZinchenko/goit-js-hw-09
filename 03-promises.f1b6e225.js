!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){n[e]=o},e.parcelRequired7c6=t);var r=t("h6c0i"),i={formEl:document.querySelector(".form"),btnSubmit:document.querySelector(".form >button")};function l(e,o){return new Promise((function(n,t){var r=Math.random()>.3;setTimeout((function(){r?n({position:e,delay:o}):t({position:e,delay:o})}),o)}))}i.btnSubmit.addEventListener("click",(function(e){e.preventDefault();for(var o=i.formEl.amount.value,n=Number(i.formEl.delay.value),t=Number(i.formEl.step.value),u=1;u<=o;u+=1)l(u,n).then((function(e){var o=e.position,n=e.delay;r.Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(n,"ms"))})).catch((function(e){var o=e.position,n=e.delay;r.Notify.failure("❌ Rejected promise ".concat(o," in ").concat(n,"ms"))})),n+=t}))}();
//# sourceMappingURL=03-promises.f1b6e225.js.map