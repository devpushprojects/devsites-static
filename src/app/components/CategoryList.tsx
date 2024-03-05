import Link from 'next/link'
import { getSiteCategories } from '@/app/services/devsites'
import { SiteCategory } from '@/app/types'

type Props = {
  categoryId: Number
}

const CategoryList = async ({ categoryId }: Props) => {
  let categories: Array<SiteCategory> = await getSiteCategories()
  
  const categoryElements = []

  for (const category of categories) {
    categoryElements.push(
      <Link
        className={ 'category' + (category.id == categoryId ? ' category-active' : '') }
        href={ `/category/${category.id}` }>
          { category.name }
      </Link>
    )
  }

  return (
    <div className="categories">
      <h2>Categories</h2>
      <div className="category-links">
        <Link href="/" className={ 'category' + (categoryId == 0 ? ' category-active' : '') }>All</Link>
        { categoryElements }
      </div>
    </div>
  )
}

export default CategoryList
