import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent {
  formData: any = {
    recommend:"Select",
    likedOptions_students: false,
    likedOptions_location: false,
    likedOptions_campus: false,
    likedOptions_atmosphere: false,
    likedOptions_dormRooms: false,
    likedOptions_sports: false,
  };

  constructor(private http: HttpClient) {}

  submitForm() {

    // Check if required fields are filled out
    if (!this.formData.firstName || !this.formData.lastName || !this.formData.email || !this.formData.streetAddress ||
      !this.formData.city || !this.formData.state || !this.formData.zip || !this.formData.telephoneNumber ||
      !this.formData.dateOfSurvey) {
      alert('Please fill out required fields.');
      return;
    }

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
      likedOptions: [
        this.formData.likedOptions_students === true ? 'students' : '',
        this.formData.likedOptions_location === true ? 'location' : '',
        this.formData.likedOptions_campus === true ? 'campus' : '',
        this.formData.likedOptions_atmosphere === true ? 'atmosphere' : '',
        this.formData.likedOptions_dormRooms === true ? 'dormRooms' : '',
        this.formData.likedOptions_sports === true ? 'sports' : '',
      ].filter(Boolean),
      interestedSource:this.formData.interestedSource,
      recommend: this.formData.recommend,
      additionalComments: this.formData.additionalComments
    };

    // Check if atleast 2 options are selected from formData likedoption
    if (surveyData.likedOptions.length < 2) {
      alert('Please select at least two options from the Liked Options Question.');
      return
    }

    if(!(surveyData.interestedSource==="friends" || surveyData.interestedSource==="television"
      || surveyData.interestedSource==="internet" || surveyData.interestedSource==="other") ){
      alert('Please select at one option from the sources Question.');
      return
    }


    if(!(surveyData.recommend==="Very Likely" || surveyData.recommend==="Likely"
      || surveyData.recommend==="Unlikely") ){
      alert('Please select at one option from the Recommendation question.');
      return
    }
    // Doing post call
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    this.http.post('http://localhost:8080/surveys', surveyData, {headers: headers}).subscribe(
      (response) => {
        console.log('Response: ', response);
        alert('Thank you for your feedback!');
        window.location.href = '/';
      },
      (error) => {
        console.error('Error: ', error);
        alert('Sorry, there was an error submitting your feedback. Please try again later.');
      }
    );

  }

}
