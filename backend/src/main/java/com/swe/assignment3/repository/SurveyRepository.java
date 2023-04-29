package com.swe.assignment3.repository;

import com.swe.assignment3.models.Survey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/*
Team:
Janit Bidhan
Rosy Sultana
Brenda Henriquez
Uday Kumar Kamalapuram
Description: SurveyRepository File.
 */
@Repository
public interface SurveyRepository extends JpaRepository<Survey, Long> {
}

