interface IUpdatePlaceDTO {
  id: string;
  name: string;
  photo: string;
  category: string;
  cep: string;
  telefone: string;
  rua: string;
  bairro: string;
  numero: string;
  description: string;
  domingoOpen: boolean;
  domingoFrom: string;
  domingoUntil: string;
  segundaOpen: boolean;
  segundaFrom: string;
  segundaUntil: string;
  tercaOpen: boolean;
  tercaFrom: string;
  tercaUntil: string;
  quartaOpen: boolean;
  quartaFrom: string;
  quartaUntil: string;
  quintaOpen: boolean;
  quintaFrom: string;
  quintaUntil: string;
  sextaOpen: boolean;
  sextaFrom: string;
  sextaUntil: string;
  sabadoOpen: boolean;
  sabadoFrom: string;
  sabadoUntil: string;
}

export { IUpdatePlaceDTO };
