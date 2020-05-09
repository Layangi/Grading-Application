module.exports.formatUrl = (base, params) => {
    let url = base;
    for (const prop in params) {
        if (params.hasOwnProperty(prop)){
            url = url.replace(':'.concat(prop), params[prop]);
        }
    }
    if (params && params.queryParams) {
        url = addQueryParameters(url, params.queryParams);
    }

    return url;
};

function addQueryParameters (url, queryParams) {
    for (const prop in queryParams) {
        if (queryParams[prop] === undefined) {
            continue;
        }
        if (url.indexOf('?') === -1) {
            url += '?';
        } else {
            url += '&';
        }
        url += prop.concat('=');
        if (Array.isArray(queryParams[prop])) {
            url += queryParams[prop].join('&'.concat(prop).concat('='));
        } else {
            url += queryParams[prop];
        }
    }

    return url;
}