import { allUsersStore } from '../../contexts/AllUsers';

interface Users {
  imageUrl: string,
  nickName: string
  email: string
}
const UsersTable = () => {
  const { totalUsers } = allUsersStore();
  
  console.log(totalUsers?.users.map((item: Users) => item))
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        All Users
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              NAME
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              EMAIL
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              STATUS
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              LAST SIGNIN
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              N.O OF POSTS
            </h5>
          </div>
        </div>

        {totalUsers?.users.map((user: Users, index: number) => {
          return (
            <div
              className={`grid grid-cols-3 sm:grid-cols-5 ${index === totalUsers.length - 1
                  ? ''
                  : 'border-b border-stroke dark:border-strokedark'
                }`}
              key={index}
            >
              <div className="flex items-center gap-3 p-2.5 xl:p-5">
                <div className="flex-shrink-0">
                  <img className='w-12 h-12 rounded-full' src={user.imageUrl || ''} alt="Brand" />
                </div>
                <p className="hidden text-black dark:text-white sm:block">
                  {user.nickName}s
                </p>
              </div>
              <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{user.email}</p>
            </div>
            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">Active</p>
            </div>
            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">10 days ago</p>
            </div>
            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">10</p>
            </div>
            </div>
          )
        }
        )}
      </div>
    </div>
  );
};

export default UsersTable;
