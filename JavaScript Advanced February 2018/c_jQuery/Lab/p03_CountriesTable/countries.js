function initializeTable() {
    $("#createLink").click(createCountry);
    addCountryToTable("Bulgaria", "Sofia");
    addCountryToTable("Germany", "Berlin");
    addCountryToTable("Russia", "Moscow");

    fixRowLinks();

    function addCountryToTable(country, capital) {
        let row = $('<tr>')
            .append($('<td>').text(country))
            .append($('<td>').text(capital))
            .append($('<td>')
                .append($("<a href='#'>[Up] </a>").click(moveRowUp))
                .append($("<a href='#'>[Down] </a>").click(moveRowDown))
                .append($("<a href='#'>[Delete] </a>").click(deleteRow)))
        $(row).css('display', 'none');
        $("#countriesTable").append(row);
        row.fadeIn();
    }

    function createCountry() {
        let country = $('#newCountryText').val();
        let capital = $('#newCapitalText').val();
        
        addCountryToTable(country, capital);
        $('#newCountryText').val('');
        $('#newCapitalText').val('');
        fixRowLinks();
    }

    function moveRowUp() {
        let row = $(this).parent().parent();

        row.fadeOut(function () {
            row.insertBefore(row.prev());
            row.fadeIn();
            fixRowLinks();
        });
    }

    function moveRowDown() {
        let row = $(this).parent().parent();

        row.fadeOut(function () {
            row.insertAfter(row.next());
            row.fadeIn();
            fixRowLinks();
        });
    }

    function deleteRow() {
        let row = $(this).parent().parent();

        row.fadeOut(function () {
            row.remove();
            fixRowLinks();
        });
    }

    function fixRowLinks() {
        $('#countriesTable a').css('display', 'inline');

        //Hide first row Up button
        let tableRows = $('#countriesTable tr');
        $(tableRows[2]).find("a:contains('Up')")
            .css('display', 'none');

        //Hide last row Down button
        $(tableRows[tableRows.length - 1]).find("a:contains('Down')")
            .css('display', 'none');
    }

}