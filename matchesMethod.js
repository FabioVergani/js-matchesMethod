function capitalize(t,k){var s=t;return s[0].toUpperCase()+(s=s.slice(1),k===1?s.toLowerCase():s);}
//
var matchesMethod=(function(e,vendors){
 var o=e.prototype,p='matches';
 if(!(p in o)){
  p+='Selector';
  if(!(p in o)){
	for(var a,b=o,s=capitalize(p),i=0,m=vendors,l=m.length;i<l;i++){a=m[i]+s;alert(a);if(a in b){p=a;break;};};
	if(p.length===15){p='';};
  };
 };
 return p;
})(window.Element,['webkit','moz','ms','o']);
//

/*
var obj=Element.prototype, prop='matches';
if(!(prop in obj)){
 prop='matchesSelector';
 if(!(prop in obj)){
	prop=null;
	for(var p,o=obj,i=0,m=[ 'webkit','moz','ms','o' ],l=m.length; i<l; i++){
	 p=m[i]+'MatchesSelector';
	 if(p in o){prop=p;break;};
	};
 };
};
console.log(prop);
return prop;
*/
