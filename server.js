#!/usr/bin/env node

'use strict';

const _0x6c7b = require('express')();
const _0x10f9 = require('./src/authenticate');
const _0x2f5a = require('./src/params');
const _0x12f0 = require('./src/proxy');

const _0x88f3 = process.env.PORT || 8080;

_0x6c7b.enable('trust proxy');
_0x6c7b.get('/', _0x10f9, _0x2f5a, _0x12f0);
_0x6c7b.get('/favicon.ico', (_0x7a41, _0x2dc2) => _0x2dc2.status(204).end());
_0x6c7b.listen(_0x88f3, () => console.log(`Listening on ${_0x88f3}`));
