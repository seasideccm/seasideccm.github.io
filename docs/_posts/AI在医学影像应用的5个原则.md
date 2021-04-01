---
title: AI在医学影像应用的5个原则
date: 2021-03-28 06:07:25
permalink: /pages/ca5e31/
sidebar: auto
categories:
  - 随笔
tags:
  - 
---


# Five principles for the intelligent use of AI in medical imaging

- [Errol Colak](javascript:;)             [ORCID: orcid.org/0000-0002-3771-7975](http://61.175.198.136:8083/rwt/150/http/N73GG4LEF3YYE3D/0000-0002-3771-7975)[1](http://61.175.198.136:8083/rwt/150/https/NSVX643PPNZHE4LPM7TYELUDN7XB/article/10.1007/s00134-020-06316-8#Aff1),[2](http://61.175.198.136:8083/rwt/150/https/NSVX643PPNZHE4LPM7TYELUDN7XB/article/10.1007/s00134-020-06316-8#Aff2), 
- [Robert Moreland](javascript:;)             [ORCID: orcid.org/0000-0001-5456-1637](http://61.175.198.136:8083/rwt/150/http/N73GG4LEF3YYE3D/0000-0001-5456-1637)[3](http://61.175.198.136:8083/rwt/150/https/NSVX643PPNZHE4LPM7TYELUDN7XB/article/10.1007/s00134-020-06316-8#Aff3),[4](http://61.175.198.136:8083/rwt/150/https/NSVX643PPNZHE4LPM7TYELUDN7XB/article/10.1007/s00134-020-06316-8#Aff4) & 
- [Marzyeh Ghassemi](javascript:;)             [ORCID: orcid.org/0000-0001-6349-7251](http://61.175.198.136:8083/rwt/150/http/N73GG4LEF3YYE3D/0000-0001-6349-7251)[5](http://61.175.198.136:8083/rwt/150/https/NSVX643PPNZHE4LPM7TYELUDN7XB/article/10.1007/s00134-020-06316-8#Aff5),[6](http://61.175.198.136:8083/rwt/150/https/NSVX643PPNZHE4LPM7TYELUDN7XB/article/10.1007/s00134-020-06316-8#Aff6) 

[*Intensive Care Medicine*](http://61.175.198.136:8083/journal/134)                             **volume 47**, pages154–156(2021)[Cite this article](http://61.175.198.136:8083/rwt/150/https/NSVX643PPNZHE4LPM7TYELUDN7XB/article/10.1007/s00134-020-06316-8#citeas)                         

- 1901 Accesses
- 21 Altmetric
- [Metrics details](http://61.175.198.136:8083/article/10.1007/s00134-020-06316-8/metrics)

## Clinical scenario

You are a critical care physician at a medium-sized urban hospital. A local start-up is promoting software that claims to automatically interpret chest X-rays. Having read many articles about artificial intelligence, you are intrigued by the idea of using it. However, you have never had to decide if, when, and how to deploy these technologies in clinical practice.

## Background

Artificial intelligence (AI) promises to transform healthcare by improving clinical decision-making, reducing errors, and automating tasks [[1](http://61.175.198.136:8083/article/10.1007/s00134-020-06316-8#ref-CR1)]. Recent advances in machine learning (ML), a branch of AI, have demonstrated expert-level task performance including medical image analysis [[2](http://61.175.198.136:8083/article/10.1007/s00134-020-06316-8#ref-CR2)]. With an increasing number of medical imaging ML systems receiving regulatory approval, critical care physicians will have an additional set of tools at their disposal. However, the deployment of these systems into clinical environments can be fraught with pitfalls. This article introduces 5 key principles that should be remembered as the adoption of ML systems becomes more widespread.

### Knowledge base: ensure you have enough understanding of machine learning to separate fact from fiction in vendor claims

If physicians are to be integral to the development, adoption, and oversight of ML models, it is paramount for them to develop basic competency in ML. Physicians should become familiar with dataset preparation, model architecture selection, and how statistical methods are applied during model evaluation. Knowledge and skills in ML would empower physicians to understand the potential capabilities and limitations of ML, critically appraise and validate models, and address patient concerns. A deeper understanding of how ML models are created and evaluated may help to determine how model outputs can be best integrated into clinical decision-making. Readers are encouraged to explore the many online educational resources, many free of charge, that are available for self-directed and class-based learning (Supplemental Material).

### Metrics: ensure that the evaluation metrics provided by the vendor are meaningful in clinical practice and not limited to accuracy

Model performance is often reported as an accuracy measure or confusion matrix. This is potentially problematic as models may demonstrate reduced accuracy when operating under real-world circumstances [[3](http://61.175.198.136:8083/article/10.1007/s00134-020-06316-8#ref-CR3)]. Furthermore, these metrics fail to consider prevalence, the impact of incorrect recommendations, and may in fact convey a false sense of safety. Determining a model’s clinical benefit, robustness, direct and indirect costs, calibration, safety profile, interpretability, and user acceptance are much more meaningful forms of evaluation and are unfortunately often not available [[4](http://61.175.198.136:8083/article/10.1007/s00134-020-06316-8#ref-CR4)]. Rather than focusing on the area under the curve, a commonly used metric in the ML literature, the focus needs to be on rigorous clinical validation. The validation process for a novel ML model should be no less rigorous and thorough than that of a new drug or diagnostic test to ensure efficacy, reliability, acceptability, and safety [[5](http://61.175.198.136:8083/article/10.1007/s00134-020-06316-8#ref-CR5)].

### Bias: ensure the data used for model development by the vendor reflects the case mix of your ICU and that the model has been validated using external datasets.

At their heart ML models are pattern recognition systems and can perform poorly outside the scope of the data used to train them [[6](http://61.175.198.136:8083/article/10.1007/s00134-020-06316-8#ref-CR6)]. They are highly dependent on the characteristics of this training data and vulnerable to any underlying selection biases. Specific patient populations and types of pathology may be under-represented during training but commonly encountered in your practice. Selection bias can reflect the patient population (e.g., age, gender, race), range of pathology (e.g., type and severity), and medical images (e.g., specific equipment, imaging protocol, patient positioning) used during training [[7](http://61.175.198.136:8083/article/10.1007/s00134-020-06316-8#ref-CR7)]. When evaluating an ML system, it is critical to understand the composition of the imaging studies used for training and whether it approximates those at your institution. Models trained on larger and more generalized datasets reduce the risks from bias but cannot entirely eliminate it.

### Model fragility: ensure the vendor provides the parameters within which their model should operate safely.

The behavior of an ML system outside the scope of training data can be unpredictable and potentially unsafe [[8](http://61.175.198.136:8083/article/10.1007/s00134-020-06316-8#ref-CR8)]. For example, ML models may fail to detect obvious pathology if the imaging study presented is dissimilar to training data [[9](http://61.175.198.136:8083/article/10.1007/s00134-020-06316-8#ref-CR9)]. More disturbing is that ML models may fail to recognize that they are operating beyond their “comfort zone” and produce incorrect outputs with high confidence [[10](http://61.175.198.136:8083/article/10.1007/s00134-020-06316-8#ref-CR10)]. Also, ML systems are often trained to distill complex imaging data down to simple binary results: is the pathology present or not? This loss of granularity can result in cases close to the decision boundary being marked as normal even when clinically relevant findings may be present. When considering the implementation of an ML system, it is important to know the parameters within which the model should operate safely, if the model provides a measure of prediction confidence, and how the model will respond to the incomplete or poor-quality imaging studies that are often encountered in the real world.

### Error-prone behavior: ensure the clinical team does not develop overdependence on the ML technology and loses sight of its fallibilities

Computer aids and automation are employed to improve efficiency and reduce error. However, they may actually lead to new and different types of errors [[11](http://61.175.198.136:8083/article/10.1007/s00134-020-06316-8#ref-CR11)]. Individuals may hold beliefs about the superiority of computer systems over human experts [[12](http://61.175.198.136:8083/article/10.1007/s00134-020-06316-8#ref-CR12)] and a consistently reliable system may even appear infallible. Blind trust in computer aids may impair an individual’s ability to recognize incorrect computer advice which may ultimately result in decision errors [[11](http://61.175.198.136:8083/article/10.1007/s00134-020-06316-8#ref-CR11)]. Furthermore, there is a risk of over-reliance on computer aids particularly in a clinical setting when many concurrent tasks compete for an individual’s time and attention [[13](http://61.175.198.136:8083/article/10.1007/s00134-020-06316-8#ref-CR13)]. Critical care physicians must be aware that ML models are imperfect and can be used in biased ways; so, human judgment will be necessary in determining how much weight should be given to them in the clinical decision-making process.

## Revisiting the clinical scenario

Having improved your understanding of AI systems, you realize the usefulness of the proposed system may be overstated. Similar to many current commercial systems targeting medical imaging, the start-up is marketing the product for widespread use but has not validated it on external data or in a full clinical setting [[14](http://61.175.198.136:8083/article/10.1007/s00134-020-06316-8#ref-CR14)]. Worse, its small training set consists mostly of PA radiographs of non-ICU patients which are notably different from your typical patients. Keenly aware that the value of the system is solely how it behaves in your institution, you insist on more thorough evaluation of the product with local imaging cases prior to further consideration.

### Key points for the intelligent use of AI in medical imaging

| To effectively evaluate a machine learning (ML) system, you should understand how they are created and the common methods used to assess them. |
| ------------------------------------------------------------ |
| Proper evaluation of an ML system requires you to consider more than the tool’s accuracy or ROC curve. |
| ML systems can be biased in a variety of ways and one that works well in one clinical environment may perform very poorly in another. |
| It is common for ML systems to behave unpredictably and potentially dangerously outside the scope of their training data. |
| Using an ML system can introduce new types of errors into the clinical decision process. |