
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export class CreateCustomerInput {
    idNumber?: string;
    name?: string;
    phone?: string;
    birthday?: Date;
    adress?: string;
    job?: string;
    email?: string;
    code?: string;
    eventName?: string;
}

export class CreateEventInput {
    eventName?: string;
    place?: string;
    organizationName?: string;
    startTime?: Date;
    endTime?: Date;
}

export class CreateOrganizationInput {
    organizationName?: string;
    place?: string;
    hotline?: string;
}

export class CreateStatisticalInput {
    eventName?: string;
    cost?: number;
    numberOfParticipants?: number;
    revenue?: number;
    note?: string;
}

export class UpdateEventInput {
    id?: number;
    eventName?: string;
    place?: string;
    organizationName?: string;
    startTime?: Date;
    endTime?: Date;
}

export class UpdateOrganizationInput {
    id?: number;
    organizationName?: string;
    place?: string;
    hotline?: string;
}

export class UpdateStatisticalInput {
    id?: number;
    eventName?: string;
    cost?: number;
    numberOfParticipants?: number;
    revenue?: number;
    note?: string;
}

export class Customer {
    id?: string;
    idNumber?: string;
    name?: string;
    phone?: string;
    birthday?: Date;
    adress?: string;
    job?: string;
    email?: string;
    code?: string;
    eventName?: string;
}

export class Event {
    id?: number;
    eventName?: string;
    organizationName?: string;
    place?: string;
    startTime?: Date;
    endTime?: Date;
}

export abstract class IMutation {
    abstract createCustomer(createCustomerInput?: CreateCustomerInput): Customer | Promise<Customer>;

    abstract createEvent(createEventInput?: CreateEventInput): Event | Promise<Event>;

    abstract updateEvent(updateEventInput?: UpdateEventInput): Event | Promise<Event>;

    abstract deleteEvent(deleteEventInput?: number): Event | Promise<Event>;

    abstract createOrganization(createOrganizationInput?: CreateOrganizationInput): Organization | Promise<Organization>;

    abstract updateOrganization(updateOrganizationInput?: UpdateOrganizationInput): Organization | Promise<Organization>;

    abstract deleteOrganization(deleteOrganizationInput?: number): Organization | Promise<Organization>;

    abstract createStatistical(createStatisticalInput?: CreateStatisticalInput): Statistical | Promise<Statistical>;

    abstract updateStatistical(updateStatisticalInput?: UpdateStatisticalInput): Statistical | Promise<Statistical>;

    abstract deleteStatistical(deleteStatisticalInput?: number): Statistical | Promise<Statistical>;
}

export class Organization {
    id?: number;
    organizationName?: string;
    place?: string;
    hotline?: string;
}

export abstract class IQuery {
    abstract getCustomers(): Customer[] | Promise<Customer[]>;

    abstract customer(id: string): Customer | Promise<Customer>;

    abstract getCustomerByEvent(eventName?: string): Customer[] | Promise<Customer[]>;

    abstract getEvents(): Event[] | Promise<Event[]>;

    abstract event(id: string): Event | Promise<Event>;

    abstract getOrganizations(): Organization[] | Promise<Organization[]>;

    abstract organization(id: string): Organization | Promise<Organization>;

    abstract getStatisticals(): Statistical[] | Promise<Statistical[]>;

    abstract statistical(id: string): Statistical | Promise<Statistical>;
}

export class Statistical {
    id?: number;
    eventName?: string;
    cost?: number;
    numberOfParticipants?: number;
    revenue?: number;
    note?: string;
}

export abstract class ISubscription {
    abstract customerCreated(): Customer | Promise<Customer>;

    abstract eventCreated(): Event | Promise<Event>;

    abstract organizationCreated(): Organization | Promise<Organization>;

    abstract StatisticalCreated(): Statistical | Promise<Statistical>;
}
