<?php

//$dsn = 'mysql:dbname=oskarilehtonen;host=127.0.0.1';
//$user = 'oskarileh';
//$password = 'dbpass';

	$pdo = new PDO('mysql:host=localhost;dbname=oskarilehtonen', 'oskarileh', 'Mkw94w1!');
   
$statement = $pdo->prepare("SELECT * FROM 200m");
$statement->execute();
$results = $statement->fetchAll(PDO::FETCH_ASSOC);
$json = json_encode($results);
echo $json

//	foreach ($myPDO->query("SELECT * FROM 200m") as $row) {
	//	print $row['result'] . "\t";
	//	print $row['field'] . "\t";
	//	print $row['place'] . "\t";
	//	print $row['wind'] . "\t";
	//	print $row['date'] . "\n";
//	}

   // $myPDO = new PDO('mysql:dbname=oskarilehtonen;host=www01.digiworks.fi', 'oskarileh', '0Bi1%2tj');
    //$result = $myPDO->query("SELECT * FROM 100m");

	/*
$mysqli = new mysqli("localhost", "oskarileh", "Mkw94w1!", "oskarilehtonen");
if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}
echo $mysqli->host_info . "\n";
*/
/*
$mysqli = new mysqli("www01.digiworks.fi", "oskarileh", "0Bi1%2tj", "oskarilehtonen");
if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}

echo $mysqli->host_info . "\n";
*/
/*
<DOCTYPE html>
<html>
<head>
</head>
<body>
	<h1>Helo</h1>
	
	
</body>	
</html>

*/
?>


	
