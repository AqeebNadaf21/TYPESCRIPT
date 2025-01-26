// Implement the interface 
var User = /** @class */ (function () {
    function User(username, email, bio, isActive, age) {
        this.userName = username;
        this.email = email;
        this.bio = bio;
        this.isActive = isActive;
        if (age) {
            this.age = age;
        }
    }
    User.prototype.displayProfile = function () {
        console.log("UserName: ".concat(this.userName));
        console.log("Email: ".concat(this.email));
        if (this.age) {
            console.log("Age: ".concat(this.age));
        }
        console.log("Bio: ".concat(this.bio));
        console.log("Active: ".concat(this.isActive ? 'Yes' : 'No'));
    };
    return User;
}());
// create the instances 
var user1 = new User('Rocky Bhai', 'kgf@gmail.com', 'Love the acting', true, 45);
var user2 = new User('Amrish Puri', 'puri@gmail.com', 'acting', false);
user1.displayProfile();
user2.displayProfile();
// Implement the Extended interfaces
var RegularUserProfile = /** @class */ (function () {
    function RegularUserProfile(username, email, bio, isActive, friendList, age) {
        this.friendList = [];
        this.userName = username;
        this.email = email;
        this.bio = bio;
        this.isActive = isActive;
        if (age) {
            this.age = age;
        }
        this.friendList = friendList;
    }
    RegularUserProfile.prototype.displayProfile = function () {
        console.log("UserName: ".concat(this.userName));
        console.log("Email: ".concat(this.email));
        if (this.age) {
            console.log("Age: ".concat(this.age));
        }
        console.log("Bio: ".concat(this.bio));
        console.log("Active: ".concat(this.isActive ? 'Yes' : 'No'));
        console.log("Friends: ".concat(this.friendList.join(', ')));
    };
    return RegularUserProfile;
}());
// create the instance for RegularUserProfile
var regularUser = new RegularUserProfile('Kalam', 'kalam@gmail.com', 'scientist', false, ['sardar', 'vajpayee']);
regularUser.displayProfile();
// Implement AdminUserProfile
var AdminUserProfile = /** @class */ (function () {
    function AdminUserProfile(username, email, bio, isActive, adminSince, accessLevel, age) {
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
    AdminUserProfile.prototype.displayProfile = function () {
        console.log("UserName: ".concat(this.userName));
        console.log("Email: ".concat(this.email));
        if (this.age) {
            console.log("Age: ".concat(this.age));
        }
        console.log("Bio: ".concat(this.bio));
        console.log("Active: ".concat(this.isActive ? 'Yes' : 'No'));
        console.log("Admin Since: ".concat(this.adminSince.toDateString()));
        console.log("Access Level: ".concat(this.accessLevel));
    };
    return AdminUserProfile;
}());
// Create an instance of AdminUserProfile
var adminUser = new AdminUserProfile('Admin User', 'admin@gmail.com', 'Oversees user management and site administration.', true, new Date('2020-01-15'), // Date when the user became an admin
'Super Admin', // Access level
35 // Optional age
);
// Display the admin user's profile
adminUser.displayProfile();
