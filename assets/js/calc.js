 var pageConstant = 3000;
 var baseCost = 4000; 
 var responsivePrice = 1000; 
 var websitePagePrices = new Array();
 websitePagePrices[0]=1*pageConstant;
 websitePagePrices["pageOption1"]=1*pageConstant;
 websitePagePrices["pageOption2"]=2*pageConstant;
 websitePagePrices["pageOption3"]=3*pageConstant;
 websitePagePrices["pageOption4"]=4*pageConstant;
 websitePagePrices["pageOption5"]=5*pageConstant;
 
 var customDesignPrices= new Array();
 customDesignPrices["customDesign1"]= 2000;//1000;
 customDesignPrices["customDesign2"]=1000;
 customDesignPrices["customDesign3"]=10;
 customDesignPrices["customDesign4"]=10;
 customDesignPrices["customDesign5"]=10;
 
 var ecPrices = new Array();
 ecPrices["cowrite1"]=2000;
 ecPrices["cowrite2"]=0;

 var SEOOnePrice = 400;
 var SEOTwoPrice = 400;
 var SEOThreePrice = 2000;
 
 var extraOnePrice = 500;
 var extraTwoPrice = 500;
 var extraThreePrice = 500;
 var extraFourPrice = 100;
 var extraFivePrice = 200;
 
 var responsiveClicked = false;
 
 
 function IsNumeric(input)
{
    return (input - 0) == input && (''+input).replace(/^\s+|\s+$/g, "").length > 0;
}
 
 function getwebsitePagePrices()
{
    var websitePageTotalPrice=0;
    var theForm = document.forms["calForm"];
    var selectedPages = theForm.elements["websitePageOptions"];
    numpages = document.getElementById("websitePageOptions").value;//websitePagePrices[selectedPages.value];
	
	
	if(IsNumeric(numpages))
	{
	
	websitePageTotalPrice =  numpages * pageConstant;
	}
	
	else {
	
	document.getElementById("websitePageOptions").value = "1";
	
	
	}
	
    //finally we return cakeFillingPrice
    return websitePageTotalPrice;
}

 function getCustomDesignPrices()
{
    var customDesignTotalPrice=0;
    var theForm = document.forms["calForm"];
    var selectedDesign = theForm.elements["customDesign"];
    customDesignTotalPrice = customDesignPrices[selectedDesign.value];

    //finally we return cakeFillingPrice
    return customDesignTotalPrice;
}

function getECPrices()
{  
    var ecTotalPrice=0;
    var theForm = document.forms["calForm"];
    var selectedEC = theForm.elements["question1"];
    for(var i = 0; i < selectedEC.length; i++)
    {
        if(selectedEC[i].checked)
        {
            ecTotalPrice = ecPrices[selectedEC[i].value];
            break;
        }
    }
    return ecTotalPrice;
}
function getSEO1Price() {
    var seo1Price = 0;
    var theForm = document.forms["calForm"];
    var includeSEO1 = theForm.elements["seo1"];
  
    if (includeSEO1.checked) {
        seo1Price = SEOOnePrice;
    }
    return seo1Price;
}

function getSEO2Price() {
    var seo2Price = 0;
    var theForm = document.forms["calForm"];
    var includeSEO2 = theForm.elements["seo2"];
  
    if (includeSEO2.checked) {
        seo2Price = SEOTwoPrice;
    }
    return seo2Price;
}

function getSEO3Price() {
    var seo3Price = 0;
    var theForm = document.forms["calForm"];
    var includeSEO3 = theForm.elements["seo3"];
  
    if (includeSEO3.checked) {
        seo3Price = SEOThreePrice;
    }
    return seo3Price;
}

function getExtra1Price() {
    var extra1Price = 0;
    var theForm = document.forms["calForm"];
    var includeExtra1 = theForm.elements["extra1"];
  
    if (includeExtra1.checked) {
        extra1Price = extraOnePrice;
    }
    return extra1Price;
}

function getExtra2Price() {
    var extra2Price = 0;
    var theForm = document.forms["calForm"];
    var includeExtra2 = theForm.elements["extra2"];
  
    if (includeExtra2.checked) {
        extra2Price = extraTwoPrice;
    }
    return extra2Price;
}

function getExtra3Price() {
    var extra3Price = 0;
    var theForm = document.forms["calForm"];
    var includeExtra3 = theForm.elements["extra3"];
  
    if (includeExtra3.checked) {
        extra3Price = extraThreePrice;
    }
    return extra3Price;
}

function getExtra4Price() {
    var extra4Price = 0;
    var theForm = document.forms["calForm"];
    var includeExtra4 = theForm.elements["extra4"];
  
    if (includeExtra4.checked) {
        extra4Price = extraFourPrice;
    }
    return extra4Price;
}

function getExtra5Price() {
    var extra5Price = 0;
    var theForm = document.forms["calForm"];
    var includeExtra5 = theForm.elements["extra5"];
  
    if (includeExtra5.checked) {
        extra5Price = extraFivePrice;
    }
    return extra5Price;
}

function calculateTotal() {
	var grandTotal = baseCost + getwebsitePagePrices() + getCustomDesignPrices() + getECPrices() + getSEO1Price() + getSEO2Price() + getSEO3Price() + getExtra1Price() + getExtra2Price() + getExtra3Price() + getExtra4Price() + getExtra5Price();
	var responsivePrice2 = 0;
	if ($('input#addResponsive').prop('checked', true)) {
	grandTotal = grandTotal + responsivePrice;
	}
	else  {
	grandTotal = grandTotal + responsivePrice2;
	}

    var divobj = document.getElementById('total');
    divobj.style.display = 'block';
	
	
    divobj.innerHTML = "&#8377;"+grandTotal*.5 + " to " + "&#8377;"+grandTotal +" excl. GST";

}

window.onload = function() {
	var startTotal = baseCost + pageConstant + customDesignPrices["customDesign1"];
	startTotal = baseCost + getwebsitePagePrices() + getCustomDesignPrices() + getECPrices() + getSEO1Price() + getSEO2Price() + getSEO3Price() + getExtra1Price() + getExtra2Price() + getExtra3Price() + getExtra4Price() + getExtra5Price();
	
	
    var divobj = document.getElementById('total');
    divobj.style.display = 'block';
    divobj.innerHTML = "&#8377;"+(startTotal*.5) + " to " +"&#8377;"+startTotal +" excl. GST";
};
