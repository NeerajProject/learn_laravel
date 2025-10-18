
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

  const { delete: destroy, processing } = useForm({});
    
    
    const { accounts } = usePage().props as { accounts: any[] };
    
  const handleDelete = (id: number) => {
  if (confirm('Are you sure you want to delete this account?')) {
    router.delete(`/account/delete/${id}`);
  }
};

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
            <th className="border px-2 py-1">Name</th>
            <th className="border px-2 py-1">Code</th>
            <th className="border px-2 py-1">Type</th>

          </tr>
        </thead>
        <tbody>
          {accounts.map((account) => (
<tr key={account.id} className="cursor-pointer hover:bg-gray-100" onClick={() => router.visit(`/account/${account.id}`)}>
              <td className="border px-2 py-1">{account.name}</td>
              <td className="border px-2 py-1">{account.code}</td>
              <td className="border px-2 py-1">{account.type}</td>
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
