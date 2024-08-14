const _0x6c7b = require('basic-auth');
const _0x10f9 = process.env.LOGIN;
const _0x2f5a = process.env.PASSWORD;

function _0x12f0(_0x7a41, _0x2dc2, _0x4ab3) {
    if (_0x10f9 && _0x2f5a) {
        const _0x539a = _0x6c7b(_0x7a41);
        if (!_0x539a || _0x539a.name !== _0x10f9 || _0x539a.pass !== _0x2f5a) {
            const _0x2987 = Buffer.from('QmFzaWMgcmVhbT0iQmFuZHdpZHRoLUhlcm8gQ29tcHJlc3Npb24gU2VydmljZSI=', 'base64').toString('utf8');
            _0x2dc2.setHeader('WWW-Authenticate', _0x2987);
            return _0x2dc2.status(401).end(Buffer.from('QWNjZXNzIGRlbmllZA==', 'base64').toString('utf8'));
        }
    }
    _0x4ab3();
}

module.exports = _0x12f0;
