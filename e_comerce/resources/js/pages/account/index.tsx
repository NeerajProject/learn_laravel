
import { Button } from '@/components/ui/button';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { dashboard} from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { useForm, router, usePage,Link, Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Account',
        href: '/account',
    },
];

export default function Dashboard() {

   const { accounts, filters } = usePage().props;

  // Form state for filter
  const { data, setData } = useForm({
    type: filters.type || '',
  });

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setData('type', e.target.value);

    router.get('/account', { type: e.target.value }, { preserveState: true, replace: true });
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
      <div>
      {/* Filter */}
      <div className="mb-4 flex items-center gap-2">
        <label>Filter by Type:</label>
        <select value={data.type} onChange={handleFilterChange} className="border px-2 py-1 rounded">
          <option value="">All</option>
          <option value="Asset">Asset</option>
          <option value="Liability">Liability</option>
          <option value="Equity">Equity</option>
          <option value="Revenue">Revenue</option>
          <option value="Expense">Expense</option>
        </select>
      </div>

      {/* Table */}
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
              onClick={() => router.visit(`/account/${account.id}/edit`)}
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
            onClick={() => link.url && router.visit(link.url, { preserveState: true })}
          >
            <span dangerouslySetInnerHTML={{ __html: link.label }} />
          </Button>
        ))}
      </div>
    </div>
    </div>


        </AppLayout>
    );
}
