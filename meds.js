

function init() {
    var myMap = new ymaps.Map('map', {
            center: [55.734046, 37.588628],
            zoom: 11,
            behaviors: ['default', 'scrollZoom']
        });

    for (var i in meds) {
        if (meds.hasOwnProperty(i)) addObj(meds[i], myMap);
    }


    // // Обратите внимание, что все операции асинхронные, поэтому для продолжения
    // // работы с выборкой следует дождаться готовности данных.
    // organizations.then(function () {

    //     // Этот код выполнится после того, как все запросы к геокодеру
    //     // вернут ответ и объекты будут добавлены на карту.
    //     organizations.get(0).balloon.open();
    // });
}

function addObj(objects, map) {
    var objs = objects.data
    orgs = ymaps.geoQuery(ymaps.geocode(objs[0]));
    for (var i = 1; i < objs.length; i++) {
        orgs = orgs.add(ymaps.geocode(objs[i]));
    }

    orgs.setOptions({ preset: 'twirl#' + objects.color + 'Icon' });
    orgs.addToMap(map);
}

ymaps.ready(init);