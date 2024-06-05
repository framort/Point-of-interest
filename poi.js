fetch('./poi.json').then((response) => response.json()).then((data) => {

    const pois = data;
    let radioWrapper = document.querySelector('#radioWrapper')

    let poisWrapper = document.querySelector(`#poisWrapper`);
    function setCard(array) {
        poisWrapper.innerHTML = ``
        array.forEach((poi) => {
            let  { name, latitudine, longitudine, indirizzo, id} = poi;
            let div = document.createElement(`div`)
            div.classList.add(`col-6`, `col-md-4`)
            div.innerHTML = `
        <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                
                    <div class="col-md-12">
                        <div class="card-body">
                            <h5 class="card-title">${name}</h5>
                            <p class="card-text"> Latitudine : ${latitudine}</p>
                            <p class="card-text"> Longitudine : ${longitudine}</p>
                            <p class="card-text"> ${indirizzo}</p>
                            <a href="#" class="btn btn-success js-card-btn" type="button" data-id="${id}">Mostra</a>
                        </div>
                    </div>
                </div>
            </div>
        `
            poisWrapper.appendChild(div)
        }
        )
    }

    setCard(pois);

    let map;
    function initMap(markers) {
        var options = {
            zoom:10,
            center:{lat:42.3601,lng:-71.0589}//Change these coordinates to change the center
          }
          map = new google.maps.Map(document.getElementById('map'),options);
          var location = new google.maps.LatLng(42.3601, -71.0589);
          
          [...markers].forEach((marker) => {
            var marker = new google.maps.Marker({
                position: {lat: marker.latitudine ?? 0, lng: marker.longitudine ?? 0},
                map:map
              });
          });
    }

initMap(pois);

let mapCenter = (lat, lng) => {
    map.setCenter(
        new google.maps.LatLng(lat, lng)
      );
    map.setZoom(15);
}

[...document.querySelectorAll('.js-card-btn')].forEach(btn => {
    btn.addEventListener('click', (e) => {
        let { id } = btn.dataset;
        let pin = pois.filter(poi => poi.id == id)[0];
        mapCenter(pin.latitudine, pin.longitudine);
    });

})

    // Initialize and add the map
    // let map;

    // async function initMap(markers) {

    //     // The location of Uluru
    //     // const position = { lat: -25.344, lng: 131.031 };
    //     // // Request needed libraries.
    //     // //@ts-ignore
    //     const { Map } = google.maps.importLibrary("maps");
    //     const { AdvancedMarkerElement } = google.maps.importLibrary("marker");

    //     console.log(Map)

    //     // // The map, centered at Uluru
    //     // map = new Map(document.getElementById("map"), {
    //     //     zoom: 4,
    //     //     center: position,
    //     //     mapId: "DEMO_MAP_ID",
    //     // });

    //     // [...markers].forEach((marker) => {
    //     //     // The marker, positioned at Uluru
    //     //     new AdvancedMarkerElement({
    //     //         map: map,
    //     //         position: {lat: marker.latitudine, lng: marker.longitudine},
    //     //         title: marker.name,
    //     //     });
    //     // })


    // }

    // initMap(pois);

});

