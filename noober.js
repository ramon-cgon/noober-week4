async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write code to loop through the rides
 
 let rides = json
 for(let i=0;i<rides.length;i++)  {
  ride = rides[i]
  numRiders = ride.length
    for (let j =0; j< numRiders;j++) {
      if (numRiders > 1 || ride[0].numberOfPassengers == 1) {levelOfService = 'Noober Pool'}   
      else if (ride[0].purpleRequested == true) {levelOfService = 'Noober Purple'}   
      else if (ride[0].numberOfPassengers > 3) {levelOfService = 'Noober XL'}   
      else {levelOfService = 'Noober X'}
    }
    if (ride.length == 1) {
      let outputElement = document.querySelector('.rides')
      
      if(levelOfService == 'Noober Purple') { outputElement.insertAdjacentHTML('beforeend',`
        <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          <i class="fas fa-car-side"></i>
          <span>${levelOfService}</span>
        </h1>
  
        <div class="border-4 border-purple-500 p-4 my-4 text-left">
          <div class="flex">
            <div class="w-1/2">
              <h2 class="text-2xl py-1">${ride[0].passengerDetails.first} ${ride[0].passengerDetails.last}</h2>
              <p class="font-bold text-gray-600">${ride[0].passengerDetails.phoneNumber}</p>
            </div>
            <div class="w-1/2 text-right">
              <span class="rounded-xl bg-purple-600 text-white p-2">
              ${ride[0].numberOfPassengers} passengers
              </span>
            </div>
          </div>
          <div class="mt-4 flex">
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">PICKUP</div>
              <p>${ride[0].pickupLocation.address}</p>
              <p>${ride[0].pickupLocation.city}, ${ride[0].pickupLocation.state} ${ride[0].pickupLocation.zip}</p>
            </div>
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">DROPOFF</div>
              <p>${ride[0].dropoffLocation.address}</p>
              <p>${ride[0].dropoffLocation.city}, ${ride[0].dropoffLocation.state} ${ride[0].dropoffLocation.zip}</p>
            </div>
          </div>
        </div>
      `) }
      
      else {
        outputElement.insertAdjacentHTML('beforeend',`
        
        <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            <i class="fas fa-car-side"></i>
            <span>${levelOfService}</span>
        </h1>
      
        <div class="border-4 border-gray-900 p-4 my-4 text-left">
          <div class="flex">
            <div class="w-1/2">
              <h2 class="text-2xl py-1">${ride[0].passengerDetails.first} ${ride[0].passengerDetails.last}</h2>
              <p class="font-bold text-gray-600">${ride[0].passengerDetails.phoneNumber}</p>
            </div>
            <div class="w-1/2 text-right">
              <span class="rounded-xl bg-gray-600 text-white p-2">
              ${ride[0].numberOfPassengers} passengers
              </span>
            </div>
          </div>
          <div class="mt-4 flex">
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">PICKUP</div>
              <p>${ride[0].pickupLocation.address}</p>
              <p>${ride[0].pickupLocation.city}, ${ride[0].pickupLocation.state} ${ride[0].pickupLocation.zip}</p>
            </div>
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">DROPOFF</div>
              <p>${ride[0].dropoffLocation.address}</p>
              <p>${ride[0].dropoffLocation.city}, ${ride[0].dropoffLocation.state} ${ride[0].dropoffLocation.zip}</p>
            </div>
          </div>
        </div>
      `)  
      } 
    }
    else if (ride.length == 2) {
      let outputElement = document.querySelector('.rides')
      outputElement.insertAdjacentHTML('beforeend',`
        <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          <i class="fas fa-car-side"></i>
          <span>${levelOfService}</span>
        </h1>

        <div class="border-4 border-gray-900 p-4 my-4 text-left">
          <div class="flex">
            <div class="w-1/2">
              <h2 class="text-2xl py-1">${ride[0].passengerDetails.first} ${ride[0].passengerDetails.last}</h2>
              <p class="font-bold text-gray-600">${ride[0].passengerDetails.phoneNumber}</p>
            </div>
            <div class="w-1/2 text-right">
              <span class="rounded-xl bg-gray-600 text-white p-2">
              ${ride[0].numberOfPassengers} passengers
              </span>
            </div>
          </div>
          <div class="mt-4 flex">
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">PICKUP</div>
              <p>${ride[0].pickupLocation.address}</p>
              <p>${ride[0].pickupLocation.city}, ${ride[0].pickupLocation.state} ${ride[0].pickupLocation.zip}</p>
            </div>
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">DROPOFF</div>
              <p>${ride[0].dropoffLocation.address}</p>
              <p>${ride[0].dropoffLocation.city}, ${ride[0].dropoffLocation.state} ${ride[0].dropoffLocation.zip}</p>
            </div>
          </div>
        </div>
        
        <div class="border-4 border-gray-900 p-4 my-4 text-left">
          <div class="flex">
            <div class="w-1/2">
              <h2 class="text-2xl py-1">${ride[1].passengerDetails.first} ${ride[1].passengerDetails.last}</h2>
              <p class="font-bold text-gray-600">${ride[1].passengerDetails.phoneNumber}</p>
            </div>
          <div class="w-1/2 text-right">
            <span class="rounded-xl bg-gray-600 text-white p-2">
            ${ride[1].numberOfPassengers} passengers
            </span>
          </div>
        </div>
        <div class="mt-4 flex">
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">PICKUP</div>
            <p>${ride[1].pickupLocation.address}</p>
            <p>${ride[1].pickupLocation.city}, ${ride[1].pickupLocation.state} ${ride[1].pickupLocation.zip}</p>
          </div>
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">DROPOFF</div>
            <p>${ride[1].dropoffLocation.address}</p>
            <p>${ride[1].dropoffLocation.city}, ${ride[1].dropoffLocation.state} ${ride[1].dropoffLocation.zip}</p>
          </div>
        </div>
      `) 
    }
    else if (ride.length == 3) {
      let outputElement = document.querySelector('.rides')
      outputElement.insertAdjacentHTML('beforeend',`
        <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          <i class="fas fa-car-side"></i>
          <span>${levelOfService}</span>
        </h1>

        <div class="border-4 border-gray-900 p-4 my-4 text-left">
          <div class="flex">
            <div class="w-1/2">
              <h2 class="text-2xl py-1">${ride[0].passengerDetails.first} ${ride[0].passengerDetails.last}</h2>
              <p class="font-bold text-gray-600">${ride[0].passengerDetails.phoneNumber}</p>
            </div>
            <div class="w-1/2 text-right">
              <span class="rounded-xl bg-gray-600 text-white p-2">
              ${ride[0].numberOfPassengers} passengers
              </span>
            </div>
          </div>
          <div class="mt-4 flex">
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">PICKUP</div>
              <p>${ride[0].pickupLocation.address}</p>
              <p>${ride[0].pickupLocation.city}, ${ride[0].pickupLocation.state} ${ride[0].pickupLocation.zip}</p>
            </div>
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">DROPOFF</div>
              <p>${ride[0].dropoffLocation.address}</p>
              <p>${ride[0].dropoffLocation.city}, ${ride[0].dropoffLocation.state} ${ride[0].dropoffLocation.zip}</p>
            </div>
          </div>
        </div>
        
        <div class="border-4 border-gray-900 p-4 my-4 text-left">
          <div class="flex">
            <div class="w-1/2">
              <h2 class="text-2xl py-1">${ride[1].passengerDetails.first} ${ride[1].passengerDetails.last}</h2>
              <p class="font-bold text-gray-600">${ride[1].passengerDetails.phoneNumber}</p>
            </div>
            <div class="w-1/2 text-right">
              <span class="rounded-xl bg-gray-600 text-white p-2">
              ${ride[1].numberOfPassengers} passengers
              </span>
            </div>
          </div>
          <div class="mt-4 flex">
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">PICKUP</div>
              <p>${ride[1].pickupLocation.address}</p>
              <p>${ride[1].pickupLocation.city}, ${ride[1].pickupLocation.state} ${ride[1].pickupLocation.zip}</p>
            </div>
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">DROPOFF</div>
              <p>${ride[1].dropoffLocation.address}</p>
              <p>${ride[1].dropoffLocation.city}, ${ride[1].dropoffLocation.state} ${ride[1].dropoffLocation.zip}</p>
            </div>
          </div>
        </div>
                
        <div class="border-4 border-gray-900 p-4 my-4 text-left">
          <div class="flex">
            <div class="w-1/2">
              <h2 class="text-2xl py-1">${ride[2].passengerDetails.first} ${ride[2].passengerDetails.last}</h2>
              <p class="font-bold text-gray-600">${ride[2].passengerDetails.phoneNumber}</p>
            </div>
            <div class="w-1/2 text-right">
              <span class="rounded-xl bg-gray-600 text-white p-2">
              ${ride[2].numberOfPassengers} passengers
              </span>
            </div>
          </div>
          <div class="mt-4 flex">
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">PICKUP</div>
              <p>${ride[2].pickupLocation.address}</p>
              <p>${ride[2].pickupLocation.city}, ${ride[2].pickupLocation.state} ${ride[2].pickupLocation.zip}</p>
            </div>
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">DROPOFF</div>
              <p>${ride[2].dropoffLocation.address}</p>
              <p>${ride[2].dropoffLocation.city}, ${ride[2].dropoffLocation.state} ${ride[2].dropoffLocation.zip}</p>
            </div>
          </div>
        </div>
      `) 
    }
      
  }


  

