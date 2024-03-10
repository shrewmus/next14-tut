import Link from 'next/link';
import NavLink from '@/components/navbar/links/navLink/navLink';

const Links = () => {

    // mock data
    const session = true;
    const isAdmin = true;

    const links = [
        { title: 'Homepage', path: '/'},
        { title: 'About', path: '/about'},
        { title: 'Contact', path: '/contact'},
        { title: 'Blog', path: '/blog'},
    ]

  return (
    <div>
        {links.map((link) => (
           <NavLink item={link} key={link.title}/>
        ))}
        {session
            ? (
                <>
                    {isAdmin && (<NavLink item={{title: 'Admin', path: '/admin'}}/>)}
                    <button>Logout</button>
                </>
            )
            : (<NavLink item={{title: 'Login', path: '/login'}}/>)
        }
    </div>
  );
}

export default Links;
