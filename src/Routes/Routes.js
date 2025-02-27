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
import DashboardHome from "../Dashboard/DashboardHome/DashboardHome";
import Login from "../Pages/Auth/Login";

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
                path: '/login',
                element: <Login />
            },
            {
                path: '/admissionForm',
                element: <AdmissionForm />
            },
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
            {
                path: '/dashboard',
        element: <DashboardHome />,
            },
            {
                path: '/dashboard/students',
                element: <AllStudents />
            },
            {
                path: '/dashboard/admissionForm',
                element: <AdmissionForm />
            },
            {
                path: '/dashboard/teachers',
                element: <AllTeachers />
            },
            {
                path: '/dashboard/stu',
                element: <SingleStudent />
            },
            {
                path: '/dashboard/stuPromotion',
                element: <StudentPromotion />
            },
            {
                path: '/dashboard/teacher',
                element: <SingleTeacher />
            },
            {
                path: '/dashboard/addTeacher',
                element: <AddTeachers />
            },
            {
                path: '/dashboard/teacherPayment',
                element: <TeacherPayment />
            },
            {
                path: '/dashboard/allBooks',
                element: <AllBooks />
            },
            {
                path: '/dashboard/addBook',
                element: <AddBook />
            },
            {
                path: '/dashboard/allFees',
                element: <AllFeesCollection />
            },
            {
                path: '/dashboard/expenses',
                element: <Expenses />
            },
            {
                path: '/dashboard/addExpense',
                element: <AddExpense />
            },
            {
                path: '/dashboard/allClassSchedules',
                element: <AllClasses />
            },
            {
                path: '/dashboard/addNewClasses',
                element: <AddClasses />
            },
            {
                path: '/dashboard/subjects',
                element: <Subjects />
            },
            {
                path: '/dashboard/classRoutines',
                element: <ClassRoutine />
            },
            {
                path: '/dashboard/attendance',
                element: <Attendance />
            },
            {
                path: '/dashboard/examSchedules',
                element: <Examinations />
            },
            {
                path: '/dashboard/grades',
                element: <ExamGrades />
            },
            {
                path: '/dashboard/notice',
                element: <Notice />
            },
            {
                path: '/dashboard/users',
                element: <Users />
            },
            {
                path: '/dashboard/singleUser/:id',
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
