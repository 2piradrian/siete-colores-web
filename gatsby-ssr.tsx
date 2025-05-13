import React from "react";
import Layout  from "./src/ui/layout/Layout";
import { RepositoriesProvider } from './src/core/provider/RepositoryProvider';
import { LocationProvider } from "@gatsbyjs/reach-router";

export const wrapRootElement = ({ element }: { element: React.ReactNode }) => {
  return (
    <LocationProvider>
        <RepositoriesProvider>
          <Layout>{element}</Layout>
        </RepositoriesProvider>
    </LocationProvider>
  );
};

export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: 'es-AR' });
};