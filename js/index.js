var getnasa = new Vue( {
    el: '#out',
    data( ) {
        return {
            daily: null,
            reqdate: null
        }
    },
    methods: {
        requestCustom: function (event) {
            axios
            .get( 'https://api.nasa.gov/planetary/apod?api_key=a6HJxsA1ICa0rvd6CHrNfdwNZxEpH2ffmpn4lW33&date=' + this.reqdate )
            .then( response => ( this.daily = response ) )
        }
    },
    mounted( ) {
        axios
            .get( 'https://api.nasa.gov/planetary/apod?api_key=a6HJxsA1ICa0rvd6CHrNfdwNZxEpH2ffmpn4lW33' )
            .then( response => ( this.daily = response ) )
    }
} )