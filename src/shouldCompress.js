const _0x79af = 512;
const _0x10f9 = _0x79af * 100;

function _0x40de(_0x33e7) {
    const { originType: _0x539a, originSize: _0x7a41, webp: _0x2987 } = _0x33e7.params;
    if (!_0x539a.startsWith('image')) {
        return false;
    }
    if (_0x7a41 === 0) {
        return false;
    }
    if (_0x2987 && _0x7a41 < _0x79af) {
        return false;
    }
    if (!_0x2987 && (_0x539a.endsWith('png') || _0x539a.endsWith('gif')) && _0x7a41 < _0x10f9) {
        return false;
    }
    return true;
}

module.exports = _0x40de;
