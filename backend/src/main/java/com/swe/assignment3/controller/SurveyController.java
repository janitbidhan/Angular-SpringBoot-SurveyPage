package com.swe.assignment3.controller;


import com.fasterxml.jackson.core.JsonProcessingException;
import com.swe.assignment3.models.Survey;
import com.swe.assignment3.services.SurveyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

/*
Team:
Janit Bidhan
Rosy Sultana
Brenda Henriquez
Uday Kumar Kamalapuram
Description: REST Controller file.
 */
@RestController
@RequestMapping("/surveys")
public class SurveyController {

    @Autowired
    private SurveyService surveyService;

    @GetMapping
    public List<Survey> getAllSurveys() {
        return surveyService.getAllSurveys();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Survey> getSurveyById(@PathVariable Long id) {
        Optional<Survey> survey = surveyService.getSurveyById(id);
        if (survey.isPresent()) {
            return new ResponseEntity<>(survey.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping
    public ResponseEntity<?> saveSurvey(@RequestBody String surveyJson) {
        try {
            Survey savedSurvey = surveyService.saveSurvey(surveyJson);
            return new ResponseEntity<>(savedSurvey, HttpStatus.CREATED);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (JsonProcessingException e) {
            return new ResponseEntity<>("Invalid survey JSON data", HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Survey> updateSurvey(@PathVariable Long id, @RequestBody @Validated Survey survey) {
        Survey updatedSurvey = surveyService.updateSurvey(id, survey);
        if (updatedSurvey != null) {
            return new ResponseEntity<>(updatedSurvey, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSurvey(@PathVariable Long id) {
        surveyService.deleteSurvey(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
