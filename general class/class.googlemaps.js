/*
	general map generation class
	18.9.2013 | m@mhm.li
	
	This code is provided as-is under the GPL GNU General Public Licence v3
	and may be freely used, adapted and built upon. No guarantee is provided or implied. Test your code!
	http://www.gnu.org/licenses/gpl.html

	Simplify generation of Google Maps on a web page

	The existing default usage via Google's own implementation is great, but this version adds an improved
	overlay function, the option to add MarkerLabel functionality by setting an option to true, and much
	easier addition of custom map styles.
	
	• Labels are displayed with the markers. Label content is displayed directly in the map.
	• Markercontent is displayed in the overlay when a marker is clicked.
	
	This file is quite heavy and heavily commented. Use class.googlemaps.min.js instead.

	See class.googlemaps.html for a demo of how to use this script with a couple of simple options.
	
	Also see http://google-maps-utility-library-v3.googlecode.com/svn/tags/markerwithlabel/1.1.9/src/markerwithlabel_packed.js

*/


eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('5 G(b,a){b.N().14(G,o.n.31);4.H=b;4.2B=b.N().2q();4.M=a;4.C=u;4.q=u;4.16=u;4.1i=t;4.L(b.w())}G.6.2C=5(){7 d=4;7 g;7 f;4.q=3x.3r("1Z");4.q.5n=4.2B;9(4.1i){4.29()}4.4L().4D.4x(4.q);4.2W=o.n.v.1M(4.w(),"49",5(){f=g});o.n.v.1G(4.q,"3Z",5(){g=I;f=t});o.n.v.1G(4.q,"2L",5(e){g=t;9(!f){7 c;7 b;7 a=d.H.N();o.n.v.12(a,"2L",d.H);o.n.v.12(a,"3T",d.H);9(a.2z()){b=a.1s();c=d.H.1B();a.w().1O(c);1P(5(){a.w().1O(c);9(b!==u&&(a.w().15()>b)){a.w().3C(b+1)}},3w)}e.3t=I;9(e.2g){e.2g()}}});o.n.v.1G(4.q,"2f",5(){7 a=d.H.N();o.n.v.12(a,"2f",d.H)});o.n.v.1G(4.q,"2e",5(){7 a=d.H.N();o.n.v.12(a,"2e",d.H)})};G.6.2Q=5(){9(4.q&&4.q.3h){4.1N();o.n.v.2S(4.2W);o.n.v.55(4.q);4.q.3h.4X(4.q);4.q=u}};G.6.38=5(){9(4.1i){7 a=4.26(4.C);4.q.S.1L=a.y+"B";4.q.S.1I=a.x+"B"}};G.6.1N=5(){9(4.q){4.q.S.3a="2V"}4.1i=t};G.6.29=5(){9(4.q){7 e="";7 c=4.3e.4h(" ");7 b=Y(c[0].3f(/^\\s+|\\s+$/g,""),10);7 d=Y(c[1].3f(/^\\s+|\\s+$/g,""),10);7 a=4.26(4.C);4.q.S.3Y=4.2O(a);e="<3X 3W=\'"+4.2K+"\' S=\'1X: 1W; 1L: "+d+"B; 1I: "+b+"B; ";9(!4.H.N().1d){e+="3V: 3U("+(-1*d)+"B, "+((-1*b)+4.1h)+"B, "+((-1*d)+4.1m)+"B, "+(-1*b)+"B);"}e+="\'>";4.q.3S=e+"<1Z S=\'"+"1X: 1W;"+"1L: "+4.1V[0]+"B;"+"1I: "+4.1V[1]+"B;"+"3P: "+4.2F+";"+"1y-1o: "+4.2v+"B;"+"1y-3J: "+4.2s+";"+"1y-3H: "+4.2p+";"+"1y-S: "+4.2n+";"+"1x-3D: "+4.2l+";"+"1x-3A: 1c;"+"1C: "+4.1h+"B;"+"3v-1A:"+4.1m+"B;"+"\'>"+4.16.1x+"</1Z>";9(2i 4.16.13==="1a"||4.16.13===""){4.q.13=4.H.N().2U()}K{4.q.13=4.16.13}4.q.S.3a=""}4.1i=I};G.6.2M=5(a){4.16=a;7 b=z.3l(0,a.2R-1);b=z.21(4.M.p-1,b);7 c=4.M[b];4.2K=c.3g;4.1m=c.1A;4.1h=c.1C;4.1V=c.5i||[0,0];4.2d=c.5c||[Y(4.1m/2,10),Y(4.1h/2,10)];4.2F=c.54||"4Z";4.2v=c.4W||11;4.2l=c.4Q||"2V";4.2p=c.4N||"4K";4.2n=c.4H||"4F";4.2s=c.4E||"4C,4B-4z";4.3e=c.4y||"0 0"};G.6.30=5(a){4.C=a};G.6.2O=5(b){7 a=[];a.Z("4v: 4t;");a.Z("1X: 1W; 1L: "+b.y+"B; 1I: "+b.x+"B;");a.Z("1C: "+4.1h+"B; 1A: "+4.1m+"B;");j a.4s("")};G.6.26=5(b){7 a=4.39().28(b);a.x-=4.2d[1];a.y-=4.2d[0];a.x=Y(a.x,10);a.y=Y(a.y,10);j a};5 D(a){4.V=a;4.T=a.w();4.U=a.2T();4.X=a.3d();4.19=a.3c();4.k=[];4.C=u;4.2c=u;4.W=F G(4,a.20())}D.6.41=5(){j 4.k.p};D.6.1D=5(){j 4.k};D.6.2P=5(){j 4.C};D.6.w=5(){j 4.T};D.6.N=5(){j 4.V};D.6.1B=5(){7 i;7 b=F o.n.1l(4.C,4.C);7 a=4.1D();A(i=0;i<a.p;i++){b.14(a[i].P())}j b};D.6.1F=5(){4.W.L(u);4.k=[];1Y 4.k};D.6.1E=5(e){7 i;7 c;7 b;9(4.2X(e)){j t}9(!4.C){4.C=e.P();4.24()}K{9(4.19){7 l=4.k.p+1;7 a=(4.C.Q()*(l-1)+e.P().Q())/l;7 d=(4.C.17()*(l-1)+e.P().17())/l;4.C=F o.n.1p(a,d);4.24()}}e.1j=I;4.k.Z(e);c=4.k.p;b=4.V.1s();9(b!==u&&4.T.15()>b){9(e.w()!==4.T){e.L(4.T)}}K 9(c<4.X){9(e.w()!==4.T){e.L(4.T)}}K 9(c===4.X){A(i=0;i<c;i++){4.k[i].L(u)}}K{e.L(u)}4.2J();j I};D.6.2I=5(a){j 4.2c.2H(a.P())};D.6.24=5(){7 a=F o.n.1l(4.C,4.C);4.2c=4.V.2a(a)};D.6.2J=5(){7 c=4.k.p;7 a=4.V.1s();9(a!==u&&4.T.15()>a){4.W.1N();j}9(c<4.X){4.W.1N();j}7 b=4.V.20().p;7 d=4.V.2G()(4.k,b);4.W.30(4.C);4.W.2M(d);4.W.29()};D.6.2X=5(a){7 i;9(4.k.1g){j 4.k.1g(a)!==-1}K{A(i=0;i<4.k.p;i++){9(a===4.k[i]){j I}}}j t};5 8(a,c,b){4.14(8,o.n.31);c=c||[];b=b||{};4.k=[];4.E=[];4.1r=[];4.1f=u;4.1b=t;4.U=b.3R||3Q;4.X=b.3N||2;4.1U=b.2y||u;4.M=b.3K||[];4.1T=b.13||"";4.1v=I;9(b.2x!==1a){4.1v=b.2x}4.19=t;9(b.2w!==1a){4.19=b.2w}4.18=t;9(b.2u!==1a){4.18=b.2u}4.1d=t;9(b.2t!==1a){4.1d=b.2t}4.1t=b.3I||8.2r;4.1u=b.3G||8.2o;4.1e=b.3F||8.2j;4.1S=b.3E||8.2m;4.1Q=b.3B||8.2E;4.1z=b.3z||8.2k;4.1R=b.3y||"O";9(3L.3M.3u().1g("3O")!==-1){4.1Q=4.1z}4.2D();4.2A(c,I);4.L(a)}8.6.2C=5(){7 a=4;4.1f=4.w();4.1b=I;4.1q();4.1r=[o.n.v.1M(4.w(),"3s",5(){a.1w(t);9(4.15()===(4.2h("3q")||0)||4.15()===4.2h("2y")){o.n.v.12(4,"2N")}}),o.n.v.1M(4.w(),"2N",5(){a.1k()})]};8.6.2Q=5(){7 i;A(i=0;i<4.k.p;i++){9(4.k[i].w()!==4.1f){4.k[i].L(4.1f)}}A(i=0;i<4.E.p;i++){4.E[i].1F()}4.E=[];A(i=0;i<4.1r.p;i++){o.n.v.2S(4.1r[i])}4.1r=[];4.1f=u;4.1b=t};8.6.38=5(){};8.6.2D=5(){7 i,1o;9(4.M.p>0){j}A(i=0;i<4.1e.p;i++){1o=4.1e[i];4.M.Z({3g:4.1t+(i+1)+"."+4.1u,1A:1o,1C:1o})}};8.6.3p=5(){7 i;7 a=4.1D();7 b=F o.n.1l();A(i=0;i<a.p;i++){b.14(a[i].P())}4.w().1O(b)};8.6.2T=5(){j 4.U};8.6.3o=5(a){4.U=a};8.6.3d=5(){j 4.X};8.6.40=5(a){4.X=a};8.6.1s=5(){j 4.1U};8.6.3n=5(a){4.1U=a};8.6.20=5(){j 4.M};8.6.3m=5(a){4.M=a};8.6.2U=5(){j 4.1T};8.6.43=5(a){4.1T=a};8.6.2z=5(){j 4.1v};8.6.44=5(a){4.1v=a};8.6.3c=5(){j 4.19};8.6.3k=5(a){4.19=a};8.6.3j=5(){j 4.18};8.6.3i=5(a){4.18=a};8.6.47=5(){j 4.1d};8.6.5m=5(a){4.1d=a};8.6.5l=5(){j 4.1u};8.6.5k=5(a){4.1u=a};8.6.5j=5(){j 4.1t};8.6.5h=5(a){4.1t=a};8.6.5f=5(){j 4.1e};8.6.5e=5(a){4.1e=a};8.6.2G=5(){j 4.1S};8.6.5d=5(a){4.1S=a};8.6.5b=5(){j 4.1z};8.6.5a=5(a){4.1z=a};8.6.2q=5(){j 4.1R};8.6.59=5(a){4.1R=a};8.6.1D=5(){j 4.k};8.6.57=5(){j 4.k.p};8.6.51=5(){j 4.E};8.6.50=5(){j 4.E.p};8.6.1E=5(b,a){4.2b(b);9(!a){4.1k()}};8.6.2A=5(b,a){7 c;A(c 3b b){9(b.4V(c)){4.2b(b[c])}}9(!a){4.1k()}};8.6.2b=5(b){9(b.4U()){7 a=4;o.n.v.1M(b,"4T",5(){9(a.1b){4.1j=t;a.1q()}})}b.1j=t;4.k.Z(b)};8.6.4S=5(c,a){7 b=4.27(c);9(!a&&b){4.1q()}j b};8.6.4O=5(a,c){7 i,r;7 b=t;A(i=0;i<a.p;i++){r=4.27(a[i]);b=b||r}9(!c&&b){4.1q()}j b};8.6.27=5(b){7 i;7 a=-1;9(4.k.1g){a=4.k.1g(b)}K{A(i=0;i<4.k.p;i++){9(b===4.k[i]){a=i;4M}}}9(a===-1){j t}b.L(u);4.k.4J(a,1);j I};8.6.4I=5(){4.1w(I);4.k=[]};8.6.1q=5(){7 a=4.E.4G();4.E=[];4.1w(t);4.1k();1P(5(){7 i;A(i=0;i<a.p;i++){a[i].1F()}},0)};8.6.2a=5(d){7 f=4.39();7 c=F o.n.1p(d.25().Q(),d.25().17());7 a=F o.n.1p(d.22().Q(),d.22().17());7 e=f.28(c);e.x+=4.U;e.y-=4.U;7 g=f.28(a);g.x-=4.U;g.y+=4.U;7 b=f.33(e);7 h=f.33(g);d.14(b);d.14(h);j d};8.6.1k=5(){4.23(0)};8.6.1w=5(a){7 i,J;A(i=0;i<4.E.p;i++){4.E[i].1F()}4.E=[];A(i=0;i<4.k.p;i++){J=4.k[i];J.1j=t;9(a){J.L(u)}}};8.6.32=5(b,e){7 R=4A;7 g=(e.Q()-b.Q())*z.1K/1H;7 f=(e.17()-b.17())*z.1K/1H;7 a=z.1J(g/2)*z.1J(g/2)+z.34(b.Q()*z.1K/1H)*z.34(e.Q()*z.1K/1H)*z.1J(f/2)*z.1J(f/2);7 c=2*z.4w(z.36(a),z.36(1-a));7 d=R*c;j d};8.6.2Z=5(b,a){j a.2H(b.P())};8.6.35=5(c){7 i,d,O,1c;7 a=4u;7 b=u;A(i=0;i<4.E.p;i++){O=4.E[i];1c=O.2P();9(1c){d=4.32(1c,c.P());9(d<a){a=d;b=O}}}9(b&&b.2I(c)){b.1E(c)}K{O=F D(4);O.1E(c);4.E.Z(O)}};8.6.23=5(e){7 i,J;7 d;7 c=4;9(!4.1b){j}9(e===0){o.n.v.12(4,"4P",4);9(2i 4.1n!=="1a"){4R(4.1n);1Y 4.1n}}9(4.w().15()>3){d=F o.n.1l(4.w().1B().22(),4.w().1B().25())}K{d=F o.n.1l(F o.n.1p(2Y.4r,-37.4q),F o.n.1p(-2Y.4p,37.4o))}7 a=4.2a(d);7 b=z.21(e+4.1Q,4.k.p);A(i=e;i<b;i++){J=4.k[i];9(!J.1j&&4.2Z(J,a)){9(!4.18||(4.18&&J.4Y())){4.35(J)}}}9(b<4.k.p){4.1n=1P(5(){c.23(b)},0)}K{1Y 4.1n;o.n.v.12(4,"4n",4)}};8.6.14=5(d,c){j(5(b){7 a;A(a 3b b.6){4.6[a]=b.6[a]}j 4}).4m(d,[c])};8.2m=5(a,c){7 f=0;7 b="";7 d=a.p.4l();7 e=d;52(e!==0){e=Y(e/10,10);f++}f=z.21(f,c);j{1x:d,2R:f,13:b}};8.2E=4k;8.2k=4j;8.2r="4i://o-n-58-4g-4f.4e.4d/4c/4b/4a/5g/m";8.2o="48";8.2j=[53,56,46,45,42];',62,334,'||||this|function|prototype|var|MarkerClusterer|if||||||||||return|markers_|||maps|google|length|div_|||false|null|event|getMap|||Math|for|px|center_|Cluster|clusters_|new|ClusterIcon|cluster_|true|marker|else|setMap|styles_|getMarkerClusterer|cluster|getPosition|lat||style|map_|gridSize_|markerClusterer_|clusterIcon_|minClusterSize_|parseInt|push|||trigger|title|extend|getZoom|sums_|lng|ignoreHidden_|averageCenter_|undefined|ready_|center|enableRetinaIcons_|imageSizes_|activeMap_|indexOf|width_|visible_|isAdded|redraw_|LatLngBounds|height_|timerRefStatic|size|LatLng|repaint|listeners_|getMaxZoom|imagePath_|imageExtension_|zoomOnClick_|resetViewport_|text|font|batchSizeIE_|height|getBounds|width|getMarkers|addMarker|remove|addDomListener|180|left|sin|PI|top|addListener|hide|fitBounds|setTimeout|batchSize_|clusterClass_|calculator_|title_|maxZoom_|anchorText_|absolute|position|delete|div|getStyles|min|getSouthWest|createClusters_|calculateBounds_|getNorthEast|getPosFromLatLng_|removeMarker_|fromLatLngToDivPixel|show|getExtendedBounds|pushMarkerTo_|bounds_|anchorIcon_|mouseout|mouseover|stopPropagation|get|typeof|IMAGE_SIZES|BATCH_SIZE_IE|textDecoration_|CALCULATOR|fontStyle_|IMAGE_EXTENSION|fontWeight_|getClusterClass|IMAGE_PATH|fontFamily_|enableRetinaIcons|ignoreHidden|textSize_|averageCenter|zoomOnClick|maxZoom|getZoomOnClick|addMarkers|className_|onAdd|setupStyles_|BATCH_SIZE|textColor_|getCalculator|contains|isMarkerInClusterBounds|updateIcon_|url_|click|useStyle|idle|createCss|getCenter|onRemove|index|removeListener|getGridSize|getTitle|none|boundsChangedListener_|isMarkerAlreadyAdded_|85|isMarkerInBounds_|setCenter|OverlayView|distanceBetweenPoints_|fromDivPixelToLatLng|cos|addToClosestCluster_|sqrt|178|draw|getProjection|display|in|getAverageCenter|getMinimumClusterSize|backgroundPosition_|replace|url|parentNode|setIgnoreHidden|getIgnoreHidden|setAverageCenter|max|setStyles|setMaxZoom|setGridSize|fitMapToMarkers|minZoom|createElement|zoom_changed|cancelBubble|toLowerCase|line|100|document|clusterClass|batchSizeIE|align|batchSize|setZoom|decoration|calculator|imageSizes|imageExtension|weight|imagePath|family|styles|navigator|userAgent|minimumClusterSize|msie|color|60|gridSize|innerHTML|clusterclick|rect|clip|src|img|cssText|mousedown|setMinimumClusterSize|getSize|90|setTitle|setZoomOnClick|78|66|getEnableRetinaIcons|png|bounds_changed|markerclustererplus|trunk|svn|com|googlecode|v3|library|split|http|500|2000|toString|apply|clusteringend|00048865625|08136444384544|48388434375|02070771743472|join|pointer|40000|cursor|atan2|appendChild|backgroundPosition|serif|6371|sans|Arial|overlayMouseTarget|fontFamily|normal|slice|fontStyle|clearMarkers|splice|bold|getPanes|break|fontWeight|removeMarkers|clusteringbegin|textDecoration|clearTimeout|removeMarker|dragend|getDraggable|hasOwnProperty|textSize|removeChild|getVisible|black|getTotalClusters|getClusters|while||textColor|clearInstanceListeners||getTotalMarkers|utility|setClusterClass|setBatchSizeIE|getBatchSizeIE|anchorIcon|setCalculator|setImageSizes|getImageSizes|images|setImagePath|anchorText|getImagePath|setImageExtension|getImageExtension|setEnableRetinaIcons|className'.split('|'),0,{}));

eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('7 1G(b,a){7 1u(){};1u.v=a.v;b.2B=a.v;b.v=1b 1u();b.v.3h=b}7 u(c,b,a){2.3=c;2.1L=c.2y;2.6=K.1A("2k");2.6.4.S="Z: 1p; 15: 1P;";2.q=K.1A("2k");2.q.4.S=2.6.4.S;2.q.1M("2A","1d A;");2.q.1M("2w","1d A;");2.U=u.P(b)}1G(u,8.5.3g);u.P=7(b){t a;9(C u.P.1j==="B"){a=K.1A("30");a.4.S="Z: 1p; z-2Y: 2W; M: 13;";a.4.1l="-2P";a.4.1x="-2M";a.2I=b;u.P.1j=a}1d u.P.1j};u.v.2D=7(){t g=2;t m=A;t c=A;t f;t j,1e;t p;t d;t h;t o;t n=20;t i="3p("+2.1L+")";t k=7(e){9(e.2q){e.2q()}e.3l=G;9(e.2n){e.2n()}};t l=7(){g.3.2m(3c)};2.1E().1J.X(2.6);2.1E().36.X(2.q);9(C u.P.2e==="B"){2.1E().1J.X(2.U);u.P.2e=G}2.1t=[8.5.r.O(2.q,"2c",7(e){9(g.3.R()||g.3.W()){2.4.19="25";8.5.r.D(g.3,"2c",e)}}),8.5.r.O(2.q,"21",7(e){9((g.3.R()||g.3.W())&&!c){2.4.19=g.3.2V();8.5.r.D(g.3,"21",e)}}),8.5.r.O(2.q,"1X",7(e){c=A;9(g.3.R()){m=G;2.4.19=i}9(g.3.R()||g.3.W()){8.5.r.D(g.3,"1X",e);k(e)}}),8.5.r.O(K,"1s",7(a){t b;9(m){m=A;g.q.4.19="25";8.5.r.D(g.3,"1s",a)}9(c){9(d){b=g.Y().1v(g.3.Q());b.y+=n;g.3.J(g.Y().1S(b));2O{g.3.2m(8.5.2N.2L);2J(l,2H)}2E(e){}}g.U.4.M="13";g.3.11(f);p=G;c=A;a.L=g.3.Q();8.5.r.D(g.3,"1N",a)}}),8.5.r.w(g.3.1g(),"2C",7(a){t b;9(m){9(c){a.L=1b 8.5.2z(a.L.1f()-j,a.L.1i()-1e);b=g.Y().1v(a.L);9(d){g.U.4.14=b.x+"H";g.U.4.T=b.y+"H";g.U.4.M="";b.y-=n}g.3.J(g.Y().1S(b));9(d){g.q.4.T=(b.y+n)+"H"}8.5.r.D(g.3,"1K",a)}V{j=a.L.1f()-g.3.Q().1f();1e=a.L.1i()-g.3.Q().1i();f=g.3.1c();h=g.3.Q();o=g.3.1g().2x();d=g.3.F("16");c=G;g.3.11(1I);a.L=g.3.Q();8.5.r.D(g.3,"1H",a)}}}),8.5.r.O(K,"2v",7(e){9(c){9(e.3r===27){d=A;g.3.J(h);g.3.1g().3q(o);8.5.r.D(K,"1s",e)}}}),8.5.r.O(2.q,"2u",7(e){9(g.3.R()||g.3.W()){9(p){p=A}V{8.5.r.D(g.3,"2u",e);k(e)}}}),8.5.r.O(2.q,"2s",7(e){9(g.3.R()||g.3.W()){8.5.r.D(g.3,"2s",e);k(e)}}),8.5.r.w(2.3,"1H",7(a){9(!c){d=2.F("16")}}),8.5.r.w(2.3,"1K",7(a){9(!c){9(d){g.J(n);g.6.4.N=1I+(2.F("17")?-1:+1)}}}),8.5.r.w(2.3,"1N",7(a){9(!c){9(d){g.J(0)}}}),8.5.r.w(2.3,"3o",7(){g.J()}),8.5.r.w(2.3,"3n",7(){g.11()}),8.5.r.w(2.3,"3m",7(){g.18()}),8.5.r.w(2.3,"3j",7(){g.18()}),8.5.r.w(2.3,"3i",7(){g.1C()}),8.5.r.w(2.3,"3f",7(){g.1y()}),8.5.r.w(2.3,"3e",7(){g.1z()}),8.5.r.w(2.3,"3d",7(){g.1a()}),8.5.r.w(2.3,"3b",7(){g.1a()})]};u.v.3a=7(){t i;2.6.2j.2i(2.6);2.q.2j.2i(2.q);2h(i=0;i<2.1t.39;i++){8.5.r.38(2.1t[i])}};u.v.37=7(){2.1y();2.1C();2.1a()};u.v.1y=7(){t a=2.3.F("1w");9(C a.35==="B"){2.6.12=a;2.q.12=2.6.12}V{2.6.12="";2.6.X(a);a=a.34(G);2.q.X(a)}};u.v.1C=7(){2.q.33=2.3.32()||""};u.v.1a=7(){t i,E;2.6.1r=2.3.F("1q");2.q.1r=2.6.1r;2.6.4.S="";2.q.4.S="";E=2.3.F("E");2h(i 31 E){9(E.2Z(i)){2.6.4[i]=E[i];2.q.4[i]=E[i]}}2.2b()};u.v.2b=7(){2.6.4.Z="1p";2.6.4.15="1P";9(C 2.6.4.I!=="B"&&2.6.4.I!==""){2.6.4.2a="\\"29:28.26.2f(I="+(2.6.4.I*24)+")\\"";2.6.4.23="22(I="+(2.6.4.I*24)+")"}2.q.4.Z=2.6.4.Z;2.q.4.15=2.6.4.15;2.q.4.I=0.2X;2.q.4.2a="\\"29:28.26.2f(I=1)\\"";2.q.4.23="22(I=1)";2.1z();2.J();2.18()};u.v.1z=7(){t a=2.3.F("1o");2.6.4.1l=-a.x+"H";2.6.4.1x=-a.y+"H";2.q.4.1l=-a.x+"H";2.q.4.1x=-a.y+"H"};u.v.J=7(a){t b=2.Y().1v(2.3.Q());9(C a==="B"){a=0}2.6.4.14=1Z.1Y(b.x)+"H";2.6.4.T=1Z.1Y(b.y-a)+"H";2.q.4.14=2.6.4.14;2.q.4.T=2.6.4.T;2.11()};u.v.11=7(){t a=(2.3.F("17")?-1:+1);9(C 2.3.1c()==="B"){2.6.4.N=2U(2.6.4.T,10)+a;2.q.4.N=2.6.4.N}V{2.6.4.N=2.3.1c()+a;2.q.4.N=2.6.4.N}};u.v.18=7(){9(2.3.F("1n")){2.6.4.M=2.3.2T()?"2S":"13"}V{2.6.4.M="13"}2.q.4.M=2.6.4.M};7 1m(a){a=a||{};a.1w=a.1w||"";a.1o=a.1o||1b 8.5.2R(0,0);a.1q=a.1q||"2Q";a.E=a.E||{};a.17=a.17||A;9(C a.1n==="B"){a.1n=G}9(C a.16==="B"){a.16=G}9(C a.2d==="B"){a.2d=G}9(C a.1W==="B"){a.1W=A}9(C a.1B==="B"){a.1B=A}a.1k=a.1k||"1V"+(K.1U.1T==="2g:"?"s":"")+"://5.1R.1Q/2t/2l/2o/2K.3k";a.1F=a.1F||"1V"+(K.1U.1T==="2g:"?"s":"")+"://5.1R.1Q/2t/2l/2o/2G.2F";a.1B=A;2.2p=1b u(2,a.1k,a.1F);8.5.1D.1O(2,2r)}1G(1m,8.5.1D);1m.v.1h=7(a){8.5.1D.v.1h.1O(2,2r);2.2p.1h(a)};',62,214,'||this|marker_|style|maps|labelDiv_|function|google|if|||||||||||||||||eventDiv_|event||var|MarkerLabel_|prototype|addListener||||false|undefined|typeof|trigger|labelStyle|get|true|px|opacity|setPosition|document|latLng|display|zIndex|addDomListener|getSharedCross|getPosition|getDraggable|cssText|top|crossDiv_|else|getClickable|appendChild|getProjection|position||setZIndex|innerHTML|none|left|overflow|raiseOnDrag|labelInBackground|setVisible|cursor|setStyles|new|getZIndex|return|cLngOffset|lat|getMap|setMap|lng|crossDiv|crossImage|marginLeft|MarkerWithLabel|labelVisible|labelAnchor|absolute|labelClass|className|mouseup|listeners_|tempCtor|fromLatLngToDivPixel|labelContent|marginTop|setContent|setAnchor|createElement|optimized|setTitle|Marker|getPanes|handCursor|inherits|dragstart|1000000|overlayImage|drag|handCursorURL_|setAttribute|dragend|apply|hidden|com|gstatic|fromDivPixelToLatLng|protocol|location|http|draggable|mousedown|round|Math||mouseout|alpha|filter|100|pointer|Microsoft||DXImageTransform|progid|MsFilter|setMandatoryStyles|mouseover|clickable|processed|Alpha|https|for|removeChild|parentNode|div|en_us|setAnimation|stopPropagation|mapfiles|label|preventDefault|arguments|dblclick|intl|click|keydown|ondragstart|getCenter|handCursorURL|LatLng|onselectstart|superClass_|mousemove|onAdd|catch|cur|closedhand_8_8|1406|src|setTimeout|drag_cross_67_16|BOUNCE|9px|Animation|try|8px|markerLabels|Point|block|getVisible|parseInt|getCursor|1000002|01|index|hasOwnProperty|img|in|getTitle|title|cloneNode|nodeType|overlayMouseTarget|draw|removeListener|length|onRemove|labelstyle_changed|null|labelclass_changed|labelanchor_changed|labelcontent_changed|OverlayView|constructor|title_changed|labelvisible_changed|png|cancelBubble|visible_changed|zindex_changed|position_changed|url|setCenter|keyCode'.split('|'),0,{}))

