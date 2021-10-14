import type { NextPage } from 'next'
import MintOptions from '@/components/MintOptions'
import Womblydon from '@/components/Womblydon'
import Hidden from '@/components/Hidden'
import Sign from '@/components/Sign'

const Home: NextPage = () => {
  return (
    <>
      <section className="space-y-4">
        <div>
          <h1 className="text-8xl text-lime-300 font-black leading-tight z-10 relative font-headline transform rotate-1 skew-y-1 hover:-rotate-1 hover:-skew-y-1">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-lime-400 to-teal-400 filter saturate-200">
              <span
                className="text-lime-200 mix-blend-overlay"
                style={{
                  textShadow: '4px 6px #000300',
                }}
              >
                Monsters
              </span>
            </span>
          </h1>
          <h2 className="-mt-6 text-4xl text-lime-200 font-black font-headline leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-t to-green-400 from-green-800 filter saturate-150">
              <span
                className="text-lime-200 mix-blend-overlay"
                style={{
                  textShadow: '2px 3px #000300',
                }}
              >
                Of the Baruvian Jungle
              </span>
            </span>
          </h2>
          <p>
            Who knows what is lurking in the mysterious{' '}
            <strong>
              <em>BARUVIAN JUNGLES?!</em>
            </strong>
          </p>
          <p>Once all the monsters have been spotted, a new one will appear!</p>
          <p>Act fast! Once they are all found, they will go back into hiding forever!</p>
        </div>
        <div>
          <h2>Claim your monster spotting!</h2>
          <p>Please deposit .01 ETH to spot a monster.</p>
          <p>Create graphic of coin op binoculars.</p>
          <div className="py-8 space-y-4 relative" id="monsters">
            <MintOptions />
            <Womblydon className="-bottom-4" />
          </div>
        </div>
        <div className="w-full bg-cyan-300 py-12 text-cyan-900 relative" id="about">
          <h3
            className="text-5xl mb-6 font-black z-10 relative font-headline transform rotate-[-0.5deg] skew-y-[-0.5deg] hover:rotate-[0.5deg] hover:skew-y-[0.5deg] filter saturate-150"
            style={{
              textShadow: '4px 6px #b3f552',
            }}
          >
            About the Monsters
          </h3>
          <div className="space-y-4 max-w-md mx-auto">
            <p>Flavor text</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam beatae blanditiis
              delectus doloribus eius enim expedita explicabo illum in inventore ipsum libero magni
              minus nemo, officia rerum, ut velit.
            </p>
            <p>Rarity info</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam beatae blanditiis
              delectus doloribus eius enim expedita explicabo illum in inventore ipsum libero magni
              minus nemo, officia rerum, ut velit.
            </p>
            <p>Drop plans</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam beatae blanditiis
              delectus doloribus eius enim expedita explicabo illum in inventore ipsum libero magni
              minus nemo, officia rerum, ut velit.
            </p>
          </div>
          <Hidden />
        </div>
        <div className="relative" id="team">
          <div className="py-12">
            <h3
              className="text-5xl mb-6 text-lime-300 font-black z-10 relative font-headline transform rotate-[0.5deg] skew-y-[0.5deg] hover:rotate-[-0.5deg] hover:skew-y-[-0.5deg] filter saturate-150"
              style={{
                textShadow: '2px 4px #000300',
              }}
            >
              Meet your Jungle Guides
            </h3>
            <div>
              <h3>Courtney Huddleston</h3>
              <p>Courtney draws things.</p>
            </div>
            <div>
              <h3>Scott Zirkel</h3>
              <p>Scott writes and codes things.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
