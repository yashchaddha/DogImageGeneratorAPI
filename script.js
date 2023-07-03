var dropdown=$('#dog-breeds');
var dogImage=$('#breed-image');
var breed;

//Get all the breeds to populate the dropdown
$.get('https://dog.ceo/api/breeds/list/all',function(data){
    let dogBreeds=data.message;
    for (let breed in dogBreeds){
        console.log(breed);
        dropdown.append('<option value="'+breed+'">'+ breed + '</option>')
    }
});

$('#get-image').click(function(e){
    breed=dropdown.val();
    displayImage(breed);
});

$('#next').click(function(event){
    breed=dropdown.val();
    displayImage(breed);
})


function displayImage(x){
    let url='https://dog.ceo/api/breed/'+breed+'/images/random';
    $.get(
        url,
        function(d){
            console.log(d.message);
            dogImage.attr('src',d.message);
        }
    );
}
