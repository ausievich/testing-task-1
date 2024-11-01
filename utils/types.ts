export type ProductName =
    | "IntelliJ IDEA Ultimate"
    | "All Products Pack"
    | "CLion"
    | "PyCharm Professional";

export type TabName =
    | "For Organizations"
    | "For Individual Use"
    | "Special Categories";

export type Interval =
    | "Monthly billing"
    | "Yearly billing";


export interface SubscriptionType {
    interval: Interval,
    tabName: TabName
}
