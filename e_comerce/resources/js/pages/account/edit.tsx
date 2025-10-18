import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { SelectGroup } from '@/components/ui/select';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Form, Head, Link ,useForm,usePage,router} from '@inertiajs/react';
import { Label } from '@radix-ui/react-dropdown-menu';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Account',
        href: '/account',
    },
];

export default function Create() {
    const { props } = usePage();
  const account = props.account;

  const { data, setData, put,delete: destroy, processing, errors } = useForm({
    name: account?.name || '',
    code: account?.code || '',
    type: account?.type || '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    put(`/account/${account.id}/update`, data); // Use PUT for edit
  };

  const handleDelete = () => {
    if (confirm('Are you sure?')) {
        console.log(account.id);
      router.delete(`/account/delete/${account.id}`);
    }
  };


    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Account" />

            <form className='space-y-4' onSubmit={handleSubmit}>
                <div className='m-4'>
                    <Button type="submit" disabled={processing}>Save</Button>
                          <Button type="button" onClick={handleDelete}>Delete</Button>

                </div>
                <div className="w-8/12 p-4 space-y-4">



                    <div className="gap-1.5">
                        <Label>Name</Label>
                        <Input placeholder="Account Name"  value={data.name}
                  onChange={(e) => setData('name', e.target.value)}></Input>
                    </div>
                    <div className="gap-1.5">
                        <Label>Code</Label>
                        <Input placeholder="Code" value={data.code}  onChange={(e) => setData('code', e.target.value)}></Input>
                    </div>
                   <div className="gap-1.5">
  <label htmlFor="type" className="mdc-floating-label">
    Account Type
  </label>
  <div>
  <select  value={data.type}  onChange={(e) => setData('type', e.target.value)}>
    <option value="">Select Type</option>
    <option value="Asset">Asset</option>
    <option value="Liability">Liability</option>
    <option value="Equity">Equity</option>
    <option value="Revenue">Revenue</option>
    <option value="Expense">Expense</option>
  </select>
</div>
</div>

</div>
            </form>








        </AppLayout>
    );
}
