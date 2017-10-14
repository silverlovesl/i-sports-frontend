'use strict';
import Vue from 'vue';
import VueResource from 'vue-resource';
Vue.use(VueResource);
const API_ROOT = 'http://localhost:3000/api/v1';

export default class APIService {
  contructor() {}

  get(path, params) {

    return Vue.http.get(API_ROOT + path, params || {});
  }
}
