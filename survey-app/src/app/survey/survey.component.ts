import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent {
  formData: any = {
    likedOptions_students: false,
    likedOptions_location: false,
    likedOptions_campus: false,
    likedOptions_atmosphere: false,
    likedOptions_dormRooms: false,
    likedOptions_sports: false,
    interestedSource_friends: false,
    interestedSource_television: false,
    interestedSource_internet: false,
    interestedSource_other: false
  };

  constructor(private http: HttpClient) {}

  submitForm() {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    const surveyData = {
      firstName: this.formData.firstName,
      lastName: this.formData.lastName,
      streetAddress: this.formData.streetAddress,
      city: this.formData.city,
      state: this.formData.state,
      zip: this.formData.zip,
      telephoneNumber: this.formData.telephoneNumber,
      email: this.formData.email,
      dateOfSurvey: this.formData.dateOfSurvey,
      // Change here for better storing of jsons string
      likedOptions: JSON.stringify({
        students: this.formData.likedOptions_students=== 'true',
        location: this.formData.likedOptions_location=== 'true',
        campus: this.formData.likedOptions_campus=== 'true',
        atmosphere: this.formData.likedOptions_atmosphere=== 'true',
        dormRooms: this.formData.likedOptions_dormRooms=== 'true',
        sports: this.formData.likedOptions_sports=== 'true'
      }),
      interestedSource: JSON.stringify({
        friends: this.formData.interestedSource_friends=== 'true',
        television: this.formData.interestedSource_television=== 'true',
        internet: this.formData.interestedSource_internet=== 'true',
        other: this.formData.interestedSource_other=== 'true'
      }),
      recommend: this.formData.recommend,
      additionalComments: this.formData.additionalComments
    };

    this.http.post('http://localhost:8080/surveys', surveyData, {headers: headers}).subscribe((response) => {
      console.log('Response: ', response);
    });
  }

}
