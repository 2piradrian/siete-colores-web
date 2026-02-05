import { LocationProvider } from "@gatsbyjs/reach-router";
import { RepositoriesProvider } from './src/core/provider/RepositoryProvider';
import Layout from "./src/ui/layout/Layout";

export const wrapRootElement = ({ element }: { element: React.ReactNode }) => {
  return (
    <LocationProvider>
      <RepositoriesProvider>
        <Layout>{element}</Layout>
      </RepositoriesProvider>
    </LocationProvider>
  );
};

export const onRenderBody = ({ setHtmlAttributes }: { setHtmlAttributes: (attributes: Record<string, string>) => void }) => {
  setHtmlAttributes({ lang: 'es-AR' });
};