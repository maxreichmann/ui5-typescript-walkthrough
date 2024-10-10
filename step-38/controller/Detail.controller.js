"use strict";sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/core/routing/History","sap/m/MessageToast","sap/ui/model/json/JSONModel","sap/ui/core/UIComponent"],function(e,t,n,o,i){"use strict";const s=e.extend("ui5.walkthrough.controller.Detail",{onInit:function e(){const t=new o({currency:"EUR"});this.getView().setModel(t,"view");const n=i.getRouterFor(this);n.getRoute("detail").attachPatternMatched(this.onObjectMatched,this)},onObjectMatched:function e(t){this.byId("rating").reset();this.getView().bindElement({path:"/"+window.decodeURIComponent(t.getParameter("arguments").invoicePath),model:"invoice"})},onNavBack:function e(){const n=t.getInstance();const o=n.getPreviousHash();if(o!==undefined){window.history.go(-1)}else{const e=i.getRouterFor(this);e.navTo("overview",{},true)}},onRatingChange:function e(t){const o=t.getParameter("value");const i=this?.getView().getModel("i18n")?.getResourceBundle();n.show(i.getText("ratingConfirmation",[o]))}});return s});
//# sourceMappingURL=Detail.controller.js.map