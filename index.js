const modalContainer = document.querySelector('#modal-id');
const modalOpen = document.querySelector('#modal-open')
const overlaySection = document.querySelector('.overlay')
const closeButton = document.querySelector('.close-button')

// Function to open the modal
function openModal() {
    modalOpen.classList.add('open');
    overlaySection.classList.add('open')
};

// Function to close the modal
function closeModal() {
    modalOpen.classList.remove('open');
    overlaySection.classList.remove('open')
};

// Event listener for clicking outside the modal
window.addEventListener('click', function (e) {
    if (e.target == overlaySection) {
        closeModal();
    }
});

closeButton.addEventListener('click', closeModal);

modalContainer.addEventListener('click', openModal);
