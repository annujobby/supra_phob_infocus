import { TruGlow } from "../truglow";
import { useImage } from "../hooks";

// const TruGlowArray = () => {
//   const [AA0, AA0S] = useImage(TruGlow[0]);
//   const [AA1, AA1S] = useImage(TruGlow[1]);
//   const [AA2, AA2S] = useImage(TruGlow[2]);
//   const [AA3, AA3S] = useImage(TruGlow[3]);
//   const [AA4, AA4S] = useImage(TruGlow[4]);
//   const [AA5, AA5S] = useImage(TruGlow[5]);
//   const [AA6, AA6S] = useImage(TruGlow[6]);
//   const [AA7, AA7S] = useImage(TruGlow[7]);
//   const [AA8, AA8S] = useImage(TruGlow[8]);
//   const [AA9, AA9S] = useImage(TruGlow[9]);

//   const [AA10, AA10S] = useImage(TruGlow[10]);
//   const [AA11, AA11S] = useImage(TruGlow[11]);
//   const [AA12, AA12S] = useImage(TruGlow[12]);
//   const [AA13, AA13S] = useImage(TruGlow[13]);
//   const [AA14, AA14S] = useImage(TruGlow[14]);
//   const [AA15, AA15S] = useImage(TruGlow[15]);
//   const [AA16, AA16S] = useImage(TruGlow[16]);
//   const [AA17, AA17S] = useImage(TruGlow[17]);
//   const [AA18, AA18S] = useImage(TruGlow[18]);
//   const [AA19, AA19S] = useImage(TruGlow[19]);

//   const [AA20, AA20S] = useImage(TruGlow[20]);
//   const [AA21, AA21S] = useImage(TruGlow[21]);
//   const [AA22, AA22S] = useImage(TruGlow[22]);
//   const [AA23, AA23S] = useImage(TruGlow[23]);
//   const [AA24, AA24S] = useImage(TruGlow[24]);
//   const [AA25, AA25S] = useImage(TruGlow[25]);
//   const [AA26, AA26S] = useImage(TruGlow[26]);
//   const [AA27, AA27S] = useImage(TruGlow[27]);
//   const [AA28, AA28S] = useImage(TruGlow[28]);
//   const [AA29, AA29S] = useImage(TruGlow[29]);

//   const [AA30, AA30S] = useImage(TruGlow[30]);
//   const [AA31, AA31S] = useImage(TruGlow[31]);
//   const [AA32, AA32S] = useImage(TruGlow[32]);
//   const [AA33, AA33S] = useImage(TruGlow[33]);
//   const [AA34, AA34S] = useImage(TruGlow[34]);
//   const [AA35, AA35S] = useImage(TruGlow[35]);
//   const [AA36, AA36S] = useImage(TruGlow[36]);
//   const [AA37, AA37S] = useImage(TruGlow[37]);
//   const [AA38, AA38S] = useImage(TruGlow[38]);
//   const [AA39, AA39S] = useImage(TruGlow[39]);

//   const [AA40, AA40S] = useImage(TruGlow[40]);
//   const [AA41, AA41S] = useImage(TruGlow[41]);
//   const [AA42, AA42S] = useImage(TruGlow[42]);
//   const [AA43, AA43S] = useImage(TruGlow[43]);
//   const [AA44, AA44S] = useImage(TruGlow[44]);
//   const [AA45, AA45S] = useImage(TruGlow[45]);
//   const [AA46, AA46S] = useImage(TruGlow[46]);
//   const [AA47, AA47S] = useImage(TruGlow[47]);
//   const [AA48, AA48S] = useImage(TruGlow[48]);
//   const [AA49, AA49S] = useImage(TruGlow[49]);

//   const [AA50, AA50S] = useImage(TruGlow[50]);
//   const [AA51, AA51S] = useImage(TruGlow[51]);
//   const [AA52, AA52S] = useImage(TruGlow[52]);
//   const [AA53, AA53S] = useImage(TruGlow[53]);
//   const [AA54, AA54S] = useImage(TruGlow[54]);
//   const [AA55, AA55S] = useImage(TruGlow[55]);
//   const [AA56, AA56S] = useImage(TruGlow[56]);
//   const [AA57, AA57S] = useImage(TruGlow[57]);
//   const [AA58, AA58S] = useImage(TruGlow[58]);
//   const [AA59, AA59S] = useImage(TruGlow[59]);

//   const [AA60, AA60S] = useImage(TruGlow[60]);
//   const [AA61, AA61S] = useImage(TruGlow[61]);
//   const [AA62, AA62S] = useImage(TruGlow[62]);
//   const [AA63, AA63S] = useImage(TruGlow[63]);
//   const [AA64, AA64S] = useImage(TruGlow[64]);
//   const [AA65, AA65S] = useImage(TruGlow[65]);
//   const [AA66, AA66S] = useImage(TruGlow[66]);
//   const [AA67, AA67S] = useImage(TruGlow[67]);
//   const [AA68, AA68S] = useImage(TruGlow[68]);
//   const [AA69, AA69S] = useImage(TruGlow[69]);

