import Link from 'next/link';
import {useRouter} from 'next/router';
import {CSSProperties, FC} from 'react';

interface Props{
  text: string;
  href: string;
}

const style: CSSProperties = {
    color: 'aqua',
    textDecoration: 'underline'
}

const ActiveLink: FC<Props> = ({href, text}) => {
  
  const {asPath} =useRouter();

  return (
    <Link href={href}>
      <a style={ asPath === href? style:undefined}>{text}</a>
    </Link>
  )
}

export default ActiveLink;