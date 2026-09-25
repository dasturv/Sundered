function expandAndHighlight(category_id,subcategory_id,category_collapse_id) {
	var category = document.getElementById(category_id)
	var subcategory = document.getElementById(subcategory_id)
	var category_collapse = document.getElementById(category_collapse_id)

	category.classList.add('highlight')

	subcategory.classList.add('highlight')

	$('#' + category_collapse_id).attr("style","transition: none !important;")
	$('#' + category_collapse_id).collapse({
		show: true
	})
	$('#' + category_collapse_id).attr("style","")
}

function toggleSideBar() {
	$(".bg-dark:first-of-type").toggleClass("t-none");
}

function filterSelection(c) {
	var x, i, j, p;
	p = document.getElementsByClassName("tab-pane")
	for (j = 0; j < p.length; j++) {
		x = p[j].getElementsByClassName("spell");
		// Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  		for (i = 0; i < x.length; i++) {
    		w3RemoveClass(x[i], "show");
    		if (p[j].getElementsByClassName(c).length > 0) {
    			if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    		} else {
    			if (x[i].className.indexOf("null") > -1) w3AddClass(x[i], "show");
    		}
		}
  	}
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}