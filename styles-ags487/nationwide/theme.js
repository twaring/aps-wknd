(() => {
  function e(e, t, n, a) {
    Object.defineProperty(e, t, {
      get: n,
      set: a,
      enumerable: !0,
      configurable: !0,
    });
  }
  var t =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof self
        ? self
        : "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : {},
    n = {},
    a = {},
    s = t.parcelRequire6d5f;
  null == s &&
    (((s = function (e) {
      if (e in n) return n[e].exports;
      if (e in a) {
        var t = a[e];
        delete a[e];
        var s = { id: e, exports: {} };
        return (n[e] = s), t.call(s.exports, s, s.exports), s.exports;
      }
      var r = new Error("Cannot find module '" + e + "'");
      throw ((r.code = "MODULE_NOT_FOUND"), r);
    }).register = function (e, t) {
      a[e] = t;
    }),
    (t.parcelRequire6d5f = s)),
    s.register("kI8SP", function (t, n) {
      var a, s;
      e(
        t.exports,
        "register",
        () => a,
        (e) => (a = e)
      ),
        e(
          t.exports,
          "resolve",
          () => s,
          (e) => (s = e)
        );
      var r = {};
      (a = function (e) {
        for (var t = Object.keys(e), n = 0; n < t.length; n++)
          r[t[n]] = e[t[n]];
      }),
        (s = function (e) {
          var t = r[e];
          if (null == t)
            throw new Error("Could not resolve bundle with id " + e);
          return t;
        });
    }),
    s.register("hIarR", function (t, n) {
      var a;
      e(
        t.exports,
        "getBundleURL",
        () => a,
        (e) => (a = e)
      );
      var s = {};
      function r(e) {
        return (
          ("" + e).replace(
            /^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,
            "$1"
          ) + "/"
        );
      }
      a = function (e) {
        var t = s[e];
        return (
          t ||
            ((t = (function () {
              try {
                throw new Error();
              } catch (t) {
                var e = ("" + t.stack).match(
                  /(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g
                );
                if (e) return r(e[2]);
              }
              return "/";
            })()),
            (s[e] = t)),
          t
        );
      };
    }),
    s("kI8SP").register(
      JSON.parse(
        '{"6ZzK6":"theme.js","bDfcA":"favicon.png","bTX1Z":"theme.css"}'
      )
    );
  function r(e) {
    var t,
      n,
      a,
      s,
      r,
      i = [];
    for (
      t = document.getElementsByClassName("select-items"),
        n = document.getElementsByClassName("select-selected"),
        s = t.length,
        r = n.length,
        a = 0;
      a < r;
      a++
    )
      e == n[a] ? i.push(a) : n[a].classList.remove("select-arrow-active");
    for (a = 0; a < s; a++) i.indexOf(a) && t[a].classList.add("select-hide");
  }
  s("hIarR").getBundleURL("6ZzK6"),
    s("kI8SP").resolve("bDfcA"),
    document.addEventListener("DOMContentLoaded", function (e) {
      var t, n, a, s, i, o, c, l, d;
      for (
        s = (t = document.getElementsByClassName("cmp-form-options--drop-down"))
          .length,
          n = 0;
        n < s;
        n++
      ) {
        if (void 0 === (o = t[n].getElementsByTagName("select")[0])) return;
        for (
          i = o.length,
            (c = document.createElement("DIV")).setAttribute(
              "class",
              "select-selected"
            ),
            c.innerHTML = o.options[o.selectedIndex].innerHTML,
            t[n].appendChild(c),
            (l = document.createElement("DIV")).setAttribute(
              "class",
              "select-items select-hide"
            ),
            a = 1;
          a < i;
          a++
        )
          ((d = document.createElement("DIV")).innerHTML =
            o.options[a].innerHTML),
            d.addEventListener("click", function (e) {
              var t, n, a, s, r, i, o;
              for (
                i = (s =
                  this.parentNode.parentNode.getElementsByTagName("select")[0])
                  .length,
                  r = this.parentNode.previousSibling,
                  n = 0;
                n < i;
                n++
              )
                if (s.options[n].innerHTML == this.innerHTML) {
                  for (
                    s.selectedIndex = n,
                      r.innerHTML = this.innerHTML,
                      o = (t =
                        this.parentNode.getElementsByClassName(
                          "same-as-selected"
                        )).length,
                      a = 0;
                    a < o;
                    a++
                  )
                    t[a].removeAttribute("class");
                  this.setAttribute("class", "same-as-selected");
                  break;
                }
              r.click();
            }),
            l.appendChild(d);
        t[n].appendChild(l),
          c.addEventListener("click", function (e) {
            e.stopPropagation(),
              r(this),
              this.nextSibling.classList.toggle("select-hide"),
              this.classList.toggle("select-arrow-active");
          });
      }
    }),
    document.addEventListener("click", r),
    document.addEventListener("DOMContentLoaded", function (e) {
      for (
        var t = document.getElementsByClassName("cmp-progressbar"),
          n = document.getElementsByClassName("progressbar"),
          a = t.length,
          s = 0;
        s < a;
        s++
      ) {
        var r = t[s].firstElementChild.textContent,
          i = document.createElement("div");
        i.setAttribute("class", "cmp-progressbar-completedPercentage");
        var o = document.createTextNode(r + "%");
        i.appendChild(o),
          void 0 !== n[s] && n[s].insertBefore(i, n[s].firstChild);
      }
    });
  var i = () => {
    const e = document.querySelector("#main-header"),
      t = document.createElement("button"),
      n = document.querySelectorAll(
        ".navigation, .search, .languagenavigation"
      );
    (t.id = "mobile-header-button"),
      t.setAttribute("aria-label", "Toggle Navigation"),
      e.appendChild(t),
      n.forEach((e) => e.classList.add("hide"));
    t.addEventListener("click", () => {
      e.classList.toggle("open"),
        t.classList.toggle("openbtn"),
        n.forEach((e) => e.classList.toggle("hide")),
        document.body.classList.toggle("overflow-hidden");
    });
  };
  const o = () => {
    "complete" === document.readyState || "interactive" === document.readyState
      ? (document.querySelectorAll(".languagenavigation").forEach((e) => {
          const t = e.querySelector(".cmp-languagenavigation__item--active");
          let n = "",
            a = "language";
          const s = [];
          t &&
            t.classList.forEach((e) => {
              e.includes("active") ||
                (e.includes("langcode") &&
                  ((n = e.split("langcode-")[1]),
                  (a = ((e) => {
                    let t = e;
                    switch (e) {
                      case "en":
                        t = "English";
                        break;
                      case "fr":
                        t = "franÃ§aise";
                        break;
                      case "de":
                        t = "Deutsch";
                        break;
                      case "it":
                        t = "Italian";
                        break;
                      case "ru":
                        t = "Russian";
                        break;
                      case "es":
                        t = "EspaÃ±ol";
                        break;
                      case "da":
                        t = "Danish";
                        break;
                      case "ga":
                        t = "Irish";
                        break;
                      case "pt":
                        t = "Portuguese";
                        break;
                      case "ro":
                        t = "Romanian";
                        break;
                      case "sv":
                        t = "Swedish";
                        break;
                      case "tr":
                        t = "Turkish";
                    }
                    return t;
                  })(n))),
                s.push(e));
            });
          const r = document.createElement("button"),
            i = document.createElement("span"),
            o = (t) => {
              e.contains(t.target) ||
                t.target === r ||
                e.classList.remove("open"),
                document.removeEventListener("click", closeNavigationGroup);
            };
          r.classList.add(...s),
            (i.innerText = a),
            r.classList.add("cmp-languagenavigation__button"),
            r.appendChild(i),
            r.addEventListener("click", () => {
              e.classList.toggle("open"),
                requestAnimationFrame(() => {
                  document.addEventListener("click", o);
                });
            }),
            e.querySelector(".cmp-languagenavigation").prepend(r);
        }),
        i())
      : requestAnimationFrame(o);
  };
  o();
})();
//# sourceMappingURL=theme.js.map
