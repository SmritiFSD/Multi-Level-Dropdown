/*=============== 
First Program
*
* *
* * *
* * * *
* * * * *
* * * * *
* * * *
* * *
* *
*
================*/
// start----------------------
function starpattern() {
  let i, j;
  for (i = 1; i <= 4; i++) {
    for (j = 1; j <= i; j++) {
      document.write("* &nbsp;&nbsp;");
    }
    document.write("<br>");
  }
  document.write("<br>");
  for (i = 1; i <= 4; i++) {
    for (j = 4; j >= i; j--) {
      document.write("* &nbsp;&nbsp;");
    }
    document.write("<br>");
  }
  document.write("<br>");
}
starpattern();
// end----------------------
/*=======================
Second Program
*
*
* *
* *
* * *
* * *
* *
* *
*
* 
=========================*/
// start----------------------
function starpatterntwo() {
  let i, j;
  for (i = 1; i <= 3; i++) {
    for (j = 1; j <= i; j++) {
      document.write("* &nbsp;&nbsp;");
    }
    document.write("<br>");
    if (i < 3) {
      for (j = 1; j <= i; j++) {
        document.write("* &nbsp;&nbsp;");
      }
      document.write("<br>");
    }
  }
  document.write("<br>");
  for (i = 1; i <= 3; i++) {
    for (j = 3; j >= i; j--) {
      document.write("* &nbsp;&nbsp;");
    }
    document.write("<br>");
    if (i < 3) {
      for (j = 2; j >= i; j--) {
        document.write("* &nbsp;&nbsp;");
      }
      document.write("<br>");
    }
  }
}
starpatterntwo();
// end-----------------------------
