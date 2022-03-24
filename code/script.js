window.onload = () => {
     let places = staticLoadPlaces();
     renderPlaces(places);
};

function staticLoadPlaces() {
    return [
        {
            name: 'MyModel',
            location: {
                lat: 43.8383072474517,
                lng: --79.54908907413484,
            }
        },
    ];
}

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {
        let latitude = place.location.lat;
        let longitude = place.location.lng;

        // can add more models here by copying and pasting the code bellow
        let model = document.createElement('a-entity');
        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`); // sets the models attribute to the latitude and longitude specified above
        model.setAttribute('gltf-model', './assets/MyModel/scene.gltf');
        model.setAttribute('rotation', '0 180 0'); // sets the rotation of the model
        model.setAttribute('animation-mixer', ''); // allows the user to position, scale, rotate, and change between animations embedded in a 3D model
        model.setAttribute('scale', '0.5 0.5 0.5'); // sets the scale of the model

        // can add event listeners (like buttons) here
        model.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });

        scene.appendChild(model); // adds model to the AR scene
    });
}