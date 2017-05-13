
export interface RunResult {

    error: Error;

    body: any;

    tests: { [key: string]: boolean };

    status: number;

    statusMessage: string;

    elapsed: number;

    headers: { [key: string]: string };

    cookies: string[];
}