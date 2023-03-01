import Link from 'next/link';

export interface IFooter extends React.ComponentPropsWithoutRef<'footer'> {}

const Footer: React.FC<IFooter> = ({ className, ...footerProps }) => {
  return (
    <footer
      {...footerProps}
      className={`w-full p-0 flex flex-col items-start bg-slate-100 text-slate-500 divide-y divide-slate-200 ${className}`}
    >
      <div className="space-y-5 px-8 py-3 w-full">
        <p>Thailand</p>
      </div>

      <div className="px-8 py-3 w-full flex flex-row justify-between">
        <div className="space-x-5 flex flex-row">
          <Link href="/" className="hover:underline">
            About
          </Link>
          <Link href="/" className="hover:underline">
            Advertising
          </Link>
          <Link href="/" className="hover:underline">
            Business
          </Link>
          <Link href="/" className="hover:underline">
            How Search Works
          </Link>
        </div>
        <div className="space-x-5 flex flex-row">
          <Link href="/" className="hover:underline hidden sm:inline">
            Privacy
          </Link>
          <Link href="/" className="hover:underline hidden sm:inline">
            Terms
          </Link>
          <Link href="/" className="hover:underline hidden sm:inline">
            Settings
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
