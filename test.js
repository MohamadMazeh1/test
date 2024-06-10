document.getElementById('addToSpecificList').addEventListener('click', addToSpecificList);
document.getElementById('addToGeneralList').addEventListener('click', addToGeneralList);
document.getElementById('searchItem').addEventListener('click', searchItem);
document.getElementById('deleteItem').addEventListener('click', deleteItem);

function addToSpecificList() {
    const itemInput = document.getElementById('itemInput').value.trim();
    const itemType = document.querySelector('input[name="itemType"]:checked');
    if (itemInput && itemType) {
        const list = itemType.value === 'fruit' ? 'fruitsList' : 'legumesList';
        addItemToList(list, itemInput, itemType.value === 'fruit' ? 'lightgreen' : 'lightblue');
    } else {
        alert('Please enter an item and select its type.');
    }
}

function addToGeneralList() {
    const itemInput = document.getElementById('itemInput').value.trim();
    if (itemInput) {
        addItemToList('generalList', itemInput, 'lightpink');
    } else {
        alert('Please enter an item.');
    }
}

function addItemToList(listId, item, color) {
    const list = document.getElementById(listId);
    const listItem = document.createElement('li');
    listItem.textContent = item;
    listItem.style.backgroundColor = color; // Set the background color
    listItem.addEventListener('click', () => moveToSpecificList(listItem));
    list.appendChild(listItem);
}

function searchItem() {
    const searchInput = document.getElementById('searchInput').value.trim().toLowerCase();
    if (searchInput) {
        const lists = ['fruitsList', 'generalList', 'legumesList'];
        lists.forEach(listId => {
            const listItems = document.getElementById(listId).getElementsByTagName('li');
            for (let item of listItems) {
                item.style.backgroundColor = item.textContent.toLowerCase().includes(searchInput) ? 'yellow' : item.style.backgroundColor;
            }
        });
    }
}

function deleteItem() {
    const searchInput = document.getElementById('searchInput').value.trim().toLowerCase();
    if (searchInput) {
        const lists = ['fruitsList', 'generalList', 'legumesList'];
        lists.forEach(listId => {
            const list = document.getElementById(listId);
            const listItems = list.getElementsByTagName('li');
            for (let i = listItems.length - 1; i >= 0; i--) {
                if (listItems[i].textContent.toLowerCase().includes(searchInput)) {
                    listItems[i].style.transition = 'opacity 0.5s';
                    listItems[i].style.opacity = 0;
                    setTimeout(() => list.removeChild(listItems[i]), 500);
                }
            }
        });
    }
}

function moveToSpecificList(listItem) {
    const itemText = listItem.textContent;
    const isFruit = confirm(`Is "${itemText}" a fruit?`);
    const targetListId = isFruit ? 'fruitsList' : 'legumesList';
    const targetList = document.getElementById(targetListId);
    const targetColor = isFruit ? 'lightgreen' : 'lightblue';
    listItem.style.backgroundColor = targetColor;
    targetList.appendChild(listItem);
}

// Function to add default items to each list with different colors
function addDefaultItems() {
    const defaultFruits = [
        { name: 'Apple', color: 'lightgreen' },
        { name: 'Banana', color: 'lightgreen' },
        { name: 'Orange', color: 'lightgreen' }
    ];
    const defaultLegumes = [
        { name: 'Lentils', color: 'lightblue' },
        { name: 'Beans', color: 'lightblue' },
        { name: 'Peas', color: 'lightblue' }
    ];
    const defaultGeneral = [
        { name: 'Mango', color: 'lightpink' },
        { name: 'Carrot', color: 'lightpink' },
        { name: 'Tomato', color: 'lightpink' }
    ];

    defaultFruits.forEach(item => addItemToList('fruitsList', item.name, item.color));
    defaultLegumes.forEach(item => addItemToList('legumesList', item.name, item.color));
    defaultGeneral.forEach(item => addItemToList('generalList', item.name, item.color));
}

// Call the function to add default items when the page loads
window.onload = addDefaultItems;