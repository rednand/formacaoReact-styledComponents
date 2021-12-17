import React from "react";
import { Box } from "../../Components/ui/index";
import { extratoLista } from "../../info";
import { Botao } from "../../Components/ui/index";
import Items from "../Items";

export const Extrato = () => {
  return (
    <Box>
      {extratoLista.updates.map(({ id, type, from, value, date }) => {
        return (
          <Items key={id} type={type} from={from} value={value} date={date} />
        );
      })}
      <Botao>Ver Mais</Botao>
    </Box>
  );
};
