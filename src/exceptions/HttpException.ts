class HttpException extends Error {
	public status: number;
	public message: string;
	public success: boolean;
	constructor(status: number, message: string) {
		super(message);
		this.status = status;
		this.message = message;
		this.success = this.status === 200 || this.status === 201 ? true : false;
	}
}

export default HttpException;
