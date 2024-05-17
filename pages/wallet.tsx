
import { useAccount, useReadContract } from 'wagmi'
import { contractData } from '../contracts/data'
import Item from '../components/Item';

export default function Wallet(props: any) {
    const result:any = useReadContract({
    abi: contractData.abi,
    address: contractData.address,
    functionName: 'getAllTodoItems',
    })
    
    return (
      <div className="p-3">
            
        {result.data?.map((item: string, index: number) => {
          return <Item key={index} id={index} name={item} fn={props.doMsg} />;
        })}
      </div>
    );
}