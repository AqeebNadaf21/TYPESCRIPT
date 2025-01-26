
// Define the interfaces  Base interface.
interface IUserProfile {
    userName: string;
    email: string;
    age?: number; // optional property 
    bio: string;
    isActive: boolean;
    displayProfile(): void;
}


// Implement the interface 

class User implements IUserProfile {
    userName: string;
    email: string;
    age?: number | undefined;
    bio: string;
    isActive: boolean;

    constructor(username: string, email: string, bio: string, isActive: boolean, age?: number | undefined) 
    {
        this.userName = username;
        this.email = email;
        this.bio = bio;
        this.isActive = isActive;
        if (age) {
            this.age = age;
        }
    }
    displayProfile(): void {
       console.log(`UserName: ${this.userName}`);
       console.log(`Email: ${ this.email}`);
       if (this.age) {
        console.log(`Age: ${this.age}`);
        
       }
       console.log(`Bio: ${this.bio}`);
       console.log(`Active: ${this.isActive ? 'Yes': 'No'}`);
       
    }
}

// create the instances 

const user1 = new User('Rocky Bhai', 'kgf@gmail.com', 'Love the acting', true, 45);

const user2 = new User('Amrish Puri', 'puri@gmail.com', 'acting', false);

user1.displayProfile();
user2.displayProfile();


// Extend the Base interface 

interface IRegularUser extends IUserProfile {
    friendList: string[] ; // list of username of friends 
}

interface IAdminUser extends IUserProfile {
    adminSince: Date; // date when the user become an admin
    accessLevel: string; // admin access level
}

// Implement the Extended interfaces


class RegularUserProfile implements IRegularUser {
    
    userName: string;
    email: string;
    age?: number | undefined;
    bio: string;
    isActive: boolean;
    friendList: string[] = [];
    constructor(username: string, email: string, bio: string, isActive: boolean, friendList: string[], age?: number | undefined) 
    {
        this.userName = username;
        this.email = email;
        this.bio = bio;
        this.isActive = isActive;
        if (age) {
            this.age = age;
        }
        this.friendList = friendList;
    }
    displayProfile(): void {
        console.log(`UserName: ${this.userName}`);
        console.log(`Email: ${ this.email}`);
        if (this.age) {
         console.log(`Age: ${this.age}`);
         
        }
        console.log(`Bio: ${this.bio}`);
        console.log(`Active: ${this.isActive ? 'Yes': 'No'}`);
        console.log(`Friends: ${this.friendList.join(', ')}`);
        
    }

}

// create the instance for RegularUserProfile

const regularUser = new RegularUserProfile('Kalam', 'kalam@gmail.com', 'scientist', false, ['sardar', 'vajpayee']);
regularUser.displayProfile();


// Implement AdminUserProfile
class AdminUserProfile implements IAdminUser {
    userName: string;
    email: string;
    age?: number | undefined;
    bio: string;
    isActive: boolean;
    adminSince: Date;
    accessLevel: string;

    constructor(username: string, email: string, bio: string, isActive: boolean, adminSince: Date, accessLevel: string, age?: number | undefined) {
        this.userName = username;
        this.email = email;
        this.bio = bio;
        this.isActive = isActive;
        this.adminSince = adminSince;
        this.accessLevel = accessLevel;
        if (age) {
            this.age = age;
        }
    }

    displayProfile(): void {
        console.log(`UserName: ${this.userName}`);
        console.log(`Email: ${this.email}`);
        if (this.age) {
            console.log(`Age: ${this.age}`);
        }
        console.log(`Bio: ${this.bio}`);
        console.log(`Active: ${this.isActive ? 'Yes' : 'No'}`);
        console.log(`Admin Since: ${this.adminSince.toDateString()}`);
        console.log(`Access Level: ${this.accessLevel}`);
    }
}

// Create an instance of AdminUserProfile
const adminUser = new AdminUserProfile(
    'Admin User',
    'admin@gmail.com',
    'Oversees user management and site administration.',
    true,
    new Date('2020-01-15'), // Date when the user became an admin
    'Super Admin', // Access level
    35 // Optional age
);

// Display the admin user's profile
adminUser.displayProfile();

