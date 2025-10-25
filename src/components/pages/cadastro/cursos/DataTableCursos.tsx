"use client";

import { useEffect, useState } from "react";
import { DataTable } from "../../../datatable/DataTable";
import { SkeletonDataTable } from "../../../datatable/SkeletonDataTable";

export const DataTableCursos = () => {
  const [dados, setDados] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const columnsCursos: any[] = [];

  const getCursos = async () => {
    try {
      const res = await fetch("/api/cursos");
      const data = await res.json();

      setDados(data);
      setIsLoading(false);
    } catch (error: any) {
      throw new Error("Erro ao buscar cursos", error);
    }
  };

  useEffect(() => {
    getCursos();
  }, []);

  return (
    <>
      {isLoading ? (
        <SkeletonDataTable />
      ) : (
        <DataTable columns={columnsCursos} data={dados} />
      )}
    </>
  );
};
