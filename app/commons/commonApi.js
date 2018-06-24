/**
 * Author: Kham Nguyen
 * Date created: 23-June-2018
 * Date modified: 23-June-2018
 * Last modified by: Kham Nguyen
 */

 export function fetchDataFromServer(method, url, data, success, error) {
    const options = {
        method: method,
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    };
    return fetch(url, options).then((res) => res.json())
    .catch((error) => error(error))
    .then((json) => success(json));
 }