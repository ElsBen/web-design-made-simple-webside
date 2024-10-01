"use strict"

import FormData from "./FormData.js";
import NewsLetter from "./NewsLetter.js";
import PerformanceChoice from "./PerformanceChoice.js";

const newsLetter = new NewsLetter;
newsLetter.start();

const newForm = new FormData;
newForm.start();

const newPerform = new PerformanceChoice;
newPerform.start();