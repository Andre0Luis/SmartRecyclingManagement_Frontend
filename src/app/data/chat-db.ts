export class ChatDB {
    public static user = [
      {
        id: '7863a6802ez0e277a0f98534',
        name: 'John Doe',
        avatar: 'assets/images/thumb/user-1.jpg',
        status: 'online',
        chatInfo: [
          {
            chatId: '89564a680b3249760ea21fe77',
            contactId: '323sa680b3249760ea21rt47',
            contactName: 'Loise Meza',
            unread: 4,
            lastChatTime: '2017-06-12T02:10:18.931Z'
          },
          {
            chatId: '3289564a680b2134760ea21fe7753',
            contactId: '14663a3406eb47ffa63d4fec9429cb71',
            contactName: 'Carolin Herb',
            unread: 0,
            lastChatTime: '2017-06-12T02:10:18.931Z'
          }
        ]
      }
    ];
    public static contacts = [
      {
        id: '323sa680b3249760ea21rt47',
        name: 'Chanel Pavlick',
        avatar: 'assets/images/thumb/user-3.jpg',
        status: 'online',
        mood: ''
      },
      {
        id: '14663a3406eb47ffa63d4fec9429cb71',
        name: 'Kristina Dowler',
        avatar: 'assets/images/thumb/user-2.jpg',
        status: 'online',
        mood: ''
      },
      {
        id: '43bd9bc59d164b5aea498e3ae1c24c3c',
        name: 'Phoebe Dollar',
        avatar: 'assets/images/thumb/user-3.jpg',
        status: 'online',
        mood: ''
      },
      {
        id: '3fc8e01f3ce649d1caf884fbf4f698e4',
        name: 'Breana Keirn',
        avatar: 'assets/images/thumb/user-6.jpg',
        status: 'offline',
        mood: ''
      },
      {
        id: 'e929b1d790ab49968ed8e34648553df4',
        name: 'Eliseo Slaton',
        avatar: 'assets/images/thumb/user-1.jpg',
        status: 'online',
        mood: ''
      },
      {
        id: 'd6caf04bba614632b5fecf91aebf4564',
        name: 'Fran Partington',
        avatar: 'assets/images/thumb/user-2.jpg',
        status: 'offline',
        mood: ''
      },
      {
        id: 'be0fb188c8e242f097fafa24632107e4',
        name: 'Owen Pellegrin',
        avatar: 'assets/images/thumb/user-5.jpg',
        status: 'offline',
        mood: ''
      },
      {
        id: 'dea902191b964a68ba5f2d93cff37e13',
        name: 'Parthenia Krawiec',
        avatar: 'assets/images/thumb/user-5.jpg',
        status: 'online',
        mood: ''
      },
      {
        id: '0bf58f5ccc4543a9f8747350b7bda3c7',
        name: 'Barbara Romero',
        avatar: 'assets/images/thumb/user-4.jpg',
        status: 'offline',
        mood: ''
      },
      {
        id: 'c5d7498bbcb84d81fc72168871ac6a6e',
        name: 'Loise Meza',
        avatar: 'assets/images/thumb/user-2.jpg',
        status: 'offline',
        mood: ''
      },
      {
        id: '97bfbdd9413e46efdaca2010400fe18c',
        name: 'Barbara Romero',
        avatar: 'assets/images/thumb/user-1.jpg',
        status: 'offline',
        mood: ''
      }
    ];
    public static chatCollection = [
      {
        id: '89564a680b3249760ea21fe77',
        chats: [
          {
            contactId: '323sa680b3249760ea21rt47',
            text: 'At vero eos et accusamus et iusto odio dignissimos ducimus',
            time: '2018-02-32T08:45:28.291Z'
          },
          {
            contactId: '7863a6802ez0e277a0f98534',
            text: 'Blanditiis praesentium voluptatum deleniti atque corrupti quos',
            time: '2018-02-32T08:45:28.291Z'
          },
          {
            contactId: '323sa680b3249760ea21rt47',
            text: 'Yes',
            time: '2018-02-32T08:45:28.291Z'
          },
          {
            contactId: '7863a6802ez0e277a0f98534',
            text: 'Nam libero tempore, cum soluta nobis est eligendi',
            time: '2018-02-32T08:45:28.291Z'
          },
          {
            contactId: '323sa680b3249760ea21rt47',
            text: 'Temporibus autem quibusdam et aut officiis debitis aut rerum',
            time: '2018-02-32T08:45:28.291Z'
          },
          {
            contactId: '7863a6802ez0e277a0f98534',
            text: 'Temporibus autem quibusdam et aut officiis debitis aut rerum',
            time: '2018-02-32T08:45:28.291Z'
          },
          {
            contactId: '323sa680b3249760ea21rt47',
            text: 'Yes',
            time: '2018-02-32T08:45:28.291Z'
          },
          {
            contactId: '7863a6802ez0e277a0f98534',
            text: 'Nam libero tempore, cum soluta nobis est',
            time: '2018-02-32T08:45:28.291Z'
          }
        ]
      },
      {
        id: '3289564a680b2134760ea21fe7753',
        chats: [
          {
            contactId: '14663a3406eb47ffa63d4fec9429cb71',
            text: 'Itaque earum rerum hic tenetur a sapiente delectus',
            time: '2018-03-32T08:45:28.291Z'
          },
          {
            contactId: '7863a6802ez0e277a0f98534',
            text: 'Ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis',
            time: '2018-03-32T08:45:28.291Z'
          },
          {
            contactId: '14663a3406eb47ffa63d4fec9429cb71',
            text: 'Yes',
            time: '2018-03-32T08:45:28.291Z'
          },
          {
            contactId: '7863a6802ez0e277a0f98534',
            text: 'Nam libero tempore, cum soluta nobis est eligendi',
            time: '2018-03-32T08:45:28.291Z'
          }
        ]
      }
    ];
  }
