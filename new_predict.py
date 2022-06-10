#!/usr/bin/env python3.5

import cascade
import pandas as pd
from rdkit import Chem

p = cascade.Predictor()

SMILES = "CCOCC"

p.genConf(SMILES, True)

writer = Chem.SDWriter('confs.sdf')
for m in p.mols_conf:
    writer.write(m)
writer.close()

weightedPredC,spreadShift = p.predict_NMR(type='C')
weightedPredH,spreadShift = p.predict_NMR(type='H')

totalPred = pd.concat([weightedPredC,weightedPredH]).sort_values('atom_index', axis=0).reset_index(drop=True)
print(totalPred)