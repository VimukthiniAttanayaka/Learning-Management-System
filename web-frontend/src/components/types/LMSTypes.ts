export interface IMyCourse {
    name: string;
    semester: string;
}
export interface IAllCourse {
    id: number;
    name: string;
    semester:string;
    // faculty: number;
}
export interface ITutorialMarks {
    name: string;
    weight: string;
    grade: string;
    range: string;
    total: string;
}
export interface ICourseMarks {
    name: string;
    semester: string;
    grade: string;
    gpa: string;
}
export interface IAssignTask {
    name: string;
    assignDate: string;
    dueDate: string;
}
export interface DropDown {
    value: string;
    label: string;
  }