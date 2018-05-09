var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {
  for(var numberOfPlaylist in library.playlists) {
    var outPut = numberOfPlaylist + ': ' + library.playlists[numberOfPlaylist].name + ' - ' + library.playlists[numberOfPlaylist].tracks.length + ' tracks';
    console.log(outPut);
  }
}
printPlaylists();

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
  for(var printPlaylist in library.tracks) {
    var outPut = printPlaylist + ': ' + library.tracks[printPlaylist].name + ' by ' + library.tracks[printPlaylist].artist + ' (' + library.tracks[printPlaylist].album + ')';
    console.log(outPut);
  }
}
printTracks();


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
   var outPut = playlistId + ': ' + library.playlists[playlistId].name + ' - ' + library.playlists[playlistId].tracks.length + ' tracks';
   console.log(outPut);
   for(var outPutTracks of library.playlists[playlistId].tracks) {
    var outPut2 = outPutTracks + ': ' + library.tracks[outPutTracks].name + ' by ' + library.tracks[outPutTracks].artist + ' (' + library.tracks[outPutTracks].album + ')';
    console.log(outPut2);
   }
}
printPlaylist('p01');

// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
  library.playlists[playlistId].tracks.push(trackId);
}
addTrackToPlaylist('t03','p01');

// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

var addTrack = function (name, artist, album) {

  trackNumber = Object.keys(library.tracks).length + 1;

  trackNumber = 't0' + trackNumber;

  library.tracks[trackNumber] = {};
  library.tracks[trackNumber].id = (uid());
  library.tracks[trackNumber].name = name;
  library.tracks[trackNumber].artist = artist;
  library.tracks[trackNumber].album = album;

}
addTrack('Silence In the Snow','Trivium','Silent In The Snow');
addTrack('Silence In the Snow2','Trivium2','Silent In The Snow2');
console.log(library.tracks);

// adds a playlist to the library

var addPlaylist = function (name) {

  playlistNumber = Object.keys(library.playlists).length + 1;

  playlistNumber = 'p0' + playlistNumber;

  library.playlists[playlistNumber] = {};
  library.playlists[playlistNumber].id = playlistNumber;
  library.playlists[playlistNumber].name = name;
}
addPlaylist('The Best of');
console.log(library);

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {
  for(var numberOfTracks in library.tracks) {
    if(library.tracks[numberOfTracks].name.toLowerCase().search(query.toLowerCase()) === 0) {
      console.log('Name:',library.tracks[numberOfTracks].name,'Artist:',library.tracks[numberOfTracks].artist,'Album:',library.tracks[numberOfTracks].album);
    }
    if(library.tracks[numberOfTracks].artist.toLowerCase().search(query.toLowerCase()) === 0) {
      console.log('Name:',library.tracks[numberOfTracks].name,'Artist:',library.tracks[numberOfTracks].artist,'Album:',library.tracks[numberOfTracks].album);
    }
    if(library.tracks[numberOfTracks].album.toLowerCase().search(query.toLowerCase()) === 0) {
      console.log('Name:',library.tracks[numberOfTracks].name,'Artist:',library.tracks[numberOfTracks].artist,'Album:',library.tracks[numberOfTracks].album);
    }
  }
}
printSearchResults('tri');