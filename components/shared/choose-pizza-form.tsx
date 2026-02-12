import { cn } from "@/lib/utils";
import { ProductImage } from "./product-image";
import { Title} from './'
import { Button } from "../ui";
import { DialogTitle } from "../ui/dialog";

interface Props {
  imageUrl: string;
  name: string;
  className?: string;
  ingredients: any[];
  items?: any[];
  onClickAdd?: VoidFunction;
}

export function ChoosePizzaForm({
  imageUrl,
  name,
  className,
  ingredients,
  items,
  onClickAdd,
}: Props) {

  const textDetaills = "30 cm, traditional dough";
  const totalPrice = 350;

  return <div className={cn(className, 'flex flex-1 flex-col')}>
        <ProductImage imageUrl={imageUrl} size={30} />
      

    <div className='w-122.5 bg-[#f7f6f5] p-7'>
      <DialogTitle className="font-extrabold mb-1 size-md">
        {name}
      </DialogTitle>
      <p className="text-gray-400">{textDetaills}</p>

      <Button 
      className="h-13.75 px-10 text-base rounded-[18px] w-full"
      >
        Add to cart for {totalPrice} $
      </Button>
    </div>
  </div>;
}
