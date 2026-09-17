const fs = require('fs');
let code = fs.readFileSync('src/pages/ProjectsPage.tsx', 'utf8');

code = code.replace(/import \{ CtaTypeA \} from '\.\.\/components\/CtaSection'/, "import { CtaTypeB } from '../components/CtaSection'");
code = code.replace(/<CtaTypeA block=\{cta\} \/>/, "<CtaTypeB block={cta} />");

fs.writeFileSync('src/pages/ProjectsPage.tsx', code);
