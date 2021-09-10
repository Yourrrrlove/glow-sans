const zh_CN_WIN = 0x0804, zh_HK_WIN = 0x0C04, zh_MO_WIN = 0x1404,
  zh_SG_WIN = 0x1004, zh_TW_WIN = 0x0404, ja_WIN = 0x0411;

const UNICODE=0, MACINTOSH=1, ISO=2, WINDOWS=3, CUSTOM=4;

const copyrightNotice   = 0,  familyName        = 1,
      subfamilyName     = 2,  identifier        = 3,
      fullName          = 4,  versionStr        = 5,
      psName            = 6,  trademark         = 7,
      manufacturer      = 8,  designer          = 9,
      description       = 10, urlVendor         = 11,
      urlDesigner       = 12, licenseDesc       = 13,
      urlLicense        = 14, 
      typoFamilyName    = 16, typoSubfamilyName = 17,
                              sampleText        = 19;

function record(nameID, nameString, 
{ languageID = 0x0409, platformID = WINDOWS, encodingID = 1 } = {}) { 
  return ({ platformID, encodingID, languageID, nameID, nameString }); }

if (typeof(btoa) === 'undefined') {
  function btoa (str) {
    return Buffer.from(str, 'binary').toString('base64')
  }
}

const designerStr = 'Ryoko NISHIZUKA (kana, bopomofo & ideographs); Paul D. Hunt (Latin, Greek & Cyrillic); Sandoll Communications, Soo-young JANG & Joo-yeon KANG (hangul elements, letters & syllables); Glow Sans is built by Celestial Phineas.';
const descriptionStr = 'Source Han Sans is built by Dr. Ken Lunde (project architect, glyph set definition & overall production); Masataka HATTORI (production & ideograph elements)';
const licenseDescStr = 'This Font Software is licensed under the SIL Open Font License, Version 1.1. This Font Software is distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the SIL Open Font License for the specific language, permissions and limitations governing your use of this Font Software.';

/** Get the `name` table
 * @param { 'SC'|'TC'|'J' } langStr Language string
 * @param { string } weightStr      Font weight string
 * @param { string } widthStr       Font width string
 * @param { string } verStr         Font version string */
