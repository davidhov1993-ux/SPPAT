const fs = require('fs');
let types = fs.readFileSync('src/content/types.ts', 'utf8');
if (!types.includes('mediaId?: string')) {
  types = types.replace(/cards\?: any\[\]/, "cards?: any[]\n  mediaId?: string\n  Type?: string\n  CTA?: string\n  'CTA URL'?: string");
  fs.writeFileSync('src/content/types.ts', types);
}

let hub = fs.readFileSync('src/pages/TegelwerkHubPage.tsx', 'utf8');
hub = hub.replace(/import \{ serviceMedia \} from '\.\.\/data\/media'/g, "");
hub = hub.replace(/const pricingSection = page\.sections\.find\(s => s\.H2 && s\.H2\.includes\('Prijzen'\)\)/g, "");
hub = hub.replace(/<MediaImage mediaId=\{technicalProof.mediaId\} /g, '<MediaImage mediaId={technicalProof.mediaId as string} ');
hub = hub.replace(/<MediaCaption mediaId=\{technicalProof.mediaId\} \/>/g, '<MediaCaption mediaId={technicalProof.mediaId as string} />');
hub = hub.replace(/<MediaImage mediaId=\{asymmetrical.mediaId\} /g, '<MediaImage mediaId={asymmetrical.mediaId as string} ');
hub = hub.replace(/<MediaCaption mediaId=\{asymmetrical.mediaId\} \/>/g, '<MediaCaption mediaId={asymmetrical.mediaId as string} />');
fs.writeFileSync('src/pages/TegelwerkHubPage.tsx', hub);

['src/pages/SpecialisatiesNestedPage.tsx', 'src/pages/TegelwerkServicePage.tsx'].forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/section\.mediaId/g, '(section.mediaId as string)');
  fs.writeFileSync(file, content);
});

