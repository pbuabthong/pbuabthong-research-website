---
title: How to Progressively Build Thai Spelling Correction Systems?
date: '2023-07-25'
tags: ['nlp','machine-learning']
draft: false
summary: The paper presents a progressive approach to building Thai spelling correction systems by integrating both neural-based and dictionary-based methods. It introduces an Extendable Neural Contextual Corrector (XNCC), which allows for vocabulary expansion post-training, demonstrating that effective spelling correction can be achieved with minimal annotated data and minor enhancements to traditional methods.
images: []
layout: PostLayout
citationKey: lertpiya2023
---

Lertpiya, A., Chalothorn, T., **Buabthong, P.**, "How to Progressively Build Thai Spelling Correction Systems?." IEEE Access, (2023). [DOI: 10.1109/ACCESS.2023.3295004](https://doi.org/10.1109/ACCESS.2023.3295004)

### tl;dr

- The paper discusses the challenges of building Thai spelling correction systems due to the language's complexity.
- It proposes a method to progressively build correction systems using minimal annotated data.
- Introduces the Extendable Neural Contextual Corrector (XNCC), which allows vocabulary updates without retraining.
- Highlights the limitations of traditional dictionary-based and Seq2Seq models in handling out-of-vocabulary (OOV) words.
- Recommends a hybrid approach combining neural-based models and dictionary methods for better performance.
- The data annotation process is optimized to reduce human effort while maintaining accuracy.
- Experimental results show that significant improvements can be made with minor changes to existing methods.

### Comments

- Incorporating more extensive datasets to include a broader variety of text sources, particularly for handling diverse linguistic patterns and rare words.
- Enhancing the model's ability to understand broader context in sentences by integrating more advanced language models that capture nuanced meanings.
- Further refining the balance between neural-based models and dictionary-based methods to optimize performance, particularly in cases with out-of-vocabulary words.
- Implementing a feedback loop where user corrections are continuously incorporated into the model, allowing it to learn from real-world usage and improve over time.