function getTable (langStr, weightStr, widthStr, verStr) {
  const postFamilyName = [ 'Regular', 'Bold' ].includes(weightStr) ? '' : ` ${weightStr}`;
  const macConfig = { languageID: 0, encodingID: 0, platformID: MACINTOSH };
  const macScConfig = { languageID: 33, encodingID: 25, platformID: MACINTOSH };
  const macTcConfig = { languageID: 19, encodingID: 2, platformID: MACINTOSH };
  const macJConfig = { languageID: 11, encodingID: 1, platformID: MACINTOSH };

  const name = [
    record(copyrightNotice,   'Glow Sans (c) 2021 Project Welai', macConfig),
    record(familyName,        `Glow Sans ${langStr} ${widthStr}`, macConfig),
    record(subfamilyName,     `${weightStr}`, macConfig),
    record(identifier,        `${verStr};WELA;GlowSans${langStr}-${widthStr}-${weightStr}`, macConfig),
    record(fullName,          `Glow Sans ${langStr} ${widthStr} ${weightStr}`, macConfig),
    record(versionStr,        `Version ${verStr}`, macConfig),
    record(psName,            `GlowSans${langStr}-${widthStr}-${weightStr}`, macConfig),
    record(designer,          designerStr, macConfig),
    record(description,       descriptionStr, macConfig),
    record(urlVendor,         'https://github.com/welai', macConfig),
    record(urlDesigner,       'https://github.com/celestialphineas', macConfig),
    record(licenseDesc,       licenseDescStr, macConfig),
    record(urlLicense,        'http://scripts.sil.org/OFL', macConfig),
    record(typoFamilyName,    `Glow Sans ${langStr}`, macConfig),
    record(typoSubfamilyName, `${widthStr} ${weightStr}`, macConfig),

    record(copyrightNotice,   'Glow Sans (c) 2021 Project Welai'),
    record(familyName,        `Glow Sans ${langStr} ${widthStr}${postFamilyName}`),
    record(subfamilyName,     weightStr === 'Bold' ? 'Bold' : 'Regular'),
    record(identifier,        `${verStr};WELA;GlowSans${langStr}-${widthStr}-${weightStr}`),
    record(fullName,          `Glow Sans ${langStr} ${widthStr} ${weightStr}`),
    record(versionStr,        `Version ${verStr}`),
    record(psName,            `GlowSans${langStr}-${widthStr}-${weightStr}`),
    record(designer,          designerStr),
    record(description,       descriptionStr),
    record(urlVendor,         'https://github.com/welai'),
    record(urlDesigner,       'https://github.com/celestialphineas'),
    record(licenseDesc,       licenseDescStr),
    record(urlLicense,        'http://scripts.sil.org/OFL'),
    record(typoFamilyName,    `Glow Sans ${langStr}`),
    record(typoSubfamilyName, `${widthStr} ${weightStr}`),
    record(sampleText,        '青青子衿，悠悠我心。縱我不往，子寧不嗣音？')
  ];

  switch (langStr) {
    case 'SC': name.push(
      record(familyName,        btoa(`\xCE\xB4\xC0\xB4\xD3\xAB\xBA\xDA ${widthStr}`), macScConfig),
      record(subfamilyName,     btoa(weightStr), macScConfig),
      record(fullName,          btoa(`\xCE\xB4\xC0\xB4\xD3\xAB\xBA\xDA ${widthStr} ${weightStr}`), macScConfig),
      record(typoFamilyName,    btoa(`\xCE\xB4\xC0\xB4\xD3\xAB\xBA\xDA`), macScConfig),
      record(typoSubfamilyName, btoa(`${widthStr} ${weightStr}`), macScConfig),

      record(familyName,        `未来荧黑 ${widthStr}${postFamilyName}`,      { languageID: zh_CN_WIN }),
      record(subfamilyName,     weightStr === 'Bold' ? 'Bold' : 'Regular',  { languageID: zh_CN_WIN }),
      record(fullName,          `未来荧黑 ${widthStr} ${weightStr}`,          { languageID: zh_CN_WIN }),
      record(typoFamilyName,    `未来荧黑`,                                   { languageID: zh_CN_WIN }),
      record(typoSubfamilyName, `${widthStr} ${weightStr}`,                 { languageID: zh_CN_WIN })
    ); break;

    case 'TC': name.push(
      record(familyName,        btoa(`\xA5\xBC\xA8\xD3\xBA\xB7\xB6\xC2 ${widthStr}`), macTcConfig),
      record(subfamilyName,     btoa(weightStr), macTcConfig),
      record(fullName,          btoa(`\xA5\xBC\xA8\xD3\xBA\xB7\xB6\xC2 ${widthStr} ${weightStr}`), macTcConfig),
      record(typoFamilyName,    btoa(`\xA5\xBC\xA8\xD3\xBA\xB7\xB6\xC2`), macTcConfig),
      record(typoSubfamilyName, btoa(`${widthStr} ${weightStr}`), macTcConfig),

      record(familyName,        `未來熒黑 ${widthStr}${postFamilyName}`,       { languageID: zh_TW_WIN }),
      record(subfamilyName,     weightStr === 'Bold' ? 'Bold' : 'Regular',  { languageID: zh_TW_WIN }),
      record(fullName,          `未來熒黑 ${widthStr} ${weightStr}`,          { languageID: zh_TW_WIN }),
      record(typoFamilyName,    `未來熒黑`,                                   { languageID: zh_TW_WIN }),
      record(typoSubfamilyName, `${widthStr} ${weightStr}`,                 { languageID: zh_TW_WIN })
    ); break;

    case 'J': name.push(
      record(familyName,        btoa(`\x83\x71\x83\x4A\x83\x8A\x8A\x70\x83\x53 ${widthStr}`), macJConfig),
      record(subfamilyName,     btoa(weightStr), macJConfig),
      record(fullName,          btoa(`\x83\x71\x83\x4A\x83\x8A\x8A\x70\x83\x53 ${widthStr} ${weightStr}`), macJConfig),
      record(typoFamilyName,    btoa(`\x83\x71\x83\x4A\x83\x8A\x8A\x70\x83\x53`), macJConfig),
      record(typoSubfamilyName, btoa(`${widthStr} ${weightStr}`), macJConfig),

      record(familyName,        `ヒカリ角ゴ ${widthStr}${postFamilyName}`,    { languageID: ja_WIN }),
      record(subfamilyName,     weightStr === 'Bold' ? 'Bold' : 'Regular',  { languageID: ja_WIN }),
      record(fullName,          `ヒカリ角ゴ ${widthStr} ${weightStr}`,        { languageID: ja_WIN }),
      record(typoFamilyName,    `ヒカリ角ゴ`,                                 { languageID: ja_WIN }),
      record(typoSubfamilyName, `${widthStr} ${weightStr}`,                 { languageID: ja_WIN })
    ); break;

    default: throw Error(`Unimplemented language for ${langStr}`);
  }
  return name;
}

module.exports = getTable;