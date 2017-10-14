'use strict';
import Vue from 'vue';
import VueResource from 'vue-resource';
import APIService from './api-service';

export default class ProfileService extends APIService {
  contructor() {}

  getProfile() {
    return this.get("/profile/1");
  }
}
