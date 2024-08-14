const _0x7a41 = require('request');
const _0x40de = require('lodash').pick;
const _0x539a = require('./shouldCompress');
const _0x4f2b = require('./redirect');
const _0x6d4c = require('./compress');
const _0x2987 = require('./bypass');
const _0x33e7 = require('./copyHeaders');

function _0x485a(_0x5843, _0x2dc2) {
    _0x7a41.get(
        _0x5843.params.url,
        {
            headers: {
                ..._0x40de(_0x5843.headers, ['cookie', 'dnt', 'referer']),
                'user-agent': 'Bandwidth-Hero Compressor',
                'x-forwarded-for': _0x5843.headers['x-forwarded-for'] || _0x5843.ip,
                via: '1.1 bandwidth-hero',
            },
            timeout: 10000,
            maxRedirects: 5,
            encoding: null,
            strictSSL: false,
            gzip: true,
            jar: true,
        },
        (_0x4ab3, _0x539a, _0x40de) => {
            if (_0x4ab3 || _0x539a.statusCode >= 400) {
                return _0x4f2b(_0x5843, _0x2dc2);
            }
            _0x33e7(_0x539a, _0x2dc2);
            _0x2dc2.setHeader('content-encoding', 'identity');
            _0x5843.params.originType = _0x539a.headers['content-type'] || '';
            _0x5843.params.originSize = _0x40de.length;
            if (_0x6d4c(_0x5843)) {
                _0x539a(_0x5843, _0x2dc2, _0x40de);
            } else {
                _0x2987(_0x5843, _0x2dc2, _0x40de);
            }
        }
    );
}

module.exports = _0x485a;
