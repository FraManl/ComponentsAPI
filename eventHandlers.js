"use strict";

export const dropZone = document.querySelector("#drop_zone");
export const queryPreview = document.querySelector(".query-input-preview");
export const btnUnitarySubmit = document.querySelector(".btn-submit");
export const inputUnitarySubmit = document.querySelector(
  ".section-middle-input"
);
export const btnBrowseFile = document.querySelector("#section-middle-getfile");

export const highlight = function () {
  dropZone.classList.add("highlight");
};

export const unhighlight = function () {
  dropZone.classList.remove("highlight");
};
