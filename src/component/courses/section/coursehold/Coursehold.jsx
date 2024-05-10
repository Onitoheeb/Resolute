import React, { useState, useEffect } from 'react';
import './coursehold.css';
import data from './data.js';
import { ProductCard } from '/src/singles/procard/Product.jsx';

export const Coursehold = () => {
  const [currentCourse, setCurrentCourse] = useState(data);
  const [filterCourse, setFilterCourse] = useState("ALL");
  
  useEffect(() => {
    const filteredCourses = filterCourse === "ALL" ? data : data.filter(course => course.language.toUpperCase() === filterCourse.toUpperCase());
    setCurrentCourse(filteredCourses);
  }, [filterCourse]);

  const changeCourse = (goal) => {
    setFilterCourse(goal.toUpperCase());
  };

  return (
    <div className="course-hold-section">
      <div className="course-hold-nav">
        <p className={filterCourse === "ALL" ? "active" : ""} onClick={() => changeCourse("ALL")}>All</p>
        <p className={filterCourse === "SPANISH" ? "active" : ""} onClick={() => changeCourse("Spanish")}>Spanish</p>
        <p className={filterCourse === "FRENCH" ? "active" : ""} onClick={() => changeCourse("French")}>French</p>
        <p className={filterCourse === "JAPANESE" ? "active" : ""} onClick={() => changeCourse("Japanese")}>Japanese</p>
        <p className={filterCourse === "RUSSIAN" ? "active" : ""} onClick={() => changeCourse("Russian")}>Russian</p>
        <p className={filterCourse === "MANDARIN" ? "active" : ""} onClick={() => changeCourse("Mandarin")}>Mandarin</p>
        <p className={filterCourse === "PORTUGUESE" ? "active" : ""} onClick={() => changeCourse("Portuguese")}>Portuguese</p>
        <p className={filterCourse === "ITALIAN" ? "active" : ""} onClick={() => changeCourse("Italian")}>Italian</p>
        <p className={filterCourse === "ARABIC" ? "active" : ""} onClick={() => changeCourse("Arabic")}>Arabic</p>
        <p className={filterCourse === "KOREAN" ? "active" : ""} onClick={() => changeCourse("Korean")}>Korean</p>
      </div>
      <div className="course-hold-body">
        {currentCourse.length > 0 ?
          currentCourse.map((course, index) => (
            <ProductCard
              key={index}
              image={course.image}
              section={course.language}
              name={course.name}
              author={course.author}
              className={course.language === "Spanish" ? 'active' : 'inactive'}
            />
          )) :
          <p>No data found</p>
        }
      </div>
    </div>
  );
};
