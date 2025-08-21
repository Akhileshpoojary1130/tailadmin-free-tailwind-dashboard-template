(() => {
  async function inlineIncludes(root = document) {
    const includeEls = root.querySelectorAll('include[src]');
    for (const el of includeEls) {
      const src = el.getAttribute('src');
      try {
        const res = await fetch(src);
        const html = await res.text();
        const template = document.createElement('template');
        template.innerHTML = html.trim();
        const fragment = template.content.cloneNode(true);
        el.replaceWith(fragment);
      } catch (e) {
        console.error('Failed to include', src, e);
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => inlineIncludes());
  } else {
    inlineIncludes();
  }
})();

