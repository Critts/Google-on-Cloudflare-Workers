addEventListener('fetch', event => {
  event.respondWith(handle(event.request))
})

async function handle(request) {
  let url = new URL(request.url);
  let t = url.toString().replace(/^http.*\/\/.*?\//, '');
  if (t.length === 0) {
    return fetch('https://www.google.com/');
  } else {
    return fetch('https://www.google.com/' + t);
  } 
}