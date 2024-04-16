// the proxies
// http://solace.ist.rit.edu/~dsbics/proxy/
// https://people.rit.edu/~dsbics/proxy

const proxyServer1 = 'https://people.rit.edu/~dsbics/proxy/https://ischool.gccis.rit.edu/api/';
const proxyServer2 = 'http://solace.ist.rit.edu/~dsbics/proxy/https://ischool.gccis.rit.edu/api/';

// getData goes out and hits REST API
// endpoint -> which specific data i want ('about/' or 'people/')
async function getData (endpoint) {
    const result = await fetch(`${proxyServer1}${endpoint}`);
    return await result.json();
}

export default getData;