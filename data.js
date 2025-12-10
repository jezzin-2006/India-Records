const placesData = [
    {
        id: 1,
        title: "Statue of Unity",
        recordType: "World's Tallest Statue",
        state: "Gujarat",
        description: "Standing at 182 meters, the Statue of Unity is a colossal statue of Indian statesman and independence activist Sardar Vallabhbhai Patel. It is the world's tallest statue.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Statue_of_Unity358.jpg",
        visitorInfo: "Best time: Oct-Mar. Open 8 AM - 6 PM. Closed Mondays.",
        tags: ["Engineering", "Tourism"]
    },
    {
        id: 2,
        title: "Jatayu Earth Center",
        recordType: "World's Largest Bird Sculpture",
        state: "Kerala",
        description: "A massive concrete sculpture spanning 200 feet, depicting the mythical bird Jatayu. It features a digital museum and a 6D theater inside the bird.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Jatayu_sculpture.jpg",
        visitorInfo: "Best time: Evenings for sunset. Nearest station: Kollam.",
        tags: ["Nature", "Mythology", "Kerala Pride"]
    },
    {
        id: 3,
        title: "Idukki Arch Dam",
        recordType: "Asia's First Arch Dam",
        state: "Kerala",
        description: "One of the highest arch dams in Asia, constructed across the Periyar River between two granite hills.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Idukki_Dam_%28Medium%29.jpg",
        visitorInfo: "Best time: Monsoon season. Boat rides available.",
        tags: ["Dam", "Kerala Pride"]
    },
    {
        id: 4,
        title: "Taj Mahal",
        recordType: "UNESCO World Heritage",
        state: "Uttar Pradesh",
        description: "An ivory-white marble mausoleum on the right bank of the river Yamuna, commissioned in 1632 by the Mughal emperor Shah Jahan.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg",
        visitorInfo: "Closed on Fridays. Night viewing available on Full Moon.",
        tags: ["History", "Architecture"]
    },
    {
        id: 5,
        title: "Chenab Bridge",
        recordType: "World's Highest Railway Bridge",
        state: "Jammu & Kashmir",
        description: "A steel and concrete arch bridge which is 359 meters above the river bed, making it higher than the Eiffel Tower.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2a/FsORR8_XoAA5GL2.jpg",
        visitorInfo: "Currently a restricted engineering site, best viewed from viewpoints.",
        tags: ["Engineering", "Trains"]
    }
    ,
    {
        id: 6,
        title: "Qutub Minar",
        recordType: "World's Tallest Brick Minaret",
        state: "Delhi",
        description: "Standing at 73 meters, this 12th-century victory tower is the tallest minaret in the world built entirely of bricks. It has a spiral staircase of 379 steps.",
        imageUrl: "https://i0.wp.com/pixahive.com/wp-content/uploads/2020/08/Qutub-minar-20205-pixahive.jpg?fit=1560%2C873&ssl=1",
        visitorInfo: "Open daily. Best time: Winter mornings. Light show in the evening.",
        tags: ["Tallest", "History", "Architecture"]
    },
    {
        id: 7,
        title: "Majuli Island",
        recordType: "World's Largest River Island",
        state: "Assam",
        description: "A massive island formed by the Brahmaputra river system. It is recognized by Guinness World Records as the largest river island on the planet.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/68/Majuli_Island.jpg",
        visitorInfo: "Accessible by ferry from Jorhat. Best visited during the Raas festival in November.",
        tags: ["Largest", "Nature", "River"]
    },
    {
        id: 8,
        title: "Gomateshwara Statue",
        recordType: "World's Tallest Monolithic Statue",
        state: "Karnataka",
        description: "Carved from a single block of granite, this 57-foot tall statue of Bahubali is a marvel of ancient engineering. It is one of the largest free-standing statues in the world.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Gommateshvara_Bahubali.jpg",
        visitorInfo: "Climb of 600+ steps required. Famous for the Mahamastakabhisheka festival every 12 years.",
        tags: ["Tallest", "Ancient", "Stone"]
    },
    {
        id: 9,
        title: "Pamban Bridge",
        recordType: "India's First Sea Bridge",
        state: "Tamil Nadu",
        description: "Opened in 1914, this was India's first sea bridge. It connects the town of Rameswaram on Pamban Island to mainland India. It opens up in the middle to let ships pass.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Pamban_Bridge_Train_Passing.jpg",
        visitorInfo: "Best viewed from the road bridge parallel to it. Train journey across it is famous.",
        tags: ["First", "Engineering", "Ocean"]
    },
    {
        id: 10,
        title: "Hubli Junction Platform",
        recordType: "World's Longest Railway Platform",
        state: "Karnataka",
        description: "Officially recognized by Guinness World Records, Platform No. 8 at Hubli Junction measures a staggering 1,507 meters (1.5 km) long.",
        imageUrl: "https://theindianeye.com/wp-content/uploads/2025/04/hubballi_platform-world-longest-upl.jpg",
        visitorInfo: "It's an active station. You can walk the full length if you have the energy!",
        tags: ["Longest", "Railways", "Modern Record"]
    },
    {
        id: 11,
        title: "Bhadla Solar Park",
        recordType: "World's Largest Solar Park",
        state: "Rajasthan",
        description: "Spanning over 14,000 acres, this is the largest solar power park in the world by size and capacity. It is so big it is clearly visible from space.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6a/AMP_Energy_Bhadla_Solar_Power_Plant.jpg",
        visitorInfo: "Located in Jodhpur district. Restricted area, but viewable from nearby high points.",
        tags: ["Largest", "Technology", "Future"]
    },
    {
        id: 12,
        title: "Banasura Sagar Dam",
        recordType: "India's Largest Earth Dam",
        state: "Kerala",
        description: "Located in Wayanad, this is the largest earthen dam in India and the second largest in all of Asia. It is made entirely of massive stacks of stones and earth.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/99/Banasura_Sagar_Dam_Wayanad.jpg",
        visitorInfo: "Best time: Nov-May. Speed boating is a major attraction here.",
        tags: ["Largest", "Engineering", "Wayanad"]
    },
    {
        id: 13,
        title: "Vembanad Lake",
        recordType: "India's Longest Lake",
        state: "Kerala",
        description: "Spanning over 96 km in length, Vembanad is the longest lake in India. It is the heart of Kerala's backwaters and hosts the famous Nehru Trophy Boat Race.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Vembanad_Lake.jpg",
        visitorInfo: "Best visited during the Onam season (August/September) to see the snake boat races.",
        tags: ["Longest", "Nature", "Backwaters"]
    },
    {
        id: 14,
        title: "Muzhappilangad Beach",
        recordType: "Asia's Longest Drive-In Beach",
        state: "Kerala",
        description: "A rare 4km stretch of sand where you can legally drive your car or bike right next to the ocean waves. It is the longest drive-in beach in Asia.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Muzhappilangad_Beach_by_Shahil_Kannur_3.jpg",
        visitorInfo: "Located in Kannur. Best for sunset drives. April is the beach festival season.",
        tags: ["Longest", "Adventure", "Kannur"]
    },
    {
        id: 15,
        title: "Padmanabhaswamy Temple",
        recordType: "World's Richest Temple",
        state: "Kerala",
        description: "Located in Thiruvananthapuram, this temple holds the title of the wealthiest religious institution in the world, with secret vaults containing billions of dollars in gold and gems.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/38/Sree_Padmanabhaswamy_Temple.JPG",
        visitorInfo: "Strict dress code (Mundu/Saree). Non-Hindus are generally not allowed inside the sanctum.",
        tags: ["Richest", "History", "Trivandrum"]
    },
    {
        id: 16,
        title: "Kochi Water Metro",
        recordType: "India's First Water Metro",
        state: "Kerala",
        description: "Kochi is the first city in India to integrate water transport as a proper 'Metro' system. These are modern, air-conditioned electric boats connecting islands to the mainland.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4a/KWM_Boat.jpg",
        visitorInfo: "A ride costs as little as ₹20. Best route: High Court to Vypeen.",
        tags: ["First", "Technology", "Kochi"]
    },
    {
        id: 17,
        title: "Nilambur Teak Museum",
        recordType: "World's First Teak Museum",
        state: "Kerala",
        description: "Established in 1995, this is the first museum in the world dedicated entirely to Teak wood. It is located near the world's oldest teak plantation.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Teak_museum_nilambur.jpg",
        visitorInfo: "Located in Malappuram district. Open 10 AM - 4:30 PM (Closed Mondays).",
        tags: ["First", "Nature", "Malappuram"]
    }, 
    {
        id: 18,
        title: "Cheraman Juma Masjid",
        recordType: "India's First Mosque",
        state: "Kerala",
        description: "Built in 629 AD in Kodungallur, this is the very first mosque ever built in India and the oldest in the Indian subcontinent. It reflects traditional Kerala architecture.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/65/Cheraman_Masjid_2.jpg",
        visitorInfo: "Open to visitors of all religions. Located in Methala, Kodungallur.",
        tags: ["First", "History", "Thrissur"]
    },
    {
        id: 19,
        title: "St. Francis Church",
        recordType: "India's Oldest European Church",
        state: "Kerala",
        description: "Built in 1503 in Fort Kochi, this is the oldest European church in India. The Portuguese explorer Vasco da Gama was originally buried here.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/ca/St._Francis_CSI_Church%2C_in_Kochi.jpg",
        visitorInfo: "Open daily. A major landmark in Fort Kochi.",
        tags: ["Oldest", "History", "Kochi"]
    },
    {
        id: 20,
        title: "Thenmala Ecotourism",
        recordType: "India's First Planned Ecotourism",
        state: "Kerala",
        description: "Thenmala is India's first planned ecotourism destination. It features a butterfly safari park, deer rehabilitation center, and adventure zones.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/98/Thenmala_ecotourism_butterfly_park.jpg",
        visitorInfo: "Located in Kollam. Boating and trekking available. Closed on Mondays.",
        tags: ["First", "Nature", "Kollam"]
    },
    {
        id: 21,
        title: "Vizhinjam Seaport",
        recordType: "India's First Deepwater Mother Port",
        state: "Kerala",
        description: "Located in Thiruvananthapuram, this is India's first automated deepwater transshipment terminal, capable of docking the world's largest cargo ships.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8f/MSC_IRINA_TRIVANDRUM_PORT_HD.jpg",
        visitorInfo: "Viewable from the Azhimala viewpoint. A modern engineering marvel.",
        tags: ["First", "Engineering", "Trivandrum"]
    },
    {
        id: 22,
        title: "Lulu Mall Kochi",
        recordType: "One of India's Largest Malls",
        state: "Kerala",
        description: "Spanning 17 acres with a built-up area of over 1.85 million sq ft, it is one of the largest shopping malls in India, featuring an indoor skating rink and hypermarket.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/34/Lulu_Mall_Kochi_interior.jpg",
        visitorInfo: "Located at Edappally. Open 10 AM - 11 PM. Extremely crowded on weekends.",
        tags: ["Largest", "Shopping", "Kochi"]
    }, 
    {
        id: 23,
        title: "Willingdon Island",
        recordType: "India's Largest Artificial Island",
        state: "Kerala",
        description: "A massive man-made island in Kochi, created in 1936 by dredging the lake. It is officially the largest artificial island in India and houses the Port of Kochi and the Indian Navy Base.",
        imageUrl: "https://vajiramandravi.com/current-affairs/wp-content/uploads/2025/04/willingdon_island.webp",
        visitorInfo: "Accessible via road and ferry. A great place to see massive ships up close.",
        tags: ["Largest", "Engineering", "Kochi"]
    },
    {
        id: 24,
        title: "Punalur Suspension Bridge",
        recordType: "South India's First Motor Bridge",
        state: "Kerala",
        description: "Built in 1877 by the British, this was the first suspension bridge in South India designed for vehicles. It hangs on massive iron chains and is a protected historic monument today.",
        imageUrl: "https://www.keralatourism.org/images/enchanting_kerala/large/punalur_suspension_bridge20201005122042_1022_1.jpg",
        visitorInfo: "Located in Kollam. Vehicles are banned now, but you can walk across it.",
        tags: ["First", "Bridge", "Kollam"]
    },
    {
        id: 25,
        title: "Bible Tower",
        recordType: "Asia's Tallest Church Tower",
        state: "Kerala",
        description: "Standing at 260 feet (79 meters), this tower at the Puthenpally Church in Thrissur is widely recognized as the tallest church tower in Asia. It offers a 360-degree view of the city.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Bible_Tower_Thrissur.jpg/640px-Bible_Tower_Thrissur.jpg",
        visitorInfo: "Open daily. There is a lift to take you to the top observation deck.",
        tags: ["Tallest", "Architecture", "Thrissur"]
    },
    {
        id: 26,
        title: "Bekal Fort",
        recordType: "Kerala's Largest Fort",
        state: "Kerala",
        description: "Spanning 40 acres, this massive keyhole-shaped fort is the largest in Kerala. Unlike other forts, it was built purely for defense with no palace inside, offering stunning sea views.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Bekal_Fort_Kasaragod.jpg/640px-Bekal_Fort_Kasaragod.jpg",
        visitorInfo: "Located in Kasaragod. Famous filming location for the movie 'Bombay'.",
        tags: ["Largest", "History", "Kasaragod"]
    },
    {
        id: 27,
        title: "Edakkal Caves",
        recordType: "Only Neolithic Stone Age Writings",
        state: "Kerala",
        description: "These are not technically caves but a massive cleft in the rock. They contain the only known Stone Age carvings in South India, dating back to 6,000 BC.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Edakkal_Caves_Wayanad.jpg/640px-Edakkal_Caves_Wayanad.jpg",
        visitorInfo: "Requires a steep trek. Located in Wayanad. Closed on Mondays.",
        tags: ["Oldest", "History", "Wayanad"]
    },
    {
        id: 28,
        title: "Anamudi Peak",
        recordType: "Tallest Peak in South India",
        state: "Kerala",
        description: "Standing at a massive 2,695 meters (8,842 ft), Anamudi is the highest point in India outside the Himalayas. It is known as the 'Everest of South India'.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Anamudi_Peak_Munnar.jpg/640px-Anamudi_Peak_Munnar.jpg",
        visitorInfo: "Located in Eravikulam National Park, Munnar. Trekking to the summit is currently restricted for conservation.",
        tags: ["Tallest", "Nature", "Munnar"]
    },
    {
        id: 29,
        title: "Azhimala Shiva Statue",
        recordType: "Tallest Gangadhareshwara Statue",
        state: "Kerala",
        description: "This stunning 58-foot-tall concrete statue of Lord Shiva stands right on the edge of a cliff facing the Arabian Sea. It is the tallest sculpture of Shiva in the 'Gangadhareshwara' form in India.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Azhimala_Shiva_Statue.jpg/640px-Azhimala_Shiva_Statue.jpg",
        visitorInfo: "Located near Kovalam. Best time to visit is sunset for a dramatic view of the ocean.",
        tags: ["Tallest", "Monument", "Trivandrum"]
    },
    {
        id: 30,
        title: "Conolly's Plot",
        recordType: "World's Oldest Teak Plantation",
        state: "Kerala",
        description: "Established in 1846, this is officially the oldest teak plantation in the world. It features a massive hanging bridge that visitors must cross to enter the forest.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Conollys_Plot_Nilambur.jpg/640px-Conollys_Plot_Nilambur.jpg",
        visitorInfo: "Located in Nilambur. Famous for the giant 'Kannimari' teak tree.",
        tags: ["Oldest", "Nature", "Malappuram"]
    },
    {
        id: 31,
        title: "Kuthiran Tunnel",
        recordType: "South India's First 6-Lane Tunnel",
        state: "Kerala",
        description: "A modern engineering marvel, this is Kerala's first twin-tube tunnel. It cuts through the granite rocks of the Western Ghats, reducing a dangerous mountain climb to a smooth 1-minute drive.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Kuthiran_Tunnel_Entrance.jpg/640px-Kuthiran_Tunnel_Entrance.jpg",
        visitorInfo: "Located on the Thrissur-Palakkad Highway. It is a vital trade link.",
        tags: ["First", "Engineering", "Thrissur"]
    },
    {
        id: 32,
        title: "Varkala Cliff",
        recordType: "Only Cliff on the Arabian Sea",
        state: "Kerala",
        description: "Designated as a National Geological Monument, this is the only place in southern Kerala where cliffs are found adjacent to the Arabian Sea. The rock formations are millions of years old.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Varkala_Cliff_Beach.jpg/640px-Varkala_Cliff_Beach.jpg",
        visitorInfo: "Famous for paragliding and sunset views. Located in Thiruvananthapuram district.",
        tags: ["Unique", "Nature", "Varkala"]
    }, 
    {
        id: 33,
        title: "Kolukkumalai Tea Estate",
        recordType: "World's Highest Tea Plantation",
        state: "Kerala",
        description: "Situated at 7,900 feet above sea level, this is officially the highest tea plantation in the world. The tea grown here has a special flavor because of the high altitude.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Kolukkumalai_Tea_Estate.jpg/640px-Kolukkumalai_Tea_Estate.jpg",
        visitorInfo: "Located near Munnar. Accessible only by Jeep safari. Best for sunrise.",
        tags: ["World Record", "Nature", "Munnar"]
    },
    {
        id: 34,
        title: "Kannimara Teak",
        recordType: "World's Largest Living Teak Tree",
        state: "Kerala",
        description: "Located in the Parambikulam Tiger Reserve, this giant tree is over 450 years old and has a massive girth of 6.4 meters. It is worshipped by local tribes as a holy tree.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Kannimara_Teak.jpg/640px-Kannimara_Teak.jpg",
        visitorInfo: "Located in Palakkad. Awards: Mahavriksha Puraskar by the Govt of India.",
        tags: ["World Record", "Nature", "Palakkad"]
    },
    {
        id: 35,
        title: "Puthuvype Lighthouse",
        recordType: "Kerala's Tallest Lighthouse",
        state: "Kerala",
        description: "Standing at 46 meters (150 feet), this is the actual tallest lighthouse in Kerala (taller than Thangassery). It guides ships entering the busy Kochi port.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Puthuvype_Lighthouse.jpg/640px-Puthuvype_Lighthouse.jpg",
        visitorInfo: "Located on Vypeen Island, Kochi. Open to visitors from 3 PM to 5 PM.",
        tags: ["Tallest", "Engineering", "Kochi"]
    },
    {
        id: 36,
        title: "Krishnapuram Palace",
        recordType: "Largest Mural Painting in Kerala",
        state: "Kerala",
        description: "This palace houses the 'Gajendra Moksham', which measures 14 feet by 11 feet. It is the largest single band of mural painting discovered in Kerala.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Krishnapuram_Palace.jpg/640px-Krishnapuram_Palace.jpg",
        visitorInfo: "Located in Kayamkulam (Alappuzha). A masterpiece of Kerala architecture.",
        tags: ["Largest", "Art", "Alappuzha"]
    },
    {
        id: 37,
        title: "Kuruvadweep",
        recordType: "India's Only Uninhabited River Island Cluster",
        state: "Kerala",
        description: "A protected river delta on the Kabini River, comprising a cluster of uninhabited islets. It is unique because it has no permanent human residents, only rare birds and flora.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Kuruva_Island_Wayanad.jpg/640px-Kuruva_Island_Wayanad.jpg",
        visitorInfo: "Located in Wayanad. Entry is restricted to bamboo rafts only.",
        tags: ["Unique", "Nature", "Wayanad"]
    },
    {
        id: 38,
        title: "Kuttanad",
        recordType: "India's Lowest Altitude Point",
        state: "Kerala",
        description: "Kuttanad is one of the few places in the world where farming is done 1.2 to 3.0 meters **below sea level**. It is officially the lowest point in India.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Kuttanad_Paddy_Fields.jpg/640px-Kuttanad_Paddy_Fields.jpg",
        visitorInfo: "Famous for houseboat cruises. Best time: August to March.",
        tags: ["India Record", "Nature", "Alappuzha"]
    },
    {
        id: 39,
        title: "Chail Cricket Ground",
        recordType: "World's Highest Cricket Ground",
        state: "Himachal Pradesh",
        description: "Built in 1893 by the Maharaja of Patiala, this cricket ground sits at an altitude of 2,444 meters (8,018 ft). It is the highest cricket ground in the world.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Chail_Cricket_Ground.jpg/640px-Chail_Cricket_Ground.jpg",
        visitorInfo: "Located 45km from Shimla. It is now part of the Chail Military School but tourists can view it.",
        tags: ["World Record", "Sports", "Himalayas"]
    },
    {
        id: 40,
        title: "Kailasa Temple (Ellora)",
        recordType: "World's Largest Monolithic Structure",
        state: "Maharashtra",
        description: "This massive temple was not built up from the ground, but carved *down* from a single mountain rock. It is the largest monolithic rock excavation in the world, removing 200,000 tonnes of rock.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Kailasa_temple_Ellora_caves.jpg/640px-Kailasa_temple_Ellora_caves.jpg",
        visitorInfo: "Located in Aurangabad. It is Cave 16 of the Ellora Caves. Closed on Tuesdays.",
        tags: ["World Record", "History", "Architecture"]
    },
    {
        id: 41,
        title: "Buland Darwaza",
        recordType: "World's Highest Gateway",
        state: "Uttar Pradesh",
        description: "The 'Door of Victory' was built by Emperor Akbar in 1602. Standing at 54 meters (177 ft), it is recognized as the highest gateway in the world.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Buland_Darwaza_Fatehpur_Sikri.jpg/640px-Buland_Darwaza_Fatehpur_Sikri.jpg",
        visitorInfo: "Located in Fatehpur Sikri, near Agra. Best time to visit is sunrise or sunset.",
        tags: ["World Record", "History", "Mughal"]
    },
    {
        id: 42,
        title: "Ramanathaswamy Corridor",
        recordType: "World's Longest Temple Corridor",
        state: "Tamil Nadu",
        description: "The corridor of this temple in Rameswaram is the longest in the world, stretching 197 meters East-West and 133 meters North-South. It has over 1,200 carved granite pillars.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Rameswaram_Temple_Corridor.jpg/640px-Rameswaram_Temple_Corridor.jpg",
        visitorInfo: "Located in Rameswaram island. One of the Char Dham pilgrimage sites.",
        tags: ["World Record", "Architecture", "Spiritual"]
    },
    {
        id: 43,
        title: "Tehri Dam",
        recordType: "India's Tallest Dam",
        state: "Uttarakhand",
        description: "Standing at a staggering 260.5 meters (855 ft), Tehri Dam is the tallest dam in India and one of the highest in the world. It holds back the massive Bhagirathi River.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Tehri_Dam_Uttarakhand.jpg/640px-Tehri_Dam_Uttarakhand.jpg",
        visitorInfo: "Located in New Tehri. Adventure sports like jet skiing are available in the reservoir.",
        tags: ["Tallest", "Engineering", "Himalayas"]
    },
    {
        id: 44,
        title: "Gol Gumbaz",
        recordType: "World's Second Largest Dome",
        state: "Karnataka",
        description: "This mausoleum features a massive dome that stands without any pillar support. It is famous for its 'Whispering Gallery' where even a pin drop can be heard 37 meters away.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Gol_Gumbaz_Bijapur.jpg/640px-Gol_Gumbaz_Bijapur.jpg",
        visitorInfo: "Located in Vijayapura (Bijapur). Open 6 AM - 6 PM.",
        tags: ["Largest", "Acoustics", "History"]
    },
    {
        id: 45,
        title: "Mawsynram",
        recordType: "Wettest Place on Earth",
        state: "Meghalaya",
        description: "Recognized by Guinness World Records, Mawsynram receives the highest average annual rainfall on the planet (approx 11,872 mm). The unique stalagmite caves here are formed by the constant rain.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Mawsynram_Cave.jpg/640px-Mawsynram_Cave.jpg",
        visitorInfo: "Best time: Sept-Nov (Just after monsoon). Avoid peak monsoon (June-Aug) as travel is dangerous.",
        tags: ["World Record", "Nature", "North East"]
    },
    {
        id: 46,
        title: "Atal Tunnel",
        recordType: "World's Longest Highway Tunnel (>10k ft)",
        state: "Himachal Pradesh",
        description: "At 9.02 km long, this engineering marvel is the longest highway tunnel in the world located above 10,000 feet. It connects Manali to Lahaul-Spiti Valley all year round.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Atal_Tunnel_North_Portal.jpg/640px-Atal_Tunnel_North_Portal.jpg",
        visitorInfo: "Located near Manali. A permit is sometimes required for vehicles.",
        tags: ["World Record", "Engineering", "Himalayas"]
    },
    {
        id: 47,
        title: "Ramoji Film City",
        recordType: "World's Largest Film Studio Complex",
        state: "Telangana",
        description: "Certified by Guinness World Records, this film city covers 1,666 acres. It is larger than Hollywood's major studios and can handle 20 film productions simultaneously.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Ramoji_Film_City_Entrance.jpg/640px-Ramoji_Film_City_Entrance.jpg",
        visitorInfo: "Located in Hyderabad. Requires a full day to explore. Ticketed entry.",
        tags: ["World Record", "Movies", "Hyderabad"]
    },
    {
        id: 48,
        title: "The Great Banyan Tree",
        recordType: "World's Widest Tree Canopy",
        state: "West Bengal",
        description: "Located in the Acharya Jagadish Chandra Bose Indian Botanic Garden, this single tree is over 250 years old and looks like a forest. Its canopy covers 3.5 acres.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Great_Banyan_Tree.jpg/640px-Great_Banyan_Tree.jpg",
        visitorInfo: "Located in Howrah, Kolkata. The main trunk was removed in 1925, but the tree lives on!",
        tags: ["World Record", "Nature", "Kolkata"]
    },
    {
        id: 49,
        title: "Keibul Lamjao National Park",
        recordType: "World's Only Floating National Park",
        state: "Manipur",
        description: "This park floats on Loktak Lake. It is made of 'Phumdis' (decomposing floating biomass) and is the only home of the Sangai (dancing deer).",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Loktak_Lake_Manipur.jpg/640px-Loktak_Lake_Manipur.jpg",
        visitorInfo: "Best time: Oct-Apr. Boating through the floating grass is a unique experience.",
        tags: ["World Record", "Nature", "North East"]
    },
    {
        id: 50,
        title: "Dhola-Sadiya Bridge",
        recordType: "India's Longest River Bridge",
        state: "Assam",
        description: "Spanning 9.15 km over the Lohit River, the Bhupen Hazarika Setu is the longest bridge in India over water. It connects Assam and Arunachal Pradesh.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Dhola_Sadiya_Bridge.jpg/640px-Dhola_Sadiya_Bridge.jpg",
        visitorInfo: "Vital for military and civilians. Offers stunning views of the Brahmaputra river system.",
        tags: ["Longest", "Engineering", "Assam"]
    },
    {
        id: 51,
        title: "Statue of Belief",
        recordType: "World's Tallest Shiva Statue",
        state: "Rajasthan",
        description: "Standing at 369 feet (112 meters), 'Vishwas Swaroopam' in Nathdwara is the tallest statue of Lord Shiva in the world. It is visible from 20km away.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Statue_of_Belief_Nathdwara.jpg/640px-Statue_of_Belief_Nathdwara.jpg",
        visitorInfo: "Located in Nathdwara. Features a glass viewing deck at 280 feet.",
        tags: ["World Record", "Statue", "Rajasthan"]
    },
    {
        id: 52,
        title: "Lakshmi Vilas Palace",
        recordType: "Largest Private Residence in India",
        state: "Gujarat",
        description: "Four times the size of Buckingham Palace, this is one of the largest private dwellings built. It features modern amenities like elevators (in 1890!) and a golf course.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Laxmi_Vilas_Palace_Vadodara.jpg/640px-Laxmi_Vilas_Palace_Vadodara.jpg",
        visitorInfo: "Located in Vadodara. Audio guided tours are available for tourists.",
        tags: ["Largest", "Palace", "Architecture"]
    },
    {
        id: 53,
        title: "Kunchikal Falls",
        recordType: "India's Highest Waterfall",
        state: "Karnataka",
        description: "Cascading from a height of 455 meters (1,493 ft), Kunchikal is the highest waterfall in India. It is formed by the Varahi River cutting through the Western Ghats.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Kunchikal_Falls.jpg/640px-Kunchikal_Falls.jpg",
        visitorInfo: "Located in Shimoga district. Access is restricted due to a hydroelectric plant; requires permission.",
        tags: ["Highest", "Nature", "Karnataka"]
    },
    {
        id: 54,
        title: "Sri Ranganathaswamy Temple",
        recordType: "World's Largest Functioning Hindu Temple",
        state: "Tamil Nadu",
        description: "Covering 156 acres, this temple complex in Srirangam is often cited as the largest functioning Hindu temple in the world. It has 21 massive towers (Gopurams).",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Srirangam_Temple_Tower.jpg/640px-Srirangam_Temple_Tower.jpg",
        visitorInfo: "Located in Tiruchirappalli. The Rajagopuram (main tower) is 239 ft tall.",
        tags: ["Largest", "Spiritual", "Architecture"]
    },
    {
        id: 55,
        title: "Sundarbans",
        recordType: "World's Largest Mangrove Forest",
        state: "West Bengal",
        description: "A UNESCO World Heritage site, this massive delta is the largest mangrove forest in the world and the only mangrove inhabited by tigers.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Sundarbans_Boat.jpg/640px-Sundarbans_Boat.jpg",
        visitorInfo: "Accessible only by boat. Best time: Sept-Mar for tiger spotting.",
        tags: ["World Record", "Nature", "Tiger"]
    },
    {
        id: 56,
        title: "Lonar Crater Lake",
        recordType: "World's Only Basaltic Impact Crater",
        state: "Maharashtra",
        description: "Created by a meteor impact 50,000 years ago, this is the only hyper-velocity impact crater in basalt rock on Earth. The water is both saline and alkaline.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Lonar_Lake_Maharashtra.jpg/640px-Lonar_Lake_Maharashtra.jpg",
        visitorInfo: "Located in Buldhana district. The lake turns pink sometimes due to algae.",
        tags: ["World Record", "Space", "Nature"]
    },
    {
        id: 57,
        title: "Chittorgarh Fort",
        recordType: "India's Largest Fort",
        state: "Rajasthan",
        description: "Spanning 700 acres, this UNESCO World Heritage site is the largest fort in India. It famously had 84 water bodies, of which 22 survive today.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Chittorgarh_Fort_Aerial.jpg/640px-Chittorgarh_Fort_Aerial.jpg",
        visitorInfo: "Best explored by hiring an auto or bike inside the fort due to its size.",
        tags: ["Largest", "History", "Rajasthan"]
    },
    {
        id: 58,
        title: "Nalanda University",
        recordType: "World's First Residential University",
        state: "Bihar",
        description: "Founded in 427 CE, Nalanda was the first residential university in the world, hosting over 10,000 students and 2,000 teachers from across Asia before it was destroyed.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Nalanda_Ruins.jpg/640px-Nalanda_Ruins.jpg",
        visitorInfo: "A UNESCO World Heritage site. Located near Patna.",
        tags: ["First", "History", "Education"]
    },
    {
        id: 59,
        title: "Barren Island",
        recordType: "South Asia's Only Active Volcano",
        state: "Andaman & Nicobar",
        description: "Located in the Andaman Sea, this is the only confirmed active volcano in South Asia. It last erupted in 2017.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Barren_Island_Volcano.jpg/640px-Barren_Island_Volcano.jpg",
        visitorInfo: "Visitors cannot land on the island. Can be viewed from a ship/ferry.",
        tags: ["Unique", "Nature", "Volcano"]
    },
    {
        id: 60,
        title: "Tawang Monastery",
        recordType: "India's Largest Monastery",
        state: "Arunachal Pradesh",
        description: "This is the largest monastery in India and the second largest in the world (after Lhasa). It sits on a mountain ridge at 10,000 feet.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Tawang_Monastery.jpg/640px-Tawang_Monastery.jpg",
        visitorInfo: "Requires an Inner Line Permit (ILP) to visit Arunachal Pradesh.",
        tags: ["Largest", "Spiritual", "Himalayas"]
    },
    {
        id: 61,
        title: "Rann of Kutch",
        recordType: "World's Largest Salt Desert",
        state: "Gujarat",
        description: "A vast expanse of white salt that stretches as far as the eye can see. During monsoon, it is submerged; in winter, it becomes a solid white desert.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Rann_of_Kutch_White_Desert.jpg/640px-Rann_of_Kutch_White_Desert.jpg",
        visitorInfo: "Famous for the Rann Utsav (Nov-Feb). Best seen on Full Moon nights.",
        tags: ["World Record", "Nature", "White Desert"]
    },
    {
        id: 62,
        title: "Belum Caves",
        recordType: "Second Longest Caves in India",
        state: "Andhra Pradesh",
        description: "Stretching 3.2 km, these underground caves are famous for their unique stalactite formations. It is the longest cave system open to the public in India.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Belum_Caves_Inside.jpg/640px-Belum_Caves_Inside.jpg",
        visitorInfo: "Located in Kurnool. The 'Patalaganga' is an underground stream found here.",
        tags: ["Longest", "Nature", "Adventure"]
    },
    {
        id: 63,
        title: "Bandra-Worli Sea Link",
        recordType: "India's First Open Sea Bridge",
        state: "Maharashtra",
        description: "An engineering marvel that spans the Arabian Sea, connecting Bandra and Worli. Its cable-stayed towers are as high as a 40-story building.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Bandra_Worli_Sea_Link_Night.jpg/640px-Bandra_Worli_Sea_Link_Night.jpg",
        visitorInfo: "Toll road. Best viewed from the Bandra Fort viewpoint.",
        tags: ["First", "Engineering", "Mumbai"]
    },
    {
        id: 64,
        title: "Lotus Temple",
        recordType: "Most Visited Religious Building (2001 Record)",
        state: "Delhi",
        description: "Shaped like a lotus flower with 27 free-standing marble petals, this Bahá'í House of Worship has won numerous architectural awards and attracts more visitors than the Taj Mahal.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Lotus_Temple_Delhi.jpg/640px-Lotus_Temple_Delhi.jpg",
        visitorInfo: "Open to all religions for silent prayer. Closed on Mondays.",
        tags: ["Famous", "Architecture", "Delhi"]
    }

];