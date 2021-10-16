var names=["John","Yaakov","Joe"];
for(var name in names){

	if(names[name].startsWith('j')|| names[name].startsWith('J')){
		console.log("Goodbye JSomeName");
	}
	else{
		console.log("Hello SomeName");
	}

	
}