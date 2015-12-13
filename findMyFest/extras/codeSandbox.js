// Code sandbox

// FESTIVAL DATABASE
var festCoach = {
	"name" : "coachella",

  "location" : "indio",

	"lineup" :[
					"AC/DC",
					"Alesso",
					"Tame Impala",
					"The Weeknd",
					"Drake",
					"Kaskade",
					"Florence + The Machine",
					"alt-J"
				],

  	"video" : "",

  	"website" : ""

}


var festOut = {
	"name" : "outside lands",

 	"location" : "san francisco",

	"lineup" :[
					"Mumford & Sons",
					"Sam Smith",
					"The Black Keys",
					"Tame Impala",
					"Kendrick Lamar",
					"ODESZA",
					"Elton John",
					"Porter Robinson"
				],

  	"video" : "",

  	"website" : ""

}

var fests = [festCoach,festOut]

// ARTIST DATABASE

var artDrake = {
	"name" : "Drake",

	"similarArtists" :[
					"J. Cole",
					"Big Sean",
					"Wale",
					"Kanye West",
					"Kid Cudi"
				]
}

var artists = [artDrake]


//example of using forEach
artDrake.similarArtists.forEach( function(a, ind,arr) {
										console.log(a, ind, arr);
								})

//pass in a list of artists and see what festivals they are in
function isAtFestival(artist, festival) {
	return festival.lineup.indexOf(artist) > -1
}


fests.forEach( function(f) {  console.log(f.lineup); } )


function checkRelatedArtistAndFestival(artistObj, arrayofFestivals) {
	var result = []

	arrayofFestivals.forEach( function(currentFest) {
						artistObj.similarArtists.forEach( function(a) {
						//this will check each festival lineup against each of the artistObj related artists
							if( isAtFestival(a,currentFest) ) {
								result.push( {artist: a, festival: currentFest.name});
							}
						})
						// Now check to see if the artist is also in the festival
						if( isAtFestival(artistObj.name, currentFest)) {
							result.push( {artist: artistObj.name, festival: currentFest.name});
						}

					})

	return result
}

//for a bunch of artists see if they are in the festival lineups
var result = artDrake.similarArtists.map( function(a) {
											return isAtFestival(a,festCoach)
										})
console.log(result)


