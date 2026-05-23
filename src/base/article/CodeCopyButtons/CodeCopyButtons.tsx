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

      const title = pre.dataset.codeTitle;
      const language = pre.dataset.codeLanguage;
      let header: HTMLDivElement | undefined;

      if (title || language) {
        header = document.createElement('div');
        header.className = 'code-block-header';

        if (title) {
          const titleElement = document.createElement('span');
          titleElement.className = 'code-block-title';
          titleElement.textContent = title;
          header.appendChild(titleElement);
        }

        if (language) {
          const languageElement = document.createElement('span');
          languageElement.className = 'code-block-language';
          languageElement.textContent = language;
          header.appendChild(languageElement);
        }

        pre.prepend(header);
      }

      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'code-copy-button';
      button.textContent = 'Copiar';
      button.setAttribute('aria-label', 'Copiar código');

      let timeout: number | undefined;

      const onClick = async () => {
        const code = pre.querySelector('code')?.textContent ?? '';

        try {
          await navigator.clipboard.writeText(code);
          button.textContent = 'Copiado';
          button.setAttribute('aria-label', 'Código copiado');

          if (timeout) window.clearTimeout(timeout);
          timeout = window.setTimeout(() => {
            button.textContent = 'Copiar';
            button.setAttribute('aria-label', 'Copiar código');
          }, COPIED_LABEL_TIMEOUT);
        } catch {
          button.textContent = 'Falhou';
          button.setAttribute('aria-label', 'Falha ao copiar código');
        }
      };

      button.addEventListener('click', onClick);
      pre.appendChild(button);

      return () => {
        if (timeout) window.clearTimeout(timeout);
        button.removeEventListener('click', onClick);
        button.remove();
        header?.remove();
      };
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return null;
}
