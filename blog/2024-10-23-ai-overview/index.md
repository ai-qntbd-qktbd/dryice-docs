---
slug: AI-Overview
title: Overview of Motion Capture AI on Metive
authors: MoonRainy21
---

# Overview of Motion Capture AI on Metive

Metive, as an AI tool, has a lot of background in motion capture. There are some main concepts that are important to understand how Metive works. This article will give you an overview of the main concepts of motion capture AI on Metive.

## What is Monocular Markerless Motion Capture?

Markerless motion capture is a technology that allows you to capture the motion of a person without using any markers, such as reflective markers or sensors. Instead, markerless motion capture uses computer vision algorithms to track the movement of a person's body and create a 3D model of their motion. 

Monocular markerless motion capture is a type of markerless motion capture that uses a single camera to capture the motion of a person. This is different from traditional motion capture systems, which use multiple cameras to capture the motion of a person from different angles. Monocular markerless motion capture is more flexible and easier to set up than traditional motion capture systems, making it ideal for capturing motion in real-world environments.

There had been a lot of research on monocular markerless motion capture in recent years, and there are many different approaches to solving this problem. One of the most popular approaches is based on 2D pose estimation, which only uses 2D human pose information to estimate the 3D motion of a person.

## What makes Monocular Markerless Motion Capture difficult?

We have to solve a few challenges for monocular markerless motion capture to work.
- Feature extraction: We require extracting required features only about the person from the image. This is a challenging task because the background can be complex and the person can be in different backgrounds.
- Accurate 3D pose estimation: The quality of the whole system depends on the accuracy of the 3D pose estimation on a single photo. The 3D motion of a person is based on the 3D pose estimation of the person in each frame.
- Pose into motion: We need to convert the 3D pose estimation into 3D motion. This is a challenging task because the pose of each frame may not be consistent with the previous frame.
- Inference speed: The whole system needs to be fast enough to process the video in relativly fast time. This is a challenging task because most of deep learning models are computationally expensive.

## How does Metive solve these challenges?

1. **Feature extraction**: Metive uses a large pretrained backbone deep learning model to extract features from the image. We have tested various models and found that the feature extraction is the most important part of the whole system. As a result, we have invested a masive inference time on the feature extraction part.

2. **Accurate 3D pose estimation**: Metive uses features extracted from the backbone model, to generate the 3D pose estimation. The 3D pose estimation is trained on open-source datasets or our own generated datasets. The model is based on simple dense layers and some huristic rules.

3. **Pose into motion**: Metive uses a simple heuristic rule to convert the 3D pose estimation into 3D motion. The rule is based on the near frame's pose and the current frame's pose. This is a simple rule but it works well in practice.

4. **Inference speed**: Metive uses a simple model that is fast to process the video. We have tested various models and found that the simple model is the fastest. We found some tricks to make the model faster. We found some faster ways to process the video, but we have not implemented them due to missing features.

## How we can improve Metive?

We have developed Metive to be adaptable to different backbone models. We can always improve the feature extraction part by using a better backbone model. We can also improve the 3D pose estimation part by using a better model. We can also improve the pose into motion part by using a better rule. We can also improve the inference speed by using a faster model.