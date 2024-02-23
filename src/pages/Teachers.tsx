import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../layout/DefaultLayout';
import TeacherTable from '../components/Tables/TeacherTable';
import { TeacherContext } from '../contexts/TeachersContext';

const Teachers = () => {

    return (
        <TeacherContext>
            <DefaultLayout>
                <Breadcrumb pageName="Teachers" />

                <div className="flex flex-col gap-10">
                    <TeacherTable />
                </div>
            </DefaultLayout>
        </TeacherContext>

    );
};

export default Teachers;
