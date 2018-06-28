/// <reference types="express" />
import * as express from 'express';
export interface Plugin {
}
export declare class Application {
    private server;
    private loaded;
    private plugin;
    private app;
    PORT: number;
    constructor(connected?: boolean);
    init(): void;
    registerController(controller: any): void;
    getExpressApp(): express.Application;
    private setUploadsFolder();
    private hostSwaggerDocs();
    private config();
    private handerErrors();
    /**
     * Start the server
     * @returns {Promise<any>}
     */
    start(): Promise<any>;
    /**
     * Stop the server (if running).
     * @returns {Promise<boolean>}
     */
    stop(): Promise<boolean>;
}
