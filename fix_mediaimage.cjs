const fs = require('fs');
let code = fs.readFileSync('src/components/MediaImage.tsx', 'utf8');
code = code.replace('export default function MediaImage({ mediaId, role = \'detail\', className = \'\', priority = false }: {', 
  'export default function MediaImage({ mediaId, role = \'detail\', className = \'\', priority = false }: {\n  mediaId?: string; role?: MediaRole; className?: string; priority?: boolean\n}) {\n  if (!mediaId) return null;\n/*');
code = code.replace('mediaId: string; role?: MediaRole; className?: string; priority?: boolean\n}) {', '*/');
fs.writeFileSync('src/components/MediaImage.tsx', code);
