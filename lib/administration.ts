import type {Copy} from './content';

type Section = {title: Copy; text: Copy};

export const administrationSections: Record<string, readonly Section[]> = {
  'first-lady': [
    {title:['Women’s economic inclusion','Ushiriki wa wanawake katika uchumi'],text:[
      'Through the Joyful Women Organization, Rachel Ruto has promoted table banking, a model in which members save together and borrow from a shared fund.',
      'Kupitia Joyful Women Organization, Rachel Ruto ameendeleza mpango unaowawezesha wanachama kuweka akiba pamoja na kukopa kutoka kwenye mfuko wa kikundi.',
    ]},
    {title:['MaMa Doing Good','MaMa Doing Good'],text:[
      'The organisation she founded brings together programmes on livelihoods, community welfare and environmental stewardship.',
      'Shirika aliloanzisha linaunganisha mipango ya kujipatia riziki, ustawi wa jamii na utunzaji wa mazingira.',
    ]},
    {title:['Children and families','Watoto na familia'],text:[
      'Her initiatives include advocacy for school meals and efforts to promote children’s protection and participation in decisions that affect them.',
      'Mipango yake inajumuisha utetezi wa chakula shuleni, ulinzi wa watoto na ushiriki wao katika maamuzi yanayowaathiri.',
    ]},
  ],
  'deputy-president': [
    {title:['Public service','Utumishi wa umma'],text:[
      'Before becoming Deputy President, Kithure Kindiki served as Cabinet Secretary for Interior and National Administration. He previously represented Tharaka Nithi County in the Senate.',
      'Kabla ya kuwa Naibu Rais, Kithure Kindiki alihudumu kama Waziri wa Usalama wa Ndani na Utawala wa Kitaifa. Awali aliwakilisha Kaunti ya Tharaka Nithi katika Seneti.',
    ]},
    {title:['Constitutional role','Wajibu wa kikatiba'],text:[
      'Under Article 147, the Deputy President is the President’s principal assistant. The Deputy President may act in the President’s place when required and carries out functions assigned by law or by the President.',
      'Chini ya Ibara ya 147, Naibu Rais ndiye msaidizi mkuu wa Rais. Anaweza kutekeleza majukumu ya Rais inapohitajika na hufanya kazi alizopewa kwa mujibu wa sheria au na Rais.',
    ]},
    {title:['Coordination across government','Uratibu wa shughuli za serikali'],text:[
      'The office can coordinate work across ministries and follow up on assigned government programmes.',
      'Ofisi hii inaweza kuratibu kazi kati ya wizara na kufuatilia utekelezaji wa mipango ya serikali iliyopewa.',
    ]},
  ],
  cabinet: [
    {title:['Who serves in Cabinet','Wajumbe wa Baraza la Mawaziri'],text:[
      'Article 152 provides for a Cabinet made up of the President, Deputy President, Attorney-General and between 14 and 22 Cabinet Secretaries. The President nominates Cabinet Secretaries and appoints them after approval by the National Assembly.',
      'Ibara ya 152 inaeleza kuwa Baraza linajumuisha Rais, Naibu Rais, Mwanasheria Mkuu na Mawaziri 14 hadi 22. Rais huwateua Mawaziri baada ya majina yao kuidhinishwa na Bunge la Kitaifa.',
    ]},
    {title:['Decisions and accountability','Maamuzi na uwajibikaji'],text:[
      'Article 153 requires Cabinet decisions to be recorded in writing. Cabinet Secretaries answer to the President for their work and appear before parliamentary committees when required.',
      'Ibara ya 153 inataka maamuzi ya Baraza yaandikwe. Mawaziri huwajibika kwa Rais kuhusu kazi zao na hufika mbele ya kamati za Bunge wanapohitajika.',
    ]},
    {title:['The Cabinet Secretariat','Sekretarieti ya Baraza la Mawaziri'],text:[
      'The Secretary to the Cabinet arranges Cabinet business, keeps minutes and conveys decisions to the relevant people or authorities.',
      'Katibu wa Baraza la Mawaziri hupanga shughuli za Baraza, huweka kumbukumbu za mikutano na hufikisha maamuzi kwa watu au mamlaka zinazohusika.',
    ]},
  ],
};
