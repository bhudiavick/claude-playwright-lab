import { test as base, expect as baseExpect, type APIRequestContext } from '@playwright/test';
import { POMaster } from '../pages/poMaster';
import { ApiHelper } from '../utils/apiHelper';

type Fixtures = {
  po: POMaster;
  api: ApiHelper;
};

export const test = base.extend<Fixtures>({
  po: async ({ page }, use) => {
    const po = new POMaster(page);
    await use(po);
  },

  api: async ({ page, request }, use) => {
    const api = new ApiHelper(page, request as APIRequestContext);
    await use(api);
    await api.clearRoutes();
  },
});

export const expect = baseExpect;