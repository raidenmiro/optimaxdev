import { CartSample } from '~/entities/cart/view'
import { Layout } from '~/shared/layouts/base'
import { Card } from '~/shared/view/card'

export function Page() {
  return (
    <Layout>
      <Layout.Cart>
        <Card.Body>
          <CartSample />
        </Card.Body>
      </Layout.Cart>
      <Layout.Summary>summary</Layout.Summary>
    </Layout>
  )
}
