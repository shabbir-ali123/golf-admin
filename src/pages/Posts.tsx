import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import TableThree from '../components/Tables/TableThree';
import DefaultLayout from '../layout/DefaultLayout';
import  {PostContext}  from '../context';

const Tables = () => {
  return (
    <PostContext>

    <DefaultLayout>
      <Breadcrumb pageName="Tables" />

      <div className="flex flex-col gap-10">
            <TableThree />
        
      </div>
    </DefaultLayout>
    </PostContext>
  );
};

export default Tables;
