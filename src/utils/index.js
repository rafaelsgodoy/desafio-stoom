export const isItemInOrderProgress = (tamanho, orderInProgress, type) => {
  return orderInProgress[type]?.id === tamanho.id;
};