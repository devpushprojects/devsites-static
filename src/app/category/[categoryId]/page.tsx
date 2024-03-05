import SitePanel from "@/app/components/SitePanel"
import { getSiteCategories } from "@/app/services/devsites"
import { SiteCategory } from "@/app/types"

export async function generateStaticParams() {
  const categories: SiteCategory[] = await getSiteCategories()

  return categories.map((category) => ({
    categoryId: category.id.toString()
  }))
}

export default async function CategoryPage({ params }: { params: { categoryId: string } }) {
  return (
    <SitePanel categoryId={ Number(params.categoryId) } />
  )
}
