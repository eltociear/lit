/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

interface Window {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  litElementPlatformSupport: (options: {[index: string]: any}) => void;
}