//  let outputElement = document.querySelector('.rides')



//   json.forEach((ride,i) => {
//     let nameJ = `${ride.passengerDetails.first} ${ride.passengerDetails.last}` 
//     console.log(nameJ)
//     let phoneJ= `${ride.passengerDetails.phoneNumber}`
//     let numberJ= `${ride.numberOfPassengers}`
//     let pickupLine1J = `${ride.pickupLocation.address}`
//     let pickupLine2J = `${ride.pickupLocation.city}, ${ride.pickupLocation.state}, ${ride.pickupLocation.zip}`
//     console.log(pickupLine2J)
//     let dropoffLine1J = `${ride.dropoffLocation.address}`
//     let dropoffLine2J = `${ride.dropoffLocation.city}, ${ride.dropoffLocation.state},  ${ride.dropoffLocation.zip}`
//     console.log(i)
//     window[`passenger${i+1}Name`]=nameJ;
//     window[`passenger${i+1}Phone`]=phoneJ;
//     window[`passenger${i+1}NumberOfPassengers`]=numberJ;
//     window[`passenger${i+1}PickupAddressLine1`]=pickupLine1J;
//     window[`passenger${i+1}PickupAddressLine2`]=pickupLine2J;
//     window[`passenger${i+1}DropoffAddressLine1`]=dropoffLine1J;
//     window[`passenger${i+1}DropoffAddressLine2`]=dropoffLine2J;

