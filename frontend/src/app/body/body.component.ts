import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  private _firstName!: string;
  private _lastName!: string;
  private _streetAddress!: string;
  private _city!: string;
  private _state!: string;
  private _zip!: string;
  private _telephone!: string;
  private _email!: string;
  private _date!: string;
  private _likedStudents!: boolean;
  private _likedLocation!: boolean;
  private _likedCampus!: boolean;
  private _likedAtmosphere!: boolean;
  private _likedDormRooms!: boolean;
  private _likedSports!: boolean;
  private _hearAbout!: string;
  private _recommendation!: string;
  private _comments!: string;

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get streetAddress(): string {
    return this._streetAddress;
  }

  set streetAddress(value: string) {
    this._streetAddress = value;
  }

  get city(): string {
    return this._city;
  }

  set city(value: string) {
    this._city = value;
  }

  get state(): string {
    return this._state;
  }

  set state(value: string) {
    this._state = value;
  }

  get zip(): string {
    return this._zip;
  }

  set zip(value: string) {
    this._zip = value;
  }

  get telephone(): string {
    return this._telephone;
  }

  set telephone(value: string) {
    this._telephone = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get date(): string {
    return this._date;
  }

  set date(value: string) {
    this._date = value;
  }

  get likedStudents(): boolean {
    return this._likedStudents;
  }

  set likedStudents(value: boolean) {
    this._likedStudents = value;
  }

  get likedLocation(): boolean {
    return this._likedLocation;
  }

  set likedLocation(value: boolean) {
    this._likedLocation = value;
  }

  get likedCampus(): boolean {
    return this._likedCampus;
  }

  set likedCampus(value: boolean) {
    this._likedCampus = value;
  }

  get likedAtmosphere(): boolean {
    return this._likedAtmosphere;
  }

  set likedAtmosphere(value: boolean) {
    this._likedAtmosphere = value;
  }

  get likedDormRooms(): boolean {
    return this._likedDormRooms;
  }

  set likedDormRooms(value: boolean) {
    this._likedDormRooms = value;
  }

  get likedSports(): boolean {
    return this._likedSports;
  }

  set likedSports(value: boolean) {
    this._likedSports = value;
  }

  get hearAbout(): string {
    return this._hearAbout;
  }

  set hearAbout(value: string) {
    this._hearAbout = value;
  }

  get recommendation(): string {
    return this._recommendation;
  }

  set recommendation(value: string) {
    this._recommendation = value;
  }

  get comments(): string {
    return this._comments;
  }

  set comments(value: string) {
    this._comments = value;
  }

  submitForm() {
    // Log the form values to the console
    console.log("Here");

    // Do any additional processing of the form data here

    // Clear the form
    // form.reset();
  }

  cancelForm() {
    // Clear the form
    this._firstName = '';
    this._lastName = '';
    this._streetAddress = '';
    this._city = '';
    this._state = '';
    this._zip = '';
    this._telephone = '';
    this._email = '';
    this._date = '';
    this._likedStudents = false;
    this._likedLocation = false;
    this._likedCampus = false;
    this._likedAtmosphere = false;
    this._likedDormRooms = false;
    this._likedSports = false;
    this._hearAbout = '';
    this._recommendation = '';
    this._comments = '';
  }
}


