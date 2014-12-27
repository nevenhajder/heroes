
/* Create a lightbox for card flip */


/* Add class fa-spin to #flip when user hovers */
$('#flip').hover(
	function() {
		console.log("You're hovering.");
		$('#flip i').addClass('fa-spin');
	},
	function() {
		$('#flip i').removeClass('fa-spin');
	}
);

/* Variables for carousel manipulation */
var carousel = $('.carousel-wrap');
/* Translate and rotate variables */
var tranZ = 277;
var rotY = 0;

/* Rotate carousel on #next.click */
$('#next').on('click',
	function() {
		rotY -= 60;
		carousel.css('-webkit-transform', 'translateZ(-' + tranZ + 'px) rotateY(' + rotY + 'deg)');
		console.log('tranZ: ' + tranZ);
		console.log('rotY: ' + rotY);
});


/* Rotate carousel on #previous.click */
$('#previous').on('click',
	function() {
		rotY += 60;
		/* Fails when rotY goes below 0 */
		carousel.css('-webkit-transform', 'translateZ(-' + tranZ + 'px) rotateY(' + rotY + 'deg)');

		console.log('tranZ: ' + tranZ);
		console.log('rotY: ' + rotY);
});


/* Flip the card */
$('#flip').on('click',
	function() {
		/*Flip the card*/
});