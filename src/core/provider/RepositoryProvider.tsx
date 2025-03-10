import React from "react";
import { ReactNode, createContext, useContext, useMemo } from "react";
import { CategoriesRepository, ProductsRepository, SubCategoriesRepository } from "../../infrastructure";

interface RepositoriesProviderProps {
  children: ReactNode;
}

interface RepositoriesContextType {
  productsRepository: ProductsRepository;
  categoriesRepository: CategoriesRepository;
  subCategoriesRepository: SubCategoriesRepository;
}

const RepositoriesContext = createContext<RepositoriesContextType | null>(null);

export const RepositoriesProvider = ({ children }: RepositoriesProviderProps) => {
  const repositories = useMemo(() => ({
    productsRepository: new ProductsRepository(),
    categoriesRepository: new CategoriesRepository(),
    subCategoriesRepository: new SubCategoriesRepository(),
  }), []);

  return (
    <RepositoriesContext.Provider value={repositories}>
      {children}
    </RepositoriesContext.Provider>
  );
};

export const useRepositories = () => {
  const context = useContext(RepositoriesContext);

  if (!context) {
    throw new Error("context error");
  }

  return context;
};
