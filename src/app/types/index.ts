export interface Site {
  id: number
  site_category_id: number
  name: string
  url: string
  image_url: string
}

export interface SiteCategory {
  id: number
  name: string
}

export interface ApiResponse {
  data: any
}
