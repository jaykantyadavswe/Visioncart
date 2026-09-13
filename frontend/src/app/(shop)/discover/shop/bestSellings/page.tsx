import BestSellers from '@/components/shop/BestSellers'
import Container from '@/components/ui/Container'
import React from 'react'

function BestSellings() {
    return (
        <Container className="max-w-[1600px] py-10 bg-gradient-to-b from-orange-50 to-white">
            <BestSellers />
        </Container>
    )
}

export default BestSellings