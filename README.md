# IndianKefirCompanyBE




Products 
    - probiotics ( id: 10 )

        - kambucha ( id: 1010 )
            - Apple Cinnamon ( id: 10101 )
            - Tulsi Ginger ( id: 10102 )
            - Black Current ( id: 10103 )
            - Orange ( id: 10104)

        - kefir ( id: 1020 )
            - Mango ( id: 10201 )
            - Cranberry ( id: 10202 )
            - Fennel ( id: 10203 )
            - Mojito ( id: 10204 )

        - Sauerkraut ( id: 1030 )
            - Cabbage Beetroot ( id: 10301 )

    - organic ( id: 20 )
        - Gluten Free Milets ( id: 2010 )
        - Cold pressed oil ( id: 2020 )

----- QUESTION 1 ------
Added parent category id and name in child dataset 
not sure if its required or not as the complete list can be fetched using parent category id 
example:

all probiotics items can be fetched with 10*
all organic items can be fetched with 20*


all kambucha items can be fetched with 1010*
all kefir items can be fetched with 1020*
all Sauerkraut items can be fetched with 1030*

----- QUESTION 2 -----
Shall insert items in category itself ? such as all probitocs in one json file including kambucha, kefir and sauerkraut
one json with category details and products attribute with item object arrays ???
