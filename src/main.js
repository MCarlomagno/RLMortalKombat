(function () {

    function $(id) {
        return document.getElementById(id);
    }

    function setLife(container, life) {
        container.style.width = life + '%';
    }

    document.onkeydown = function (e) {
        // space
        if (e.keyCode === 32) {
            window.location.reload();
        }
    };

    (function () {
        
        var startGame = function () {
            $('loading').style.visibility = 'hidden';
            $('arena').style.visibility = 'visible';
            $('utils').style.visibility = 'visible';
        };
        
        var options = {
            arena: {
                container: document.getElementById('arena'),
                arena: mk.arenas.types.THRONE_ROOM
            },
            fighters: [{ name: 'Subzero' }, { name: 'Kano' }],
            callbacks: {
                attack: function (f, o, l) {
                    if (o.getName() === 'kano') {
                        setLife($('player2Life'), o.getLife());
                    } else {
                        setLife($('player1Life'), o.getLife());
                    }
                }

            },
            gameType: 'multiplayer'
        };

        function startNewGame() {
            mk.start(options).ready(function () {
                startGame();
            });
        }
        
        startNewGame();
        
    }());

}());