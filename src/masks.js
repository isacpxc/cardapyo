export const cpfMask = value => {
  return value
    .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
    .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
}

export const cnpjMask = value => {
  return value
    .replace(/\D/g, '') 
    .replace(/(\d{2})(\d)/, '$1.$2') 

    .replace(/(\d{3})(\d)/, '$1.$2')

    .replace(/(\d{3})(\d)/, '$1/$2')
    .replace(/(\/\d{4})(\d{1,2})/, '$1-$2') 
    .replace(/(-\d{2})(\d)*?$/, '$1')
}

export const telMask = value => {
  return value
  .replace(/\D/g, '')
  .replace(/(\d{2})(\d)/, '($1) $2')
  .replace(/(\s\d{4})(\d)/, '$1-$2')
  .replace(/(-\d{4})\d*?$/, '$1')
}

export const celMask = value => {
  return value
  .replace(/\D/g, '')
  .replace(/(\d{2})(\d)/, '($1) $2')
  .replace(/(\s\d{5})(\d)/, '$1-$2')
  .replace(/(-\d{4})\d*?$/, '$1')
}

export const reaisMask = value => {
  
      return value
      .replace(/\D/g, '')
      .replace(/(\d)/,'R$ **,*$1')
      // .replace(/\*/g, '0')
      .replace(/(R\$\s\*\*,)(\*)(\d{1})(\d{1})/,'$1$3$4')
      .replace(/(R\$\s\*)(\*)(,)(\d{1})(\d{2})/,'$1$4$3$5')
      .replace(/(R\$\s)(\*)(\d{1})(,)(\d{1})(\d{2})/,'$1$3$5$4$6')
      .replace(/(,\d{2})\d*?$/,'$1')
  
  
}

export const timeMask = value => {
  return value
  .replace(/\D/g, '')
  .replace(/(\d{2})(\d{1,2})/, '$1:$2')
  .replace(/(\d{2})\d*?$/, '$1')
}

