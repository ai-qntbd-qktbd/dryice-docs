---
slug: Understanding-Quaternion
title: Understanding Quaternion for 3D Motion
authors: MoonRainy21
---

# Understanding Quaternion for 3D Motion

Quaternions are a mathematical concept with three imaginary units. They are used to represent rotations in 3D space. Quaternions are used in various fields using 3D rotations, such as computer graphics, robotics, and physics. In this article, we will discuss the basics of quaternions and how we can deal with them in 3D motion.

<!--truncate-->

## How Rotation becomes Quaternion

A rotation in 3D space is often represented by an Euler angle or a rotation matrix. However, both of these representations have some limitations. Euler angles have a problem called gimbal lock, and rotation matrices are computationally expensive. Quaternions are an alternative representation that solves these problems.

A quaternion is a four-dimensional vector that represents a rotation in 3D space. It has a scalar part and a vector part. The scalar part represents the rotation angle, and the vector part represents the rotation axis. A simple understanding of quaternions is that they are a combination of a rotation angle and a rotation axis. As a result, the size of the quaternion has no effect on the rotation with which we only use the unit quaternion.

## How to Interpolate 3D Rotation with Quaternion

Interpolating between two rotations in 3D space is a common operation in computer graphics and robotics. Quaternions provide a simple way to interpolate between two rotations. The most common way to interpolate between two quaternions is to use spherical linear interpolation (slerp). Slerp interpolates between two quaternions by finding the shortest path on the unit sphere.

In quaternion slerp, we first calculate the dot product of two quaternions. Then we calculate the angle between the two quaternions. Finally, we interpolate between the two quaternions based on the angle and the dot product. Slerp provides a smooth interpolation between two rotations without any gimbal lock or computational overhead.

However, this method has some limitations. Slerp does not provide a constant angular velocity interpolation. This means that the rotation speed is not constant throughout the interpolation. To solve this problem, we can use another interpolation method using the logarithm of quaternions. The linear interpolation of the logarithm of quaternions provides more consistent angular velocity interpolation.

## Why Logarithm of Quaternion is Important

In 3D rotation, we only uses the unit quaternion. The unit quaternion does not have a unique representation, making a usless dimension. The logarithm of a quaternion is a way to represent the rotation in a nearly unique way. However, in log-quaternion space, the topology is different from quaternion space. We always require a small portion of quaternion that the data would never reach for this method to work.

Since we use Deep Learning models for 3D motion, it was hard to prevent the model reaching the portion of quaternion. We have used some activation functions to prevent the model from reaching the portion of quaternion. We have also used some tricks to make the model more robust to the portion of quaternion.