import GuestList from './guestList';
import './style.css';


module.exports = () => {
    var existsEl = document.getElementById("guestsElement");
    if (existsEl)
        document.getElementById("list").removeChild(existsEl);
    var ul = document.createElement('ul');
    ul.setAttribute("id", "guestsElement");
    GuestList.map((guest) => {
        var name = document.createTextNode(guest.name);
        var li = document.createElement('li');
        li.appendChild(name);
        ul.appendChild(li);
    });
    document.getElementById('list').appendChild(ul);
};