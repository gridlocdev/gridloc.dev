// The page works without this file: modals open and close with plain links.
// This only adds keyboard shortcuts and moves keyboard focus to the right place.

// Escape closes the open modal, arrow keys go to the previous / next project
document.addEventListener('keydown', function (event) {
	const openModal = document.querySelector('.modal:target');
	if (!openModal) {
		return;
	}

	let link = null;
	if (event.key === 'Escape') {
		link = openModal.querySelector('.modal-close');
	} else if (event.key === 'ArrowLeft') {
		link = openModal.querySelector('.modal-prev');
	} else if (event.key === 'ArrowRight') {
		link = openModal.querySelector('.modal-next');
	}

	if (link) {
		event.preventDefault();
		link.click();
	}
});

// Runs every time the part of the URL after "#" changes
window.addEventListener('hashchange', function (event) {
	const openModal = document.querySelector('.modal:target');

	if (openModal) {
		// A modal opened: focus it so Tab starts inside it
		openModal.focus({ preventScroll: true });
		return;
	}

	// A modal closed: remove "#close" from the address bar
	if (location.hash === '#close') {
		history.replaceState(null, '', location.pathname + location.search);
	}

	// Put focus back on the card that belongs to the modal that was open
	const previousHash = new URL(event.oldURL).hash;
	const card = document.querySelector('.card[href="' + previousHash + '"]');
	if (card) {
		card.focus({ preventScroll: true });
	}
});

// If the page was opened with a project in the URL, focus that modal
const modalOnLoad = document.querySelector('.modal:target');
if (modalOnLoad) {
	modalOnLoad.focus({ preventScroll: true });
}
