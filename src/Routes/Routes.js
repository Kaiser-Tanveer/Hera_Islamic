import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import DashboardLayout from "../Layouts/DashboardLayout";
import AllStudents from "../Pages/Students/AllStudents/AllStudents";
import SingleStudent from "../Pages/Students/AllStudents/SingleStudent";
import NotFound from "../Shared/NotFound/NotFound";
import AdmissionForm from "../Pages/Students/AdmissionForm/AdmissionForm";
import StudentPromotion from "../Pages/Students/StudentPromotion/StudentPromotion";
import AllTeachers from "../Pages/Teachers/AllTeachers/AllTeachers";
import SingleTeacher from "../Pages/Teachers/AllTeachers/SingleTeacher";
import AddTeachers from "../Pages/Teachers/AddTeachers/AddTeachers";
import TeacherPayment from "../Pages/Teachers/Payment/TeacherPayment";
import AllBooks from "../Pages/Libraries/AllBooks/AllBooks";
import AddBook from "../Pages/Libraries/AddBook/AddBook";
import AllFeesCollection from "../Pages/Account/AllFeesCollection/AllFeesCollection";
import Expenses from "../Pages/Account/Expenses/Expenses";
import AddExpense from "../Pages/Account/AddExpense/AddExpense";
import AllClasses from "../Pages/Classes/AllClasses/AllClasses";
import AddClasses from "../Pages/Classes/AddClasses/AddClasses";
import Subjects from "../Pages/Subjects/Subjects";
import ClassRoutine from "../Pages/ClassRoutines/ClassRoutine";
import Attendance from "../Pages/Attendance/Attendance";
import Examinations from "../Pages/Exams/ExamSchedules/Examinations";
import ExamGrades from "../Pages/Exams/ExamGrades/ExamGrades";
import Notice from "../Pages/Notice/Notice";
import Users from "../Pages/Users/Users";
import SingleUser from "../Pages/Users/AllUsers/SingleUser";
import Layout from "../Layouts/Layout";

const Router = createBrowserRouter([
    {
        path: '*',
        element: <NotFound />
    },
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: 'admissionForm',  // Removed leading slash
                element: <AdmissionForm />
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
            {
                path: '/dashboard/students',  // Removed leading slash
                element: <AllStudents />
            },
            {
                path: '/dashboard/teachers',  // Removed leading slash
                element: <AllTeachers />
            },
            {
                path: '/dashboard/stu',  // Removed leading slash
                element: <SingleStudent />
            },
            {
                path: '/dashboard/stuPromotion',  // Removed leading slash
                element: <StudentPromotion />
            },
            {
                path: '/dashboard/teacher',  // Removed leading slash
                element: <SingleTeacher />
            },
            {
                path: '/dashboard/addTeacher',  // Removed leading slash
                element: <AddTeachers />
            },
            {
                path: '/dashboard/teacherPayment',  // Removed leading slash
                element: <TeacherPayment />
            },
            {
                path: '/dashboard/allBooks',  // Removed leading slash
                element: <AllBooks />
            },
            {
                path: '/dashboard/addBook',  // Removed leading slash
                element: <AddBook />
            },
            {
                path: '/dashboard/allFees',  // Removed leading slash
                element: <AllFeesCollection />
            },
            {
                path: '/dashboard/expenses',  // Removed leading slash
                element: <Expenses />
            },
            {
                path: '/dashboard/addExpense',  // Removed leading slash
                element: <AddExpense />
            },
            {
                path: '/dashboard/allClassSchedules',  // Removed leading slash
                element: <AllClasses />
            },
            {
                path: '/dashboard/addNewClasses',  // Removed leading slash
                element: <AddClasses />
            },
            {
                path: '/dashboard/subjects',  // Removed leading slash
                element: <Subjects />
            },
            {
                path: '/dashboard/classRoutines',  // Removed leading slash
                element: <ClassRoutine />
            },
            {
                path: '/dashboard/attendance',  // Removed leading slash
                element: <Attendance />
            },
            {
                path: '/dashboard/examSchedules',  // Removed leading slash
                element: <Examinations />
            },
            {
                path: '/dashboard/grades',  // Removed leading slash
                element: <ExamGrades />
            },
            {
                path: '/dashboard/notice',  // Removed leading slash
                element: <Notice />
            },
            {
                path: '/dashboard/users',  // Removed leading slash
                element: <Users />
            },
            {
                path: '/dashboard/singleUser/:id',  // Removed leading slash
                element: <SingleUser />,
                loader: async ({ params }) => {
                    const response = await fetch('/Users/Users.json');
                    if (!response.ok) {
                        throw new Response('User data not found', { status: 404 });
                    }

                    const users = await response.json();
                    const user = users?.find(user => user?.id === params?.id);
                    
                    if (!user) {
                        throw new Response('User not found', { status: 404 });
                    }

                    return user;
                }
            }
        ]
    }
]);

export default Router;
