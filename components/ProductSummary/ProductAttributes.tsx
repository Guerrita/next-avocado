import Grid from '@aura-design/system/dist/components/grid'
import Separator from '@aura-design/system/dist/components/separator'
import React from 'react'
import { Header, Divider, Table } from 'semantic-ui-react'

const ProductAttributes = ({
  description,
  ...otherAttributes
}: TProductAttributes) => (
  <section className="container">
    <Grid col="one" style={{ gridGap: '0px' }} className="aura">
      <h3>About this avocado</h3>
      <p>{description}</p>
    </Grid>

    <Separator />

    <Grid col="one" style={{ gridGap: '0px' }} className="aura">
      <h6
        className="cold-grey aura"
        style={{ border: '2px solid var(--aura-cold-grey)' }}
      >
        Attributes
      </h6>

      <section>
        {Object.keys(otherAttributes).map((key) => (
          <Grid col="two" key={key} style={{ gridGap: '0px' }}>
            <p
              className="aura m0"
              style={{
                borderBottom: '2px solid var(--aura-cold-grey)',
                borderLeft: '2px solid var(--aura-cold-grey)',
              }}
            >
              {key}
            </p>
            <p
              className="aura m0"
              style={{
                borderBottom: '2px solid var(--aura-cold-grey)',
                borderLeft: '2px solid var(--aura-cold-grey)',
                borderRight: '2px solid var(--aura-cold-grey)',
              }}
            >
              {otherAttributes[key as keyof typeof otherAttributes]}
            </p>
          </Grid>
        ))}
      </section>
    </Grid>

    <style jsx>{`
      .container :global(.attr-name) {
        text-transform: capitalize;
      }
    `}</style>
  </section>
)

export default ProductAttributes
