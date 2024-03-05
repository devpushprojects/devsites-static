import SiteList from '@/app/components/SiteList'
import CategoryList from '@/app/components/CategoryList'

type Props = {
  categoryId?: Number
}

const SitePanel = ({ categoryId }: Props) => {
  return (
    <>
      <SiteList categoryId={ categoryId ?? 0 } />
      <CategoryList categoryId={ categoryId ?? 0 } />
    </>
  )
}

export default SitePanel
