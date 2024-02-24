
export interface TReference {
  name: string;
  Left: string;
  Top: string;
}
export interface TRealvalues {
  centavos: string;
  monto: string;
  clientName:string;
}
export interface TDataToShow{
  Fecha:string
  FechaColilla:string
  CantidadColilla:string
  NombreCliente:string
  ID:number,
  motivo:string
  Cantidad:string 
  active:boolean,
  DetalleCantidad: 'mas letras de los numeros'

}

export type TContext = {
  references: [TReference];
  saveReferences: (e) => void;
  eraseReferences: () => void;
  area: string;
  setArea: (a) => void;
  dataToShow: TRealvalues[];
  setDataToShow: (e) => void;

  data: TDataToShow[];

  saveDataInArchive: (e) => void;
  printArea: boolean;
  setPrintArea: (e: boolean) => void;
};

export interface TCheckList{
  checkId:number
clientName :string
amount:number
reason :string
dateCreated :string
isActive: 1 | 0
}