//   const [AA70, AA70S] = useImage(TruGlow[70]);
//   const [AA71, AA71S] = useImage(TruGlow[71]);
//   const [AA72, AA72S] = useImage(TruGlow[72]);
//   const [AA73, AA73S] = useImage(TruGlow[73]);
//   const [AA74, AA74S] = useImage(TruGlow[74]);
//   const [AA75, AA75S] = useImage(TruGlow[75]);
//   const [AA76, AA76S] = useImage(TruGlow[76]);
//   const [AA77, AA77S] = useImage(TruGlow[77]);
//   const [AA78, AA78S] = useImage(TruGlow[78]);
//   const [AA79, AA79S] = useImage(TruGlow[79]);

//   const [AA80, AA80S] = useImage(TruGlow[80]);
//   const [AA81, AA81S] = useImage(TruGlow[81]);
//   const [AA82, AA82S] = useImage(TruGlow[82]);
//   const [AA83, AA83S] = useImage(TruGlow[83]);
//   const [AA84, AA84S] = useImage(TruGlow[84]);
//   const [AA85, AA85S] = useImage(TruGlow[85]);
//   const [AA86, AA86S] = useImage(TruGlow[86]);
//   const [AA87, AA87S] = useImage(TruGlow[87]);
//   const [AA88, AA88S] = useImage(TruGlow[88]);
//   const [AA89, AA89S] = useImage(TruGlow[89]);

//   const [AA90, AA90S] = useImage(TruGlow[90]);
//   const [AA91, AA91S] = useImage(TruGlow[91]);
//   const [AA92, AA92S] = useImage(TruGlow[92]);
//   const [AA93, AA93S] = useImage(TruGlow[93]);
//   const [AA94, AA94S] = useImage(TruGlow[94]);
//   const [AA95, AA95S] = useImage(TruGlow[95]);
//   const [AA96, AA96S] = useImage(TruGlow[96]);
//   const [AA97, AA97S] = useImage(TruGlow[97]);
//   const [AA98, AA98S] = useImage(TruGlow[98]);
//   const [AA99, AA99S] = useImage(TruGlow[99]);

//   const [AA100, AA100S] = useImage(TruGlow[100]);
//   const [AA101, AA101S] = useImage(TruGlow[101]);
//   const [AA102, AA102S] = useImage(TruGlow[102]);
//   const [AA103, AA103S] = useImage(TruGlow[103]);
//   const [AA104, AA104S] = useImage(TruGlow[104]);
//   const [AA105, AA105S] = useImage(TruGlow[105]);
//   const [AA106, AA106S] = useImage(TruGlow[106]);
//   const [AA107, AA107S] = useImage(TruGlow[107]);
//   const [AA108, AA108S] = useImage(TruGlow[108]);
//   const [AA109, AA109S] = useImage(TruGlow[109]);

//   const [AA110, AA110S] = useImage(TruGlow[110]);
//   const [AA111, AA111S] = useImage(TruGlow[111]);
//   const [AA112, AA112S] = useImage(TruGlow[112]);
//   const [AA113, AA113S] = useImage(TruGlow[113]);
//   const [AA114, AA114S] = useImage(TruGlow[114]);
//   const [AA115, AA115S] = useImage(TruGlow[115]);
//   const [AA116, AA116S] = useImage(TruGlow[116]);
//   const [AA117, AA117S] = useImage(TruGlow[117]);
//   const [AA118, AA118S] = useImage(TruGlow[118]);
//   const [AA119, AA119S] = useImage(TruGlow[119]);

//   const [AA120, AA120S] = useImage(TruGlow[120]);
//   const [AA121, AA121S] = useImage(TruGlow[121]);
//   const [AA122, AA122S] = useImage(TruGlow[122]);
//   const [AA123, AA123S] = useImage(TruGlow[123]);
//   const [AA124, AA124S] = useImage(TruGlow[124]);
//   const [AA125, AA125S] = useImage(TruGlow[125]);
//   const [AA126, AA126S] = useImage(TruGlow[126]);
//   const [AA127, AA127S] = useImage(TruGlow[127]);
//   const [AA128, AA128S] = useImage(TruGlow[128]);
//   const [AA129, AA129S] = useImage(TruGlow[129]);

//   const [AA130, AA130S] = useImage(TruGlow[130]);
//   const [AA131, AA131S] = useImage(TruGlow[131]);
//   const [AA132, AA132S] = useImage(TruGlow[132]);
//   const [AA133, AA133S] = useImage(TruGlow[133]);
//   const [AA134, AA134S] = useImage(TruGlow[134]);
//   const [AA135, AA135S] = useImage(TruGlow[135]);
//   const [AA136, AA136S] = useImage(TruGlow[136]);
//   const [AA137, AA137S] = useImage(TruGlow[137]);
//   const [AA138, AA138S] = useImage(TruGlow[138]);
//   const [AA139, AA139S] = useImage(TruGlow[139]);

