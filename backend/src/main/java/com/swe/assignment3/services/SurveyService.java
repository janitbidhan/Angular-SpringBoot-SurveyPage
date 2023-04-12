package com.swe.assignment3.services;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.swe.assignment3.models.Survey;
import com.swe.assignment3.repository.SurveyRepository;
import io.micrometer.common.util.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class SurveyService {

    @Autowired
    private SurveyRepository surveyRepository;

    public Survey saveSurvey(String surveyJson) throws JsonProcessingException {
        Survey survey = validateAndTransformJsonToSurvey(surveyJson);
        return surveyRepository.save(survey);
    }

    //TODO: ADD MORE VALIDATIONS
    public Survey validateAndTransformJsonToSurvey(String json) throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        JsonNode root = mapper.readTree(json);

        // Validate required fields
        String firstName = root.path("firstName").asText();
        String lastName = root.path("lastName").asText();
        String streetAddress = root.path("streetAddress").asText();
        String city = root.path("city").asText();
        String state = root.path("state").asText();
        String zip = root.path("zip").asText();
        String telephoneNumber = root.path("telephoneNumber").asText();
        String email = root.path("email").asText();
        String recommend = root.path("recommend").asText();
        String dateOfSurvey = root.path("dateOfSurvey").asText();


        if (StringUtils.isBlank(firstName) || StringUtils.isBlank(dateOfSurvey) || StringUtils.isBlank(lastName) || StringUtils.isBlank(streetAddress) ||
                StringUtils.isBlank(city) || StringUtils.isBlank(state) || StringUtils.isBlank(zip) ||
                StringUtils.isBlank(telephoneNumber) || StringUtils.isBlank(email) || StringUtils.isBlank(recommend)) {
            throw new IllegalArgumentException("One or more required fields are missing or blank in the JSON data.");
        }


        // Transform JSON to Survey entity
        Survey survey = new Survey();
        survey.setFirstName(firstName);
        survey.setLastName(lastName);
        survey.setStreetAddress(streetAddress);
        survey.setCity(city);
        survey.setState(state);
        survey.setZip(zip);
        survey.setTelephoneNumber(telephoneNumber);
        survey.setEmail(email);
        survey.setDateOfSurvey(LocalDateTime.parse(dateOfSurvey));
        survey.setRecommend(recommend);

        // Set optional fields
        JsonNode likedOptionsNode = root.path("likedOptions");
        if (!likedOptionsNode.isMissingNode()) {
            survey.setLikedOptions(mapper.writeValueAsString(likedOptionsNode));
        }

        JsonNode interestedSourceNode = root.path("interestedSource");
        if (!interestedSourceNode.isMissingNode()) {
            survey.setInterestedSource(mapper.writeValueAsString(interestedSourceNode));
        }

        String additionalComments = root.path("additionalComments").asText("");
        survey.setAdditionalComments(additionalComments);

        return survey;
    }

    public List<Survey> getAllSurveys() {
        return surveyRepository.findAll();
    }

    public Optional<Survey> getSurveyById(Long id) {
        return surveyRepository.findById(id);
    }

    public Survey updateSurvey(Long id, Survey survey) {
        Optional<Survey> existingSurvey = surveyRepository.findById(id);
        if (existingSurvey.isPresent()) {
            Survey updatedSurvey = existingSurvey.get();
            updatedSurvey.setFirstName(survey.getFirstName());
            updatedSurvey.setLastName(survey.getLastName());
            updatedSurvey.setStreetAddress(survey.getStreetAddress());
            updatedSurvey.setCity(survey.getCity());
            updatedSurvey.setState(survey.getState());
            updatedSurvey.setZip(survey.getZip());
            updatedSurvey.setTelephoneNumber(survey.getTelephoneNumber());
            updatedSurvey.setEmail(survey.getEmail());
            updatedSurvey.setDateOfSurvey(survey.getDateOfSurvey());
            updatedSurvey.setLikedOptions(survey.getLikedOptions());
            updatedSurvey.setInterestedSource(survey.getInterestedSource());
            updatedSurvey.setRecommend(survey.getRecommend());
            return surveyRepository.save(updatedSurvey);
        }
        return null;
    }

    public void deleteSurvey(Long id) {
        surveyRepository.deleteById(id);
    }

}
