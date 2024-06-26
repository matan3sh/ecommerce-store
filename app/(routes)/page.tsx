import getBillboard from '@/actions/get-billboard'
import getProducts from '@/actions/get-products'
import Billboard from '@/components/Billboard'
import ProductList from '@/components/ProductList'
import Container from '@/components/ui/Container'

export const revalidate = 0

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true })
  const billboard = await getBillboard('f8f9e491-df8b-4ebf-b968-b5d4c82409fe')

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  )
}

export default HomePage
