<?php
$servername = "localhost";
$username = "admin_dictionar";
$password = "Alexandru&Teodora2022";
$dbname = "dictionar";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
$sql = "SELECT * FROM words ORDER BY word DESC";
$result = $conn->query($sql);
echo '<pre>';
	var_dump($result);
echo '</pre>';
if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
	if ($_REQUEST['word_input'] === $row["word"]) {
	$worddescriptionphp = $row["worddescription"];
	echo $_REQUEST['word_input'].'='.$worddescriptionphp;
	$_POST['word_description'] = $worddescriptionphp;
	header("Location: http://dictionar.ungheni.net/");
	exit();
	}
  }
} else {
  echo "0 results";
}


$conn->close();
?>