const users = [
    { firstName: 'Alice', lastName: 'Smith', age: 25, gender: 'female', location: 'New York' },
    { firstName: 'Bob', lastName: 'Johnson', age: 32, gender: 'male', location: 'Los Angeles' },
    { firstName: 'Charlie', lastName: 'Brown', age: 19, gender: 'male', location: 'Chicago' },
    { firstName: 'Diana', lastName: 'Garcia', age: 41, gender: 'female', location: 'Houston' },
    { firstName: 'Eva', lastName: 'Davis', age: 28, gender: 'female', location: 'Miami' },
    { firstName: 'Frank', lastName: 'Wilson', age: 36, gender: 'male', location: 'San Francisco' },
    { firstName: 'Grace', lastName: 'Lee', age: 22, gender: 'female', location: 'Seattle' },
    { firstName: 'Henry', lastName: 'Martinez', age: 47, gender: 'male', location: 'Boston' },
    { firstName: 'Isabel', lastName: 'Taylor', age: 31, gender: 'female', location: 'Atlanta' },
    { firstName: 'Jack', lastName: 'Anderson', age: 17, gender: 'male', location: 'Dallas' },
    { firstName: 'Karen', lastName: 'Thomas', age: 24, gender: 'female', location: 'Denver' },
    { firstName: 'Liam', lastName: 'Jackson', age: 27, gender: 'male', location: 'Phoenix' },
    { firstName: 'Mia', lastName: 'White', age: 33, gender: 'female', location: 'Portland' },
    { firstName: 'Nate', lastName: 'Harris', age: 38, gender: 'male', location: 'San Diego' },
    { firstName: 'Olivia', lastName: 'Clark', age: 16, gender: 'female', location: 'Washington D.C.' }
  ];
  const movies = [
    {
      title: 'The Shawshank Redemption',
      genre: 'Drama',
      year: 1994,
      rating: 9.3
    },
    {
      title: 'The Godfather',
      genre: 'Crime',
      year: 1972,
      rating: 9.2
    },
    {
      title: 'The Dark Knight',
      genre: 'Action',
      year: 2008,
      rating: 9.0
    },
    {
      title: '12 Angry Men',
      genre: 'Action',
      year: 1957,
      rating: 8.9
    },
    {
      title: 'Schindler\'s List',
      genre: 'Biography',
      year: 1993,
      rating: 8.9
    },
    {
      title: 'The Lord of the Rings: The Return of the King',
      genre: 'Adventure',
      year: 2003,
      rating: 8.9
    },
    {
      title: 'Pulp Fiction',
      genre: 'Action',
      year: 1994,
      rating: 8.9
    },
    {
      title: 'The Good, the Bad and the Ugly',
      genre: 'Western',
      year: 1966,
      rating: 8.8
    },
    {
      title: 'Fight Club',
      genre: 'Action',
      year: 1999,
      rating: 8.8
    },
    {
      title: 'Forrest Gump',
      genre: 'Drama',
      year: 1994,
      rating: 8.8
    }
  ];
let adults = isAdult(users)
let fullNames = isFullname(users)
let gender = filterByGender(users)
let action = filterByGenre(movies)

show("adultNames",adults)
show("full-name-container",fullNames)
show("females-container",gender)
show("action-container",action)

//function to show the data
function show(element,data){
    let container = document.querySelector("#"+element)
    data.filter((user)=>{
        let para = document.createElement("p")
        para.innerText = user
        container.appendChild(para)
    })
}   

// female list function
function filterByGender (array) {
    let females =  array.filter((user)=>{
        return user.gender == "female"
    })
    females = isFullname(females)
    return females
}

function isAdult (array){
    let adults = array.filter((user)=>{
        return user.age >= 18 
    })
    adults = isFullname(adults)
    return adults 
}



//full name function
function isFullname(array){
    let fullnames = array.map((user)=>{
        return user.firstName + " " +  user.lastName + " " + "from" + " " + user.location
    })
    return fullnames
}
//adult fitler function




//move part
function filterByGenre(array){
    let actionMovies = array.filter((movie)=>{
        return movie.genre == "Action"
    }).map((movie)=>{
        return movie.title
    })
return actionMovies
}
