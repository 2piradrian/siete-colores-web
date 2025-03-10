import React from "react";
import Layout  from "./src/ui/layout/Layout";
import { RepositoriesProvider } from './src/core/provider/RepositoryProvider';

export const wrapRootElement = ({ element }: { element: React.ReactNode }) => {
  return (
    <RepositoriesProvider>
      <Layout>{element}</Layout>
    </RepositoriesProvider>
  );
};
