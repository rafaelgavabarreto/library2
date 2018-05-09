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
             },


// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

printPlaylists: function () {
  for(var numberOfPlaylist in this.playlists) {
    var outPut = numberOfPlaylist + ': ' + this.playlists[numberOfPlaylist].name + ' - ' + this.playlists[numberOfPlaylist].tracks.length + ' tracks';
    console.log(outPut);
  }
},

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

printTracks: function () {
  for(var printPlaylist in this.tracks) {
    var outPut = printPlaylist + ': ' + this.tracks[printPlaylist].name + ' by ' + this.tracks[printPlaylist].artist + ' (' + this.tracks[printPlaylist].album + ')';
    console.log(outPut);
  }
},

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

printPlaylist: function (playlistId) {
   var outPut = playlistId + ': ' + this.playlists[playlistId].name + ' - ' + this.playlists[playlistId].tracks.length + ' tracks';
   console.log(outPut);
   for(var outPutTracks of this.playlists[playlistId].tracks) {
    var outPut2 = outPutTracks + ': ' + this.tracks[outPutTracks].name + ' by ' + this.tracks[outPutTracks].artist + ' (' + this.tracks[outPutTracks].album + ')';
    console.log(outPut2);
   }
},

// adds an existing track to an existing playlist

addTrackToPlaylist: function (trackId, playlistId) {
  this.playlists[playlistId].tracks.push(trackId);
},

// generates a unique id
// (use this for addTrack and addPlaylist)

uid: function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
},

// adds a track to the library

addTrack: function (name, artist, album) {

  trackNumber = Object.keys(this.tracks).length + 1;

  trackNumber = 't0' + trackNumber;

  this.tracks[trackNumber] = {};
  this.tracks[trackNumber].id = (this.uid());
  this.tracks[trackNumber].name = name;
  this.tracks[trackNumber].artist = artist;
  this.tracks[trackNumber].album = album;

},

// adds a playlist to the library

addPlaylist: function (name) {

  playlistNumber = Object.keys(this.playlists).length + 1;

  playlistNumber = 'p0' + playlistNumber;

  this.playlists[playlistNumber] = {};
  this.playlists[playlistNumber].id = playlistNumber;
  this.playlists[playlistNumber].name = name;
},

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

printSearchResults: function(query) {
  for(var numberOfTracks in this.tracks) {
    if(this.tracks[numberOfTracks].name.toLowerCase().search(query.toLowerCase()) === 0) {
      console.log('Name:',this.tracks[numberOfTracks].name,'Artist:',this.tracks[numberOfTracks].artist,'Album:',this.tracks[numberOfTracks].album);
    }
    if(library.tracks[numberOfTracks].artist.toLowerCase().search(query.toLowerCase()) === 0) {
      console.log('Name:',this.tracks[numberOfTracks].name,'Artist:',this.tracks[numberOfTracks].artist,'Album:',this.tracks[numberOfTracks].album);
    }
    if(library.tracks[numberOfTracks].album.toLowerCase().search(query.toLowerCase()) === 0) {
      console.log('Name:',this.tracks[numberOfTracks].name,'Artist:',this.tracks[numberOfTracks].artist,'Album:',this.tracks[numberOfTracks].album);
    }
  }
}

};
library.printPlaylists();
library.printTracks();
library.printPlaylist('p01');
library.addTrackToPlaylist('t03','p01');
library.addTrack('Silence In the Snow','Trivium','Silent In The Snow');
library.addTrack('Silence In the Snow2','Trivium2','Silent In The Snow2');
console.log(library.tracks);
library.addPlaylist('The Best of');
console.log(library);
library.printSearchResults('tri');