import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../layout/DefaultLayout';
import  {PostContext}  from '../context';
import PostTable from '../components/Tables/PostTable';

const Tables = () => {
  return (
    <PostContext>

    <DefaultLayout>
      <Breadcrumb pageName="Posts" />

      <div className="flex flex-col gap-10">
            <PostTable />
      </div>
    </DefaultLayout>
    </PostContext>
  );
};

export default Tables;
