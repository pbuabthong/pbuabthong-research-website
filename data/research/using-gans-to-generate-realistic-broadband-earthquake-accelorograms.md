---
title: Using GANs to Generate Realistic Broadband Earthquake Accelorograms
date: '2022-04-24'
tags: ['machine learning','GANs','generative adversarial networks']
draft: false
summary: Using generative adversarial networks, we're able to generate realistic broadband seismograms in all 3 components conditioned on the magnitude, epicenter distance, and vs30.
doi: 10.1785/0120210264
images: []
layout: PostLayout
---

Florez, M. A., Caporale, M., **Buabthong, P.**, Ross, Z. E., Asimaki, D., and Meier, M.-A., "Data-Driven Synthesis of Broadband Earthquake Ground Motions Using Artificial Intelligence." Bulletin of the Seismological Society of America, (2022). [DOI: 10.1785/0120210264](https://doi.org/10.1785/0120210264)

### tl;dr
- Engineers have to design buildings to withstand earthquakes and seismic activities. 
- Larger-magnitude earthquakes typically have more disastrous effects on the buildings. However, the number of seismograms follows a power law, meaning we have many small-magnitude data, but exponentially fewer larger-magnitude seismograms.
- In this paper, our goal is to generate realistic seismic waves conditioned on the magnitude, epicenter distance, and shear-wave velocity (V30).
- The model employs two separate networks trained concurrently: a generator with the goal of generating 3D accelerograms from a Gaussian seed, magnitude, distance, and V30, and a discriminator with the goal of distinguishing whether the waves are from the real dataset or from the generator. 
- Our model is able to generate realistic waveforms which have all the important characteristics of the real seismograms. It can even generate accelerograms from conditions that were not observed before!

### Comments
- GAN is such a powerful technique. I hope to see people in other fields start to use this in their research. 
- Unfortunately, evaluating GAN, or any generative model is quite challenging. Currently, it's highly dependent on the field. Developing a benchmark standard for generative models would be extremely impactful. 