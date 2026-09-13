import NewArrivals from '@/components/discover/NewArrivals'
import Container from '@/components/ui/Container'

function NewArrivalPage() {
  return (
    <div>
        <Container className="max-w-[1600px] py-10 bg-gradient-to-b from-orange-50 to-white">
            <NewArrivals/>
        </Container>
    </div>
  )
}

export default NewArrivalPage