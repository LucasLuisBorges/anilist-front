import { Avatar as AvatarComp, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface IProps {
  name: string;
  src: string;
  className?: string;
}

export function Avatar({ name, src, className }: IProps) {
  return (
    <AvatarComp className={className}>
      <AvatarImage src={src} />
      <AvatarFallback>{name}</AvatarFallback>
    </AvatarComp>

  )
}