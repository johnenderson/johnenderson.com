'use client';

import { useEffect } from 'react';

const COPIED_LABEL_TIMEOUT = 1600;

export function CodeCopyButtons() {
  useEffect(() => {
    const codeBlocks =
      document.querySelectorAll<HTMLElement>('article.post pre');

    const cleanups = Array.from(codeBlocks).map((pre) => {
      if (pre.querySelector('.code-copy-button')) {
        return () => {};
      }

      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'code-copy-button';
      button.textContent = 'Copy';
      button.setAttribute('aria-label', 'Copy code');

      let timeout: number | undefined;

      const onClick = async () => {
        const code = pre.querySelector('code')?.textContent ?? '';

        try {
          await navigator.clipboard.writeText(code);
          button.textContent = 'Copied';
          button.setAttribute('aria-label', 'Code copied');

          if (timeout) window.clearTimeout(timeout);
          timeout = window.setTimeout(() => {
            button.textContent = 'Copy';
            button.setAttribute('aria-label', 'Copy code');
          }, COPIED_LABEL_TIMEOUT);
        } catch {
          button.textContent = 'Failed';
          button.setAttribute('aria-label', 'Failed to copy code');
        }
      };

      button.addEventListener('click', onClick);
      pre.appendChild(button);

      return () => {
        if (timeout) window.clearTimeout(timeout);
        button.removeEventListener('click', onClick);
        button.remove();
      };
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return null;
}
