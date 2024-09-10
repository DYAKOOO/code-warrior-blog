---
title: 'The Mathematics of Gaussian Splatting'
description: 'Delve into the mathematical foundations of Gaussian Splatting'
pubDate: 2024-09-20
heroImage: '/blog-placeholder-2.jpg'
category: 'GaussianSplatting'
tags: ['computer graphics', 'mathematics', 'gaussian splatting']
---

# The Mathematics of Gaussian Splatting

In this post, we'll explore the mathematical foundations of Gaussian Splatting, building on our introduction to the concept.

## Gaussian Functions in 3D

The core of Gaussian Splatting lies in the use of 3D Gaussian functions. In three dimensions, a Gaussian function is defined as:

G(x, y, z) = A * exp(-(x^2 + y^2 + z^2) / (2 * σ^2))

Where:
- A is the amplitude
- σ is the standard deviation
- x, y, and z are the coordinates in 3D space

## Projecting Gaussians onto the Image Plane

The process of splatting involves projecting these 3D Gaussians onto a 2D image plane. This projection results in elliptical splats, whose shape and size depend on the orientation and parameters of the original 3D Gaussian.

In the next post, we'll discuss implementation strategies for Gaussian Splatting in real-time rendering systems.