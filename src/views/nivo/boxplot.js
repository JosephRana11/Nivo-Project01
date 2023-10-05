import { CCard, CCardBody, CCardHeader } from "@coreui/react";
import React from "react";
import { ResponsiveBoxPlot } from '@nivo/boxplot'

export default function NivoBoxPlot(){
  const boxPlotData = [
    {
      "group": "Alpha",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 3.6950771292578475
    },
    {
      "group": "Alpha",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 5.1295850640485146
    },
    {
      "group": "Alpha",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 5.419629965842115
    },
    {
      "group": "Alpha",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 4.747082040668104
    },
    {
      "group": "Alpha",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 4.922961214204737
    },
    {
      "group": "Alpha",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 5.297444568671981
    },
    {
      "group": "Alpha",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 5.235781116449314
    },
    {
      "group": "Alpha",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 5.166071512048225
    },
    {
      "group": "Alpha",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 6.3058165145234515
    },
    {
      "group": "Alpha",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 6.238626285586706
    },
    {
      "group": "Alpha",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 4.12712678859162
    },
    {
      "group": "Alpha",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 5.702924023108784
    },
    {
      "group": "Alpha",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 4.894200623933053
    },
    {
      "group": "Alpha",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 5.436213911515962
    },
    {
      "group": "Alpha",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 5.37082684323534
    },
    {
      "group": "Alpha",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 3.9996629531265757
    },
    {
      "group": "Alpha",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 3.782409786468186
    },
    {
      "group": "Alpha",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 4.5845175383176135
    },
    {
      "group": "Alpha",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 5.633160231267423
    },
    {
      "group": "Alpha",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 5.262399433480247
    },
    {
      "group": "Alpha",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 5.818893570234152
    },
    {
      "group": "Alpha",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 5.662293744788894
    },
    {
      "group": "Alpha",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 5.758658517120806
    },
    {
      "group": "Alpha",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 5.669818324594318
    },
    {
      "group": "Alpha",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 5.672918233270666
    },
    {
      "group": "Alpha",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 5.982634346239967
    },
    {
      "group": "Alpha",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 6.569951447528784
    },
    {
      "group": "Alpha",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 5.697932912615531
    },
    {
      "group": "Alpha",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 5.075926990338596
    },
    {
      "group": "Alpha",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 5.988855860106198
    },
    {
      "group": "Alpha",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 5.365840574020374
    },
    {
      "group": "Alpha",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 6.648081468556757
    },
    {
      "group": "Alpha",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 6.586781292988724
    },
    {
      "group": "Alpha",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 7.0588286235191875
    },
    {
      "group": "Alpha",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 7.355613039228967
    },
    {
      "group": "Alpha",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 7.1804102425980725
    },
    {
      "group": "Alpha",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 5.310612307095818
    },
    {
      "group": "Alpha",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 5.988966663253347
    },
    {
      "group": "Alpha",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 6.318426424458195
    },
    {
      "group": "Alpha",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 4.247162415899199
    },
    {
      "group": "Beta",
      "subgroup": "A",
      "mu": 8,
      "sd": 1.4,
      "n": 20,
      "value": 7.547588086412643
    },
    {
      "group": "Beta",
      "subgroup": "A",
      "mu": 8,
      "sd": 1.4,
      "n": 20,
      "value": 7.969702232466552
    },
    {
      "group": "Beta",
      "subgroup": "A",
      "mu": 8,
      "sd": 1.4,
      "n": 20,
      "value": 7.204803449102229
    },
    {
      "group": "Beta",
      "subgroup": "A",
      "mu": 8,
      "sd": 1.4,
      "n": 20,
      "value": 7.405704032992695
    },
    {
      "group": "Beta",
      "subgroup": "A",
      "mu": 8,
      "sd": 1.4,
      "n": 20,
      "value": 7.446725078933971
    },
    {
      "group": "Beta",
      "subgroup": "A",
      "mu": 8,
      "sd": 1.4,
      "n": 20,
      "value": 7.766339125334491
    },
    {
      "group": "Beta",
      "subgroup": "A",
      "mu": 8,
      "sd": 1.4,
      "n": 20,
      "value": 8.947461609403002
    },
    {
      "group": "Beta",
      "subgroup": "A",
      "mu": 8,
      "sd": 1.4,
      "n": 20,
      "value": 8.576758427935351
    },
    {
      "group": "Beta",
      "subgroup": "A",
      "mu": 8,
      "sd": 1.4,
      "n": 20,
      "value": 7.149067932838194
    },
    {
      "group": "Beta",
      "subgroup": "A",
      "mu": 8,
      "sd": 1.4,
      "n": 20,
      "value": 8.141718979802505
    },
    {
      "group": "Beta",
      "subgroup": "A",
      "mu": 8,
      "sd": 1.4,
      "n": 20,
      "value": 6.911943088675546
    },
    {
      "group": "Beta",
      "subgroup": "A",
      "mu": 8,
      "sd": 1.4,
      "n": 20,
      "value": 6.445117437252957
    },
    {
      "group": "Beta",
      "subgroup": "A",
      "mu": 8,
      "sd": 1.4,
      "n": 20,
      "value": 8.071309463624726
    },
    {
      "group": "Beta",
      "subgroup": "A",
      "mu": 8,
      "sd": 1.4,
      "n": 20,
      "value": 7.582234238105658
    },
    {
      "group": "Beta",
      "subgroup": "A",
      "mu": 8,
      "sd": 1.4,
      "n": 20,
      "value": 7.225977007258029
    },
    {
      "group": "Beta",
      "subgroup": "A",
      "mu": 8,
      "sd": 1.4,
      "n": 20,
      "value": 8.391798373982267
    },
    {
      "group": "Beta",
      "subgroup": "A",
      "mu": 8,
      "sd": 1.4,
      "n": 20,
      "value": 6.51145744638993
    },
    {
      "group": "Beta",
      "subgroup": "A",
      "mu": 8,
      "sd": 1.4,
      "n": 20,
      "value": 8.923765029442931
    },
    {
      "group": "Beta",
      "subgroup": "A",
      "mu": 8,
      "sd": 1.4,
      "n": 20,
      "value": 8.503582401101472
    },
    {
      "group": "Beta",
      "subgroup": "A",
      "mu": 8,
      "sd": 1.4,
      "n": 20,
      "value": 7.337066134754861
    },
    {
      "group": "Beta",
      "subgroup": "B",
      "mu": 7.5,
      "sd": 1.4,
      "n": 20,
      "value": 6.158731289144802
    },
    {
      "group": "Beta",
      "subgroup": "B",
      "mu": 7.5,
      "sd": 1.4,
      "n": 20,
      "value": 7.314039279143432
    },
    {
      "group": "Beta",
      "subgroup": "B",
      "mu": 7.5,
      "sd": 1.4,
      "n": 20,
      "value": 7.63271044235674
    },
    {
      "group": "Beta",
      "subgroup": "B",
      "mu": 7.5,
      "sd": 1.4,
      "n": 20,
      "value": 6.432114999821445
    },
    {
      "group": "Beta",
      "subgroup": "B",
      "mu": 7.5,
      "sd": 1.4,
      "n": 20,
      "value": 7.377076080712584
    },
    {
      "group": "Beta",
      "subgroup": "B",
      "mu": 7.5,
      "sd": 1.4,
      "n": 20,
      "value": 8.320255936270462
    },
    {
      "group": "Beta",
      "subgroup": "B",
      "mu": 7.5,
      "sd": 1.4,
      "n": 20,
      "value": 7.044221157125565
    },
    {
      "group": "Beta",
      "subgroup": "B",
      "mu": 7.5,
      "sd": 1.4,
      "n": 20,
      "value": 6.357740785591608
    },
    {
      "group": "Beta",
      "subgroup": "B",
      "mu": 7.5,
      "sd": 1.4,
      "n": 20,
      "value": 7.744549922770761
    },
    {
      "group": "Beta",
      "subgroup": "B",
      "mu": 7.5,
      "sd": 1.4,
      "n": 20,
      "value": 7.542295618323352
    },
    {
      "group": "Beta",
      "subgroup": "B",
      "mu": 7.5,
      "sd": 1.4,
      "n": 20,
      "value": 7.4657014371323696
    },
    {
      "group": "Beta",
      "subgroup": "B",
      "mu": 7.5,
      "sd": 1.4,
      "n": 20,
      "value": 7.717394913523146
    },
    {
      "group": "Beta",
      "subgroup": "B",
      "mu": 7.5,
      "sd": 1.4,
      "n": 20,
      "value": 6.709697546723246
    },
    {
      "group": "Beta",
      "subgroup": "B",
      "mu": 7.5,
      "sd": 1.4,
      "n": 20,
      "value": 9.04715376833832
    },
    {
      "group": "Beta",
      "subgroup": "B",
      "mu": 7.5,
      "sd": 1.4,
      "n": 20,
      "value": 8.517886478876004
    },
    {
      "group": "Beta",
      "subgroup": "B",
      "mu": 7.5,
      "sd": 1.4,
      "n": 20,
      "value": 7.505510389208045
    },
    {
      "group": "Beta",
      "subgroup": "B",
      "mu": 7.5,
      "sd": 1.4,
      "n": 20,
      "value": 7.0622286960471365
    },
    {
      "group": "Beta",
      "subgroup": "B",
      "mu": 7.5,
      "sd": 1.4,
      "n": 20,
      "value": 9.217652770523301
    },
    {
      "group": "Beta",
      "subgroup": "B",
      "mu": 7.5,
      "sd": 1.4,
      "n": 20,
      "value": 7.08372204419832
    },
    {
      "group": "Beta",
      "subgroup": "B",
      "mu": 7.5,
      "sd": 1.4,
      "n": 20,
      "value": 7.750954213262271
    },
    {
      "group": "Gamma",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 5.501928179180312
    },
    {
      "group": "Gamma",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 5.229721393334858
    },
    {
      "group": "Gamma",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 5.629203374095795
    },
    {
      "group": "Gamma",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 4.234309266258708
    },
    {
      "group": "Gamma",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 6.348376844004557
    },
    {
      "group": "Gamma",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 5.056942001451068
    },
    {
      "group": "Gamma",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 4.5990978895234065
    },
    {
      "group": "Gamma",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 4.89294268326421
    },
    {
      "group": "Gamma",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 5.742343877342757
    },
    {
      "group": "Gamma",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 5.350555722376112
    },
    {
      "group": "Gamma",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 4.748109161071509
    },
    {
      "group": "Gamma",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 6.400982830030926
    },
    {
      "group": "Gamma",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 3.618781759263883
    },
    {
      "group": "Gamma",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 5.408479501424229
    },
    {
      "group": "Gamma",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 4.4545313926553725
    },
    {
      "group": "Gamma",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 4.649831143663675
    },
    {
      "group": "Gamma",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 4.446666055071537
    },
    {
      "group": "Gamma",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 3.1868756967102994
    },
    {
      "group": "Gamma",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 3.918834771830508
    },
    {
      "group": "Gamma",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 4.892918254483895
    },
    {
      "group": "Gamma",
      "subgroup": "B",
      "mu": 7.2,
      "sd": 1.8,
      "n": 20,
      "value": 5.943685334063096
    },
    {
      "group": "Gamma",
      "subgroup": "B",
      "mu": 7.2,
      "sd": 1.8,
      "n": 20,
      "value": 6.323304370565437
    },
    {
      "group": "Gamma",
      "subgroup": "B",
      "mu": 7.2,
      "sd": 1.8,
      "n": 20,
      "value": 7.3427659710901905
    },
    {
      "group": "Gamma",
      "subgroup": "B",
      "mu": 7.2,
      "sd": 1.8,
      "n": 20,
      "value": 5.905486844292328
    },
    {
      "group": "Gamma",
      "subgroup": "B",
      "mu": 7.2,
      "sd": 1.8,
      "n": 20,
      "value": 8.189711750885197
    },
    {
      "group": "Gamma",
      "subgroup": "B",
      "mu": 7.2,
      "sd": 1.8,
      "n": 20,
      "value": 8.950387799363781
    },
    {
      "group": "Gamma",
      "subgroup": "B",
      "mu": 7.2,
      "sd": 1.8,
      "n": 20,
      "value": 7.162185326832342
    },
    {
      "group": "Gamma",
      "subgroup": "B",
      "mu": 7.2,
      "sd": 1.8,
      "n": 20,
      "value": 7.848972398498834
    },
    {
      "group": "Gamma",
      "subgroup": "B",
      "mu": 7.2,
      "sd": 1.8,
      "n": 20,
      "value": 7.874926939745424
    },
    {
      "group": "Gamma",
      "subgroup": "B",
      "mu": 7.2,
      "sd": 1.8,
      "n": 20,
      "value": 7.221870092525249
    },
    {
      "group": "Gamma",
      "subgroup": "B",
      "mu": 7.2,
      "sd": 1.8,
      "n": 20,
      "value": 8.375359101709565
    },
    {
      "group": "Gamma",
      "subgroup": "B",
      "mu": 7.2,
      "sd": 1.8,
      "n": 20,
      "value": 5.841357433187176
    },
    {
      "group": "Gamma",
      "subgroup": "B",
      "mu": 7.2,
      "sd": 1.8,
      "n": 20,
      "value": 7.063559269258664
    },
    {
      "group": "Gamma",
      "subgroup": "B",
      "mu": 7.2,
      "sd": 1.8,
      "n": 20,
      "value": 11.530747500943367
    },
    {
      "group": "Gamma",
      "subgroup": "B",
      "mu": 7.2,
      "sd": 1.8,
      "n": 20,
      "value": 6.488019035985033
    },
    {
      "group": "Gamma",
      "subgroup": "B",
      "mu": 7.2,
      "sd": 1.8,
      "n": 20,
      "value": 6.984027930991493
    },
    {
      "group": "Gamma",
      "subgroup": "B",
      "mu": 7.2,
      "sd": 1.8,
      "n": 20,
      "value": 7.435498123058718
    },
    {
      "group": "Gamma",
      "subgroup": "B",
      "mu": 7.2,
      "sd": 1.8,
      "n": 20,
      "value": 5.237536828582898
    },
    {
      "group": "Gamma",
      "subgroup": "B",
      "mu": 7.2,
      "sd": 1.8,
      "n": 20,
      "value": 7.330502428176639
    },
    {
      "group": "Gamma",
      "subgroup": "B",
      "mu": 7.2,
      "sd": 1.8,
      "n": 20,
      "value": 5.912293669400661
    },
    {
      "group": "Delta",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 5.378486136903124
    },
    {
      "group": "Delta",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 4.98530040728024
    },
    {
      "group": "Delta",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 4.645801218427245
    },
    {
      "group": "Delta",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 5.134069416718009
    },
    {
      "group": "Delta",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 5.169413124210034
    },
    {
      "group": "Delta",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 5.063655275840253
    },
    {
      "group": "Delta",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 5.441420626416533
    },
    {
      "group": "Delta",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 5.942774243035823
    },
    {
      "group": "Delta",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 5.475522722835794
    },
    {
      "group": "Delta",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 4.912764726726216
    },
    {
      "group": "Delta",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 3.6591071772171277
    },
    {
      "group": "Delta",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 7.751065602484937
    },
    {
      "group": "Delta",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 3.529600154722537
    },
    {
      "group": "Delta",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 5.034770537927426
    },
    {
      "group": "Delta",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 4.719453721757042
    },
    {
      "group": "Delta",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 7.041113529493302
    },
    {
      "group": "Delta",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 4.8120351945096775
    },
    {
      "group": "Delta",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 5.347540809236426
    },
    {
      "group": "Delta",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 4.034391185367062
    },
    {
      "group": "Delta",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 4.114077786229436
    },
    {
      "group": "Delta",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 5.8509374920080495
    },
    {
      "group": "Delta",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 5.885875427060195
    },
    {
      "group": "Delta",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 7.0428681935934305
    },
    {
      "group": "Delta",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 7.767572755846272
    },
    {
      "group": "Delta",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 6.150571921753198
    },
    {
      "group": "Delta",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 6.209122005387248
    },
    {
      "group": "Delta",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 6.63016800327798
    },
    {
      "group": "Delta",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 5.69415539794468
    },
    {
      "group": "Delta",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 6.508113397596759
    },
    {
      "group": "Delta",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 6.158352097190237
    },
    {
      "group": "Delta",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 6.1786798985322555
    },
    {
      "group": "Delta",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 4.536308694674277
    },
    {
      "group": "Delta",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 6.498665192065127
    },
    {
      "group": "Delta",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 6.459099676148143
    },
    {
      "group": "Delta",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 4.619133118045102
    },
    {
      "group": "Delta",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 6.731883314153345
    },
    {
      "group": "Delta",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 6.163051150206329
    },
    {
      "group": "Delta",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 6.732718167173358
    },
    {
      "group": "Delta",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 3.051681982408713
    },
    {
      "group": "Delta",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 5.101405805939358
    },
    {
      "group": "Epsilon",
      "subgroup": "A",
      "mu": 5,
      "sd": 1.4,
      "n": 20,
      "value": 5.354829146492182
    },
    {
      "group": "Epsilon",
      "subgroup": "A",
      "mu": 5,
      "sd": 1.4,
      "n": 20,
      "value": 2.7090843685917045
    },
    {
      "group": "Epsilon",
      "subgroup": "A",
      "mu": 5,
      "sd": 1.4,
      "n": 20,
      "value": 6.1440263140226214
    },
    {
      "group": "Epsilon",
      "subgroup": "A",
      "mu": 5,
      "sd": 1.4,
      "n": 20,
      "value": 4.935733013553522
    },
    {
      "group": "Epsilon",
      "subgroup": "A",
      "mu": 5,
      "sd": 1.4,
      "n": 20,
      "value": 5.5663942209127875
    },
    {
      "group": "Epsilon",
      "subgroup": "A",
      "mu": 5,
      "sd": 1.4,
      "n": 20,
      "value": 4.345823432176628
    },
    {
      "group": "Epsilon",
      "subgroup": "A",
      "mu": 5,
      "sd": 1.4,
      "n": 20,
      "value": 6.727370456502457
    },
    {
      "group": "Epsilon",
      "subgroup": "A",
      "mu": 5,
      "sd": 1.4,
      "n": 20,
      "value": 5.211722474544192
    },
    {
      "group": "Epsilon",
      "subgroup": "A",
      "mu": 5,
      "sd": 1.4,
      "n": 20,
      "value": 4.815884962675735
    },
    {
      "group": "Epsilon",
      "subgroup": "A",
      "mu": 5,
      "sd": 1.4,
      "n": 20,
      "value": 5.016836474707847
    },
    {
      "group": "Epsilon",
      "subgroup": "A",
      "mu": 5,
      "sd": 1.4,
      "n": 20,
      "value": 3.256987876404046
    },
    {
      "group": "Epsilon",
      "subgroup": "A",
      "mu": 5,
      "sd": 1.4,
      "n": 20,
      "value": 5.180770448006513
    },
    {
      "group": "Epsilon",
      "subgroup": "A",
      "mu": 5,
      "sd": 1.4,
      "n": 20,
      "value": 5.811704075618338
    },
    {
      "group": "Epsilon",
      "subgroup": "A",
      "mu": 5,
      "sd": 1.4,
      "n": 20,
      "value": 4.928398003808946
    },
    {
      "group": "Epsilon",
      "subgroup": "A",
      "mu": 5,
      "sd": 1.4,
      "n": 20,
      "value": 5.110665421534177
    },
    {
      "group": "Epsilon",
      "subgroup": "A",
      "mu": 5,
      "sd": 1.4,
      "n": 20,
      "value": 4.929224378273983
    },
    {
      "group": "Epsilon",
      "subgroup": "A",
      "mu": 5,
      "sd": 1.4,
      "n": 20,
      "value": 6.599383689027221
    },
    {
      "group": "Epsilon",
      "subgroup": "A",
      "mu": 5,
      "sd": 1.4,
      "n": 20,
      "value": 3.019837669054212
    },
    {
      "group": "Epsilon",
      "subgroup": "A",
      "mu": 5,
      "sd": 1.4,
      "n": 20,
      "value": 6.7678986301399355
    },
    {
      "group": "Epsilon",
      "subgroup": "A",
      "mu": 5,
      "sd": 1.4,
      "n": 20,
      "value": 6.1089599276581374
    },
    {
      "group": "Epsilon",
      "subgroup": "B",
      "mu": 6,
      "sd": 3,
      "n": 20,
      "value": 8.543978017419457
    },
    {
      "group": "Epsilon",
      "subgroup": "B",
      "mu": 6,
      "sd": 3,
      "n": 20,
      "value": 4.862075584114301
    },
    {
      "group": "Epsilon",
      "subgroup": "B",
      "mu": 6,
      "sd": 3,
      "n": 20,
      "value": 4.519515767245476
    },
    {
      "group": "Epsilon",
      "subgroup": "B",
      "mu": 6,
      "sd": 3,
      "n": 20,
      "value": 9.030806481704996
    },
    {
      "group": "Epsilon",
      "subgroup": "B",
      "mu": 6,
      "sd": 3,
      "n": 20,
      "value": 1.256943554907851
    },
    {
      "group": "Epsilon",
      "subgroup": "B",
      "mu": 6,
      "sd": 3,
      "n": 20,
      "value": 4.954481171987428
    },
    {
      "group": "Epsilon",
      "subgroup": "B",
      "mu": 6,
      "sd": 3,
      "n": 20,
      "value": 0.2656554770539614
    },
    {
      "group": "Epsilon",
      "subgroup": "B",
      "mu": 6,
      "sd": 3,
      "n": 20,
      "value": 6.7849666995159446
    },
    {
      "group": "Epsilon",
      "subgroup": "B",
      "mu": 6,
      "sd": 3,
      "n": 20,
      "value": 6.155197260029192
    },
    {
      "group": "Epsilon",
      "subgroup": "B",
      "mu": 6,
      "sd": 3,
      "n": 20,
      "value": 10.427233445758302
    },
    {
      "group": "Epsilon",
      "subgroup": "B",
      "mu": 6,
      "sd": 3,
      "n": 20,
      "value": 14.095771963490801
    },
    {
      "group": "Epsilon",
      "subgroup": "B",
      "mu": 6,
      "sd": 3,
      "n": 20,
      "value": 7.8970260527031115
    },
    {
      "group": "Epsilon",
      "subgroup": "B",
      "mu": 6,
      "sd": 3,
      "n": 20,
      "value": 5.754911181476901
    },
    {
      "group": "Epsilon",
      "subgroup": "B",
      "mu": 6,
      "sd": 3,
      "n": 20,
      "value": 6.635875696846475
    },
    {
      "group": "Epsilon",
      "subgroup": "B",
      "mu": 6,
      "sd": 3,
      "n": 20,
      "value": 7.659253475467214
    },
    {
      "group": "Epsilon",
      "subgroup": "B",
      "mu": 6,
      "sd": 3,
      "n": 20,
      "value": 3.3809567716973072
    },
    {
      "group": "Epsilon",
      "subgroup": "B",
      "mu": 6,
      "sd": 3,
      "n": 20,
      "value": 7.090945073217542
    },
    {
      "group": "Epsilon",
      "subgroup": "B",
      "mu": 6,
      "sd": 3,
      "n": 20,
      "value": 2.6392536257862718
    },
    {
      "group": "Epsilon",
      "subgroup": "B",
      "mu": 6,
      "sd": 3,
      "n": 20,
      "value": 6.218106049053424
    },
    {
      "group": "Epsilon",
      "subgroup": "B",
      "mu": 6,
      "sd": 3,
      "n": 20,
      "value": 7.519688427240696
    }
  ]
  return (
    <CCard>
      <CCardHeader>
        <h4>Nivo Box Plot</h4>
      </CCardHeader>
      <CCardBody style={{height:'600px', width:'500px'}}>
      <ResponsiveBoxPlot data={boxPlotData}/>
      </CCardBody>
    </CCard>
  )
}