import { NextResponse } from "next/server";
import { user_query } from "./logic/user";


export async function POST(request) 
{
    try
    {
        // For Adding a Single Product
        const data = await request.json(); 
        console.log(data);
        const add_result = await user_query(data); 
        if(add_result.returncode==0)
        {
            
            return NextResponse
            .json(
                {
                    'returncode': 0,
                    'message': 'User Registered',
                    'output': add_result.output
                },
                {
                    status: 200,
                });
        
        }
        else
        {
            return NextResponse
            .json(
                {
                    'returncode': add_result.returncode,
                    'message': add_result.message,
                    'output': add_result.output
                },
                {
                    status: add_result.returncode,
                });
        
        }
    
    }
    catch (error) 
    {
        return NextResponse.json(
            {
                'returncode': 400,
                'message': error.message,
                'output': []
            },
            {
                status: 400,
            });
    }
}