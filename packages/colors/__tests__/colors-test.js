/**
 * Copyright IBM Corp. 2015, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @jest-environment node
 */

'use strict';

import { colors, tokens } from '../src';

test('colors', () => {
  expect(colors).toMatchSnapshot();
});

test('tokens', () => {
  expect(tokens).toMatchSnapshot();
});
