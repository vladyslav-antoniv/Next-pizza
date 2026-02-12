
import { ChooseProductModal, Container, Title } from "@/components/shared";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";
import { ProductImage } from "@/components/shared";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ProductModalPage({ params }: Props) {
  const { id } = await params;

  const product = await prisma.product.findFirst({where: { id: Number(id) },
    include: {
      ingredients: true,
      items: true,
    },
  });

  if (!product) {
    return notFound();
  }

  return (

    <ChooseProductModal product={product} />



    // <Container className="flex flex-col my-10">
    //   <div className="flax flex-1 flex flex-row">
    //     <ProductImage imageUrl={product.imageUrl} size={40} />

    //     <div className="w-[490px] bg-[#f0eeee] p-7">
    //       <Title
    //         text={product.name}
    //         size="md"
    //         className="font-extrabold mb-1"
    //       />

    //       <p className="text-gray-400">
    //         Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    //       </p>
    //     </div>
    //   </div>
    // </Container>
  );
}
