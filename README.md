![CASCADE](cascadebanner.png)
===

# Barebones CASCADE Backend
This repository is a slightly refactored version of the webapp it was forked from. This repository may be used to easily setup and run CASCADE to generate <sup>1</sup>H and <sup>13</sup>C NMR predictions.

The production webserver hosted by the Paton lab is able to fulfill daily / normal usage of CASCADE. It is located at:
http://nova.chem.colostate.edu/cascade/

# What is CASCADE ?
Please see [patonlab/CASCADE](https://github.com/patonlab/CASCADE) for information about CASCADE. 

For all work using CASCADE please cite the author's publication: Guan, Y.; Sowndarya, S. V. S.; Gallegos, L. C.; St. John P. C.; Paton, R. S. *Chem. Sci.* **2021**, [**DOI:** 10.1039/D1SC03343C](https://doi.org/10.1039/D1SC03343C)

# Installation
```bash
$ git clone https://github.com/samfield1/cascade.git && cd cascade
$ conda env create -f webapp_env.yml
$ conda activate cascade
```
After installation, run the following command to add the repository to PYTHONPATH. Alternatively, you can move the repository to your python packages directory.
```bash
$ echo "export PYTHONPATH=$PYTHONPATH:$(pwd)" >> ~/.bashrc
```

# Usage
See [new_predict.py](new_predict.py) for an example
```python
import cascade

# Initialize predictor: loads models
predictor = cascade.Predictor()

# Generate conformers given a SMILES string
predictor.genConf(<smiles>)

# Write out conformers to a file[](README.md)
conformers = predictor.mols_conf

from rdkit import Chem
writer = Chem.SDWriter(<filename>)
for mol in conformers:
    writer.write(mol)
writer.close()

# Predict C or H NMR
weightedPrediction, spreadShift = predictor.predict_NMR(type=<'C'|'H'>)
```
The objects returned by `predict_NMR()` are pandas DataFrames, thus they may be easily manipulated and stored.

An example: combining the results of a carbon and hydrogen prediction and writing to a .csv
```python
weightedPredC = predictor.predict_NMR(type='C')[0]
weightedPredH = predictor.predict_NMR(type='H')[0]
totalPred = pd.concat([weightedPredC,weightedPredH]).sort_values('atom_index', axis=0).reset_index(drop=True)
totalPred.to_csv(<filename>)
```


    
