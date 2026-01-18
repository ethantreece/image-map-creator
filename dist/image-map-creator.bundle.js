"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/downloadjs/download.js
  var require_download = __commonJS({
    "node_modules/downloadjs/download.js"(exports, module) {
      (function(root, factory) {
        if (typeof define === "function" && define.amd) {
          define([], factory);
        } else if (typeof exports === "object") {
          module.exports = factory();
        } else {
          root.download = factory();
        }
      })(exports, function() {
        return function download2(data, strFileName, strMimeType) {
          var self = window, defaultMime = "application/octet-stream", mimeType = strMimeType || defaultMime, payload = data, url = !strFileName && !strMimeType && payload, anchor = document.createElement("a"), toString = function(a) {
            return String(a);
          }, myBlob = self.Blob || self.MozBlob || self.WebKitBlob || toString, fileName = strFileName || "download", blob, reader;
          myBlob = myBlob.call ? myBlob.bind(self) : Blob;
          if (String(this) === "true") {
            payload = [payload, mimeType];
            mimeType = payload[0];
            payload = payload[1];
          }
          if (url && url.length < 2048) {
            fileName = url.split("/").pop().split("?")[0];
            anchor.href = url;
            if (anchor.href.indexOf(url) !== -1) {
              var ajax = new XMLHttpRequest();
              ajax.open("GET", url, true);
              ajax.responseType = "blob";
              ajax.onload = function(e) {
                download2(e.target.response, fileName, defaultMime);
              };
              setTimeout(function() {
                ajax.send();
              }, 0);
              return ajax;
            }
          }
          if (/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(payload)) {
            if (payload.length > 1024 * 1024 * 1.999 && myBlob !== toString) {
              payload = dataUrlToBlob(payload);
              mimeType = payload.type || defaultMime;
            } else {
              return navigator.msSaveBlob ? (
                // IE10 can't do a[download], only Blobs:
                navigator.msSaveBlob(dataUrlToBlob(payload), fileName)
              ) : saver(payload);
            }
          } else {
            if (/([\x80-\xff])/.test(payload)) {
              var i = 0, tempUiArr = new Uint8Array(payload.length), mx = tempUiArr.length;
              for (i; i < mx; ++i) tempUiArr[i] = payload.charCodeAt(i);
              payload = new myBlob([tempUiArr], { type: mimeType });
            }
          }
          blob = payload instanceof myBlob ? payload : new myBlob([payload], { type: mimeType });
          function dataUrlToBlob(strUrl) {
            var parts = strUrl.split(/[:;,]/), type = parts[1], decoder = parts[2] == "base64" ? atob : decodeURIComponent, binData = decoder(parts.pop()), mx2 = binData.length, i2 = 0, uiArr = new Uint8Array(mx2);
            for (i2; i2 < mx2; ++i2) uiArr[i2] = binData.charCodeAt(i2);
            return new myBlob([uiArr], { type });
          }
          function saver(url2, winMode) {
            if ("download" in anchor) {
              anchor.href = url2;
              anchor.setAttribute("download", fileName);
              anchor.className = "download-js-link";
              anchor.innerHTML = "downloading...";
              anchor.style.display = "none";
              document.body.appendChild(anchor);
              setTimeout(function() {
                anchor.click();
                document.body.removeChild(anchor);
                if (winMode === true) {
                  setTimeout(function() {
                    self.URL.revokeObjectURL(anchor.href);
                  }, 250);
                }
              }, 66);
              return true;
            }
            if (/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent)) {
              if (/^data:/.test(url2)) url2 = "data:" + url2.replace(/^data:([\w\/\-\+]+)/, defaultMime);
              if (!window.open(url2)) {
                if (confirm("Displaying New Document\n\nUse Save As... to download, then click back to return to this page.")) {
                  location.href = url2;
                }
              }
              return true;
            }
            var f = document.createElement("iframe");
            document.body.appendChild(f);
            if (!winMode && /^data:/.test(url2)) {
              url2 = "data:" + url2.replace(/^data:([\w\/\-\+]+)/, defaultMime);
            }
            f.src = url2;
            setTimeout(function() {
              document.body.removeChild(f);
            }, 333);
          }
          if (navigator.msSaveBlob) {
            return navigator.msSaveBlob(blob, fileName);
          }
          if (self.URL) {
            saver(self.URL.createObjectURL(blob), true);
          } else {
            if (typeof blob === "string" || blob.constructor === toString) {
              try {
                return saver("data:" + mimeType + ";base64," + self.btoa(blob));
              } catch (y) {
                return saver("data:" + mimeType + "," + encodeURIComponent(blob));
              }
            }
            reader = new FileReader();
            reader.onload = function(e) {
              saver(this.result);
            };
            reader.readAsDataURL(blob);
          }
          return true;
        };
      });
    }
  });

  // node_modules/undo-manager/lib/undomanager.js
  var require_undomanager = __commonJS({
    "node_modules/undo-manager/lib/undomanager.js"(exports, module) {
      (function() {
        "use strict";
        function removeFromTo(array, from, to) {
          array.splice(
            from,
            !to || 1 + to - from + (!(to < 0 ^ from >= 0) && (to < 0 || -1) * array.length)
          );
          return array.length;
        }
        let UndoManager2 = function() {
          let commands = [], index = -1, limit = 0, isExecuting = false, callback;
          function execute(command, action) {
            if (!command || typeof command[action] !== "function") {
              return this;
            }
            isExecuting = true;
            command[action]();
            isExecuting = false;
            return this;
          }
          return {
            /**
             * Adds a command to the queue.
             * @property {object} command           - Command
             * @property {function} command.undo    - Undo function
             * @property {function} command.redo    - Redo function
             * @property {string} [command.groupId] - Optional group id
             */
            add: function(command) {
              if (isExecuting) {
                return this;
              }
              commands.splice(index + 1, commands.length - index);
              commands.push(command);
              if (limit && commands.length > limit) {
                removeFromTo(commands, 0, -(limit + 1));
              }
              index = commands.length - 1;
              if (callback) {
                callback();
              }
              return this;
            },
            /**
             * Pass a function to be called on undo and redo actions.
             * @property {function} callbackFunc - Callback function
             */
            setCallback: function(callbackFunc) {
              callback = callbackFunc;
            },
            /**
             * Performs undo: call the undo function at the current index and decrease the index by 1.
             */
            undo: function() {
              let command = commands[index];
              if (!command) {
                return this;
              }
              const groupId = command.groupId;
              while (command.groupId === groupId) {
                execute(command, "undo");
                index -= 1;
                command = commands[index];
                if (!command || !command.groupId) break;
              }
              if (callback) {
                callback();
              }
              return this;
            },
            /**
             * Performs redo: call the redo function at the next index and increase the index by 1.
             */
            redo: function() {
              let command = commands[index + 1];
              if (!command) {
                return this;
              }
              const groupId = command.groupId;
              while (command.groupId === groupId) {
                execute(command, "redo");
                index += 1;
                command = commands[index + 1];
                if (!command || !command.groupId) break;
              }
              if (callback) {
                callback();
              }
              return this;
            },
            /**
             * Clears the memory, losing all stored states. Resets the index.
             */
            clear: function() {
              let prev_size = commands.length;
              commands = [];
              index = -1;
              if (callback && prev_size > 0) {
                callback();
              }
            },
            /**
             * Tests if any undo actions exist.
             * @returns {boolean}
             */
            hasUndo: function() {
              return index !== -1;
            },
            /**
             * Tests if any redo actions exist.
             * @returns {boolean}
             */
            hasRedo: function() {
              return index < commands.length - 1;
            },
            /**
             * Returns the list of queued commands.
             * @param {string} [groupId] - Optionally filter commands by group ID
             * @returns {array}
             */
            getCommands: function(groupId) {
              return groupId ? commands.filter((c) => c.groupId === groupId) : commands;
            },
            /**
             * Returns the index of the actions list.
             * @returns {number}
             */
            getIndex: function() {
              return index;
            },
            /**
             * Sets the maximum number of undo steps. Default: 0 (unlimited).
             * @property {number} max - Maximum number of undo steps
             */
            setLimit: function(max) {
              limit = max;
            }
          };
        };
        if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
          define(function() {
            return UndoManager2;
          });
        } else if (typeof module !== "undefined" && module.exports) {
          module.exports = UndoManager2;
        } else {
          window.UndoManager = UndoManager2;
        }
      })();
    }
  });

  // node_modules/quicksettings/quicksettings.min.js
  var require_quicksettings_min = __commonJS({
    "node_modules/quicksettings/quicksettings.min.js"(exports, module) {
      !function() {
        function a(a2, b2) {
          var d2 = c("div", null, "qs_label", b2);
          return d2.innerHTML = a2, d2;
        }
        function b(a2, b2, d2, e2) {
          var f2 = c("input", b2, d2, e2);
          return f2.type = a2, f2;
        }
        function c(a2, b2, c2, d2) {
          var e2 = document.createElement(a2);
          if (e2) return e2.id = b2, c2 && (e2.className = c2), d2 && d2.appendChild(e2), e2;
        }
        function d() {
          return navigator.userAgent.indexOf("rv:11") != -1 || navigator.userAgent.indexOf("MSIE") != -1;
        }
        function e() {
          var a2 = navigator.userAgent.toLowerCase();
          return !(a2.indexOf("chrome") > -1 || a2.indexOf("firefox") > -1 || a2.indexOf("epiphany") > -1) && a2.indexOf("safari/") > -1;
        }
        function f() {
          var a2 = navigator.userAgent.toLowerCase();
          return a2.indexOf("edge") > -1;
        }
        function g() {
          var a2 = document.createElement("style");
          a2.innerText = i, document.head.appendChild(a2), h = true;
        }
        var h = false, i = ".qs_main{background-color:#dddddd;text-align:left;position:absolute;width:200px;font:12px sans-serif;box-shadow:5px 5px 8px rgba(0,0,0,0.35);user-select:none;-webkit-user-select:none;color:#000000;border:none}.qs_content{background-color:#cccccc;overflow-y:auto}.qs_title_bar{background-color:#eeeeee;user-select:none;-webkit-user-select:none;cursor:pointer;padding:5px;font-weight:bold;border:none;color:#000000}.qs_container{margin:5px;padding:5px;background-color:#eeeeee;border:none;position:relative}.qs_container_selected{border:none;background-color:#ffffff}.qs_range{-webkit-appearance:none;-moz-appearance:none;width:100%;height:17px;padding:0;margin:0;background-color:transparent;border:none;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.qs_range:focus{outline:none;border:none}.qs_range::-webkit-slider-runnable-track{width:100%;height:15px;cursor:pointer;background:#cccccc;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.qs_range:focus::-webkit-slider-runnable-track{background:#cccccc}.qs_range::-webkit-slider-thumb{-webkit-appearance:none;height:15px;width:15px;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;background:#999999;cursor:pointer;margin-top:0}.qs_range::-moz-range-track{width:100%;height:15px;cursor:pointer;background:#cccccc;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.qs_range::-moz-range-thumb{height:15px;width:15px;border:none;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;background:#999999;cursor:pointer}.qs_range::-ms-track{width:100%;height:15px;cursor:pointer;visibility:hidden;background:transparent}.qs_range::-ms-thumb{height:15px;width:15px;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;background:#999999;cursor:pointer;border:none}.qs_range::-ms-fill-lower{background:#cccccc;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.qs_range:focus::-ms-fill-lower{background:#cccccc}.qs_range::-ms-fill-upper{background:#cccccc;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.qs_range:focus::-ms-fill-upper{background:#cccccc}.qs_button{background-color:#f6f6f6;color:#000000;height:30px;border:1px solid #aaaaaa;font:12px sans-serif}.qs_button:active{background-color:#ffffff;border:1px solid #aaaaaa}.qs_button:focus{border:1px solid #aaaaaa;outline:none}.qs_checkbox{cursor:pointer}.qs_checkbox input{position:absolute;left:-99999px}.qs_checkbox span{height:16px;width:100%;display:block;text-indent:20px;background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAALklEQVQ4T2OcOXPmfwYKACPIgLS0NLKMmDVrFsOoAaNhMJoOGBioFwZkZUWoJgApdFaxjUM1YwAAAABJRU5ErkJggg==') no-repeat}.qs_checkbox input:checked+span{background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAvElEQVQ4T63Tyw2EIBAA0OFKBxBL40wDRovAUACcKc1IB1zZDAkG18GYZTmSmafzgTnnMgwchoDWGlJKheGcP3JtnPceCqCUAmttSZznuYtgchsXQrgC+77DNE0kUpPbmBOoJaBOIVQylnqWgAAeKhDve/AN+EaklJBzhhgjWRoJVGTbNjiOowAIret6a+4jYIwpX8aDwLIs74C2D0IIYIyVP6Gm898m9kbVm85ljHUTf16k4VUefkwDrxk+zoUEwCt0GbUAAAAASUVORK5CYII=') no-repeat}.qs_checkbox_label{position:absolute;top:7px;left:30px}.qs_label{margin-bottom:3px;user-select:none;-webkit-user-select:none;cursor:default;font:12px sans-serif}.qs_text_input{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;width:100%;padding:0 0 0 5px;height:24px;border:1px inset #ffffff;background-color:#ffffff;color:#000000;font-size:12px}.qs_text_input:focus{outline:none;background:#ffffff;border:1px inset #ffffff}.qs_select{background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAp0lEQVRIS+2SsQ3FIAwF7RVYhA5mgQFhFuhYhJKWL0eKxI8SGylKZ0p4+OBsHGNM+HChAiS7qkgyBKrovaLeOxhjbgtxZ+cFtgelFMg5QwgBvPd/EO5sDbKAlBLUWo/8CjmL075zDmKMj6rEKbpCqBL9aqc4ZUQAhVbInBMQUXz5Vg/WfxOktXZsWWtZLds9uIqlqaH1NFV3jdhSJA47E1CAaE8ViYp+wGiWMZ/T+cgAAAAASUVORK5CYII=') no-repeat right #f6f6f6;-webkit-appearance:none;-moz-appearance:none;appearance:none;color:#000000;width:100%;height:24px;border:1px solid #aaaaaa;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;padding:0 5px;-moz-outline:none;font-size:14px}.qs_select option{font-size:14px}.qs_select::-ms-expand{display:none}.qs_select:focus{outline:none}.qs_number{height:24px}.qs_image{width:100%}.qs_progress{width:100%;height:15px;background-color:#cccccc;border:none;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.qs_progress_value{height:100%;background-color:#999999}.qs_textarea{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;resize:vertical;width:100%;padding:3px 5px;border:1px inset #ffffff;background-color:#ffffff;color:#000000;font-size:12px}.qs_textarea:focus{outline:none;background:#ffffff;border:1px inset #ffffff}.qs_color{position:absolute;left:-999999px}.qs_color_label{width:100%;height:20px;display:block;border:1px solid #aaaaaa;cursor:pointer;padding:0 0 0 5px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.qs_file_chooser{position:absolute;left:-999999px}.qs_file_chooser_label{background-color:#f6f6f6;color:#000000;height:30px;border:1px solid #aaaaaa;font:12px sans-serif;width:100%;display:block;cursor:pointer;padding:7px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}", j = { _version: "2.1", _topZ: 1, _panel: null, _titleBar: null, _content: null, _startX: 0, _startY: 0, _hidden: false, _collapsed: false, _controls: null, _keyCode: -1, _draggable: true, _collapsible: true, _globalChangeHandler: null, useExtStyleSheet: function() {
          h = true;
        }, create: function(a2, b2, c2, d2) {
          var e2 = Object.create(this);
          return e2._init(a2, b2, c2, d2), e2;
        }, destroy: function() {
          this._panel.parentElement && this._panel.parentElement.removeChild(this._panel);
          for (var a2 in this) this[a2] = null;
        }, _init: function(a2, b2, c2, d2) {
          h || g(), this._bindHandlers(), this._createPanel(a2, b2, d2), this._createTitleBar(c2 || "QuickSettings"), this._createContent();
        }, _bindHandlers: function() {
          this._startDrag = this._startDrag.bind(this), this._drag = this._drag.bind(this), this._endDrag = this._endDrag.bind(this), this._doubleClickTitle = this._doubleClickTitle.bind(this), this._onKeyUp = this._onKeyUp.bind(this);
        }, getValuesAsJSON: function(a2) {
          var b2 = {};
          for (var c2 in this._controls) this._controls[c2].getValue && (b2[c2] = this._controls[c2].getValue());
          return a2 && (b2 = JSON.stringify(b2)), b2;
        }, setValuesFromJSON: function(a2) {
          "string" == typeof a2 && (a2 = JSON.parse(a2));
          for (var b2 in a2) this._controls[b2].setValue && this._controls[b2].setValue(a2[b2]);
          return this;
        }, saveInLocalStorage: function(a2) {
          return this._localStorageName = a2, this._readFromLocalStorage(a2), this;
        }, clearLocalStorage: function(a2) {
          return localStorage.removeItem(a2), this;
        }, _saveInLocalStorage: function(a2) {
          localStorage.setItem(a2, this.getValuesAsJSON(true));
        }, _readFromLocalStorage: function(a2) {
          var b2 = localStorage.getItem(a2);
          b2 && this.setValuesFromJSON(b2);
        }, _createPanel: function(a2, b2, d2) {
          this._panel = c("div", null, "qs_main", d2 || document.body), this._panel.style.zIndex = ++j._topZ, this.setPosition(a2 || 0, b2 || 0), this._controls = {};
        }, _createTitleBar: function(a2) {
          this._titleBar = c("div", null, "qs_title_bar", this._panel), this._titleBar.textContent = a2, this._titleBar.addEventListener("mousedown", this._startDrag), this._titleBar.addEventListener("dblclick", this._doubleClickTitle);
        }, _createContent: function() {
          this._content = c("div", null, "qs_content", this._panel);
        }, _createContainer: function() {
          var a2 = c("div", null, "qs_container");
          return a2.addEventListener("focus", function() {
            this.className += " qs_container_selected";
          }, true), a2.addEventListener("blur", function() {
            var a3 = this.className.indexOf(" qs_container_selected");
            a3 > -1 && (this.className = this.className.substr(0, a3));
          }, true), this._content.appendChild(a2), a2;
        }, setPosition: function(a2, b2) {
          return this._panel.style.left = a2 + "px", this._panel.style.top = Math.max(b2, 0) + "px", this;
        }, setSize: function(a2, b2) {
          return this._panel.style.width = a2 + "px", this._content.style.width = a2 + "px", this._content.style.height = b2 - this._titleBar.offsetHeight + "px", this;
        }, setWidth: function(a2) {
          return this._panel.style.width = a2 + "px", this._content.style.width = a2 + "px", this;
        }, setHeight: function(a2) {
          return this._content.style.height = a2 - this._titleBar.offsetHeight + "px", this;
        }, setDraggable: function(a2) {
          return this._draggable = a2, this._draggable || this._collapsible ? this._titleBar.style.cursor = "pointer" : this._titleBar.style.cursor = "default", this;
        }, _startDrag: function(a2) {
          this._draggable && (this._panel.style.zIndex = ++j._topZ, document.addEventListener("mousemove", this._drag), document.addEventListener("mouseup", this._endDrag), this._startX = a2.clientX, this._startY = a2.clientY), a2.preventDefault();
        }, _drag: function(a2) {
          var b2 = parseInt(this._panel.style.left), c2 = parseInt(this._panel.style.top), d2 = a2.clientX, e2 = a2.clientY;
          this.setPosition(b2 + d2 - this._startX, c2 + e2 - this._startY), this._startX = d2, this._startY = e2, a2.preventDefault();
        }, _endDrag: function(a2) {
          document.removeEventListener("mousemove", this._drag), document.removeEventListener("mouseup", this._endDrag), a2.preventDefault();
        }, setGlobalChangeHandler: function(a2) {
          return this._globalChangeHandler = a2, this;
        }, _callGCH: function() {
          this._localStorageName && this._saveInLocalStorage(this._localStorageName), this._globalChangeHandler && this._globalChangeHandler();
        }, hide: function() {
          return this._panel.style.visibility = "hidden", this._hidden = true, this;
        }, show: function() {
          return this._panel.style.visibility = "visible", this._panel.style.zIndex = ++j._topZ, this._hidden = false, this;
        }, toggleVisibility: function() {
          return this._hidden ? this.show() : this.hide(), this;
        }, setCollapsible: function(a2) {
          return this._collapsible = a2, this._draggable || this._collapsible ? this._titleBar.style.cursor = "pointer" : this._titleBar.style.cursor = "default", this;
        }, collapse: function() {
          return this._panel.removeChild(this._content), this._collapsed = true, this;
        }, expand: function() {
          return this._panel.appendChild(this._content), this._collapsed = false, this;
        }, toggleCollapsed: function() {
          return this._collapsed ? this.expand() : this.collapse(), this;
        }, setKey: function(a2) {
          return this._keyCode = a2.toUpperCase().charCodeAt(0), document.body.addEventListener("keyup", this.onKeyUp), this;
        }, _onKeyUp: function(a2) {
          a2.keyCode === this._keyCode && this.toggleVisibility();
        }, _doubleClickTitle: function() {
          this._collapsible && this.toggleCollapsed();
        }, removeControl: function(a2) {
          if (this._controls[a2]) var b2 = this._controls[a2].container;
          return b2 && b2.parentElement && b2.parentElement.removeChild(b2), this._controls[a2] = null, this;
        }, enableControl: function(a2) {
          return this._controls[a2] && (this._controls[a2].control.disabled = false), this;
        }, disableControl: function(a2) {
          return this._controls[a2] && (this._controls[a2].control.disabled = true), this;
        }, hideControl: function(a2) {
          return this._controls[a2] && (this._controls[a2].container.style.display = "none"), this;
        }, showControl: function(a2) {
          return this._controls[a2] && (this._controls[a2].container.style.display = "block"), this;
        }, overrideStyle: function(a2, b2, c2) {
          return this._controls[a2] && (this._controls[a2].control.style[b2] = c2), this;
        }, hideTitle: function(a2) {
          var b2 = this._controls[a2].label;
          return b2 && (b2.style.display = "none"), this;
        }, showTitle: function(a2) {
          var b2 = this._controls[a2].label;
          return b2 && (b2.style.display = "block"), this;
        }, hideAllTitles: function() {
          for (var a2 in this._controls) {
            var b2 = this._controls[a2].label;
            b2 && (b2.style.display = "none");
          }
          return this;
        }, showAllTitles: function() {
          for (var a2 in this._controls) {
            var b2 = this._controls[a2].label;
            b2 && (b2.style.display = "block");
          }
          return this;
        }, getValue: function(a2) {
          return this._controls[a2].getValue();
        }, setValue: function(a2, b2) {
          return this._controls[a2].setValue(b2), this._callGCH(), this;
        }, addBoolean: function(a2, d2, e2) {
          var f2 = this._createContainer(), g2 = c("label", null, "qs_checkbox_label", f2);
          g2.textContent = a2, g2.setAttribute("for", a2);
          var h2 = c("label", null, "qs_checkbox", f2);
          h2.setAttribute("for", a2);
          var i2 = b("checkbox", a2, null, h2);
          i2.checked = d2;
          c("span", null, null, h2);
          this._controls[a2] = { container: f2, control: i2, getValue: function() {
            return this.control.checked;
          }, setValue: function(a3) {
            this.control.checked = a3, e2 && e2(a3);
          } };
          var j2 = this;
          return i2.addEventListener("change", function() {
            e2 && e2(i2.checked), j2._callGCH();
          }), this;
        }, bindBoolean: function(a2, b2, c2) {
          return this.addBoolean(a2, b2, function(b3) {
            c2[a2] = b3;
          });
        }, addButton: function(a2, c2) {
          var d2 = this._createContainer(), e2 = b("button", a2, "qs_button", d2);
          e2.value = a2, this._controls[a2] = { container: d2, control: e2 };
          var f2 = this;
          return e2.addEventListener("click", function() {
            c2 && c2(e2), f2._callGCH();
          }), this;
        }, addColor: function(g2, h2, i2) {
          if (e() || f() || d()) return this.addText(g2, h2, i2);
          var j2 = this._createContainer(), k = a("<b>" + g2 + ":</b> " + h2, j2), l = b("color", g2, "qs_color", j2);
          l.value = h2 || "#ff0000";
          var m = c("label", null, "qs_color_label", j2);
          m.setAttribute("for", g2), m.style.backgroundColor = l.value, this._controls[g2] = { container: j2, control: l, colorLabel: m, label: k, title: g2, getValue: function() {
            return this.control.value;
          }, setValue: function(a2) {
            this.control.value = a2, this.colorLabel.style.backgroundColor = l.value, this.label.innerHTML = "<b>" + this.title + ":</b> " + this.control.value, i2 && i2(a2);
          } };
          var n = this;
          return l.addEventListener("input", function() {
            k.innerHTML = "<b>" + g2 + ":</b> " + l.value, m.style.backgroundColor = l.value, i2 && i2(l.value), n._callGCH();
          }), this;
        }, bindColor: function(a2, b2, c2) {
          return this.addColor(a2, b2, function(b3) {
            c2[a2] = b3;
          });
        }, addDate: function(c2, e2, f2) {
          var g2;
          if (e2 instanceof Date) {
            var h2 = e2.getFullYear(), i2 = e2.getMonth() + 1;
            i2 < 10 && (i2 = "0" + i2);
            var j2 = e2.getDate();
            g2 = h2 + "-" + i2 + "-" + j2;
          } else g2 = e2;
          if (d()) return this.addText(c2, g2, f2);
          var k = this._createContainer(), l = a("<b>" + c2 + "</b>", k), m = b("date", c2, "qs_text_input", k);
          m.value = g2 || "", this._controls[c2] = { container: k, control: m, label: l, getValue: function() {
            return this.control.value;
          }, setValue: function(a2) {
            var b2;
            if (a2 instanceof Date) {
              var c3 = a2.getFullYear(), d2 = a2.getMonth() + 1;
              d2 < 10 && (d2 = "0" + d2);
              var e3 = a2.getDate();
              e3 < 10 && (e3 = "0" + e3), b2 = c3 + "-" + d2 + "-" + e3;
            } else b2 = a2;
            this.control.value = b2 || "", f2 && f2(b2);
          } };
          var n = this;
          return m.addEventListener("input", function() {
            f2 && f2(m.value), n._callGCH();
          }), this;
        }, bindDate: function(a2, b2, c2) {
          return this.addDate(a2, b2, function(b3) {
            c2[a2] = b3;
          });
        }, addDropDown: function(b2, d2, e2) {
          for (var f2 = this._createContainer(), g2 = a("<b>" + b2 + "</b>", f2), h2 = c("select", null, "qs_select", f2), i2 = 0; i2 < d2.length; i2++) {
            var j2 = c("option");
            j2.label = d2[i2], j2.innerText = d2[i2], h2.add(j2);
          }
          var k = this;
          return h2.addEventListener("change", function() {
            var a2 = h2.selectedIndex, b3 = h2.options;
            e2 && e2({ index: a2, value: b3[a2].label }), k._callGCH();
          }), this._controls[b2] = { container: f2, control: h2, label: g2, getValue: function() {
            var a2 = this.control.selectedIndex;
            return { index: a2, value: this.control.options[a2].label };
          }, setValue: function(a2) {
            var b3;
            b3 = null != a2.index ? a2.index : a2;
            var c2 = this.control.options;
            this.control.selectedIndex = b3, e2 && e2({ index: b3, value: c2[b3].label });
          } }, this;
        }, bindDropDown: function(a2, b2, c2) {
          return this.addDropDown(a2, b2, function(b3) {
            c2[a2] = b3.value;
          });
        }, addElement: function(b2, c2) {
          var d2 = this._createContainer(), e2 = a("<b>" + b2 + "</b>", d2);
          return d2.appendChild(c2), this._controls[b2] = { container: d2, label: e2 }, this;
        }, addFileChooser: function(d2, e2, f2, g2) {
          var h2 = this._createContainer(), i2 = a("<b>" + d2 + "</b>", h2), j2 = b("file", d2, "qs_file_chooser", h2);
          f2 && (j2.accept = f2);
          var k = c("label", null, "qs_file_chooser_label", h2);
          k.setAttribute("for", d2), k.textContent = e2 || "Choose a file...", this._controls[d2] = { container: h2, control: j2, label: i2, getValue: function() {
            return this.control.files[0];
          } };
          var l = this;
          return j2.addEventListener("change", function() {
            j2.files && j2.files.length && (k.textContent = j2.files[0].name, g2 && g2(j2.files[0]), l._callGCH());
          }), this;
        }, addHTML: function(b2, d2) {
          var e2 = this._createContainer(), f2 = a("<b>" + b2 + ":</b> ", e2), g2 = c("div", null, null, e2);
          return g2.innerHTML = d2, this._controls[b2] = { label: f2, control: g2, getValue: function() {
            return this.control.innerHTML;
          }, setValue: function(a2) {
            this.control.innerHTML = a2;
          } }, this;
        }, addImage: function(b2, d2) {
          var e2 = this._createContainer(), f2 = a("<b>" + b2 + "</b>", e2);
          return img = c("img", null, "qs_image", e2), img.src = d2, this._controls[b2] = { container: e2, control: img, label: f2, getValue: function() {
            return this.control.src;
          }, setValue: function(a2) {
            this.control.src = a2;
          } }, this;
        }, addRange: function(a2, b2, c2, d2, e2, f2) {
          return this._addNumber("range", a2, b2, c2, d2, e2, f2);
        }, addNumber: function(a2, b2, c2, d2, e2, f2) {
          return this._addNumber("number", a2, b2, c2, d2, e2, f2);
        }, _addNumber: function(c2, e2, f2, g2, h2, i2, j2) {
          var k = this._createContainer(), l = a("", k), m = "range" === c2 ? "qs_range" : "qs_text_input qs_number", n = b(c2, e2, m, k);
          n.min = f2 || 0, n.max = g2 || 100, n.step = i2 || 1, n.value = h2 || 0, l.innerHTML = "<b>" + e2 + ":</b> " + n.value, this._controls[e2] = { container: k, control: n, label: l, title: e2, callback: j2, getValue: function() {
            return parseFloat(this.control.value);
          }, setValue: function(a2) {
            this.control.value = a2, this.label.innerHTML = "<b>" + this.title + ":</b> " + this.control.value, j2 && j2(parseFloat(a2));
          } };
          var o = "input";
          "range" === c2 && d() && (o = "change");
          var p = this;
          return n.addEventListener(o, function() {
            l.innerHTML = "<b>" + e2 + ":</b> " + n.value, j2 && j2(parseFloat(n.value)), p._callGCH();
          }), this;
        }, bindRange: function(a2, b2, c2, d2, e2, f2) {
          return this.addRange(a2, b2, c2, d2, e2, function(b3) {
            f2[a2] = b3;
          });
        }, bindNumber: function(a2, b2, c2, d2, e2, f2) {
          return this.addNumber(a2, b2, c2, d2, e2, function(b3) {
            f2[a2] = b3;
          });
        }, setRangeParameters: function(a2, b2, c2, d2) {
          return this.setNumberParameters(a2, b2, c2, d2);
        }, setNumberParameters: function(a2, b2, c2, d2) {
          var e2 = this._controls[a2], f2 = e2.control.value;
          return e2.control.min = b2, e2.control.max = c2, e2.control.step = d2, e2.control.value !== f2 && e2.callback && e2.callback(e2.control.value), this;
        }, addPassword: function(a2, b2, c2) {
          return this._addText("password", a2, b2, c2);
        }, bindPassword: function(a2, b2, c2) {
          return this.addPassword(a2, b2, function(b3) {
            c2[a2] = b3;
          });
        }, addProgressBar: function(b2, d2, e2, f2) {
          var g2 = this._createContainer(), h2 = a("", g2), i2 = c("div", null, "qs_progress", g2), j2 = c("div", null, "qs_progress_value", i2);
          return j2.style.width = e2 / d2 * 100 + "%", "numbers" === f2 ? h2.innerHTML = "<b>" + b2 + ":</b> " + e2 + " / " + d2 : "percent" === f2 ? h2.innerHTML = "<b>" + b2 + ":</b> " + Math.round(e2 / d2 * 100) + "%" : h2.innerHTML = "<b>" + b2 + "</b>", this._controls[b2] = { container: g2, control: i2, valueDiv: j2, valueDisplay: f2, label: h2, value: e2, max: d2, title: b2, getValue: function() {
            return this.value;
          }, setValue: function(a2) {
            this.value = Math.max(0, Math.min(a2, this.max)), this.valueDiv.style.width = this.value / this.max * 100 + "%", "numbers" === this.valueDisplay ? this.label.innerHTML = "<b>" + this.title + ":</b> " + this.value + " / " + this.max : "percent" === this.valueDisplay && (this.label.innerHTML = "<b>" + this.title + ":</b> " + Math.round(this.value / this.max * 100) + "%");
          } }, this;
        }, setProgressMax: function(a2, b2) {
          var c2 = this._controls[a2];
          return c2.max = b2, c2.value = Math.min(c2.value, c2.max), c2.valueDiv.style.width = c2.value / c2.max * 100 + "%", "numbers" === c2.valueDisplay ? c2.label.innerHTML = "<b>" + c2.title + ":</b> " + c2.value + " / " + c2.max : "percent" === c2.valueDisplay ? c2.label.innerHTML = "<b>" + c2.title + ":</b> " + Math.round(c2.value / c2.max * 100) + "%" : c2.label.innerHTML = "<b>" + c2.title + "</b>", this;
        }, addText: function(a2, b2, c2) {
          return this._addText("text", a2, b2, c2);
        }, _addText: function(d2, e2, f2, g2) {
          var h2, i2 = this._createContainer(), j2 = a("<b>" + e2 + "</b>", i2);
          "textarea" === d2 ? (h2 = c("textarea", e2, "qs_textarea", i2), h2.rows = 5) : h2 = b(d2, e2, "qs_text_input", i2), h2.value = f2 || "", this._controls[e2] = { container: i2, control: h2, label: j2, getValue: function() {
            return this.control.value;
          }, setValue: function(a2) {
            this.control.value = a2, g2 && g2(a2);
          } };
          var k = this;
          return h2.addEventListener("input", function() {
            g2 && g2(h2.value), k._callGCH();
          }), this;
        }, bindText: function(a2, b2, c2) {
          return this.addText(a2, b2, function(b3) {
            c2[a2] = b3;
          });
        }, addTextArea: function(a2, b2, c2) {
          return this._addText("textarea", a2, b2, c2);
        }, setTextAreaRows: function(a2, b2) {
          return this._controls[a2].control.rows = b2, this;
        }, bindTextArea: function(a2, b2, c2) {
          return this.addTextArea(a2, b2, function(b3) {
            c2[a2] = b3;
          });
        }, addTime: function(c2, e2, f2) {
          var g2;
          if (e2 instanceof Date) {
            var h2 = e2.getHours();
            h2 < 10 && (h2 = "0" + h2);
            var i2 = e2.getMinutes();
            i2 < 10 && (i2 = "0" + i2);
            var j2 = e2.getSeconds();
            j2 < 10 && (j2 = "0" + j2), g2 = h2 + ":" + i2 + ":" + j2;
          } else g2 = e2;
          if (d()) return this.addText(c2, g2, f2);
          var k = this._createContainer(), l = a("<b>" + c2 + "</b>", k), m = b("time", c2, "qs_text_input", k);
          m.value = g2 || "", this._controls[c2] = { container: k, control: m, label: l, getValue: function() {
            return this.control.value;
          }, setValue: function(a2) {
            var b2;
            if (a2 instanceof Date) {
              var c3 = a2.getHours();
              c3 < 10 && (c3 = "0" + c3);
              var d2 = a2.getMinutes();
              d2 < 10 && (d2 = "0" + d2);
              var e3 = a2.getSeconds();
              e3 < 10 && (e3 = "0" + e3), b2 = c3 + ":" + d2 + ":" + e3;
            } else b2 = a2;
            this.control.value = b2 || "", f2 && f2(b2);
          } };
          var n = this;
          return m.addEventListener("input", function() {
            f2 && f2(m.value), n._callGCH();
          }), this;
        }, bindTime: function(a2, b2, c2) {
          return this.addTime(a2, b2, function(b3) {
            c2[a2] = b3;
          });
        } };
        "object" == typeof exports && "object" == typeof module ? module.exports = j : "function" == typeof define && define.amd ? define(j) : window.QuickSettings = j;
      }();
    }
  });

  // lib/contextmenu/contextmenu.js
  var require_contextmenu = __commonJS({
    "lib/contextmenu/contextmenu.js"(exports, module) {
      "use strict";
      (function() {
        "use strict";
        var conf = {
          event: "click",
          position: "bottom",
          horizontalOffset: 0,
          verticalOffset: 0,
          data: {}
        };
        var isOpen2 = false;
        var target = null;
        var menuClassName = "context-menu";
        var itemClassName = "context-menu-item";
        var itemClassNameDisabled = "context-menu-item-disabled";
        var isFunction = function(obj) {
          return !!(obj && obj.constructor && obj.call && obj.apply);
        };
        var isString = function(obj) {
          return typeof obj === "string" || obj instanceof String;
        };
        var extend = function(obj) {
          var length = arguments.length;
          if (length < 2 || obj === null) {
            return obj;
          }
          for (var idx = 1; idx < length; idx++) {
            var source = arguments[idx];
            for (var key in source) {
              obj[key] = source[key];
            }
          }
          return obj;
        };
        var getElements = function(selector) {
          var elements = [];
          if (typeof jQuery !== "undefined" && selector instanceof jQuery) {
            return selector;
          }
          if (selector instanceof HTMLElement) {
            return [selector];
          }
          if (isString(selector)) {
            return document.querySelectorAll(selector);
          }
          if (selector instanceof NodeList) {
            return selector;
          }
          return elements;
        };
        var onContextMenu = function(e) {
          e.stopPropagation();
          e.preventDefault();
          target = e.target;
          closeContextMenu();
          if (target.ctxMenu) {
            var menu = createContextMenu(target);
            document.body.appendChild(menu);
            isOpen2 = true;
            setTimeout(function() {
              window.addEventListener("click", closeContextMenu);
              window.addEventListener("resize", closeContextMenu);
              window.addEventListener("scroll", closeContextMenu);
              menu.style.visibility = "visible";
              positionContextMenu(e, target, menu);
            }, 1);
          }
        };
        var createContextMenu = function(target2) {
          var key;
          var contextMenu = document.createElement("div");
          contextMenu.className = menuClassName;
          contextMenu.style.visibility = "hidden";
          contextMenu.style.display = "inline-block";
          for (key in target2.ctxMenu.menu) {
            var value = target2.ctxMenu.menu[key];
            var item = document.createElement("div");
            item.ctxMenu = {
              key,
              enabled: value.enabled ? true : false
            };
            if (item.ctxMenu.enabled) {
              item.className = itemClassName;
            } else {
              item.className = itemClassNameDisabled;
            }
            item.innerHTML = value && value.label ? value.label : key;
            if (item.ctxMenu.enabled) {
              if (isFunction(value.onSelect)) {
                item.ctxMenu.onSelect = value.onSelect;
              } else {
                item.ctxMenu.onSelect = onSelect;
              }
              item.addEventListener(target2.ctxMenu.event, function(e) {
                this.ctxMenu.onSelect(target2, this.ctxMenu.key, item, target2.ctxMenu.data);
                closeContextMenu();
              });
            }
            if (value.title) {
              item.title = value.title;
            }
            contextMenu.appendChild(item);
          }
          return contextMenu;
        };
        var positionContextMenu = function(e, target2, menu) {
          var left = 0;
          var top = 0;
          var targetBox = target2.getBoundingClientRect();
          var menuBox = menu.getBoundingClientRect();
          var position = "click";
          if (target2.ctxMenu && target2.ctxMenu.position) {
            position = target2.ctxMenu.position;
          }
          if (position === "bottom") {
            left = targetBox.left + target2.ctxMenu.horizontalOffset;
            top = targetBox.bottom + target2.ctxMenu.verticalOffset;
          } else if (position === "top") {
            left = targetBox.left + target2.ctxMenu.horizontalOffset;
            top = targetBox.top - menuBox.height + target2.ctxMenu.verticalOffset;
          } else if (position === "right") {
            left = targetBox.left + targetBox.width + target2.ctxMenu.horizontalOffset;
            top = targetBox.top + target2.ctxMenu.verticalOffset;
          } else if (position === "left") {
            left = targetBox.left - menuBox.width + target2.ctxMenu.horizontalOffset;
            top = targetBox.top + target2.ctxMenu.verticalOffset;
          } else {
            left = e.clientX + target2.ctxMenu.horizontalOffset;
            top = e.clientY + target2.ctxMenu.verticalOffset;
          }
          if (left < 0) {
            if (target2.ctxMenu.horizontalOffset >= 0) {
              left = target2.ctxMenu.horizontalOffset;
            } else {
              left = 0;
            }
          }
          if (top < 0) {
            if (target2.ctxMenu.verticalOffset >= 0) {
              top = target2.ctxMenu.verticalOffset;
            } else {
              top = 0;
            }
          }
          if (left + menuBox.width > document.body.clientWidth) {
            if (target2.ctxMenu.horizontalOffset >= 0) {
              left = document.body.clientWidth - menuBox.width;
            } else {
              left = document.body.clientWidth - menuBox.width + target2.ctxMenu.horizontalOffset;
            }
          }
          if (top + menuBox.height > document.body.clientHeight) {
            if (target2.ctxMenu.verticalOffset >= 0) {
              top = document.body.clientHeight - menuBox.height;
            } else {
              top = document.body.clientHeight - menuBox.height + target2.ctxMenu.verticalOffset;
            }
          }
          menu.style.left = left + "px";
          menu.style.top = top + "px";
        };
        var onSelect = function(target2, key, item) {
        };
        var closeContextMenu = function() {
          var idx = 0;
          var elements = document.getElementsByClassName(menuClassName);
          window.removeEventListener("click", closeContextMenu);
          window.removeEventListener("resize", closeContextMenu);
          window.removeEventListener("scroll", closeContextMenu);
          for (idx = 0; idx < elements.length; idx++) {
            elements[idx].parentNode.removeChild(elements[idx]);
          }
          isOpen2 = false;
        };
        var setEnabledState = function(selector, key, enabled) {
          var idx = 0;
          var elements = getElements(selector);
          for (idx = 0; idx < elements.length; idx++) {
            if (elements[idx].ctxMenu.menu.hasOwnProperty(key)) {
              elements[idx].ctxMenu.menu[key].enabled = enabled;
            }
          }
        };
        var normalizeMenu = function(menu) {
          var idx;
          var itemDefaults = {
            type: "item",
            enabled: true,
            label: "",
            onSelect: function() {
            },
            icon: "",
            // This isn't used yet
            title: ""
          };
          for (idx in menu) {
            var dflt = extend({}, itemDefaults);
            if (!menu[idx]) {
              menu[idx] = extend(dflt, { label: idx });
            } else if (isFunction(menu[idx])) {
              menu[idx] = extend(dflt, { label: idx, onSelect: menu[idx] });
            } else {
              menu[idx] = extend(dflt, menu[idx]);
            }
          }
          return menu;
        };
        var ContextMenu2 = {
          /**
           * Attach a context menu to one or more elements. This is the
           * API that will be used most often.
           *
           * @param {jQuery|NodeList|HTMLElement|String} selector
           * @param {Array|Object} menu
           * @param {Object} options
           */
          attach: function(selector, menu, options) {
            var idx = 0;
            menu = normalizeMenu(menu);
            var obj = extend({ menu: extend({}, menu) }, conf, options);
            var elements = getElements(selector);
            for (idx = 0; idx < elements.length; idx++) {
              elements[idx].ctxMenu = obj;
              elements[idx].addEventListener(obj.event, onContextMenu);
            }
          },
          /**
           * Display a context menu with an element or event. 
           * Useful for when you don't want to attach the context
           * menu to a whole bunch of things but just display it
           * dynamically.
           * 
           * @example
           *	$( document ).on( "click", ".target-button", function( e ) {
           *		ContextMenu.display( e.target, menu, { horizontalOffset : 5 } );
           *	} );
           *	
           * @example
           *	$( document ).on( "click", ".target-button", function( e ) {
           *		ContextMenu.display( e, menu, { horizontalOffset : 5 } );
           *	} );
           * 
           * @param {Event|HTMLElement} e
           * @param {Array|Object} menu
           * @param {Object} options
           */
          display: function(e, menu, options) {
            menu = normalizeMenu(extend({}, menu));
            var contextMenu = extend({ menu: extend({}, menu) }, conf, options);
            if (e instanceof Event) {
              e.target.ctxMenu = contextMenu;
              onContextMenu(e);
            } else if (typeof jQuery !== "undefined" && e instanceof jQuery.Event) {
              e.target.ctxMenu = contextMenu;
              onContextMenu(e);
            } else if (e instanceof HTMLElement) {
              e.ctxMenu = contextMenu;
              var box = e.getBoundingClientRect();
              var evt = {
                target: e,
                clientX: box.left,
                clientY: box.top,
                stopPropagation: function() {
                },
                preventDefault: function() {
                }
              };
              onContextMenu(evt);
            } else {
              console.log(e);
            }
          },
          /**
           * Disable a menu items
           *
           * @param {jQuery|NodeList|HTMLElement|String} selector
           * @param {String|int} key The key passed in to the menu object in .attach()
           */
          disable: function(selector, key) {
            setEnabledState(selector, key, false);
          },
          /**
           * Disable a menu items
           *
           * @param {jQuery|NodeList|HTMLElement|String} selector
           * @param {String|int} key The key passed in to the menu object in .attach()
           */
          enable: function(selector, key) {
            setEnabledState(selector, key, true);
          },
          /**
           * Close context menu(s)
           */
          close: function() {
            closeContextMenu();
          },
          /**
           * Check if a context menu is open
           * @returns {boolean}
           */
          isOpen: function() {
            return isOpen2;
          }
        };
        if (typeof window.define === "function" && window.define.amd !== void 0) {
          window.define("ContextMenu", [], function() {
            return ContextMenu2;
          });
        } else if (typeof module !== "undefined" && module.exports !== void 0) {
          module.exports = ContextMenu2;
        } else {
          window.ContextMenu = ContextMenu2;
        }
      })();
    }
  });

  // package.json
  var version = "2.0.1";

  // src/utils.ts
  function round(x, digits) {
    return parseFloat(x.toFixed(digits));
  }
  function openWindow(url, width = 400, height = 300) {
    window.open(url, "_blank", `width=${width},height=${height}`);
  }

  // src/class.coord.ts
  var Coord = class _Coord {
    constructor(x = 0, y = 0) {
      this.x = x;
      this.y = y;
    }
    set(x, y) {
      this.x = x;
      this.y = y;
      return this;
    }
    static fromObject(obj) {
      return new _Coord(obj.x, obj.y);
    }
    /**
     * returns the distance between two xy coordinates
     * @param {Coord} coord1 
     * @param {Coord} coord2 
     */
    static dist(coord1, coord2) {
      return Math.sqrt(Math.pow(coord1.x - coord2.x, 2) + Math.pow(coord1.y - coord2.y, 2));
    }
    /**
     * Exchanges a value between two xy coordinates
     * @param {Coord} coord1 
     * @param {Coord} coord2 
     * @param {Axle} val
     */
    static swap(coord1, coord2, val) {
      let tmp = coord1[val];
      coord1[val] = coord2[val];
      coord2[val] = tmp;
    }
    isEmpty() {
      return !this.x && !this.y;
    }
    oneIsEmpty() {
      return !this.x || !this.y;
    }
    /**
     * returns the sum of two xy coordinates
     * @param {Coord} coord 
     */
    sum(coord) {
      return new _Coord(this.x + coord.x, this.y + coord.y);
    }
    /**
     * Add the value of the given coordinate to the current one
     * @param {Coord} coord 
     */
    add(coord) {
      this.x += coord.x;
      this.y += coord.y;
      return this;
    }
    /**
     * returns the difference of two xy coordinates
     * @param {Coord} coord 
     */
    diff(coord) {
      return new _Coord(this.x - coord.x, this.y - coord.y);
    }
    /**
     * Substract the value of the given coordinate to the current one
     * @param {Coord} coord 
     */
    sub(coord) {
      this.x -= coord.x;
      this.y -= coord.y;
      return this;
    }
    //------------------------ Start Interface Movable -------------------------------
    /**
     * Alias of add
     * @param {Coord} coord
     */
    move(coord) {
      this.add(coord);
    }
    getPosition() {
      return this;
    }
    setPosition(coord) {
      this.set(coord.x, coord.y);
      return this;
    }
    //------------------------- End Interface Movable --------------------------------
    clone() {
      return new _Coord(this.x, this.y);
    }
    invert() {
      return new _Coord(-this.x, -this.y);
    }
    toStr(dec, val, scale) {
      return round(this[val] * scale, dec).toString();
    }
    toHtml(dec, scale = 1) {
      return this.toStr(dec, "x", scale) + "," + this.toStr(dec, "y", scale);
    }
  };

  // src/class.area.ts
  var Area = class {
    /**
     * @param {Shape} shape the type of area
     * @param {Coord[]} coords the list of coordinates
     * @param {string} href the link this area is going to point to
     * @param {number} id the unique id
     */
    constructor(shape, coords = [], href = "", title = "", id = 0) {
      this.shape = shape;
      this.coords = coords;
      this.href = href;
      this.title = title;
      this.id = id;
    }
    static fromObject(o) {
      switch (o.shape) {
        case "rect":
          const r = o;
          return new AreaRect(r.coords.map(Coord.fromObject), r.href, r.title, r.id);
        case "circle":
          const c = o;
          return new AreaCircle(c.coords.map(Coord.fromObject), c.radius, c.href, c.title, c.id);
        case "poly":
          const p = o;
          return new AreaPoly(p.coords.map(Coord.fromObject), p.href, p.title, p.id, p.closed);
        case "default":
          const d = o;
          return new AreaDefault(d.iMap, d.href, d.title);
        default:
          throw "Not an area";
      }
    }
    getId() {
      return this.id;
    }
    setShape(shape) {
      this.shape = shape;
      return this;
    }
    getShape() {
      return this.shape;
    }
    /**
     * Adds a coordinate to the coords array, and returns it's new length
     * @param {Coord} coord coordinate
     */
    addCoord(coord) {
      return this.coords.push(coord);
    }
    setCoords(coords) {
      this.coords = coords;
      return this;
    }
    getCoords() {
      return this.coords;
    }
    /**
     * Returns a copy of this area's coordinates list
     */
    drawingCoords() {
      return this.coords.slice();
    }
    getPoints() {
      return this.coords;
    }
    isEmpty() {
      return this.coords.length == 0;
    }
    /**
     * @param {Area} area 
     */
    equals(area) {
      return this.id == area.id;
    }
    /**
     * Retuns a deep copy of this area's coordinates
     */
    copyCoords() {
      let copy = [];
      this.coords.forEach((val, index) => {
        copy[index] = new Coord(val.x, val.y);
      });
      return copy;
    }
    updateLastCoord(coord) {
      this.coords[this.coords.length - 1] = coord;
      return this;
    }
    //------------------------ Start Interface Movable -------------------------------
    move(coord) {
      let fcoord = this.firstCoord();
      if (coord != void 0) {
        fcoord.add(coord);
      }
    }
    getPosition() {
      return this.firstCoord();
    }
    setPosition(coord) {
      let move = this.coords[0].diff(coord);
      this.move(move);
    }
    //------------------------- End Interface Movable --------------------------------
    isValidShape() {
      return this.isDrawable();
    }
    /**
     * @param {Coord} coord 
     * @param {number} tolerance
     * @returns {Coord|false}
     */
    isOverPoint(coord, tolerance) {
      let point = this.getPoints().find((c) => {
        return Coord.dist(coord, c) < tolerance;
      });
      return point ? point : false;
    }
    setHref(url) {
      this.href = url;
      return this;
    }
    getHref() {
      return this.href;
    }
    getHrefVerbose() {
      return this.href === "" ? "undefined" : this.href;
    }
    setTitle(title) {
      this.title = title;
      return this;
    }
    getTitle() {
      return this.title;
    }
    setId(id) {
      this.id = id;
      return this;
    }
    firstCoord() {
      return this.coords[0];
    }
    htmlCoords(dec, scale) {
      return this.drawingCoords().map((c) => {
        return c.toHtml(dec, scale);
      }).join(",");
    }
    toHtml(scale = 1) {
      let htmlCoords = this.htmlCoords(0, scale);
      htmlCoords = htmlCoords ? `coords="${htmlCoords}"` : "";
      const href = this.href ? `href="${this.href}"` : "nohref";
      const title = this.title ? `title="${this.title}"` : "";
      return `<area shape="${this.shape}" ${htmlCoords} ${href} alt="${this.href}" ${title} />`;
    }
    toSvg(scale = 1) {
      return `<a xlink:href="${this.href}">${this.svgArea(scale)}</a>`;
    }
  };
  var AreaEmpty = class extends Area {
    constructor() {
      super("empty");
    }
    isDrawable() {
      return false;
    }
    svgArea(scale) {
      return "";
    }
    isOver(coord) {
      return false;
    }
    display(p) {
    }
  };
  var AreaCircle = class extends Area {
    /**
     * @param {Coord[]} coords the list of coordinates
     * @param {number} radius radius of the circle
     * @param {string} href the link this area is going to point to
     * @param {number} id the unique id
     */
    constructor(coords = [], radius = 0, href = "", title = "", id = 0) {
      super("circle", coords, href, title, id);
      this.radius = radius;
    }
    getCenter() {
      return this.firstCoord();
    }
    isValidShape() {
      return super.isValidShape() && this.radius > 0;
    }
    isDrawable() {
      return this.coords.length == 1;
    }
    isOver(coord) {
      let center = this.getCenter();
      return Coord.dist(coord, center) < this.radius;
    }
    updateLastCoord(coord) {
      let center = this.getCenter();
      this.radius = Coord.dist(center, coord);
      return this;
    }
    /**
     * draw the area to the given p5 instance
     * @param {P5} p5 
     */
    display(p52) {
      p52.ellipse(this.getCenter().x, this.getCenter().y, this.radius * 2);
    }
    htmlCoords(dec, scale) {
      return this.getCenter().toHtml(dec, scale) + "," + round(this.radius, dec);
    }
    svgArea(scale) {
      let x = this.coords[0].toStr(0, "x", scale);
      let y = this.coords[0].toStr(0, "y", scale);
      let r = round(this.radius, 0);
      return `<circle cx="${x}" cy="${y}" r="${r}" />`;
    }
  };
  var AreaPoly = class extends Area {
    /**
     * @param {Coord[]} coords the list of coordinates
     * @param {string} href the link this area is going to point to
     * @param {int} id the unique id
     */
    constructor(coords = [], href = "", title = "", id = 0, closed = false) {
      super("poly", coords, href, title, id);
      this.closed = closed;
    }
    isDrawable() {
      return this.coords.length >= 2;
    }
    isValidShape() {
      return super.isValidShape() && this.closed;
    }
    isOver(coord) {
      let x = coord.x;
      let y = coord.y;
      let cornersX = this.coords.map((c) => {
        return c.x;
      });
      let cornersY = this.coords.map((c) => {
        return c.y;
      });
      let i, j = cornersX.length - 1;
      let oddNodes = 0;
      let polyX = cornersX;
      let polyY = cornersY;
      for (i = 0; i < cornersX.length; i++) {
        if ((polyY[i] < y && polyY[j] >= y || polyY[j] < y && polyY[i] >= y) && (polyX[i] <= x || polyX[j] <= x)) {
          oddNodes ^= polyX[i] + (y - polyY[i]) / (polyY[j] - polyY[i]) * (polyX[j] - polyX[i]) < x ? 1 : 0;
        }
        j = i;
      }
      return Boolean(oddNodes);
    }
    isClosable(coord, tolerance) {
      let dist = Coord.dist(coord, this.firstCoord());
      return this.coords.length >= 4 && dist < tolerance;
    }
    drawingCoords() {
      let coords = super.drawingCoords();
      if (this.closed) {
        coords.push(this.firstCoord());
      }
      return coords;
    }
    close() {
      this.closed = true;
      this.coords.pop();
      return this;
    }
    move(coord) {
      this.coords.map((c) => c.add(coord));
    }
    /**
     * draw the area to the given p5 instance
     * @param {P5} p5 
     */
    display(p52) {
      p52.beginShape();
      this.drawingCoords().forEach((c) => p52.vertex(c.x, c.y));
      p52.endShape();
    }
    svgArea(scale) {
      let points = this.drawingCoords().map((c) => {
        return c.toStr(0, "x", scale) + "," + c.toStr(0, "y", scale);
      }).join(" ");
      return `<polygon points="${points}" />`;
    }
  };
  var AreaRect = class extends AreaPoly {
    /**
     * @param {Coord[]} coords the list of coordinates
     * @param {string} href the link this area is going to point to
     * @param {number} id the unique id
     */
    constructor(coords = [], href = "", title = "", id = 0) {
      super(coords, href, title, id, true);
      if (this.coords.length > 0 && this.coords.length < 4) {
        let coord = this.firstCoord();
        this.coords = [
          coord,
          coord.clone(),
          coord.clone(),
          coord.clone()
        ];
      }
    }
    isValidShape() {
      return super.isValidShape() && !this.isNullArea();
    }
    isNullArea() {
      return this.coords[0].x == this.coords[1].x || this.coords[0].y == this.coords[3].y;
    }
    updateLastCoord(coord) {
      this.coords[1].x = coord.x;
      this.coords[2] = coord;
      this.coords[3].y = coord.y;
      return this;
    }
  };
  var AreaDefault = class extends Area {
    /**
     * Constructor
     * @param {string} href the link this area is going to point to
     * @param {string} title the title on hover
     */
    constructor(iMap, href = "", title = "") {
      super("default", [], href, title);
      this.iMap = iMap;
      this.isDefault = true;
    }
    isDrawable() {
      return true;
    }
    isOver() {
      return true;
    }
    /**
     * draw the area to the given p5 instance
     * @param {P5} p5 
     */
    display(p52) {
      p52.rect(0, 0, this.iMap.width - 1, this.iMap.height - 1);
    }
    svgArea(scale) {
      return '<rect x="0" y="0" width="100%" height="100%" />';
    }
  };

  // src/class.image-map.ts
  var ImageMap = class {
    /**
     * Contructor
     * @param {Area[]} areas 
     * @param {string} name 
     * @param {boolean} hasDefaultArea
     */
    constructor(width, height, areas = [], name = "", hasDefaultArea = false) {
      this.width = width;
      this.height = height;
      this.areas = areas;
      this.name = name;
      this.hasDefaultArea = hasDefaultArea;
      this.dArea = new AreaDefault(this);
      this.lastId = 0;
    }
    setFromObject(obj) {
      const iMap = obj;
      iMap.dArea.iMap = this;
      this.width = iMap.width;
      this.height = iMap.height;
      this.areas = iMap.areas.map(Area.fromObject);
      this.name = iMap.name;
      this.hasDefaultArea = iMap.hasDefaultArea;
      this.dArea = Area.fromObject(iMap.dArea);
      return this;
    }
    setName(name) {
      if (name) {
        this.name = name.replace(/\s+/g, "");
      }
      return this;
    }
    getName() {
      return this.name;
    }
    setSize(width, height) {
      this.width = width;
      this.height = height;
      return this;
    }
    setDefaultArea(bool) {
      this.hasDefaultArea = bool;
      return this;
    }
    /**
     * Returns a copy of the area of the imageMap
     * @param {boolean} all with the default area (if exist) or not (default: true)
     * @returns {Area[]} a copy of the areas
     */
    getAreas(all = true) {
      let areas = this.areas.slice();
      if (all && this.hasDefaultArea) areas.push(this.dArea);
      return areas;
    }
    isEmpty() {
      return this.getAreas().length == 0;
    }
    /**
     * Adds an Area at the end of the areas array, and returns the last inserted Area's id
     * @param {Area} area an area
     */
    addArea(area, setId = true) {
      if (setId)
        area.setId(this.getNewId());
      this.areas.unshift(area);
      return area.id;
    }
    rmvArea(id) {
      let index = this.areaIndex(id);
      this.areas.splice(index, 1);
      return index;
    }
    /**
     * Move an area up or down in the areas array
     * @param {number} id 
     * @param {number} direction 
     */
    moveArea(id, direction) {
      let index = this.areaIndex(id);
      let area = this.areas[index];
      let nextIndex = index + direction;
      if (nextIndex < 0 || nextIndex >= this.areas.length)
        return false;
      this.rmvArea(id);
      this.insertArea(area, nextIndex);
      return nextIndex;
    }
    shiftArea() {
      return this.areas.shift();
    }
    popArea() {
      return this.areas.pop();
    }
    insertArea(area, index) {
      this.areas.splice(index, 0, area);
      return this.areas.length;
    }
    areaIndex(id) {
      return this.areas.findIndex((a) => {
        return a.id == id;
      });
    }
    isFirstArea(id) {
      return this.areaIndex(id) == 0;
    }
    isLastArea(id) {
      return this.areaIndex(id) == this.areas.length - 1;
    }
    getNewId() {
      this.lastId++;
      return this.lastId;
    }
    toHtml(scale = 1) {
      let areas = [];
      this.getAreas().forEach((a) => {
        if (a.isValidShape()) {
          areas.push("	" + a.toHtml(scale));
        }
      });
      return '<map name="' + this.name + '" id="' + this.name + '">\n' + areas.join("\n") + "\n</map>";
    }
    toSvg(scale = 1) {
      let areas = [];
      this.getAreas(false).forEach((a) => {
        if (a.isValidShape()) {
          areas.push("	" + a.toSvg(scale));
        }
      });
      let str = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="' + this.width + '" height="' + this.height + '">\n';
      str += areas.join("\n");
      str += "\n</svg>";
      return str;
    }
    /** Removes every areas from the areas array */
    clearAreas() {
      this.areas = [];
      return this;
    }
    setAreas(areas) {
      this.areas = areas;
      return this;
    }
  };

  // src/p5.bg-layer.ts
  var BgLayer = class {
    constructor(iMap, speed = 15, alpha = 0, over = false) {
      this.iMap = iMap;
      this.speed = speed;
      this.alpha = alpha;
      this.over = over;
    }
    appear() {
      this.over = true;
    }
    disappear() {
      this.over = false;
    }
    display() {
      if (this.over) {
        if (this.alpha < 100)
          this.alpha += this.speed;
      } else {
        if (this.alpha > 0)
          this.alpha -= this.speed;
      }
      this.iMap.p5.noStroke();
      this.iMap.p5.fill(255, 255, 255, this.alpha);
      this.iMap.p5.rect(
        this.iMap.trueX(0),
        this.iMap.trueY(0),
        this.iMap.p5.width / this.iMap.view.scale,
        this.iMap.p5.height / this.iMap.view.scale
      );
    }
  };

  // src/class.selection.ts
  var Selection = class {
    constructor() {
      this.origin = new Coord();
      this.position = this.origin.clone();
      this.areas = /* @__PURE__ */ new Map();
      this.points = /* @__PURE__ */ new Map();
    }
    resetOrigin(coord = new Coord()) {
      this.origin = coord.clone();
      this.position = coord;
      this.addPoint(coord);
    }
    /**
     * Register an Area as a part of the selection
     */
    registerArea(area) {
      this.areas.set(area.getId(), area);
    }
    /**
     * Add Area and its points to the selection
     */
    addArea(area) {
      this.registerArea(area);
      area.getCoords().forEach((p) => this.addPoint(p));
    }
    addPoint(point) {
      const prev = this.points.get(point) || 0;
      this.points.set(point, prev + 1);
    }
    containsArea(area) {
      return this.areas.has(area.getId());
    }
    containsPoint(point) {
      return this.points.has(point);
    }
    distToOrigin() {
      return this.getPosition().diff(this.origin);
    }
    clear() {
      this.areas.clear();
      this.points.clear();
      this.origin = new Coord();
    }
    isEmpty() {
      return this.points.size == 0;
    }
    //------------------------ Start Interface Movable -------------------------------
    move(coord) {
      this.points.forEach((nb, c) => {
        c.move(coord);
      });
    }
    getPosition() {
      return this.position;
    }
    setPosition(coord) {
      const move = coord.diff(this.position);
      this.move(move);
    }
    //------------------------- End Interface Movable --------------------------------
  };

  // src/p5.image-map-creator.ts
  var import_downloadjs = __toESM(require_download());
  var import_undo_manager = __toESM(require_undomanager());
  var import_quicksettings = __toESM(require_quicksettings_min());
  var ContextMenu = __toESM(require_contextmenu());
  var Save = class {
    constructor(version2, map) {
      this.version = version2;
      this.map = map;
    }
  };
  var imageMapCreator = class {
    /**
     * Constructor
     * @param {string} elementId id of the html container
     * @param {number} width
     * @param {number} height
     */
    constructor(elementId, width = 600, height = 450) {
      this.menu = {
        SetUrl: {
          onSelect: (target, key, item, area) => {
            this.setAreaUrl(area);
          },
          label: "Set url"
        },
        SetTitle: {
          onSelect: (target, key, item, area) => {
            this.setAreaTitle(area);
          },
          label: "Set title"
        },
        Delete: (target, key, item, area) => {
          this.deleteArea(area);
        },
        MoveFront: {
          onSelect: (target, key, item, area) => {
            this.moveArea(area, -1);
          },
          enabled: true,
          label: "Move Forward"
        },
        MoveBack: {
          onSelect: (target, key, item, area) => {
            this.moveArea(area, 1);
          },
          enabled: true,
          label: "Move Backward"
        }
      };
      const element = document.getElementById(elementId);
      if (!element) throw new Error("HTMLElement not found");
      this.width = width;
      this.height = height;
      this.tool = "polygon";
      this.drawingTools = ["rectangle", "circle", "polygon"];
      this.settings;
      this.tempArea = new AreaEmpty();
      this.selection = new Selection();
      this.hoveredArea = null;
      this.hoveredPoint = null;
      this.map = new ImageMap(width, height);
      this.undoManager = new import_undo_manager.default();
      this.img = { data: null, file: null };
      this.view = {
        scale: 1,
        transX: 0,
        transY: 0
      };
      this.zoomParams = {
        min: 0.03,
        max: 3,
        sensativity: 1e-3
      };
      this.magnetism = true;
      this.fusion = false;
      this.tolerance = 6;
      this.shiftToggle = false;
      this.ctrlToggle = false;
      this.shiftIndicator = null;
      this.ctrlIndicator = null;
      this.bgLayer = new BgLayer(this);
      this.p5 = new p5(this.sketch.bind(this), element);
    }
    //---------------------------- p5 Sketch ----------------------------------
    /**
     * Override p5 methods
     * @param {P5} p5
     */
    sketch(p52) {
      this.p5 = p52;
      p52.setup = this.setup.bind(this);
      p52.draw = this.draw.bind(this);
      p52.mousePressed = this.mousePressed.bind(this);
      p52.mouseDragged = this.mouseDragged.bind(this);
      p52.mouseReleased = this.mouseReleased.bind(this);
      p52.mouseWheel = this.mouseWheel.bind(this);
      p52.keyPressed = this.keyPressed.bind(this);
    }
    //---------------------------- p5 Functions ----------------------------------
    setup() {
      let canvas = this.p5.createCanvas(this.width, this.height);
      canvas.drop(this.handeFile.bind(this)).dragLeave(this.onLeave.bind(this)).dragOver(this.onOver.bind(this));
      this.settings = import_quicksettings.default.create(this.p5.width + 5, 0, "Image-map Creator", this.p5.canvas.parentElement).setDraggable(false).addText("Map Name", "", (v) => {
        this.map.setName(v);
      }).addDropDown("Tool", ["polygon", "rectangle", "circle", "select", "delete", "test"], (v) => {
        this.setTool(v.value);
      }).addBoolean("Default Area", this.map.hasDefaultArea, (v) => {
        this.setDefaultArea(v);
      }).addButton("Undo", this.undoManager.undo).addButton("Redo", this.undoManager.redo).addButton("Clear", this.clearAreas.bind(this)).addButton("Generate Html", () => {
        this.settings.setValue("Output", this.map.toHtml());
      }).addButton("Generate Svg", () => {
        this.settings.setValue("Output", this.map.toSvg());
      }).addTextArea("Output").addButton("Save", this.save.bind(this));
      this.createToggleIndicators();
      this.p5.canvas.addEventListener("contextmenu", (e) => {
        e.preventDefault();
      });
      this.p5.canvas.addEventListener("mousedown", (e) => {
        e.preventDefault();
      });
      document.getElementById("Output").setAttribute("onFocus", "this.select();");
    }
    createToggleIndicators() {
      let settingsPanel = document.querySelector(".qs_container");
      if (!settingsPanel || !settingsPanel.parentElement) {
        console.warn("Could not find settings panel to attach indicators");
        return;
      }
      let settingsContainer = settingsPanel.parentElement;
      let indicatorContainer = document.createElement("div");
      indicatorContainer.style.position = "absolute";
      indicatorContainer.style.top = "0";
      indicatorContainer.style.left = this.p5.width + 5 + "px";
      indicatorContainer.style.display = "flex";
      indicatorContainer.style.gap = "15px";
      indicatorContainer.style.padding = "10px";
      indicatorContainer.style.backgroundColor = "#f0f0f0";
      indicatorContainer.style.borderRadius = "4px";
      indicatorContainer.style.fontFamily = "Arial, sans-serif";
      indicatorContainer.style.fontSize = "12px";
      indicatorContainer.style.zIndex = "1000";
      let shiftContainer = document.createElement("div");
      shiftContainer.style.display = "flex";
      shiftContainer.style.alignItems = "center";
      shiftContainer.style.gap = "5px";
      this.shiftIndicator = document.createElement("span");
      this.shiftIndicator.style.display = "inline-block";
      this.shiftIndicator.style.width = "14px";
      this.shiftIndicator.style.height = "14px";
      this.shiftIndicator.style.borderRadius = "2px";
      this.shiftIndicator.style.backgroundColor = "#ccc";
      this.shiftIndicator.style.border = "1px solid #999";
      this.shiftIndicator.innerHTML = "";
      let shiftLabel = document.createElement("span");
      shiftLabel.textContent = "Shift";
      shiftLabel.style.fontWeight = "bold";
      let shiftHelp = document.createElement("span");
      shiftHelp.innerHTML = "\u2753";
      shiftHelp.style.cursor = "help";
      shiftHelp.style.fontSize = "14px";
      shiftHelp.title = "Snaps to straight directions (horizontal, vertical, or 45-degree diagonals).";
      shiftHelp.style.opacity = "0.6";
      shiftHelp.addEventListener("mouseenter", () => {
        shiftHelp.style.opacity = "1";
      });
      shiftHelp.addEventListener("mouseleave", () => {
        shiftHelp.style.opacity = "0.6";
      });
      shiftContainer.appendChild(this.shiftIndicator);
      shiftContainer.appendChild(shiftLabel);
      shiftContainer.appendChild(shiftHelp);
      let ctrlContainer = document.createElement("div");
      ctrlContainer.style.display = "flex";
      ctrlContainer.style.alignItems = "center";
      ctrlContainer.style.gap = "5px";
      this.ctrlIndicator = document.createElement("span");
      this.ctrlIndicator.style.display = "inline-block";
      this.ctrlIndicator.style.width = "14px";
      this.ctrlIndicator.style.height = "14px";
      this.ctrlIndicator.style.borderRadius = "2px";
      this.ctrlIndicator.style.backgroundColor = "#ccc";
      this.ctrlIndicator.style.border = "1px solid #999";
      this.ctrlIndicator.innerHTML = "";
      let ctrlLabel = document.createElement("span");
      ctrlLabel.textContent = "Ctrl";
      ctrlLabel.style.fontWeight = "bold";
      let ctrlHelp = document.createElement("span");
      ctrlHelp.innerHTML = "\u2753";
      ctrlHelp.style.cursor = "help";
      ctrlHelp.style.fontSize = "14px";
      ctrlHelp.title = "Snaps to straight directions in relation to the first point of the polygon.";
      ctrlHelp.style.opacity = "0.6";
      ctrlHelp.addEventListener("mouseenter", () => {
        ctrlHelp.style.opacity = "1";
      });
      ctrlHelp.addEventListener("mouseleave", () => {
        ctrlHelp.style.opacity = "0.6";
      });
      ctrlContainer.appendChild(this.ctrlIndicator);
      ctrlContainer.appendChild(ctrlLabel);
      ctrlContainer.appendChild(ctrlHelp);
      indicatorContainer.appendChild(shiftContainer);
      indicatorContainer.appendChild(ctrlContainer);
      settingsContainer.appendChild(indicatorContainer);
    }
    updateToggleIndicators() {
      if (this.shiftIndicator) {
        if (this.shiftToggle) {
          this.shiftIndicator.style.backgroundColor = "#4CAF50";
          this.shiftIndicator.style.boxShadow = "0 0 5px rgba(76, 175, 80, 0.7)";
        } else {
          this.shiftIndicator.style.backgroundColor = "#ccc";
          this.shiftIndicator.style.boxShadow = "none";
        }
      }
      if (this.ctrlIndicator) {
        if (this.ctrlToggle) {
          this.ctrlIndicator.style.backgroundColor = "#2196F3";
          this.ctrlIndicator.style.boxShadow = "0 0 5px rgba(33, 150, 243, 0.7)";
        } else {
          this.ctrlIndicator.style.backgroundColor = "#ccc";
          this.ctrlIndicator.style.boxShadow = "none";
        }
      }
    }
    draw() {
      this.updateTempArea();
      this.updateHovered();
      this.setCursor();
      this.setOutput();
      this.setBackground();
      this.setTitle(this.hoveredArea);
      this.updateToggleIndicators();
      this.p5.translate(this.view.transX, this.view.transY);
      this.p5.scale(this.view.scale);
      this.drawImage();
      this.bgLayer.display();
      this.drawAreas();
    }
    //------------------------------ p5 Events -----------------------------------
    mousePressed() {
      if (this.mouseIsHoverSketch()) {
        let coord = this.drawingCoord();
        if (this.p5.mouseButton == this.p5.LEFT && !ContextMenu.isOpen()) {
          switch (this.tool) {
            case "circle":
            case "rectangle":
              this.setTempArea(coord);
              break;
            case "polygon":
              let areaPoly = this.tempArea;
              if (areaPoly.isEmpty()) {
                this.setTempArea(coord);
              } else if (areaPoly.isClosable(this.mCoord(), this.tolerance / this.view.scale)) {
                areaPoly.close();
                if (areaPoly.isValidShape())
                  this.createArea(areaPoly);
                this.tempArea = new AreaEmpty();
              } else {
                this.tempArea.addCoord(this.mCoord());
              }
              break;
            case "select":
              if (this.hoveredPoint !== null) {
                this.selection.addPoint(this.hoveredPoint);
                this.selection.registerArea(this.hoveredArea);
                this.selection.resetOrigin(this.hoveredPoint);
              } else if (this.hoveredArea !== null) {
                this.selection.addArea(this.hoveredArea);
                this.selection.resetOrigin(this.mCoord());
              }
              break;
          }
        }
      }
    }
    mouseDragged() {
      if (this.mouseIsHoverSketch() && !ContextMenu.isOpen()) {
        if (this.p5.mouseButton == this.p5.LEFT) {
          switch (this.tool) {
            case "select":
              this.selection.setPosition(this.drawingCoord());
              break;
          }
        } else if (this.p5.mouseButton == this.p5.CENTER) {
          this.view.transX += this.p5.mouseX - this.p5.pmouseX;
          this.view.transY += this.p5.mouseY - this.p5.pmouseY;
        }
      }
    }
    mouseReleased(e) {
      switch (this.tool) {
        case "rectangle":
        case "circle":
          if (this.tempArea.isValidShape())
            this.createArea(this.tempArea);
          this.tempArea = new AreaEmpty();
          break;
        case "select":
          let selection = this.selection;
          if (!selection.isEmpty()) {
            let move = this.selection.distToOrigin();
            this.undoManager.add({
              undo: () => selection.move(move.invert()),
              redo: () => selection.move(move)
            });
          }
          this.selection = new Selection();
          break;
      }
      this.onClick(e);
      this.bgLayer.disappear();
    }
    mouseWheel(e) {
      if (this.mouseIsHoverSketch()) {
        let coefZoom = this.view.scale * this.zoomParams.sensativity * -e.deltaY;
        this.zoom(coefZoom);
        return false;
      }
      return true;
    }
    keyPressed(e) {
      if (e.shiftKey) {
        this.shiftToggle = !this.shiftToggle;
      } else if (e.ctrlKey) {
        this.ctrlToggle = !this.ctrlToggle;
      }
      if (e.composed && e.ctrlKey) {
        switch (e.key) {
          case "s":
            this.save();
            break;
          case "z":
            this.undoManager.undo();
            break;
          case "y":
            this.undoManager.redo();
            break;
          default:
            return true;
        }
        return false;
      } else if (this.tool == "polygon" && //@ts-ignore p5 types didn't specify the ESCAPE keycode
      e.keyCode == this.p5.ESCAPE) {
        this.tempArea = new AreaEmpty();
        return false;
      }
      return true;
    }
    //---------------------------- Functions ----------------------------------
    trueX(coord) {
      return (coord - this.view.transX) / this.view.scale;
    }
    trueY(coord) {
      return (coord - this.view.transY) / this.view.scale;
    }
    mX() {
      return this.trueX(this.p5.mouseX);
    }
    mY() {
      return this.trueY(this.p5.mouseY);
    }
    /**
     * Get the true coordinate of the mouse relative to the imageMap
     */
    mCoord() {
      return new Coord(this.mX(), this.mY());
    }
    /**
     * Get the coordinate of the mouse for drawing
     */
    drawingCoord() {
      let coord = this.mCoord();
      coord = this.magnetism ? this.hoveredPoint ? this.hoveredPoint : coord : coord;
      if (!this.fusion) {
        coord = coord.clone();
      }
      return coord;
    }
    mouseIsHoverSketch() {
      return this.p5.mouseX <= this.p5.width && this.p5.mouseX >= 0 && this.p5.mouseY <= this.p5.height && this.p5.mouseY >= 0;
    }
    /**
     * Sets hoveredPoint and hoveredArea excluding currently selected Areas
     */
    updateHovered() {
      this.hoveredPoint = null;
      let allAreas = this.map.getAreas();
      let area = allAreas.find((a) => {
        if (this.selection.containsArea(a)) {
          return false;
        }
        if (this.tool != "test") {
          let point = a.isOverPoint(this.mCoord(), this.tolerance / this.view.scale);
          if (point && !this.selection.containsPoint(point)) {
            this.hoveredPoint = point;
            return true;
          }
        }
        if (a.isOver(this.mCoord())) {
          return true;
        }
        return false;
      });
      if (this.p5.mouseIsPressed) return;
      this.hoveredArea = area ? area : null;
    }
    onClick(event) {
      if (this.mouseIsHoverSketch()) {
        if (this.hoveredArea) {
          if (this.p5.mouseButton == this.p5.RIGHT) {
            this.selection.addArea(this.hoveredArea);
            this.menu.MoveFront.enabled = !(this.map.isFirstArea(this.hoveredArea.id) || this.hoveredArea.getShape() == "default");
            this.menu.MoveBack.enabled = !(this.map.isLastArea(this.hoveredArea.id) || this.hoveredArea.getShape() == "default");
            ContextMenu.display(event, this.menu, {
              position: "click",
              data: this.hoveredArea
            });
          } else if (this.p5.mouseButton == this.p5.LEFT && !ContextMenu.isOpen()) {
            switch (this.tool) {
              case "test":
                openWindow(this.hoveredArea.getHref());
                break;
              case "delete":
                this.deleteArea(this.hoveredArea);
                break;
            }
          }
        }
      }
      this.selection.clear();
    }
    onOver(evt) {
      this.bgLayer.appear();
      evt.preventDefault();
    }
    onLeave() {
      this.bgLayer.disappear();
    }
    handeFile(file) {
      if (file.type == "image") {
        this.img.data = this.p5.loadImage(file.data, (img2) => this.resetView(img2));
        this.img.file = file.file;
        if (!this.map.getName()) {
          this.map.setName(file.name);
          this.settings.setValue("Map Name", this.map.getName());
        }
      } else if (file.subtype == "json") {
        fetch(file.data).then((res) => res.blob()).then((blob) => {
          let reader = new FileReader();
          reader.onload = () => {
            let json = reader.result;
            if (typeof json == "string") {
              this.importMap(json);
            }
          };
          reader.readAsText(blob);
        });
      }
      this.bgLayer.disappear();
    }
    resetView(img2) {
      this.view.scale = 1;
      this.view.transX = 0;
      this.view.transY = 0;
      let xScale = this.p5.width / img2.width;
      let yScale = this.p5.height / img2.height;
      if (xScale < this.view.scale)
        this.view.scale = xScale;
      if (yScale < this.view.scale)
        this.view.scale = yScale;
      this.map.setSize(img2.width, img2.height);
    }
    zoom(coef) {
      let newScale = this.view.scale + coef;
      if (newScale > this.zoomParams.min && newScale < this.zoomParams.max) {
        let mouseXToOrigin = this.mX();
        let mouseYToOrigin = this.mY();
        let transX = mouseXToOrigin * coef;
        let transY = mouseYToOrigin * coef;
        this.view.scale = newScale;
        this.view.transX -= transX;
        this.view.transY -= transY;
      }
    }
    drawImage() {
      if (this.img.data)
        this.p5.image(this.img.data, 0, 0, this.img.data.width, this.img.data.height);
    }
    drawAreas() {
      let allAreas = [this.tempArea].concat(this.map.getAreas());
      for (let i = allAreas.length; i--; ) {
        let area = allAreas[i];
        this.setAreaStyle(area);
        if (area.isDrawable())
          area.display(this.p5);
      }
      if (this.hoveredPoint) {
        let point = this.hoveredPoint;
        this.p5.fill(0);
        this.p5.noStroke();
        this.p5.ellipse(point.x, point.y, 6 / this.view.scale);
      }
    }
    setTool(value) {
      this.tool = value;
      this.tempArea = new AreaEmpty();
    }
    setCursor() {
      if (this.drawingTools.includes(this.tool)) {
        switch (this.tool) {
          case "polygon":
            let areaPoly = this.tempArea;
            if (!areaPoly.isEmpty() && areaPoly.isClosable(this.mCoord(), 5 / this.view.scale)) {
              this.p5.cursor(this.p5.HAND);
              break;
            }
          default:
            this.p5.cursor(this.p5.CROSS);
        }
      } else {
        this.p5.cursor(this.p5.ARROW);
        if (this.hoveredArea) {
          switch (this.tool) {
            case "test":
            case "delete":
              this.p5.cursor(this.p5.HAND);
              break;
            case "select":
              if (!this.hoveredPoint) {
                this.p5.cursor(this.p5.MOVE);
              }
              break;
          }
        }
      }
    }
    setOutput() {
      switch (this.tool) {
        case "test":
        case "select":
          if (this.mouseIsHoverSketch()) {
            let href = this.hoveredArea ? this.hoveredArea.getHrefVerbose() : "none";
            this.settings.setValue("Output", href);
          }
          break;
      }
    }
    setBackground() {
      this.p5.background(200);
      if (!this.img.data) {
        this.p5.noStroke();
        this.p5.fill(0);
        this.p5.textAlign(this.p5.CENTER, this.p5.CENTER);
        this.p5.textSize(15);
        let text = "Drag and drop an image and/or a .map.json save file here";
        this.p5.text(text, this.p5.width / 2, this.p5.height / 2);
      }
    }
    /**
     * Set the title of the canvas from an area
     */
    setTitle(area) {
      if (this.tool == "test" && area && area.getTitle()) {
        this.p5.canvas.setAttribute("title", area.getTitle());
      } else {
        this.p5.canvas.removeAttribute("title");
      }
    }
    setAreaStyle(area) {
      let color = this.p5.color(255, 255, 255, 178);
      if (this.tool == "test") {
        color = this.p5.color(255, 0);
      }
      if ((this.tool == "delete" || this.tool == "select") && this.mouseIsHoverSketch() && area == this.hoveredArea || this.selection.containsArea(area)) {
        color = this.p5.color(255, 200, 200, 178);
      }
      this.p5.fill(color);
      this.p5.strokeWeight(1 / this.view.scale);
      if (this.tool == "test") {
        this.p5.noStroke();
      } else {
        this.p5.stroke(0);
      }
    }
    setTempArea(coord) {
      let coords = [coord];
      switch (this.tool) {
        case "rectangle":
          this.tempArea = new AreaRect(coords);
          break;
        case "circle":
          this.tempArea = new AreaCircle(coords);
          break;
        case "polygon":
          this.tempArea = new AreaPoly(coords);
          this.tempArea.addCoord(coord);
          break;
      }
    }
    updateTempArea() {
      let coord = this.drawingCoord();
      if (!this.tempArea.isEmpty() && this.tool === "polygon" && this.shiftToggle) {
        let coords = this.tempArea.getCoords();
        if (coords.length > 0) {
          let lastCoord = coords[coords.length - 2];
          coord = this.snapCoordTo8Directions(lastCoord, coord);
        }
      }
      if (!this.tempArea.isEmpty() && this.tool === "polygon" && this.ctrlToggle) {
        let coords = this.tempArea.getCoords();
        if (coords.length > 0) {
          let firstCoord = coords[0];
          coord = this.snapCoordTo8Directions(firstCoord, coord);
        }
      }
      if (!this.tempArea.isEmpty()) {
        this.tempArea.updateLastCoord(coord);
      }
    }
    /**
     * Snap a coordinate to one of 8 directions (horizontal, vertical, or 45-degree diagonals)
     * from the given origin point
     */
    snapCoordTo8Directions(from, to) {
      let dx = to.x - from.x;
      let dy = to.y - from.y;
      let distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 1) {
        return from;
      }
      let angle = Math.atan2(dy, dx);
      let degrees = angle * 180 / Math.PI;
      let snappedDegrees = Math.round(degrees / 45) * 45;
      let snappedAngle = snappedDegrees * Math.PI / 180;
      let newX = from.x + distance * Math.cos(snappedAngle);
      let newY = from.y + distance * Math.sin(snappedAngle);
      return new Coord(newX, newY);
    }
    exportMap() {
      return JSON.stringify(new Save(version, this.map), function(key, value) {
        if (value instanceof ImageMap && !(this instanceof Save)) {
          return value.getName();
        }
        return value;
      });
    }
    save() {
      let blob = new Blob([this.exportMap()], { encoding: "UTF-8", type: "text/plain;charset=UTF-8" });
      (0, import_downloadjs.default)(blob, `${this.map.getName()}.map.json`, "application/json");
    }
    importMap(json) {
      let object = JSON.parse(json);
      let objectMap = object.map;
      this.map.setFromObject(objectMap);
      this.settings.setValue("Map Name", objectMap.name);
      this.settings.setValue("Default Area", objectMap.hasDefaultArea);
      this.reset();
    }
    /**
     * Add an area to the imageMap object
     */
    createArea(area) {
      this.map.addArea(area);
      this.undoManager.add({
        undo: () => area = this.map.shiftArea(),
        redo: () => this.map.addArea(area, false)
      });
    }
    /**
     * remove an area from the imageMap object
     */
    deleteArea(area) {
      let id = area.id;
      if (id === 0) {
        this.settings.setValue("Default Area", false);
      } else {
        let index = this.map.rmvArea(id);
        this.undoManager.add({
          undo: () => this.map.insertArea(area, index),
          redo: () => this.map.rmvArea(id)
        });
      }
    }
    /**
     * Move an area forward or backward
     */
    moveArea(area, direction) {
      if (this.map.moveArea(area.id, direction) !== false) {
        this.undoManager.add({
          undo: () => this.map.moveArea(area.id, -direction),
          redo: () => this.map.moveArea(area.id, direction)
        });
      }
    }
    /**
     * Set the url of an area
     */
    setAreaUrl(area) {
      let href = area.getHref();
      let input = prompt("Enter the pointing url of this area", href ? href : "http://");
      if (input) {
        area.setHref(input);
        this.undoManager.add({
          undo: () => area.setHref(href),
          redo: () => area.setHref(input)
        });
      }
    }
    /**
     * Set the title of an area
     */
    setAreaTitle(area) {
      let title = area.getTitle();
      let input = prompt("Enter the title of this area", title ? title : "");
      if (input) {
        area.setTitle(input);
        this.undoManager.add({
          undo: () => area.setTitle(title),
          redo: () => area.setTitle(input)
        });
      }
    }
    setDefaultArea(bool) {
      this.map.setDefaultArea(bool);
      this.undoManager.add({
        undo: () => {
          this.map.setDefaultArea(!bool);
          this.settings.setValue("Default Area", !bool);
        },
        redo: () => {
          this.map.setDefaultArea(bool);
          this.settings.setValue("Default Area", bool);
        }
      });
    }
    clearAreas() {
      let areas = this.map.getAreas(false);
      this.map.clearAreas();
      this.undoManager.add({
        undo: () => this.map.setAreas(areas),
        redo: () => this.map.clearAreas()
      });
    }
    reset() {
      this.undoManager.clear();
    }
  };
  globalThis.imageMapCreator = imageMapCreator;
})();
//# sourceMappingURL=image-map-creator.bundle.js.map
