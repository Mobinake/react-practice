/* eslint-disable no-undef */
import 'whatwg-fetch'; // <-- yarn add whatwg-fetch
import { TextEncoder, TextDecoder } from 'util';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
