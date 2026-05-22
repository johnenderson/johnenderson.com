import { FC } from 'react';

type PageTitleProps = {
  title: string;
  subtitle?: string;
};

export const PageTitle: FC<PageTitleProps> = ({ title, subtitle }) => (
  <header className="mt-10 mb-10">
    <h1 className="m-0 text-4xl font-bold leading-none text-site-foreground sm:text-5xl">
      {title}
    </h1>
    {subtitle ? (
      <p className="mt-3 mb-0 text-base font-semibold leading-snug text-site-body-muted sm:text-lg">
        {subtitle}
      </p>
    ) : null}
  </header>
);