//   const [AA140, AA140S] = useImage(TruGlow[140]);
//   const [AA141, AA141S] = useImage(TruGlow[141]);
//   const [AA142, AA142S] = useImage(TruGlow[142]);
//   const [AA143, AA143S] = useImage(TruGlow[143]);
//   const [AA144, AA144S] = useImage(TruGlow[144]);
//   const [AA145, AA145S] = useImage(TruGlow[145]);
//   const [AA146, AA146S] = useImage(TruGlow[146]);
//   const [AA147, AA147S] = useImage(TruGlow[147]);
//   const [AA148, AA148S] = useImage(TruGlow[148]);
//   const [AA149, AA149S] = useImage(TruGlow[149]);

//   const [AA150, AA150S] = useImage(TruGlow[150]);
//   const [AA151, AA151S] = useImage(TruGlow[151]);
//   const [AA152, AA152S] = useImage(TruGlow[152]);
//   const [AA153, AA153S] = useImage(TruGlow[153]);
//   const [AA154, AA154S] = useImage(TruGlow[154]);
//   const [AA155, AA155S] = useImage(TruGlow[155]);
//   const [AA156, AA156S] = useImage(TruGlow[156]);
//   const [AA157, AA157S] = useImage(TruGlow[157]);
//   const [AA158, AA158S] = useImage(TruGlow[158]);
//   const [AA159, AA159S] = useImage(TruGlow[159]);

//   const [AA160, AA160S] = useImage(TruGlow[160]);
//   const [AA161, AA161S] = useImage(TruGlow[161]);
//   const [AA162, AA162S] = useImage(TruGlow[162]);
//   const [AA163, AA163S] = useImage(TruGlow[163]);
//   const [AA164, AA164S] = useImage(TruGlow[164]);
//   const [AA165, AA165S] = useImage(TruGlow[165]);
//   const [AA166, AA166S] = useImage(TruGlow[166]);
//   const [AA167, AA167S] = useImage(TruGlow[167]);
//   const [AA168, AA168S] = useImage(TruGlow[168]);
//   const [AA169, AA169S] = useImage(TruGlow[169]);

//   const [AA170, AA170S] = useImage(TruGlow[170]);
//   const [AA171, AA171S] = useImage(TruGlow[171]);
//   const [AA172, AA172S] = useImage(TruGlow[172]);
//   const [AA173, AA173S] = useImage(TruGlow[173]);
//   const [AA174, AA174S] = useImage(TruGlow[174]);
//   const [AA175, AA175S] = useImage(TruGlow[175]);
//   const [AA176, AA176S] = useImage(TruGlow[176]);

//   const newImages = Array.of(
//     [AA0, AA0S],
//     [AA1, AA1S],
//     [AA2, AA2S],
//     [AA3, AA3S],
//     [AA4, AA4S],
//     [AA5, AA5S],
//     [AA6, AA6S],
//     [AA7, AA7S],
//     [AA8, AA8S],
//     [AA9, AA9S],
//     [AA10, AA10S],
//     [AA11, AA11S],
//     [AA12, AA12S],
//     [AA13, AA13S],
//     [AA14, AA14S],
//     [AA15, AA15S],
//     [AA16, AA16S],
//     [AA17, AA17S],
//     [AA18, AA18S],
//     [AA19, AA19S],
//     [AA20, AA20S],
//     [AA21, AA21S],
//     [AA22, AA22S],
//     [AA23, AA23S],
//     [AA24, AA24S],
//     [AA25, AA25S],
//     [AA26, AA26S],
//     [AA27, AA27S],
//     [AA28, AA28S],
//     [AA29, AA29S],

//     [AA30, AA30S],
//     [AA31, AA31S],
//     [AA32, AA32S],
//     [AA33, AA33S],
//     [AA34, AA34S],
//     [AA35, AA35S],
//     [AA36, AA36S],
//     [AA37, AA37S],
//     [AA38, AA38S],
//     [AA39, AA39S],

//     [AA40, AA40S],
//     [AA41, AA41S],
//     [AA42, AA42S],
//     [AA43, AA43S],
//     [AA44, AA44S],
//     [AA45, AA45S],
//     [AA46, AA46S],
//     [AA47, AA47S],
//     [AA48, AA48S],
//     [AA49, AA49S],

//     [AA50, AA50S],
//     [AA51, AA51S],
//     [AA52, AA52S],
//     [AA53, AA53S],
//     [AA54, AA54S],
//     [AA55, AA55S],
//     [AA56, AA56S],
//     [AA57, AA57S],
//     [AA58, AA58S],
//     [AA59, AA59S],

