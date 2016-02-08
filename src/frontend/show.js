import GuestList from './guestList';
import './style.css';


module.exports = () => {
    console.log('init es7');
    
    var ul = document.createElement('ul');
    GuestList.map((guest) => {
        var name = document.createTextNode(guest.name);
        var li = document.createElement('li');
        li.appendChild(name);
        ul.appendChild(li);
    });
    document.getElementById('list').appendChild(ul);
};

// var GuestList = require('./guestList.js');
// require('./style.css');

// module.exports = function() {
//     console.log('buy here15');
    
//     var ul = document.createElement('ul');
//     GuestList.map(function(guest) {
//         var name = document.createTextNode(guest.name);
//         var li = document.createElement('li');
//         li.appendChild(name);
//         ul.appendChild(li);
//     });
//     document.getElementById('list').appendChild(ul);
// };