var awebapp = {}

//Show banner ad
awebapp.showBanner = function (){
    if(!awebapp.ispro){
        try{
            Android.showAndroidBanner()
        }catch(e){
            console.log(e)
        }
    }else{
        console.log("App is Pro")
    }
}

//Hide banner ad
awebapp.hideBanner = function (){
	try{
		Android.hideAndroidBanner()
	}catch(e){
		console.log(e)
	}
}

//Show interstitial ad
awebapp.showInterstitial = function (){
    if(!awebapp.ispro){
        try{
            Android.showAd()
        }catch(e){
            console.log(e)
        }
    }else{
        console.log("App is Pro")
    }
}

awebapp.showRewardedAd = function(){
    if(!awebapp.ispro){
        try{
            Android.showRewardedAd()
        }catch(e){
            console.log(e)
        }
    }else{
        console.log("App is Pro")
    }
}

//User got reward from rewarded ad
awebapp.rewarded = function(){
    //Modify this as you need
    document.getElementById("currentrewards").innerHTML = "Got ad Reward!"
}

//Landscape screen
awebapp.landscape = function (){
	try{
		Android.landscape()
	}catch(e){
		console.log(e)
	}
}

//Portrait screen
awebapp.portrait = function (){
	try{
		Android.portrait()
	}catch(e){
		console.log(e)
	}
}

//Show toast alert
awebapp.alert = function(txt){
    try{
        Android.showAlert(txt)
    }catch(e){
        console.log(e)
    }
}

//Rate this app
awebapp.rateThisApp = function(){
    try{
        Android.rateThisApp()
    }catch(e){
        console.log(e)
    }
}

//Share a text
awebapp.shareText = function(txt, title){
    try{
        Android.shareText(txt, title)
    }catch(e){
        console.log(e)
    }
}

//Share this app
awebapp.shareThisApp = function(txt, title){
    try{
        Android.shareThisApp(txt, title)
    }catch(e){
        console.log(e)
    }
}

//Purchase Remove Ads feature
awebapp.removeAds = function(){
    try{
        Android.removeAds()
    }catch(e){
        console.log(e)
    }
}

//Determine the app is it pro without ads or not
awebapp.ispro = false
awebapp.itspro = function(n){
    if(n == 1){
        awebapp.hideBanner()
        awebapp.ispro = true
		itspro(1)
    }else{
        awebapp.ispro = false
    }
}

setTimeout(function(){
	awebapp.showBanner()
},3000)