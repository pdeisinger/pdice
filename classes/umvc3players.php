<?php
    //This entire class could likely be players.php.  Getting the page for the variable to select what Table to pull from
    $tag = $_GET['tag'];
    $conn = new PDO('pgsql:host=localhost;dbname=phil.deisinger');
    if (!$conn) {
        echo "A conn error occurred.\n";
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
    echo "</table>";

    pg_close($conn);
?>