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
import AddRoutine from "../Pages/ClassRoutines/AddRoutine";
import ClassRoutine from "../Pages/ClassRoutines/ClassRoutine";
import StudentAttendance from "../Pages/Attendance/StudentAttendance/StudentAttendance";
import Attendance from "../Pages/Attendance/Attendance";
import Examinations from "../Pages/Exams/ExamSchedules/Examinations";
import ExamGrades from "../Pages/Exams/ExamGrades/ExamGrades";

const Router = createBrowserRouter([
    {
        path: '*',
        element: <NotFound/>
    },
    {
        path: '/',
        element: <DashboardLayout/>,
        children: [
            {
                path: '/dashboard',
                element: <Home />,
            },
            {
                path: '/students',
                element: <AllStudents/>
            },
            {
                path: '/stu',
                element: <SingleStudent/>
            },
            {
                path: '/admissionForm',
                element: <AdmissionForm/>
            },
            {
                path: '/stuPromotion',
                element: <StudentPromotion/>
            },
            {
                path: '/teachers',
                element: <AllTeachers/>
            },
            {
                path: '/teacher',
                element: <SingleTeacher/>
            },
            {
                path: '/addTeacher',
                element: <AddTeachers/>
            },
            {
                path: '/teacherPayment',
                element: <TeacherPayment/>
            },
            {
                path: '/allBooks',
                element: <AllBooks/>
            },
            {
                path: '/addBook',
                element: <AddBook/>
            },
            {
                path: '/allFees',
                element: <AllFeesCollection/>
            },
            {
                path: '/expenses',
                element: <Expenses/>
            },
            {
                path: '/addExpense',
                element: <AddExpense/>
            },
            {
                path: '/allClassSchedules',
                element: <AllClasses/>
            },
            {
                path: '/addNewClasses',
                element: <AddClasses/>
            },
            {
                path: '/subjects',
                element: <Subjects/>
            },
            {
                path: '/classRoutines',
                element: <ClassRoutine/>
            },
            {
                path: '/attendance',
                element: <Attendance/>
            },
            {
                path: '/examSchedules',
                element: <Examinations/>
            },
            {
                path: '/grades',
                element: <ExamGrades/>
            },
            // {
            //     path: '/logIn',
            //     element: <LogIn />
            // },
            // {
            //     path: '/reg',
            //     element: <Register />
            // },
        ]
    }
]);

export default Router;