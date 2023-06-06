// This file contains JavaScript code that is used to populate a list of users with information from the Random User API.

// The `result` variable is used to store the DOM element that will contain the list of users.

const result = document.getElementById('result')
// The `filter` variable is used to store the DOM element that contains the search input field.
const filter = document.getElementById('filter')
// The `listItems` variable is an array that will store the list of user elements
const listItems = []

getData()
// The `getData()` function is used to fetch data from the Random User API.

filter.addEventListener('input', (e) => filterData(e.target.value))


// The `res` variable is used to store the response from the API request.
async function getData() {
    const res = await fetch('https://randomuser.me/api?results=50')

    const { results } = await res.json()
    // The `results` variable is used to store the data from the API response.

    // Clear result
    result.innerHTML = ''

    // Iterate through the `results` array and create a new `li` element for each user.
    results.forEach(user => {
        const li = document.createElement('li')

        // Add the `li` element to the `listItems` array.
        listItems.push(li)

        // Add the user data to the `li` element
        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `
        // Append the `li` element to the `result` element.
        result.appendChild(li)
    })
}


// The `filterData()` function is used to filter the list of users based on the search term.
function filterData(searchTerm) {
    // Iterate through the `listItems` array and hide all of the elements.
    listItems.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
}