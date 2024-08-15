---
title: Financial Product Ontology Population with Large Language Models
date: '2024-08-04'
tags: ['ontology','nlp','machine-learning']
draft: false
summary: We explore the use of large language models (LLMs) for ontology population tasks in finance. The findings reveal that LLMs-based generative approaches, especially when provided with positive and negative examples in the prompts, outperform span-based methods, achieving a 61.05% F1 score.
images: []
layout: PostLayout
citationKey: saetia2024Ontology
---

Saetia, C., Phruetthiset, J., Chalothorn, T., Lertsutthiwong, M., Taerungruang, S., **Buabthong, P.**, "Financial Product Ontology Population with Large Language Models." Proceedings of the TextGraphs-17: Graph-based Methods for Natural Language Processing @ ACL, (2024). [https://aclanthology.org/2024.textgraphs-1.4/](https://aclanthology.org/2024.textgraphs-1.4/)

### tl;dr

- The study focuses on the challenges of ontology population in retail banking, particularly in extracting structured data from unstructured text in low-resource language settings.
- It investigates the application of large language models (LLMs) for this task, comparing their performance with traditional span-based methods.
- Different prompting techniques, including few-shot learning and chain-of-thought (CoT) prompting, are explored to optimize LLMs for ontology population tasks.
- Results show that LLMs-based generative approaches with positive and negative examples in the prompts significantly outperform span-based approaches, achieving a 61.05% F1 score.
- The study highlights the potential of LLMs for structured information extraction, offering a scalable and efficient solution, especially in low-resource language settings.
- The incorporation of field definitions from schema.org and CoT prompts further improve the performance of LLMs in extracting structured information from unstructured text.
- The findings suggest that LLMs can adapt to complex, domain-specific tasks with simple prompt adjustments and provide insights for enhancing ontology population tasks in the financial sector.

### Comments

- The study acknowledges the limitations of using a general-purpose model like GPT-3.5, suggesting that more task-specific models could potentially enhance performance, especially in low-resource languages like Thai.
- Variability in writing styles among different authors and languages can make consistent annotation challenging, impacting the accuracy of the extracted information.