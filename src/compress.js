const _0x5843 = require('sharp');
const _0x7a41 = require('./redirect');

function _0x4032(_0x2e9f, _0x33e7, _0x485a) {
    const _0x7f94 = _0x2e9f.params.webp ? 'webp' : 'jpeg';
    _0x5843(_0x485a)
        .grayscale(_0x2e9f.params.grayscale)
        .toFormat(_0x7f94, { quality: _0x2e9f.params.quality, progressive: true, optimizeScans: true })
        .toBuffer((_0x539a, _0x4f2b, _0x40de) => {
            if (_0x539a || !_0x40de || _0x33e7.headersSent) {
                return _0x7a41(_0x2e9f, _0x33e7);
            }
            _0x33e7.setHeader('content-type', `image/${_0x7f94}`);
            _0x33e7.setHeader('content-length', _0x40de.size);
            _0x33e7.setHeader('x-original-size', _0x2e9f.params.originSize);
            _0x33e7.setHeader('x-bytes-saved', _0x2e9f.params.originSize - _0x40de.size);
            _0x33e7.status(200).send(_0x4f2b);
        });
}

module.exports = _0x4032;
