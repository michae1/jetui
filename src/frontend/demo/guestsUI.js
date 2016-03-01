import GuestList from './guestList';
import './style.css';

var sideEffectNode = document.createElement('div');
document.getElementById('root').appendChild(sideEffectNode);

var ul = document.createElement('ul');
ul.setAttribute("id", "guestsElement");
GuestList.map((guest) => {
    var name = document.createTextNode(guest.name);
    var li = document.createElement('li');
    li.appendChild(name);
    ul.appendChild(li);
});
sideEffectNode.appendChild(ul);

if (module.hot) {
  module.hot.dispose(function() {
    sideEffectNode.parentNode.removeChild(sideEffectNode);
  });
}

module.exports = () => {
    
};

