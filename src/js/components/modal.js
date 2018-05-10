import {OPEN} from '../constants';

const modals = $('[data-modal]');
const closeButtons = $('[data-modal-close]');

$('[data-modal-control]').each((i, control) => {
  control = $(control);
  const modal = modals.filter(`[data-modal="${control.data('modal-control')}"]`);

  control.on('click', e => {
    e.preventDefault();
    modal.addClass(OPEN);
  });
});

modals.each((i, modal) => {
  modal = $(modal);
  const container = modal.find('[data-modal-container]');

  modal.on('click', e => {
    if ($(e.target).closest(container).length) return;
    modal.removeClass(OPEN);
  });
});


closeButtons.each((i, closeButton) => {
  closeButton = $(closeButton);
  const modal = closeButton.closest('[data-modal]');

  closeButton.on('click', e => {
    e.preventDefault();
    modal.removeClass(OPEN);
  });
});
