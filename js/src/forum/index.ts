import app from 'flarum/forum/app';
import * as LY from 'lite-youtube-embed';

app.initializers.add('sycho/lite-youtube-embed', () => {
  window.liteYoutube = LY;
});
