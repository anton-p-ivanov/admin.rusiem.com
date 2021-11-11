import * as contentConfig from 'modules/content/config';
import * as coreConfig from 'modules/core/config';

import type { TNavItem } from 'config/types';

const navigation: TNavItem[] = [
  ...coreConfig.navigation,
  ...contentConfig.navigation,
];

export default navigation;
