var tabs = document.querySelectorAll(".tabs_wrap ul li");
var tabs1 = document.querySelectorAll(".tabs_wrap1 ul li");
var springsale = document.querySelectorAll(".springsale");
var sweatshirt = document.querySelectorAll(".sweatshirt");
var sneakers = document.querySelectorAll(".sneakers");
var gadgets = document.querySelectorAll(".gadgets");
var outdoor = document.querySelectorAll(".outdoor");
var springsale1 = document.querySelectorAll(".springsale1");
var sweatshirt1 = document.querySelectorAll(".sweatshirt1");
var sneakers1 = document.querySelectorAll(".sneakers1");
var gadgets1 = document.querySelectorAll(".gadgets1");
var outdoor1 = document.querySelectorAll(".outdoor1");
var all = document.querySelectorAll(".item_wrap");
var all1 = document.querySelectorAll(".item_wrap1");

tabs.forEach((tab)=>{
	tab.addEventListener("click", ()=>{
		tabs.forEach((tab)=>{
			tab.classList.remove("active");
		})
		tab.classList.add("active");
		var tabval = tab.getAttribute("data-tabs");

		all.forEach((item)=>{
			item.style.display = "none";
		})

		if(tabval == "springsale"){
			springsale.forEach((springsale)=>{
				springsale.style.display = "flex";
			})
		}
		else if(tabval == "sweatshirt"){
			sweatshirt.forEach((sweatshirt)=>{
				sweatshirt.style.display = "flex";
			})
		}
		else if(tabval == "sneakers"){
			sneakers.forEach((sneakers)=>{
				sneakers.style.display = "flex";
			})
		}
		else if(tabval == "gadgets"){
			gadgets.forEach((gadgets)=>{
				gadgets.style.display = "flex";
			})
		}
		else if(tabval == "outdoor"){
			outdoor.forEach((outdoor)=>{
				outdoor.style.display = "flex";
			})
		}
		else{
			all.forEach((item)=>{
				item.style.display = "flex";
			})
		}
	})
})

tabs1.forEach((tab)=>{
	tab.addEventListener("click", ()=>{
		tabs.forEach((tab)=>{
			tab.classList.remove("active");
		})
		tab.classList.add("active");
		var tabval = tab.getAttribute("data-tabs");

		all1.forEach((item)=>{
			item.style.display = "none";
		})

		if(tabval == "springsale1"){
			springsale1.forEach((springsale1)=>{
				springsale1.style.display = "block";
			})
		}
		else if(tabval == "sweatshirt1"){
			sweatshirt1.forEach((sweatshirt1)=>{
				sweatshirt1.style.display = "block";
			})
		}
		else if(tabval == "sneakers1"){
			sneakers1.forEach((sneakers1)=>{
				sneakers1.style.display = "block";
			})
		}
		else if(tabval == "gadgets1"){
			gadgets1.forEach((gadgets1)=>{
				gadgets1.style.display = "block";
			})
		}
		else if(tabval == "outdoor1"){
			outdoor1.forEach((outdoor1)=>{
				outdoor1.style.display = "block";
			})
		}
		else{
			all1.forEach((item)=>{
				item.style.display = "block";
			})
		}
	})
})