export async function getVideosByPlayList(playListId, limit) {
  const YOTUBE_PLAYLIST_ITEM_API =
    "https://www.googleapis.com/youtube/v3/playlistItems";
  const res = await fetch(
    `${YOTUBE_PLAYLIST_ITEM_API}?part=snippet&playlistId=${playListId}&maxResults=${limit}&key=${process.env.YOUTUBE_API_KEY}`
  );
  const listaYouTube = await res.json();
  return listaYouTube;
}
