"""Compile the approved pages from SPPAT_IMPLEMENTATION.md without rewriting copy."""
import json
import re
from pathlib import Path

SOURCE = Path('SPPAT_IMPLEMENTATION.md')
normalize = lambda value: re.sub(r'\s+', ' ', value).strip()
spec = SOURCE.read_text()
page_spec = spec.split('PAGINA CONTENT', 1)[1].split('BUSINESS INFORMATION REQUIRED FROM SPPAT', 1)[0]
notes = list(dict.fromkeys(re.findall(r'\[BUSINESS INPUT REQUIRED:.*?\]', normalize(spec))))


def clean(value):
    value = normalize(value)
    value = re.sub(r'\[BUSINESS INPUT REQUIRED:.*?\]\.?', '', value)
    return normalize(value).strip(' |')


def fields(raw):
    raw = re.sub(r'Card \d+ (Title|Body|CTA):', r'\1:', raw)
    raw = re.sub(r'Card \d+:', 'Title:', raw)
    names = r'Primary\s+CTA|Eyebrow|Title|Type|H1|H2|H3|Body|CTA|Button|URL|Visual|ALT|Filters|Formuliervelden|Telefoon|E-mail|KVK|Werkgebied'
    matches = list(re.finditer(r'(?<!\w)(' + names + r'):\s*', raw))
    result = {}
    for index, match in enumerate(matches):
        key = normalize(match[1])
        value = raw[match.end():matches[index + 1].start() if index + 1 < len(matches) else len(raw)]
        if key == 'Body':
            pieces = re.split(r'\n\s*- ', value)
            result[key] = clean(pieces[0])
            bullets = [clean(piece) for piece in pieces[1:]]
            # Retain factual general guidance even when followed by a business note.
            if any(bullets):
                result['bullets'] = [bullet for bullet in bullets if bullet]
        else:
            result[key] = clean(value)
    if result.get('H2', '').endswith('('):
        result['H2'] = result['H2'].removesuffix('(').strip()
    if 'Filters' in result:
        result['Filters'] = result['Filters'].rstrip(') ').strip()
    if 'Primary CTA' in result and 'URL' in result:
        result['Primary CTA URL'] = result.pop('URL')
    elif 'CTA' in result and 'URL' in result:
        result['CTA URL'] = result.pop('URL')
    return {key: value for key, value in result.items() if value}


pages = []
for raw in re.split(r'\nPAGINA: ', page_spec)[1:]:
    normalized = normalize(raw)
    name = normalize(raw.split('\n', 1)[0])
    metadata = re.search(r'URL: (\S+) SEO Title: (.*?) Meta Description: (.*?) Primary Keyword:', normalized)
    assert metadata, name
    page = {'name': name, 'url': metadata[1], 'title': metadata[2], 'description': metadata[3], 'sections': [], 'links': [], 'faq': []}
    chunks = re.split(r'\n(HERO|SECTION \d+:|FAQ|FINAL CTA)\s+', raw)
    for kind, content in zip(chunks[1::2], chunks[2::2]):
        if kind == 'HERO':
            page['hero'] = fields(content)
        elif kind == 'FINAL CTA':
            page['cta'] = fields(content)
        elif kind == 'FAQ':
            for question, answer in re.findall(r'Question:\s*(.*?)\s*Answer:\s*(.*?)(?=\s*Question:|\Z)', content, re.S):
                # An answer beginning with unknown business data cannot answer the question.
                if normalize(answer).startswith('[BUSINESS INPUT REQUIRED:'):
                    continue
                page['faq'].append({'question': normalize(question), 'answer': clean(answer)})
        elif kind.startswith('SECTION'):
            cards = re.split(r'\n\s*- (?=Card \d+)', content)
            block = {'id': kind.rstrip(':'), **fields(cards[0])}
            if len(cards) > 1:
                block['cards'] = [fields(card) for card in cards[1:]]
            page['sections'].append(block)
    if page['url'] == '/contact/':
        form = page['sections'][0]
        form['Body'] = form['Body'].split(' Wij streven ernaar binnen')[0]
        form.pop('Formuliervelden', None)
        contact = page['sections'][1]
        contact['Body'] = 'Werkgebied: ' + contact.pop('Werkgebied')
        for key in ['Telefoon', 'E-mail', 'KVK']:
            contact.pop(key, None)
    pages.append(page)

# The knowledge cards are specified by title; associate them with their approved article pages.
knowledge = next(page for page in pages if page['url'] == '/kennisbank/')
articles = [page for page in pages if page['name'].startswith('Kennisbank - ')]
assert len(articles) == len(knowledge['sections'][0]['cards']) == 4
for card, article in zip(knowledge['sections'][0]['cards'], articles):
    card['CTA URL'] = article['url']

# Link existing words only. No anchor text is rewritten or added to a paragraph.
link_targets = {
    'complete badkamer renovatie': '/complete-badkamer-renovatie/',
    'grootformaat tegels': '/specialisaties/grootformaat-tegels/',
    'natuursteen': '/specialisaties/natuursteen/',
    'mozaïek': '/specialisaties/mozaiek-zetten/',
    'onzichtbare, betegelde inspectieluiken': '/kennisbank/onzichtbaar-luik-badkamer/',
    'epoxyvoeg': '/kennisbank/epoxyvoeg-vs-cementvoeg/',
}
for page in pages:
    for block in page['sections']:
        if 'Internal Links' not in block.get('Type', ''):
            continue
        text = ' '.join([block.get('Body', ''), *block.get('bullets', [])])
        for anchor, url in link_targets.items():
            if anchor in text and url != page['url']:
                page['links'].append({'anchor': anchor, 'url': url, 'placement': block['id'] + ' Body'})

Path('src/content/pages.json').write_text(json.dumps(pages, ensure_ascii=False, indent=2) + '\n')
business_path = Path('src/content/business-input.json')
business = json.loads(business_path.read_text()) if business_path.exists() else {}
for key in ['address', 'phone', 'email', 'kvk', 'btw', 'siteUrl', 'formEndpoint', 'responseTime', 'successMessage', 'errorMessage']:
    business.setdefault(key, None)
business.setdefault('projects', [])
business['requiredConfirmations'] = [note[1:-1] for note in notes]
business['source'] = SOURCE.name
business['businessInformationRequired'] = spec.split('BUSINESS INFORMATION REQUIRED FROM SPPAT', 1)[1].split('RECOMMENDED SEO/ARCHITECTURE GAPS', 1)[0].strip()
business_path.write_text(json.dumps(business, ensure_ascii=False, indent=2) + '\n')
print(f'Extracted {len(pages)} approved pages from {SOURCE}.')
for page in pages:
    print(page['url'], f"{len(page['sections'])} sections, {sum(len(block.get('bullets', [])) for block in page['sections'])} list items")
