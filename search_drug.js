function search_call()
{
    let drug_name = document.getElementById("drug_name"); 
    window.location.href = "https://www.drugs.com/search.php?searchterm="+drug_name.value;
}
