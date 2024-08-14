function _0x4ab3(_0x40de, _0x539a) {
    if (_0x539a.headersSent) {
        return;
    }
    _0x539a.setHeader('content-length', 0);
    _0x539a.removeHeader('cache-control');
    _0x539a.removeHeader('expires');
    _0x539a.removeHeader('date');
    _0x539a.removeHeader('etag');
    _0x539a.setHeader('location', encodeURI(_0x40de.params.url));
    _0x539a.status(302).end();
}

module.exports = _0x4ab3;
