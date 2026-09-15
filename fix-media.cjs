const fs = require('fs');
const media = JSON.parse(fs.readFileSync('src/content/media.json', 'utf8'));
if (!media.find(m => m.id === 'kennisbank-laser')) {
  media.push({
    "id": "kennisbank-laser",
    "source": "media/source/references/AEAB080F-23E5-4856-8806-039B4F1FEF85.JPG",
    "sourceFilename": "AEAB080F-23E5-4856-8806-039B4F1FEF85.JPG",
    "exportName": "SPPAT-KB-LASER",
    "width": 3840,
    "height": 2160,
    "provenance": "licensed-reference",
    "ownerVerified": false,
    "publicationRightsConfirmed": false,
    "group": "KB",
    "groupingConfirmed": true,
    "alt": "Laser alignment in bathroom",
    "focus": {
      "desktop": "50% 50%",
      "mobile": "50% 50%"
    },
    "crops": {
      "hero": {
        "desktop": "4 / 5",
        "mobile": "4 / 5"
      }
    }
  });
  fs.writeFileSync('src/content/media.json', JSON.stringify(media, null, 2));
}
