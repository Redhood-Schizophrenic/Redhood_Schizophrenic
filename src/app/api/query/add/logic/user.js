import { getXataClient } from "../../../../../xata";

// Database Connection Pool
const connection = getXataClient();

// Fetch a Single User Credentials
export async function user_query(data) 
{
    try
    {
        if(connection==undefined || connection==null)
        {
            return {
                'returncode': 404,
                'message': "Connection With Xata wasn't established.",
                'output': []
            }
        }

        try 
        {
            const firstname = data['firstname'];
            const lastname = data['lastname'];
            const contact = data['contact'];
            const email = data['email'];
            const message = data['message'];

            const add_query = await connection.db.UserQueries.create({
                FirstName: firstname,
                LastName: lastname,
                Email: email,
                Contact: contact,
                Message: message,
            });

            return {
                'returncode': 0,
                'message': 'Query Added.',
                'output': add_query
            }
        } 
        catch (error)
        {
            return {
                'returncode': 500,
                'message': error.message,
                'output': []
            }
        }

    }
    catch(error)
    {
        return {
            'returncode': 503,
            'message': error.message,
            'output': []
        }
    }
}