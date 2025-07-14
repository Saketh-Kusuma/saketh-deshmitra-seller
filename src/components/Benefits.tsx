// src/components/MoreBenefits.tsx

import icon1  from '../assets/icon1.svg'
import icon2  from '../assets/icon2.svg'
import icon3  from '../assets/icon3.svg'
import type {Benefit} from '../types/types'



const benefits: Benefit[] = [
  {
    icon: icon1,
    title: 'Advanced Analytics',
    description: 'Real-time insights and reporting',
    className:''
  },
  {
    icon: icon2,
    title: 'Marketing Tools',
    description: 'Boost your sales with our tools',
        className:''
  },
  {
    icon: icon3,
    title: 'Secure Platform',
    description: 'Bank-level security for all transactions',
        className:''
  },
  {

    icon:icon2,
    title:'Plus Many More Benefits',
    description: 'Explore additional features and services',
        className:'hidden sm:flex sm:flex-col sm:justify-center sm:items-center lg:hidden'

  }
]

export default function MoreBenefits() {
  return (
    <section className="bg-[#003956] rounded-2xl shadow-2xl w-[90vw] py-16 px-4 sm:px-6 lg:px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
          Plus Many More Benefits
        </h2>
      </div>

      <div className="mt-12 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-28 2xl:gap-44">
      {benefits.map((b, i) => (
  <div
    key={i}
    className={`flex flex-col ${b.className} items-center text-center space-y-4`}
  >
    <div className="p-4 rounded-full text-center">
      <img
        src={b.icon as string}
        alt={b.title}
        className="h-8 w-8"
      />
    </div>
    <h3 className="text-lg xm:text-[25px] sm:text-xl font-semibold text-white">
      {b.title}
    </h3>
    <p className="text-sm xm:text-[15px] sm:text-base text-gray-200">
      {b.description}
    </p>
  </div>
))}
      </div>
    </section>
  )
}
