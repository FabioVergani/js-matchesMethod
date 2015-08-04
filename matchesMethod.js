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
//
