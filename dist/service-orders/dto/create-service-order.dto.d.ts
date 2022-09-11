export declare class CreateServiceOrderDto {
    name: string;
    account: string;
    price: number;
    leader: string;
    serviceId: string;
    serviceName: string;
    serviceOrderId: string;
    year: number;
    billingDate: Date;
    status: string;
    milestone: string;
    responsibleTeam: {
        teamId: string;
        teamMembers: [
        ];
    };
    billingOrders?: [
        {}
    ];
}
