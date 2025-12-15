export interface Movie {
    id: number;
    title: string;
    description: string;
    duration: number;      
    genre: string;
    posterUrl: string;
}

export const movies: Movie[] = [
    {
        id: 1,
        title: 'Iron Man (2008)',
        description:
            'Tony Stark, một thiên tài công nghệ kiêm tỷ phú vũ khí, bị bắt cóc trong một chuyến thị sát chiến trường. Đối mặt với cái chết, anh buộc phải chế tạo một bộ giáp cơ khí để trốn thoát. Trở về nước, Tony quyết định từ bỏ ngành công nghiệp vũ khí và cải tiến bộ giáp của mình, trở thành Iron Man. Bộ phim đặt nền móng cho Vũ trụ Điện ảnh Marvel, khai sinh hình tượng siêu anh hùng hiện đại gắn liền với công nghệ, trách nhiệm và cái giá của quyền lực.',
        duration: 126,
        genre: 'Action, Sci-Fi',
        posterUrl: '/posters/iron_man_2008.jpg',
    },
    {
        id: 2,
        title: 'The Incredible Hulk (2008)',
        description:
            'Bruce Banner chạy trốn chính phủ và quân đội trong hành trình tìm cách chữa trị lời nguyền biến anh thành Hulk – một sinh vật khổng lồ với sức mạnh hủy diệt khi mất kiểm soát. Song song đó, quân đội Mỹ tạo ra Abomination, một mối đe dọa còn kinh hoàng hơn Hulk. Cuộc đối đầu giữa hai quái vật không chỉ là trận chiến sức mạnh mà còn là bi kịch nội tâm của một người đàn ông sợ chính bản thân mình.',
        duration: 112,
        genre: 'Action, Sci-Fi',
        posterUrl: '/posters/incredible_hulk.jpg',
    },
    {
        id: 3,
        title: 'Thor (2011)',
        description:
            'Thor, vị thần sấm kiêu ngạo của Asgard, bị cha mình là Odin trục xuất xuống Trái Đất để học bài học về sự khiêm nhường. Tại đây, anh gặp Jane Foster và dần hiểu giá trị của con người. Trong khi đó, Loki âm mưu chiếm ngai vàng Asgard. Bộ phim pha trộn thần thoại Bắc Âu với khoa học viễn tưởng, mở rộng MCU sang thế giới thần thánh và định hình mối quan hệ phức tạp giữa hai anh em Thor – Loki.',
        duration: 115,
        genre: 'Action, Fantasy',
        posterUrl: '/posters/thor_2011.jpg',
    },
    {
        id: 4,
        title: 'Captain America: The First Avenger (2011)',
        description:
            'Steve Rogers, một chàng trai gầy yếu nhưng có trái tim quả cảm, tình nguyện tham gia thí nghiệm siêu chiến binh trong Thế chiến II. Trở thành Captain America, anh dẫn đầu cuộc chiến chống lại Hydra và Red Skull. Bộ phim mang màu sắc chiến tranh cổ điển, nhấn mạnh tinh thần hy sinh, lòng yêu nước và lý tưởng anh hùng thuần khiết.',
        duration: 124,
        genre: 'Action, Adventure',
        posterUrl: '/posters/captain_america_1.jpg',
    },
    {
        id: 5,
        title: 'The Avengers (2012)',
        description:
            'Nick Fury tập hợp những siêu anh hùng mạnh nhất Trái Đất gồm Iron Man, Captain America, Thor, Hulk, Black Widow và Hawkeye để đối phó với cuộc xâm lược của Loki. Ban đầu mâu thuẫn và cái tôi cá nhân khiến đội hình rạn nứt, nhưng cuối cùng họ học cách phối hợp và trở thành Avengers. Đây là cột mốc khẳng định MCU là một vũ trụ điện ảnh liên kết thành công.',
        duration: 143,
        genre: 'Action, Sci-Fi',
        posterUrl: '/posters/the_avengers_2012.jpg',
    },
    {
        id: 6,
        title: 'Guardians of the Galaxy (2014)',
        description:
            'Peter Quill cùng nhóm dị hợm gồm Gamora, Drax, Rocket và Groot vô tình trở thành những kẻ bảo vệ thiên hà. Bộ phim mang phong cách hài hước, âm nhạc retro và bối cảnh vũ trụ rộng lớn. Guardians of the Galaxy chứng minh Marvel không chỉ có siêu anh hùng nghiêm túc mà còn có thể điên rồ, cảm xúc và rất giải trí.',
        duration: 121,
        genre: 'Action, Comedy, Sci-Fi',
        posterUrl: '/posters/guardians_1.jpg',
    },
    {
        id: 7,
        title: 'Avengers: Infinity War (2018)',
        description:
            'Thanos bắt đầu cuộc hành trình thu thập đủ sáu viên đá vô cực để thực hiện tham vọng cân bằng vũ trụ bằng cách xóa sổ một nửa sinh vật sống. Avengers và các đồng minh phải chiến đấu trên nhiều mặt trận khác nhau. Bộ phim gây sốc với cái kết bi thảm, đảo lộn mọi quy tắc của dòng phim siêu anh hùng.',
        duration: 149,
        genre: 'Action, Sci-Fi',
        posterUrl: '/posters/infinity_war.jpg',
    },
    {
        id: 8,
        title: 'Avengers: Endgame (2019)',
        description:
            'Sau thất bại trước Thanos, Avengers còn sống sót tập hợp lần cuối để sửa chữa sai lầm trong quá khứ thông qua du hành thời gian. Endgame không chỉ là trận chiến hoành tráng mà còn là lời chia tay đầy cảm xúc với nhiều nhân vật biểu tượng của MCU. Đây là cái kết xứng đáng cho hơn 10 năm xây dựng vũ trụ điện ảnh Marvel.',
        duration: 181,
        genre: 'Action, Sci-Fi',
        posterUrl: '/posters/avengers_endgame.jpg',
    },
    {
        id: 9,
        title: 'Spider-Man: No Way Home (2021)',
        description:
            'Danh tính Spider-Man bị lộ khiến cuộc sống của Peter Parker đảo lộn. Một phép thuật sai lầm của Doctor Strange mở ra đa vũ trụ, kéo theo các phản diện và Spider-Man từ những thế giới khác. Bộ phim khai thác sâu sự trưởng thành, trách nhiệm và mất mát của Peter, đồng thời là bữa tiệc fan-service đúng nghĩa.',
        duration: 148,
        genre: 'Action, Adventure',
        posterUrl: '/posters/spiderman_no_way_home.jpg',
    },
    {
        id: 10,
        title: 'Doctor Strange in the Multiverse of Madness (2022)',
        description:
            'Doctor Strange đối mặt với những hậu quả nguy hiểm của đa vũ trụ khi bảo vệ America Chavez, cô gái có khả năng du hành giữa các thực tại. Bộ phim mang màu sắc kinh dị, hỗn loạn và mở rộng khái niệm đa vũ trụ trong MCU, đặt nền móng cho những xung đột lớn hơn trong tương lai.',
        duration: 126,
        genre: 'Action, Fantasy',
        posterUrl: '/posters/doctor_strange_2.jpg',
    },
];
