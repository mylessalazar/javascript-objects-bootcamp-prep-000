var playlist = new Object({potato: '1'});

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artisName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}