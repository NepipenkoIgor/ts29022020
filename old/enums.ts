enum Size {
    S = 42,
    M = 48,
    X = 52
}

const size1 = Size.M;
const size2 = Size[48];

enum UserActions {
    AddUser = 'Add new user',
    RemoveUser = 'Remove new user',
    DeleteUser = RemoveUser
}

enum Tooltip {
    TOP,
    BOTTOM
}
