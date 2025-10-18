import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { SelectGroup } from '@/components/ui/select';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Form, Head, Link ,useForm} from '@inertiajs/react';
import { Label } from '@radix-ui/react-dropdown-menu';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Account',
        href: '/account',
    },
];

export default function Create() {
      const { data, setData, post, processing, errors } = useForm({
    name: '',
    code: '',
    type: '',
  });

      const handleSubmit = (e) => {
    e.preventDefault();
  };


    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Account" />

            <form className='space-y-4' onSubmit={handleSubmit}>
                <div className='m-4'>
                    <Button type="submit" disabled={processing}>Save</Button>
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
