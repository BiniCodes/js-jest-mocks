/**
 * Copyright 2022 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { ElevationsService, initialize, mockInstances } from "../../index";

beforeEach(() => {
  initialize();
});

test("elevation service is mocked", async () => {
  const service = new google.maps.ElevationService();

  expect(await service.getElevationForLocations(null)).toBeTruthy();
  expect(await service.getElevationAlongPath(null)).toBeTruthy();
});

test("registers mocks", () => {
  const service = new google.maps.ElevationService();
  service.getElevationAlongPath(null);
  service.getElevationForLocations(null);

  const mocks = mockInstances.get(ElevationsService);

  expect(mocks).toHaveLength(1);
  expect(
    mockInstances.get(ElevationsService)[0].getElevationAlongPath
  ).toHaveBeenCalledWith(null);
  expect(
    mockInstances.get(ElevationsService)[0].getElevationForLocations
  ).toHaveBeenCalledWith(null);
});
