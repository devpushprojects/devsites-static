import type { Site, SiteCategory } from "@/app/types"

const apiUrl: string = process.env.NEXT_PUBLIC_DEVPUSH_API ?? ''

const getData = async (url: string) => {
  const response    = await fetch(url)
  const json        = await response.json()
  
  return json['data']
}

export const getSites = async (): Promise<Site[]> => {
  return getData(`${apiUrl}/devsites`)
}

export const getSiteByCategoryId = async (categoryId: Number): Promise<Site[]>  => {
  return getData(`${apiUrl}/devsites/categorized/${categoryId}`)
}

export const getSiteCategories = async (): Promise<SiteCategory[]> => {
  return getData(`${apiUrl}/devsites/categories`)
}
