var playlist = new Object({potato: '1'});

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[songTitle] =  artisName
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}