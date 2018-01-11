function init() {
    var elements = document.getElementsByTagName('h2');
    for (var element of elements) {
        element.onclick = click(element);

        var name = element.getAttribute('name')
        var section = document.getElementById(name);
        section.style.display = 'none'
    }
}

function click(element) {
    return () => {
        var name = element.getAttribute('name')
        var section = document.getElementById(name);
        if (section.style.display === 'none')
            section.style.display = ''
        else
            section.style.display = 'none'
    }
}