var mhmli_googlemaps_rootclass,MarkerWithLabel,marker,bounds,mhmli_googlemaps;

(function($){
	
	mhmli_googlemaps = {
		map: null,
		mapContainer: null,
		infowindow: null,
		infowindowContent: null,
		locations: [],
		pins: [],
		map_clustered: null,
		
		////////////////////////////////////////////////////////////////////////////////
		// Options. Can be reset externally before drawing the map.
		text: {
			reset: 'Reset',
			close: 'Close'
		},
		asset_path:'',
		pin_default: function(){
			return null;
		},
		useStyledMarkers: false,
		options: {
			cluster: false,				// cluster markers together, when there are too many to be displayed in one go
			clusterstyles: null,		// array containing custom attributes for the MarkerClusterer object. e.g. styles.
			mapTypeID: null,			// e,g. google.maps.MapTypeId.HYBRID
			mapTypes: null,				// array of types google.maps.MapTypeId
			lat_default: 46.817918,		// default latitude
			lon_default: 8.227386,		// default longitude
			zoomlevel_start: 7,			// default zoom level
			zoomlevel_default: 7,		// default zoom level
			zoomlevel_near: 10,			// if map zooms when clicking on a marker, the zoom level to go to
			zoomlevel_minimum: 1,		// don't let the user zoom out to more than this zoom level
			focus_centre: true,			// when clicking on a marker, should the map centre itself on the clicked marker
			showLabels: false,			// should labels be added to the markers?
			fitToBounds: false,			// should the map automatically set itself to include all markers in the default view?
			hasInfoWindow: true,		// does an infowindow appear when clicking on a marker
			focus_zoom: true,			// when clicking on a marker, should the map zoom in to the clicked marker
			icon_offset: [0,0],			// default icon offset
			icon_size: [16,16],			// default icon size
			icon: null					// optional: use your own icon
		},
		controls: {
			// these options are here in order to comply with Google logic for separating controls and other options
			blockUI: false,				// completely block all UI options including zoom, scroll etc
			resetbutton:true,			// add a reset button to the map?
			visualRefresh:true,			// use the new Google Maps (Summer 2013) - https://developers.google.com/maps/documentation/javascript/basics#VisualRefresh
			disableDefaultUI: false,	// disable all default map features with one command
			panControl: false,			// enable/disable pan controls
			mapTypeControl: false,		// enable/disable map type controls
			scaleControl: true,			// enable/disable scaling (zoom) controls
			streetViewControl: false,	// enable/disable street view control
			overviewMapControl: false,	// enable/disable overview control (bottom right; small controller to see where current section of map is, in relation to e.g. Europe)
			zoomControl: true,			// enable/disable zoom control. if zoomControlOptions are set, they will override this option.
			zoomControlOptions: {		// customization of individual zoom control options - https://developers.google.com/maps/documentation/javascript/controls#ControlOptions
				style: null,
				position:null
			}
		},
		
		////////////////////////////////////////////////////////////////////////////////
	
		setMapStyle: function(mapStyle) {
			if (mapStyle && mapStyle!==null) {
				if(this.options.mapTypes && this.options.mapTypes.length){
					this.options.mapTypes.push(customStyle);
				}
				var customStyle = new google.maps.StyledMapType(
				mapStyle, {
					name: 'customStyle'
				});
				this.map.mapTypes.set('customStyle', customStyle);
				this.map.setMapTypeId('customStyle');
				
				
				
			}
		},//setMapStyle
		
		////////////////////////////////////////////////////////////////////////////////
	
		Marker: function(atts) {
			if(atts.baseClass.options.showLabels){
				marker = new MarkerWithLabel({
					position: atts.position,
					zIndex: atts.zIndex,
					map: atts.map,
					icon: atts.icon,
					labelContent: atts.labelContent,
					markerContent: atts.markerContent,
					labelAnchor: new google.maps.Point(12,8),
					title: atts.title,
					locationID: atts.locationID
				});
			}else{
				marker = new google.maps.Marker({
					position: atts.position,
					zIndex: atts.zIndex,
					map: atts.map,
					icon: atts.icon,
					labelContent: atts.labelContent,
					markerContent: atts.markerContent,
					title: atts.title,
					locationID: atts.locationID
				});
			}
			marker.baseClass = atts.baseClass;
			return marker;
		},//Marker
		
		////////////////////////////////////////////////////////////////////////////////
	
		makeMap: function(divID, layout) {

			if(this.controls.visualRefresh){
				google.maps.visualRefresh = true;
			}
			this.mapContainer = $('#'+divID);

			var mapOptions = {
				zoom: this.options.zoomlevel_default,
				center: this.centrePoint(),
				panControl: this.controls.panControl,
				mapTypeControl: this.controls.mapTypeControl,
				scaleControl: this.controls.scaleControl,
				streetViewControl: this.controls.streetViewControl,
				overviewMapControl: this.controls.overviewMapControl,
				zoomControl: this.controls.zoomControl,
				zoomControlOptions: this.controls.zoomControlOptions
			};
			
			if(this.options.mapTypes && this.options.mapTypes.length){
				mapOptions.mapTypeControlOptions = {
					mapTypeIds: this.options.mapTypes
				};
				mapOptions.mapTypeControl = true;
			}
  
			if(this.options.mapTypeID){
				mapOptions.mapTypeId = this.options.mapTypeID;
			}

			if(this.controls.disableDefaultUI){
				mapOptions.disableDefaultUI = true;
			}

			if(this.controls.blockUI){
				mapOptions.draggable = false;
				mapOptions.zoomable = false;
				mapOptions.scrollwheel = false;
				mapOptions.navigationControl = false;
				mapOptions.mapTypeControl = false;
				mapOptions.scaleControl = false;
				mapOptions.draggable = false;
			}

			this.map = new google.maps.Map(document.getElementById(divID), mapOptions);
			this.map.setZoom(this.options.zoomlevel_start);

			this.setMapStyle(layout);
			if(this.options.fitToBounds){
				bounds = new google.maps.LatLngBounds();
			}
			
			var marker, i, baseClass=this, markers = [];
			for (i in this.locations) {
				if(this.locations.hasOwnProperty(i)){
					var rp = this.locations[i].rankedPosition;
					marker = new this.Marker({
						//map: this.map,
						position: new google.maps.LatLng(this.locations[i].longitude, this.locations[i].latitude),
						title: this.locations[i].title,
						labelContent: this.locations[i].labelContent,
						markerContent: this.locations[i].markerContent,
						rankedPosition: rp + '',
						zIndex: 10000 - i,
						locationID: this.locations[i].locationID,
						icon: this.options.icon,
						baseClass: this
					});

					if(this.locations[i] && this.locations[i].icon){
						var icon_offset = this.locations[i].offset ? this.locations[i].offset : this.options.icon_offset;
						var icon_size = this.locations[i].icon_size ? this.locations[i].icon_size : this.options.icon_size;
						marker.setIcon({
							url: this.locations[i].icon,
							anchor: new google.maps.Point(icon_offset[0],icon_offset[1]),
							size: new google.maps.Size(icon_size[0], icon_size[1])
						});
					}
					if(this.options.fitToBounds){
						bounds.extend(marker.position);
					}

					google.maps.event.addListener(marker, 'click', function(event){
						baseClass.markerClickHandler(event,this,baseClass);
					});

					markers.push(marker);
   				}
			}

			google.maps.event.addListener(this.map, 'zoom_changed', function() {
				if (baseClass.map.getZoom() < baseClass.options.zoomlevel_minimum){
					baseClass.map.setZoom(baseClass.options.zoomlevel_minimum);
				}
			});

			if(this.options.cluster){
				var markerClustererExtras = this.options.clusterstyles ? {styles:this.options.clusterstyles} : {};
				this.map_clustered = new MarkerClusterer(this.map, markers, markerClustererExtras);
			}else{
				for (var i = 0; i < markers.length; i++) {
					markers[i].setMap(this.map);
				}
			}

			if(this.options.fitToBounds){
				this.map.fitBounds(bounds);
			}

			this.addResetButton();
			this.monitorEscapeButton();
		},//makeMap
		
		////////////////////////////////////////////////////////////////////////////////
		
		centrePoint: function(){
			return new google.maps.LatLng(this.options.lat_default, this.options.lon_default);
		},//centrePoint
		
		////////////////////////////////////////////////////////////////////////////////
		
		resetMap: function(){
			this.hideOverlay();
			this.map.setZoom(this.options.zoomlevel_default);
			this.map.setCenter(this.centrePoint());
		},//resetMap
	
		////////////////////////////////////////////////////////////////////////////////
	
		markerClickHandler: function(event,marker,baseClass){
			if(baseClass.options.focus_centre){
				baseClass.map.panTo(marker.getPosition());
			}
			if(baseClass.options.focus_zoom){
				var currentZoom = baseClass.map.getZoom();
				if(currentZoom < baseClass.options.zoomlevel_near){
					baseClass.map.setZoom(baseClass.options.zoomlevel_near);
				}
			}
			if(baseClass.options.hasInfoWindow){
				baseClass.showOverlay(baseClass.map, marker);
			}
		},//markerClickHandler
		
		////////////////////////////////////////////////////////////////////////////////
	
		showOverlay: function(map,marker){
			if(!this.infowindow){
				this.infowindow = $('<div class="overlay window"><div class="wrapper"><div class="inner"><a class="close button" href="#">' +this.text.close+ '</a><div class="content"></div></div></div></div>');
				this.infowindowContent = this.infowindow.find('div.content');
				var mhmli_googlemaps_rootclass = this;
				this.infowindow.find('a.close').click(function(e){
					e.preventDefault();
					mhmli_googlemaps_rootclass.hideOverlay();
				});
				this.mapContainer.append(this.infowindow);
			}
			this.fillOverlay(marker.markerContent);
			this.infowindow.show();
		},//showOverlay
		
		////////////////////////////////////////////////////////////////////////////////
	
		fillOverlay: function(content){
			if(this.infowindowContent){
				this.infowindowContent.html(content);
			}
		},//fillOverlay
		
		////////////////////////////////////////////////////////////////////////////////
	
		hideOverlay: function(){
			if(this.infowindow){
				this.infowindowContent.empty();
				this.infowindow.hide();
			}
		},//hideOverlay
		
		////////////////////////////////////////////////////////////////////////////////
	
		addResetButton: function(){
			if(this.controls.resetbutton){
				this.resetButton = $('<button class="reset">' +this.text.reset+ '</button>');
				baseClass=this;
				this.resetButton.click(function(event){
					baseClass.resetMap();
				});
				$(this.map.b).append(this.resetButton);
			}
		},//addResetButton
		
		////////////////////////////////////////////////////////////////////////////////
	
		monitorEscapeButton: function(){
			mhmli_googlemaps_rootclass = this;
			$(document).keydown(function(e) {
				if(e.keyCode === 27 && mhmli_googlemaps_rootclass.hideOverlay){
					mhmli_googlemaps_rootclass.hideOverlay();
				}
			});
		}//monitorEscapeButton
	
	};
})(jQuery);