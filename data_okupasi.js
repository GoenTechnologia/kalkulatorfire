/* * DATA OKUPASI & RATE FLEXAS (REVISI FINAL)
 * Sumber: Attachment I - Occupation & Rate OJK
 * Aturan: Kolom pertama setelah Kode = Tarif Bawah (digunakan sebagai rate).
 */

const occupationData = [
    { code: "2976", rate: 0.02940, name: "Dwelling houses not classified as shop houses (ruko) not exceeding 3 storeys" },
    { code: "29761", rate: 0.04780, name: "Dwelling house for boarding house/kos-kosan" },
    { code: "2934", rate: 0.15200, name: "Shops, non chain store" },
    { code: "2945", rate: 0.14790, name: "Restaurants, eating and drinking places, (permanent building)" }, // Kolom 1
    { code: "2947", rate: 0.07810, name: "Beauty salon/ Hair dresser/Barber shops" }, // Kolom 1
    { code: "2930", rate: 0.08890, name: "Dispensaries (apotik)" },
    { code: "2928", rate: 0.06450, name: "Sentral Telecommunication Otomat (STO) dan warung pos/telekomunikasi (wartel)" },
    { code: "29395", rate: 0.15200, name: "Show Rooms (Permanent Show Rooms without Repair / Workshop) for New Motor Cars, Electronic Goods..." }, // Kolom 1
    { code: "29432", rate: 0.08860, name: "Sport Stadium, Sport Centres, Fitness Centres, Gymns and the like" }, // Kolom 1
    { code: "2904", rate: 0.23540, name: "Aerial railways/ropeways, funicular railways, chairlifts" }, // Kolom 1
    { code: "2991", rate: 0.05850, name: "Buildings in course of construction (rate to be applied againts FULL VALUE of completed building)" },
    { code: "3130", rate: 0.62150, name: "Cengkeh dan rempah- rempah" },
    { code: "3010", rate: 0.13190, name: "Coklat" },
    { code: "3120", rate: 0.75500, name: "Damar dan terpentin" },
    { code: "2977", rate: 0.14480, name: "Dwelling houses buildings floating on the river/sea shore (regardless of constructional class)" }, // Kolom 1
    { code: "3180", rate: 0.58300, name: "Gambir, barang-barang ditempat terbuka" },
    { code: "3090", rate: 0.30000, name: "Gula bibit" }, // Kolom 1
    { code: "2902", rate: 0.04730, name: "Highways, briges, airport runways" },
    { code: "3060", rate: 0.66700, name: "Kapok" },
    { code: "3160", rate: 0.09900, name: "Kelapa sawit" },
    { code: "3000", rate: 0.43000, name: "Kina" },
    { code: "3031", rate: 0.25400, name: "Kopi tanpa rumah pengeringan" }, // Kolom 1
    { code: "2491", rate: 0.28000, name: "Laundries and pressers" },
    { code: "2762", rate: 0.90000, name: "Maltings" }, // Kolom 1
    { code: "2983", rate: 0.21540, name: "Military Barracks" }, // Kolom 1
    { code: "3050", rate: 0.46500, name: "Minyak sereh" }, // Kolom 1
    { code: "2963", rate: 0.09500, name: "Motor vehicle service stations only without bodyrepair etc., (refer to code 2961)" },
    { code: "2954", rate: 0.02600, name: "Museums" },
    { code: "2233", rate: 0.06180, name: "Nails, screws, bolts and nuts factories" },
    { code: "2984", rate: 0.22530, name: "Others" },
    { code: "3140", rate: 0.62000, name: "Padi, tanpa pengerjaan termasuk padi di tempat terbuka" },
    { code: "3100", rate: 0.62000, name: "Perkebunan serat, serat campuran dan kapok yang belum terproses" },
    { code: "2982", rate: 0.05510, name: "Police barracks and police stations" },
    { code: "2955", rate: 0.08530, name: "Psychiatric clinics" },
    { code: "2981", rate: 0.05930, name: "Public buildings" },
    { code: "2901", rate: 0.02500, name: "Railways, tramways" },
    { code: "2952", rate: 0.03520, name: "Religious facilities such as mosques, temples, churches, convents and the like" },
    { code: "2951", rate: 0.03780, name: "Sanatorium, hospitals, doctor's consulting rooms, old people's and children's homes" },
    { code: "2953", rate: 0.03860, name: "Schools, universities and training colleges" },
    { code: "29431", rate: 0.07530, name: "Swimming Pools or Complex of Swimming Pools not forming part of Recreation Centre or Hotel" },
    { code: "2763", rate: 0.12770, name: "Tea sheds and tea factories" },
    { code: "3040", rate: 0.07400, name: "Teh" },
    { code: "3170", rate: 0.13240, name: "Tembakau" },
    { code: "23002", rate: 0.09840, name: "Pharmaceutical Products Factories and Medicated Plaster" },
    { code: "23003", rate: 0.11880, name: "Natural Drug (Jamu)" },
    { code: "2733", rate: 0.04650, name: "Soya bean, tomato and hot pepper sauce" },
    { code: "2751", rate: 0.05840, name: "Dairies and Dairy Products, including fresh milk, UHT milk, yogurt, ice cream, cheese, butter, etc" },
    { code: "27113", rate: 0.06860, name: "Chocolate and Sweets Factories" },
    { code: "2722", rate: 0.07130, name: "Bakeries and biscuit works" },
    { code: "2761", rate: 0.08020, name: "Coffee roasting plants and other roasting plants, coffee extract factories, coffee sorting..." },
    { code: "2782", rate: 0.08800, name: "Producers of wines, fruit juices and mineral water" },
    { code: "2732", rate: 0.09230, name: "Meat, meat products and fish products factories" },
    { code: "2771", rate: 0.09230, name: "Cold stores and ice factories" },
    { code: "2971", rate: 0.03680, name: "Apartments/condominiums, offices, multi-storeyed car parks not exceeding 6 storeys" },
    { code: "2973", rate: 0.03760, name: "Apartments/condominiums, offices, multi-storeyed car parks exceeding 18 storeys" },
    { code: "2972", rate: 0.03850, name: "Apartments/condominiums, offices, multi-storeyed car parks exceeding 6 storeys up to 18 storeys" },
    { code: "2975", rate: 0.04550, name: "Apartments/condominiums, offices, multi-storeyed car parks -exceeding 24 storeys" },
    { code: "2974", rate: 0.04780, name: "Convention halls and other multi purpose buildings (but excluding exhibition)" },
    { code: "29412", rate: 0.04830, name: "Hotels, motels, inns and the like (certified as 3 star and above)" },
    { code: "2922", rate: 0.05160, name: "Film reproduction (prints) and photo treatment" },
    { code: "2923", rate: 0.06020, name: "Cinemas, assembly rooms and concert halls" },
    { code: "29433", rate: 0.06200, name: "Private (member only) Club House and Golf Club Houses" },
    { code: "29312", rate: 0.07600, name: "Supermarket, building risk area > 200m2. If below 200m2 go to 2933" },
    { code: "29411", rate: 0.08860, name: "Hotels, motels, inns and the like (certified below 3 star classification)" },
    { code: "2964", rate: 0.09810, name: "Motor vehicle pools without any body repair" },
    { code: "2921", rate: 0.09820, name: "Film television and recording on magnetic tape studios" },
    { code: "29311", rate: 0.10280, name: "Department stores, building risk area > 200m2. If below 200m2 go to 2934" },
    { code: "2978", rate: 0.11380, name: "Independent analytical laboratories" },
    { code: "2933", rate: 0.24740, name: "Chain Stores, convenience store, grocery store, with building risk area <200m2" } // Kolom 1
];