//   rides.forEach((ride,i) => {
//     let nameJ = `${ride.passengerDetails.first} ${ride.passengerDetails.last}` 
//     console.log(nameJ)
//     let phoneJ= `${ride.passengerDetails.phoneNumber}`
//     let numberJ= `${ride.numberOfPassengers}`
//     let pickupLine1J = `${ride.pickupLocation.address}`
//     let pickupLine2J = `${ride.pickupLocation.city}, ${ride.pickupLocation.state}, ${ride.pickupLocation.zip}`
//     console.log(pickupLine2J)
//     let dropoffLine1J = `${ride.dropoffLocation.address}`
//     let dropoffLine2J = `${ride.dropoffLocation.city}, ${ride.dropoffLocation.state},  ${ride.dropoffLocation.zip}`
//     console.log(i)
//     window[`passenger${i+1}Name`]=nameJ;
//     window[`passenger${i+1}Phone`]=phoneJ;
//     window[`passenger${i+1}NumberOfPassengers`]=numberJ;
//     window[`passenger${i+1}PickupAddressLine1`]=pickupLine1J;
//     window[`passenger${i+1}PickupAddressLine2`]=pickupLine2J;
//     window[`passenger${i+1}DropoffAddressLine1`]=dropoffLine1J;
//     window[`passenger${i+1}DropoffAddressLine2`]=dropoffLine2J;

// let numRiders = ride.length 
// let levelOfService 
//   if (numRiders > 1 || ride[0].numberOfPassengers == 1) {levelOfService = 'Noober Pool'
//   } else if (ride[0].purpleRequested == true) {levelOfService = 'Noober Purple'
//   } else if (ride[0].numberOfPassengers > 3) {levelOfService = 'Noober XL'
//   } else {levelOfService = 'Noober X'}
  
}

window.addEventListener('DOMContentLoaded', pageLoaded)
