let activeModal = null;

export function openModal(modalSelector) {
  const modal = document.querySelector(modalSelector);
  if (!modal) return;

  activeModal = modal;
  modal.classList.add('is-open');
  document.body.classList.add('no-scroll');

  modal.addEventListener('click', handleBackdropOrCloseClick);
  document.addEventListener('keydown', handleEscape);
}

export function closeModal() {
  if (!activeModal) return;

  activeModal.classList.remove('is-open');
  document.body.classList.remove('no-scroll');

  activeModal.removeEventListener('click', handleBackdropOrCloseClick);
  document.removeEventListener('keydown', handleEscape);

  activeModal = null;
}

function handleBackdropOrCloseClick(e) {
  const isBackdrop = e.target === activeModal;
  const isCloseBtn = e.target.closest('.js-close-btn');

  if (isBackdrop || isCloseBtn) {
    closeModal();
  }
}

function handleEscape(e) {
  if (e.key === 'Escape') {
    closeModal();
  }
}
