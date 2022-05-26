# Prototypes

The _Do-the-vegan-thing_ app uses various technologies to provide a simple, easy-to-use interface for the user to classifying ingredients. Over the course of its development, several prototypes were developed, either simply for demonstration, or to test various concepts.

## Image Classification with Tensorflow.js

As discussed in great detail in the [_tools and technologies_](/project/tools-and-technologies.md) section, Tensorflow.js is a JavaScript library for high-performance _tensor_ operations, which can subsequently be used to implement neural networks, hence image classification systems. This was the approach used to produce the [image classification example](/demos/classifier.nhp).

## Reading Barcodes

Again, eloquently discussed by Phi, [barcodes](/404.md) are a complex subject, particularly in the realm of parsing them. For this reason, a pretrained Tensorflow model was used, and integrated through a library called [Quagga.js](https://serratus.github.io/quaggaJS) which is responsible for managing the tensorflow model and parsing the resultant data. 