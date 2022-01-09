$(".owl-carousel").owlCarousel({
	loop: true,
	margin: 10,
	nav: true,
	responsive: {
		0: {
			items: 1,
		},
		600: {
			items: 3,
		},
		1000: {
			items: 5,
		},
	},
});

// ================GALLERY======================================
let modalId = $("#image-gallery");

$(document).ready(function () {
	loadGallery(true, "a.thumbnail");

	//This function disables buttons when needed
	function disableButtons(counter_max, counter_current) {
		$("#show-previous-image, #show-next-image").show();
		if (counter_max === counter_current) {
			$("#show-next-image").hide();
		} else if (counter_current === 1) {
			$("#show-previous-image").hide();
		}
	}

	/**
	 *
	 * @param setIDs        Sets IDs when DOM is loaded. If using a PHP counter, set to false.
	 * @param setClickAttr  Sets the attribute for the click handler.
	 */

	function loadGallery(setIDs, setClickAttr) {
		let current_image,
			selector,
			counter = 0;

		$("#show-next-image, #show-previous-image").click(function () {
			if ($(this).attr("id") === "show-previous-image") {
				current_image--;
			} else {
				current_image++;
			}

			selector = $('[data-image-id="' + current_image + '"]');
			updateGallery(selector);
		});

		function updateGallery(selector) {
			let $sel = selector;
			current_image = $sel.data("image-id");
			$("#image-gallery-title").text($sel.data("title"));
			$("#image-gallery-image").attr("src", $sel.data("image"));
			disableButtons(counter, $sel.data("image-id"));
		}

		if (setIDs == true) {
			$("[data-image-id]").each(function () {
				counter++;
				$(this).attr("data-image-id", counter);
			});
		}
		$(setClickAttr).on("click", function () {
			updateGallery($(this));
		});
	}
});

// build key actions
$(document).keydown(function (e) {
	switch (e.which) {
		case 37: // left
			if (
				(modalId.data("bs.modal") || {})._isShown &&
				$("#show-previous-image").is(":visible")
			) {
				$("#show-previous-image").click();
			}
			break;

		case 39: // right
			if (
				(modalId.data("bs.modal") || {})._isShown &&
				$("#show-next-image").is(":visible")
			) {
				$("#show-next-image").click();
			}
			break;

		default:
			return; // exit this handler for other keys
	}
	e.preventDefault(); // prevent the default action (scroll / move caret)
});

// ================GALLERY======================================

// =====================================================
$(function () {
	$(".slider-for").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: ".slider-nav",
	});
	$(".slider-nav").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: ".slider-for",
		dots: false, //false dile dot gulo hide hoye jabe
		arrows: false,
		centerMode: true,
		focusOnSelect: true,
		variableWidth: true,
		autoplay: true,
		autoplaySpeed: 3000,
		infinite: true,
	});
});


// =======================OPTIONAL TOP BUTTON===============

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}












// ================GOOD NEWS FORM SECTION=================

// ================GOOD NEWS HAPPY PARTNER SECTION=================

// demo of owl csrousel

{
	/* <div class="owl-carousel owl-theme">
	<div class="item">
		<h4>1</h4>
	</div>
</div> */
}
// =========================

// un-commennt it when need
// $(".owl-carousel").owlCarousel({
// 	loop: true,
// 	margin: 30,
// 	nav: true,
// 	responsive: {
// 		0: {
// 			items: 1,
// 		},
// 		600: {
// 			items: 3,
// 		},
// 		1000: {
// 			items: 5,
// 		},
// 	},
// });