//     [AA60, AA60S],
//     [AA61, AA61S],
//     [AA62, AA62S],
//     [AA63, AA63S],
//     [AA64, AA64S],
//     [AA65, AA65S],
//     [AA66, AA66S],
//     [AA67, AA67S],
//     [AA68, AA68S],
//     [AA69, AA69S],

//     [AA70, AA70S],
//     [AA71, AA71S],
//     [AA72, AA72S],
//     [AA73, AA73S],
//     [AA74, AA74S],
//     [AA75, AA75S],
//     [AA76, AA76S],
//     [AA77, AA77S],
//     [AA78, AA78S],
//     [AA79, AA79S],

//     [AA80, AA80S],
//     [AA81, AA81S],
//     [AA82, AA82S],
//     [AA83, AA83S],
//     [AA84, AA84S],
//     [AA85, AA85S],
//     [AA86, AA86S],
//     [AA87, AA87S],
//     [AA88, AA88S],
//     [AA89, AA89S],

//     [AA90, AA90S],
//     [AA91, AA91S],
//     [AA92, AA92S],
//     [AA93, AA93S],
//     [AA94, AA94S],
//     [AA95, AA95S],
//     [AA96, AA96S],
//     [AA97, AA97S],
//     [AA98, AA98S],
//     [AA99, AA99S],

//     [AA100, AA100S],
//     [AA101, AA101S],
//     [AA102, AA102S],
//     [AA103, AA103S],
//     [AA104, AA104S],
//     [AA105, AA105S],
//     [AA106, AA106S],
//     [AA107, AA107S],
//     [AA108, AA108S],
//     [AA109, AA109S],

//     [AA110, AA110S],
//     [AA111, AA111S],
//     [AA112, AA112S],
//     [AA113, AA113S],
//     [AA114, AA114S],
//     [AA115, AA115S],
//     [AA116, AA116S],
//     [AA117, AA117S],
//     [AA118, AA118S],
//     [AA119, AA119S],

//     [AA120, AA120S],
//     [AA121, AA121S],
//     [AA122, AA122S],
//     [AA123, AA123S],
//     [AA124, AA124S],
//     [AA125, AA125S],
//     [AA126, AA126S],
//     [AA127, AA127S],
//     [AA128, AA128S],
//     [AA129, AA129S],

//     [AA130, AA130S],
//     [AA131, AA131S],
//     [AA132, AA132S],
//     [AA133, AA133S],
//     [AA134, AA134S],
//     [AA135, AA135S],
//     [AA136, AA136S],
//     [AA137, AA137S],
//     [AA138, AA138S],
//     [AA139, AA139S],

//     [AA140, AA140S],
//     [AA141, AA141S],
//     [AA142, AA142S],
//     [AA143, AA143S],
//     [AA144, AA144S],
//     [AA145, AA145S],
//     [AA146, AA146S],
//     [AA147, AA147S],
//     [AA148, AA148S],
//     [AA149, AA149S],

//     [AA150, AA150S],
//     [AA151, AA151S],
//     [AA152, AA152S],
//     [AA153, AA153S],
//     [AA154, AA154S],
//     [AA155, AA155S],
//     [AA156, AA156S],
//     [AA157, AA157S],
//     [AA158, AA158S],
//     [AA159, AA159S],

//     [AA160, AA160S],
//     [AA161, AA161S],
//     [AA162, AA162S],
//     [AA163, AA163S],
//     [AA164, AA164S],
//     [AA165, AA165S],
//     [AA166, AA166S],
//     [AA167, AA167S],
//     [AA168, AA168S],
//     [AA169, AA169S],

//     [AA170, AA170S],
//     [AA171, AA171S],
//     [AA172, AA172S],
//     [AA173, AA173S],
//     [AA174, AA174S],
//     [AA175, AA175S],
//     [AA176, AA176S]
//   );
//   return newImages;
// };

