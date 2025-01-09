export default {
  async fetch(request: Request) {
    /**
     * An object with different URLs to fetch
     * @param {Object} ORIGINS
     */

    const ORIGINS = {
      "aravpnst.xyz": "aravpnst.us.kg",
    };

    const url = new URL(request.url);

    // Check if incoming hostname is a key in the ORIGINS object
    if (url.hostname in ORIGINS) {
      const target = ORIGINS[url.hostname];
      url.hostname = target;
      // If it is, proxy request to that third party origin
      return fetch(url.toString(), request);
    }
    // Otherwise, process request as normal
    return fetch(request);
  },
};
