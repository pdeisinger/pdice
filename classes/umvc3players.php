<?php
    $q = $_GET['q'];
    $conn = pg_connect("dbname=phil.deisinger");
    if (!$con) {
        echo "An conn error occurred.\n";
        exit;
    }
    //Needs functionality to ignore case
    $sql = "SELECT * FROM umvc3players
              WHERE tag LIKE '%$q%'";
    $result = pg_query($conn, $sql);
    if (!$result) {
        echo "An error occurred.\n";
        exit;
    }
    $playerNum = 1;
    echo    "<table>
                <tr>
                <th>Players</th>
                </tr>";
    
    while ($arr = pg_fetch_array($result)) {
        echo "<tr>";
        echo "<td>" . $playerNum . ". " . $arr['tag'] . "</td>";
        echo "</tr>";
        $playerNum++;
    }

    pg_close($conn);
?>