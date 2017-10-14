'use strict'

export default class Profile {
  constructor(input) {
    this.id = input.id;
    this.name = input.name;
    this.gender = input.gender;
    this.email = input.email;
    this.birthday = new Date(input.birthday);
    this.height = input.height;
    this.weight = input.weight;
  }
}
