import getBillboard from '@/actions/get-billboard'
import Billboard from '@/components/Billboard'
import Container from '@/components/ui/Container'

export const revalidate = 0

const HomePage = async () => {
  const billboard = await getBillboard('f8f9e491-df8b-4ebf-b968-b5d4c82409fe')

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
    </Container>
  )
}

export default HomePage
