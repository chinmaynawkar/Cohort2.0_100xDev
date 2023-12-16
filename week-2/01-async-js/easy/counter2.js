let no = 0;

function withoutSetInterval() {
    setTimeout(() => {
        counter();
    },1000);
}
    function counter() {
        no++;
        console.log(no);
        withoutSetInterval();
    }
        counter();
