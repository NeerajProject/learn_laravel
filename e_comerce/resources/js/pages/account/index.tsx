
import { Button } from '@/components/ui/button';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { dashboard} from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head, Link ,router} from '@inertiajs/react';
import { usePage ,useForm} from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Account',
        href: '/account',
    },
];

export default function Dashboard() {

  const { accounts } = usePage().props;

  const goToPage = (page: number) => {
    router.get(`/account?page=${page}`, {}, { preserveState: true });
  };
    


    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Account" />
            <div className='m-4'>
      <Link href="/account/create">
      <Button> Create</Button>
      </Link>
                  </div>


<div>
      <table className="w-full border">
        <thead>
          <tr>
            <th>Name</th>
            <th>Code</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {accounts.data.map((account: any) => (
            <tr
              key={account.id}
              className="cursor-pointer hover:bg-gray-100"
              onClick={() => router.visit(`/account/${account.id}`)}
            >
              <td>{account.name}</td>
              <td>{account.code}</td>
              <td>{account.type}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex gap-2 mt-4">
        {accounts.links.map((link: any, index: number) => (
          <Button
            key={index}
            disabled={!link.url}
            onClick={() => link.url && router.visit(link.url)}
          >
            <span dangerouslySetInnerHTML={{ __html: link.label }} />
          </Button>
        ))}
      </div>
    </div>


        </AppLayout>
    );
}
