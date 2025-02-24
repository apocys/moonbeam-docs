/** Create the modal */
const networkModalContainer = document.createElement('div');
const networkModal = document.createElement('div');
const networkModalHeader = document.createElement('h3');
const networkModalMessage = document.createElement('p');
const closeNetworkModal = document.createElement('span');

/** Add classes to modal elements so we can find and update as needed */
networkModalContainer.className = 'network-modal-container';
networkModalHeader.className = 'network-modal-header';
networkModal.className = 'network-modal';
networkModalMessage.className = 'network-message';
closeNetworkModal.className = 'close-modal';

/** Set the display to none to hide the modal until it is needed */
networkModalContainer.style.display = 'none';

networkModalHeader.innerHTML = `Please select a network:`;

/** Set generic header for the network modal */
networkModalMessage.innerHTML = `
  <div class="button-wrapper">
    <a href="#" class="md-button connect-network md-typeset" value="moonbase">Moonbase Alpha TestNet</a>
  </div>
  <div class="button-wrapper">
    <a href="#" class="md-button connect-network" value="moonriver">Moonriver</a>
  </div>
`;

/** Set up close button */
closeNetworkModal.innerHTML = '&times;';
closeNetworkModal.onclick = () => {
  networkModalContainer.style.display = 'none';
};

/** Put the modal together and append it to the main area on the page */
networkModal.appendChild(closeNetworkModal);
networkModal.appendChild(networkModalHeader);
networkModal.appendChild(networkModalMessage);
networkModalContainer.appendChild(networkModal);
main.append(networkModalContainer);
