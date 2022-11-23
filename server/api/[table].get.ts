import { supabase } from '~~/supabase'

export default defineEventHandler(async (event) => {
  const { data, error } = await supabase
    .from(event.context.params.table)
    .select('*')
  if (error) console.error(error)
  else return data
})
