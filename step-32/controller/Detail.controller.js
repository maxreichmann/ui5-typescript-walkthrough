"use strict";sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/core/routing/History","sap/ui/core/UIComponent"],function(t,e,o){"use strict";const n=t.extend("ui5.walkthrough.controller.Detail",{onInit:function t(){const e=o.getRouterFor(this);e.getRoute("detail").attachPatternMatched(this.onObjectMatched,this)},onObjectMatched:function t(e){this.getView().bindElement({path:"/"+window.decodeURIComponent(e.getParameter("arguments").invoicePath),model:"invoice"})},onNavBack:function t(){const n=e.getInstance();const i=n.getPreviousHash();if(i!==undefined){window.history.go(-1)}else{const t=o.getRouterFor(this);t.navTo("overview",{},true)}}});return n});
//# sourceMappingURL=Detail.controller.js.map