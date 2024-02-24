import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../layout/DefaultLayout';
import TeacherTable from '../components/Tables/TeacherTable';
import EventTable from '../components/Tables/EventTable';

const Events = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Events" />

      <div className="flex flex-col gap-10">
        <EventTable />
      </div>
    </DefaultLayout>
  );
};

export default Events;
