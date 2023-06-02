import { CartItem } from '~/entities/cart/view/item'
import { Layout } from '~/shared/layouts/base'
import { Card } from '~/shared/view/card'

export function Page() {
  return (
    <Layout>
      <Layout.Cart>
        <Card.Body>
          <CartItem
            category="Mens Shirts"
            currency="$"
            image="https://via.placeholder.com/150"
            id="1"
            name="Mens T-Shirt"
            price={20}
            quantity={1}
            stockQuantity={10}
            promotions={['Shopping Sale', '20% off']}
          />
        </Card.Body>
      </Layout.Cart>
      <Layout.Summary>summary</Layout.Summary>
    </Layout>
  )
}
