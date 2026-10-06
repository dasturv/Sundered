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