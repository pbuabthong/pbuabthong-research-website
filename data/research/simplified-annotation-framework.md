---
title: Streamlining Event Extraction with a Simplified Annotation Framework
date: '2024-03-04'
tags: ['ontology','nlp','machine-learning']
draft: false
summary: We introduce a methodology for event extraction, particularly aimed at low-resource languages like Thai. The proposed framework simplifies the traditional annotation process, enhancing efficiency in extracting events from text. 
images: []
layout: PostLayout
citationKey: saetia2024
---

Saetia, C., Thonglong, A., Amornchaiteera, T., Chalothorn, T., Taerungruang, S., **Buabthong, P.**, "Streamlining Event Extraction with a Simplified Annotation Framework." Frontiers in Artificial Intelligence: Advances in Structured Information Extraction for Large Language Models, (2024). [DOI: 10.3389/frai.2024.1361483](https://doi.org/10.3389/frai.2024.1361483)

### tl;dr

- The study presents a novel methodology designed to simplify the annotation process for event extraction, particularly in low-resource languages like Thai.
- Universal Dependencies are incorporated during the pre-training phase to enhance the accuracy of entity and relation extraction tasks; the model achieves an 8% improvement in F1 score for entity extraction and a 12% improvement for relation extraction.
- Task-specific and language-specific fine-tuning are shown to significantly improve the performance of the event extraction model.
- The framework focuses on reducing the complexity of traditional annotation processes, making it more efficient and accessible.
- Experiments demonstrate the effectiveness of the proposed approach in low-resource settings, offering a valuable solution for languages with limited annotated data.
- The research applies the extracted event graphs to a practical scenario, specifically improving node classification in the retail banking sector.
- The results highlight the potential for this streamlined approach to be adapted for various languages and domains, broadening its applicability.

### Comments

- The study primarily focuses on low-resource languages like Thai, which may limit the generalizability of the framework to other languages with different linguistic structures.
- The reliance on Universal Dependencies during pre-training might not fully capture the nuances of all language families, potentially affecting performance in non-UD compatible languages.
- While the framework reduces annotation time by 40%, the initial setup and fine-tuning require significant computational resources, which might be a barrier for smaller institutions.
- The improvements in accuracy and efficiency are demonstrated mainly in controlled experiments, and real-world applications may encounter unforeseen challenges that were not accounted for in the study.
- The method's effectiveness is shown in the context of retail banking, but its applicability to other industries or complex event types remains to be thoroughly tested.