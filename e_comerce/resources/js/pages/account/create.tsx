
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


    <div className="container mt-5" style={{ maxWidth: '500px' }}>
      <div
        className="card"
        style={{
          padding: '20px',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        }}
      >
        <h3 className="card-title">Create Account</h3>

        <form
          className="form-container"
          style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
          onSubmit={handleSubmit}
        >
          {/* Name */}
          <div className="input-field">
            <label htmlFor="name" className="mdc-floating-label">
              Account Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mdc-text-field__input"
              placeholder="Cash Account"
       
            />
          </div>

          {/* Code */}
          <div className="input-field">
            <label htmlFor="code" className="mdc-floating-label">
              Account Code
            </label>
            <input
              type="text"
              id="code"
              name="code"
              className="mdc-text-field__input"
              placeholder="1000"
  
            />
          </div>

          {/* Type */}
          <div className="input-field">
            <label htmlFor="type" className="mdc-floating-label">
              Account Type
            </label>
            <select
              id="type"
              name="type"
              className="mdc-select__native-control"
 
            >
              <option value="">Select Type</option>
              <option value="Asset">Asset</option>
              <option value="Liability">Liability</option>
              <option value="Equity">Equity</option>
              <option value="Revenue">Revenue</option>
              <option value="Expense">Expense</option>
            </select>
          </div>

          {/* Sub Type */}
          <div className="input-field">
            <label htmlFor="sub_type" className="mdc-floating-label">
              Sub Type
            </label>
            <input
              type="text"
              id="sub_type"
              name="sub_type"
              className="mdc-text-field__input"
              placeholder="Current Asset"
         
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mdc-button mdc-button--raised"
            style={{ marginTop: '8px' }}
          >
            Create Account
          </button>
        </form>
      </div>
    </div>

            </div>
        </AppLayout>
    );
}
