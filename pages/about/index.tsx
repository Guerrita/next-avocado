import React from 'react'
import Layout from '@components/Layout/Layout'
import Image from 'next/image'

const avoFacts = [
  {
    title: 'Most avocados come from Mexico',
    content:
      'While avocados are grown in California and Florida, the majority sold in grocery stores come from south central Mexico. The main reason for the abundance of “south of the border” avocados is that Mexico is blessed with a year-round growing climate. The avocado is believed to have originated in the state of Puebla, Mexico, as far back as 10,000 B.C.',
  },
  {
    title: 'The conquistadors were huge fans.',
    content:
      'Spanish explorers arriving in Mexico during the 16th century survived on avocados and were the first Europeans to consume them. As a result of the Spanish Conquest, avocados spread to South America and Central America. ',
  },
  {
    title: '“Avocado” wasn’t its original name.',
    content:
      'Irishman Sir Hans Sloane called it an avocado in 1696 in a Jamaican-plants catalog. He also dubbed the avocado tree the “alligator pear tree.”',
  },
  {
    title: 'It’s actually a fruit.',
    content:
      'Did you know that an avocado is a fruit? While definitely not sweet, it falls firmly in the fruit-not the vegetable-family. That’s because the avocado tree is part of the flowering-plant family Lauraceae.',
  },
  {
    title: 'There’s a secret trick to ripening them up quick',
    content:
      'Need to ripen that avocado ASAP? Place it in a brown paper bag with a banana or two. The bananas will release ethylene gas, a natural plant hormone that aids in ripening fruit. On the other hand, check out this guide to learn how to store them for later.',
  },
]

const AboutPage = () => {
  return (
    <Layout>
      <section className="smush pad">
        <h2 className="centertxt pad">13 Surprising Facts About Avocados</h2>

        <figure
          className=" centertxt mt13 mb13 anchor mauto"
          style={{ width: '90%', height: 'auto', overflow: 'hidden' }}
        >
          <Image
            src="/images/avocados.jpg"
            alt="Avocados on a table"
            layout='responsive'
            width={1200}
            height={899}
          />
          <figcaption>
            Originally from{' '}
            <a
              target="_blank"
              href="https://www.tasteofhome.com/article/13-surprising-facts-about-avocados/"
            >
              Taste of Home
            </a>
          </figcaption>
        </figure>

        <ol
          className="aureole two mt13"
          style={{ gridGap: 'calc(var(--aura) * 4)' }}
        >
          {avoFacts.map(({ title, content }) => (
            <li key={title}>
              <h3 className="ui header">{title}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ol>
      </section>

      <style jsx>{`
        figure,
        ol {
          padding: 0;
          margin: 0;
        }

        figcaption {
          margin-top: 0.5rem;
          font-site: 0.7rem;
          color: grey;
        }

        ol {
          list-style: none;

          // Look ma! Responsive grid with no Media queries :)
          // https://css-tricks.com/look-ma-no-media-queries-responsive-layouts-using-css-grid/

          // Look ma! A CSS Counter :)
          // https://moderncss.dev/totally-custom-list-styles/
          counter-reset: orderedlist;
        }
        li::before {
          counter-increment: orderedlist;
          content: counter(orderedlist);

          // Boring stuff
          position: absolute;
          top: -15px;
          left: -10px;
          color: #cecece;
          font-size: 5rem;
          font-weight: bold;
        }

        li {
          position: relative;
        }
        h3:first-child {
          // why the first-child selector you may ask...
          // to gain specificity and thus avoid using '!important' :)
          padding-left: 40px;
          margin-bottom: 2rem;
        }
      `}</style>
    </Layout>
  )
}

export default AboutPage
