var heroes = [
    {name: "Batman", franchise: "DC"},
    {name: "Ironman", franchise: "Marvel"},
    {name: "Thor", franchise: "Marvel"},
    {name: "Superman", franchise: "DC"}
];

var marvelHeroes =  heroes.filter(hero=>hero.franchise=="Marvel");
console.log(marvelHeroes);