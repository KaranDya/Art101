function main() {
    let myButton = document.getElementById("activate");
    myButton.addEventListener("click", function() {

        // Using the core $.ajax() method
        $.ajax({
            // Correct API URL
            url: "https://api.chucknorris.io/jokes/random",
            
            type: "GET",
            
            data: "json",   
            // Expected data type from the API
            dataType: "json",
            // What to do on success
            success: function(data) {
                // Assuming the data has a `value` field that contains 'yes' or 'no'
                $("#jokes").html(JSON.stringify(data.value)); // Display the answer
                console.log(data); // Log the full response for debugging
            },
            // What to do on error
            error: function(jqXHR, textStatus, errorThrown) {
                console.log("Error:", textStatus, errorThrown);
            }
        });
    });
}
main();