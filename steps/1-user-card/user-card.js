class UserCard extends HTMLElement {
  createdCallback() {
    const firstName = this.getAttribute('first-name');
    const lastName = this.getAttribute('last-name');

    this.textContent = `Name: ${firstName} ${lastName}`;

    this.style.padding = '10px';
    this.style.background = '#ccc';
  }
}

document.registerElement('user-card', UserCard);
