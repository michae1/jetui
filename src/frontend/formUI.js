import './style.css';

var sideEffectNode = document.createElement('div');
document.getElementById('form').appendChild(sideEffectNode);

var input = document.createElement('input');
input.setAttribute("name", "someInput");
sideEffectNode.appendChild(input);

if (module.hot) {
  module.hot.dispose(function() {
    sideEffectNode.parentNode.removeChild(sideEffectNode);
  });
}

module.exports = () => {
    
};

