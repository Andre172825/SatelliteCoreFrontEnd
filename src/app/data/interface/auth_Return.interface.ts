
export interface AuthReturn {
  success:boolean,
  message: string,
  content: {
    codigo: number,
    nombres: string,
    apellidoPaterno: string,
    apellidoMaterno: string,
    token: string
  }
}
