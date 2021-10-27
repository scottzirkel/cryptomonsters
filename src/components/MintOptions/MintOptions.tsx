import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/solid'
import Web3 from 'web3'
const web3 = new Web3(Web3.givenProvider)

interface Plan {
  name: string
  price: number
  description: string
}

const plans: Plan[] = [
  {
    name: 'One Monster',
    price: 0.01,
    description: "Good job, you've spotted a monster!",
  },
  {
    name: 'Two Monsters',
    price: 0.02,
    description: 'Oh wow, you found two monsters!',
  },
  {
    name: 'Ten Monsters',
    price: 0.1,
    description: "I'm not gonna lie, that's a lot of monsters...",
  },
]

export default function MintOptions() {
  const [selected, setSelected] = useState(plans[0])

  const connectWallet = async () => {
    console.log('do somethign!')
    await web3.eth.requestAccounts()
  }

  return (
    <div className="w-full text-left">
      <div className="w-full max-w-md mx-auto bg-black bg-opacity-25 max-w-md mx-auto p-4 rounded-xl space-y-4">
        <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label className="sr-only">Monster Spotted!</RadioGroup.Label>
          <div className="space-y-2">
            {plans.map((plan: Plan) => (
              <RadioGroup.Option
                key={plan.name}
                value={plan}
                className={({ active, checked }) =>
                  `${
                    active
                      ? 'ring-2 ring-offset-2 ring-offset-cyan-300 ring-white ring-opacity-60'
                      : ''
                  }
                  ${checked ? 'bg-cyan-700 bg-opacity-75 text-white' : 'bg-white'}
                    relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium  ${checked ? 'text-white' : 'text-gray-900'}`}
                          >
                            {plan.name}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            className={`inline ${checked ? 'text-cyan-100' : 'text-gray-500'}`}
                          >
                            <span>{plan.price}ETH</span> <span aria-hidden="true">&middot;</span>{' '}
                            <span>{plan.description}</span>
                          </RadioGroup.Description>
                        </div>
                      </div>
                      {checked && (
                        <div className="flex-shrink-0 text-white">
                          <CheckIcon className="w-6 h-6" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
        <div className="text-center">
          <button
            onClick={connectWallet}
            type="button"
            className="mx-auto bg-cyan-200 text-cyan-900 py-2 px-4 rounded hover:bg-cyan-300"
          >
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  )
}
