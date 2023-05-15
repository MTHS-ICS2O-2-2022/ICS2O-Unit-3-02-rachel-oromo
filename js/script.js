// Copyright (c) 2020 Rachel Oromo All rights reserved
//
// Created by: Rachel Oromo
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

/**

/**
 * This function calculates the volume of a pyramid
 */
function enterClicked() {
  //input
  const length = parseFloat(document.getElementById("length-of-pyramid").value)
  const width = parseFloat(document.getElementById("width-of-pyramid").value)
  const height = parseFloat(document.getElementById("height-of-pyramid").value)

  //process
  const volume = (length * width * height) / 3

  //output
  document.getElementById("volume-of-pyramid").innerHTML =
    "The volume of the pyramid is: " + volume.toFixed(2) + " cm³."
}
