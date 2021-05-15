interface IUpdatePlaceDTO {
  id: string;
  name: string;
  photo: string;
  category: string;
  cep: string;
  rua: string;
  bairro: string;
  numero: string;
  domingo: boolean;
  segunda: boolean;
  terca: boolean;
  quarta: boolean;
  quinta: boolean;
  sexta: boolean;
  sabado: boolean;
}

export { IUpdatePlaceDTO };
