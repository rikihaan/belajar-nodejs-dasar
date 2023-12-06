/**
 * URL
 * URL merupakan standart library untuk bekerja dengan URL
 * https://nodejs.org/dist/latest-v16.x/docs/api/url.html
 */

import { URL } from "url";
const pzn = new URL("https://www.programmerzamannow.com/belajar?kelas=nodejs");
console.info(pzn.toString());
console.info(pzn.protocol);
console.info(pzn.host);
console.info(pzn.pathname);
console.info(pzn.searchParams);

// mengubah url
pzn.host = "www.youtube.com";
pzn.pathname = "nonton"
const searchParams = pzn.searchParams;
searchParams.append("status", "premium")
pzn.protocol='http:'

console.info(pzn.toString());