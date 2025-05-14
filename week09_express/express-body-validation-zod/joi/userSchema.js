import { z } from 'zod';

// Define an schema. A template for an object
const userSchema = z.object({
    firstName: z.string().min(3).max(30),
    firstName: z.string().min(3).max(30),
    email: z.string().email(),
});

export default userSchema;
