---
title: Knowledge Graph Question Answering on Thai Retail Banking Products
date: '2023-07-04'
tags: ['knowledge-graph','nlp','machine-learning']
draft: false
summary: We adopted multi-hop KGQA for Thai language data, using a manually-constructed knowledge graph based on banking products. The technique scored well in tests, but potentially proned to over-fitting when the answers are within 1-hop from the starting node.
doi: 10.1109/iSAI-NLP56921.2022.9960247
images: []
layout: PostLayout
citationKey: Khongcharoen2022
---

Khongcharoen, W., Saetia, C., Chalothorn, T., **Buabthong, P.**, "Question Answering Over Knowledge Graphs for Thai Retail Banking Products." 2022 17th International Joint Symposium on Artificial Intelligence and Natural Language Processing (iSAI-NLP), (2022). [DOI: 10.1109/iSAI-NLP56921.2022.9960247](https://doi.org/10.1109/iSAI-NLP56921.2022.9960247)

Our first NLP publication

### tl;dr
- We looked at how to apply a method called "multi-hop KGQA" to the Thai language. This method helps the model reach answer nodes that are more than one hop away from the starting node. 
- We manually built a knowledge graph based on banking products covering credit cards, debit cards, and deposit accounts.
- For typical single-answer-node questions, the model did pretty well in our tests, scoring 80.8 out of 100.
- Adding more data to the knowledge graph helped improve the performance.
- The work shows how this method can be applied to the Thai language and potentially help chatbots answer complex questions, especially in sectors like banking. 

### Comments
- The results indicate weaker performance for the translate dataset. Using translated dataset seems to be a common approach from other work when developing models in low-resource language setting. However, directly using the translator that I could potentially introduce propagation error from the translation model. On the other hand developing language specific model will pose a challenge when scaling the dataset. 
- Using representation directly from other multilingual large language models could help address this problem, but human intervention maybe required in the early stages of the research.