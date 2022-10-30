new Vue({
    el: "#app",
    data: {
        allLetterData: "aaa",

    },
    //시작 전 로딩
    mounted: async function() {
        await this.getAllData();
    },
    methods: {
        // 전체데이터 조회
        getAllData: async function() {
            this.allLetterData = await axios.get("http://13.209.184.10:8080/api/letter")
                .then(function(res) {
                    console.log(res);
                    return res.data;
                });

        },


    },


});
