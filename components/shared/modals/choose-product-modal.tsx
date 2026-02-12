'use client'

import { Dialog } from '@/components/ui';
import { Product } from '@prisma/client';
import { DialogContent, DialogTitle } from '../../ui/dialog';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { ChoosePizzaForm } from '../choose-pizza-form';

interface Props {
  product: Product;
  className?: string;
}

export function ChooseProductModal({ product, className}: Props) {
  const router = useRouter();
  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
      className={cn(
        'p-0 w-265 max-w-265 min-h-125 bg-white overflow-hidden',
        className
      )}
      >
        <ChoosePizzaForm imageUrl={product.imageUrl} name={product.name} ingredients={[]}/>
      </DialogContent>
    </Dialog>
  )
}