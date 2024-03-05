import Link from 'next/link'
import Image from 'next/image'
import { Site } from '@/app/types'
import { getSiteByCategoryId, getSites } from '@/app/services/devsites'

type Props = {
  categoryId: Number|undefined
}

const SiteList = async ({ categoryId }: Props) => {
  let sites: Array<Site> = [];
  
  if (categoryId) {
    sites = await getSiteByCategoryId(categoryId)
  } else {
    sites = await getSites()
  }

  const siteElements = [];

  for (const site of sites) {
    siteElements.push(
      <Link href={ site.url } className="site">
        <Image src={ site.image_url } alt={ site.name } width={ 250 } height={ 150 } />
        <div className="site-name">{ site.name }</div>
      </Link>
    )
  }

  return (
    <div className="sites">
      { siteElements }
    </div>
  )
}

export default SiteList
