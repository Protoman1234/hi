const _0x79af = 40;

function _0x4ab3(_0x5843, _0x33e7, _0x10f9) {
    const { url: _0x2dc2, jpeg: _0x7a41, bw: _0x539a, l: _0x485a } = _0x5843.query;
    if (!_0x2dc2) {
        return _0x33e7.end('bandwidth-hero-proxy');
    }
    const _0x40de = Array.isArray(_0x2dc2) ? _0x2dc2.join('&url=') : _0x2dc2;
    const _0x2987 = _0x40de.replace(/http:\/\/1\.1\.\d\.\d\/bmi\/(https?:\/\/)?/i, 'http://');
    _0x5843.params.url = _0x2987;
    _0x5843.params.webp = !_0x7a41;
    _0x5843.params.grayscale = _0x539a !== '0';
    _0x5843.params.quality = parseInt(_0x485a, 10) || _0x79af;
    _0x10f9();
}

module.exports = _0x4ab3;
