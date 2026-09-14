import { mainNav } from '../data/navigation';
import type { NavItem } from '../data/navigation';
import './Breadcrumbs.css';

export default function Breadcrumbs({ currentPath, title }: { currentPath: string, title?: string }) {
  // Find the path in our navigation tree
  let parentItem: NavItem | undefined;
  let currentItem: NavItem | undefined;
  
  // Custom mapping for pages that aren't strictly in mainNav but fall under a category
  if (currentPath.startsWith('/projecten/') && currentPath !== '/projecten/') {
    parentItem = { label: 'Projecten', href: '/projecten/' };
    currentItem = { label: title || 'Project', href: currentPath };
  } else if (currentPath.startsWith('/kennisbank/') && currentPath !== '/kennisbank/') {
    parentItem = { label: 'Kennisbank', href: '/kennisbank/' };
    currentItem = { label: title || 'Artikel', href: currentPath };
  } else {
    for (const topItem of mainNav) {
      if (topItem.href === currentPath) {
        currentItem = topItem;
        break;
      }
      if (topItem.children) {
        const found = topItem.children.find(child => child.href === currentPath);
        if (found) {
          parentItem = topItem;
          currentItem = found;
          break;
        }
      }
    }
  }

  // If no match, don't show breadcrumbs or just show home
  if (!currentItem) {
    if (currentPath !== '/') {
      return (
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <ol className="breadcrumbs-list">
            <li className="breadcrumbs-item"><a href="/">Home</a></li>
            <li className="breadcrumbs-separator">/</li>
            <li className="breadcrumbs-item breadcrumbs-current" aria-current="page">{title || 'Pagina'}</li>
          </ol>
        </nav>
      );
    }
    return null;
  }

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      {/* Mobile Breadcrumb */}
      <div className="breadcrumbs-mobile">
        {parentItem ? (
          <a href={parentItem.href} className="breadcrumbs-back">
            <span aria-hidden="true">&larr;</span> {parentItem.label}
          </a>
        ) : (
          <a href="/" className="breadcrumbs-back">
            <span aria-hidden="true">&larr;</span> Home
          </a>
        )}
      </div>

      {/* Desktop Breadcrumbs */}
      <ol className="breadcrumbs-list breadcrumbs-desktop">
        <li className="breadcrumbs-item">
          <a href="/">Home</a>
        </li>
        <li className="breadcrumbs-separator">/</li>
        
        {parentItem && (
          <>
            <li className="breadcrumbs-item">
              <a href={parentItem.href}>{parentItem.label}</a>
            </li>
            <li className="breadcrumbs-separator">/</li>
          </>
        )}
        
        <li className="breadcrumbs-item breadcrumbs-current" aria-current="page">
          {title || currentItem.label}
        </li>
      </ol>
    </nav>
  );
}
