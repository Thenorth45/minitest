const dataContainer = document.getElementById("data-container");

fetch('https://covid19.ddc.moph.go.th/api/Cases/today-cases-all')
    .then(response => response.json())
    .then(data => {
        data.forEach(post => {
            console.log(post);
            const postElement = document.createElement("p");
            postElement.textContent = `
            Year: ${post.year}//
            Weeknum: ${post.weeknum}//
            Newcase: ${post.new_case}//
            Totalcase: ${post.total_case}//
            Newcase excludeabroad: ${post.new_case_excludeabroad}//
            Totalcase excludeabroad: ${post.total_case_excludeabroad}//
            Newrecovered: ${post.new_recovered}//
            Total recovered: ${post.total_recovered}//
            New death: ${post.new_death}//
            Total death: ${post.total_death}//
            Case foreign: ${post.case_foreign}//
            Case prison: ${post.case_prison}//
            Case walkin: ${post.case_walkin}//
            Case new prev: ${post.case_new_prev}//
            Case new diff: ${post.case_new_diff}//
            Death new prev: ${post.death_new_prev}//
            Death new diff: ${post.death_new_diff}//
            Update date: ${post.update_date} `;

            dataContainer.appendChild(postElement);
        });
    })