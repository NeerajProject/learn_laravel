import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Form, Head, Link } from '@inertiajs/react';
import { Label } from '@radix-ui/react-dropdown-menu';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Account',
        href: '/account',
    },
];

export default function Create() {
//     const { data, setData, post, processing, errors } = useForm({
//         name: '',
//         code: '',
//         type: '',
//         sub_type: '',
//      });

//     const handleSubmit = (e) => {
//      e.preventDefault();
//      post(route('account.store'),data);
//   };

    
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Account" />
         
       <form className='space-y-4'>
            <div className='m-4'>
                <Button type="submit">Save</Button>
            </div>
            <div className="w-8/12 p-4 space-y-4">



<div className="gap-1.5">
<Label>Name</Label>
<Input placeholder="Product Name"></Input>
</div>
<div className="gap-1.5">
<Label>Price</Label>
<Input placeholder="Price" ></Input>
</div>
<div className="gap-1.5">
<Label >Description</Label> 
</div>
            </div>
           
                        </form>
        
           



      
    

        </AppLayout>
    );
}
