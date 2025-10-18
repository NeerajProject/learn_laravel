
import { Button } from '@/components/ui/button';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { dashboard} from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Account',
        href: '/account',
    },
];

export default function Dashboard() {
    const { accounts } = usePage().props as { accounts: any[] };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Account" />
            <div className='m-4'>
      <Link href="/account/create">
      <Button> Create</Button>
      </Link>
                  </div>
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
             

 <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Accounts</h1>
      <table className="table-auto w-full border">
        <thead>
          <tr>
            <th className="border px-2 py-1">ID</th>
            <th className="border px-2 py-1">Name</th>
            <th className="border px-2 py-1">Code</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account) => (
            <tr key={account.id}>
              <td className="border px-2 py-1">{account.id}</td>
              <td className="border px-2 py-1">{account.name}</td>
              <td className="border px-2 py-1">{account.code}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>


             <div>
                
             </div>
            </div>
        </AppLayout>
    );
}
