// accountInfo
// charInfo
// playerInfo

type AccountInfo = {
    id: number | string;
    name: string;
    // ? -> optional
    email?: string;
};

const account: AccountInfo = {
    id: 123,
    name: "Willian"
};

type CharInfo = {
    nickname: string;
    level: number;
};

const char: CharInfo = {
    nickname: "lol",
    level: 100
};

// intersection
type PlayerInfo = AccountInfo & CharInfo;

const player: PlayerInfo = {
    name: "will",
    nickname: "willjusten",
    id: "123",
    level: 100
};
