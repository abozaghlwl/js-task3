function fun() {
    let m =  document.getElementById("test1").value;
    let est =parseInt(document.getElementById("test2").value) ;
    let nb = parseInt(document.getElementById("test3").value) ;
    let ng = parseInt(document.getElementById("test4").value) ;
    if (m == "yes") {
        let q = est - (est / 8)
        document.write("rigt of wife is " + est / 8)
        document.write("<br>")
        let rb = q / ((.5 * ng) + nb)
        document.write("right of every boy is " + rb)
        document.write("<br>")
        let rg = q / (ng + 2 * nb)
        document.write("right of every girl is " + rg)
    }
    else {
        let rb = est / ((.5 * ng) + nb)
        document.write("right of every boy is " + rb)
        document.write("<br>")
        let rg = est / (ng + (2 * nb))
        document.write("right of every girl is " + rg)
    }
}