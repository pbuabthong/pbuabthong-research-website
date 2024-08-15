---
title: A Cross-Document Coreference Resolution Approach to Low-Resource Languages
date: '2023-09-01'
tags: ['coreference-resolution','nlp','machine-learning']
draft: false
summary: This paper presents a cross-document coreference resolution approach tailored for low-resource languages, specifically focusing on Thai. The authors adapt an existing English model that uses agglomerative clustering to identify and group coreferent entities across documents. The study also compares manual and automatic span detection methods, finding that a fine-tuned longformer model provides the best performance, achieving a CoNLL F1 score of 72.87. This research offers a framework that could be extended to other low-resource languages. 
images: []
layout: PostLayout
citationKey: theptakob2023
---

Theptakob, N., Seneewong Na Ayutthaya, T., Saetia, C., Chalothorn, T., **Buabthong, P.**, "A Cross-Document Coreference Resolution Approach to Low-Resource Languages." Knowledge Science, Engineering and Management. KSEM 2023. Lecture Notes in Computer Science vol 14118, (2023). [DOI: 10.1007/978-3-031-40286-9_34](https://doi.org/10.1007/978-3-031-40286-9_34)

### tl;dr

- The paper addresses cross-document coreference resolution for low-resource languages, focusing on Thai.
- An English model based on agglomerative clustering is adapted for Thai coreference resolution.
- A method for converting Thai text into datasets similar to the ECB+ benchmark for English is introduced.
- The study compares manual and automatic span detection methods for coreference resolution.
- A fine-tuned longformer model achieves the best performance with a CoNLL F1 score of 72.87.
- The approach demonstrates improved performance in Thai coreference resolution.
- The proposed framework can potentially be extended to other low-resource languages.

### Comments

- The approach is specifically designed for Thai, a low-resource language, which might limit its applicability to languages with even fewer resources or different linguistic structures.
- The performance of the model heavily relies on the quality and size of the datasets converted to mimic the ECB+ benchmark, which may not fully capture the nuances of the Thai language.
- The study finds that automatic span detection methods, while effective, still lag behind manual methods in accuracy, which could impact the overall coreference resolution performance.
- Adapting an English-based model to a low-resource language like Thai involves significant challenges in terms of linguistic differences, which may not be fully addressed by the current methodology.
