import { supabase } from "~~/supabase"

export default defineEventHandler(async (event) => {
  let { data, error } = await supabase.from(event.context.params.table).select('*')
  return data
})
