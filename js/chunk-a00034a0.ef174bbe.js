(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a00034a0"],{"07ac":function(s,t,i){var a=i("23e7"),e=i("6f53").values;a({target:"Object",stat:!0},{values:function(s){return e(s)}})},"0fa5":function(s,t,i){"use strict";i.r(t);var a=function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("div",{staticClass:"shopWrap"},[i("section",{staticClass:"shop_container"},[i("nav",{staticClass:"goback"},[i("i",{staticClass:"el-icon-arrow-left",staticStyle:{color:"white"},on:{click:s.goback}})]),i("div",{staticClass:"header"},[i("div",{staticClass:"header_cover_img_con"},[i("img",{attrs:{src:s.imgurl+s.imgurl2,alt:""}})]),i("div",{staticClass:"description_header"},[i("router-link",{attrs:{to:""}},[i("section",{staticClass:"description_left"},[i("img",{attrs:{src:s.imgurl+s.imgurl2,alt:""}})]),i("section",{staticClass:"description_right"},[i("h4",{staticClass:"description_title ellipsis"},[s._v(s._s(s.shopName))]),i("p",{staticClass:"description_text"},[s._v("商家配送／分钟送达／配送费¥5")]),i("p",{staticClass:"description_promotion ellipsis"},[s._v("公告：欢迎光临，用餐高峰请提前下单，谢谢")])]),i("i",{staticClass:"el-icon-arrow-right",staticStyle:{color:"white"}})])],1)]),i("section",{staticClass:"change_show_type"},[i("div",[i("span",{on:{click:s.toshangpin}},[s._v("商品")])]),i("div",[i("span",{on:{click:s.topingjia}},[s._v("评价")])])]),s.isShow?i("section",{staticClass:"food_container"},[i("section",{staticClass:"menu_container"},[i("section",{staticClass:"menu_left",attrs:{id:"wrapper_menu"}},[i("ul",s._l(s.shopArr,(function(t,a){return i("li",{key:t.id,staticClass:"menu_left_li",class:s.active==a?"activity_menu":"",on:{click:function(t){return s.goright(a)}}},[i("el-badge",{attrs:{value:s.itemCount(t.id),hidden:!s.itemCount(t.id)}},[i("span",[s._v(s._s(t.name))])])],1)})),0)]),i("section",{staticClass:"menu_right"},s._l(s.shopArr,(function(t){return i("ul",{key:t.id},[i("li",[i("div",{staticClass:"menu_detail_header"},[i("section",{staticClass:"menu_detail_header_left"},[i("strong",{staticClass:"menu_item_title"},[s._v(s._s(t.name))]),i("span",{staticClass:"menu_item_description"},[s._v(s._s(t.description)+"～")])]),i("span",{staticClass:"menu_detail_header_right"},[s._v("···")])]),i("ul",s._l(t.foods,(function(t,a){return i("li",{key:a},[i("section",{staticClass:"menu_detail_list"},[i("div",{staticClass:"menu_detail_link"},[i("section",{staticClass:"menu_food_img"},[i("img",{attrs:{src:s.imgurl+t.image_path,alt:""}})]),i("section",{staticClass:"menu_food_description"},[i("h3",{staticClass:"food_description_head"},[i("strong",{staticClass:"description_foodname"},[s._v(s._s(t.name))]),s._m(0,!0)]),i("p",{staticClass:"food_description_content"},[s._v(s._s(t.description))]),i("p",{staticClass:"food_description_sale_rating"},[i("span",[s._v("月售"+s._s(t.month_sales)+"份")]),i("span",[s._v("好评率"+s._s(t.satisfy_rate)+"%")])]),s._m(1,!0)])]),i("div",{staticClass:"menu_detail_footer"},[i("section",{staticClass:"food_price"},[i("span",{staticClass:"span1"},[s._v("¥")]),i("span",{staticClass:"span2"},[s._v(s._s(t.specfoods[0].price))]),i("span",{staticClass:"span3"},[s._v("起")])]),i("section",{staticClass:"cart_module"},[i("section",{staticClass:"choose_specification"},[i("section",{staticClass:"choose_icon_container"},[i("div",{staticClass:"cart_button"},[s.foodNum(t)?i("div",[i("span",{on:{click:function(i){t.specifications.length?s.xggjianshao():s.jianshao(s.foodNum(t),t.category_id,t.item_id,t.specfoods[0].food_id,t.specfoods[0].name,t.specfoods[0].price,t.specfoods[0].specs,t.specfoods[0].packing_fee,t.specfoods[0].sku_id,t.specfoods[0].stock)}}},[i("i",{staticClass:"el-icon-remove-outline"})]),i("span",{staticClass:"cart_num1"},[s._v(s._s(s.foodNum(t)))])]):s._e()]),!t.specifications.length?s._e():i("span",{staticClass:"show_chooselist",on:{click:function(i){return s.xuanguige(t.specfoods,t.category_id)}}},[s._v("选规格")]),t.specifications.length?s._e():i("span",{staticClass:"add_icon"},[i("i",{staticClass:"el-icon-circle-plus-outline",on:{click:function(i){return s.tianjia(t.category_id,t.item_id,t.specfoods[0].food_id,t.specfoods[0].name,t.specfoods[0].price,t.specfoods[0].specs,t.specfoods[0].packing_fee,t.specfoods[0].sku_id,t.specfoods[0].stock)}}})])]),s.xuanguigeIsshow?i("div",{staticClass:"specs_list"},[i("div",{staticClass:"specs_list_header"},[i("h4",{staticClass:"ellipsis"},[s._v(s._s(s.xuanguigeName))]),i("i",{staticClass:"specs_cancel el-icon-close",staticStyle:{"font-size":"1rem"},on:{click:s.closethis}})]),i("section",{staticClass:"specs_details"},[i("h5",{staticClass:"specs_details_title"},[s._v("规格")]),i("ul",s._l(s.xuanguigeArr,(function(t,a){return i("li",{key:a,staticClass:"specs_activity",style:s.guigebgc==a?"color:blue;":"",on:{click:function(t){return s.guigeID(a)}}},[s._v(s._s(t.specs[0].value))])})),0)]),i("div",{staticClass:"specs_footer"},[i("div",{staticClass:"specs_price"},[i("span",[s._v("¥")]),i("span",[s._v(s._s(s.guigeArr.price))])]),i("div",{staticClass:"specs_addto_cart",on:{click:function(t){return s.putCar(s.xuanguigecId,s.xuanguigeArr[s.guigebgc].item_id,s.xuanguigeArr[s.guigebgc].food_id,s.xuanguigeName,s.guigeArr.price,s.xuanguigeArr[s.guigebgc].specs[0].value,s.xuanguigeArr[s.guigebgc].packing_fee,s.xuanguigeArr[s.guigebgc].sku_id,s.xuanguigeArr[s.guigebgc].stock)}}},[s._v("加入购物车")])])]):s._e()])])])])])})),0)])])})),0)]),i("section",{staticClass:"buy_cart_container"},[i("section",{staticClass:"cart_icon_num"},[i("div",{style:s.allFoodsPrice?"background-color:#3190e8":"",attrs:{id:"cart_icon_container"},on:{click:s.showCar}},[s.allFoodsPrice?i("span",{staticClass:"cart_list_length"},[s._v(s._s(s.allItemCount))]):s._e(),i("i",{staticClass:"el-icon-shopping-cart-1"})]),i("div",{staticClass:"cart_num"},[i("div",{staticClass:"div1"},[s._v("¥ "+s._s(s.allFoodsPrice)+".00")]),i("div",{staticClass:"div2"},[s._v("配送费¥5")])])]),i("section",{style:s.allFoodsPrice?"background-color:#4cd964":"",attrs:{id:"gotopay"},on:{click:s.goDist}},[i("span",{attrs:{id:"gotopay_button_style"}},[s._v(s._s(s.allFoodsPrice?"去下单":"还差¥20起送"))])])])]):s._e(),i("el-collapse-transition",[s.carShow?i("section",{staticClass:"cart_food_list"},[i("div",{staticClass:"carheader"},[i("h4",[s._v("购物车")]),i("div",[i("i"),i("span",{staticClass:"clear_cart",on:{click:s.clearAll}},[s._v("清空")])])]),i("section",{staticClass:"cart_food_details",attrs:{id:"cartFood"}},[i("ul",s._l(s.nowCart,(function(t,a){return i("li",{key:a,staticClass:"cart_food_li"},[i("div",{staticClass:"cart_list_num"},[i("p",{staticClass:"ellipsis"},[s._v(s._s(t.name))]),i("p",{staticClass:"ellipsis",staticStyle:{"font-size":".5rem"}},[s._v(s._s(""==t.specs?"":t.specs))])]),i("div",{staticClass:"cart_list_price"},[i("span",[s._v("¥")]),i("span",[s._v(s._s(t.price))])]),i("section",{staticClass:"cart_list_control"},[i("div",{staticClass:"cart_button",staticStyle:{display:"block"}},[i("span",[i("i",{staticClass:"el-icon-remove-outline",on:{click:function(i){return s.jianshao1(t.shopId,t.category_id,t.item_id,t.food_id,t.name,t.price,t.specs,t.packing_fee,t.sku_id,t.stock)}}})]),i("span",{staticClass:"cart_num1"},[s._v(s._s(t.num))])]),i("span",{staticClass:"add_icon"},[i("i",{staticClass:"el-icon-circle-plus-outline",on:{click:function(i){return s.tianjia1(t.shopId,t.category_id,t.item_id,t.food_id,t.name,t.price,t.specs,t.packing_fee,t.sku_id,t.stock)}}})])])])})),0)])]):s._e()]),s.isShow?s._e():i("section",[i("div",{staticClass:"rating_header"},[i("section",{staticClass:"rating_header_left"},[i("p",[s._v(s._s(s.shopArr4.overall_score))]),i("p",[s._v("综合评价")]),i("p",[s._v("高于周边商家"+s._s(s.shopArr4.compare_rating))])]),i("section",{staticClass:"rating_header_right"},[i("p",[i("span",[s._v("服务态度")]),i("i",{staticClass:"el-icon-star-off"}),i("i",{staticClass:"el-icon-star-off"}),i("i",{staticClass:"el-icon-star-off"}),i("i",{staticClass:"el-icon-star-off"}),i("i",{staticClass:"el-icon-star-off"}),i("span",{staticClass:"rating_num"},[s._v(s._s(s.shopArr4.service_score))])]),i("p",[i("span",[s._v("菜品评价")]),i("i",{staticClass:"el-icon-star-off"}),i("i",{staticClass:"el-icon-star-off"}),i("i",{staticClass:"el-icon-star-off"}),i("i",{staticClass:"el-icon-star-off"}),i("i",{staticClass:"el-icon-star-off"}),i("span",{staticClass:"rating_num"},[s._v(s._s(s.shopArr4.food_score))])]),i("p",[i("span",[s._v("送达时间")]),i("span",{staticClass:"delivery_time"},[s._v(s._s(s.shopArr4.deliver_time)+"分钟")])])])]),i("ul",{staticClass:"tag_list_ul"},s._l(s.shopArr3,(function(t,a){return i("li",{key:a},[s._v(s._s(t.name)+"("+s._s(t.count)+")")])})),0),i("ul",{staticClass:"rating_list_ul"},s._l(s.shopArr5,(function(t,a){return i("li",{key:a,staticClass:"rating_list_li"},[i("img",{staticClass:"user_avatar",attrs:{src:t.avatar?s.imgurl4:s.morenImg,alt:""}}),i("section",{staticClass:"rating_list_details"},[i("div",{staticClass:"head"},[i("section",{staticClass:"username_star"},[i("p",{staticClass:"username"},[s._v(s._s(t.username))]),i("p",{staticClass:"star_desc"},[i("i",{staticClass:"el-icon-star-off"}),i("i",{staticClass:"el-icon-star-off"}),i("i",{staticClass:"el-icon-star-off"}),i("i",{staticClass:"el-icon-star-off"}),i("i",{staticClass:"el-icon-star-off"}),i("span",{staticClass:"time_spent_desc"},[s._v(s._s(t.time_spent_desc))])])]),i("div",{staticClass:"rated_at"},[s._v(s._s(t.rated_at))])]),i("ul",{staticClass:"food_img_ul"},s._l(t.item_ratings,(function(t){return i("li",{key:t.food_id},[i("img",{attrs:{src:s.imgurl2+t.image_hash+s.imgurl3,alt:""}})])})),0),i("ul",{staticClass:"food_name_ul"},s._l(t.item_ratings,(function(t){return i("li",{key:t.food_id,staticClass:"ellipsis"},[s._v(s._s(t.food_name))])})),0)])])})),0)])],1)])},e=[function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("ul",{staticClass:"attributes_ul"},[i("li",[s._v("招牌")])])},function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("p",{staticClass:"food_activity"},[i("span",[s._v("打威群岛")])])}],c=(i("4160"),i("b0c0"),i("b64b"),i("07ac"),i("159b"),i("5530")),o=(i("2f62"),{name:"Shop",data:function(){return{shopId:"",imgurl:"https://elm.cangdu.org/img/",shopName:"",shopArr:[],shopArr2:[],rightname:"热搜榜",righedes:"热销来袭",active:0,shopArr3:[],shopArr4:[],shopArr5:[],imgurl2:"https://fuss10.elemecdn.com/d/",imgurl3:".jepg",morenImg:"https://elm.cangdu.org/img/default.jpg",imgurl4:"https://fuss10.elemecdn.com/1/5f/",isShow:!0,active1:99999,shopCount:0,priceAll:0,countAll:0,isShowcount:!1,carShow:!1,goodsIndex:[],xuanguigeIsshow:!1,xuanguigeArr:[],guigeArr:[],guigebgc:90,xuanguigeName:"",xuanguigecId:"",carArr:[],shopCarts:null,testName:"hkg"}},created:function(){var s=this;this.shopId=localStorage.getItem("shopId"),this.imgurl2=localStorage.getItem("shopImg"),this.shopName=localStorage.getItem("shopName"),this.axios.get("shopping/v2/menu",{params:{restaurant_id:this.shopId}}).then((function(t){s.shopArr=t})).catch((function(s){})),this.axios.get("/ugc/v2/restaurants/"+this.shopId+"/ratings/tags").then((function(t){s.shopArr3=t})).catch((function(s){})),this.axios.get("/ugc/v2/restaurants/"+this.shopId+"/ratings/scores").then((function(t){s.shopArr4=t})).catch((function(s){})),this.axios.get("/ugc/v2/restaurants/"+this.shopId+"/ratings").then((function(t){s.shopArr5=t})).catch((function(s){})),this.$store.commit("init_buy_cart")},methods:{goback:function(){this.$router.push("/food")},goright:function(s){this.active=s;var t=".menu_right>ul:nth-child("+(s+1)+")>li";this.$el.querySelector(t).scrollIntoView({behavior:"smooth",block:"start"})},toshangpin:function(){this.isShow=!0},topingjia:function(){this.isShow=!1},tianjia:function(s,t,i,a,e,c,o,n,r){this.$store.commit("add_cart",{shopid:this.shopId,category_id:s,item_id:t,food_id:i,name:a,price:e,specs:c,packing_fee:o,sku_id:n,stock:r})},jianshao:function(s,t,i,a,e,c,o,n,r,l){this.$store.commit("reduce_cart",{shopid:this.shopId,category_id:t,item_id:i,food_id:a,name:e,price:c,specs:o,packing_fee:n,sku_id:r,stock:l})},putCar:function(s,t,i,a,e,c,o,n,r){this.$store.commit("add_cart",{shopid:this.shopId,category_id:s,item_id:t,food_id:i,name:a,price:e,specs:c,packing_fee:o,sku_id:n,stock:r}),this.xuanguigeIsshow=!this.xuanguigeIsshow},tianjia1:function(s,t,i,a,e,c,o,n,r,l){console.log(s,t,i,a,e,c,o,n,r,l),this.$store.commit("add_cart",{shopid:s,category_id:t,item_id:i,food_id:a,name:e,price:c,specs:o,packing_fee:n,sku_id:r,stock:l})},jianshao1:function(s,t,i,a,e,c,o,n,r,l){this.$store.commit("reduce_cart",{shopid:s,category_id:t,item_id:i,food_id:a,name:e,price:c,specs:o,packing_fee:n,sku_id:r,stock:l})},showCar:function(){this.carShow=!this.carShow},clearAll:function(){this.$store.commit("delete_cart",{shopid:this.shopId}),this.carShow=!this.carShow},xuanguige:function(s,t){this.xuanguigeIsshow=!this.xuanguigeIsshow,this.xuanguigeArr=s,this.xuanguigeName=s[0].name,this.xuanguigecId=t},closethis:function(){this.xuanguigeIsshow=!this.xuanguigeIsshow},guigeID:function(s){this.guigeArr=this.xuanguigeArr[s],this.guigebgc=s},xggjianshao:function(){alert("请去购物车列表操作")},goDist:function(){this.$router.push("/dist"),localStorage.setItem("allprice",this.allFoodsPrice)}},computed:{allFoodsPrice:function(){var s=this,t=0;return Object.keys(this.shopCart).forEach((function(i){Object.keys(s.shopCart[i]).forEach((function(a){Object.keys(s.shopCart[i][a]).forEach((function(e){var o=s.shopCart[i][a][e],n=Object(c["a"])({},o,{category_id:i,item_id:a,food_id:e,shopId:s.shopId});t+=n.num*n.price}))}))})),t},allItemCount:function(){var s=this,t=0;return Object.keys(this.shopCart).forEach((function(i){Object.keys(s.shopCart[i]).forEach((function(a){Object.keys(s.shopCart[i][a]).forEach((function(e){var o=s.shopCart[i][a][e],n=Object(c["a"])({},o,{category_id:i,item_id:a,food_id:e,shopId:s.shopId});t+=n.num}))}))})),t},itemCount:function(){var s=this;return function(t){var i=0;return s.shopCart&&s.shopCart[t]&&Object.values(s.shopCart[t]).forEach((function(s){Object.values(s).forEach((function(s){i+=s.num}))})),i}},shopCart:function(){return Object(c["a"])({},this.$store.state.cartList[this.shopId])},foodNum:function(){var s=this;return function(t){var i,a=t.category_id,e=t.item_id;return s.shopCart&&s.shopCart[a]&&s.shopCart[a][e]?(Object.values(s.shopCart[a][e]).forEach((function(s){i=s?s.num:0})),i):0}},nowCart:function(){var s=this,t=[];return Object.keys(this.shopCart).forEach((function(i){Object.keys(s.shopCart[i]).forEach((function(a){Object.keys(s.shopCart[i][a]).forEach((function(e){var o=s.shopCart[i][a][e],n=Object(c["a"])({},o,{category_id:i,item_id:a,food_id:e,shopId:s.shopId});t.push(n)}))}))})),t},myName:{get:function(){return console.log("myName的get方法触发了!"),function(s){return"你好!"+s.name}},set:function(s){console.log("myName的set方法触发了"),this.testName=s}}}}),n=o,r=(i("8dec"),i("2877")),l=Object(r["a"])(n,a,e,!1,null,"06dcbfbd",null);t["default"]=l.exports},"472e":function(s,t,i){},"6f53":function(s,t,i){var a=i("83ab"),e=i("df75"),c=i("fc6a"),o=i("d1e7").f,n=function(s){return function(t){var i,n=c(t),r=e(n),l=r.length,u=0,_=[];while(l>u)i=r[u++],a&&!o.call(n,i)||_.push(s?[i,n[i]]:n[i]);return _}};s.exports={entries:n(!0),values:n(!1)}},"8dec":function(s,t,i){"use strict";var a=i("472e"),e=i.n(a);e.a}}]);
//# sourceMappingURL=chunk-a00034a0.ef174bbe.js.map