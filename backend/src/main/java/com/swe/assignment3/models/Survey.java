package com.swe.assignment3.models;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "survey")
public class Survey {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @Column(name = "first_name", nullable = false)
    private String firstName;

    @Column(name = "last_name", nullable = false)
    private String lastName;

    @Column(name = "street_address", nullable = false)
    private String streetAddress;

    @Column(name = "city", nullable = false)
    private String city;

    @Column(name = "state", nullable = false)
    private String state;

    @Column(name = "zip", nullable = false)
    private String zip;

    @Column(name = "telephone_number", nullable = false)
    private String telephoneNumber;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "date_of_survey", nullable = false)
    private LocalDateTime dateOfSurvey;

    @Column(name = "liked_options",columnDefinition = "jsonb")
    private String likedOptions;

    @Column(name = "interested_source",columnDefinition = "jsonb")
    private String interestedSource;

    @Column(name = "recommend", nullable = false)
    private String recommend;

    @Column(name = "additional_comments")
    private String additionalComments;

    public Survey() {
    }

    public Survey(String firstName, String lastName, String streetAddress, String city, String state, String zip, String telephoneNumber, String email, LocalDateTime dateOfSurvey, String likedOptions, String interestedSource, String recommend, String additionalComments) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.streetAddress = streetAddress;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.telephoneNumber = telephoneNumber;
        this.email = email;
        this.dateOfSurvey = dateOfSurvey;
        this.likedOptions = likedOptions;
        this.interestedSource = interestedSource;
        this.recommend = recommend;
        this.additionalComments = additionalComments;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getStreetAddress() {
        return streetAddress;
    }

    public void setStreetAddress(String streetAddress) {
        this.streetAddress = streetAddress;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getZip() {
        return zip;
    }

    public void setZip(String zip) {
        this.zip = zip;
    }

    public String getTelephoneNumber() {
        return telephoneNumber;
    }

    public void setTelephoneNumber(String telephoneNumber) {
        this.telephoneNumber = telephoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public LocalDateTime getDateOfSurvey() {
        return dateOfSurvey;
    }

    public void setDateOfSurvey(LocalDateTime dateOfSurvey) {
        this.dateOfSurvey = dateOfSurvey;
    }

    public String getLikedOptions() {
        return likedOptions;
    }

    public void setLikedOptions(String likedOptions) {
        this.likedOptions = likedOptions;
    }

    public String getInterestedSource() {
        return interestedSource;
    }

    public void setInterestedSource(String interestedSource) {
        this.interestedSource = interestedSource;
    }

    public String getRecommend() {
        return recommend;
    }

    public void setRecommend(String recommend) {
        this.recommend = recommend;
    }

    public String getAdditionalComments() {
        return additionalComments;
    }

    public void setAdditionalComments(String additionalComments) {
        this.additionalComments = additionalComments;
    }
}
