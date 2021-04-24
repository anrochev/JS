const baseMedia = [{
    name: 'Шерлок',
    type: 'tvshow',
    year: '2016',
    episodes: [{
        name: 'Знакомство с Шерлоком',
        episodeNumber: '10'
    }, {
        name: 'Собака Баскервили',
        episodeNumber: '1'
    }]
}, {
    name: 'Шрек',
    year: '2014',
    type: 'movie'
}, {
    name: 'Декстер',
    type: 'tvshow',
    year: '2010',
    episodes: [{
        name: 'Побег',
        episodeNumber: '2'
    }, {
        name: 'Жизнь после',
        episodeNumber: '3'
    }, {
        name: 'Первая история декстера',
        episodeNumber: '1'
    }]
}, ];

let mediaNames = myMap(baseMedia, (media) => {
    return media.name
});
console.log(mediaNames);

function myMap(incomingArray, func) {
    const resultArray = [];
    const reducer = (accumulator, currentValue) => accumulator.concat(func(currentValue));
    return incomingArray.reduce(reducer, resultArray);
}