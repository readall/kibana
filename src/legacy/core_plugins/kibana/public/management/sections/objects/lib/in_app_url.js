/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

export function getInAppUrl(id, type) {
  switch (type) {
    case 'search':
    case 'searches':
      return `/discover/${id}`;
    case 'visualization':
    case 'visualizations':
      return `/visualize/edit/${id}`;
    case 'index-pattern':
    case 'index-patterns':
    case 'indexPatterns':
      return `/management/kibana/index_patterns/${id}`;
    case 'dashboard':
    case 'dashboards':
      return `/dashboard/${id}`;
    default:
      return `/${type.toLowerCase()}/${id}`;
  }
}

export function canViewInApp(uiCapabilities, type) {
  switch (type) {
    case 'search':
    case 'searches':
      return uiCapabilities.discover.show;
    case 'visualization':
    case 'visualizations':
      return uiCapabilities.visualize.show;
    case 'index-pattern':
    case 'index-patterns':
    case 'indexPatterns':
      return uiCapabilities.management.kibana.index_patterns;
    case 'dashboard':
    case 'dashboards':
      return uiCapabilities.dashboard.show;
    default:
      return uiCapabilities[type].show;
  }
}