const TruGlowArray = () => {
  // const [AA0, AA0S] = useImage(TruGlow[0]);
  const [AA1, AA1S] = useImage(TruGlow[1]);
  const [AA2, AA2S] = useImage(TruGlow[2]);
  const [AA3, AA3S] = useImage(TruGlow[3]);
  const [AA4, AA4S] = useImage(TruGlow[4]);
  const [AA5, AA5S] = useImage(TruGlow[5]);
  const [AA6, AA6S] = useImage(TruGlow[6]);
  const [AA7, AA7S] = useImage(TruGlow[7]);
  const [AA8, AA8S] = useImage(TruGlow[8]);
  const [AA9, AA9S] = useImage(TruGlow[9]);

  const [AA10, AA10S] = useImage(TruGlow[10]);
  const [AA11, AA11S] = useImage(TruGlow[11]);
  const [AA12, AA12S] = useImage(TruGlow[12]);
  const [AA13, AA13S] = useImage(TruGlow[13]);
  const [AA14, AA14S] = useImage(TruGlow[14]);
  const [AA15, AA15S] = useImage(TruGlow[15]);
  const [AA16, AA16S] = useImage(TruGlow[16]);
  const [AA17, AA17S] = useImage(TruGlow[17]);
  const [AA18, AA18S] = useImage(TruGlow[18]);
  const [AA19, AA19S] = useImage(TruGlow[19]);

  const [AA20, AA20S] = useImage(TruGlow[20]);
  const [AA21, AA21S] = useImage(TruGlow[21]);
  const [AA22, AA22S] = useImage(TruGlow[22]);
  const [AA23, AA23S] = useImage(TruGlow[23]);
  const [AA24, AA24S] = useImage(TruGlow[24]);
  const [AA25, AA25S] = useImage(TruGlow[25]);
  const [AA26, AA26S] = useImage(TruGlow[26]);
  const [AA27, AA27S] = useImage(TruGlow[27]);
  const [AA28, AA28S] = useImage(TruGlow[28]);
  const [AA29, AA29S] = useImage(TruGlow[29]);

  const [AA30, AA30S] = useImage(TruGlow[30]);
  const [AA31, AA31S] = useImage(TruGlow[31]);
  const [AA32, AA32S] = useImage(TruGlow[32]);
  const [AA33, AA33S] = useImage(TruGlow[33]);
  const [AA34, AA34S] = useImage(TruGlow[34]);
  const [AA35, AA35S] = useImage(TruGlow[35]);
  const [AA36, AA36S] = useImage(TruGlow[36]);
  const [AA37, AA37S] = useImage(TruGlow[37]);
  const [AA38, AA38S] = useImage(TruGlow[38]);
  const [AA39, AA39S] = useImage(TruGlow[39]);

  const [AA40, AA40S] = useImage(TruGlow[40]);
  const [AA41, AA41S] = useImage(TruGlow[41]);
  const [AA42, AA42S] = useImage(TruGlow[42]);
  const [AA43, AA43S] = useImage(TruGlow[43]);
  const [AA44, AA44S] = useImage(TruGlow[44]);
  const [AA45, AA45S] = useImage(TruGlow[45]);
  const [AA46, AA46S] = useImage(TruGlow[46]);
  const [AA47, AA47S] = useImage(TruGlow[47]);
  const [AA48, AA48S] = useImage(TruGlow[48]);
  const [AA49, AA49S] = useImage(TruGlow[49]);

  const [AA50, AA50S] = useImage(TruGlow[50]);
  const [AA51, AA51S] = useImage(TruGlow[51]);
  const [AA52, AA52S] = useImage(TruGlow[52]);
  const [AA53, AA53S] = useImage(TruGlow[53]);
  const [AA54, AA54S] = useImage(TruGlow[54]);
  const [AA55, AA55S] = useImage(TruGlow[55]);
  const [AA56, AA56S] = useImage(TruGlow[56]);
  const [AA57, AA57S] = useImage(TruGlow[57]);
  const [AA58, AA58S] = useImage(TruGlow[58]);
  const [AA59, AA59S] = useImage(TruGlow[59]);

  const [AA60, AA60S] = useImage(TruGlow[60]);
  const [AA61, AA61S] = useImage(TruGlow[61]);
  const [AA62, AA62S] = useImage(TruGlow[62]);
  const [AA63, AA63S] = useImage(TruGlow[63]);
  const [AA64, AA64S] = useImage(TruGlow[64]);
  const [AA65, AA65S] = useImage(TruGlow[65]);
  const [AA66, AA66S] = useImage(TruGlow[66]);
  const [AA67, AA67S] = useImage(TruGlow[67]);
  const [AA68, AA68S] = useImage(TruGlow[68]);
  const [AA69, AA69S] = useImage(TruGlow[69]);

  const [AA70, AA70S] = useImage(TruGlow[70]);
  const [AA71, AA71S] = useImage(TruGlow[71]);
  const [AA72, AA72S] = useImage(TruGlow[72]);
  const [AA73, AA73S] = useImage(TruGlow[73]);
  const [AA74, AA74S] = useImage(TruGlow[74]);
  const [AA75, AA75S] = useImage(TruGlow[75]);
  const [AA76, AA76S] = useImage(TruGlow[76]);
  const [AA77, AA77S] = useImage(TruGlow[77]);
  const [AA78, AA78S] = useImage(TruGlow[78]);
  const [AA79, AA79S] = useImage(TruGlow[79]);

  const [AA80, AA80S] = useImage(TruGlow[80]);
  const [AA81, AA81S] = useImage(TruGlow[81]);
  const [AA82, AA82S] = useImage(TruGlow[82]);
  const [AA83, AA83S] = useImage(TruGlow[83]);
  const [AA84, AA84S] = useImage(TruGlow[84]);
  const [AA85, AA85S] = useImage(TruGlow[85]);
  const [AA86, AA86S] = useImage(TruGlow[86]);
  const [AA87, AA87S] = useImage(TruGlow[87]);
  const [AA88, AA88S] = useImage(TruGlow[88]);
  const [AA89, AA89S] = useImage(TruGlow[89]);

  const [AA90, AA90S] = useImage(TruGlow[90]);
  const [AA91, AA91S] = useImage(TruGlow[91]);
  const [AA92, AA92S] = useImage(TruGlow[92]);
  const [AA93, AA93S] = useImage(TruGlow[93]);
  const [AA94, AA94S] = useImage(TruGlow[94]);
  const [AA95, AA95S] = useImage(TruGlow[95]);
  const [AA96, AA96S] = useImage(TruGlow[96]);
  const [AA97, AA97S] = useImage(TruGlow[97]);
  const [AA98, AA98S] = useImage(TruGlow[98]);
  const [AA99, AA99S] = useImage(TruGlow[99]);

  const [AA100, AA100S] = useImage(TruGlow[100]);
  const [AA101, AA101S] = useImage(TruGlow[101]);
  const [AA102, AA102S] = useImage(TruGlow[102]);
  const [AA103, AA103S] = useImage(TruGlow[103]);
  const [AA104, AA104S] = useImage(TruGlow[104]);
  const [AA105, AA105S] = useImage(TruGlow[105]);
  const [AA106, AA106S] = useImage(TruGlow[106]);
  const [AA107, AA107S] = useImage(TruGlow[107]);
  const [AA108, AA108S] = useImage(TruGlow[108]);
  const [AA109, AA109S] = useImage(TruGlow[109]);

  const [AA110, AA110S] = useImage(TruGlow[110]);
  const [AA111, AA111S] = useImage(TruGlow[111]);
  const [AA112, AA112S] = useImage(TruGlow[112]);
  const [AA113, AA113S] = useImage(TruGlow[113]);
  const [AA114, AA114S] = useImage(TruGlow[114]);
  const [AA115, AA115S] = useImage(TruGlow[115]);
  const [AA116, AA116S] = useImage(TruGlow[116]);
  const [AA117, AA117S] = useImage(TruGlow[117]);
  const [AA118, AA118S] = useImage(TruGlow[118]);
  const [AA119, AA119S] = useImage(TruGlow[119]);

  const [AA120, AA120S] = useImage(TruGlow[120]);
  const [AA121, AA121S] = useImage(TruGlow[121]);
  const [AA122, AA122S] = useImage(TruGlow[122]);
  const [AA123, AA123S] = useImage(TruGlow[123]);
  const [AA124, AA124S] = useImage(TruGlow[124]);
  const [AA125, AA125S] = useImage(TruGlow[125]);
  const [AA126, AA126S] = useImage(TruGlow[126]);
  const [AA127, AA127S] = useImage(TruGlow[127]);
  const [AA128, AA128S] = useImage(TruGlow[128]);
  const [AA129, AA129S] = useImage(TruGlow[129]);

  const [AA130, AA130S] = useImage(TruGlow[130]);
  const [AA131, AA131S] = useImage(TruGlow[131]);
  const [AA132, AA132S] = useImage(TruGlow[132]);
  const [AA133, AA133S] = useImage(TruGlow[133]);
  const [AA134, AA134S] = useImage(TruGlow[134]);
  const [AA135, AA135S] = useImage(TruGlow[135]);
  const [AA136, AA136S] = useImage(TruGlow[136]);
  const [AA137, AA137S] = useImage(TruGlow[137]);
  const [AA138, AA138S] = useImage(TruGlow[138]);
  const [AA139, AA139S] = useImage(TruGlow[139]);

  const [AA140, AA140S] = useImage(TruGlow[140]);
  const [AA141, AA141S] = useImage(TruGlow[141]);
  const [AA142, AA142S] = useImage(TruGlow[142]);
  const [AA143, AA143S] = useImage(TruGlow[143]);
  const [AA144, AA144S] = useImage(TruGlow[144]);
  const [AA145, AA145S] = useImage(TruGlow[145]);
  const [AA146, AA146S] = useImage(TruGlow[146]);
  const [AA147, AA147S] = useImage(TruGlow[147]);
  const [AA148, AA148S] = useImage(TruGlow[148]);
  const [AA149, AA149S] = useImage(TruGlow[149]);

  const [AA150, AA150S] = useImage(TruGlow[150]);
  const [AA151, AA151S] = useImage(TruGlow[151]);
  const [AA152, AA152S] = useImage(TruGlow[152]);
  const [AA153, AA153S] = useImage(TruGlow[153]);
  const [AA154, AA154S] = useImage(TruGlow[154]);
  const [AA155, AA155S] = useImage(TruGlow[155]);
  const [AA156, AA156S] = useImage(TruGlow[156]);
  const [AA157, AA157S] = useImage(TruGlow[157]);
  const [AA158, AA158S] = useImage(TruGlow[158]);
  const [AA159, AA159S] = useImage(TruGlow[159]);

  const [AA160, AA160S] = useImage(TruGlow[160]);
  const [AA161, AA161S] = useImage(TruGlow[161]);
  const [AA162, AA162S] = useImage(TruGlow[162]);
  const [AA163, AA163S] = useImage(TruGlow[163]);
  const [AA164, AA164S] = useImage(TruGlow[164]);
  const [AA165, AA165S] = useImage(TruGlow[165]);
  const [AA166, AA166S] = useImage(TruGlow[166]);
  const [AA167, AA167S] = useImage(TruGlow[167]);
  const [AA168, AA168S] = useImage(TruGlow[168]);
  const [AA169, AA169S] = useImage(TruGlow[169]);

  const [AA170, AA170S] = useImage(TruGlow[170]);
  const [AA171, AA171S] = useImage(TruGlow[171]);
  const [AA172, AA172S] = useImage(TruGlow[172]);
  const [AA173, AA173S] = useImage(TruGlow[173]);
  const [AA174, AA174S] = useImage(TruGlow[174]);
  const [AA175, AA175S] = useImage(TruGlow[175]);
  const [AA176, AA176S] = useImage(TruGlow[176]);
  const [AA177, AA177S] = useImage(TruGlow[177]);
  const [AA178, AA178S] = useImage(TruGlow[178]);
  const [AA179, AA179S] = useImage(TruGlow[179]);

  const [AA180, AA180S] = useImage(TruGlow[180]);
  const [AA181, AA181S] = useImage(TruGlow[181]);
  const [AA182, AA182S] = useImage(TruGlow[182]);
  const [AA183, AA183S] = useImage(TruGlow[183]);
  const [AA184, AA184S] = useImage(TruGlow[184]);
  const [AA185, AA185S] = useImage(TruGlow[185]);
  const [AA186, AA186S] = useImage(TruGlow[186]);
  const [AA187, AA187S] = useImage(TruGlow[187]);
  const [AA188, AA188S] = useImage(TruGlow[188]);
  const [AA189, AA189S] = useImage(TruGlow[189]);

  const [AA190, AA190S] = useImage(TruGlow[190]);
  const [AA191, AA191S] = useImage(TruGlow[191]);
  const [AA192, AA192S] = useImage(TruGlow[192]);
  const [AA193, AA193S] = useImage(TruGlow[193]);
  const [AA194, AA194S] = useImage(TruGlow[194]);
  const [AA195, AA195S] = useImage(TruGlow[195]);
  const [AA196, AA196S] = useImage(TruGlow[196]);
  const [AA197, AA197S] = useImage(TruGlow[197]);
  const [AA198, AA198S] = useImage(TruGlow[198]);
  const [AA199, AA199S] = useImage(TruGlow[199]);

  const [AA200, AA200S] = useImage(TruGlow[200]);
  const [AA201, AA201S] = useImage(TruGlow[201]);
  const [AA202, AA202S] = useImage(TruGlow[202]);
  const [AA203, AA203S] = useImage(TruGlow[203]);
  const [AA204, AA204S] = useImage(TruGlow[204]);
  const [AA205, AA205S] = useImage(TruGlow[205]);
  const [AA206, AA206S] = useImage(TruGlow[206]);
  const [AA207, AA207S] = useImage(TruGlow[207]);
  const [AA208, AA208S] = useImage(TruGlow[208]);
  const [AA209, AA209S] = useImage(TruGlow[209]);



  const newImages = Array.of(
    // [AA0, AA0S],
    [AA1, AA1S],
    [AA2, AA2S],
    [AA3, AA3S],
    [AA4, AA4S],
    [AA5, AA5S],
    [AA6, AA6S],
    [AA7, AA7S],
    [AA8, AA8S],
    [AA9, AA9S],
    [AA10, AA10S],
    [AA11, AA11S],
    [AA12, AA12S],
    [AA13, AA13S],
    [AA14, AA14S],
    [AA15, AA15S],
    [AA16, AA16S],
    [AA17, AA17S],
    [AA18, AA18S],
    [AA19, AA19S],
    [AA20, AA20S],
    [AA21, AA21S],
    [AA22, AA22S],
    [AA23, AA23S],
    [AA24, AA24S],
    [AA25, AA25S],
    [AA26, AA26S],
    [AA27, AA27S],
    [AA28, AA28S],
    [AA29, AA29S],
    [AA30, AA30S],
    [AA31, AA31S],
    [AA32, AA32S],
    [AA33, AA33S],
    [AA34, AA34S],
    [AA35, AA35S],
    [AA36, AA36S],
    [AA37, AA37S],
    [AA38, AA38S],
    [AA39, AA39S],
    [AA40, AA40S],
    [AA41, AA41S],
    [AA42, AA42S],
    [AA43, AA43S],
    [AA44, AA44S],
    [AA45, AA45S],
    [AA46, AA46S],
    [AA47, AA47S],
    [AA48, AA48S],
    [AA49, AA49S],
    [AA50, AA50S],
    [AA51, AA51S],
    [AA52, AA52S],
    [AA53, AA53S],
    [AA54, AA54S],
    [AA55, AA55S],
    [AA56, AA56S],
    [AA57, AA57S],
    [AA58, AA58S],
    [AA59, AA59S],
    [AA60, AA60S],
    [AA61, AA61S],
    [AA62, AA62S],
    [AA63, AA63S],
    [AA64, AA64S],
    [AA65, AA65S],
    [AA66, AA66S],
    [AA67, AA67S],
    [AA68, AA68S],
    [AA69, AA69S],
    [AA70, AA70S],
    [AA71, AA71S],
    [AA72, AA72S],
    [AA73, AA73S],
    [AA74, AA74S],
    [AA75, AA75S],
    [AA76, AA76S],
    [AA77, AA77S],
    [AA78, AA78S],
    [AA79, AA79S],
    [AA80, AA80S],
    [AA81, AA81S],
    [AA82, AA82S],
    [AA83, AA83S],
    [AA84, AA84S],
    [AA85, AA85S],
    [AA86, AA86S],
    [AA87, AA87S],
    [AA88, AA88S],
    [AA89, AA89S],
    [AA90, AA90S],
    [AA91, AA91S],
    [AA92, AA92S],
    [AA93, AA93S],
    [AA94, AA94S],
    [AA95, AA95S],
    [AA96, AA96S],
    [AA97, AA97S],
    [AA98, AA98S],
    [AA99, AA99S],
    [AA100, AA100S],
    [AA101, AA101S],
    [AA102, AA102S],
    [AA103, AA103S],
    [AA104, AA104S],
    [AA105, AA105S],
    [AA106, AA106S],
    [AA107, AA107S],
    [AA108, AA108S],
    [AA109, AA109S],
    [AA110, AA110S],
    [AA111, AA111S],
    [AA112, AA112S],
    [AA113, AA113S],
    [AA114, AA114S],
    [AA115, AA115S],
    [AA116, AA116S],
    [AA117, AA117S],
    [AA118, AA118S],
    [AA119, AA119S],
    [AA120, AA120S],
    [AA121, AA121S],
    [AA122, AA122S],
    [AA123, AA123S],
    [AA124, AA124S],
    [AA125, AA125S],
    [AA126, AA126S],
    [AA127, AA127S],
    [AA128, AA128S],
    [AA129, AA129S],
    [AA130, AA130S],
    [AA131, AA131S],
    [AA132, AA132S],
    [AA133, AA133S],
    [AA134, AA134S],
    [AA135, AA135S],
    [AA136, AA136S],
    [AA137, AA137S],
    [AA138, AA138S],
    [AA139, AA139S],
    [AA140, AA140S],
    [AA141, AA141S],
    [AA142, AA142S],
    [AA143, AA143S],
    [AA144, AA144S],
    [AA145, AA145S],
    [AA146, AA146S],
    [AA147, AA147S],
    [AA148, AA148S],
    [AA149, AA149S],
    [AA150, AA150S],
    [AA151, AA151S],
    [AA152, AA152S],
    [AA153, AA153S],
    [AA154, AA154S],
    [AA155, AA155S],
    [AA156, AA156S],
    [AA157, AA157S],
    [AA158, AA158S],
    [AA159, AA159S],
    [AA160, AA160S],
    [AA161, AA161S],
    [AA162, AA162S],
    [AA163, AA163S],
    [AA164, AA164S],
    [AA165, AA165S],
    [AA166, AA166S],
    [AA167, AA167S],
    [AA168, AA168S],
    [AA169, AA169S],
    [AA170, AA170S],
    [AA171, AA171S],
    [AA172, AA172S],
    [AA173, AA173S],
    [AA174, AA174S],
    [AA175, AA175S],
    [AA176, AA176S],
    [AA177, AA177S],
    [AA178, AA178S],
    [AA179, AA179S],
    [AA180, AA180S],
    [AA181, AA181S],
    [AA182, AA182S],
    [AA183, AA183S],
    [AA184, AA184S],
    [AA185, AA185S],
    [AA186, AA186S],
    [AA187, AA187S],
    [AA188, AA188S],
    [AA189, AA189S],
    [AA190, AA190S],
    [AA191, AA191S],
    [AA192, AA192S],
    [AA193, AA193S],
    [AA194, AA194S],
    [AA195, AA195S],
    [AA196, AA196S],
    [AA197, AA197S],
    [AA198, AA198S],
    [AA199, AA199S],
    [AA200, AA200S],
    [AA201, AA201S],
    [AA202, AA202S],
    [AA203, AA203S],
    [AA204, AA204S],
    [AA205, AA205S],
    [AA206, AA206S],
    [AA207, AA207S],
    [AA208, AA208S],
    [AA209, AA209S],
  );
  return newImages;
};

export default TruGlowArray;
