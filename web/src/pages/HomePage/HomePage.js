import React from 'react'
import rw from './picture.png'

const HomePage = () => {
  return (
    <>
      <div className="container">
        <div className="pt-5">
          <center>
            <img src={rw} alt="Responsive image" />
          </center>
        </div>
        <div className="pt-4 d-flex justify-content-center">
          <h1>RedwoodJS Indonesia</h1>
        </div>
        <div className="pt-4">
          <div className="border border-danger">
            <div className="p-2">
              <div className="card bg-dark">
                <div className="card-body text-light">
                  <blockquote className="twitter-tweet">
                    <p lang="en" dir="ltr">
                      Redwood is React + GraphQL + Prisma2 + Babel + webpack +
                      CDN + Functions + DB (+ Jest, Storybook, &amp; others
                      soon). I see so much untapped potential in this mix of
                      technologies. Let’s unlock it together! Follow{' '}
                      <a href="https://twitter.com/redwoodjs?ref_src=twsrc%5Etfw">
                        @redwoodjs
                      </a>{' '}
                      for updates.
                    </p>
                    &mdash; Tom Preston-Werner (@mojombo){' '}
                    <a href="https://twitter.com/mojombo/status/1237441122881794048?ref_src=twsrc%5Etfw">
                      March 10, 2020
                    </a>
                  </blockquote>{' '}
                  <script
                    async
                    src="https://platform.twitter.com/widgets.js"
                    charSet="utf-8"
                  ></script>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
