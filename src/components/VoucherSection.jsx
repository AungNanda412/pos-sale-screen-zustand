import React from 'react'
import VoucherItemList from './VoucherItemList'
import VoucherSummary from './VoucherSummary'
import VoucherCheckout from './VoucherCheckout'
import useVoucherStore from '../store/useVoucherStore'
import VoucherInfo from './VoucherInfo'

const VoucherSection = () => {
  const { items } = useVoucherStore();
  return (
    <section className='h-full col-span-2 flex flex-col'>
      <h3 className="text-2xl text-end p-5">Voucher Items({items.length})</h3>
      <VoucherInfo />
      <VoucherItemList />
      <VoucherSummary />
      <VoucherCheckout />
    </section>
  )
}

export default VoucherSection
