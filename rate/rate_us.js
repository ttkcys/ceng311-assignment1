$(document).ready(function() {
    var ratedIndex = -1;

    $('#rating-area .fas').on('mouseover', function() {
        var currentIndex = parseInt($(this).data('index'));
        setStars(currentIndex);
    });

    $('#rating-area .fas').on('mouseout', function() {
        setStars(ratedIndex);
    });

    $('#rating-area .fas').on('click', function() {
        ratedIndex = parseInt($(this).data('index'));
        setStars(ratedIndex);
        $('#myModal').fadeIn();
    });

    function setStars(max) {
        $('#rating-area .fas').each(function(index) {
            if (index <= max) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });
    }

    $('.close').click(function() {
        $('#myModal').fadeOut();
    });

    window.onclick = function(event) {
        if (event.target == modal) {
            $('#myModal').fadeOut();
        }
    }
});
