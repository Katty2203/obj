var rty={
/*name: "dana",
st: "wom"*/
};
function isEmpty(obj) {
	dd=Object.getOwnPropertyNames(obj);
	if (dd.length>0) return true;
	else return false ;
}
document.write(isEmpty(rty));