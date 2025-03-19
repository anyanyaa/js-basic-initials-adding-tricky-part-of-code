const notificationWrapper = document.querySelector('.notifications');

/**
 * @param {string} text
 * @param {number?} time
 */
function notify(text, time = 5000) {
  const notificationElement = document.createElement('li');

  notificationElement.classList.add('toast', 'show');
  notificationElement.role = 'alert';
  notificationElement.ariaLive = 'assertive';
  notificationElement.ariaAtomic = 'true';
  notificationElement.innerHTML = `
    <div class="toast-header">
      <strong class="me-auto">Bootstrap</strong>
      <small>11 mins ago</small>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
      ${text}
    </div>
  `;

  notificationWrapper.append(notificationElement);

  setTimeout(() => {
    notificationElement.remove();
  }, time);

  return notificationElement;
}

notify('Hi all');

