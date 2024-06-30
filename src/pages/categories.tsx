import { useEffect, useState } from 'react';
import {apiData} from '../../data'

const Categories = () => {
  const [prodImgs, setProdImgs] = useState<Array<string>>()
  useEffect(() => {
    if(!apiData) return;
    const dataList = apiData?.data || {}
    let prodImgsList : any = [];
    dataList.forEach((item) => {
      const {productImage = []} = item || {}
      prodImgsList.push(productImage?.[0])
    })
    setProdImgs(prodImgsList)
  },[apiData])
  return <div className="flex gap-10">
    {prodImgs?.slice(0,10)?.map((item) => {
        return(<div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden p-4 bg-slate-200 flex items-center justify-center">
          <img className='mix-blend-multiply object-scale-down h-full hover:scale-125 transition-all cursor-pointer' src={item} alt="" />
        </div>)
    })}
  </div>
}

export default Categories