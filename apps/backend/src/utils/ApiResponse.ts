export class ApiResponse {
    public statusCode:number

    public success:boolean
    public message:string
    public data:unknown
    constructor(statusCode:number,message:string='success',data:unknown=null){

        this.statusCode=statusCode
        this.message=message
        this.data=data
        this.success=statusCode<400
    }
}
