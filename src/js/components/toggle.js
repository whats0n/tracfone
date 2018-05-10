import { ACTIVE, WIN } from '../constants';

const watch = [];

$('.js-toggle').each((i, container) => {
  const containerJQ = $(container);
  const control = containerJQ.find('.js-toggle-control');

  control.on('click', e => {
    e.preventDefault();
    control
      .add(containerJQ)
      .toggleClass(ACTIVE);
  });

  watch.push(() => !control.hasClass(ACTIVE) && control.attr('hidden', container.scrollHeight <= container.clientHeight));
});

let timer = null;

watch.length && $(window).on('resize load', () => {
  if (timer) clearTimeout(timer);
  timer = setTimeout(() => watch.forEach(fn => fn()), 200);
});
