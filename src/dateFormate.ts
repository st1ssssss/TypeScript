export const isoDateTransform = (date: number) => {
  const dateToTransform = new Date(date)
  const isoDate = dateToTransform.toISOString()
  const formatedDate = isoDate.substring(0, 10)
  return formatedDate
}

export const dateFormate = (date: number) => {
  const c = new Date(isoDateTransform(date))
  const isoDate = isoDateTransform(date)
  const cc = new Date(Number(isoDate.substring(0, 4)), Number(isoDate.substring(6, 7)) + 1, 0)
  const ccISODate = cc.toISOString()
  const currentDate = isoDateTransform(c.setDate(c.getDate() + 1))
  const departureDate = isoDateTransform(c.setDate(c.getDate() + 3))
  const maxDate = ccISODate.substring(0, 10)
  return { currentDate, departureDate, maxDate }
}
