
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { useForm, Link } from '@inertiajs/react';

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
        sub_type: '',
     });

    const handleSubmit = (e) => {
     e.preventDefault();
     post(route('account.store'),data);
  };

    
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Account" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
             
            </div>
        </AppLayout>
    );
}
