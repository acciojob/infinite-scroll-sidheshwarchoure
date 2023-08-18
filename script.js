//your code here!
// Get the list element
const list = document.querySelector('#infi-list');

// Add about 10 default list items
for (let i = 3; i <= 12; i++) {
  const listItem = document.createElement('li');
  listItem.textContent = `List Item ${i}`;
  list.appendChild(listItem);
}

// Function to add more list items
function addMoreItems() {
  for (let i = 1; i <= 2; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = `New List Item ${i}`;
    list.appendChild(listItem);
  }
}

// Detect when user scrolls to the bottom
list.addEventListener('scroll', () => {
  const scrollPosition = list.scrollTop + list.clientHeight;
  const scrollHeight = list.scrollHeight;

  if (scrollPosition === scrollHeight) {
    addMoreItems();
  }
});

